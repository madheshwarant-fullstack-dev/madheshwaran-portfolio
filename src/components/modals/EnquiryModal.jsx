import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, MessageSquare, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE, SERVICES } from '../../data/portfolioData';

export default function EnquiryModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: defaultService || 'Business Website Development',
    budget: 'Starting from ₹1,000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#287BFF', '#C6CAD0', '#FFFFFF'],
    });
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Madheshwaran, I want to discuss a project:\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nDetails: ${formData.description}`
    );
    window.open(`https://wa.me/919345724023?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-xl bg-[#0E1117] border border-[#1E232B] rounded-3xl shadow-luxury-card p-6 sm:p-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-[#15191F] border border-[#1E232B] text-[#8B929E] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#287BFF] uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Priority Consultation</span>
            </div>
            <h3 className="font-editorial font-bold text-2xl text-[#F5F6F8]">
              Hire Madheshwaran T.
            </h3>
            <p className="text-xs text-[#8B929E] mt-1">
              Direct line for commercial projects, full-stack builds, and engineering partnerships.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#287BFF]/10 text-[#287BFF] flex items-center justify-center mx-auto">
                <Check size={26} />
              </div>
              <h4 className="font-editorial font-bold text-xl text-[#F5F6F8]">
                Enquiry Ready to Transmit!
              </h4>
              <p className="text-xs text-[#8B929E] max-w-xs mx-auto">
                Connect instantly on WhatsApp for immediate priority review:
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="btn-electric !bg-emerald-600 hover:!bg-emerald-500 justify-center"
                >
                  <MessageSquare size={14} />
                  <span>Send via WhatsApp ({PROFILE.phoneFormatted})</span>
                </button>
                <button
                  onClick={onClose}
                  className="btn-outline-silver justify-center"
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#C6CAD0] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-xs text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#C6CAD0] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-xs text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#C6CAD0] mb-1.5">
                    Service
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-xs text-[#F5F6F8] focus:outline-none focus:border-[#287BFF]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#C6CAD0] mb-1.5">
                    Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-xs text-[#F5F6F8] focus:outline-none focus:border-[#287BFF]"
                  >
                    <option value="Starting from ₹1,000">Starting from ₹1,000</option>
                    <option value="₹1,000 — ₹5,000">₹1,000 — ₹5,000</option>
                    <option value="₹5,000 — ₹15,000">₹5,000 — ₹15,000</option>
                    <option value="₹15,000 — ₹30,000">₹15,000 — ₹30,000</option>
                    <option value="₹30,000+ Enterprise">₹30,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#C6CAD0] mb-1.5">
                  Project Brief *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Short summary of what you are looking to build..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#15191F] border border-[#1E232B] text-xs text-[#F5F6F8] placeholder-[#525760] focus:outline-none focus:border-[#287BFF] resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-electric w-full justify-center !py-3 !text-xs mt-2"
              >
                <Send size={13} />
                <span>Submit Priority Enquiry</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

