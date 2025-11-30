import React from "react";

const features = [
  { title: "Instant Approvals", desc: "Get your loan approved in minutes with our streamlined process", icon: "⏱" },
  { title: "Bank-Level Security", desc: "Your data is protected with advanced encryption technology", icon: "🛡" },
  { title: "Competitive Rates", desc: "Access the most competitive interest rates in the market", icon: "📈" },
  { title: "24/7 Support", desc: "Our dedicated team is always here to help you", icon: "🎧" },
  { title: "Easy Documentation", desc: "Simple paperwork with digital document submission", icon: "📝" },
  { title: "Trusted Platform", desc: "Join thousands of satisfied customers across the nation", icon: "🏛" },
];

const WhyChooseSection = () => {
  return (
    <section className="px-10 lg:px-24 py-20 text-center bg-blue-50">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Why Choose Loan Bridge?
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
         We provide a seamless lending experience with cutting-edge technology and personalized service.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-lg transition">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;