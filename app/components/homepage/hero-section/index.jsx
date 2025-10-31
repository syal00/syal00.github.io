'use client';

import { personalData } from '../../../../utils/data/personalData';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load Lottie if used
const LottieAnimation = dynamic(
  () => import('../../helper/animation-lottie'),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="hero-section-container">
        <h1 id="hero-title" className="hero-section-title">
          Hi, I am <span className="text-[#00ffff]">{personalData.name}</span>
        </h1>
        <p className="hero-section-subtitle">{personalData.role}</p>
        <p className="text-lg mb-6 text-gray-300">{personalData.location}</p>
        <div className="hero-section-cta">
          <Link
            href="#contact"
            className="hero-section-button"
            aria-label="Go to contact section"
          >
            Contact me
          </Link>
          <Link
            href="#projects"
            className="hero-section-button secondary"
            aria-label="Go to projects section"
          >
            Get Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
