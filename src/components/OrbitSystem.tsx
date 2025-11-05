'use client';

export default function OrbitSystem() {
  return (
    <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
      {/* Glowing Sun */}
      <div className="absolute z-10 animate-pulseSun">
        <div className="relative w-20 h-20">
          {/* Sun Core */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] blur-sm" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF8C00]" />
          
          {/* Sun Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700]/50 via-[#FFA500]/50 to-[#FF8C00]/50 blur-md -z-10" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700]/30 via-[#FFA500]/30 to-[#FF8C00]/30 blur-xl -z-20 scale-150" />
        </div>
      </div>

      {/* Planet 1 - Cyan (100px radius, 8s) */}
      <div className="absolute orbit-planet-1">
        <div className="planet-cyan-glow" />
      </div>

      {/* Planet 2 - Purple (150px radius, 12s) */}
      <div className="absolute orbit-planet-2">
        <div className="planet-purple-glow" />
      </div>

      {/* Planet 3 - Gold (200px radius, 18s) */}
      <div className="absolute orbit-planet-3">
        <div className="planet-gold-glow" />
      </div>
    </div>
  );
}


