import React from "react";
import { Link } from "react-router-dom";
import { 
  FaUser, FaHome, FaBriefcase, FaCar 
} from "react-icons/fa";

function Products() {

  const products = [
    {
      icon: <FaUser className="text-3xl text-blue-700" />,
      title: "Personal Loan",
      desc: "Get quick and flexible financing for your personal needs.",
      points: [
        "Loan amounts from ₹50,000 to ₹25,00,000",
        "Interest rates starting from 10.99% p.a.",
        "Tenure from 12 to 60 months",
        "No prepayment charges",
        "Instant approval available",
      ],
    },
    {
      icon: <FaHome className="text-3xl text-blue-700" />,
      title: "Home Loan",
      desc: "Make your dream home a reality with affordable interest rates.",
      points: [
        "Financing from ₹5 lakh to ₹5 crore",
        "Both fixed and floating rate options",
        "Loan tenure up to 30 years",
        "Low down payment requirements",
        "Special benefits for first-time buyers",
      ],
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-700" />,
      title: "Business Loan",
      desc: "Power your business growth with easy and reliable funding.",
      points: [
        "Loan amounts from ₹1 lakh to ₹50 lakh",
        "Attractive interest rates for eligible applicants",
        "Loan tenure ranging from 12 to 84 months",
        "Fast approval with minimal documentation",
        "Dedicated business loan support",
      ],
    },
    {
      icon: <FaCar className="text-3xl text-blue-700" />,
      title: "Car Loan",
      desc: "Drive home your dream vehicle with convenient EMIs.",
      points: [
        "Financing available for new and used cars",
        "Interest rates starting from 8.75% p.a.",
        "Loan tenure from 24 to 84 months",
        "Pre-approval facility available",
        "Refinancing options also provided",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Back to Home */}
      <div className="mb-6">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-blue-600 text-sm inline-flex items-center gap-2"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Our Loan Products
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-10 text-lg">
        Explore loan options designed to support your financial goals.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {products.map((item, index) => (
          <div 
            key={index}
            className="bg-white shadow rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>

            <p className="text-gray-600 mt-2 mb-4">{item.desc}</p>

            <ul className="text-gray-600 text-sm space-y-2">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  ✔️ <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Modern Equal Buttons */}
            <div className="flex gap-4 mt-6">
              <Link 
                to='/login' 
                className="flex-1 text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Apply Now
              </Link>

              <Link 
                to="/" 
                className="flex-1 text-center border border-gray-400 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Calculate
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow mt-12 p-8 rounded-xl text-center hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-gray-800">
          Not sure which loan is right for you?
        </h2>
        <p className="text-gray-600 mt-2">
          Our experts can help you choose the perfect loan for your needs.
        </p>

        <Link 
          to="/contact" 
          className="inline-block mt-6 bg-blue-900 text-white px-8 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}

export default Products;
