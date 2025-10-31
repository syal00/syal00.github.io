'use client'

import { contactsData } from '../../../../utils/data/contactsData'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import ContactForm from './contact-form'

export default function Contact() {
  const socialLinks = [
    { icon: BsGithub, url: contactsData.github, label: 'GitHub' },
    { icon: BsLinkedin, url: contactsData.linkedIn, label: 'LinkedIn' },
  ].filter(link => link.url)

  return (
    <section id="contact" className="py-20 bg-[#0d1224]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#16f2b3]">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-[#16f2b3]">📧</span>
                  <a
                    href={`mailto:${contactsData.email}`}
                    className="text-gray-300 hover:text-[#16f2b3] transition-colors"
                  >
                    {contactsData.email}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#16f2b3]">📞</span>
                  <a
                    href={`tel:${contactsData.phone}`}
                    className="text-gray-300 hover:text-[#16f2b3] transition-colors"
                  >
                    {contactsData.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#16f2b3]">📍</span>
                  <span className="text-gray-300">{contactsData.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Connect with me
              </h4>
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
                      <Icon className="w-8 h-8" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
