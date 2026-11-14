import type { CSSProperties } from 'react';

interface ParticleSpec {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  tone: 'sky' | 'white' | 'red';
}

const PARTICLES: ParticleSpec[] = [
  { id: 1, left: '8%', top: '18%', size: 4, duration: '7.5s', delay: '0s', tone: 'white' },
  { id: 2, left: '16%', top: '62%', size: 5, duration: '8.2s', delay: '1.1s', tone: 'sky' },
  { id: 3, left: '28%', top: '26%', size: 3, duration: '6.4s', delay: '0.6s', tone: 'white' },
  { id: 4, left: '44%', top: '14%', size: 4, duration: '9s', delay: '2.2s', tone: 'sky' },
  { id: 5, left: '56%', top: '76%', size: 5, duration: '7.8s', delay: '0.4s', tone: 'white' },
  { id: 6, left: '68%', top: '22%', size: 6, duration: '8.5s', delay: '1.6s', tone: 'sky' },
  { id: 7, left: '78%', top: '54%', size: 4, duration: '6.9s', delay: '0.9s', tone: 'white' },
  { id: 8, left: '88%', top: '30%', size: 5, duration: '7.2s', delay: '2.5s', tone: 'sky' },
  { id: 9, left: '92%', top: '70%', size: 4, duration: '8.1s', delay: '1.3s', tone: 'red' },
  { id: 10, left: '36%', top: '78%', size: 4, duration: '7.4s', delay: '1.9s', tone: 'sky' },
];

export function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PARTICLES.map((particle) => {
        const bgClass =
          particle.tone === 'sky'
            ? 'bg-sky-300/75 shadow-[0_0_12px_rgba(56,189,248,0.65)]'
            : particle.tone === 'red'
              ? 'bg-rose-300/60 shadow-[0_0_10px_rgba(251,113,133,0.45)]'
              : 'bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.6)]';

        const style = {
          left: particle.left,
          top: particle.top,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          '--duration': particle.duration,
          '--delay': particle.delay,
        } as CSSProperties;

        return (
          <span
            key={particle.id}
            style={style}
            className={`animate-particle absolute rounded-full ${bgClass}`}
          />
        );
      })}
    </div>
  );
}
