import React, { useEffect, useRef, useState } from 'react';
import './mediaqueries.css';
import './theme.css';
import './style.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };

    const handleHover = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const interactive = ['a', 'button', 'input', 'textarea', 'select'];
      setIsHoveringLink(interactive.includes(tag));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHoveringLink ? 'cursor-hovered' : ''}`}
      />
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
