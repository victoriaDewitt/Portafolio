import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 30 + 10;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = size > 20 ? 0.2 : 0.4; // más brillantes
        const xMove = Math.random() * 20 - 10;
        const yMove = Math.random() * 20 - 10;
        const duration = Math.random() * 20 + 15;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: 'blur(6px)', // difuminadas
              opacity,
            }}
            animate={{
              x: [0, xMove + (mousePos.x / window.innerWidth) * 20, 0],
              y: [0, yMove + (mousePos.y / window.innerHeight) * 20, 0],
            }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          />
        );
      })}
    </>
  );
}
