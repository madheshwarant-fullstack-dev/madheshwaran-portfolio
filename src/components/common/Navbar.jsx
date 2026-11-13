import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenHireMe, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = item.href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onNavigate) {
      onNavigate(item.name.toLowerCase());
    }

    setMobileMenuOpen(false);
  };

  const handleHireMeClick = (e) => {
    e.preventDefault();
    if (onOpenHireMe) {
      onOpenHireMe();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(PROFILE.whatsappUrl, '_blank');
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-[#1E232B] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* LOGO & NAME */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Minimalist MT Monogram */}
          <div className="w-9 h-9 rounded-lg bg-[#15191F] border border-[#1E232B] flex items-center justify-center font-editorial font-bold text-sm tracking-wider text-[#F5F6F8] group-hover:border-[#287BFF] group-hover:shadow-[0_0_15px_rgba(40,123,255,0.4)] transition-all duration-300">
            <span className="text-white">M</span>
            <span className="text-[#287BFF]">T</span>
          </div>

          <div className="flex flex-col">
            <span className="font-editorial font-bold text-sm tracking-wider text-[#F5F6F8] group-hover:text-white transition-colors uppercase">
              MADHESHWARAN T
            </span>
            <span className="font-mono text-[9px] tracking-luxury text-[#8B929E] uppercase">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="font-mono text-xs tracking-luxury text-[#8B929E] hover:text-white hover:text-[#287BFF] transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* HIRE ME ACTION BUTTON */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleHireMeClick}
            className="btn-electric !py-2.5 !px-6 !text-xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* TABLET / MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#15191F] border border-[#1E232B] text-[#C6CAD0] hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE / TABLET DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#08090B]/98 backdrop-blur-xl border-b border-[#1E232B] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="font-mono text-xs tracking-luxury text-[#C6CAD0] hover:text-[#287BFF] py-2.5 border-b border-[#1E232B]/50 uppercase"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleHireMeClick}
                className="btn-electric w-full mt-3 justify-center !py-3 !text-xs cursor-pointer flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
