import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200  border-t border-gray-200">
      <div className=" max-w-7xl mx-auto px-6 py-12 grid gap-8 grid-cols-1 md:grid-cols-5">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-teal-600">CDAC LOAN PROJECT</h2>
          <p className="text-sm mt-3">
            Empowering your financial goals with secure and
            affordable lending solutions. 
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-600">Home</Link></li>
            <li><Link to="/login" className="hover:text-teal-600">Sign In</Link></li>
            <li><Link to="/about" className="hover:text-teal-600">About-us</Link></li>
            <li><Link to="/register" className="hover:text-teal-600">Register</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-600 cursor-pointer">Apply for Loan</li>
            <li className="hover:text-teal-600 cursor-pointer">EMI Calculator</li>
            <li className="hover:text-teal-600 cursor-pointer">Customer Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Contact Us</h3>
          <p className="text-sm">📍 Address: Sunbeam pune, hinjewadi , 490016 </p>
          <p className="text-sm mt-1">📧 support@cdacloanproject.com</p>
          <p className="text-sm mt-1">📞 +91 98765 43210</p>
          <p className="text-sm mt-1">📞 +91 98765 43210</p>
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-semibold text-gray-100 mb-3">Developers</h3>
          <p className="text-sm">Shivam Kashyap </p>
          <p className="text-sm">Jaydeep Dixit </p>
          <p className="text-sm">Shivam Kumar Sah</p>
          <p className="text-sm">Devan Pujari</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t border-gray-300">
        © {new Date().getFullYear()} CDAC LOAN PROJECT — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;