'use client'

import Image from 'next/image'
import { personalData } from '../../../../utils/data/personal-data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={personalData.profile}
                alt={personalData.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Who I am?</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {personalData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
