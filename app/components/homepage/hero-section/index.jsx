'use client'

import Link from 'next/link'
import Image from 'next/image'
import { personalData } from '../../../../utils/data/personal-data'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function HeroSection() {
  const socialLinks = [
    { icon: BsGithub, url: personalData.github, label: 'GitHub' },
    { icon: BsLinkedin, url: personalData.linkedIn, label: 'LinkedIn' },
  ].filter(link => link.url)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0d1224] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-[#16f2b3]">
                Hi, I am{' '}
                <span className="text-white">{personalData.name}</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-white">
                {personalData.designation}
              </h2>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#16f2b3] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact me
              </Link>
              {personalData.resume && (
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#16f2b3] text-[#16f2b3] rounded-lg font-semibold hover:bg-[#16f2b3] hover:text-black transition-all duration-300"
                >
                  Get Resume
                </a>
              )}
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-lg overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={personalData.profile}
                alt={personalData.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* Code Display Section */}
        <div className="mt-16 bg-[#1a1f3a] rounded-lg p-6 border border-teal-500/20">
          <div className="font-mono text-sm text-gray-300">
            <div className="text-teal-400">const</div>
            <div className="text-pink-400 ml-4">developer</div>
            <div className="text-white ml-4">=</div>
            <div className="text-yellow-400 ml-4">{"{"}</div>
            <div className="ml-8 text-cyan-400">name:</div>
            <div className="ml-4 text-green-400">"{personalData.name}"</div>
            <div className="ml-8 text-cyan-400">role:</div>
            <div className="ml-4 text-green-400">"{personalData.designation}"</div>
            <div className="text-yellow-400 ml-4">{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
