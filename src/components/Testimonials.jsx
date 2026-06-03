import React, { useState, useEffect, useRef } from 'react';
import { Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Vigneswara Tours & Travels',
    quote: '"They built us a stunning website that truly captures the premium feel of our brand. Our customers love how easy it is to browse our fleet and book vehicles online. The whole experience — from design to launch — was smooth, professional, and delivered beyond our expectations."',
    initials: 'V',
    color: '#FF5E1A',
  },
  {
    name: 'Datla Hospitals',
    quote: '"Our new website has completely transformed how patients reach us. Appointments are coming in online every day, and the emergency contact is always one tap away. The design feels trustworthy, modern, and matches the compassionate care we deliver at Datla Hospitals."',
    initials: 'D',
    color: '#22d3ee',
  },
  {
    name: 'Andhra Children\'s Hospital',
    quote: '"Parents love how warm and easy our new website feels. Booking an appointment is now just a click away, and we receive inquiries from new families every week. The team truly understood the heart of pediatric care and translated it beautifully online."',
    initials: 'A',
    color: '#f472b6',
  },
  {
    name: 'S Furniture Village',
    quote: '"Our new website showcases our Sheesham collection in a way we always imagined. Customers can now browse our full range, see detailed galleries, and reach out instantly. The design feels premium, and we have seen a real lift in enquiries since launch."',
    initials: 'S',
    color: '#f59e0b',
  },
  {
    name: 'Kognivex Team',
    quote: '"Building our own site with the same energy we bring to every client project — a fast, AI-first brand experience that turns visitors into qualified leads. The dashboard hero and service pillars tell our story in seconds."',
    initials: 'K',
    color: '#0A84FF',
  },
];

const TestimonialCard = ({ t }) => (
  <div
    className="group relative flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] rounded-2xl p-7 md:p-9 mx-3 cursor-default transition-transform duration-500 hover:-translate-y-1"
    style={{
      background: 'rgba(10, 24, 48, 0.7)',
      border: '1px solid rgba(10, 132, 255, 0.15)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    }}
  >
    {/* Subtle hover glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        boxShadow: `0 0 30px ${t.color}40, inset 0 0 30px ${t.color}10`,
        border: `1px solid ${t.color}50`,
      }}
    />

    {/* Large back quote icon */}
    <Quote
      className="absolute right-7 top-7 w-16 h-16 pointer-events-none transition-colors duration-500"
      style={{ color: `${t.color}20` }}
    />

    {/* Quote text */}
    <p className="relative text-gray-300 text-base md:text-[17px] leading-relaxed font-light mb-7 min-h-[140px]">
      {t.quote}
    </p>

    {/* Divider */}
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

    {/* Author row */}
    <div className="relative flex items-center gap-4">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white relative flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${t.color}40, ${t.color}10)`,
          border: `1px solid ${t.color}60`,
          boxShadow: `0 0 18px ${t.color}50`,
        }}
      >
        <span className="text-sm font-extrabold tracking-wider">{t.initials}</span>
      </div>
      <div className="flex flex-col text-left min-w-0">
        <span className="text-sm font-bold text-white tracking-wide truncate">{t.name}</span>
        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-0.5">
          Valued Client
        </span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  return (
    <section id="testimonials" className="relative py-16 md:py-20 w-full overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Distinct background: orange + blue dual glow + grid */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-deepBlue/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orangeGold/8 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 px-6">
          <span className="text-xs font-bold tracking-[0.25em] text-electric uppercase mb-3">Testimonials</span>
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-orangeGold rounded-full mt-4" />
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mt-6">
            Hear from the visionaries, founders, and engineers we've collaborated with to build bleeding-edge digital ecosystems.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className="flex w-max"
            style={{
              animation: 'marqueeScroll 45s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {/* First set */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
