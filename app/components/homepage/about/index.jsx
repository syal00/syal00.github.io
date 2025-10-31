'use client';

import { personalData } from '../../../../utils/data/personalData';

export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          {personalData.bio}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {personalData.highlights.map((highlight, index) => (
            <div key={index} className="card">
              <p className="text-gray-300">{highlight}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-2 text-[#00ffff]">Location</h3>
            <p className="text-gray-300">{personalData.location}</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-2 text-[#00ffff]">Email</h3>
            <a
              href={`mailto:${personalData.email}`}
              className="text-gray-300 hover:text-[#00ffff] transition-colors"
              aria-label={`Email ${personalData.email}`}
            >
              {personalData.email}
            </a>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-2 text-[#00ffff]">Links</h3>
            <div className="flex gap-4 justify-center">
              {personalData.links.github && (
                <a
                  href={personalData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ffff] transition-colors"
                  aria-label="Visit GitHub profile"
                >
                  GitHub
                </a>
              )}
              {personalData.links.portfolio && (
                <a
                  href={personalData.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ffff] transition-colors"
                  aria-label="Visit portfolio"
                >
                  Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
