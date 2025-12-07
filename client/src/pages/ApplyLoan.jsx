import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoan } from "../context/LoanContext";


export default function ApplyLoan() {
    const [step, setStep] = useState(1);

    const totalSteps = 4;

    const handleNext = () => step < totalSteps && setStep(step + 1);
    const handlePrev = () => step > 1 && setStep(step - 1);

    const { addLoan } = useLoan();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md">

                {/* Back Button */}
                <Link
                    to="/dashboard"
                    className="text-gray-600 flex items-center gap-1 mb-4 hover:text-gray-900"
                >
                    ← Back to Dashboard
                </Link>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900">Loan Application</h2>
                <p className="text-gray-600 mt-1">
                    Complete the steps below to apply for your loan
                </p>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-6 mb-10">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`h-2 flex-1 rounded-full ${step >= s ? "bg-blue-900" : "bg-gray-200"
                                }`}
                        />
                    ))}
                </div>

                {/* ================= STEP 1 — PERSONAL INFO ================= */}

                {step === 1 && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium">First Name</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="John"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Last Name</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="Doe"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Phone Number</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-sm font-medium">Address</label>
                            <input
                                className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                placeholder="123 Main St, City, State"
                            />
                        </div>
                    </>
                )}

                {/* ================= STEP 2 — EMPLOYMENT ================= */}
                {step === 2 && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Employment Details
                        </h3>

                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="text-sm font-medium">Employer Name</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="ABC Company"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Job Title</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="Software Engineer"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <label className="text-sm font-medium">Monthly Income</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="5000"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Years Employed</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="3"
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* ================= STEP 3 — LOAN DETAILS ================= */}

                {step === 3 && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Loan Details
                        </h3>

                        <div className="mb-6">
                            <label className="text-sm font-medium">Loan Type</label>
                            <select className="w-full mt-1 border rounded-lg p-3 bg-gray-50">
                                <option>Select loan type</option>
                                <option>Home Loan</option>
                                <option>Personal Loan</option>
                                <option>Education Loan</option>
                                <option>Car Loan</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium">Loan Amount</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="10000"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Loan Term (months)</label>
                                <input
                                    className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                    placeholder="24"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-sm font-medium">Loan Purpose</label>
                            <input
                                className="w-full mt-1 border rounded-lg p-3 bg-gray-50"
                                placeholder="Home improvement"
                            />
                        </div>
                    </>
                )}

                {/* ================= STEP 4 — DOCUMENTS ================= */}
                {step === 4 && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Documents & Review
                        </h3>

                        <div className="mb-6">
                            <label className="text-sm font-medium">ID Document</label>
                            <input type="file" className="w-full mt-1 p-3 border rounded-lg" />
                        </div>

                        <div className="mb-6">
                            <label className="text-sm font-medium">Proof of Income</label>
                            <input type="file" className="w-full mt-1 p-3 border rounded-lg" />
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg text-gray-700 text-sm">
                            <strong>Review your application</strong>
                            <p>Please check everything before submitting.</p>
                        </div>
                    </>
                )}


                {/* ================= BUTTONS ================= */}
                <div className="flex justify-between mt-10">
                    <button
                        onClick={handlePrev}
                        disabled={step === 1}
                        className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-30"
                    >
                        ← Previous
                    </button>



                    {step < totalSteps ? (
                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                        >
                            Next →
                        </button>
                    ) : (
                        <button
                            className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                            onClick={() => {
                                // 🔥 Added: new loan submission logic
                                const newLoan = {
                                    id: Math.floor(Math.random() * 900 + 100),
                                    type: "Personal Loan",
                                    amount: "₹50,000",
                                    status: "Pending",
                                };
                                addLoan(newLoan);
                                toast.success("Loan application submitted! Pending review.");
                                setTimeout(() => navigate("/dashboard"), 1000);
                            }}
                        >
                            Submit Application
                        </button>
                    )}
                </div>




            </div>
        </div>
    );
}