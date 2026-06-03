import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles, Terminal, Activity, Globe, Zap, ArrowUpRight } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import logo3D from '../assets/3dlogo.png';
import allInOne from '../assets/allin1.png';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const capabilities = [
    { name: "Website Development", color: "from-cyan-400 to-blue-500" },
    { name: "Graphic Design", color: "from-orange-400 to-orange-500" },
    { name: "Branding", color: "from-amber-400 to-orange-500" },
    { name: "AI Solutions", color: "from-green-400 to-emerald-500" },
    { name: "UI/UX Design", color: "from-rose-400 to-red-500" },
    { name: "Digital Marketing", color: "from-blue-400 to-indigo-500" }
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent" aria-label="Hero section - WebGraph AI Studio">
      {/* 3D Neural Net Canvas Background (Kept intact) */}
      <ThreeCanvas />

      {/* Futuristic Grid Overlay & Ambient Glowing Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,17,31,0.2),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-electric/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orangeGold/5 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Hero Content Container (Expanded Width to Decrease Left/Right Space) */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center relative z-10">

        {/* Left: Text & CTA Content */}
        <div className="lg:col-span-7 flex flex-col text-left items-start">
          
          {/* Subtitle Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-electric/30 bg-electric/5 backdrop-blur-md text-electric text-[11px] md:text-xs font-bold tracking-wider uppercase mb-6 shadow-neon-blue/10 shadow-lg hover:border-electric/60 hover:bg-electric/10 transition-all duration-300 group cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            <Cpu className="w-3.5 h-3.5 animate-spin-slow text-electric" />
            <span className="text-gray-300">Next-Gen</span>
            <span className="text-white font-extrabold">AI Digital Agency</span>
            <Sparkles className="w-3.5 h-3.5 text-electric group-hover:rotate-12 transition-transform duration-300" />
          </motion.div>

          {/* Large Title Text Reveal (Pure White Color Only) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-sans font-black tracking-tight text-white leading-[1.1] select-none"
          >
            Transforming Bold Ideas <br />
            Into Powerful Digital <br />
            Experiences.
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-gray-400 text-sm md:text-base mt-6 max-w-xl font-light leading-relaxed"
          >
            We engineer high-performance web applications, striking custom graphics, distinct branding identities, and bleeding-edge digital ecosystems.
          </motion.p>

          {/* Micro-Capsule Specialty Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-2 mt-6 max-w-xl"
          >
            {capabilities.map((cap, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (i * 0.06), duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-semibold glass-panel hover:bg-white/5 border border-white/5 hover:border-white/15 text-gray-300 hover:text-white transition-all cursor-default"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cap.color} shadow-sm`} />
                {cap.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Dual Action Proportional Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto items-stretch sm:items-center"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="relative group px-8 py-4.5 rounded-full font-bold text-white bg-gradient-to-r from-deepBlue via-electric to-deepBlue border border-electric/40 shadow-[0_0_30px_rgba(10,132,255,0.2)] hover:shadow-[0_0_40px_rgba(10,132,255,0.4)] hover:border-electric/70 transition-all duration-500 flex items-center justify-center gap-2.5 overflow-hidden text-sm md:text-base cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-deepBlue via-electric to-deepBlue opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute -inset-10 bg-white/10 blur-md rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              
              <span className="relative z-10 flex items-center gap-2">
                Initiate Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => handleScrollTo('portfolio')}
              className="relative group px-8 py-4.5 rounded-full font-bold text-gray-300 hover:text-white glass-panel hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base overflow-hidden cursor-pointer"
            >
              <span className="absolute -inset-10 bg-electric/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowUpRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </span>
            </button>
          </motion.div>

          {/* Live Status Tracker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex items-center gap-2 mt-4 text-[10px] md:text-[11px] text-gray-500 font-mono tracking-wider"
          >
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span>AGENCY AVAILABILITY: ACTIVE &bull; 2 CLIENT SLOTS CURRENTLY OPEN</span>
          </motion.div>
        </div>

        {/* Right Column: Premium 3D Perspective Browser showcase (Clean & Mindblowing) */}
        <div className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] flex items-center justify-center mt-12 lg:mt-0" style={{ perspective: '1000px' }}>
          
          {/* Main Glowing Background Orb behind showcase */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-electric/10 blur-[80px] -z-10 pointer-events-none" />

          {/* 3D Tilted Glass Browser Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-10, 10, -10],
            }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ rotateY: 10, rotateX: -6, translateZ: 15 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              type: "spring", stiffness: 120, damping: 20
            }}
            className="relative z-20 w-[95%] sm:w-[410px] aspect-[16/10.5] rounded-2xl overflow-hidden glass-panel-heavy border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.75),0_0_50px_rgba(10,132,255,0.12)] p-2 group hover:border-electric/40 transition-colors duration-500"
          >
            {/* Browser Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-transparent/80 border-b border-white/5 flex items-center px-4 z-30 select-none">
              {/* Chrome Dots */}
              <div className="flex gap-1.5 mr-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-md shadow-red-500/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              
              {/* Mock Address Bar */}
              <div className="flex-1 max-w-[200px] mx-auto bg-[#08111F]/60 border border-white/5 rounded-md px-2.5 py-0.5 text-[8px] text-gray-500 font-mono flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                <span>webgraph.studio/neural-core</span>
              </div>
            </div>
            
            {/* Viewport Content */}
            <div className="w-full h-full rounded-lg overflow-hidden bg-darkNavy/70 relative pt-7">
              <img src={allInOne} alt="WebGraph AI Studio portfolio showcase — premium website and digital project screenshots" fetchpriority="high" width="800" height="500" className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.07] transition-transform duration-700" />
              {/* Sleek Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkNavy via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Widget 2 (Top Left): Live Project Pulse — Animated Arc Progress + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [-10, 10, -10],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.35 },
              x: { duration: 1, delay: 0.35 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }
            }}
            className="absolute top-[-18px] left-[0px] md:left-[-28px] z-30 w-[155px] md:w-[168px] p-3 rounded-2xl glass-panel-heavy border border-orangeGold/20 hover:border-orangeGold/50 shadow-[0_20px_40px_rgba(0,0,0,0.55),0_0_25px_rgba(255,159,28,0.1)] hover:shadow-[0_0_30px_rgba(255,159,28,0.25)] flex flex-col gap-2.5 cursor-pointer group/stat transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-black text-white tracking-widest flex items-center gap-1">
                <Zap className="w-3 h-3 text-orangeGold animate-bounce" /> PROJECT PULSE
              </span>
              <span className="text-[7px] text-orangeGold font-mono tracking-widest">LIVE</span>
            </div>

            <div className="h-[1px] w-full bg-white/10" />

            {/* Body: Arc + stats */}
            <div className="flex items-center gap-3">
              {/* Animated SVG Circular Progress Arc */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 44 44" className="w-full h-full -rotate-90">
                  {/* Track */}
                  <circle cx="22" cy="22" r="17" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
                  {/* Animated Progress Arc (96%) */}
                  <motion.circle
                    cx="22" cy="22" r="17"
                    fill="none"
                    stroke="url(#arcGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="106.8"
                    initial={{ strokeDashoffset: 106.8 }}
                    animate={{ strokeDashoffset: 4.3 }}
                    transition={{ duration: 1.8, delay: 0.6, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF5E1A" />
                      <stop offset="100%" stopColor="#FF5E1A" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-white leading-none">96%</span>
                  <span className="text-[5px] text-gray-500 font-mono leading-none mt-0.5">DONE</span>
                </div>
              </div>

              {/* Stat Columns */}
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex flex-col leading-none">
                  <motion.span
                    className="text-[13px] font-black text-white leading-none"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                  >120+</motion.span>
                  <span className="text-[6px] text-gray-500 font-mono mt-0.5">PROJECTS LIVE</span>
                </div>
                <div className="h-[1px] w-full bg-white/5" />
                <div className="flex flex-col leading-none">
                  <motion.span
                    className="text-[13px] font-black text-orangeGold leading-none"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                  >98%</motion.span>
                  <span className="text-[6px] text-gray-500 font-mono mt-0.5">CLIENT HAPPY</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Widget 1 (Bottom Right Corner): Sleek Glass Holographic Engine Core (Highly Interactive Sci-Fi Dial & Waveform) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [12, -12, 12],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.4 },
              x: { duration: 1, delay: 0.4 },
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
            }}
            className="absolute bottom-[-20px] right-[0px] md:right-[-25px] z-30 w-[160px] md:w-[175px] p-3.5 rounded-2xl glass-panel-heavy border border-white/10 hover:border-electric/50 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(10,132,255,0.15)] hover:shadow-[0_0_35px_rgba(10,132,255,0.3)] flex flex-col gap-3 cursor-pointer group/widget transition-all duration-300"
          >
            {/* Widget Header */}
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-black text-white tracking-widest flex items-center gap-1">
                <Terminal className="w-3 h-3 text-electric animate-pulse" /> 3D LOGIC ENGINE
              </span>
              <span className="flex items-center gap-1 text-[7px] text-green-400 font-mono tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping" />
                ACTIVE
              </span>
            </div>
            
            <div className="h-[1px] w-full bg-white/10" />
            
            {/* Widget Body */}
            <div className="flex items-center gap-2.5">
              {/* Spinning High-Tech circular radar with 3D logo inside */}
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover/widget:border-electric/20 transition-colors">
                {/* Dashed outer circular scanner ring */}
                <div className="absolute inset-0.5 rounded-full border border-dashed border-electric/40 animate-spin-slow" />
                
                {/* Pulsing glow behind logo */}
                <div className="absolute w-6 h-6 rounded-full bg-electric/10 blur-sm group-hover/widget:bg-electric/20 transition-colors" />
                
                <img src={logo3D} alt="WebGraph AI Studio 3D logo icon" className="w-7 h-7 object-contain animate-float relative z-10" />
              </div>

              {/* Live Animated Neural Waveform Equalizer */}
              <div className="flex flex-col flex-1 gap-1.5">
                <div className="flex items-end gap-0.5 h-4.5 px-0.5 select-none">
                  <motion.div animate={{ height: [3, 13, 3] }} transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }} className="w-1 rounded-full bg-electric shadow-[0_0_5px_rgba(10,132,255,0.5)]" />
                  <motion.div animate={{ height: [6, 17, 6] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.15 }} className="w-1 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                  <motion.div animate={{ height: [4, 11, 4] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.3 }} className="w-1 rounded-full bg-orange-500" />
                  <motion.div animate={{ height: [10, 4, 10] }} transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.1 }} className="w-1 rounded-full bg-electric shadow-[0_0_5px_rgba(10,132,255,0.5)]" />
                  <motion.div animate={{ height: [3, 14, 3] }} transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut", delay: 0.2 }} className="w-1 rounded-full bg-cyan-300" />
                </div>
                
                <div className="flex flex-col leading-none">
                  <span className="text-[6px] text-gray-400 font-mono">MS LATENCY: 1.2</span>
                  <span className="text-[6px] text-electric font-mono font-bold uppercase tracking-wider mt-0.5">CORE SYNCED</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Neon Line Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => handleScrollTo('services')}
      >
        <span className="text-[9px] text-gray-500 font-bold tracking-[0.3em] group-hover:text-white transition-colors duration-300 uppercase select-none">
          Explore Studio
        </span>

        {/* Neon vertical line with racing particle */}
        <div className="relative flex flex-col items-center">
          {/* Static neon glow line */}
          <div className="w-[1.5px] h-12 rounded-full bg-gradient-to-b from-transparent via-electric/40 to-transparent relative overflow-hidden">
            {/* Racing neon particle */}
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 -translate-x-1/2 w-[3px] h-4 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, transparent, #0A84FF, #FF5E1A, transparent)',
                boxShadow: '0 0 8px 3px rgba(10,132,255,0.7), 0 0 16px 4px rgba(168,85,247,0.4)',
              }}
            />
          </div>

          {/* Neon chevron arrows that fade in sequence */}
          <div className="flex flex-col items-center mt-1 gap-0.5">
            {[0, 0.15, 0.3].map((delay, i) => (
              <motion.svg
                key={i}
                width="10" height="5" viewBox="0 0 10 5"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay }}
              >
                <polyline
                  points="1,1 5,4 9,1"
                  fill="none"
                  stroke={i === 2 ? '#FF5E1A' : '#0A84FF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
