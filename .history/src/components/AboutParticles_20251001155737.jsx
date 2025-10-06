import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 30 + 10; // Tamaño
        const left = Math.random() * 100;     // Posición horizontal
        const top = Math.random() * 100;      // Posición vertical
        const opacity = size > 20 ? 0.25 : 0.45;
        const xMove = Math.random() * 20 - 10;
        const yMove = Math.random() * 20 - 10;
        const duration = Math.random() * 40 + 30; // Animación lenta

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: "blur(6px)",
              opacity,
            }}
            animate={{
              x: [
                0,
                xMove + (mousePos.x / window.innerWidth) * 2, // Sutil influencia del mouse
                0,
              ],
              y: [
                0,
                yMove + (mousePos.y / window.innerHeight) * 2, // Sutil influencia
                0,
              ],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        );
      })}
    </>
  );
}
