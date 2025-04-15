'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function SmokeParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="smokeParticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#444444",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "left",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
      style={{
        position: 'absolute',
        width: '20%',
        height: '100%',
        right: '85%',
        pointerEvents: 'none',
      }}
    />
  );
} 