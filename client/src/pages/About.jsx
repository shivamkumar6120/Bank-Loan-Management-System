import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <Link to="/" className="text-sm text-gray-600 hover:underline flex items-center gap-1">
          <span>←</span> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mt-6">
        <h2 className="text-4xl font-bold text-gray-900">About LoanFlow</h2>
        <p className="text-gray-500 mt-2 text-lg">Your trusted partner in financial growth</p>
      </div>

      {/* Intro Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-sm p-6 rounded-xl mt-6 border">
        <p className="text-center text-gray-600 leading-relaxed">
          LoanFlow is a modern online banking platform dedicated to making loan
          management simple, transparent, and accessible to everyone. We believe
          that financial services should empower individuals and businesses to
          achieve their goals without unnecessary complexity.
        </p>
      </div>

      {/* Mission + Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6">
        {/* Mission */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-gray-100 p-3 rounded-full text-blue-600">
              <i className="bi bi-bullseye fs-4"></i>
            </span>
            <h3 className="font-semibold text-lg text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-sm">
            To democratize access to financial services by providing transparent,
            efficient, and customer-centric loan solutions that help people
            achieve their dreams.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-gray-100 p-3 rounded-full text-blue-600">
              <i className="bi bi-lightning-charge fs-4"></i>
            </span>
            <h3 className="font-semibold text-lg text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-sm">
            To become the most trusted and innovative digital lending platform,
            setting new standards for transparency, speed, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="text-center mt-14">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose LoanFlow?</h3>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
        {/* Feature Cards */}
        {[
          { icon: "bi-people", title: "Customer First", desc: "We provide personalized support throughout your loan journey." },
          { icon: "bi-shield-lock", title: "Trusted & Secure", desc: "Bank-level security keeps your data always protected." },
          { icon: "bi-rocket-takeoff", title: "Fast & Efficient", desc: "Quick approvals ensure funds reach you when needed." }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition"
          >
            <span className="bg-gray-100 p-3 rounded-full inline-block text-blue-600">
              <i className={`bi ${item.icon} fs-4`} ></i>
            </span>
            <h4 className="font-semibold mt-3 text-gray-800">{item.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white max-w-6xl mx-auto rounded-xl shadow-sm border p-6 mt-14 text-center">
        <h4 className="font-bold text-gray-900 mb-4 text-lg">Our Track Record</h4>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="text-blue-600 font-bold text-2xl">$500M+</h2>
            <p className="text-gray-500 text-sm">Loans Disbursed</p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-2xl">50,000+</h2>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-2xl">4.8/5</h2>
            <p className="text-gray-500 text-sm">Customer Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
