import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* Back Button + Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-8 bg-blue-200 ">
        <Link
          to="/"
          className="text-sm text-grey-300 hover:underline flex items-center mb-5">
          Back to Home
        </Link>
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-3">
          Get In Touch
        </h2>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
          Have questions? We'd love to hear from you.
        </h2>
      </div>

    
      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mt-10">
        
        {/* Left - Contact Info */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
          <p className="text-gray-500 text-sm mt-1">
            Reach out through any of these channels
          </p>

          <div className="mt-6 space-y-6 text-gray-700 text-sm">
            <div className="flex items-start gap-3">
              <i className="bi bi-envelope text-blue-600 text-xl"></i>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500">support@cdacproject.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bi bi-telephone text-blue-600 text-xl"></i>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500">(+91) 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bi bi-geo-alt text-blue-600 text-xl"></i>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-500">
                  Road no 19 Hinjewadi pune <br />
                  Maharashtra, India 490016 <br />

                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bi bi-clock text-blue-600 text-xl"></i>
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-gray-500">
                  Monday - Friday: 9:00 AM - 6:00 PM IST <br />
                  Saturday: 10:00 AM - 4:00 PM IST <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Box */}
          <div className="bg-gray-100 text-gray-700 rounded-lg p-4 mt-6 text-sm">
            <p className="font-medium">Need immediate assistance?</p>
            <p className="text-gray-500 mt-1">
              For urgent matters, please call our 24/7 emergency hotline <br />
              at (+91) 96385 27410
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <form className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Send Us a Message
          </h3>
          <p className="text-gray-500 text-sm">
            Fill out the form and we'll respond within 24 hours
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Shivam"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Kashyap"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="shivam@gmail.com"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(+91) 98765 43210"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 w-full border-gray-300 rounded-lg text-sm p-2 h-24 resize-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us more about your inquiry..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}