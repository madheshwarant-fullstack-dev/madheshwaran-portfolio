import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function Hero({ scrollProgress = 0, onScrollToUniverse }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Compute smooth scroll transition:
  // When scrollProgress goes from 0.0 to 0.08:
  // The portrait smoothly transitions out of the main composition,
  // plunging the visitor into the 3D coding world animation.
  const heroProgress = Math.min(scrollProgress / 0.08, 1);
  const heroOpacity = Math.max(1 - heroProgress * 1.3, 0);
  const heroScale = 1 - heroProgress * 0.15;
  const heroTranslateY = -heroProgress * 60;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: heroOpacity,
        transform: `scale(${heroScale}) translateY(${heroTranslateY}px)`,
        pointerEvents: heroOpacity <= 0.05 ? 'none' : 'auto',
      }}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden select-none transition-transform duration-75 z-10"
    >
      {/* 1. SUBTLE GEOMETRIC OUTLINES & CINEMATIC RIM LIGHTING IN ENVIRONMENT */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric framing */}
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#1E232B]/40 hidden md:block" />
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-[#1E232B]/40 hidden md:block" />
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-[#1E232B]/30" />
        <div className="absolute bottom-16 left-0 right-0 h-[1px] bg-[#1E232B]/30" />

        {/* Cinematic Electric Blue Environment Glow (Behind center space, not artificial body border) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#287BFF]/12 blur-[150px] pointer-events-none" />
      </div>

      {/* 2. BACKGROUND: FULL-NAME TYPOGRAPHY */}
      {/* Positioned behind portrait, sized so the full 12-letter name is completely visible */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden px-4 sm:px-6"
        style={{
          transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -12}px)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span
          className="font-editorial font-extrabold text-[12.5vw] tracking-tight leading-none uppercase whitespace-nowrap text-[#FAF9F6] drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)] opacity-95 select-none"
          style={{
            color: '#FAF9F6',
            letterSpacing: '-0.02em',
          }}
        >
          MADHESHWARAN
        </span>
      </div>

      {/* 3. TOP META STATUS ROW (BELOW NAVBAR) */}
      <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono tracking-luxury text-[#8B929E] uppercase pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#287BFF] shadow-[0_0_8px_#287BFF] animate-pulse" />
          <span>{PROFILE.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>CINEMATIC 3D UNIVERSE</span>
          <span className="text-[#1E232B]">•</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>

      {/* 4. EXACT CENTER: FULL-BODY STANDING PORTRAIT (APPROVED PROFILE.PNG) */}
      <div className="relative z-10 w-full my-auto flex flex-col items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{
            transform: `translate(${mousePos.x * 16}px, ${mousePos.y * 10}px)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Full-Body Standing Portrait - Real Face, Entire Body Visible Including Shoes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-center justify-center"
          >
            <img
              src="/images/profile.png"
              alt="Madheshwaran T. - Full Stack Developer"
              className="max-h-[68vh] sm:max-h-[74vh] md:max-h-[78vh] w-auto object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] filter contrast-[1.04]"
            />
          </motion.div>
        </div>
      </div>

      {/* 5. BOTTOM ASYMMETRICAL EDITORIAL SPLIT */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-2">
        {/* LEFT: Freelance Full Stack Developer & Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col text-left max-w-md"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-luxury uppercase text-[#287BFF] mb-1.5 font-medium">
            <span>{PROFILE.tagline}</span>
          </div>

          <h1 className="font-editorial font-extrabold text-2xl sm:text-4xl text-[#F5F6F8] tracking-tight leading-[1.05]">
            BUILDING DIGITAL EXPERIENCES.
          </h1>

          <p className="text-xs sm:text-sm text-[#8B929E] font-normal leading-relaxed mt-2">
            Scroll down to enter my 3D programming universe and travel through the codebase.
          </p>
        </motion.div>

        {/* BOTTOM RIGHT: SCROLL TO ENTER THE DIGITAL WORLD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 sm:self-end"
        >
          <button
            onClick={onScrollToUniverse}
            className="group inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-[#15191F]/90 border border-[#1E232B] hover:border-[#287BFF] hover:bg-[#15191F] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            <span className="font-mono text-xs tracking-luxury uppercase text-[#C6CAD0] group-hover:text-white transition-colors">
              SCROLL TO ENTER THE DIGITAL WORLD
            </span>
            <div className="w-7 h-7 rounded-full bg-[#287BFF]/15 flex items-center justify-center text-[#287BFF] group-hover:bg-[#287BFF] group-hover:text-white transition-all duration-300">
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
