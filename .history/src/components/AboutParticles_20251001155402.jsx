// src/components/AboutParticles.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLE_COUNT = 60;

export default function AboutParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      size: Math.random() * 20 + 5,        // Tamaño variable
      x: Math.random() * 100,             // Posición inicial X %
      y: Math.random() * 100,             // Posición inicial Y %
      blur: Math.random() * 8 + 2,        // Difuminado
      opacity: Math.random() * 0.4 + 0.3, // Opacidad inicial
      speed: Math.random() * 10 + 5,      // Velocidad suave
      dirX: (Math.random() - 0.5) * 0.3,  // Dirección aleatoria X
      dirY: (Math.random() - 0.5) * 0.3,  // Dirección aleatoria Y
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-300"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: `blur(${p.blur}px)`,
            opacity: p.opacity,
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
          whileHover={{
            x: [0, p.dirX * p.speed * 3],
            y: [0, p.dirY * p.speed * 3],
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
      ))}
    </>
  );
}
