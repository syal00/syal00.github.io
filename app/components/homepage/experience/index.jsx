'use client'

import { experiencesData } from '../../../../utils/data/experience'
import AnimationLottie from '../../helper/animation-lottie'
import GlowCard from '../../helper/glow-card'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-500">
          Experience
        </h2>

        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <div key={exp.id} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Animation */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <AnimationLottie animationPath="code.json" className="w-full" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <GlowCard className="p-6 bg-[#1a1f3a] rounded-lg border border-pink-500/20">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{exp.company} | {exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
