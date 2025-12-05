import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user,setUser] = useState({email:"",
        password:""
    });
    const navigate = useNavigate();

    function emailHandler(e){
        setUser((prevUser)=>({...prevUser,email:e.target.value}))
    }
     function passwordHandler(e){
        setUser((prevUser)=>({...prevUser,password:e.target.value}))
    }
    async function loginHandler(){
        console.log(user)
        navigate("/dashboard");
    }
  return (
    <div className="flex min-w-[100vw]">
      <div className="w-[40%] bg-gradient-to-br to-teal-500 from-blue-500 min-h-screen flex items-center justify-center flex-col">
            <div className="flex gap-3 items-center ">
                <CgWebsite size={"70px"} color="white"/>
                <p className="text-white font-semibold text-[3.5rem]">Loan Ease</p>
            </div>
            <div className="text-white">
                <p>Your trusted partner in loan management.</p>
                <p>Secure,fast and reliable financial solutions.</p>
                <ul className="list-disc">
                    <li>Instant loan approval</li>
                    <li>Secure transactions</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>

      </div>
      <div className="w-[60%] flex items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-10 border border-gray-100">
          {/* Heading */}
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
          <button className="w-full py-2 bg-gradient-to-r to-teal-500 from-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition" onClick={loginHandler}>
            Sign in
          </button>

          {/* Signup link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <span className="text-blue-600 font-medium hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

          <p className="text-center text-xs text-gray-400 mt-6">
            Secured with bank-level encryption
          </p>
        </div>
      </div>
    </div>
  );
};
