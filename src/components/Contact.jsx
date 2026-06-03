import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock, Globe, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: 'Website Development', brief: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.phone || !form.brief) {
      setError('Please fill in your name, email, phone, and project brief.');
      return;
    }

    if (!/^\+?[\d\s\-()]{7,20}$/.test(form.phone)) {
      setError('Please enter a valid phone number (digits, spaces, +, -, () allowed).');
      return;
    }

    if (!emailjsConfigured) {
      setError('Email service is not configured yet. Please add your EmailJS keys to the .env file.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          project_type: form.projectType,
          brief: form.brief,
          to_name: 'WebGraph AI Studio',
        },
        { publicKey: PUBLIC_KEY }
      );

      if (AUTOREPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(
            SERVICE_ID,
            AUTOREPLY_TEMPLATE_ID,
            {
              to_name: form.name,
              to_email: form.email,
              from_name: 'WebGraph AI Studio',
              from_email: 'webgraphai@gmail.com',
              project_type: form.projectType,
              brief: form.brief,
            },
            { publicKey: PUBLIC_KEY }
          );
        } catch (autoErr) {
          console.warn('Auto-reply failed (non-blocking):', {
            status: autoErr?.status,
            text: autoErr?.text,
            message: autoErr?.message,
            full: autoErr,
          });
        }
      }

      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#0A84FF', '#0057FF', '#FF5E1A', '#ffffff'],
        ticks: 200,
      });
      setForm({ name: '', email: '', phone: '', projectType: 'Website Development', brief: '' });
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong sending your proposal. Please try again or email us directly at webgraphai@gmail.com.');
      console.error('EmailJS error:', err);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 w-full overflow-hidden" aria-labelledby="contact-heading">
      {/* Animated background orbs */}
      <div className="absolute top-[10%] right-[-8%] w-[500px] h-[500px] rounded-full bg-orangeGold/10 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[5%] left-[-8%] w-[500px] h-[500px] rounded-full bg-electric/10 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-deepBlue/5 blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.150] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-electric" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-electric uppercase">Initiate Launch</span>
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-[1.05]">
            Let's Engineer{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-orangeGold bg-clip-text text-transparent">
              Something Grand
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric to-orangeGold rounded-full mt-5" />
          <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mt-6">
            Ready to scale your digital authority? Send us a brief, and our design leads will reach out within 24 hours.
          </p>
        </motion.div>

        {/* Form + Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-12"
        >
          {/* LEFT — Form card with animated gradient border */}
          <div className="lg:col-span-7 relative group">
            {/* Animated gradient border (conic) */}
            <div className="absolute -inset-[1px] rounded-3xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg, #0A84FF, #FF5E1A, #0057FF, #0A84FF)',
                  animation: 'spin 6s linear infinite',
                }}
              />
            </div>
            <div
              className="relative rounded-3xl p-7 md:p-10 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(8, 17, 31, 0.95), rgba(5, 10, 20, 0.95))',
                backdropFilter: 'blur(14px)',
              }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono tracking-widest text-electric uppercase">Form_01</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-electric/40 to-transparent" />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{error}</span>
                  </motion.div>
                )}

                <AnimatedInput
                  label="Full Name"
                  type="text"
                  placeholder="Steve Jobs"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  focused={focusedField === 'name'}
                />

                <AnimatedInput
                  label="Email Address"
                  type="email"
                  placeholder="steve@apple.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  focused={focusedField === 'email'}
                />

                <AnimatedInput
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  focused={focusedField === 'phone'}
                />

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Project Type</label>
                  <div className="relative">
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      onFocus={() => setFocusedField('type')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-[#0a1525] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/50 transition-all appearance-none cursor-pointer hover:border-white/20"
                      style={{
                        boxShadow: focusedField === 'type' ? '0 0 20px rgba(10, 132, 255, 0.25)' : 'none',
                      }}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Branding & Identity">Branding & Identity</option>
                      <option value="UI/UX Redesign">UI/UX Redesign</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▾</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Project Brief</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your vision, target audience, and feature roadmap..."
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    onFocus={() => setFocusedField('brief')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-[#0a1525] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/50 hover:border-white/20 transition-all resize-none"
                    style={{
                      boxShadow: focusedField === 'brief' ? '0 0 20px rgba(10, 132, 255, 0.25)' : 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full mt-2 py-4 rounded-xl font-semibold text-white overflow-hidden group disabled:opacity-50 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #0A84FF, #0057FF)',
                    boxShadow: '0 0 30px rgba(10, 132, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {/* Shine sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                      backgroundSize: '200% 100%',
                      animation: 'shineSweep 1.5s linear infinite',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending Proposal...
                      </>
                    ) : (
                      <>
                        Transmit Proposal
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Success overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050a14]/95 backdrop-blur-md rounded-3xl z-30 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    >
                      <div className="relative w-20 h-20 mx-auto mb-5">
                        <div className="absolute inset-0 rounded-full bg-electric/30 blur-xl animate-pulse" />
                        <CheckCircle className="relative w-20 h-20 text-electric" />
                      </div>
                      <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-3">Proposal Transmitted!</h3>
                      <p className="text-gray-400 text-sm max-w-sm">
                        Your proposal was received. A confirmation email is on its way to your inbox, and our lead visual engineers will follow up within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 mt-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 hover:border-electric hover:text-white text-gray-300 transition-all active:scale-95"
                      >
                        Return to Form
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — Contact info card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-electric/30 via-transparent to-orangeGold/30 pointer-events-none" />
            <div
              className="relative h-full rounded-3xl p-7 md:p-9 flex flex-col justify-between overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 24, 48, 0.85), rgba(5, 10, 20, 0.95))',
                backdropFilter: 'blur(14px)',
              }}
            >
              {/* Floating decorative orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orangeGold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col gap-7 z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-orangeGold uppercase">Comms_Link</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-orangeGold/40 to-transparent" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-white">Studio Coordinates</h3>

                <div className="flex flex-col gap-4">
                  <ContactItem
                    icon={Mail}
                    label="EMAIL INBOX"
                    value="webgraphai@gmail.com"
                    href="mailto:webgraphai@gmail.com"
                    color="#0A84FF"
                  />
                  <ContactItem
                    icon={Phone}
                    label="HOT PHONE LINE"
                    value="+91 85228 27847"
                    href="tel:+918522827847"
                    color="#FF5E1A"
                  />
                  <ContactItem
                    icon={MapPin}
                    label="STUDIO HQ"
                    value="Hyderabad, Telangana"
                    color="#0057FF"
                  />
                  <ContactItem
                    icon={Clock}
                    label="RESPONSE TIME"
                    value="< 24 Hours"
                    color="#34d399"
                  />
                </div>
              </div>

              {/* Social grid */}
              <div className="relative flex flex-col gap-3 mt-8 z-10">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Digital Grid</span>
                <div className="flex items-center gap-3">
                  <SocialIcon href="https://x.com/Web_Graph_Ai" label="X">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/in/web-graph-ai-studio-3944aa413/?skipRedirect=true" label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.instagram.com/web_graph_ai_studio/" label="Instagram">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.facebook.com/profile.php?id=61590387666024" label="Facebook">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://github.com/webgraphaistudio" label="GitHub">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shineSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

const AnimatedInput = ({ label, type, placeholder, value, onChange, onFocus, onBlur, focused }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">{label}</label>
    <div className="relative">
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full bg-[#0a1525] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/50 hover:border-white/20 transition-all"
        style={{
          boxShadow: focused ? '0 0 20px rgba(10, 132, 255, 0.25)' : 'none',
        }}
      />
      {/* Animated bottom line on focus */}
      <div
        className="absolute bottom-0 left-1/2 h-[2px] rounded-full transition-all duration-500 -translate-x-1/2"
        style={{
          width: focused ? 'calc(100% - 2rem)' : '0%',
          background: 'linear-gradient(90deg, #0A84FF, #FF5E1A)',
          boxShadow: '0 0 10px rgba(10, 132, 255, 0.5)',
        }}
      />
    </div>
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href, color }) => {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      className="group flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}40`,
          boxShadow: `0 0 12px ${color}30`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase leading-none">{label}</span>
        <span className="text-sm font-semibold text-white mt-1 truncate group-hover:text-electric transition-colors">{value}</span>
      </div>
    </Tag>
  );
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="group relative w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-electric hover:text-white hover:-translate-y-0.5"
    style={{
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      style={{
        background: 'radial-gradient(circle at center, rgba(10, 132, 255, 0.3), transparent 70%)',
      }}
    />
    <span className="relative z-10">{children}</span>
  </a>
);

export default Contact;
