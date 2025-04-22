import React from 'react';
import '../style.css';
import educationIcon from '../assets/education.png';
import experienceIcon from '../assets/experience.png';
import checkmarkIcon from '../assets/checkmark.png';

export default function About() {
  return (
    <section id="about" style={{ textAlign: 'center' }}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div
        className="about-details-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
          gap: '2rem',
          maxWidth: '700px',
          marginInline: 'auto',
        }}
      >
        {/* Experience */}
        <div className="details-container" style={{ width: '100%' }}>
          <img src={experienceIcon} alt="Experience" className="icon" style={{ height: '2rem', marginBottom: '0.5rem' }} />
          <h3>Experience</h3>
          <p>2+ years Full Stack Development</p>
          <ul style={{ marginTop: '0.5rem', paddingLeft: 0, listStyle: 'none' }}>
            <li style={listItemStyle}>
              <img src={checkmarkIcon} alt="" style={{ height: '1rem' }} />
              Incoming Information Security Engineer Intern @ CVS Health (ISTS Team)
            </li>
            <li style={listItemStyle}>
              <img src={checkmarkIcon} alt="" style={{ height: '1rem' }} />
              Mentored SAT math students
            </li>
            <li style={listItemStyle}>
              <img src={checkmarkIcon} alt="" style={{ height: '1rem' }} />
              Created weekly lesson plans
            </li>
            <li style={listItemStyle}>
              <img src={checkmarkIcon} alt="" style={{ height: '1rem' }} />
              Led 15-student class
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="details-container" style={{ width: '100%' }}>
          <img src={educationIcon} alt="Education" className="icon" style={{ height: '2rem', marginBottom: '0.5rem' }} />
          <h3>Education</h3>
          <p>B.S. in Computer Science<br />University at Buffalo</p>
        </div>

        {/* More About Me */}
        <div className="details-container" style={{ width: '100%' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>More About Me</h3>
          <p>
          I enjoy staying active through lifting and playing basketball. I also love exploring different restaurants and trying new foods. Outside of work, I play the piano, which helps me unwind and stay motivated.          </p>
        </div>
      </div>
    </section>
  );
}

// Inline style for repeated list items
const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  margin: '0.3rem 0'
};
