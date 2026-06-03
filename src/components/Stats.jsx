import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CountUpNumber = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalSteps = end;
    const stepDuration = Math.max(Math.floor(duration / totalSteps), 12);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasTriggered, target, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const statsData = [
    {
      label: 'Projects Delivered',
      value: '250',
      suffix: '+',
      glowColor: 'rgba(10, 132, 255, 0.15)',
    },
    {
      label: 'Happy Global Clients',
      value: '100',
      suffix: '+',
      glowColor: 'rgba(0, 87, 255, 0.15)',
    },
    {
      label: 'Years Industry Experience',
      value: '5',
      suffix: '+',
      glowColor: 'rgba(255, 94, 26, 0.15)',
    },
    {
      label: 'Customer Satisfaction',
      value: '99',
      suffix: '%',
      glowColor: 'rgba(10, 132, 255, 0.15)',
    },
  ];

  return (
    <section className="relative py-20 w-full overflow-hidden bg-transparent">
      {/* Background cyber-lines and ambient orbs */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A84FF 1px, transparent 1px),
            linear-gradient(to bottom, #0A84FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={stat.label}
              className="relative p-6 md:p-8 rounded-2xl glass-panel border border-white/5 shadow-glass overflow-hidden flex flex-col items-center justify-center text-center group select-none hover:border-white/10 transition-colors"
            >
              {/* Pulsing dashboard circular light */}
              <div 
                className="absolute w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ backgroundColor: stat.glowColor }}
              />
              
              {/* Incremental Number */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight text-glow-blue flex items-center gap-0.5">
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </h2>

              {/* Label */}
              <p className="text-gray-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mt-4 text-center">
                {stat.label}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
