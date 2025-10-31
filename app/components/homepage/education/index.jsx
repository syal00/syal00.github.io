'use client';

import { educationsData } from '../../../../utils/data/educations';
import { formatDateRange } from '../../../../utils/time-converter';

export default function EducationSection() {
  // Guard against empty data
  if (!educationsData || educationsData.length === 0) {
    return (
      <section className="section" id="education" aria-labelledby="education-title">
        <h2 id="education-title" className="section-title">
          Education
        </h2>
        <p className="text-center text-gray-300">Education data coming soon...</p>
      </section>
    );
  }

  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">
        Education
      </h2>
      <div className="max-w-4xl mx-auto">
        {educationsData.map((edu, index) => (
          <article
            key={index}
            className="card education-card mb-8"
            role="article"
            aria-labelledby={`education-${index}-title`}
          >
            <h3 id={`education-${index}-title`} className="text-2xl font-bold mb-2 text-[#00ffff]">
              {edu.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {edu.institution} | {formatDateRange(edu.startDate, edu.endDate)}
            </p>
            {edu.courses && edu.courses.length > 0 && (
              <div className="mb-4">
                <h4 className="font-bold text-[#00ffff] mb-2">Relevant Courses:</h4>
                <p className="text-gray-300">{edu.courses.join(', ')}</p>
              </div>
            )}
            {edu.activities && edu.activities.length > 0 && (
              <div>
                <h4 className="font-bold text-[#00ffff] mb-2">Activities:</h4>
                <p className="text-gray-300">{edu.activities.join(', ')}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
