import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";

/**
 * Container-based tsParticles background.
 * Must be placed inside a parent with: position: relative; and a real height.
 */
export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
    })
      .then(() => setReady(true))
      .catch((err) => console.error("tsParticles init failed:", err));
  }, []);

  const options = useMemo(
    () => ({
      // ✅ MUST be false for container mode
      fullScreen: { enable: false },

      fpsLimit: 240,
      detectRetina: true,
      background: { color: { value: "transparent" } },

      particles: {
        number: { value: 0 }, // emitter-only
        color: { value: ["#ec4899", "#3b82f6"] },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: isMobile ? 0.5 : 0.25,
            minimumValue: 0,
            sync: false,
          },
        },
        life: {
          duration: { value: isMobile ? 2 : 3 },
          count: 1,
        },
        size: { value: { min: 0.5, max: 2 } },
        move: {
          enable: true,
          speed: { min: 1.2, max: 3 },
          direction: "out",
          outModes: { default: "out" },
        },
        links: { enable: false },
      },

      emitters: {
        // ✅ center of the container
        position: { x: 50, y: 50 },
        rate: { quantity: 24, delay: 0.4 },
        size: { width: 0, height: 0 },
      },
    }),
    [isMobile],
  );

  if (!ready) return null;

  return (
    <Particles
      id="rb-particles"
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
