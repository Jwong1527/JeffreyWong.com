import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <nav id="desktop-nav">
      <div className="logo">JeffreyWong.com</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
