import { Link } from "react-router-dom";
import { Home, CreditCard, Bell, User, LogOut, Wallet } from "lucide-react";
import ApplyLoan from './../pages/ApplyLoan';

export default function Sidebar() {
  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", link: "/dashboard" },
    { icon: <Home size={20} />, label: "Apply Loan", link: "/apply-loan" },
    { icon: <CreditCard size={20} />, label: "My Loans", link: "/dashboard" },
    { icon: <Wallet size={20} />, label: "EMI Payments", link: "#" },
    { icon: <Bell size={20} />, label: "Notifications", link: "#" },
    { icon: <User size={20} />, label: "Profile & KYC", link: "#" },
  ];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-6 flex flex-col">
      <h2 className="text-xl font-bold text-[#0A4D68] mb-8">NeoBank Center</h2>

      <nav className="flex-1 space-y-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center gap-3 text-gray-700 hover:bg-[#0A4D68] hover:text-white px-3 py-2 rounded-lg transition"
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/logout"
        className="flex items-center gap-3 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg"
      >
        <LogOut size={20} /> Logout
      </Link>
    </div>
  );
}
