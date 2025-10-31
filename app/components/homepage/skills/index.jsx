'use client';

import { skillsData } from '../../../../utils/data/skills';
import { getSkillImage } from '../../../../utils/skill-image';

export default function SkillsSection() {
  // Guard against empty data
  if (!skillsData || skillsData.length === 0) {
    return (
      <section className="section" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">
          Technical Skills
        </h2>
        <p className="text-center text-gray-300">Skills data coming soon...</p>
      </section>
    );
  }

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Technical Skills
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="card text-center p-4"
            role="listitem"
            aria-label={`Skill: ${skill}`}
          >
            <span className="text-gray-300 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
