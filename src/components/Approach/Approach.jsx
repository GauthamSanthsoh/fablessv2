import React, { useState, useEffect } from 'react';
import './Approach.css';
import engageImg from '../../assets/engage.jpg';
import empowerImg from '../../assets/empower.jpg';
import elevateImg from '../../assets/elevate.jpg';

const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const approachItems = [
    {
      title: "Engage",
      description: "We bring the semiconductor industry experience to campus through hands-on events, hackathons, and real-world chip design challenges.",
      image: engageImg
    },
    {
      title: "Empower",
      description: "We equip students with industry-aligned training, expert mentorship, and hands-on VLSI projects, helping them develop in-demand semiconductor skills.",
      image: empowerImg
    },
    {
      title: "Elevate",
      description: "By providing direct industry exposure, tape-out opportunities, and career guidance, we enable students to secure core placements, pursue higher studies, or launch their own fabless startups.",
      image: elevateImg
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % approachItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [approachItems.length]);

  return (
    <div className="approach">
      <div className="approach-slider">
        <div className="slider-container">
          <img 
            src={approachItems[activeIndex].image} 
            alt={approachItems[activeIndex].title}
            className="slider-image"
          />
          <div className="slider-overlay"></div>
          <div className="slider-content">
            <h3>{approachItems[activeIndex].title}</h3>
            <p>{approachItems[activeIndex].description}</p>
            <div className="slider-indicators">
              {approachItems.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;