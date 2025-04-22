import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <nav id="desktop-nav" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      maxWidth: '1000px',
      margin: 'auto',
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        JeffreyWong.com
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <ul
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li><a href="#about" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>About</a></li>
          <li><a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>Projects</a></li>
        </ul>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          style={{
            padding: '0.4rem 0.9rem',
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
