import { useEffect, useState } from 'react';

const PARTICLE_COUNT = 40;
const COLORS = ['#FF6B9D', '#C084FC', '#60A5FA', '#6EE7B7', '#FBBF24', '#FB923C', '#FF8FB1', '#A855F7'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Confetti({ active }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const ps = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: randomBetween(5, 95),
      color: COLORS[i % COLORS.length],
      size: randomBetween(6, 12),
      delay: randomBetween(0, 0.5),
      duration: randomBetween(1.5, 3),
      wobble: randomBetween(-30, 30),
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }));
    setParticles(ps);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 9999, overflow: 'hidden',
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-10px',
            width: p.shape === 'circle' ? p.size : p.size * 0.7,
            height: p.size,
            background: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
            '--wobble': `${p.wobble}deg`,
          }}
        />
      ))}
    </div>
  );
}
