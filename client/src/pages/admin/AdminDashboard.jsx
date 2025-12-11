import { Bell, LogOut, Settings, Users, FileText, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {

    return (
        <div className="flex bg-gray-50 min-h-screen">

            {/* ---------------- SIDEBAR ---------------- */}
            <aside className="w-64 bg-white border-r p-5 hidden md:block">
                <div className="font-bold text-xl mb-8">CDAC LOAN BANK<br /><span className="text-sm text-gray-500">Loan Management</span></div>

                <nav className="space-y-2">
                    <Link to="/admin/dashboard" className="block bg-blue-600 text-white px-4 py-2 rounded-lg">Dashboard</Link>
                    <Link to="/admin/loan-applications" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Loan Applications</Link>
                    <Link to="/admin/customers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Customers</Link>
                    <Link to="/admin/emi-monitoring" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">EMI Monitoring</Link>
                    <Link to="/admin/documents" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Document Verification</Link>
                    <Link to="/admin/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Settings</Link>
                </nav>

                <div className="absolute bottom-5">
                    <Link to="/logout" className="text-gray-600 flex gap-2 items-center"><LogOut size={18} /> Logout</Link>
                </div>
            </aside>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <div className="flex-1 p-6">

                {/* ---------- TOP BAR ---------- */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <p className="text-gray-500 text-sm">Admin / Portfolio Overview</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Bell className="text-gray-600 cursor-pointer" />
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-medium">Rishabh sir </p>
                            <p className="text-xs text-gray-500">Manager</p>
                        </div>
                    </div>
                </div>

                {/* ---------- METRICS ROW ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Loan Applications */}
                    <MetricCard title="Total loan applications" number="1,284" sub="Last 30 days" />

                    {/* Pending Approvals */}
                    <MetricCard title="Pending approvals" number="96" sub="Avg. SLA: 14.2 hrs" icon />

                    {/* Approved Loans */}
                    <MetricCard title="Approved loans" number="842" sub="Approval rate: 72%" highlight="+6.4% vs last month" green />

                    {/* Pending Verification */}
                    <MetricCard title="Docs pending verification" number="38" sub="Avg age: 6.1 hrs" icon />

                </div>

                {/* ---------- WORK QUEUES ---------- */}
                <Section title="Work Queues">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <QueueCard title="Loan applications" number="96 pending" link="/admin/loan-applications" />
                        <QueueCard title="Document verification" number="18 to verify" link="/admin/documents" />
                        <QueueCard title="EMI monitoring" number="67 overdue" link="/admin/emi-monitoring" />
                        <QueueCard title="Customers" number="1,042 active" link="/admin/customers" />
                    </div>
                </Section>

                {/* ---------- RISK & KYC ---------- */}
                <Section title="Risk & KYC Overview">
                    <div className="flex gap-6 text-sm">
                        <Badge label="High risk" value="24" color="red" />
                        <Badge label="KYC Incomplete" value="31" color="yellow" />
                        <Badge label="Fully Compliant" value="785" color="green" />
                    </div>
                </Section>

                {/* ---------- NOTIFICATIONS ---------- */}
                <Section title="Notifications">
                    <div className="bg-white border rounded-lg p-4 space-y-3 text-sm">

                        <NotificationItem
                            title="New loan application"
                            time="2 min ago"
                            desc="LN-2025-1043 - Home Loan - Arjun Verma"
                        />

                        <NotificationItem
                            title="Overdue EMI"
                            time="10 min ago"
                            desc="EMI-2025-4432 overdue by 6 days"
                            warning
                        />

                        <NotificationItem
                            title="Missing Documents"
                            time="22 min ago"
                            desc="Bank statement missing for LN-2025-1028"
                        />

                        <NotificationItem
                            title="Re-upload completed"
                            time="30 min ago"
                            desc="Address proof uploaded for C-10381"
                        />

                    </div>
                </Section>

            </div>
        </div>
    );
}

/* ------------------ COMPONENTS ------------------ */

function MetricCard({ title, number, sub, icon, highlight, green }) {
    return (
        <div className="bg-white border p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
                <p className="text-gray-600 text-sm">{title}</p>
                {icon && <FileText size={18} className="text-gray-500" />}
            </div>
            <p className="text-2xl font-semibold mt-1">{number}</p>
            <p className="text-xs text-gray-500">{sub}</p>
            {highlight && (
                <p className={`text-xs mt-1 ${green ? "text-green-600" : "text-red-600"}`}>
                    {highlight}
                </p>
            )}
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mt-6">
            <h2 className="font-semibold mb-2">{title}</h2>
            {children}
        </div>
    );
}

function QueueCard({ title, number, link }) {
    return (
        <Link to={link} className="bg-white border p-4 rounded-lg hover:shadow">
            <p className="font-medium">{title}</p>
            <p className="text-gray-500 text-sm">{number}</p>
            <div className="text-blue-600 text-sm mt-1 flex items-center gap-1">
                Open <ChevronRight size={14} />
            </div>
        </Link>
    );
}

function Badge({ label, value, color }) {
    const colors = {
        red: "bg-red-100 text-red-700",
        yellow: "bg-yellow-100 text-yellow-700",
        green: "bg-green-100 text-green-700",
    };

    return (
        <div className={`px-3 py-1 rounded-lg ${colors[color]} font-medium`}>
            {label}: {value}
        </div>
    );
}

function NotificationItem({ title, desc, time, warning }) {
    return (
        <div className="border-b pb-2">
            <div className="flex justify-between">
                <p className="font-medium">{title}</p>
                <p className="text-xs text-gray-500">{time}</p>
            </div>
            <p className={`text-sm ${warning ? "text-red-600" : "text-gray-600"}`}>{desc}</p>
        </div>
    );
}
