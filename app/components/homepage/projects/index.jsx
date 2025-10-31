'use client'

import { projectsData } from '../../../../utils/data/projects-data'
import { BsGithub } from 'react-icons/bs'

export default function Projects() {
  const displayedProjects = projectsData.slice(0, 4)

  return (
    <section id="projects" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1f3a] border border-teal-500/20 rounded-lg p-6 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-[#16f2b3] mb-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 text-sm mb-4">Role: {project.role}</p>
              </div>

              <div className="flex gap-4">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <BsGithub className="w-5 h-5" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-[#16f2b3] text-[#16f2b3] rounded-lg hover:bg-[#16f2b3] hover:text-black transition-all duration-300"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="text-center mt-8">
            <p className="text-gray-400">
              And {projectsData.length - 4} more projects...
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
