import React, { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      el.style.setProperty('--rx', `${y}deg`);
      el.style.setProperty('--ry', `${-x}deg`);
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 -z-0 overflow-hidden">
      <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(147,197,253,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0" style={{ perspective: '1000px' }}>
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-3xl" style={{ transform: 'rotateX(var(--rx)) rotateY(var(--ry))' }} />
      </div>
    </div>
  );
}
