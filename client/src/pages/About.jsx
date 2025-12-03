import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page bg-light">
      
      {/* Hero Header */}
      <section className="text-center text-white py-5" style={{ background: "linear-gradient(135deg,#0466c8,#0a2472)" }}>
        <h1 className="fw-bold display-5">About LoanFlow</h1>
        <p className="lead opacity-75">Your Trusted Partner in Financial Growth</p>
        
        <Link to="/" className="btn btn-outline-light rounded-pill mt-3 px-4">
          <button>Home</button>
        </Link>
      </section>

      {/* About Intro */}
      <section className="container py-5">
        <div className="card shadow-lg border-0 p-4 rounded-4 mx-auto" style={{ maxWidth: "900px" }}>
          <p className="fs-5 text-center text-muted">
            LoanFlow is a modern online banking platform designed to simplify and 
            accelerate your loan experience—making finance secure, fast, and accessible.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-6">
            <div className="card h-100 p-4 shadow border-0 rounded-4">
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-goal-achievement-flaticons-lineal-color-flat-icons.png" alt="mission" className="mx-auto" />
              <h5 className="fw-bold mt-3">Our Mission</h5>
              <p className="text-muted small mt-2">
                To democratize finance through a transparent and customer-focused loan system.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 p-4 shadow border-0 rounded-4">
              <img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-vision-leadership-wanicon-flat-wanicon.png" alt="vision" className="mx-auto" />
              <h5 className="fw-bold mt-3">Our Vision</h5>
              <p className="text-muted small mt-2">
                To become the most innovative & trusted digital lending solution worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h3 className="text-center fw-bold">Why Choose LoanFlow?</h3>
        <p className="text-center text-muted mb-4">Experience a new era of lending!</p>
        
        <div className="row text-center g-4">
          {[
            { icon: "bi-people", title: "Customer First", desc: "Personalized support throughout your journey" },
            { icon: "bi-shield-check", title: "Secure & Trusted", desc: "Bank-level security & data protection" },
            { icon: "bi-lightning-charge", title: "Fast Approvals", desc: "Quick decisions when time matters most" }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card rounded-4 border-0 shadow-sm p-4 h-100">
                <i className={`bi ${item.icon} fs-1 text-primary`}></i>
                <h6 className="fw-bold mt-3">{item.title}</h6>
                <p className="text-muted small mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-5 mt-4">
        <div className="container text-center">
          <h4 className="fw-bold mb-4">Our Performance Snapshot</h4>
          <div className="row g-4">
            <div className="col-md-4">
              <h2 className="fw-bold">$500M+</h2>
              <p className="small">Loans Disbursed</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold">50,000+</h2>
              <p className="small">Happy Customers</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold">4.8/5</h2>
              <p className="small">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
