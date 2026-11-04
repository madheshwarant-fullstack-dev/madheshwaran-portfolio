import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/portfolioData';

const STEP_ICONS = [Search, Layout, Code2, Rocket];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>06 // MY WORKFLOW</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.08] max-w-2xl">
              Discover. Plan. Develop. Deploy.
            </h2>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              A disciplined, milestone-driven development process engineered to transform requirements into high-performance, production-ready web platforms.
            </p>
          </div>
        </div>

        {/* 4 Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index] || Code2;
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-3xl border border-[#1E232B] bg-[#0E1117]/80 hover:border-[#287BFF]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(40,123,255,0.06)]"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Step Number Badge */}
                    <span className="font-editorial font-extrabold text-2xl text-[#287BFF]/90 tracking-tight">
                      {step.num}
                    </span>

                    {/* Step Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#15191F] border border-[#1E232B] flex items-center justify-center text-[#287BFF] group-hover:border-[#287BFF]/40 group-hover:scale-105 transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Phase Label & Headline */}
                  <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block mb-2 font-semibold">
                    {step.phase}
                  </span>
                  <h3 className="font-editorial font-bold text-lg sm:text-xl text-[#F5F6F8] tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                    {step.headline}
                  </h3>

                  {/* Detail */}
                  <p className="text-xs sm:text-sm text-[#8B929E] leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-[#1E232B] flex items-center justify-between text-[11px] font-mono text-[#8B929E]">
                  <span className="flex items-center gap-1.5 text-[#C6CAD0]">
                    <CheckCircle2 size={13} className="text-[#287BFF]" />
                    <span>Phase 0{index + 1}</span>
                  </span>
                  {!isLast && (
                    <span className="flex items-center gap-1 text-[#8B929E] group-hover:text-[#287BFF] transition-colors">
                      <span>Next</span>
                      <ArrowRight size={12} />
                    </span>
                  )}
                  {isLast && (
                    <span className="text-[#287BFF] font-medium">
                      Launch Ready
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Commitment Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#15191F]/60 border border-[#1E232B] flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="font-editorial font-bold text-base sm:text-lg text-[#F5F6F8]">
              Quality Assurance & Transparent Milestone Reviews
            </h4>
            <p className="text-xs sm:text-sm text-[#8B929E]">
              Every project includes live staging previews, clean Git version control, and clear milestone progress updates.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-electric !py-3 !px-6 !text-xs shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

