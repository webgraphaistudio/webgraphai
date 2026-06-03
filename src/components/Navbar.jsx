import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logopng.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 glass-panel border-b border-white/5 shadow-glass' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="flex items-center gap-3 group"
          aria-label="WebGraph AI Studio - Home"
        >
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-electric/30 flex items-center justify-center bg-darkNavy/80 group-hover:border-electric transition-colors">
            <img src={logoImg} alt="WebGraph AI Studio logo" className="w-7 h-7 object-contain" />
            <div className="absolute inset-0 bg-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-base tracking-wider text-white flex items-center gap-1">
              WEBGRAPH <span className="text-electric text-[10px] bg-electric/10 px-1.5 py-0.5 rounded border border-electric/20 font-medium">AI</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-[0.15em] font-light">STUDIO</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href.substring(1))}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 px-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-deepBlue to-electric border border-electric/40 hover:shadow-neon-blue transition-all duration-300 flex items-center gap-1.5 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orangeGold to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full glass-panel border-b border-white/5 px-6 py-6 absolute top-full left-0 z-40 shadow-glass overflow-hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                  className="text-base font-semibold text-gray-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full text-center py-3 mt-2 rounded-xl font-semibold text-white bg-gradient-to-r from-deepBlue to-electric border border-electric/40 flex items-center justify-center gap-2 hover:shadow-neon-blue transition-all duration-300"
              >
                Start Project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
