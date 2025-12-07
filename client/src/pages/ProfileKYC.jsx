import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useLoan } from "../context/LoanContext";
import { useNotification } from "../context/NotificationContext";

export default function ProfileKYC() {
  const { loanData } = useLoan();
  const { addNotification } = useNotification();

  // get latest loan which has documents (from ApplyLoan)
  const latestLoanWithDocs = useMemo(() => {
    if (!loanData || loanData.length === 0) return null;
    return [...loanData].reverse().find((l) => l.documents) || null;
  }, [loanData]);

  const [idProof, setIdProof] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [incomeProof, setIncomeProof] = useState(null);
  const [photoSign, setPhotoSign] = useState(null);

  // seed from latest loan documents (Q1: A)
  useEffect(() => {
    if (!latestLoanWithDocs || !latestLoanWithDocs.documents) return;

    const docs = latestLoanWithDocs.documents;
    if (!idProof && docs.idProof) setIdProof(docs.idProof);
    if (!incomeProof && docs.incomeProof) setIncomeProof(docs.incomeProof);
    if (!photoSign && docs.extraDoc) setPhotoSign(docs.extraDoc);
  }, [latestLoanWithDocs, idProof, incomeProof, photoSign]);

  // overall KYC status: Verified if both core docs present
  const isKycVerified = !!(idProof && incomeProof);

  const handleUpload = (setter, label) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setter(file);

    addNotification(`KYC document uploaded: ${label}`, "kyc", null);
  };

  const renderDocInfo = (file) => {
    if (!file) return "Not uploaded";
    const name = file.name || "Document";
    const sizeKb =
      typeof file.size === "number"
        ? ` (${(file.size / 1024).toFixed(1)} KB)`
        : "";
    return `${name}${sizeKb}`;
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10 space-y-8">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile & KYC</h2>
          <p className="text-sm text-gray-600 mt-1">
            View your registered profile information and manage your KYC
            documents for seamless loan processing.
          </p>
        </div>

        {/* Top: Profile summary + KYC status + Why KYC */}
        <div className="grid grid-cols-3 gap-6">
          {/* Profile summary */}
          <div className="bg-white rounded-xl shadow p-5 col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">
              Profile summary
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              Basic details are fetched from your bank profile.
            </p>

            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Full name</p>
                <p className="font-medium">Shivam Kumar</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-xs">Customer ID</p>
                  <p className="font-medium">CUST-123456</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="font-medium">+91 98765 12345</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <p className="font-medium">shivam@example.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Registered address</p>
                <p className="font-medium text-xs">
                  123, Demo Street, Bhilai, Chhattisgarh, 490001
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-gray-500">
              To update these details, please contact your branch or your
              internet banking profile settings.
            </p>
          </div>

          {/* KYC status */}
          <div className="bg-white rounded-xl shadow p-5 col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">KYC status</h3>
            <p className="text-xs text-gray-600 mb-3">
              Keep your identity documents updated for uninterrupted access to
              loan and EMI services.
            </p>

            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Overall KYC</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isKycVerified
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {isKycVerified ? "Verified" : "Pending"}
              </span>
            </div>

            <div className="space-y-1 text-xs text-gray-600">
              <p>
                Last updated:{" "}
                <span className="font-medium">
                  {new Date().toLocaleDateString()}
                </span>
              </p>
              <p>
                Risk profile:{" "}
                <span className="font-medium">Standard retail customer</span>
              </p>
            </div>

            <button className="mt-4 px-4 py-2 text-xs bg-[#0A4D68] text-white rounded-md hover:bg-[#09718B]">
              Upload / update KYC documents
            </button>
          </div>

          {/* Why KYC box */}
          <div className="bg-white rounded-xl shadow p-5 col-span-1 text-xs space-y-3">
            <h3 className="font-semibold text-gray-900">Why KYC is important</h3>
            <p className="text-gray-600">
              KYC (Know Your Customer) helps the bank verify your identity and
              protect you from fraud.
            </p>
            <div>
              <p className="font-semibold mb-1">With KYC completed you can</p>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>Apply for new loans instantly.</li>
                <li>Get faster approvals and disbursals.</li>
                <li>Manage EMIs and repayments fully online.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* KYC documents table */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold text-gray-900 mb-3">KYC documents</h3>
          <p className="text-xs text-gray-500 mb-4">
            Upload clear, valid documents for each category. The bank will
            review and approve them before activating your profile.
          </p>

          <table className="w-full text-xs">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left px-3 py-2">Document type</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Last updated</th>
                <th className="text-left px-3 py-2">Document</th>
                <th className="text-left px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* ID proof */}
              <tr className="border-b">
                <td className="px-3 py-2">
                  ID proof (Aadhaar / PAN / Passport)
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                      idProof
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {idProof ? "Accepted" : "Pending"}
                  </span>
                </td>
                <td className="px-3 py-2">
                  {idProof ? new Date().toLocaleDateString() : "—"}
                </td>
                <td className="px-3 py-2">{renderDocInfo(idProof)}</td>
                <td className="px-3 py-2">
                  <label className="text-xs text-[#0A4D68] cursor-pointer hover:underline">
                    {idProof ? "Replace" : "Upload"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleUpload(setIdProof, "ID proof")}
                    />
                  </label>
                </td>
              </tr>

              {/* Address proof */}
              <tr className="border-b">
                <td className="px-3 py-2">
                  Address proof (Utility bill / Rent agreement)
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                      addressProof
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {addressProof ? "Accepted" : "Pending review"}
                  </span>
                </td>
                <td className="px-3 py-2">
                  {addressProof ? new Date().toLocaleDateString() : "—"}
                </td>
                <td className="px-3 py-2">{renderDocInfo(addressProof)}</td>
                <td className="px-3 py-2">
                  <label className="text-xs text-[#0A4D68] cursor-pointer hover:underline">
                    {addressProof ? "Replace" : "Upload"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleUpload(
                        setAddressProof,
                        "Address proof"
                      )}
                    />
                  </label>
                </td>
              </tr>

              {/* Income proof */}
              <tr className="border-b">
                <td className="px-3 py-2">
                  Income proof (Salary slip / ITR / Bank statement)
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                      incomeProof
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {incomeProof ? "Accepted" : "Missing"}
                  </span>
                </td>
                <td className="px-3 py-2">
                  {incomeProof ? new Date().toLocaleDateString() : "—"}
                </td>
                <td className="px-3 py-2">{renderDocInfo(incomeProof)}</td>
                <td className="px-3 py-2">
                  <label className="text-xs text-[#0A4D68] cursor-pointer hover:underline">
                    {incomeProof ? "Replace" : "Upload"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleUpload(
                        setIncomeProof,
                        "Income proof"
                      )}
                    />
                  </label>
                </td>
              </tr>

              {/* Photo & signature */}
              <tr>
                <td className="px-3 py-2">Photo & signature</td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                      photoSign
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {photoSign ? "Verified" : "Pending upload"}
                  </span>
                </td>
                <td className="px-3 py-2">
                  {photoSign ? new Date().toLocaleDateString() : "—"}
                </td>
                <td className="px-3 py-2">{renderDocInfo(photoSign)}</td>
                <td className="px-3 py-2">
                  <label className="text-xs text-[#0A4D68] cursor-pointer hover:underline">
                    {photoSign ? "Replace" : "Upload"}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleUpload(
                        setPhotoSign,
                        "Photo & signature"
                      )}
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>

          <ul className="mt-4 text-[11px] text-gray-500 space-y-1">
            <li>
              • Upload only clear documents that show your full name, address
              and other required details.
            </li>
            <li>
              • Once uploaded, new documents are usually reviewed within 1–2
              working days (simulated here).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
