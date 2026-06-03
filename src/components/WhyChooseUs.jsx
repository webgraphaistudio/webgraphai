import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Code, Briefcase, Users, Calendar, Award, Sparkles } from 'lucide-react';
import cube3D from '../assets/logop.png';

/* ─── Data ──────────────────────────────────────────────────────────── */
const features = [
  { title: 'Scalable Architecture', icon: Layers, color: '#0A84FF' },
  { title: 'High-Performance', icon: Zap, color: '#FF5E1A' },
  { title: 'Secure Development', icon: Shield, color: '#34d399' },
  { title: 'Modern Tech Stack', icon: Code, color: '#a855f7' },
];

const stats = [
  { value: 20, suffix: '+', label: 'Projects Delivered', icon: Briefcase },
  { value: 20, suffix: '+', label: 'Happy Clients', icon: Users },
  { value: 1, suffix: '+', label: 'Years Experience', icon: Calendar },
  { value: 99, suffix: '%', label: 'Success Rate', icon: Award },
];

/* ─── CountUp ───────────────────────────────────────────────────────── */
const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;
    if (end === 0) { setCount(0); return; }
    const step = Math.max(Math.floor(1500 / end), 12);
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [triggered, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Feature Pill ──────────────────────────────────────────────────── */
const FeaturePill = ({ title, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#0a1830]/40 hover:border-electric/30 hover:bg-[#0a1830]/70 transition-all duration-300 cursor-default"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 flex-shrink-0"
      style={{
        background: `${color}15`,
        borderColor: `${color}40`,
      }}
    >
      <Icon className="w-6 h-6" style={{ color }} />
    </div>
    <span className="font-semibold text-white text-base md:text-lg">{title}</span>
  </motion.div>
);

/* ─── Stat Item ─────────────────────────────────────────────────────── */
const StatItem = ({ value, suffix, label, icon: Icon }) => (
  <div className="flex items-center gap-3 md:gap-4 min-w-0">
    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center bg-electric/10 border border-electric/30 flex-shrink-0">
      <Icon className="w-5 h-5 text-electric" />
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:gap-3 min-w-0">
      <span className="text-xl md:text-3xl font-extrabold text-electric leading-none tracking-tight whitespace-nowrap">
        <CountUp value={value} suffix={suffix} />
      </span>
      <span className="text-[9px] md:text-xs font-mono tracking-widest text-gray-400 uppercase whitespace-nowrap leading-tight mt-1 md:mt-0">
        {label}
      </span>
    </div>
  </div>
);

/* ─── Section ───────────────────────────────────────────────────────── */
const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-16 md:py-20 w-full overflow-hidden" aria-labelledby="why-us-heading">
      {/* Distinct background: deep blue ambient + dot pattern */}
      <div className="absolute top-[10%] right-[-8%] w-[600px] h-[600px] rounded-full bg-deepBlue/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] rounded-full bg-electric/8 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(10, 132, 255, 0.6) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-[92rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Big card container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#0a1830]/60 via-[#08101f]/80 to-[#050a14]/80 p-8 md:p-12 overflow-hidden"
        >
          {/* Inner glow accents */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="lg:col-span-3 flex flex-col gap-7">
              {/* Subtitle badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5 self-start">
                <Sparkles className="w-3.5 h-3.5 text-electric" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-electric uppercase">
                  Why Partner With Us
                </span>
              </div>

              <h2 id="why-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-white leading-tight">
                Disrupting Norms,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Engineering Futures
                </span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                At WebGraph AI Studio, we merge luxury aesthetics with robust visual engineering. We help startups, creators, and scaleups out-compile and out-design their competition with bleeding-edge digital ecosystems.
              </p>

              {/* 2x2 feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 max-w-2xl">
                {features.map((f, i) => (
                  <FeaturePill key={f.title} {...f} delay={0.1 + i * 0.08} />
                ))}
              </div>
            </div>

            {/* Right 3D visual */}
            <div className="lg:col-span-2 flex items-center justify-center relative min-h-[320px]">
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow behind cube */}
                <div className="absolute inset-0 bg-electric/20 blur-[100px] rounded-full animate-pulse-slow" />
                <div className="absolute inset-[15%] bg-blue-500/10 blur-[60px] rounded-full" />

                {/* Orbiting scanner ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-electric/30 animate-spin-slow pointer-events-none" />

                {/* 3D logo image with float animation */}
                <motion.img
                  src={cube3D}
                  alt="WebGraph AI Studio 3D logo — premium digital agency identity"
                  className="relative w-full h-full object-contain"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: 'drop-shadow(0 0 30px rgba(10, 132, 255, 0.5))' }}
                />

                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-electric shadow-[0_0_10px_#0A84FF]" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8 md:my-10" />

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
