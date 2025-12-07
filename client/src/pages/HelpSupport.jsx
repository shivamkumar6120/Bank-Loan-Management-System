import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSupport } from "../context/SupportContext";
import { toast } from "react-toastify";

export default function HelpSupport() {
  const { tickets, addTicket } = useSupport();
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!category || !subject || !description) {
      return toast.error("All fields are required!");
    }

    const newTicket = {
      id: Math.floor(Math.random() * 90000 + 10000),
      category,
      subject,
      description,
      status: "In Progress",
      updated: "Just now"
    };

    addTicket(newTicket);
    toast.success("Support ticket submitted!");
    setCategory("");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Help & Support Center</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Submit Ticket Form */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow space-y-4">
            <h3 className="font-semibold text-gray-800 mb-2">Submit a Support Ticket</h3>

            <select
              className="border rounded p-2 w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Issue Category</option>
              <option>Loan Status</option>
              <option>EMI Payment</option>
              <option>KYC Documents</option>
              <option>Profile Update</option>
            </select>

            <input
              className="border rounded p-2 w-full"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              className="border rounded p-2 w-full h-28"
              placeholder="Describe your issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button 
              className="px-6 py-2 bg-[#0A4D68] text-white rounded hover:bg-[#09718B]"
              onClick={handleSubmit}
            >
              Submit Ticket
            </button>
          </div>

          {/* Recent Tickets */}
          <div className="bg-white rounded-lg p-6 shadow space-y-4">
            <h3 className="font-semibold text-gray-800">Recent Support Tickets</h3>

            <ul className="space-y-3">
              {tickets.map((ticket) => (
                <li key={ticket.id} className="border p-3 rounded-md text-sm">
                  <p className="font-semibold">{ticket.subject}</p>
                  <p className="text-gray-600">{ticket.status}</p>
                  <p className="text-xs text-gray-500">{ticket.updated}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-6 shadow space-y-3">
          <h3 className="font-semibold text-gray-800">Top FAQs</h3>

          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
            <li>How to track loan application status?</li>
            <li>What happens if EMI is overdue?</li>
            <li>How do I update KYC?</li>
            <li>Can I cancel a pending loan application?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
