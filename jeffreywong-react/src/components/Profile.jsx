import React from 'react';
import profilePic from '../assets/jeffreywongpfp.jpg'; // adjust if your image is located differently

export default function Profile() {
  return (
    <section id="profile" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '3rem',
      padding: '4rem 2rem',
      maxWidth: '1000px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <div style={{ flex: '1 1 280px' }}>
        <img
          src={profilePic}
          alt="Jeffrey Wong"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid var(--accent-color)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
        <p className="section__text__p1">Hi, I'm</p>
        <h1 className="title" style={{ fontSize: '2.8rem', margin: '0.5rem 0' }}>Jeff</h1>
        <p className="section__text__p2" style={{
          fontSize: '1.25rem',
          lineHeight: '1.6',
          fontWeight: '400',
          color: 'var(--text-color, #333)'
        }}>
          CS @ UB &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Cybersecurity Intern @ CVS Health
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-color-2"
            style={{ padding: '0.6rem 1.5rem', fontWeight: '600', fontSize: '0.95rem' }}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
