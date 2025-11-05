'use client';

import { motion } from 'framer-motion';

export default function SolarOrbit() {
  return (
    <div className="relative flex items-center justify-center h-[300px] w-full overflow-hidden">
      {/* Glowing Sun */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute z-10"
      >
        <div className="relative w-20 h-20 sun-pulse">
          {/* Sun Core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 blur-sm" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400" />
          
          {/* Sun Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/50 via-orange-400/50 to-red-500/50 blur-md -z-10" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/30 via-orange-300/30 to-red-400/30 blur-xl -z-20 scale-150" />
        </div>
      </motion.div>

      {/* Orbit 1 - Cyan Planet */}
      <div className="absolute orbit-container-1">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="planet planet-cyan"
        />
      </div>

      {/* Orbit 2 - Purple Planet (faster orbit) */}
      <div className="absolute orbit-container-2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="planet planet-purple"
        />
      </div>

      {/* Orbit 3 - Cyan Planet (slower orbit) */}
      <div className="absolute orbit-container-3">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="planet planet-cyan-small"
        />
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}

