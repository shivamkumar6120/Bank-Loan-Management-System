import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* Back Button + Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className="text-sm text-gray-600 hover:underline flex items-center mb-4"
        >
          ← Back to Home
        </Link>
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Have questions? We'd love to hear from you.
        </h2>
      </div>

      
      
    </div>
  );
}
