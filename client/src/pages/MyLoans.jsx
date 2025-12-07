import Sidebar from "../components/Sidebar";
import { useLoan } from "../context/LoanContext";
import { Link } from "react-router-dom";

export default function MyLoans() {
  const { loanData } = useLoan();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10 space-y-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900">My Loans</h2>
        <p className="text-gray-600 text-sm">
          Track all your loan applications & their approval status.
        </p>

        {/* If no loans yet */}
        {loanData.length === 0 && (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-700 text-sm">You haven't applied for any loan yet.</p>
            <Link
              to="/apply-loan"
              className="mt-3 inline-block px-4 py-2 bg-[#0A4D68] text-white rounded-md"
            >
              Apply New Loan →
            </Link>
          </div>
        )}

        {/* Loan Table */}
        {loanData.length > 0 && (
          <div className="bg-white rounded-xl shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-3">Loan ID</th>
                  <th className="text-left px-4 py-3">Loan Type</th>
                  <th className="text-left px-4 py-3">Amount</th>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-right px-4 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {loanData.map((loan) => (
                  <tr key={loan.id} className="border-b">
                    <td className="px-4 py-3">{loan.id}</td>
                    <td className="px-4 py-3">{loan.type}</td>
                    <td className="px-4 py-3">{loan.amount}</td>

                    {/* Status Badge */}
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          loan.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : loan.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {loan.status}
                      </span>
                    </td>

                    {/* View Button - future detail page */}
                    <td className="px-4 py-3 text-right">
                      <button
                        disabled
                        className="px-4 py-2 rounded-md text-xs bg-gray-200 text-gray-500 cursor-not-allowed"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
