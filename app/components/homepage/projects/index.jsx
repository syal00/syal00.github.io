'use client';

import { projectsData } from '../../../../utils/data/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  // Guard against empty data
  if (!projectsData || projectsData.length === 0) {
    return (
      <section className="section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-title">
          Featured Projects
        </h2>
        <p className="text-center text-gray-300">Projects coming soon...</p>
      </section>
    );
  }

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">
        Featured Projects
      </h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article
            key={index}
            className="card project-card"
            role="article"
            aria-labelledby={`project-${index}-title`}
          >
            {project.image && (
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
            )}
            <h3 id={`project-${index}-title`} className="text-2xl font-bold mb-2 text-[#00ffff]">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-[#00ffff]/20 text-[#00ffff] rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ffff] text-black rounded hover:bg-[#00cccc] transition-colors"
                  aria-label={`Visit ${project.title} live site`}
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#00ffff] text-[#00ffff] rounded hover:bg-[#00ffff]/20 transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
