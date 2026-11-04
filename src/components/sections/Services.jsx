import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

export default function Services({ onSelectService }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleDiscussClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>03 // PROFESSIONAL SERVICES</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.08] max-w-2xl">
              Digital solutions built around your business.
            </h2>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              From bespoke corporate web presences to complex full-stack web platforms, every solution is built for speed, security, and measurable conversion.
            </p>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-2xl bg-[#15191F]/60 border border-[#1E232B] hover:border-[#287BFF]/60 hover:bg-[#15191F] transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Service Number & Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial font-extrabold text-3xl text-[#525760] group-hover:text-[#287BFF] transition-colors duration-300">
                      {service.num}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#1E232B] group-hover:bg-[#287BFF]/10 flex items-center justify-center text-[#8B929E] group-hover:text-[#287BFF] transition-all duration-300">
                      <Sparkles size={14} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial font-bold text-xl sm:text-2xl text-[#F5F6F8] group-hover:text-white transition-colors tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#8B929E] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Bullet List */}
                  <ul className="space-y-2 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#C6CAD0]">
                        <Check size={13} className="text-[#287BFF] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Discuss Your Project Action */}
                <div className="pt-4 border-t border-[#1E232B] flex items-center justify-between">
                  <button
                    onClick={() => handleDiscussClick(service.title)}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#C6CAD0] group-hover:text-[#287BFF] transition-colors cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

