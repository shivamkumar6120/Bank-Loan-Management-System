// src/pages/admin/LoanApplications.jsx
import React, { useMemo, useState } from "react";
import AdminLayout from "./AdminLayout";
import { useLoan } from "../../context/LoanContext";
import { useNotification } from "../../context/NotificationContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function LoanApplicationsPage() {
    const { loanData, updateLoanStatus } = useLoan();
    const { addNotification } = useNotification();

    // UI state
    const [statusFilter, setStatusFilter] = useState("All"); // All | Pending | Under review | Approved | Rejected
    const [typeFilter, setTypeFilter] = useState("All");
    const [kycOnly, setKycOnly] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Derived lists
    const loanTypes = useMemo(() => {
        const types = [...new Set(loanData.map((l) => l.type))];
        return ["All", ...types];
    }, [loanData]);

    const filtered = useMemo(() => {
        const q = searchText.trim().toLowerCase();
        return loanData.filter((l) => {
            if (statusFilter !== "All" && l.status !== statusFilter) return false;
            if (typeFilter !== "All" && l.type !== typeFilter) return false;
            if (kycOnly && !(l.documents && (l.documents.idProof || l.documents.incomeProof))) return false;
            if (!q) return true;
            return (
                l.id.toString().toLowerCase().includes(q) ||
                (l.customerName && l.customerName.toLowerCase().includes(q))
            );
        });
    }, [loanData, statusFilter, typeFilter, kycOnly, searchText]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const pageStart = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(pageStart, pageStart + itemsPerPage);

    // Actions
    const handleApprove = (loanId) => {
        updateLoanStatus(loanId, "Approved");
        addNotification(`Loan ${loanId} approved`, "loan", loanId);
        toast.success(`Loan ${loanId} approved`);
    };

    const handleReject = (loanId) => {
        updateLoanStatus(loanId, "Rejected");
        addNotification(`Loan ${loanId} rejected`, "loan", loanId);
        toast.info(`Loan ${loanId} rejected`);
    };

    const handleView = (loanId) => {
        // go to detail page
        // If you want: navigate(`/loan/${loanId}`)
    };

    // counts for compliance panel
    const total30 = loanData.length;
    const pending = loanData.filter((l) => l.status === "Pending").length;
    const underReview = loanData.filter((l) => l.status === "Under review").length;
    const kycIncomplete = loanData.filter((l) => !(l.documents && (l.documents.idProof && l.documents.incomeProof))).length;

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-semibold">Loan Applications</h1>
                        <p className="text-sm text-gray-500">Home / Loan Applications</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-3 py-2 bg-white border rounded text-sm">96 pending</button>
                        <button className="px-3 py-2 bg-white border rounded text-sm">Export to CSV</button>
                    </div>
                </div>

                {/* Filters Card */}
                <div className="bg-white border rounded-lg p-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex gap-3 items-center flex-wrap">
                            <select
                                className="border px-3 py-2 rounded text-sm"
                                value={statusFilter}
                                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                            >
                                <option>All</option>
                                <option>Pending</option>
                                <option>Under review</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                            </select>

                            <select
                                className="border px-3 py-2 rounded text-sm"
                                value={typeFilter}
                                onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
                            >
                                {loanTypes.map((t) => <option key={t}>{t}</option>)}
                            </select>

                            <label className="inline-flex items-center text-sm">
                                <input type="checkbox" className="mr-2" checked={kycOnly} onChange={(e) => setKycOnly(e.target.checked)} />
                KYC incomplete only
              </label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <input
                                className="border px-3 py-2 rounded text-sm"
                                placeholder="Search by Loan ID or Customer"
                                value={searchText}
                                onChange={(e) => { setSearchText(e.target.value); setCurrentPage(1); }}
                            />
                            <button className="px-3 py-2 bg-gray-100 rounded text-sm" onClick={() => { setStatusFilter("All"); setTypeFilter("All"); setKycOnly(false); setSearchText(""); }}>
                                Clear all
              </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white border rounded-lg p-4 mb-6">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-2">Loan ID</th>
                                <th className="text-left p-2">Customer Name</th>
                                <th className="text-left p-2">Loan Type</th>
                                <th className="text-right p-2">Amount</th>
                                <th className="text-left p-2">Status</th>
                                <th className="text-left p-2">Submission Date</th>
                                <th className="text-left p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((loan) => (
                                <tr key={loan.id} className="border-b hover:bg-gray-50">
                                    <td className="p-2">{loan.id}</td>
                                    <td className="p-2 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm">
                                            {loan.customerName ? loan.customerName.split(" ").map(n => n[0]).slice(0, 2).join("") : "U"}
                                        </div>
                                        <div>
                                            <div className="font-medium">{loan.customerName || "N/A"}</div>
                                            {!(loan.documents && (loan.documents.idProof && loan.documents.incomeProof)) && (
                                                <span className="text-[11px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded ml-1">KYC Incomplete</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-2">{loan.type}</td>
                                    <td className="p-2 text-right">{loan.amount}</td>
                                    <td className="p-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${loan.status === "Approved" ? "bg-green-100 text-green-700" : ""}
                      ${loan.status === "Pending" ? "bg-yellow-100 text-yellow-700" : ""}
                      ${loan.status === "Under review" ? "bg-orange-100 text-orange-700" : ""}
                      ${loan.status === "Rejected" ? "bg-red-100 text-red-700" : ""}
                    `}>
                                            {loan.status}
                                        </span>
                                    </td>
                                    <td className="p-2">{loan.submissionDate || "—"}</td>
                                    <td className="p-2 space-x-2">
                                        <Link to={`/loan/${loan.id}`} className="text-blue-600 text-sm hover:underline">View</Link>
                                        {loan.status !== "Approved" && (
                                            <button onClick={() => handleApprove(loan.id)} className="text-sm text-green-600 hover:underline">Approve</button>
                                        )}
                                        {loan.status !== "Rejected" && (
                                            <button onClick={() => handleReject(loan.id)} className="text-sm text-red-600 hover:underline">Reject</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center text-xs mt-4">
                        <div>Showing {paginated.length} of {filtered.length} applications</div>
                        <div className="flex items-center gap-2">
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="px-3 py-1 border rounded disabled:opacity-40">Prev</button>
                            <span>{currentPage} / {totalPages}</span>
                            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded disabled:opacity-40">Next</button>
                        </div>
                    </div>
                </div>

                {/* Queue health & compliance */}
                <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Queue health & compliance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs text-gray-500">Total applications (30d)</p>
                            <div className="mt-2 font-bold text-lg">{total30}</div>
                            <p className="text-xs text-gray-500 mt-1">{pending} pending • {underReview} under review</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs text-gray-500">Pending approvals &gt; 48h</p>
                            <div className="mt-2 font-bold text-lg">{pending}</div>
                            <p className="text-xs text-orange-600 mt-1">Action required</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-xs text-gray-500">KYC incomplete</p>
                            <div className="mt-2 font-bold text-lg">{kycIncomplete}</div>
                            <p className="text-xs text-red-600 mt-1">Block approvals</p>
                        </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        <h4 className="font-medium mb-2">KYC completeness</h4>
                        <p>Applications that cannot be approved until KYC is done.</p>

                        <div className="mt-4 bg-white border rounded p-3 text-xs">
                            <p className="mb-2">Recent approval activity</p>
                            <ul className="text-xs space-y-1">
                                {loanData.slice(0, 5).map((l) => (
                                    <li key={l.id} className="flex justify-between">
                                        <span>{l.id}</span>
                                        <span className="text-gray-500">{l.status}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

