import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Download, ArrowUpRight, Code2, Sparkles, Terminal, FileText } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section
      id="about"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>01 // ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.08] mt-4">
            Building with purpose. Designing with intention.
          </h2>
        </div>

        {/* Editorial Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Narrative & Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg text-[#F5F6F8] font-medium leading-relaxed">
              I am <strong className="text-white font-semibold">{PROFILE.fullName}</strong>, a B.Sc. Computer Science graduate and Full Stack Developer passionate about engineering modern digital experiences and building real-world web solutions.
            </p>

            <p className="text-sm sm:text-base text-[#8B929E] leading-relaxed">
              My engineering approach bridges structural software precision with visual clarity. Having trained extensively across the full JavaScript ecosystem and completed two industry web development internships, I architect applications that unite resilient Node.js REST API backends with fluid, intuitive React interfaces.
            </p>

            {/* Technical Interests & Professional Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#1E232B]">
              <div className="p-5 rounded-2xl bg-[#15191F]/70 border border-[#1E232B]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#287BFF] mb-2 font-medium">
                  <Terminal size={15} />
                  <span>Technical Interests</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C6CAD0] leading-relaxed">
                  Full-stack MERN architectures, component-driven React design systems, secure JWT auth pipelines, MongoDB data modeling, and creative 3D web interfaces.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#15191F]/70 border border-[#1E232B]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#287BFF] mb-2 font-medium">
                  <Sparkles size={15} />
                  <span>Engineering Goals</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C6CAD0] leading-relaxed">
                  Partnering with businesses, founders, and creative teams to build fast, scalable, and high-converting web applications that deliver measurable value.
                </p>
              </div>
            </div>

            {/* Actions: Resume Download & Contact */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="btn-electric !py-3 !px-6 !text-xs cursor-pointer"
              >
                <Download size={14} />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                className="btn-outline-silver !py-3 !px-6 !text-xs cursor-pointer"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Verified Academic & Technical Dossier Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Profile Stamp Card */}
            <div className="rounded-2xl border border-[#1E232B] bg-[#15191F]/80 p-6 space-y-5 shadow-2xl">
              <div className="flex items-center gap-4 pb-5 border-b border-[#1E232B]">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#08090B] border border-[#1E232B] shrink-0">
                  <img
                    src="/images/profile.png"
                    alt="Madheshwaran T."
                    className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  />
                </div>
                <div>
                  <h3 className="font-editorial font-bold text-lg text-white">
                    {PROFILE.fullName}
                  </h3>
                  <span className="font-mono text-xs text-[#287BFF] block">
                    {PROFILE.role}
                  </span>
                  <span className="text-[11px] font-mono text-[#8B929E]">
                    {PROFILE.location}
                  </span>
                </div>
              </div>

              {/* Education Spec */}
              <div className="flex items-start justify-between pb-4 border-b border-[#1E232B] text-xs">
                <div className="flex items-center gap-2 font-mono text-[#8B929E] uppercase">
                  <GraduationCap size={15} className="text-[#287BFF]" />
                  <span>Education</span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">{PROFILE.education}</p>
                  <p className="text-[11px] text-[#8B929E] font-mono">{PROFILE.college}</p>
                </div>
              </div>

              {/* Internships Spec */}
              <div className="flex items-start justify-between pb-4 border-b border-[#1E232B] text-xs">
                <div className="flex items-center gap-2 font-mono text-[#8B929E] uppercase">
                  <Award size={15} className="text-[#287BFF]" />
                  <span>Internships</span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">Tamil Info Tech & Elysium</p>
                  <p className="text-[11px] text-[#287BFF] font-mono">Best Intern Award Winner</p>
                </div>
              </div>

              {/* Primary Stack */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-mono text-[#8B929E] uppercase">
                  <Code2 size={15} className="text-[#287BFF]" />
                  <span>Specialty</span>
                </div>
                <span className="font-mono text-xs text-[#C6CAD0] font-medium">
                  Full Stack MERN Engineering
                </span>
              </div>
            </div>

            {/* Verified Status Banner */}
            <div className="p-4 rounded-xl bg-[#08090B] border border-[#1E232B] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8B929E]">CURRENT STATUS</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

