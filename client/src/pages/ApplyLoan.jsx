import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import { useLoan } from "../context/LoanContext";
import { useNotification } from "../context/NotificationContext";


export default function ApplyLoan() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const { addLoan } = useLoan();
  const navigate = useNavigate();

  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const [idProof, setIdProof] = useState(null);
  const [incomeProof, setIncomeProof] = useState(null);
  const [extraDoc, setExtraDoc] = useState(null);


const { addNotification } = useNotification();


  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 space-y-8">

        {/* Top Navigation */}
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-600">Apply for a new loan</h2>

          <Link to="/dashboard" className="text-[#0A4D68] font-medium hover:underline">
            Back to dashboard →
          </Link>
        </div>

        {/* Multi-step Header */}
        <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm text-sm font-medium">
          {[
            "Personal Information",
            "Employment Details",
            "Loan Details",
            "Documents & Review"
          ].map((label, i) => (
            <div
              key={i}
              className={`flex-1 p-2 text-center rounded-md ${
                step === i + 1 ? "bg-[#0A4D68] text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Step {i + 1} – {label}
            </div>
          ))}
        </div>

        {/* Main Form + Tips  */}
        <div className="grid grid-cols-3 gap-8">
          
          {/* Form Area */}
          <div className="col-span-2 bg-white shadow p-6 rounded-lg space-y-6">

            {step === 1 && (
              <>
                <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                <p className="text-gray-500 text-sm mb-4">
                  These details will match your KYC documents.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <input className="border p-3 rounded-md" placeholder="First Name" />
                  <input className="border p-3 rounded-md" placeholder="Last Name" />
                  <input className="border p-3 rounded-md" placeholder="Email Address" />
                  <input className="border p-3 rounded-md" placeholder="Phone Number" />
                </div>

                <input
                  className="border p-3 rounded-md w-full"
                  placeholder="Complete Address"
                />
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-xl font-semibold text-gray-900">Employment Details</h3>

                <div className="space-y-4">
                  <input className="border p-3 rounded-md w-full" placeholder="Employer Name" />
                  <input className="border p-3 rounded-md w-full" placeholder="Job Title" />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <input className="border p-3 rounded-md" placeholder="Monthly Income" />
                  <input className="border p-3 rounded-md" placeholder="Years Employed" />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-xl font-semibold text-gray-900">Loan Details</h3>

                <select
                  className="border p-3 rounded-md w-full"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                >
                  <option value="">Select Loan Type</option>
                  <option>Home Loan</option>
                  <option>Personal Loan</option>
                  <option>Car Loan</option>
                  <option>Education Loan</option>
                </select>

                <div className="grid grid-cols-2 gap-6">
                  <input
                    className="border p-3 rounded-md"
                    placeholder="Loan Amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                  <input
                    className="border p-3 rounded-md"
                    placeholder="Loan Term (months)"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>

                <input
                  className="border p-3 rounded-md w-full"
                  placeholder="Purpose of Loan"
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                />
              </>
            )}

            {step === 4 && (
  <>
    <h3 className="text-xl font-semibold text-gray-900">Documents & Review</h3>
    <p className="text-gray-500 mb-4 text-sm">Upload required documents before applying.</p>

    {/* File Upload Fields */}
    <div className="space-y-4">

      {/* ID Proof */}
      <div>
        <label className="text-sm font-medium text-gray-700">Government ID (Aadhaar / PAN)*</label>
        <input
          type="file"
          accept="image/*,.pdf"
          className="mt-1 w-full border p-2 rounded-md"
          onChange={(e) => setIdProof(e.target.files[0])}
        />
        {idProof && (
          <p className="text-xs text-blue-700 mt-1">
            📄 {idProof.name} ({(idProof.size / 1024).toFixed(1)} KB)
          </p>
        )}
      </div>

      {/* Income Proof */}
      <div>
        <label className="text-sm font-medium text-gray-700">Income Proof (Salary Slip / Bank Statement)*</label>
        <input
          type="file"
          accept="image/*,.pdf"
          className="mt-1 w-full border p-2 rounded-md"
          onChange={(e) => setIncomeProof(e.target.files[0])}
        />
        {incomeProof && (
          <p className="text-xs text-blue-700 mt-1">
            📄 {incomeProof.name} ({(incomeProof.size / 1024).toFixed(1)} KB)
          </p>
        )}
      </div>

      {/* Optional Additional Docs */}
      <div>
        <label className="text-sm font-medium text-gray-700">Additional Supporting Document (Optional)</label>
        <input
          type="file"
          className="mt-1 w-full border p-2 rounded-md"
          onChange={(e) => setExtraDoc(e.target.files[0])}
        />
        {extraDoc && (
          <p className="text-xs text-blue-700 mt-1">
            📄 {extraDoc.name} ({(extraDoc.size / 1024).toFixed(1)} KB)
          </p>
        )}
      </div>
    </div>

    {/* Review Box */}
    <div className="bg-blue-50 p-4 rounded-md mt-6">
      <strong>Loan Overview</strong>
      <p>Loan Type: {loanType || "N/A"}</p>
      <p>Amount: ₹{loanAmount || "0"}</p>
      <p>Term: {loanTerm || "0"} months</p>
    </div>
  </>
)}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <button
                disabled={step === 1}
                onClick={handlePrev}
                className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-40"
              >
                Previous
              </button>

              {step < totalSteps ? (
                <button
                  className="px-8 py-2 bg-[#0A4D68] text-white rounded-md hover:bg-[#09718B]"
                  onClick={handleNext}
                >
                  Next →
                </button>
              ) : (
                <button
                  className="px-8 py-2 bg-[#0A4D68] text-white rounded-md hover:bg-[#09718B]"
                  onClick={() => {
                    if (!loanType || !loanAmount || !loanTerm || !loanPurpose)
                      return toast.error("Fill all loan details!");
                    
                    
                     const loanObj = {
                          id: Math.floor(Math.random() * 9000 + 1000),
                          type: loanType,
                          amount: `₹${loanAmount}`,
                          term: loanTerm,
                          status: "Pending",
                          purpose: loanPurpose,
                          documents: {
                            idProof,
                            incomeProof,
                            extraDoc,
                          }
                        };

                        addLoan(loanObj);
                    // New Notification feature
                    addNotification (
                      `New loan request submitted (${loanObj.type})`,
                      "loan",
                      loanObj.id
                    )

                    toast.success("Loan submitted successfully!");
                    setTimeout(() => navigate("/dashboard"), 1000);
                  }}
                >
                  Submit →
                </button>
              )}
            </div>

          </div>

          {/* Right Insight Panel */}
          <div className="bg-white p-6 rounded-lg shadow space-y-6">
            <h3 className="font-semibold text-gray-900">Apply Loan Tips</h3>

            <div className="space-y-4 text-sm text-gray-600">
              <p>✔ Information auto-fill will be enabled in future.</p>
              <p>✔ Ensure your details match KYC documents.</p>
              <p>✔ All fields must be valid to continue.</p>
              <p>✔ Keep your ID and salary documents ready.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
