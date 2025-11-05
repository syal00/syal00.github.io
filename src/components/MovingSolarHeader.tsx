'use client';

import { motion } from 'framer-motion';
import OrbitSystem from './OrbitSystem';

interface MovingSolarHeaderProps {
  title?: string;
}

export default function MovingSolarHeader({ title = 'System Online' }: MovingSolarHeaderProps) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg mb-8 border border-cyan-500/30">
      {/* Moving Solar Background Image */}
      <div className="absolute inset-0 z-[1]">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-solar-move"
          style={{
            backgroundImage: 'url(/solar-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Fallback gradient if image doesn't exist */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0b2e] to-black opacity-80" />
      </div>

      {/* Orbit System Overlay - Above background, below text */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <OrbitSystem />
      </div>

      {/* Title Text - Above everything */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center z-[20] pointer-events-none"
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
            {title}
          </span>
        </h2>
      </motion.div>

      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none z-[10]" />
    </div>
  );
}

