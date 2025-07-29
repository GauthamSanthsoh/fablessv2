import React from 'react';
import './About.css';
import backgroundImage from '../../assets/abstract.jpg';

const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <main className="glass-card">
        <div className="content-wrapper">
          <h1>About <span>Fabless Campus</span></h1>
          
          <div className="content-section">
            <p>
              Fabless Campus is revolutionizing semiconductor education by bridging the gap between 
              academia and industry. We empower the next generation of chip designers through 
              hands-on training, real-world projects, and industry connections.
            </p>
          </div>
          
          <div className="mission-vision">
            <div className="mv-card">
              <div className="icon-wrapper">
                <div className="icon-circle"></div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To transform students into industry-ready professionals and future founders 
                in the semiconductor ecosystem through immersive learning experiences.
              </p>
            </div>
            <div className="mv-card">
              <div className="icon-wrapper">
                <div className="icon-circle"></div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To become India's premier talent development hub for fabless semiconductor innovation, 
                fostering sustainable growth in the industry.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;