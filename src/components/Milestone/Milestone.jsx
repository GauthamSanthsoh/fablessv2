import React from 'react';
import './Milestone.css';

const milestones = [
  {
    step: '1',
    title: 'Engage',
    desc: 'Events, Hackathons, Industry Connect'
  },
  {
    step: '2',
    title: 'Empower',
    desc: 'Self-learning, Mentorship, Certification'
  },
  {
    step: '3',
    title: 'Elevate',
    desc: 'Higher Studies, Placements, Startups'
  },
  {
    step: '4',
    title: 'Alumni',
    desc: 'Community, Growth, Mentorship'
  }
];

const Milestone = () => {
  // Calculate positions for milestones
  const getMilestonePosition = (index) => {
    const position = index / (milestones.length - 1) * 0.8 + 0.1;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M 0,100 C 200,20 400,180 600,100 800,20 1000,180 1000,100");
    const point = path.getPointAtLength(position * path.getTotalLength());
    return { left: `${point.x / 10}%`, top: `${point.y / 2}%` };
  };

  return (
    <div className="milestone-container">
      <h3>Our Student Journey: <span>(Milestones Overview)</span></h3>
      
      <div className="timeline-container">
        <svg className="timeline-curve" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path 
            d="M 0,100 C 200,20 400,180 600,100 800,20 1000,180 1000,100" 
            fill="none" 
            stroke="#b74b4b" 
            strokeWidth="4"
            strokeDasharray="10,8"
          />
        </svg>
        
        <div className="milestones-horizontal">
          {milestones.map((item, index) => {
            const position = getMilestonePosition(index);
            return (
              <div 
                className="milestone-point" 
                key={index}
                style={position}
              >
                <div className="milestone-content">
                  <div className="milestone-step">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Milestone;