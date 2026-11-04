import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Wrench, Terminal, ShieldCheck } from 'lucide-react';
import { TECH_CATEGORIES } from '../../data/portfolioData';

const ICONS = {
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>02 // SKILLS & TECHNOLOGIES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.08] max-w-2xl">
              Production technology stack. Built for performance.
            </h2>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              A carefully selected ecosystem of languages, runtimes, and databases engineered to deliver high performance, modular architecture, and fault tolerance.
            </p>
          </div>
        </div>

        {/* 4 Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[cat.category] || Layers;
            const isSelected = activeCategory === idx;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveCategory(idx)}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#15191F] border-[#287BFF] shadow-electric-glow'
                    : 'bg-[#15191F]/50 border-[#1E232B] hover:border-[#287BFF]/50 hover:bg-[#15191F]/80'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#08090B] border border-[#1E232B] flex items-center justify-center text-[#287BFF] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-xs text-[#525760] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-editorial font-bold text-2xl text-[#F5F6F8] tracking-tight mb-2">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-[#8B929E] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Technology Badges */}
                <div>
                  <span className="font-mono text-[10px] tracking-luxury text-[#525760] uppercase block mb-3">
                    Verified Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#08090B] border border-[#1E232B] text-xs font-mono text-[#C6CAD0] group-hover:border-[#287BFF]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Architecture Statement */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0E1117]/80 border border-[#1E232B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#287BFF]/10 border border-[#287BFF]/20 flex items-center justify-center text-[#287BFF] shrink-0">
              <Terminal size={22} />
            </div>
            <div>
              <h4 className="font-editorial font-bold text-base sm:text-lg text-[#F5F6F8]">
                Production-Tested MERN Engineering Standards
              </h4>
              <p className="text-xs sm:text-sm text-[#8B929E]">
                Clean code separation, environment-isolated configurations, RESTful contracts, and modular React architecture.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#C6CAD0] shrink-0 px-4 py-2 rounded-lg bg-[#15191F] border border-[#1E232B]">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Zero Invented Metrics · Verified Codebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}

