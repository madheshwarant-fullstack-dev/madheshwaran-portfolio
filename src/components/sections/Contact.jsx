import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2, Sparkles, ArrowUpRight, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE, SERVICES } from '../../data/portfolioData';

const BUDGET_RANGES = [
  'Starting from ₹1,000 (Starter Project / Consultation)',
  '₹1,000 — ₹5,000 (Basic Website / Portfolio)',
  '₹5,000 — ₹15,000 (Standard Commercial)',
  '₹15,000 — ₹30,000 (Full Stack MERN Platform)',
  '₹30,000+ (Custom Enterprise / E-commerce)',
];

export default function Contact({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'Business Website Development',
    budget: 'Starting from ₹1,000 (Starter Project / Consultation)',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#287BFF', '#C6CAD0', '#FFFFFF', '#63A0FF'],
    });
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Madheshwaran,\n\nI'd like to discuss a project:\n\n• Name: ${formData.name || 'Visitor'}\n• Email: ${formData.email || 'Not provided'}\n• Project Type: ${formData.projectType}\n• Budget: ${formData.budget}\n• Details: ${formData.description || 'Let us discuss on WhatsApp'}`
    );
    window.open(`https://wa.me/919345724023?text=${text}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 relative z-10 border-t border-[#1E232B] bg-[#08090B]/90 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[#287BFF]" />
            <span>07 // INITIATE COLLABORATION</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4">
            <div>
              <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block mb-2 font-medium">
                AVAILABLE FOR NEW OPPORTUNITIES
              </span>
              <h2 className="font-editorial font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F5F6F8] tracking-tight leading-[1.05] max-w-2xl">
                LET'S BUILD SOMETHING AMAZING TOGETHER.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#8B929E] max-w-md">
              Have a business idea or need a professional website? Let's turn your vision into reality. Reach out directly or submit your project details below.
            </p>
          </div>
        </div>

        {/* Two-Column Layout: Direct Channels & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: Direct Communication Channels & Status Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Status Pill Card */}
            <div className="p-6 rounded-2xl bg-[#15191F]/70 border border-[#1E232B] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                    {PROFILE.status}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#287BFF]/15 text-[#63A0FF] border border-[#287BFF]/30">
                  Starts ₹1,000
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#8B929E] leading-relaxed">
                Open for select freelance projects, web application builds, and engineering roles with packages starting from <strong className="text-[#F5F6F8]">₹1,000</strong>.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0E1117] border border-[#1E232B] hover:border-emerald-500/50 hover:bg-[#15191F] transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-luxury block">
                      Instant WhatsApp
                    </span>
                    <span className="font-editorial font-bold text-base text-[#F5F6F8] group-hover:text-white transition-colors">
                      {PROFILE.phoneFormatted}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#8B929E] group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Email Card */}
              <div className="group p-5 rounded-2xl bg-[#0E1117] border border-[#1E232B] hover:border-[#287BFF]/50 hover:bg-[#15191F] transition-all flex items-center justify-between">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-4 overflow-hidden"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#287BFF]/10 text-[#287BFF] border border-[#287BFF]/20 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-mono text-[10px] text-[#287BFF] uppercase tracking-luxury block">
                      Direct Email
                    </span>
                    <span className="font-editorial font-bold text-sm sm:text-base text-[#F5F6F8] group-hover:text-white transition-colors truncate block">
                      {PROFILE.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-lg bg-[#15191F] text-[#8B929E] hover:text-white hover:bg-[#287BFF]/20 transition-all cursor-pointer shrink-0 ml-2"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Direct Phone Card */}
              <a
                href={`tel:${PROFILE.phone}`}
                className="group p-5 rounded-2xl bg-[#0E1117] border border-[#1E232B] hover:border-[#287BFF]/50 hover:bg-[#15191F] transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#15191F] text-[#C6CAD0] border border-[#1E232B] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#8B929E] uppercase tracking-luxury block">
                      Direct Voice
                    </span>
                    <span className="font-editorial font-bold text-base text-[#F5F6F8] group-hover:text-white transition-colors">
                      {PROFILE.phoneFormatted}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#8B929E] group-hover:text-[#287BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#0E1117] border border-[#1E232B] flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#15191F] text-[#8B929E] border border-[#1E232B] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#8B929E] uppercase tracking-luxury block">
                    Operating Base
                  </span>
                  <span className="font-editorial font-bold text-sm text-[#F5F6F8]">
                    {PROFILE.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action: Hire Me Banner */}
            <div className="pt-2">
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-electric !py-3.5 !text-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles size={15} />
                <span>HIRE ME DIRECTLY — FROM ₹1,000</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Project Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-[#1E232B] bg-[#0E1117]/90 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Form Title */}
              <div className="mb-8 pb-6 border-b border-[#1E232B] flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#287BFF] uppercase tracking-luxury block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-editorial font-bold text-2xl text-[#F5F6F8]">
                    Project Specifications
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15191F] border border-[#1E232B] text-[11px] font-mono text-[#8B929E]">
                  <Sparkles size={12} className="text-[#287BFF]" />
                  <span>24hr Response Time</span>
                </div>
              </div>

              {submitted ? (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-editorial font-bold text-2xl text-[#F5F6F8] mb-2">
                      Inquiry Transmitted Successfully
                    </h4>
                    <p className="text-sm text-[#8B929E] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I will review your requirements for <strong className="text-[#287BFF]">{formData.projectType}</strong> and respond within 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <button
                      onClick={handleWhatsAppSend}
                      className="btn-electric !py-3 !px-6 !text-xs cursor-pointer inline-flex items-center gap-2"
                    >
                      <MessageSquare size={14} />
                      <span>Send Summary via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-silver !py-3 !px-6 !text-xs cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Actual Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C6CAD0]">
                        Your Name <span className="text-[#287BFF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Madheshwaran T"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] focus:ring-1 focus:ring-[#287BFF] transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C6CAD0]">
                        Email Address <span className="text-[#287BFF]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="madheshwarant2006@gmail.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] focus:ring-1 focus:ring-[#287BFF] transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C6CAD0]">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-[#F5F6F8] focus:outline-none focus:border-[#287BFF] focus:ring-1 focus:ring-[#287BFF] transition-all text-sm font-sans cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title} className="bg-[#0E1117] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Full Stack Engineering Role" className="bg-[#0E1117] text-white">
                          Full Stack Engineering Role / Internship
                        </option>
                        <option value="Custom Technical Consultation" className="bg-[#0E1117] text-white">
                          Other / Technical Consultation
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C6CAD0]">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-[#F5F6F8] focus:outline-none focus:border-[#287BFF] focus:ring-1 focus:ring-[#287BFF] transition-all text-sm font-sans cursor-pointer"
                      >
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b} className="bg-[#0E1117] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C6CAD0]">
                      Project Overview & Goals <span className="text-[#287BFF]">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your business goals, target timeline, key features, and any reference websites..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] focus:ring-1 focus:ring-[#287BFF] transition-all text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      className="btn-electric !py-3.5 !px-8 !text-xs cursor-pointer flex-1 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Transmit Project Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="btn-outline-silver !py-3.5 !px-6 !text-xs cursor-pointer flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50"
                    >
                      <MessageSquare size={15} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

