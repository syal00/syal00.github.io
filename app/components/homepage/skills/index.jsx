'use client'

import Marquee from 'react-fast-marquee'
import { skills } from '../../../../utils/data/skills'
import Image from 'next/image'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
          Skills
        </h2>

        <div className="space-y-8">
          <Marquee speed={50} gradient={false} className="py-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mx-4 bg-[#1a1f3a] border border-teal-500/20 rounded-lg p-6 hover:border-teal-500 transition-all duration-300 hover:scale-110 min-w-[150px] text-center"
              >
                <div className="text-white font-semibold text-lg">{skill}</div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
