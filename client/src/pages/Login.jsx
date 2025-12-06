import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function emailHandler(e) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }
  function passwordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
  }
  async function loginHandler() {
    console.log(user);
    navigate("/dashboard");
  }
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:flex-col lg:w-1/2 bg-gradient-to-br to-teal-600 from-blue-500 items-center justify-center overflow-hidden">
        <Link
          to="/"
          className="flex gap-4 justify-center mb-6 hover:opacity-80 transition-opacity"
        >
          <div className="text-white text-6xl bg-blue-400 p-3 backdrop-blur-sm rounded-xl">
            <FaBuilding title="Building" />
          </div>
          <p className="text-white font-semibold text-[3.5rem]">Loan Ease</p>
        </Link>
        <div className="text-xl text-white/90 mb-8 max-w-md">
          <p>
            Start your journey to financial freedom. Join thousands of satisfied
            customers today.
          </p>
          <ul className="list-disc space-y-2 text-white/80 mt-2">
            <li>Quick account setup</li>
            <li>No hidden fees</li>
            <li>Instant verification</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center  bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-10 border border-gray-100">
          {/* Heading */}
          <Link
            to="/"
            className="flex lg:hidden items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="text-blue-500 text-2xl">
              <FaBuilding title="Building" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-br from-blue-500 to-teal-400 text-transparent">
              Loan Bridge
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
          <p className="text-gray-500 mt-1 mb-8">
            Sign in to your account to continue
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={emailHandler}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <button className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={passwordHandler}
            />
          </div>

          {/* Sign in button */}
          <button
            className="w-full py-2 bg-gradient-to-r to-teal-500 from-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
            onClick={loginHandler}
          >
            Sign in
          </button>

          {/* Signup link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to='/register' className="text-blue-600 font-medium hover:underline cursor-pointer">
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-6">
            Secured with bank-level encryption
          </p>
        </div>
      </div>
    </div>
  );
};
