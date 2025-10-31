'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function AnimationLottie({ animationPath, ...props }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (animationPath) {
      fetch(animationPath)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error('Failed to load Lottie animation:', err));
    }
  }, [animationPath]);

  if (!animationData) return null;

  return <Lottie animationData={animationData} {...props} />;
}
