import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    toast.info("You are now securely logged out.");

    const timer = setTimeout(() => navigate("/"), 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F7FBFC] px-10 py-12 text-gray-700">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-[#0A4D68]">
          <button>CDAC LOAN BANK
          </button>
        </h2>

        <div className="space-x-4">
          <Link to="/register" className="text-sm text-blue-800 hover:underline">
            Register
          </Link>
          <Link className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900" to="/login">
            Login
          </Link>
        </div>
      </header>

      {/* Message Card */}
      <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto space-y-6">
        
        <div className="bg-yellow-100 text-yellow-800 font-medium px-4 py-2 rounded-md">
          You are now securely logged out 🔐
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          Manage all your bank loans in one secure<br />
          dashboard.
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Log in again to track applications, pay EMIs, upload KYC documents, and stay updated<br />
          on your loan journey — 100% paperless.
        </p>

        <div className="flex gap-4">
          <Link to="/login" className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900">
            Login to your dashboard
          </Link>

          <Link to="/register" className="px-6 py-3 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300">
            Create new account
          </Link>
        </div>

        <div className="text-sm text-gray-500 pt-2">
          Return anytime to continue your loan application or EMI payment.
        </div>
      </div>

      {/* 🔹 Bottom Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 mt-14">

        {/* Why Dashboard */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold text-gray-900">Why use the dashboard?</h3>
          <ul className="text-sm space-y-2">
            <li>• Track every loan application</li>
            <li>• EMI payments & receipts</li>
            <li>• Secure document uploads</li>
          </ul>
        </div>

        {/* Login Form (Returning User) */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold text-gray-900">Log back in</h3>
          <input className="w-full border p-2 rounded-md" placeholder="Registered Email" />
          <input className="w-full border p-2 rounded-md" type="password" placeholder="Password" />
          <Link to="/login" className="px-4 py-2 bg-blue-800 text-white w-full text-center rounded-md block">
            Login
          </Link>
          <button className="text-sm text-blue-600 hover:underline">Forgot password?</button>
        </div>

        {/* System Overview */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold text-gray-900">System at a glance</h3>
          <ul className="text-sm space-y-2">
            <li>• Loan applications</li>
            <li>• EMI tracking</li>
            <li>• KYC & compliance</li>
            <li>• Real-time notifications</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-10 text-xs text-gray-500">
        For your security, we recommend closing the browser tab after using CDAC Loan Bank Center...
      </p>

    </div>
  );
}
