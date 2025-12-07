import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useLoan } from "../context/LoanContext";

export default function UserDashboard() {
  const { loanData } = useLoan();
  
  const total = loanData.length;
  const approved = loanData.filter(l => l.status === "Approved").length;
  const pending = loanData.filter(l => l.status === "Pending").length;
  const rejected = loanData.filter(l => l.status === "Rejected").length;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-10 space-y-10">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A4D68] to-[#1687A7] p-8 rounded-2xl text-white shadow">
          <h2 className="text-3xl font-bold">Welcome back, User! 👋</h2>
          <p className="text-gray-100 mt-2">Here’s your loan overview</p>
        </div>

        {/* Loan Summary Cards */}
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: "Total Loans", value: total, color: "text-blue-600" },
            { label: "Approved", value: approved, color: "text-green-600" },
            { label: "Pending", value: pending, color: "text-yellow-600" },
            { label: "Rejected", value: rejected, color: "text-red-600" },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow">
              <h3 className={`text-3xl font-bold ${card.color}`}>{card.value}</h3>
              <p className="text-gray-500 font-medium mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Loan Applications Table */}
        <div className="bg-white p-6 shadow rounded-xl">
          <div className="flex justify-between pb-4">
            <h3 className="text-lg font-semibold">Loan Applications</h3>
            <Link to="/apply-loan" className="bg-[#0A4D68] text-white px-4 py-2 rounded-lg hover:bg-[#09718B] transition">
              Apply New Loan
            </Link>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">Loan ID</th>
                <th className="px-4 py-3 text-left">Loan Type</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan) => (
                <tr key={loan.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{loan.id}</td>
                  <td className="px-4 py-3">{loan.type}</td>
                  <td className="px-4 py-3">{loan.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium 
                      ${loan.status === "Approved" && "bg-green-100 text-green-600"} 
                      ${loan.status === "Pending" && "bg-yellow-100 text-yellow-700"} 
                      ${loan.status === "Rejected" && "bg-red-100 text-red-600"}
                    `}>{loan.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
