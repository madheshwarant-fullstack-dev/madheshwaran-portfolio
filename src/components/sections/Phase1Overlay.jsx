import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function Phase1Overlay({ scrollProgress = 0 }) {
  // Determine current active zone along the 3D scroll trajectory
  const isHero = scrollProgress < 0.05;

  // Depth in meters (simulated for cinematic HUD across 133m flight)
  const simulatedDepth = (scrollProgress * 133).toFixed(1);

  // Active tech landmark dynamically based on scroll progress
  let currentLandmark = "SURFACE: DIGITAL IDENTITY";
  if (scrollProgress >= 0.05 && scrollProgress < 0.18) {
    currentLandmark = "SECTOR 01: CODING WORLD ENTRANCE";
  } else if (scrollProgress >= 0.18 && scrollProgress < 0.32) {
    currentLandmark = "SECTOR 02: REACT ARCHITECTURE RUNTIME";
  } else if (scrollProgress >= 0.32 && scrollProgress < 0.46) {
    currentLandmark = "SECTOR 03: NODE.JS BACKEND ENGINE";
  } else if (scrollProgress >= 0.46 && scrollProgress < 0.60) {
    currentLandmark = "SECTOR 04: MONGODB DATABASE CORE";
  } else if (scrollProgress >= 0.60 && scrollProgress < 0.74) {
    currentLandmark = "SECTOR 05: PRODUCTION PLATFORMS & VERIFICATION";
  } else if (scrollProgress >= 0.74 && scrollProgress < 0.86) {
    currentLandmark = "SECTOR 06: ENGINEERING LIFECYCLE";
  } else if (scrollProgress >= 0.86) {
    currentLandmark = "SECTOR 07: WORLD OF MADHESHWARAN";
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-10 select-none">
      {/* 1. TOP CINEMATIC HUD TELEMETRY BAR */}
      <AnimatePresence>
        {!isHero && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#8B929E] pt-14"
          >
            {/* Left Depth Metric */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090B]/85 border border-[#1E232B] backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#287BFF] animate-pulse" />
              <span>DEPTH: <strong className="text-white">-{simulatedDepth}m</strong></span>
            </div>

            {/* Right Landmark Status */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090B]/85 border border-[#1E232B] backdrop-blur-md shadow-lg">
              <Compass size={13} className="text-[#287BFF]" />
              <span className="text-white font-medium">{currentLandmark}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div />

      {/* 2. BOTTOM SCROLL TRACKER BAR */}
      <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#525760] pb-2">
        <span className="hidden sm:inline">3D CODING UNIVERSE // MADHESHWARAN T.</span>
        <span className="sm:hidden">3D UNIVERSE</span>

        {/* Dynamic Progress indicator */}
        <div className="flex items-center gap-3">
          <div className="w-28 sm:w-44 h-1 rounded-full bg-[#15191F] border border-[#1E232B] overflow-hidden">
            <div
              className="h-full bg-[#287BFF] transition-all duration-75"
              style={{ width: `${(scrollProgress * 100).toFixed(0)}%` }}
            />
          </div>
          <span className="text-[#8B929E]">{(scrollProgress * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
}
