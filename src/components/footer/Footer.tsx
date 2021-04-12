import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <a href="https://www.linkedin.com/in/turkaytunc/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" size="30" />
        </a>
      </section>
      <section className="footer-section">
        <a href="https://twitter.com/filthycoder" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" size="30" />
        </a>
      </section>
      <section className="footer-section">
        <a href="https://github.com/turkaytunc" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" size="30" />
        </a>
      </section>
      <section className="footer-section">
        <a href="mailto:turkaytunc00@gmail.com" rel="noopener noreferrer">
          <FaEnvelope className="footer-icon" size="30" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
