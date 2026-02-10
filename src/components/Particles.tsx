import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useScroll } from "framer-motion";

const ParticleBlast = () => {
  const [init, setInit] = useState(false);
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 to 1) to particle speed and spread
  // As you scroll, the "blast" intensity increases


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" },
    particles: {
      color: { value: "#ffb7c5" }, // Matching your floral theme
      number: { value: 150 },
      opacity: {
        value: 0.6,
        animation: { enable: true, speed: 1, minimumValue: 0.1 }
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        direction: "none" as const,
        outModes: "out" as const,
        random: true,
        speed: 0.6,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
      },
    },
  }), []);

  if (!init) return null;

  return (
    <div className="particle-container">
      <Particles id="tsparticles" options={options} />

      {/* Visual center "Lump" that fades out */}
      <div
        className="particle-core"
        style={{
          opacity: 1 - scrollYProgress.get() * 2,
          transform: `scale(${1 + scrollYProgress.get() * 5})`
        }}
      />
    </div>
  );
};

export default ParticleBlast;