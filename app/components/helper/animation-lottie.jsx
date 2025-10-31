'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function AnimationLottie({ animationPath, className = '' }) {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Dynamically import animation JSON file
    fetch(`/assets/lottie/${animationPath}`)
      .then(res => res.json())
      .then((data) => {
        setAnimationData(data)
      })
      .catch((err) => {
        console.error('Error loading animation:', err)
      })
  }, [animationPath])

  if (!animationData) {
    return <div className={className}>Loading animation...</div>
  }

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}
