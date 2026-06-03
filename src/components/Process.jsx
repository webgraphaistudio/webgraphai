import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Map, Layout, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    phase: '01',
    title: 'Discover',
    subtitle: 'Research & Strategic Audits',
    description: 'We audit your sector, map direct competitor layouts, research key keyword densities, study visitor psychologies, and draft technical benchmarks.',
    icon: Search,
    color: '#0A84FF',
  },
  {
    phase: '02',
    title: 'Plan',
    subtitle: 'Architecture & Specifications',
    description: 'We compile high-fidelity wireframes, mapping site flow trees, designing relational databases, and finalizing concrete package APIs.',
    icon: Map,
    color: '#0057FF',
  },
  {
    phase: '03',
    title: 'Design',
    subtitle: 'Luxury UI Visual Crafting',
    description: 'We build beautiful dark glass interfaces, custom typography guidelines, responsive interactive prototypes, and fluid CSS transitions.',
    icon: Layout,
    color: '#FF5E1A',
  },
  {
    phase: '04',
    title: 'Develop',
    subtitle: 'Clean High-End Engineering',
    description: 'We translate assets into accessible React components backed by Tailwind CSS, animating elements with GSAP and Three.js logic.',
    icon: Code2,
    color: '#0A84FF',
  },
  {
    phase: '05',
    title: 'Launch',
    subtitle: 'Validations & Cloud Rollout',
    description: 'We verify Lighthouse performance speed ratings, compiling source maps, and deploying your static web app to production web servers.',
    icon: Rocket,
    color: '#FF5E1A',
  },
];

const NodeCircle = ({ Icon, isActive, isCurrent, color, title }) => (
  <div className="relative flex flex-col items-center">
    <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
      {isActive && (
        <>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${color}55, transparent 70%)`,
              filter: 'blur(6px)',
              animation: isCurrent ? 'pulseGlow 2s ease-in-out infinite' : 'none',
            }}
          />
          {isCurrent && (
            <div
              className="absolute inset-0 rounded-full border-2 animate-ping"
              style={{ borderColor: color, opacity: 0.5 }}
            />
          )}
        </>
      )}
      <div
        className="relative w-full h-full rounded-full flex items-center justify-center border-2 transition-all duration-500"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${color}30, rgba(8, 17, 31, 0.95))`
            : 'rgba(8, 17, 31, 0.95)',
          borderColor: isActive ? color : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isActive ? `0 0 20px ${color}80, inset 0 0 10px ${color}30` : 'none',
        }}
      >
        <Icon
          className="w-3.5 h-3.5 md:w-5 md:h-5 transition-colors duration-500"
          style={{ color: isActive ? color : '#6b7280' }}
        />
      </div>
    </div>
    <div className="text-center mt-1.5 md:mt-3 hidden sm:block">
      <div
        className={`text-[9px] md:text-xs font-bold transition-colors whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-600'
          }`}
      >
        {title}
      </div>
      {isCurrent && (
        <div
          className="text-[7px] md:text-[8px] font-mono uppercase tracking-widest mt-0.5"
          style={{ color }}
        >
          Current
        </div>
      )}
    </div>
  </div>
);

const ProcessCard = ({ step, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-5 md:p-6 overflow-hidden cursor-default h-full flex flex-col"
      style={{
        border: hovered
          ? '1px solid rgba(10, 132, 255, 0.7)'
          : `1px solid ${step.color}25`,
        background: 'rgba(8, 17, 31, 0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: hovered
          ? `0 0 25px rgba(255,159,28,0.55), 0 0 60px rgba(255,159,28,0.18), 0 30px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)`
          : `0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: hovered
          ? 'perspective(1000px) rotateX(4deg) translateY(-6px)'
          : 'perspective(1000px) rotateX(0deg)',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, border-color 0.3s',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${step.color}60, transparent 60%)` }}
      />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 30%, ${step.color}20 50%, transparent 70%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmerSlide 4s linear infinite',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }}
      />

      <div className="relative flex items-center justify-between mb-3">
        <span
          className="text-4xl md:text-5xl font-sans font-extrabold bg-clip-text text-transparent leading-none"
          style={{ backgroundImage: `linear-gradient(135deg, ${step.color}, #ffffff)` }}
        >
          {step.phase}
        </span>
        <div
          className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: step.color }} />
        </div>
      </div>

      <h3 className="relative font-sans font-bold text-lg md:text-xl text-white mb-1">{step.title}</h3>
      <h4 className="relative text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-orangeGold font-mono mb-3">
        {step.subtitle}
      </h4>
      <p className="relative text-gray-400 text-xs md:text-sm leading-relaxed font-light flex-1">
        {step.description}
      </p>

      <div className="relative mt-4 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}80)` }}
          initial={{ width: '0%' }}
          animate={inView ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Process = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = rect.top - vh * 0.5;
      const end = rect.bottom - vh * 0.5;
      const total = end - start;
      const progress = total > 0 ? Math.max(0, Math.min(1, -start / total)) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length));

  return (
    <section ref={sectionRef} id="process" className="relative py-14 md:py-18 w-full overflow-hidden bg-transparent" aria-labelledby="process-heading">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.150] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-electric/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orangeGold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[88rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-electric uppercase mb-3">Our Process</span>
          <h2 id="process-heading" className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            How We Bring{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ideas To Life
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-orangeGold rounded-full mt-4" />
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mt-4 md:mt-6">
            An agile, transparent, and optimized development workflow that translates abstract visions into high-end production products.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16 overflow-x-auto md:overflow-visible scrollbar-hide">
          <div className="relative h-[70px] md:h-[100px] min-w-[300px] md:min-w-0">
            {/* Track line */}
            <div className="absolute top-[16px] md:top-[24px] left-[8%] right-[8%] h-[2px] bg-white/5 rounded-full" />
            <div
              className="absolute top-[16px] md:top-[24px] left-[8%] h-[2px] rounded-full transition-all duration-300"
              style={{
                width: `${scrollProgress * 84}%`,
                background: 'linear-gradient(90deg, #0A84FF 0%, #FF5E1A 100%)',
                boxShadow: '0 0 10px rgba(10,132,255,0.6), 0 0 20px rgba(255,159,28,0.3)',
              }}
            />
            {/* Shimmer sweep across line */}
            <div
              className="absolute top-[16px] md:top-[24px] left-[8%] right-[8%] h-[2px] overflow-hidden pointer-events-none"
            >
              <div
                className="h-full w-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                  animation: 'lineShimmer 3.5s linear infinite',
                }}
              />
            </div>

            {/* Nodes positioned at exact percentages */}
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeIndex;
              const isCurrent = i === activeIndex;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${8 + (i / (steps.length - 1)) * 84}%`,
                    top: 0,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <NodeCircle
                    Icon={Icon}
                    isActive={isActive}
                    isCurrent={isCurrent}
                    color={step.color}
                    title={step.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <ProcessCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmerSlide {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes lineShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.35); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Process;
