'use client';

import { personalData } from '../../utils/data/personalData';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-links">
          <a href={`tel:${personalData.phone}`} aria-label={`Call ${personalData.phone}`}>
            📞 {personalData.phone}
          </a>
          <a href={`mailto:${personalData.email}`} aria-label={`Email ${personalData.email}`}>
            📧 {personalData.email}
          </a>
          {personalData.links.github && (
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              🌐 GitHub
            </a>
          )}
          {personalData.links.portfolio && (
            <a
              href={personalData.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit portfolio"
            >
              💼 Portfolio
            </a>
          )}
        </div>
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
