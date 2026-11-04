import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import UniverseCanvas from './components/3d/UniverseCanvas';
import Navbar from './components/common/Navbar';
import Phase1Overlay from './components/sections/Phase1Overlay';
import Hero from './components/sections/Hero';
import CodingWorldTransition from './components/sections/CodingWorldTransition';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Experience from './components/sections/Experience';
import Workflow from './components/sections/Workflow';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import CertificateModal from './components/modals/CertificateModal';
import EnquiryModal from './components/modals/EnquiryModal';
import { PROFILE } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const scrollContainerRef = useRef(null);

  // GSAP ScrollTrigger for 100% smooth, reversible scroll-controlled WebGL camera movement
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        scrub: 0.5,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const handleScrollToUniverse = () => {
    const el = document.getElementById('coding-world-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = (cert) => {
    setSelectedCertificate(cert);
    setCertModalOpen(true);
  };

  const handleOpenResume = () => {
    setSelectedCertificate({
      title: "Madheshwaran T. — Full Stack Developer",
      role: "Verified Professional Credentials Dossier",
      certificate: PROFILE.resumeUrl,
      issuer: "Vinsup Skill Academy & University Degree",
      date: "Certified 2026",
    });
    setCertModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setEnquiryModalOpen(true);
    }
  };

  const handleOpenHireMe = () => {
    setEnquiryModalOpen(true);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative bg-[#08090B] text-[#C6CAD0] min-h-screen selection:bg-[#287BFF]/30 selection:text-white overflow-x-hidden font-sans"
    >
      {/* 1. MASTER 3D DIGITAL UNIVERSE CANVAS (Fixed Full-Viewport WebGL) */}
      <UniverseCanvas scrollProgress={scrollProgress} />

      {/* 2. CINEMATIC HEADS-UP TELEMETRY OVERLAY (Depth & Dynamic 3D Sector HUD) */}
      <Phase1Overlay scrollProgress={scrollProgress} />

      {/* 3. MINIMALIST EDITORIAL TOP NAVBAR */}
      <Navbar
        onOpenHireMe={handleOpenHireMe}
      />

      {/* 4. MAIN CONTENT FLOW — INTERLEAVED 3D CODING WORLD ANIMATIONS & CONTENT SECTIONS */}
      <main className="relative z-10">
        {/* Section 01: Home / Hero */}
        <Hero
          scrollProgress={scrollProgress}
          onScrollToUniverse={handleScrollToUniverse}
        />

        {/* 3D CODING WORLD ANIMATION 01: Entering the Coding Universe */}
        <div id="coding-world-01">
          <CodingWorldTransition
            sector="01"
            badge="SECTOR 01 // ENTERING THE MATRIX"
            title="DIVING INTO THE DIGITAL CODEBASE"
            subtitle="Deconstructing component trees, client-side rendering & event loops."
            codeSnippet="const developer = new FullStackDeveloper('Madheshwaran T');"
            nextSectionId="about"
            nextSectionLabel="ABOUT ME"
          />
        </div>

        {/* Section 02: About Me */}
        <About
          onOpenResume={handleOpenResume}
        />

        {/* 3D CODING WORLD ANIMATION 02: React Architecture */}
        <div id="coding-world-02">
          <CodingWorldTransition
            sector="02"
            badge="SECTOR 02 // REACT RUNTIME ENGINE"
            title="COMPILING REACT ARCHITECTURE"
            subtitle="Traversing 3D atomic orbits, custom hooks, and modular UI component trees."
            codeSnippet="const [state, dispatch] = useReducer(architectureReducer, initialState);"
            nextSectionId="skills"
            nextSectionLabel="SKILLS & TECHNOLOGIES"
          />
        </div>

        {/* Section 03: Skills & Technologies */}
        <Skills />

        {/* 3D CODING WORLD ANIMATION 03: Node.js Runtime */}
        <div id="coding-world-03">
          <CodingWorldTransition
            sector="03"
            badge="SECTOR 03 // SERVER RUNTIME"
            title="NAVIGATING NODE.JS & REST CLUSTERS"
            subtitle="Connecting asynchronous event loops, Express endpoints & secure auth gates."
            codeSnippet="app.use('/api/v1/auth', jwtAuthMiddleware); router.post('/login', authController);"
            nextSectionId="services"
            nextSectionLabel="PROFESSIONAL SERVICES"
          />
        </div>

        {/* Section 04: Professional Services */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* 3D CODING WORLD ANIMATION 04: MongoDB Database Core */}
        <div id="coding-world-04">
          <CodingWorldTransition
            sector="04"
            badge="SECTOR 04 // DATA ECOSYSTEM"
            title="ACCESSING MONGODB DATA CRYSTALS"
            subtitle="Traversing document stores, Mongoose schemas, and optimized query pipelines."
            codeSnippet="await mongoose.connect(DATABASE_URI, { maxPoolSize: 50 });"
            nextSectionId="projects"
            nextSectionLabel="FEATURED PROJECTS"
          />
        </div>

        {/* Section 05: Featured Projects (Maha Creative Photography) */}
        <FeaturedProjects />

        {/* 3D CODING WORLD ANIMATION 05: Production Pipelines & Deployments */}
        <div id="coding-world-05">
          <CodingWorldTransition
            sector="05"
            badge="SECTOR 05 // PRODUCTION PLATFORMS"
            title="COMPILING VERIFIED DEPLOYMENTS"
            subtitle="Inspecting live full-stack commercial builds, role gates & production telemetry."
            codeSnippet="git push origin production && vercel --prod --confirm"
            nextSectionId="experience"
            nextSectionLabel="WORK EXPERIENCE"
          />
        </div>

        {/* Section 06: Work Experience (Tamil Info Tech & Elysium) */}
        <Experience
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 3D CODING WORLD ANIMATION 06: Engineering Lifecycle */}
        <div id="coding-world-06">
          <CodingWorldTransition
            sector="06"
            badge="SECTOR 06 // SYSTEM METHODOLOGY"
            title="SYNCHRONIZING ENGINEERING PIPELINE"
            subtitle="Discover → Plan → Develop → Deploy structured lifecycle execution."
            codeSnippet="workflow.execute({ stage: 'DEPLOY', status: 'VERIFIED', tests: 100 });"
            nextSectionId="workflow"
            nextSectionLabel="MY WORKFLOW"
          />
        </div>

        {/* Section 07: My Workflow */}
        <Workflow />

        {/* 3D CODING WORLD ANIMATION 07: Grand Collaboration Arena */}
        <div id="coding-world-07">
          <CodingWorldTransition
            sector="07"
            badge="SECTOR 07 // ARENA HORIZON"
            title="ENTERING THE WORLD OF MADHESHWARAN"
            subtitle="All systems operational. Direct communication channels ready for deployment."
            codeSnippet="connection.open({ client: 'Visitor', status: 'READY_TO_BUILD' });"
            nextSectionId="contact"
            nextSectionLabel="CONTACT & HIRE ME"
          />
        </div>

        {/* Section 08: Contact & Hire Me */}
        <Contact
          preselectedService={selectedService}
        />

        {/* Section 09: Minimal Luxury Footer */}
        <Footer />
      </main>

      {/* CREDENTIAL & CERTIFICATE MODAL */}
      <CertificateModal
        isOpen={certModalOpen}
        certificate={selectedCertificate}
        onClose={() => setCertModalOpen(false)}
      />

      {/* HIRE ME & ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        defaultService={selectedService}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}
