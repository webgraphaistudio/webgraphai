import React from 'react';

const Background = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-transparent pointer-events-none"
      style={{ contain: 'strict' }}
    >
      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A84FF 1px, transparent 1px),
            linear-gradient(to bottom, #0A84FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          willChange: 'auto',
        }}
      />

      {/* Static radial spotlights (no animation = no constant repaint) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-deepBlue/15"
        style={{ filter: 'blur(120px)', transform: 'translateZ(0)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-electric/10"
        style={{ filter: 'blur(130px)', transform: 'translateZ(0)' }}
      />
      <div
        className="absolute top-[35%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-orangeGold/5"
        style={{ filter: 'blur(140px)', transform: 'translateZ(0)' }}
      />

      {/* Dark Vignette Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(5, 5, 5, 0.75) 100%)'
        }}
      />
    </div>
  );
};

export default Background;
