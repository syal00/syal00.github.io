'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIFutureImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowInfo(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
    setTimeout(() => {
      setShowInfo(false);
    }, 5000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      {/* Interactive Image Container */}
      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Main Image */}
        <motion.img
          src="/images/ai-future.jpg"
          alt="AI and Human Interaction - Future Technology"
          className="w-full h-auto rounded-lg transition-all duration-300 ai-future-image"
          style={{
            boxShadow: isHovered 
              ? '0 0 30px 10px rgba(0, 247, 255, 0.6), 0 0 60px 20px rgba(255, 0, 128, 0.4)'
              : isClicked
              ? '0 0 60px 30px rgba(255, 0, 128, 0.8)'
              : '0 0 20px rgba(0, 247, 255, 0.3)',
          }}
          animate={{
            scale: isHovered ? 1.02 : 1,
            filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Overlay on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 247, 255, 0.1) 70%, rgba(255, 0, 128, 0.05) 100%)',
                mixBlendMode: 'screen',
              }}
            />
          )}
        </AnimatePresence>

        {/* Flicker Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            opacity: [1, 0.7, 1, 0.8, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 247, 255, 0.1) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Info Box on Click */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-4 max-w-xs z-10"
              style={{
                boxShadow: '0 0 20px rgba(0, 247, 255, 0.5)',
              }}
            >
              <h3 className="text-cyan-400 font-bold mb-2">AI Handshake Detected!</h3>
              <p className="text-white text-sm">
                Innovation in progress. The future of human-AI collaboration is here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Hotspots */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hotspot 1 - Hand Area */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border-2 border-cyan-400/50"
            style={{
              top: '60%',
              left: '25%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-sm" />
          </motion.div>

          {/* Hotspot 2 - Robot Arm Area */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border-2 border-pink-500/50"
            style={{
              top: '55%',
              right: '30%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-sm" />
          </motion.div>

          {/* Hotspot 3 - Globe/Data Area */}
          <motion.div
            className="absolute w-20 h-20 rounded-full border-2 border-purple-400/50"
            style={{
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-sm" />
          </motion.div>
        </div>

        {/* Click Instruction */}
        <AnimatePresence>
          {!isHovered && !showInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 right-4 text-cyan-400/60 text-xs pointer-events-none"
            >
              Hover or click for interaction
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

