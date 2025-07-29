import React, { useRef, useEffect } from 'react';
import './Learn.css';

const learnSections = [
  {
    title: "The Opportunity: A New Era in Semiconductors Starts Here",
    points: [
      "Semiconductors power key technologies including AI, EVs, 5G, and space tech.",
      "The global semiconductor market is expected to exceed $1 trillion by 2030.",
      "India's ₹76,000 crore Semicon Mission aims to establish the country as a global design hub.",
      "Over 85,000 core technology jobs are being created in India through this mission.",
      "Colleges need to prepare students for opportunities in this fast-growing industry."
    ]
  },
  {
    title: "The Talent Gap: A $1 Trillion Industry Can't Run on Theory",
    points: [
      "Less than 20% of engineering graduates are employable in semiconductor roles.",
      "Core VLSI, chip design, RF, and system verification are missing in most curricula.",
      "Students lack exposure to industry tools and workflows.",
      "Faculty need structured pathways to bring industry knowledge into classrooms.",
      "Institutions need practical, hands-on programs to bridge this gap."
    ]
  },
  {
    title: "Our Approach: We Bring the Fabless World to Your Campus",
    points: [
      "Fabless Campus simulates a real-world fabless design company within your college.",
      "Students train on industry-standard EDA tools such as Cadence and Synopsys.",
      "They engage in actual chip design projects, from RTL to tape-out.",
      "Startup collaborations offer live projects, hackathons, and internships.",
      "Faculty participate as co-mentors and connect with industry experts.",
      "Colleges gain recognition as semiconductor innovation hubs."
    ]
  }
];

const outcomes = [
  {
    heading: "Placement",
    text: "Students gain hands-on experience with industry tools and workflows, enabling them to secure roles in leading semiconductor design companies."
  },
  {
    heading: "Higher Studies",
    text: "Strong project portfolios and exposure to real-world challenges help students stand out in applications to top global universities."
  },
  {
    heading: "Startup Path",
    text: "With mentorship from industry experts and access to prototyping support, students are empowered to launch their own fabless ventures from campus."
  }
];

const Learn = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll('.outcome-card');
    let currentIndex = 0;
    const totalItems = items.length;
    const angle = 360 / totalItems;

    const rotateSlider = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateSlider();
    };

    const updateSlider = () => {
      items.forEach((item, index) => {
        const rotation = (index - currentIndex) * angle;
        item.style.transform = `rotateY(${rotation}deg) translateZ(250px)`;
        item.style.opacity = rotation === 0 ? 1 : 0.6;
      });
    };

    // Initialize slider
    updateSlider();
    
    // Auto-rotate every 3 seconds
    const interval = setInterval(rotateSlider, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="learn" id="learn-section">
      <h2>Why Fabless Campus?</h2>
      <div className="learn-sections">
        {learnSections.map((section, index) => (
          <div className="learn-card" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="outcomes-section">
        <h3>Fabless Campus Outcomes: <span>Launchpad for Your Semiconductor Journey</span></h3>
        <div className="slider-container" ref={sliderRef}>
          {outcomes.map((outcome, index) => (
            <div className="outcome-card" key={index}>
              <h4>{outcome.heading}</h4>
              <p>{outcome.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;