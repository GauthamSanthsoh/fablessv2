import React from 'react';
import './Company.css';
import Navbar from '../navbar/Navbar'

const Company = () => {
  return (
    <div className="company-container">
      <Navbar />
      <section className="company-hero">
        <h1>Power Your Semiconductor Innovation with Fabless Campus</h1>
        <p>
          Finding industry-ready semiconductor talent and cutting-edge research collaborations can be challenging.
          Fabless Campus bridges this gap by providing skilled engineers, academic partnerships, and prototyping
          support to accelerate your semiconductor initiatives.
        </p>
      </section>

      <section className="company-plan">
        <h2>🔹 Talent Access: Build Your Future Workforce</h2>
        <p><strong>Best for:</strong> Companies looking to hire skilled VLSI engineers and connect with emerging semiconductor talent.</p>
        <ul>
          <li>✅ Post internship & job opportunities on Fabless Campus</li>
          <li>✅ Access a talent pool trained in industry-ready skills</li>
        </ul>
        <p>📌 <strong>Cost:</strong> ₹0 (Free Forever)</p>
        <a href="#" className="company-button">👉 Access Talent</a>
      </section>

      <section className="company-plan">
        <h2>🔹 Industry Collaboration: Engage & Co-Create</h2>
        <p><strong>Best for:</strong> Companies wanting to collaborate with academic talent, host events, and drive semiconductor innovation.</p>
        <ul>
          <li>✅ All Talent Access benefits</li>
          <li>✅ Engage with student & faculty innovators</li>
          <li>✅ Host technical workshops & hackathons</li>
          <li>✅ Research collaboration with top universities</li>
        </ul>
        <p>📌 <strong>Cost:</strong> Custom Pricing Based on Scope & Collaboration Needs</p>
        <a href="#" className="company-button">👉 Explore Collaboration</a>
      </section>

      <section className="company-plan">
        <h2>🔹 Innovation Partnership: Accelerate R&D & Prototyping</h2>
        <p><strong>Best for:</strong> Companies seeking deep-tech collaboration, R&D support, and prototyping assistance.</p>
        <ul>
          <li>✅ All Industry Collaboration benefits</li>
          <li>✅ Joint prototyping & R&D with university labs</li>
          <li>✅ Access to the Fabless Center of Excellence (CoE) network</li>
          <li>✅ Tailored training programs for your team</li>
        </ul>
        <p>📌 <strong>Cost:</strong> Custom Pricing Based on Project Scope</p>
        <a href="#" className="company-button">👉 Partner for Innovation</a>
      </section>

      <section className="company-benefits">
        <h2>Why Collaborate with Fabless Campus?</h2>
        <ul>
          <li>✔ Hire pre-trained, industry-ready semiconductor engineers</li>
          <li>✔ Drive innovation through university R&D partnerships</li>
          <li>✔ Access a thriving ecosystem of semiconductor talent & research</li>
        </ul>
      </section>
    </div>
  );
};

export default Company;
