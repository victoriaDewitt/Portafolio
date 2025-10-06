import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
        const size = Math.random() * 30 + 10;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = size > 20 ? 0.2 : 0.4;
        const xMove = Math.random() * 20 - 10;
        const yMove = Math.random() * 20 - 10;
        const duration = Math.random() * 40 + 30;

        // Valores de movimiento del mouse (sutiles)
        const mouseX = useTransform(mousePos.x, [0, window.innerWidth], [-5, 5]);
        const mouseY = useTransform(mousePos.y, [0, window.innerHeight], [-5, 5]);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: 'blur(6px)',
              opacity,
              x: mouseX,
              y: mouseY,
            }}
            animate={{
              x: [0, xMove, 0],
              y: [0, yMove, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror"
            }}
          />
        );
      })}
    </>
  );
}
