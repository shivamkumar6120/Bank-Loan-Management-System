import React, { useState, useMemo } from "react";
import AdminLayout from "./AdminLayout";

export default function Customers() {
    // ------------------ MOCK CUSTOMER DATA ------------------
    const [customers, setCustomers] = useState([
        {
            id: "CUST-10293",
            name: "Rahul Sharma",
            kyc: "complete",
            kycTag: "KYC complete",
            accountStatus: "Active",
            totalLoans: 3,
            lastActivity: "07 Dec 2025, 10:22",
        },
        {
            id: "CUST-10187",
            name: "Priya Nair",
            kyc: "partial",
            kycTag: "KYC partial",
            accountStatus: "Active",
            totalLoans: 2,
            lastActivity: "07 Dec 2025, 09:02",
        },
        {
            id: "CUST-09594",
            name: "Arjun Verma",
            kyc: "pending",
            kycTag: "KYC pending",
            accountStatus: "Active",
            totalLoans: 2,
            lastActivity: "06 Dec 2025, 18:45",
        },
        {
            id: "CUST-09721",
            name: "Meera Joshi",
            kyc: "complete",
            kycTag: "KYC complete",
            accountStatus: "Disabled",
            totalLoans: 1,
            lastActivity: "Account disabled · 05 Dec 2025",
        },
        {
            id: "CUST-09560",
            name: "Ankit Singh",
            kyc: "complete",
            kycTag: "KYC complete",
            accountStatus: "Active",
            totalLoans: 4,
            lastActivity: "Overdue EMI alert · 05 Dec 2025",
        }
    ]);

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    // ----------------- BADGE COLORS -----------------
    const kycColors = {
        complete: "bg-green-100 text-green-700",
        partial: "bg-yellow-100 text-yellow-700",
        pending: "bg-orange-100 text-orange-700"
    };

    const accountColors = {
        Active: "bg-green-100 text-green-700",
        Disabled: "bg-gray-300 text-gray-700",
    };

    const disableCustomer = (id) => {
        setCustomers((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, accountStatus: "Disabled" } : c
            )
        );
    };

    const enableCustomer = (id) => {
        setCustomers((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, accountStatus: "Active" } : c
            )
        );
    };

    return (
        <AdminLayout>
            {/* PAGE HEADER */}
            <h2 className="text-xl font-semibold">Customers</h2>
            <p className="text-sm text-gray-500 mb-6">Home / Customers</p>

            {/* TOP SECTION */}
            <div className="bg-white border rounded-xl p-6 shadow-sm mb-6">

                {/* FILTERS HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">Customer directory</h3>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        Add customer
          </button>
                </div>

                {/* FILTERS */}
                <div className="bg-gray-50 p-4 rounded-lg border text-sm">
                    <p className="font-semibold text-gray-700 mb-2">Filters</p>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <p className="text-xs text-gray-500">KYC status</p>
                            <p className="text-sm">Pending, Complete</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Account state</p>
                            <p className="text-sm">Active only</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Risk level</p>
                            <p className="text-sm">All</p>
                        </div>

                        <div>
                            <input
                                placeholder="🔍 Search by name, ID or phone"
                                className="border rounded-lg px-3 py-2 w-full text-sm"
                            />
                        </div>
                    </div>

                    <button className="text-xs text-gray-500 underline mt-3">
                        Clear all
          </button>
                </div>

                {/* CUSTOMERS TABLE */}
                <div className="mt-6">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-3 py-2 text-left">Customer Name</th>
                                <th className="px-3 py-2 text-left">Customer ID</th>
                                <th className="px-3 py-2 text-left">KYC Status</th>
                                <th className="px-3 py-2 text-left">Account</th>
                                <th className="px-3 py-2 text-left">Total Loans</th>
                                <th className="px-3 py-2 text-left">Last Activity</th>
                                <th className="px-3 py-2 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customers.map((c) => (
                                <tr
                                    key={c.id}
                                    className="border-b hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setSelectedCustomer(c)}
                                >
                                    <td className="px-3 py-2">{c.name}</td>
                                    <td className="px-3 py-2">{c.id}</td>

                                    <td className="px-3 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${kycColors[c.kyc]}`}
                                        >
                                            {c.kycTag}
                                        </span>
                                    </td>

                                    <td className="px-3 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${accountColors[c.accountStatus]}`}
                                        >
                                            {c.accountStatus}
                                        </span>
                                    </td>

                                    <td className="px-3 py-2">{c.totalLoans}</td>
                                    <td className="px-3 py-2">{c.lastActivity}</td>

                                    <td className="px-3 py-2 space-x-3 text-blue-600 text-sm">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCustomer(c);
                                            }}
                                        >
                                            View profile
                    </button>

                                        {c.accountStatus === "Active" ? (
                                            <button
                                                className="text-red-600"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    disableCustomer(c.id);
                                                }}
                                            >
                                                Disable
                                            </button>
                                        ) : (
                                                <button
                                                    className="text-green-600"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        enableCustomer(c.id);
                                                    }}
                                                >
                                                    Enable
                                                </button>
                                            )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="text-xs text-gray-500 mt-2">
                        Showing 1–5 of {customers.length} customers
          </p>
                </div>
            </div>

            {/* CUSTOMER OVERVIEW SECTION */}
            <div className="bg-white border rounded-xl p-6 shadow-sm mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Customer overview</h3>

                <div className="grid grid-cols-4 gap-6 text-sm">
                    <p>Active customers: <b>1120</b></p>
                    <p>Disabled accounts: <b>128</b></p>
                    <p>KYC pending: <b>48</b></p>
                    <p>High-risk profiles: <b>18</b></p>
                </div>
            </div>

            {/* CUSTOMER PROFILE PANEL */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Customer profile</h3>

                {!selectedCustomer ? (
                    <p className="text-sm text-gray-500">No customer selected.</p>
                ) : (
                        <div className="space-y-4 text-sm">
                            <p><b>{selectedCustomer.name}</b></p>
                            <p>Customer ID: {selectedCustomer.id}</p>

                            <p>Email: —</p>
                            <p>Phone: —</p>
                            <p>Total loans: {selectedCustomer.totalLoans}</p>
                            <p>Last activity: {selectedCustomer.lastActivity}</p>

                            <div className="flex gap-4 mt-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                                    Open full profile
              </button>

                                {selectedCustomer.accountStatus === "Active" ? (
                                    <button
                                        onClick={() => disableCustomer(selectedCustomer.id)}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                                    >
                                        Disable account
                                    </button>
                                ) : (
                                        <button
                                            onClick={() => enableCustomer(selectedCustomer.id)}
                                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm"
                                        >
                                            Enable account
                                        </button>
                                    )}
                            </div>
                        </div>
                    )}
            </div>
        </AdminLayout>
    );
}
