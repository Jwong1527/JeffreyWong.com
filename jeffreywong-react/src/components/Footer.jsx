import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.8rem' }}>
        <a href="https://www.linkedin.com/in/jeffrey-wong1215" target="_blank" rel="noreferrer">
          <FaLinkedin color="var(--accent-color)" />
        </a>
        <a href="https://github.com/Jwong1527" target="_blank" rel="noreferrer">
          <FaGithub color="var(--accent-color)" />
        </a>
        <a href="mailto:jwong85@buffalo.edu">
          <FaEnvelope color="var(--accent-color)" />
        </a>
      </div>
    </footer>
  );
}
