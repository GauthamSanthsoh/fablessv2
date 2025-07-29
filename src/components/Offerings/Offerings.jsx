import React from 'react';
import './Offerings.css';

function Offerings() {
  return (
    <div className='offerings'>
      <section className='hero-banner'>
        <h1>Students</h1>
        <h2>Your Pathway to the Semiconductor Industry Starts Here with Fabless Campus</h2>
      </section>

      <section className='student-offerings'>
        <h3>Choose the Right Path for Your Semiconductor Journey</h3>
        <div className='plans'>
          <div className='plan-card'>
            <h4>Free Plan 🎓</h4>
            <ul>
              <li>✅ Join the Fabless Community</li>
              <li>✅ Stay Updated with Industry News & Trends</li>
              <li>✅ Access Internship & Placement Listings</li>
              <li>❌ Self-Learning Resource Materials</li>
              <li>❌ Guaranteed Internship Opportunities</li>
              <li>❌ Industry Projects & Capstone Experience</li>
              <li>❌ Exclusive Workshops & Expert Mentorship</li>
              <li>❌ Finishing School Certification</li>
              <li>❌ Guaranteed Placement Interviews</li>
              <li>❌ Success Fee</li>
            </ul>
          </div>

          <div className='plan-card'>
            <h4>Premium Plan 💡 ₹1,999</h4>
            <ul>
              <li>✅ Join the Fabless Community</li>
              <li>✅ Stay Updated with Industry News & Trends</li>
              <li>✅ Access Internship & Placement Listings</li>
              <li>✅ Self-Learning Resource Materials</li>
              <li>✅ Guaranteed Internship Opportunities</li>
              <li>✅ Industry Projects & Capstone Experience</li>
              <li>✅ Exclusive Workshops & Expert Mentorship</li>
              <li>❌ Finishing School Certification</li>
              <li>❌ Guaranteed Placement Interviews</li>
              <li>❌ Success Fee</li>
            </ul>
          </div>

          <div className='plan-card'>
            <h4>Finishing School 🚀 ₹10,000 + Success Fee</h4>
            <ul>
              <li>✅ Join the Fabless Community</li>
              <li>✅ Stay Updated with Industry News & Trends</li>
              <li>✅ Access Internship & Placement Listings</li>
              <li>✅ Self-Learning Resource Materials</li>
              <li>✅ Guaranteed Internship Opportunities</li>
              <li>✅ Industry Projects & Capstone Experience</li>
              <li>✅ Exclusive Workshops & Expert Mentorship</li>
              <li>✅ Finishing School Certification</li>
              <li>✅ Guaranteed Placement Interviews</li>
              <li>✅ Success Fee: ₹10,000 + 5X Monthly Salary (or ₹99,999 Flat)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='university-offerings'>
        <h3>Universities/Colleges</h3>
        <p>Fabless Campus bridges the gap between academia and the semiconductor industry...</p>

        <div className='university-plans'>
          <div className='plan-card'>
            <h4>Basic Partnership</h4>
            <p>Best for: Colleges introducing students to semiconductor careers.</p>
            <ul>
              <li>✅ Webinars & Expert Talks</li>
              <li>✅ Internship & Placement Listings</li>
              <li>📌 Cost: ₹0</li>
            </ul>
            <button>Sign Up for Free</button>
          </div>

          <div className='plan-card'>
            <h4>Industry-Ready Campus</h4>
            <p>Best for: Colleges wanting to create job-ready graduates.</p>
            <ul>
              <li>✅ All Basic Partnership Benefits</li>
              <li>✅ VLSI Resources & Projects</li>
              <li>✅ Faculty Development</li>
              <li>✅ Workshops & Hackathons</li>
              <li>📌 Custom Pricing</li>
            </ul>
            <button>Become an Industry-Ready Campus</button>
          </div>

          <div className='plan-card'>
            <h4>Fabless Center of Excellence (CoE)</h4>
            <p>Best for: Universities aiming for full-fledged semiconductor training hubs.</p>
            <ul>
              <li>✅ All Industry-Ready Campus Benefits</li>
              <li>✅ Dedicated Lab Setup</li>
              <li>✅ Finishing School Integration</li>
              <li>✅ Guaranteed Placement Interviews</li>
              <li>📌 Custom Pricing</li>
            </ul>
            <button>Set Up a CoE</button>
          </div>
        </div>

        <div className='why-partner'>
          <h4>Why Partner with Fabless Campus?</h4>
          <ul>
            <li>✔ Bridge the academia-industry gap</li>
            <li>✔ Boost student employability</li>
            <li>✔ Establish innovation hubs</li>
          </ul>
          <button>Get in Touch to Explore Partnership Opportunities</button>
        </div>
      </section>

      <section className='companies'>
        <h3>Companies</h3>
        <p>Power Your Semiconductor Innovation with Fabless Campus</p>

        <div className='company-plans'>
          <div className='plan-card'>
            <h4>Talent Access</h4>
            <ul>
              <li>✅ Post Job/Internship Listings</li>
              <li>✅ Access Trained Talent Pool</li>
              <li>📌 Cost: ₹0</li>
            </ul>
            <button>Access Talent</button>
          </div>

          <div className='plan-card'>
            <h4>Industry Collaboration</h4>
            <ul>
              <li>✅ All Talent Access Benefits</li>
              <li>✅ Workshops & Hackathons</li>
              <li>✅ Research Collaborations</li>
              <li>📌 Custom Pricing</li>
            </ul>
            <button>Explore Collaboration</button>
          </div>

          <div className='plan-card'>
            <h4>Innovation Partnership</h4>
            <ul>
              <li>✅ All Collaboration Benefits</li>
              <li>✅ Joint Prototyping & R&D</li>
              <li>✅ Access to CoE Network</li>
              <li>✅ Tailored Training for Teams</li>
              <li>📌 Custom Pricing</li>
            </ul>
            <button>Partner for Innovation</button>
          </div>
        </div>

        <div className='why-collaborate'>
          <h4>Why Collaborate with Fabless Campus?</h4>
          <ul>
            <li>✔ Hire pre-trained engineers</li>
            <li>✔ Partner on research & innovation</li>
            <li>✔ Access talent & R&D ecosystem</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Offerings;
