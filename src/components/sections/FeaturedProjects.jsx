import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { FEATURED_PROJECT } from '../../data/portfolioData';

export default function FeaturedProjects() {
  const [activeShot, setActiveShot] = useState(0);

  const prevShot = () => {
    setActiveShot((prev) => (prev === 0 ? FEATURED_PROJECT.gallery.length - 1 : prev - 1));
  };

  const nextShot = () => {
    setActiveShot((prev) => (prev === FEATURED_PROJECT.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>04 // FEATURED PRODUCTION WORK</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <div>
              <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block mb-2 font-medium">
                {FEATURED_PROJECT.badge}
              </span>
              <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.05]">
                {FEATURED_PROJECT.name}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              A comprehensive full-stack photography platform engineered with separate admin/client authentication, dynamic galleries, tiered package models, and role-based access.
            </p>
          </div>
        </div>

        {/* Project Container Card */}
        <div className="rounded-3xl border border-[#1E232B] bg-[#0E1117]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* LEFT COLUMN: Project Details & Feature Checklist */}
              <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#287BFF]/10 border border-[#287BFF]/30 text-[#287BFF] font-mono text-[10px] tracking-wider uppercase mb-4">
                    <ShieldCheck size={12} />
                    <span>Role-Based Full Stack Architecture</span>
                  </div>

                  <p className="text-sm sm:text-base text-[#C6CAD0] leading-relaxed mb-6">
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Core Features */}
                  <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-luxury text-[#8B929E] block mb-3 font-medium">
                      Production Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {FEATURED_PROJECT.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#C6CAD0]">
                          <CheckCircle size={13} className="text-[#287BFF] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="mb-8">
                    <span className="font-mono text-xs uppercase tracking-luxury text-[#8B929E] block mb-3 font-medium">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {FEATURED_PROJECT.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#15191F] border border-[#1E232B] text-xs font-mono text-[#C6CAD0] hover:border-[#287BFF] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Working Project Links */}
                <div className="pt-6 border-t border-[#1E232B] flex flex-wrap items-center gap-4">
                  {FEATURED_PROJECT.liveUrl && (
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-electric cursor-pointer"
                    >
                      <span>Live Platform Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {FEATURED_PROJECT.githubUrl && (
                    <a
                      href={FEATURED_PROJECT.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-silver cursor-pointer"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Realistic Interactive Browser Showcase */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="rounded-2xl border border-[#1E232B] bg-[#15191F] overflow-hidden shadow-2xl">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#11141B] border-b border-[#1E232B]">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                    </div>
                    {/* Simulated Address Bar */}
                    <div className="px-4 py-1 rounded-md bg-[#08090B] border border-[#1E232B] text-[11px] font-mono text-[#8B929E] flex items-center gap-2 max-w-xs truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
                      <span>https://maha-creative-photography.app</span>
                    </div>
                    {/* Navigation Carousel Arrows */}
                    <div className="flex items-center gap-1 text-[#8B929E]">
                      <button
                        onClick={prevShot}
                        className="p-1 hover:text-white transition-colors cursor-pointer"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={nextShot}
                        className="p-1 hover:text-white transition-colors cursor-pointer"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Main Screenshot Display */}
                  <div className="relative aspect-[16/10] bg-[#08090B] overflow-hidden group">
                    <img
                      src={FEATURED_PROJECT.gallery[activeShot].url}
                      alt={FEATURED_PROJECT.gallery[activeShot].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Screenshot Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#08090B] via-[#08090B]/70 to-transparent flex items-center justify-between">
                      <span className="font-mono text-xs text-[#F5F6F8]">
                        {FEATURED_PROJECT.gallery[activeShot].title}
                      </span>
                      <span className="font-mono text-[10px] text-[#8B929E]">
                        {activeShot + 1} / {FEATURED_PROJECT.gallery.length}
                      </span>
                    </div>
                  </div>

                  {/* Gallery Thumbnails Strip */}
                  <div className="p-3 bg-[#11141B] border-t border-[#1E232B] flex items-center gap-2 overflow-x-auto">
                    {FEATURED_PROJECT.gallery.map((shot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveShot(idx)}
                        className={`relative w-16 h-10 rounded-md overflow-hidden shrink-0 border transition-all cursor-pointer ${
                          activeShot === idx ? 'border-[#287BFF] scale-105' : 'border-[#1E232B] opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={shot.url} alt={shot.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

