import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { personalData } from '../../utils/data/personal-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1224] border-t border-teal-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a
              href={`${personalData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#16f2b3] transition-colors"
              aria-label="GitHub"
            >
              <BsGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
