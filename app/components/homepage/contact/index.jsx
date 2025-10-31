'use client';

import ContactForm from './contact-form';
import { contactsData } from '../../../../utils/data/contactsData';
import './contact.scss';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-wrap">
        {/* Left: Contact info */}
        <aside className="contact-card" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact-title">Contact Information</h2>

          <ul className="contact-list">
            <li>
              <span className="ci-icon" aria-hidden="true">✉️</span>
              <div>
                <div className="ci-label">Email</div>
                <a href={`mailto:${contactsData.email}`}>{contactsData.email}</a>
              </div>
            </li>
            <li>
              <span className="ci-icon" aria-hidden="true">📞</span>
              <div>
                <div className="ci-label">Phone</div>
                <a href={`tel:+1${contactsData.phone.replace(/\D/g, '')}`}>
                  +1 ({contactsData.phone.slice(0, 3)}) {contactsData.phone.slice(3, 6)}-{contactsData.phone.slice(6)}
                </a>
              </div>
            </li>
            <li>
              <span className="ci-icon" aria-hidden="true">📍</span>
              <div>
                <div className="ci-label">Location</div>
                <div>{contactsData.address || 'Ottawa, ON'}</div>
              </div>
            </li>
          </ul>

          <div className="contact-cta">
            <a className="btn" href={`mailto:${contactsData.email}`}>Email Me</a>
            <a className="btn outline" href="#projects">View Projects</a>
          </div>
        </aside>

        {/* Divider (subtle gradient line) */}
        <div className="contact-divider" role="presentation"></div>

        {/* Right: Form */}
        <ContactForm />
      </div>
    </section>
  );
}