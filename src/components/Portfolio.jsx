import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Calendar, User, Tag, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import vigneswara from '../assets/vigneswara.webp';
import datla from '../assets/datla.webp';
import andhra from '../assets/andhra.webp';
import sfurniture from '../assets/sfurniture.webp';
import kognivex from '../assets/kognivex.webp';

/* ─── Project data ──────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    num: '01',
    title: 'Vigneswara Tours & Travels',
    description: 'A premium travel and vehicle rental website with seamless booking experience and a modern, luxury aesthetic.',
    longDescription: 'Designed and developed a complete website for Vigneswara Tours & Travels — a premium vehicle rental service. The platform showcases their fleet, enables effortless online booking, and delivers a smooth customer experience through a fully responsive, modern interface tailored to the travel industry.',
    category: 'Web Design',
    color: '#FF5E1A',
    glow: 'rgba(255,159,28,0.55)',
    previewType: 'screenshot',
    tags: ['React', 'Tailwind CSS', 'Travel', 'Booking'],
    client: 'Vigneswara Tours & Travels',
    year: '2025',
    link: 'https://vigneswaratravels.com/',
    featured: true,
  },
  {
    id: 2,
    num: '02',
    title: 'Datla Hospitals',
    description: 'A modern healthcare website for a multi-specialty hospital with appointment booking and 24/7 emergency access.',
    longDescription: 'Designed and developed a complete website for Datla Hospitals, Vizianagaram — a compassionate, affordable, excellence-driven healthcare provider. The site features a clean, trust-building interface with prominent appointment booking, an emergency CTA, doctor and department listings, and a blog for patient education, all fully responsive and optimized for performance.',
    category: 'Web Design',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.55)',
    previewType: 'screenshot-health',
    tags: ['React', 'Tailwind CSS', 'Healthcare', 'Booking'],
    client: 'Datla Hospitals',
    year: '2025',
    link: 'https://www.datlahospital.com/',
    featured: true,
  },
  {
    id: 3,
    num: '03',
    title: 'Andhra Children\'s Hospital',
    description: 'A warm, family-friendly pediatric hospital website with appointment booking and parent-focused resources.',
    longDescription: 'Designed and developed a complete website for Andhra Children\'s Hospital — a pediatric care center where little hearts find big care. The site features a friendly, trust-building design with prominent appointment booking, services overview, blog for parents, and contact details, all optimized for a mobile-first experience.',
    category: 'Web Design',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.55)',
    previewType: 'screenshot-pediatric',
    tags: ['React', 'Tailwind CSS', 'Pediatrics', 'Booking'],
    client: 'Andhra Children\'s Hospital',
    year: '2025',
    link: 'https://www.andhrachildrenhospital.com/',
    featured: true,
  },
  {
    id: 4,
    num: '04',
    title: 'S Furniture Village',
    description: 'A premium Sheesham furniture e-commerce website with elegant product showcases and seamless shopping experience.',
    longDescription: 'Designed and developed a complete website for S Furniture Village — a premium Sheesham furniture brand offering modern comforts for the home. The site features rich product galleries, a clean shopping experience, why-shesesham storytelling, and a gallery showcase, fully responsive and built to convert visitors into buyers.',
    category: 'Web Design',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.55)',
    previewType: 'screenshot-furniture',
    tags: ['React', 'Tailwind CSS', 'E-commerce', 'Furniture'],
    client: 'S Furniture Village',
    year: '2025',
    link: 'https://sfurniturevillage.com/',
    featured: true,
  },
  {
    id: 5,
    num: '05',
    title: 'Kognivex — AI-Powered Solutions',
    description: 'Our own flagship website showcasing AI, automation, and scalable enterprise systems with real business impact.',
    longDescription: 'Designed and developed the Kognivex corporate website — a bold, AI-first brand showcasing intelligent digital products, enterprise systems, and premium websites. Features a futuristic dashboard hero, dynamic service pillars (AI Integration, Scalable Systems, Secure & Reliable, Performance Driven), and a quote-driven lead funnel, all performance-optimized and fully responsive.',
    category: 'Web Design',
    color: '#0A84FF',
    glow: 'rgba(10,132,255,0.55)',
    previewType: 'screenshot-kognivex',
    tags: ['React', 'Tailwind CSS', 'AI', 'Branding'],
    client: 'Kognivex',
    year: '2026',
    link: 'https://kognivex.in/',
    featured: true,
  },
];

const categories = ['All', 'Web Design'];

/* ─── Preview renderers ─────────────────────────────────────────────── */
const getPreviewJSX = (type) => {
  switch (type) {
    case 'screenshot':
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          <img
            src={vigneswara}
            alt="Vigneswara Tours & Travels website screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 text-[8px] font-mono text-orangeGold tracking-widest pointer-events-none z-10">LIVE • 2026</div>
        </div>
      );
    case 'screenshot-health':
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          <img
            src={datla}
            alt="Datla Hospitals website screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 text-[8px] font-mono text-cyan-400 tracking-widest pointer-events-none z-10">HEALTHCARE • 2026</div>
        </div>
      );
    case 'screenshot-pediatric':
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          <img
            src={andhra}
            alt="Andhra Children's Hospital website screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 text-[8px] font-mono text-pink-400 tracking-widest pointer-events-none z-10">PEDIATRICS • 2026</div>
        </div>
      );
    case 'screenshot-furniture':
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          <img
            src={sfurniture}
            alt="S Furniture Village website screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 text-[8px] font-mono text-amber-400 tracking-widest pointer-events-none z-10">FURNITURE • 2026</div>
        </div>
      );
    case 'screenshot-kognivex':
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
          <img
            src={kognivex}
            alt="Kognivex website screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 text-[8px] font-mono text-blue-400 tracking-widest pointer-events-none z-10">AI / SAAS • 2026</div>
        </div>
      );
    default:
      return (
        <div className="relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center">
          <span className="text-[10px] font-mono text-gray-500 tracking-widest">PROJECT PREVIEW</span>
        </div>
      );
  }
};

/* ─── Project Card (bento style) ────────────────────────────────────── */
const ProjectCard = ({ project, onClick, compact = false, className = '' }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative cursor-pointer rounded-2xl ${compact ? 'p-5 md:p-6 gap-3' : 'p-6 md:p-8 gap-5'} flex flex-col overflow-hidden ${className}`}
      style={{
        border: '1px solid rgba(10, 132, 255, 0.6)',
        background: 'rgba(8, 17, 31, 0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
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
      {/* Preview area */}
      <div
        className={`relative w-full rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors duration-500 ${project.previewType === 'neural-all' ? '' : 'aspect-[16/10]'
          }`}
      >
        {getPreviewJSX(project.previewType, project.color, hovered)}

        {/* Hover overlay color glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${project.color}25, transparent 60%)` }}
        />

        {/* Top-right arrow */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-panel border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-orangeGold/80 uppercase">
            {project.num} • {project.category}
          </span>
        </div>
        <h3 className="font-sans font-bold text-white text-lg md:text-xl leading-tight">
          {project.title}
        </h3>
        <p className="text-white text-[14px] leading-relaxed font-light">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer row */}
        <div className="mt-auto pt-3 flex items-center justify-between text-[10px] font-mono text-gray-400 tracking-widest uppercase border-t border-white/5">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Project Modal ─────────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
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
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #0b1220, #060d1a)',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 20px ${project.glow}, 0 10px 30px rgba(0,0,0,0.4)`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[260px] opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 40% 0%, ${project.color}, transparent 70%)` }}
        />

        <div className="relative">
          {/* Preview hero */}
          <div className="relative h-56 overflow-hidden">
            {getPreviewJSX(project.previewType, project.color, true)}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/15 bg-[#08111F]/60 backdrop-blur-md flex items-center justify-center text-white hover:border-white/40 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-widest text-orangeGold uppercase">
                {project.num} • {project.category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
              {project.title}
            </h3>
            <p className="text-white text-[14px] leading-relaxed font-light mb-6">
              {project.longDescription}
            </p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-white/5">
                <User className="w-4 h-4" style={{ color: project.color }} />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">CLIENT</span>
                  <span className="text-sm text-white font-semibold">{project.client}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-white/5">
                <Calendar className="w-4 h-4" style={{ color: project.color }} />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">YEAR</span>
                  <span className="text-sm text-white font-semibold">{project.year}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-gray-500" />
              {project.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)`,
                  color: '#fff',
                  boxShadow: `0 0 20px ${project.glow}`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 35px ${project.glow}`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${project.glow}`)}
              >
                View Live Project <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)`,
                  color: '#fff',
                  boxShadow: `0 0 20px ${project.glow}`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 35px ${project.glow}`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${project.glow}`)}
              >
                View Live Project <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Section ───────────────────────────────────────────────────────── */
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const filtered = activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab);

  // Reset scroll + active index when filter changes
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    setActiveIndex(0);
  }, [activeTab]);

  // Track which card is currently centered
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll('[data-carousel-card]');
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const cardCenter = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cardCenter - center);
        if (d < minDist) { minDist = d; closest = i; }
      });
      setActiveIndex(closest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [filtered.length]);

  const scrollByCard = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-card]');
    if (!card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: 'smooth' });
  };

  // Auto-scroll every 2s, pauses on hover or when modal is open
  useEffect(() => {
    if (filtered.length <= 1) return;
    const id = setInterval(() => {
      if (isHovered || activeProject) return;
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }, 2000);
    return () => clearInterval(id);
  }, [filtered.length, isHovered, activeProject]);

  return (
    <section id="portfolio" className="relative py-16 md:py-20 w-full overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.150] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Distinct background: orange + blue dual glow */}
      <div className="absolute top-1/4 right-[-5%] w-[500px] h-[500px] rounded-full bg-orangeGold/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[400px] h-[400px] rounded-full bg-electric/8 blur-[120px] pointer-events-none" />
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orangeGold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.25em] text-electric uppercase mb-3 inline-flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> Portfolio
          </span>
          <h2 id="portfolio-heading" className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Exquisite <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Design</span> Showcase
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-orangeGold rounded-full mt-4" />
          <p className="text-gray-400 font-light text-base max-w-2xl mt-6">
            Explore our curated catalog of next-generation visual frameworks and full-stack software platforms.
          </p>
        </div>

        {/* Filter pills with counts */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((tab) => {
            const count = tab === 'All' ? projects.length : projects.filter((p) => p.category === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${isActive
                    ? 'text-white shadow-[0_0_20px_rgba(255,159,28,0.35)]'
                    : 'text-gray-300 bg-[#08111F]/60 border border-white/10 hover:bg-white/5 hover:border-white/20'
                  }`}
                style={
                  isActive
                    ? {
                      background: 'linear-gradient(135deg, rgba(255,159,28,0.9), rgba(255,159,28,0.5))',
                      border: '1px solid rgba(255,159,28,0.6)',
                    }
                    : {}
                }
              >
                {tab}
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? 'bg-[#08111F]/50 text-white' : 'bg-white/5 text-gray-400'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#08111F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#08111F] to-transparent z-10 pointer-events-none" />

        {/* Arrow buttons */}
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel-heavy border border-white/20 hover:border-orangeGold/60 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel-heavy border border-white/20 hover:border-orangeGold/60 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 scroll-smooth scrollbar-hide"
          style={{
            paddingLeft: 'max(1.5rem, calc(50vw - 210px))',
            paddingRight: 'max(1.5rem, calc(50vw - 210px))',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                data-carousel-card
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="snap-center flex-shrink-0 w-[78vw] sm:w-[420px]"
              >
                <ProjectCard project={project} onClick={setActiveProject} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-16 text-sm font-mono tracking-widest uppercase w-full">
              No projects in this category yet.
            </div>
          )}
        </div>

        {/* Dot indicators */}
        {filtered.length > 0 && (
          <div className="flex justify-center gap-2 mt-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current?.querySelectorAll('[data-carousel-card]')[i];
                  if (el && scrollRef.current) {
                    const left = el.offsetLeft - (scrollRef.current.clientWidth - el.offsetWidth) / 2;
                    scrollRef.current.scrollTo({ left, behavior: 'smooth' });
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                    ? 'w-8 bg-orangeGold shadow-[0_0_10px_rgba(255,159,28,0.6)]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
