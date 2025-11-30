import React, { useState } from "react";
import { Link } from "react-router-dom";  

const HeroSection = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(5);

  // EMI Calculation Logic
  const calculateEMI = () => {
    const P = Number(loanAmount);
    const r = Number(interestRate) / 12 / 100; // Monthly interest rate
    const n = Number(loanTerm) * 12; // Loan term in months

    if (P <= 0 || r <= 0 || n <= 0) return 0;

    const emi =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    return emi.toFixed(2);
  };

  const emi = calculateEMI();

  return ( 
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 bg-blue-50">
      
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-blue-900 leading-tight">
          Bridge Your Financial <br />
          <span className="text-teal-600">Dreams to Reality</span>
        </h1>

        <p className="text-gray-600 mt-4">
          Access quick, secure, and hassle-free loans with competitive rates. 
          Your trusted partner in achieving financial freedom.
        </p>

        <div className="mt-8 flex gap-4">
          {/* Apply Now → Signup */}
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:opacity-90 transition inline-block"
          >
            Apply Now
          </Link>

          {/* Sign In */}
          <Link
            to="/login"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Right Calculator Card */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl text-white p-8 w-full max-w-sm mt-10 lg:mt-0 shadow-xl">
        <h3 className="text-xl font-semibold">Loan Calculator</h3>
        <p className="text-sm opacity-80">Calculate your monthly payments</p>

        {/* Loan Amount */}
        <div className="mt-6">
          <label className="text-sm opacity-80">Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded bg-white text-black outline-none"
          />
        </div>

        {/* Interest & Term */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm opacity-80">Interest %</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded bg-white text-black outline-none"
            />
          </div>
          <div>
            <label className="text-sm opacity-80">Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded bg-white text-black outline-none"
            />
          </div>
        </div>

        {/* EMI Result */}
        <div className="mt-6 border-t border-white/30 pt-4">
          <p className="text-sm opacity-80">Monthly Payment</p><br />
          <p className="text-3xl font-bold">₹ {emi}</p>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
