import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-100 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="flex items-center justify-between px-8 lg:px-16 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-teal-600">
          CDAC LOAN PROJECT 
        </Link>

        {/* Right Side Menu */}
        <div className="flex items-center gap-4">
          {/* Sign In */}
          <Link
            to="/login"
            className="text-gray-700 hover:text-teal-600 font-medium transition"
          >
            Sign In
          </Link>

          {/* Get Started Button */}
          <Link
            to="/register"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
