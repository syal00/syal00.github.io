'use client';

import { experienceData } from '../../../../utils/data/experienceData';
import { formatDateRange } from '../../../../utils/time-converter';

export default function ExperienceSection() {
  // Guard against empty data
  if (!experienceData || experienceData.length === 0) {
    return (
      <section className="section" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title" className="section-title">
          Professional Experience
        </h2>
        <p className="text-center text-gray-300">Experience data coming soon...</p>
      </section>
    );
  }

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        Professional Experience
      </h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <article
            key={index}
            className="card experience-card mb-8 max-w-2xl mx-auto"
            role="article"
            aria-labelledby={`experience-${index}-title`}
          >
            <h3 id={`experience-${index}-title`} className="text-2xl font-bold mb-2 text-[#00ffff]">
              {exp.role}
            </h3>
            <p className="text-gray-400 mb-4">
              {exp.company} | {formatDateRange(exp.startDate, exp.endDate)}
            </p>
            {exp.points && exp.points.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
