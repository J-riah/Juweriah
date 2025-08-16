import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './hero.css';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => { await loadFull(engine); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center"
      style={{ paddingTop: '96px' }}
    >
      <div className="hero-gradient" />

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: '#0D0B10' } },
          fpsLimit: 60,
          particles: {
            number: { value: 55, density: { enable: true, area: 900 } },
            color: { value: ['#C5A572', '#FFFFFF'] },
            shape: { type: ['star', 'circle'] },
            opacity: { value: 0.25, random: { enable: true, minimumValue: 0.08 } },
            size: { value: { min: 1, max: 3 } },
            links: { enable: false },
            move: { enable: true, speed: 0.6, outModes: 'out' },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 90, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4"
      >
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl mb-4" style={{ color: 'var(--text)', fontFamily:'Playfair Display'}}>
            Hi, I’m <span className="text-accent" style={{fontFamily:'Playfair Display'}}>Juweriah</span>
          </h1>

          <p className="text-lg sm:text-xl" style={{ color: 'var(--muted)' }}>
            Welcome to my portfolio.
          </p>

          <div className="mt-2 text-base sm:text-lg" style={{ color: 'var(--text)' }}>
            <p>I love to explore, code, create, learn and grow.</p>
          </div>

          <a href="#projects" className="btn-accent inline-block mt-8">
            View My Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
