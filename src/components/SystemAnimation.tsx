'use client';

import { motion } from 'framer-motion';
import SolarOrbit from './SolarOrbit';

export default function SystemAnimation() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg mb-8 border border-cyan-500/30 bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0b2e] to-black opacity-90 z-0" />
      
      {/* Solar Orbit Animation - Behind text */}
      <div className="absolute inset-0 z-5">
        <SolarOrbit />
      </div>
      
      {/* Animated background particles using CSS */}
      <div className="absolute inset-0 w-full h-full z-1">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: Math.random() > 0.5 ? '#00ffff' : '#a855f7',
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        {/* Connection lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 1 }}>
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#00ffff"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      {/* System Online Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
            System Online
          </span>
        </h2>
      </motion.div>

      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none z-10" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
