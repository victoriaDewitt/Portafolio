// src/components/AboutParticles.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLE_COUNT = 80;

export default function AboutParticles() {
  const [particles, setParticles] = useState([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Crear partículas aleatorias
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      size: Math.random() * 20 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      blur: Math.random() * 6 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 8 + 4,
      dirX: (Math.random() - 0.5) * 0.2,
      dirY: (Math.random() - 0.5) * 0.2,
      color: ["#4b0082","#8b006b","#004466","#00bbf9","#ffa0ff"][Math.floor(Math.random()*5)],
    }));
    setParticles(newParticles);

    // Mouse tracking
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
  key={i}
  className="absolute rounded-full"
  style={{
    width: p.size,
    height: p.size,
    left: `${p.x}%`,
    top: `${p.y}%`,
    filter: `blur(${p.blur}px)`,
    opacity: p.opacity,
    backgroundColor: p.color,
    x: springX,
    y: springY,
  }}
  animate={{
    x: [0, p.dirX * p.speed, 0],
    y: [0, p.dirY * p.speed, 0],
    opacity: [p.opacity * 0.7, p.opacity, p.opacity * 0.7],
  }}
  transition={{
    repeat: Infinity,
    repeatType: "mirror",
    duration: Math.random() * 4 + 4,
    ease: "easeInOut",
  }}
/>

      ))}
    </>
  );
}

