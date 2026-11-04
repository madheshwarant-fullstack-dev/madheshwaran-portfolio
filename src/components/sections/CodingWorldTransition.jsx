import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Cpu, Sparkles, Orbit } from 'lucide-react';

export default function CodingWorldTransition({
  sector = "01",
  badge = "SECTOR 01 // ENTERING THE MATRIX",
  title = "DIVING INTO THE DIGITAL CODEBASE",
  subtitle = "Deconstructing component trees, client-side rendering & event loops.",
  codeSnippet = "const developer = new FullStackDeveloper('Madheshwaran T');",
  nextSectionId = "about",
  nextSectionLabel = "ABOUT ME",
}) {
  const handleScrollToNext = (e) => {
    e.preventDefault();
    const nextEl = document.getElementById(nextSectionId);
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[75vh] sm:min-h-[82vh] w-full flex flex-col justify-between py-16 px-6 sm:px-10 lg:px-16 pointer-events-none select-none overflow-hidden">
      {/* 1. TOP SECTOR TELEMETRY HUD */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-between text-xs font-mono text-[#8B929E]"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08090B]/80 border border-[#287BFF]/30 backdrop-blur-md shadow-[0_0_15px_rgba(40,123,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#287BFF] animate-ping" />
          <span className="font-semibold text-white tracking-luxury uppercase text-[11px]">
            {badge}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08090B]/60 border border-[#1E232B] backdrop-blur-sm text-[11px] text-[#C6CAD0]">
          <Orbit size={13} className="text-[#287BFF] animate-spin" style={{ animationDuration: '6s' }} />
          <span>3D WARP TRAJECTORY ACTIVE</span>
        </div>
      </motion.div>

      {/* 2. CENTER FLOATING CINEMATIC CODING UNIVERSE CALLOUT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="my-auto mx-auto max-w-3xl text-center space-y-5"
      >
        {/* Floating Cyber Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#08090B]/85 border border-[#287BFF]/40 backdrop-blur-xl flex items-center justify-center mx-auto text-[#287BFF] shadow-[0_0_25px_rgba(40,123,255,0.35)]">
          <Terminal size={26} className="text-[#63A0FF]" />
        </div>

        {/* Grand Cyber Headline */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block font-semibold">
            CODING WORLD ANIMATION // CHAPTER {sector}
          </span>
          <h3 className="font-editorial font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#F5F6F8] tracking-tight leading-tight uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[#C6CAD0] max-w-xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </div>

        {/* Live Syntax Snippet Floating Terminal */}
        <div className="inline-block max-w-xl mx-auto text-left rounded-xl bg-[#08090B]/90 border border-[#1E232B] px-5 py-3.5 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#1E232B]/80 text-[10px] font-mono text-[#8B929E]">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-[#C6CAD0]">live_kernel_stream.js</span>
          </div>
          <code className="font-mono text-xs text-[#63A0FF] flex items-center gap-2">
            <span className="text-[#287BFF]">&gt;</span>
            <span className="text-[#F5F6F8]">{codeSnippet}</span>
            <span className="w-1.5 h-3.5 bg-[#287BFF] animate-pulse inline-block" />
          </code>
        </div>
      </motion.div>

      {/* 3. BOTTOM SCROLL DESCENT INDICATOR (INTERACTIVE POINTER-EVENTS-AUTO BUTTON) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full flex items-center justify-center pt-4"
      >
        <button
          onClick={handleScrollToNext}
          className="pointer-events-auto group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#08090B]/90 border border-[#287BFF]/40 hover:border-[#287BFF] hover:bg-[#15191F] transition-all duration-300 shadow-[0_0_20px_rgba(40,123,255,0.25)] cursor-pointer"
        >
          <span className="font-mono text-xs tracking-luxury uppercase text-[#C6CAD0] group-hover:text-white transition-colors">
            SCROLL TO ENTER {nextSectionLabel}
          </span>
          <div className="w-6 h-6 rounded-full bg-[#287BFF]/20 flex items-center justify-center text-[#287BFF] group-hover:bg-[#287BFF] group-hover:text-white transition-all">
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </motion.div>
    </div>
  );
}

