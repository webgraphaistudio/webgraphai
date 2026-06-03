import React, { useEffect, useState, lazy, Suspense } from "react";

import CustomCursor from "./components/CustomCursor";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";

const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Scroll Progress Bar
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        (window.scrollY / totalHeight) * 100;

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-orange-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#08111F] text-white overflow-x-hidden">

      {/* Smooth Scroll Wrapper */}
      <SmoothScroll>

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-electric focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Scroll Progress */}
        <ScrollProgressBar />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Animated Background */}
        <Background />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" role="main" aria-label="Main content">

          {/* Hero Section */}
          <Hero />

          <Suspense fallback={null}>
            {/* Services */}
            <Services />

            {/* Portfolio */}
            <Portfolio />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Process */}
            <Process />

            {/* Testimonials */}
            <Testimonials />

            {/* Contact */}
            <Contact />

          </Suspense>

        </main>

        <Suspense fallback={null}>
          {/* Footer */}
          <Footer />
        </Suspense>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918522827847"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with WebGraph AI Studio on WhatsApp — +91 85228 27847"
          className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
          style={{
            background: '#25D366',
            boxShadow: '0 0 20px rgba(37, 211, 102, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(37, 211, 102, 0.4)' }}
          />
          <svg className="relative w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

      </SmoothScroll>

    </div>
  );
}

export default App;