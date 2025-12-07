import React from "react";
import { Link } from "react-router-dom";
import { 
  FaUser, FaHome, FaBriefcase, FaCar 
} from "react-icons/fa";

function Products() {

  const products = [
    {
      icon: <FaUser className="text-3xl text-blue-700" />,
      title: "Personal Loans",
      desc: "Quick and flexible financing for any personal need",
      points: [
        "Loan amounts from $1,000 to $50,000",
        "Fixed interest rates as low as 5.99% APR",
        "Terms from 12 to 60 months",
        "No prepayment penalties",
        "Same-day approval available",
      ],
    },
    {
      icon: <FaHome className="text-3xl text-blue-700" />,
      title: "Home Mortgages",
      desc: "Make your dream home a reality with our competitive rates",
      points: [
        "Financing up to $1,000,000",
        "Fixed and adjustable rate options",
        "Terms from 15 to 30 years",
        "Low down payment options",
        "First-time buyer programs",
      ],
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-700" />,
      title: "Business Loans",
      desc: "Fuel your business growth with tailored financing solutions",
      points: [
        "Loan amounts from $10,000 to $500,000",
        "Competitive rates for qualified businesses",
        "Terms from 12 to 84 months",
        "Fast-approval process",
        "Dedicated business advisor",
      ],
    },
    {
      icon: <FaCar className="text-3xl text-blue-700" />,
      title: "Auto Loans",
      desc: "Drive away in your dream car with affordable financing",
      points: [
        "New and used vehicle financing",
        "Rates as low as 3.99% APR",
        "Terms from 24 to 72 months",
        "Pre-approval available",
        "Refinancing options",
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
        Explore our range of flexible loan products designed to meet your financial needs.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {products.map((item, index) => (
          <div 
            key={index}
            className="bg-white shadow rounded-xl p-6 border border-gray-200"
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

            <div className="flex gap-4 mt-6">
              <Link to='/login' className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
                Apply Now
              </Link>
              <Link to="/" className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100">
                Calculate
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow mt-12 p-8 rounded-xl text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Not Sure Which Loan is Right for You?
        </h2>
        <p className="text-gray-600 mt-2">
          Our specialists are here to help you choose the perfect financing solution.
        </p>

        <Link to="/contact" className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
          Contact Us
        </Link>
      </div>

    </div>
  );
}

export default Products;
