import React, { useEffect } from 'react';
import './mediaqueries.css';
import './theme.css';
import './style.css' ;
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    const move = (e) => {
      dot.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(dot);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
