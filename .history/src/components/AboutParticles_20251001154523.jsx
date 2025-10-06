// src/components/AboutParticles.jsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const NUM_PARTICLES = 100;

const generateParticles = () => {
  return [...Array(NUM_PARTICLES)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 5, // más grandes y pequeñas
    blur: Math.random() * 8 + 2,  // difuminadas
    opacity: Math.random() * 0.8 + 0.2,
    color: ["#ffffff","#c0c0ff","#a0ffff","#ffa0ff","#ffddaa"][Math.floor(Math.random()*5)],
    dirX: Math.random() < 0.5 ? -1 : 1,
    dirY: Math.random() < 0.5 ? -1 : 1,
    speed: Math.random() * 0.5 + 0.2,
  }));
};

export default function AboutParticles() {
  const particles = generateParticles();

  // MotionValues para el desplazamiento del mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring para suavizar el movimiento
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convertimos posición del mouse en porcentaje relativo a la ventana
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 50);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
            x: springX.to((val) => val * p.dirX * p.speed),
            y: springY.to((val) => val * p.dirY * p.speed),
          }}
        />
      ))}
    </>
  );
}
