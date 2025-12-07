// NEW: EMI Payments & Tracking page
import Sidebar from "../components/Sidebar";
import { useEmi } from "../context/EmiContext";
import { useState, useMemo } from "react";
import { toast } from "react-toastify";

export default function EmiPayments() {
  const { emiData, markEmiAsPaid } = useEmi();

  const [statusFilter, setStatusFilter] = useState("All"); // All | Paid | Pending | Overdue
  const [searchText, setSearchText] = useState("");
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Derived summary values
  const paidCount = emiData.filter((e) => e.status === "Paid").length;
  const pendingCount = emiData.filter((e) => e.status === "Pending").length;
  const overdueCount = emiData.filter((e) => e.status === "Overdue").length;

  // Upcoming EMI = first Pending/Overdue by date
  const upcomingEmi = useMemo(() => {
    const filtered = emiData
      .filter((e) => e.status === "Pending" || e.status === "Overdue")
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    return filtered[0] || null;
  }, [emiData]);

  // Filter + Search
  const filteredEmis = useMemo(() => {
    return emiData.filter((emi) => {
      const matchesStatus =
        statusFilter === "All" ? true : emi.status === statusFilter;
      const query = searchText.toLowerCase();
      const matchesSearch =
        emi.id.toLowerCase().includes(query) ||
        emi.loanId.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [emiData, statusFilter, searchText]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredEmis.length / itemsPerPage));
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedEmis = filteredEmis.slice(start, start + itemsPerPage);

  const handlePayNow = (emi) => {
    setSelectedEmi(emi);
  };

  const handleConfirmPayment = () => {
    if (!selectedEmi) {
      return toast.error("Select an EMI to pay.");
    }
    if (selectedEmi.status === "Paid") {
      return toast.info("This EMI is already paid.");
    }

    markEmiAsPaid(selectedEmi.id);
    toast.success(`Payment successful for ${selectedEmi.id} via ${paymentMethod}.`);
  };

  const handleDownloadReceipt = (emi) => {
    const content = `
      EMI Receipt
      -----------
      EMI ID: ${emi.id}
      Loan ID: ${emi.loanId}
      Amount Paid: ₹${emi.amount}
      Status: ${emi.status}
      Paid Via: ${paymentMethod}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${emi.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              EMI Payments & Tracking
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              View and manage EMIs across your approved loans in one place.
            </p>
          </div>
          <button className="text-sm text-gray-600 border px-3 py-2 rounded-lg hover:bg-white">
            Approved loans only
          </button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-6">
          {/* Upcoming EMI */}
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-xs text-gray-500">Upcoming EMI due</p>
            <h3 className="text-2xl font-bold mt-2">
              {upcomingEmi ? `₹${upcomingEmi.amount.toLocaleString()}` : "—"}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {upcomingEmi
                ? `Due on ${upcomingEmi.dueDate} • Loan ${upcomingEmi.loanId}`
                : "No upcoming EMIs"}
            </p>
            <button className="mt-3 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Next payment
            </button>
          </div>

          {/* Paid EMIs */}
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-xs text-gray-500">Paid EMIs</p>
            <h3 className="text-2xl font-bold mt-2">{paidCount}</h3>
            <p className="text-xs text-gray-500 mt-1">Across active loans</p>
            <span className="mt-3 inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              On track
            </span>
          </div>

          {/* Pending EMIs */}
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-xs text-gray-500">Pending EMIs</p>
            <h3 className="text-2xl font-bold mt-2">{pendingCount}</h3>
            <p className="text-xs text-gray-500 mt-1">
              Scheduled for upcoming months
            </p>
            <span className="mt-3 inline-block text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              Plan ahead
            </span>
          </div>

          {/* Overdue EMIs */}
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-xs text-gray-500">Overdue EMIs</p>
            <h3 className="text-2xl font-bold mt-2">{overdueCount}</h3>
            <p className="text-xs text-gray-500 mt-1">
              Late fees may be applied
            </p>
            <span className="mt-3 inline-block text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
              Action required
            </span>
          </div>
        </div>

        {/* EMI Schedule + Payment panel */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left: EMI schedule table */}
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">EMI schedule</h3>
              <button className="text-xs text-gray-600 hover:underline">
                Download statement
              </button>
            </div>

            {/* Filters + search */}
            <div className="flex justify-between items-center mb-4">
              <div className="space-x-2 text-xs">
                {["All", "Paid", "Pending", "Overdue"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatusFilter(s);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-full border ${
                      statusFilter === s
                        ? "bg-[#0A4D68] text-white border-[#0A4D68]"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <input
                placeholder="Search by EMI or Loan ID"
                className="border text-xs px-3 py-2 rounded-md w-56"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Table */}
            <table className="w-full text-xs">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-3 py-2">EMI ID</th>
                  <th className="text-left px-3 py-2">Loan ID</th>
                  <th className="text-left px-3 py-2">EMI Amount</th>
                  <th className="text-left px-3 py-2">Due Date</th>
                  <th className="text-left px-3 py-2">Status</th>
                  <th className="text-left px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmis.map((emi) => (
                  <tr key={emi.id} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">{emi.id}</td>
                    <td className="px-3 py-2">{emi.loanId}</td>
                    <td className="px-3 py-2">₹{emi.amount.toLocaleString()}</td>
                    <td className="px-3 py-2">{emi.dueDate}</td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] font-semibold
                          ${
                            emi.status === "Paid" &&
                            "bg-green-100 text-green-700"
                          }
                          ${
                            emi.status === "Pending" &&
                            "bg-yellow-100 text-yellow-700"
                          }
                          ${
                            emi.status === "Overdue" &&
                            "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {emi.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 space-x-2">
                      {emi.status === "Paid" ? (
                        <button
                          onClick={() => handleDownloadReceipt(emi)}
                          className="px-3 py-1 text-[11px] border rounded-md hover:bg-gray-100"
                        >
                          Receipt
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePayNow(emi)}
                          className="px-3 py-1 text-[11px] bg-[#0A4D68] text-white rounded-md hover:bg-[#09718B]"
                        >
                          Pay now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {paginatedEmis.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No EMIs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-xs">
              <p>
                Showing {paginatedEmis.length} of {filteredEmis.length} EMIs
              </p>
              <div className="space-x-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 border rounded-md disabled:opacity-40"
                >
                  Prev
                </button>
                <span>
                  {currentPage} / {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 border rounded-md disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right: Payment summary panel */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4 text-xs">
            <h3 className="font-semibold text-gray-900">Payment summary</h3>

            <div className="border rounded-md p-3 space-y-1">
              <p className="text-gray-500">Selected EMI</p>
              <p className="font-semibold">
                {selectedEmi
                  ? `${selectedEmi.id} • Loan ${selectedEmi.loanId}`
                  : "No EMI selected"}
              </p>
              {selectedEmi && (
                <>
                  <p>Upcoming amount: ₹{selectedEmi.amount.toLocaleString()}</p>
                  <p>Late fee: ₹{selectedEmi.lateFee}</p>
                  <p className="font-semibold">
                    Total payable: ₹
                    {(selectedEmi.amount + selectedEmi.lateFee).toLocaleString()}
                  </p>
                </>
              )}
            </div>

            {/* Payment methods */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Choose payment method</p>
              {["UPI", "Card", "NetBanking"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handleConfirmPayment}
              className="w-full py-2 mt-2 bg-[#0A4D68] text-white rounded-md text-sm hover:bg-[#09718B]"
            >
              Confirm payment
            </button>

            <button className="w-full py-2 text-gray-600 border rounded-md text-sm hover:bg-gray-50">
              Cancel
            </button>

            <p className="text-[11px] text-gray-500 mt-2">
              Note: In production, payment is processed via secure banking
              gateways. This demo only simulates payment and moves EMI to Paid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
