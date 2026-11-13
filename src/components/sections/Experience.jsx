import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, MapPin, ExternalLink, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCE, CERTIFICATES } from '../../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
  const handleCertClick = (cert) => {
    if (onOpenCertificate) {
      onOpenCertificate(cert);
    } else {
      window.open(cert.certificate || cert.file, '_blank');
    }
  };

  return (
    <section
      id="experience"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/85 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>05 // WORK EXPERIENCE</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.08] max-w-2xl">
              Hands-on engineering in production environments.
            </h2>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              Industry internships delivering responsive client architectures, component libraries, and end-to-end web features.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {EXPERIENCE.map((exp, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-3xl border transition-all duration-300 p-8 sm:p-10 ${
                  isFirst
                    ? 'border-[#287BFF]/40 bg-gradient-to-br from-[#15191F]/90 via-[#0E1117]/90 to-[#08090B]/90 shadow-[0_0_30px_rgba(40,123,255,0.08)]'
                    : 'border-[#1E232B] bg-[#0E1117]/80 hover:border-[#287BFF]/30'
                }`}
              >
                {/* Top Badge & Company Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1E232B]">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isFirst
                          ? 'bg-[#287BFF]/10 text-[#287BFF] border-[#287BFF]/30 shadow-[0_0_15px_rgba(40,123,255,0.25)]'
                          : 'bg-[#15191F] text-[#C6CAD0] border-[#1E232B]'
                      }`}
                    >
                      <Briefcase size={22} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-editorial font-bold text-xl sm:text-2xl text-[#F5F6F8]">
                          {exp.company}
                        </h3>
                        {exp.honor && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#287BFF]/20 text-[#63A0FF] border border-[#287BFF]/40">
                            <Award size={13} className="text-[#287BFF]" />
                            {exp.honor}
                          </span>
                        )}
                      </div>
                      <p className="text-base text-[#287BFF] font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Meta: Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8B929E]">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15191F] border border-[#1E232B]">
                      <Calendar size={13} className="text-[#287BFF]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15191F] border border-[#1E232B]">
                      <MapPin size={13} className="text-[#8B929E]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Body Description & Accomplishments */}
                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-[#C6CAD0] leading-relaxed">
                      {exp.summary}
                    </p>
                    
                    {/* Specific details */}
                    {exp.company === 'Tamil Info Technology' && (
                      <ul className="space-y-2 text-xs sm:text-sm text-[#8B929E]">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#287BFF] shrink-0 mt-0.5" />
                          <span>Built responsive React web components with modern CSS, focusing on cross-browser performance and fluid interactions.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#287BFF] shrink-0 mt-0.5" />
                          <span>Collaborated on interface design fidelity and component modularity, resulting in recognition with the <strong>Best Intern Award</strong>.</span>
                        </li>
                      </ul>
                    )}

                    {exp.company.includes('Elysium') && (
                      <ul className="space-y-2 text-xs sm:text-sm text-[#8B929E]">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#287BFF] shrink-0 mt-0.5" />
                          <span>Developed full-stack web modules, connecting frontend React forms and layouts to Node.js & Express REST endpoints.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#287BFF] shrink-0 mt-0.5" />
                          <span>Practiced industry-standard Git version control workflows, branch management, and API testing suites.</span>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Right Action: Verified Certificate Button */}
                  <div className="lg:col-span-4 flex lg:justify-end">
                    <button
                      onClick={() => handleCertClick(exp)}
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold tracking-luxury uppercase bg-[#15191F] text-[#F5F6F8] border border-[#1E232B] hover:border-[#287BFF] hover:bg-[#287BFF]/10 hover:text-white transition-all cursor-pointer group/btn"
                    >
                      <FileText size={15} className="text-[#287BFF]" />
                      <span>View Verified Certificate</span>
                      <ExternalLink size={13} className="text-[#8B929E] group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Industry Certifications & Credentials Grid */}
        <div className="pt-10 border-t border-[#1E232B]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block mb-1">
                Verified Credentials
              </span>
              <h3 className="font-editorial font-bold text-2xl text-[#F5F6F8]">
                Professional Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8B929E] hidden sm:block">
              {CERTIFICATES.length} Official Accreditations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => handleCertClick(cert)}
                className="group p-5 rounded-2xl bg-[#0E1117] border border-[#1E232B] hover:border-[#287BFF]/50 hover:bg-[#15191F] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#287BFF]/10 text-[#287BFF] flex items-center justify-center">
                      <Award size={16} />
                    </div>
                    <span className="font-mono text-[11px] text-[#8B929E]">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-editorial font-bold text-sm text-[#F5F6F8] group-hover:text-white transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#8B929E] font-mono">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#287BFF] pt-4 mt-3 border-t border-[#1E232B]/60 group-hover:text-[#63A0FF]">
                  <span>Inspect Credential</span>
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

