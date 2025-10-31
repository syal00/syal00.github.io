'use client'

import Link from 'next/link'
import { personalData } from '../../utils/data/personal-data'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1224]/90 backdrop-blur-md border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#16f2b3] hover:text-[#16f2b3]/80 transition-colors">
            {personalData.name.split(' ').map((name, i) => (
              <span key={i}>{name} </span>
            ))}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-[#16f2b3] transition-colors">
              ABOUT
            </Link>
            <Link href="#experience" className="text-white hover:text-[#16f2b3] transition-colors">
              EXPERIENCE
            </Link>
            <Link href="#skills" className="text-white hover:text-[#16f2b3] transition-colors">
              SKILLS
            </Link>
            <Link href="#education" className="text-white hover:text-[#16f2b3] transition-colors">
              EDUCATION
            </Link>
            <Link href="/blog" className="text-white hover:text-[#16f2b3] transition-colors">
              BLOGS
            </Link>
            <Link href="#projects" className="text-white hover:text-[#16f2b3] transition-colors">
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
