import { Link } from "react-router-dom";
import { FiHome, FiSettings, FiUsers, FiFileText, FiCreditCard, FiBell } from "react-icons/fi";

export default function AdminLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-50">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r p-5 flex flex-col">
                <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">B</span>
          Cdac Bank
        </h2>

                <nav className="flex flex-col gap-2 text-gray-700">
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/dashboard"> <FiHome /> Dashboard </Link>
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/loan-applications"> <FiFileText /> Loan Applications </Link>
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/customers"> <FiUsers /> Customers </Link>
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/emi-monitoring"> <FiCreditCard /> EMI Monitoring </Link>
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/documents"> <FiFileText /> Document Verification </Link>
                    <Link className="p-3 rounded-lg hover:bg-blue-100 flex items-center gap-3" to="/admin/settings"> <FiSettings /> Settings </Link>
                </nav>

                <div className="mt-auto">
                    <Link className="p-3 text-red-600 flex items-center gap-3 hover:bg-red-50 rounded-lg" to="/logout">
                        Logout
          </Link>
                </div>
            </aside>

            {/* MAIN AREA */}
            <main className="flex-1 p-6 overflow-y-scroll">

                {/* TOP BAR */}
                <div className="flex justify-end items-center mb-6">
                    <FiBell size={22} className="mr-6 cursor-pointer" />
                    <div className="flex items-center gap-3">
                        <span className="text-right">
                            <p className="font-medium">Rishabh sir</p>
                            <p className="text-sm text-gray-500">Senior Loan Admin</p>
                        </span>
                        <img src="data:image/jpeg;base64,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" className="w-10 h-10 rounded-full" />
                    </div>
                </div>

                {children}
            </main>
        </div>
    );
}
