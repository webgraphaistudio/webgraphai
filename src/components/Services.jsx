import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Paintbrush, Brain, Fingerprint, Layers, X, ChevronRight, ArrowUpRight } from 'lucide-react';

import websiteDevelopmentBg from '../assets/service-bg/website-development.png';
import graphicDesignBg from '../assets/service-bg/graphic-design.png';
import aiSolutionsBg from '../assets/service-bg/ai-solutions.png';
import brandingBg from '../assets/service-bg/branding.png';
import uiUxDesignBg from '../assets/service-bg/ui-ux-design.png';

/* ─── Service data (Digital Marketing removed for bento layout) ─────── */
const servicesData = [
  {
    title: 'Website Development',
    icon: Code,
    color: '#0A84FF',
    glow: 'rgba(10,132,255,0.55)',
    description:
      'Sleek, ultra-fast, and highly secure web applications engineered with React, Next.js, custom interactive 3D elements, and modern APIs. We build scalable, performant products end-to-end with clean architecture and Core Web Vitals A+ scores.',
    features: ['React / Next.js', 'Custom 3D Elements', 'REST & GraphQL APIs', 'Edge Deployment', 'Core Web Vitals A+'],
    bgImage: websiteDevelopmentBg,
  },
  {
    title: 'Graphic Design',
    icon: Paintbrush,
    color: '#FF5E1A',
    glow: 'rgba(255,159,28,0.55)',
    description:
      'Stunning premium vector artwork, bespoke brand guidelines, luxury marketing collages, and premium digital illustration systems.',
    features: ['Vector Illustration', 'Brand Guidelines', 'Marketing Assets', 'Print & Digital', 'Motion Graphics'],
    bgImage: graphicDesignBg,
  },
  {
    title: 'AI Solutions',
    icon: Brain,
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.55)',
    description:
      'Custom ML models, neural graphics automation pipelines, smart chatbots, and LLM tool integrations.',
    features: ['Custom ML Models', 'LLM Integration', 'Smart Chatbots', 'Automation Pipelines', 'Predictive Analytics'],
    bgImage: aiSolutionsBg,
  },
  {
    title: 'Branding',
    icon: Fingerprint,
    color: '#34d399',
    glow: 'rgba(52,211,153,0.55)',
    description:
      'Comprehensive brand architecture from core identity emblems, typographic hierarchies, and color strategies to responsive design assets.',
    features: ['Logo & Identity', 'Color Strategy', 'Typography System', 'Brand Voice', 'Style Guides'],
    bgImage: brandingBg,
  },
  {
    title: 'UI/UX Design',
    icon: Layers,
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.55)',
    description:
      'High-end experiences to Apple, Linear, and Stripe standards. Fluid prototypes, pixel-perfect layout maps, and micro-interactions.',
    features: ['Figma Prototyping', 'Micro-Interactions', 'Responsive Layouts', 'Usability Testing', 'Design Systems'],
    bgImage: uiUxDesignBg,
  },
];

/* ─── Bento Card ─────────────────────────────────────────────────────── */
const BentoCard = ({ service, onClick, className = '', delay = 0, compact = false }) => {
  const Icon = service.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(service)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative cursor-pointer rounded-2xl ${compact ? 'p-6 md:p-7 gap-3 md:gap-4' : 'p-6 md:p-8 gap-5'} flex flex-col overflow-hidden ${className}`}
      style={{
        /* Layer 1 — electric blue neon border (outer) */
        border: '1px solid rgba(10, 132, 255, 0.6)',
        background: 'rgba(8, 17, 31, 0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        /* Layer 2 — 3D depth (multi-layer shadows + perspective) */
        boxShadow: hovered
          ? '0 0 20px rgba(10, 132, 255, 0.55), 0 0 50px rgba(10, 132, 255, 0.18), 0 30px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 0 12px rgba(10, 132, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: hovered
          ? 'perspective(1000px) rotateX(2deg) translateY(-6px)'
          : 'perspective(1000px) rotateX(0deg) translateY(0)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
      }}
    >
      {/* Background image layer */}
      {service.bgImage && (
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `url(${service.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1a]/55 via-[#060d1a]/40 to-[#060d1a]/60 pointer-events-none" />

      {/* Hover radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at 20% 0%, ${service.color}33, transparent 60%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-20 group-hover:opacity-80 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
      />

      {/* Icon capsule */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
        style={{
          background: `${service.color}15`,
          borderColor: `${service.color}50`,
          boxShadow: `0 0 0 1px ${service.color}20 inset`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: service.color }} />
      </div>

      {/* Title */}
      <h3 className="relative font-sans font-bold text-white text-lg md:text-xl leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative text-white text-[15px] leading-relaxed font-light">
        {service.description}
      </p>

      {/* Explore CTA */}
      <div
        className={`relative mt-auto ${compact ? 'pt-1' : 'pt-2'} flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity`}
        style={{ color: service.color }}
      >
        Explore <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </motion.div>
  );
};

/* ─── Modal ──────────────────────────────────────────────────────────── */
const ServiceModal = ({ service, onClose }) => {
  const Icon = service.icon;

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0A1F4A]/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #0b1220, #060d1a)',
          border: `1px solid ${service.color}30`,
          boxShadow: `0 0 15px ${service.glow}, 0 10px 20px rgba(0,0,0,0.4)`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[220px] opacity-25 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 40% 0%, ${service.color}, transparent 70%)` }}
        />

        <div className="relative p-8 pb-6">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `${service.color}20`,
                border: `1px solid ${service.color}50`,
                boxShadow: `0 0 20px ${service.glow}`,
              }}
            >
              <Icon className="w-7 h-7" style={{ color: service.color }} />
            </div>
            <h3 className="text-2xl font-black text-white leading-none">{service.title}</h3>
          </div>

          <div
            className="h-[1px] w-full"
            style={{ background: `linear-gradient(to right, ${service.color}40, transparent)` }}
          />
        </div>

        <div className="relative px-8 pb-8">
          <p className="text-gray-300 text-[14px] leading-relaxed font-light mb-6">
            {service.description}
          </p>

          <div className="space-y-2.5">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-3">What's included</p>
            {service.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.color }} />
                {f}
              </motion.div>
            ))}
          </div>

          <button
            className="w-full mt-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${service.color}cc, ${service.color}88)`,
              color: '#fff',
              boxShadow: `0 0 20px ${service.glow}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 35px ${service.glow}`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${service.glow}`)}
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Section ───────────────────────────────────────────────────────── */
const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="relative py-16 md:py-20 w-full overflow-hidden" aria-labelledby="services-heading">
      {/* Distinct background: blue radial glow + subtle grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-electric/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
      {/* Ambient background blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orangeGold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-electric uppercase mb-3">Our Expertise</span>
          <h2 id="services-heading" className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            High-Performance Digital Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-orangeGold rounded-full mt-4" />
          <p className="text-gray-400 font-light text-base max-w-2xl mt-6">
            We merge luxury aesthetics with bleeding-edge technology to build industry-disrupting digital assets.
          </p>
        </div>

        {/* Bento grid: 1 large card (col-span-2) + 4 small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard
            service={servicesData[0]}
            onClick={setActive}
            className="md:col-span-2 min-h-[260px] md:min-h-[280px]"
            delay={0}
            compact
          />
          <BentoCard service={servicesData[1]} onClick={setActive} delay={0.08} compact />
          <BentoCard service={servicesData[2]} onClick={setActive} delay={0.16} />
          <BentoCard service={servicesData[3]} onClick={setActive} delay={0.24} />
          <BentoCard service={servicesData[4]} onClick={setActive} delay={0.32} />
        </div>
      </div>

      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Services;
