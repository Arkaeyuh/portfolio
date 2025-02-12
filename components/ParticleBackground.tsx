// components/ParticleBackground.tsx
'use client'
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground: React.FC = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // This will initialize the tsParticles engine with the slim build,
    // which includes only the features you need and reduces bundle size.
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitialized(true);
    });
  }, []);

  // Memoize your options so they don't get re-created on every render.
  const options = useMemo(() => ({
    fullScreen: {
      enable: true, // Cover the entire screen
      zIndex: 0,    // Ensure the particles stay behind your content
    },
    background: {
      color: {
        value: "#000", // Dark background for a starry effect
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: false, // No connecting lines between particles
      },
      collisions: { enable: false },
      move: {
        enable: true,
        speed: 0.3, // Slow speed for a subtle, distant stars effect
        direction: "none" as const,
        random: true,
        straight: false,
        outModes: { default: "out" as const },
      },
      number: {
        value: 80, // Number of stars
        density: {
          enable: true,
          area: 800, // Controls star density relative to screen area
        },
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
    },
    detectRetina: true,
  }), []);

  if (!initialized) {
    // Optionally, you could render a fallback or loader here
    return null;
  }

  return <Particles id="tsparticles" options={options} />;
};

export default ParticleBackground;
