'use client'

import { useState } from 'react'
import { validateEmail } from '../../../../utils/check-email'
import { contactsData } from '../../../../utils/data/contactsData'
import { toast } from 'react-toastify'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields')
      return
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      // For static export, using EmailJS (already in dependencies)
      // To use: Get your keys from https://www.emailjs.com/
      // Uncomment below and add your keys:
      
      /*
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      */
      
      // Fallback: Use mailto link for now
      const email = contactsData?.email || 'your-email@example.com'
      const mailtoLink = `mailto:${email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Email: ${formData.email}\n\nMessage: ${formData.message}`)}`
      window.location.href = mailtoLink
      
      toast.success('Opening email client...')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-[#1a1f3a] border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
          required
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-[#1a1f3a] border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 bg-[#1a1f3a] border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
