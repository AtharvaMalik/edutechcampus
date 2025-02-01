// components/ParticlesBackground.tsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (<div>
    <Particles className=' '
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'links',
        background: {
            // opacity:5,
            color:'transparent',
            
          
        },
        particles: {
          color: {
            value: '#ffffff', // Set your desired particle color
          },
          links: {
            color: '#ffffff', // Set your desired link color
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 5,
          },
          number: {
            density: {
              enable: true,
              area: 545,
            },
            value: 80,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: 'square',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
      
    /></div>
  );
};

export default ParticlesBackground;