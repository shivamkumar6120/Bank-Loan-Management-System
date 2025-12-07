import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSupport } from "../context/SupportContext";
import { toast } from "react-toastify";
import { useNotification } from "../context/NotificationContext";


export default function HelpSupport() {
  const { tickets, addTicket } = useSupport();
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { addNotification } = useNotification();


  const faqList = [
    {
      question: "How do I track the status of my loan application?",
      answer:
        "Go to Dashboard > Loan Applications. Status shows Approved, Pending, or Rejected.",
      tag: "Loan status"
    },
    {
      question: "What happens if my EMI is overdue?",
      answer:
        "Overdue EMIs will be shown in red. Late fee may apply and will be shown before payment.",
      tag: "EMI & repayment"
    },
    {
      question: "How can I update my KYC documents?",
      answer:
        "Navigate to Profile & KYC from sidebar, then upload/update documents under each type.",
      tag: "KYC & profile"
    },
    {
      question: "Can I cancel a loan application?",
      answer:
        "You can cancel applications that are still pending from the Loan Applications section.",
      tag: "Loan management"
    }
  ];

  const handleSubmit = () => {
  if (!category || !subject || !description)
    return toast.error("All fields are required!");

  const newTicket = {
    id: "SUP-" + Math.floor(Math.random() * 9000 + 1000),
    subject,
    status: "In Progress",
    updated: "Just now",
  };

  addTicket(newTicket);

  //  SEND NOTIFICATION
  addNotification(
    `Support ticket created: ${newTicket.subject}`,
    "support",
    newTicket.id
  );

  toast.success("Support ticket submitted!");

  // Reset form
  setCategory("");
  setSubject("");
  setDescription("");
};


  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8 space-y-10">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Help & Support Center
          </h2>
        </div>

        {/* GRID - 2 columns */}
        <div className="grid grid-cols-3 gap-8">

          {/* SUBMIT TICKET FORM */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow space-y-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Submit a Support Ticket
            </h3>

            <select
              className="border rounded p-3 w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Category</option>
              <option>Loan Status</option>
              <option>EMI Payment</option>
              <option>KYC Documents</option>
              <option>Profile</option>
            </select>

            <input
              className="border rounded p-3 w-full"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              className="border rounded p-3 w-full h-32"
              placeholder="Describe your issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              className="bg-[#0A4D68] text-white px-6 py-2 rounded-md hover:bg-[#09718B]"
              onClick={handleSubmit}
            >
              Submit Ticket
            </button>
          </div>

          {/* RECENT TICKETS */}
          <div className="bg-white rounded-lg p-6 shadow space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">
                Recent Support Tickets
              </h3>
              <span className="text-gray-500 text-xs">Last 30 days</span>
            </div>

            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="pb-2">Ticket ID</th>
                  <th className="pb-2">Subject</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="py-2 text-blue-600 font-medium">
                      {ticket.id}
                    </td>
                    <td className="py-2">{ticket.subject}</td>
                    <td className="py-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : ticket.status === "Closed"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-2 text-gray-500">{ticket.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination UI */}
            <div className="flex justify-between text-xs text-gray-600 pt-3">
              <span>Showing {tickets.length} of {tickets.length} tickets</span>
              <div className="flex gap-3">
                <button className="hover:text-blue-600">Previous</button>
                <span className="px-2 py-1 bg-[#0A4D68] text-white rounded">1</span>
                <button className="hover:text-blue-600">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="flex justify-between">
            <h3 className="font-semibold text-gray-800">Top FAQs</h3>
            <span className="text-blue-600 text-sm cursor-pointer hover:underline">
              View all FAQs
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="p-4 border rounded hover:bg-gray-50 cursor-pointer space-y-1"
              >
                <p className="font-medium text-gray-800">{faq.question}</p>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                  {faq.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
