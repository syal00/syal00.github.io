'use client'

import { useRef, useEffect, useState } from 'react'

export default function GlowCard({ children, className = '' }) {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
        cardRef.current.style.setProperty('--mouse-x', `${x}px`)
        cardRef.current.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={`glow-card ${className}`}>
      {children}
    </div>
  )
}
