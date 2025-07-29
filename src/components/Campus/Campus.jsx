import React from 'react';
import './Campus.css';

const Campus = () => {
  return (
    <div className="campus-page">
      <header className="campus-hero">
        <h1>Partner with Fabless Campus</h1>
        <p>
          Bridge the academia-industry gap and transform your institution into a semiconductor talent hub.
          Enable your students with real-world skills, hands-on training, and core job opportunities.
        </p>
      </header>

      <section className="campus-intro">
        <h2>Why Collaborate with Us?</h2>
        <ul>
          <li>✔ Bridge the academia-industry gap with real-world projects</li>
          <li>✔ Boost student employability with industry-backed training</li>
          <li>✔ Establish your college as a semiconductor innovation hub</li>
        </ul>
        <a
          href="https://www.eubrics.com/organizational-development"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch to Explore Partnership Opportunities
        </a>
      </section>

      <section className="campus-plans">
        <div className="plan-card basic">
          <h3>Basic Partnership</h3>
          <p><strong>Best for:</strong> Colleges introducing students to semiconductor careers.</p>
          <ul>
            <li>✅ Access industry webinars & expert talks</li>
            <li>✅ Internship & placement listings</li>
          </ul>
          <p className="cost">📌 Cost: ₹0 (Forever Free)</p>
          <a href="#" className="plan-link">👉 Sign Up for Free</a>
        </div>

        <div className="plan-card industry">
          <h3>Industry-Ready Campus</h3>
          <p><strong>Best for:</strong> Colleges seeking hands-on training & faculty development.</p>
          <ul>
            <li>✅ All Basic benefits</li>
            <li>✅ VLSI self-learning resources</li>
            <li>✅ Industry projects & capstone experience</li>
            <li>✅ Faculty upskilling programs</li>
            <li>✅ Hackathons & hands-on workshops</li>
          </ul>
          <p className="cost">📌 Cost: ₹XX/Year (Based on Intake)</p>
          <a href="#" className="plan-link">👉 Become an Industry-Ready Campus</a>
        </div>

        <div className="plan-card excellence">
          <h3>Fabless Center of Excellence (CoE)</h3>
          <p><strong>Best for:</strong> Universities building in-house labs & finishing schools.</p>
          <ul>
            <li>✅ All Industry-Ready benefits</li>
            <li>✅ Semiconductor Lab Setup</li>
            <li>✅ Finishing School for core training</li>
            <li>✅ Guaranteed placement interviews</li>
            <li>✅ Exclusive industry collaborations</li>
          </ul>
          <p className="cost">📌 Cost: Custom Pricing Based on Scope</p>
          <a href="#" className="plan-link">👉 Set Up a CoE</a>
        </div>
      </section>
    </div>
  );
};

export default Campus;
