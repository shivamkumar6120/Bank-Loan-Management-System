import { useState } from "react";
import { Link } from "react-router-dom";


export default function ApplyLoan() {
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const handleNext = () => step < totalSteps && setStep(step + 1);
  const handlePrev = () => step > 1 && setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md">

        {/* Back Button */}
        <Link
          to="/dashboard"
          className="text-gray-600 flex items-center gap-1 mb-4 hover:text-gray-900"
        >
          ← Back to Home
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
              className={`h-2 flex-1 rounded-full ${
                step >= s ? "bg-blue-900" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

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
              onClick={() => alert("Application Submitted Successfully!")}
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}