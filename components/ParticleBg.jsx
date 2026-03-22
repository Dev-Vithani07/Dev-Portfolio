'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: {
          color: { value: 'transparent' },
        },

        fullScreen: { enable: false },
        fpsLimit: 60,

        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 900 },
          },

          color: {
            value: ['#7F77DD', '#5DCAA5', '#85B7EB', '#ffffff'],
          },

          shape: { type: 'circle' },

          opacity: {
            value: { min: 0.05, max: 0.55 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },

          size: {
            value: { min: 0.5, max: 2.2 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },

          links: {
            enable: true,
            distance: 130,
            color: '#7F77DD',
            opacity: 0.07,
            width: 1,
          },
        },

        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 160,
              links: { opacity: 0.3 },
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 120,
              duration: 0.4,
            },
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.8,
            },
          },
        },

        detectRetina: true,
      }}
    />
  )
}