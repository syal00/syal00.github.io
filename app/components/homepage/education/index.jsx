'use client'

import { educationsData } from '../../../../utils/data/educations'
import AnimationLottie from '../../helper/animation-lottie'
import GlowCard from '../../helper/glow-card'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-500">
          Education
        </h2>

        <div className="space-y-12">
          {educationsData.map((edu, index) => (
            <div key={edu.id} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Animation */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <AnimationLottie animationPath="study.json" className="w-full" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <GlowCard className="p-6 bg-[#1a1f3a] rounded-lg border border-pink-500/20">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{edu.institution} | {edu.duration}</p>
                  <ul className="space-y-2">
                    {edu.description.map((item, idx) => (
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
