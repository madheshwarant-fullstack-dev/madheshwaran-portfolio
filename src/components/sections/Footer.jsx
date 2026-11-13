import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 bg-[#08090B] border-t border-[#1E232B] pt-14 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E232B]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#15191F] border border-[#1E232B] flex items-center justify-center font-editorial font-bold text-sm text-[#F5F6F8]">
                  <span>M</span>
                  <span className="text-[#287BFF]">T</span>
                </div>
                <span className="font-editorial font-bold text-lg text-[#F5F6F8] tracking-wider uppercase">
                  MADHESHWARAN T
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#8B929E] max-w-sm leading-relaxed mb-6">
                Freelance Full Stack Developer crafting production-grade web applications, modern architectures, and cinematic 3D digital experiences.
              </p>
            </div>

            {/* Local IST Live Time */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#8B929E]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dindigul, India: <strong className="text-[#F5F6F8]">{istTime} IST</strong></span>
            </div>
          </div>

          {/* Portfolio Sections Navigation */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#525760] uppercase tracking-luxury block mb-4">
              Navigation Index
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#C6CAD0]">
              <li><button onClick={scrollToTop} className="hover:text-[#287BFF] transition-colors cursor-pointer">01 // Home & Hero</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-[#287BFF] transition-colors cursor-pointer">02 // About Me</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="hover:text-[#287BFF] transition-colors cursor-pointer">03 // Skills & Technologies</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#287BFF] transition-colors cursor-pointer">04 // Professional Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-[#287BFF] transition-colors cursor-pointer">05 // Featured Projects</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="hover:text-[#287BFF] transition-colors cursor-pointer">06 // Work Experience</button></li>
              <li><button onClick={() => scrollToSection('workflow')} className="hover:text-[#287BFF] transition-colors cursor-pointer">07 // My Workflow</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#287BFF] transition-colors cursor-pointer">08 // Contact & Hire</button></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#525760] uppercase tracking-luxury block mb-4">
                Direct Channels
              </span>
              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2.5 text-[#C6CAD0] hover:text-[#287BFF] transition-colors"
                >
                  <Mail size={14} className="text-[#287BFF]" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#C6CAD0] hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare size={14} className="text-emerald-400" />
                  <span>WhatsApp: {PROFILE.phoneFormatted}</span>
                </a>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#C6CAD0] hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#C6CAD0] hover:text-[#287BFF] transition-colors"
                >
                  <Linkedin size={14} className="text-[#287BFF]" />
                  <span>LinkedIn Network</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <span className="font-mono text-[10px] text-[#525760] uppercase tracking-luxury block">
                Availability
              </span>
              <span className="text-xs text-white font-medium">
                {PROFILE.status}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B929E]">
          <p>© {new Date().getFullYear()} MADHESHWARAN T. All rights reserved. Crafted with React, Three.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#15191F] border border-[#1E232B] text-[#C6CAD0] hover:text-white hover:border-[#287BFF] transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
