import React from 'react';
import { ArrowUp, Heart, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logopng.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent pt-14 pb-8" role="contentinfo" aria-label="Site footer">
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent, #0A84FF, #FF9F1C, transparent)',
            animation: 'borderGlow 4s linear infinite',
          }}
        />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-orangeGold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col gap-14">

        {/* MIDDLE — Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Logo + Description */}
          <div className="md:col-span-5 flex flex-col items-start text-left gap-4">
            <a href="#" onClick={handleScrollToTop} className="group flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-electric/40 flex items-center justify-center bg-darkNavy/80 group-hover:border-electric transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(10, 132, 255, 0.25)',
                }}
              >
                <img src={logoImg} alt="WebGraph AI Studio logo — premium digital agency in Hyderabad" className="w-9 h-9 object-contain" />
                <div className="absolute inset-0 bg-electric/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-base tracking-wider text-white">
                  WEBGRAPH{' '}
                  <span className="text-electric text-[10px] font-medium bg-electric/10 px-1.5 py-0.5 rounded">AI</span>
                </span>
                <span className="text-[9px] text-gray-500 tracking-[0.25em] font-light">STUDIO</span>
              </div>
            </a>
            <p className="text-gray-400 font-light text-sm max-w-md leading-relaxed">
              Next-generation design studio merging Apple-level aesthetics with high-performance reactive engineering to craft disruptive digital assets for ambitious brands.
            </p>

            {/* Status badge */}
            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Active Sprints Open</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start text-left gap-4">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Navigation</span>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Expert Services', id: 'services' },
                { label: 'Case Portfolio', id: 'portfolio' },
                { label: 'Why Partner', id: 'why-us' },
                { label: 'Process Timeline', id: 'process' },
                { label: 'Testimonials', id: 'testimonials' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="w-0 h-px bg-electric group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col items-start text-left gap-4">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Direct Channel</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:webgraphai@gmail.com" className="group flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-lg bg-electric/10 border border-electric/30 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>webgraphai@gmail.com</span>
              </a>
              <div className="group flex items-center gap-3 text-sm text-gray-300">
                <div className="w-9 h-9 rounded-lg bg-orangeGold/10 border border-orangeGold/30 text-orangeGold flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — Copyright row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-gray-500 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} WebGraph AI Studio. All rights reserved</span>

          <button
            onClick={handleScrollToTop}
            aria-label="Back to top"
            className="group relative w-11 h-11 rounded-xl border border-white/10 text-gray-400 flex items-center justify-center transition-all duration-300 hover:border-electric hover:text-white active:scale-95 overflow-hidden"
            style={{
              background: 'rgba(10, 24, 48, 0.4)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'radial-gradient(circle at center, rgba(10, 132, 255, 0.3), transparent 70%)',
              }}
            />
            <ArrowUp className="relative z-10 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
