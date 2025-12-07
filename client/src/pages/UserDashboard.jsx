import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoan } from "../context/LoanContext";

export default function UserDashboard() {
  const [username, setUsername] = useState("User"); // dynamically replace later

  // sample loan data (replace with API or backend later) { For now taking details from apply-loan from }
 const { loanData } = useLoan();

  // quick stats
  const total = loanData.length;
  const approved = loanData.filter(l => l.status === "Approved").length;
  const pending = loanData.filter(l => l.status === "Pending").length;
  const rejected = loanData.filter(l => l.status === "Rejected").length;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* Header */}
      <div className="w-full bg-blue-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Welcome, {username}! 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Here’s what’s happening with your loans
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        
        {/* Card Template */}
        {[
          { label: "Total Applications", value: total, color: "text-blue-600" },
          { label: "Approved", value: approved, color: "text-green-600" },
          { label: "Pending", value: pending, color: "text-yellow-600" },
          { label: "Rejected", value: rejected, color: "text-red-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
            <p className="text-gray-500 text-sm font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Your Loan Applications</h3>

          <Link
            to="/apply-loan"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Apply New Loan
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">Loan ID</th>
                <th className="px-4 py-3 text-left">Loan Type</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {loanData.map((loan) => (
                <tr key={loan.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{loan.id}</td>
                  <td className="px-4 py-3">{loan.type}</td>
                  <td className="px-4 py-3">{loan.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        loan.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : loan.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {loan.status}
                    </span>
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
