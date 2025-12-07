import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useLoan } from "../context/LoanContext";

export default function LoanDetails() {
  const { loanId } = useParams();
  const { loanData  } = useLoan();
  const loan = loanData .find((l) => l.id.toString() === loanId);

  if (!loan) return <p className="text-center mt-10 text-red-500">Loan not found</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-10 space-y-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Loan Details — {loan.type}
          </h2>
          <Link to="/my-loans" className="text-blue-600 hover:underline">
            ← Back to My Loans
          </Link>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow space-y-3">
          <h3 className="font-semibold text-gray-800">Loan Summary</h3>
          <p><strong>Loan ID:</strong> {loan.id}</p>
          <p><strong>Amount:</strong> {loan.amount}</p>
          <p><strong>Term:</strong> {loan.term} months</p>
          <p><strong>Status:</strong> 
            <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
              loan.status === "Approved"
                ? "bg-green-100 text-green-700"
                : loan.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}>
              {loan.status}
            </span>
          </p>
        </div>

        {/* Uploaded Documents */}
        <div className="bg-white p-6 rounded-lg shadow space-y-2">
          <h3 className="font-semibold text-gray-800">Uploaded Documents</h3>

          {loan.documents ? (
            <>
              <p>📄 ID Proof: {loan.documents.idProof?.name || "Not Uploaded"}</p>
              <p>📄 Income Proof: {loan.documents.incomeProof?.name || "Not Uploaded"}</p>
              {loan.documents.extraDoc && (
                <p>📄 Additional Doc: {loan.documents.extraDoc.name}</p>
              )}
            </>
          ) : (
            <p className="text-gray-500 text-sm">No documents found</p>
          )}
        </div>

        {/* EMI Info */}
        <div className="bg-white p-6 rounded-lg shadow text-gray-600">
          <h3 className="font-semibold text-gray-800 mb-2">EMI Schedule</h3>
          <p className="text-sm">EMI schedule will appear once loan is approved.</p>
        </div>

      </div>
    </div>
  );
}
