import React from 'react';
import './Student.css';

const Student = () => {
  return (
    <div className="student-container">
      <section className="hero-section">
        <h1>Your Pathway to the Semiconductor Industry Starts Here with <span>Fabless Campus</span></h1>
        <p>We bring the semiconductor industry to your campus, helping you build industry-ready skills and access real-world opportunities.</p>
      </section>

      <section className="plans-section">
        <h2>Choose the Right Path for Your Semiconductor Journey</h2>
        <div className="plans-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Free Plan 🎓</th>
                <th>Premium Plan 💡 ₹1,999</th>
                <th>Finishing School 🚀 ₹10,000 + Success Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Join the Fabless Community</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>Stay Updated with Industry News & Trends</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>Access Internship & Placement Listings</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>Self-Learning Resource Materials</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Guaranteed Internship Opportunities</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Industry Projects & Capstone Experience</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Exclusive Workshops & Expert Mentorship</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Finishing School Certification</td><td>❌</td><td>❌</td><td>✅</td></tr>
              <tr><td>Guaranteed Placement Interviews</td><td>❌</td><td>❌</td><td>✅</td></tr>
              <tr><td>Success Fee</td><td>❌</td><td>❌</td><td>₹10,000 + 5X Monthly Salary (or ₹99,999 Flat)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Student;
