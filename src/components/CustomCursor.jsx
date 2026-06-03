import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Resize canvas to fill viewport
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Trail points store recent mouse positions
    const points = [];
    const MAX_POINTS = 28;
    let hue = 190;

    const onMouseMove = (e) => {
      lastMoveTime = performance.now();
      points.push({ x: e.clientX, y: e.clientY });
      if (points.length > MAX_POINTS) points.shift();
    };
    window.addEventListener('mousemove', onMouseMove);

    let rafId;
    let lastMoveTime = 0;
    const IDLE_TIMEOUT = 150;

    const draw = () => {
      const now = performance.now();
      const isIdle = now - lastMoveTime > IDLE_TIMEOUT;

      if (isIdle && points.length === 0) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      // Fade the canvas each frame for trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length > 1) {
        // Slowly cycle hue
        hue = (hue + 1.2) % 360;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          // Smooth curve through points
          const prev = points[i - 1];
          const curr = points[i];
          const mx = (prev.x + curr.x) / 2;
          const my = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);

          // Thickness & opacity taper toward the head (newer = thicker & brighter)
          const progress = i / points.length;          // 0 = tail, 1 = head
          const lineWidth = progress * 2.5;
          const alpha     = progress;

          ctx.lineWidth   = lineWidth;
          ctx.strokeStyle = `hsla(${(hue + i * 4) % 360}, 100%, 65%, ${alpha})`;
          ctx.shadowColor = `hsl(${(hue + i * 4) % 360}, 100%, 65%)`;
          ctx.shadowBlur  = 10 + progress * 14;

          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(mx, my);
        }
      }

      // Drop old points over time so trail fades when idle
      if (isIdle && points.length > 0) {
        points.shift();
      }

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden lg:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    />
  );
};

export default CustomCursor;
