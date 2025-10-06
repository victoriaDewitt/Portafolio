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
      {[...Array(60)].map((_, i) => {
        const isLarge = Math.random() < 0.4; // 40% grandes, 60% pequeñas
        const size = isLarge ? Math.random() * 40 + 20 : Math.random() * 10 + 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = isLarge ? 0.15 : 0.45;
        const blur = isLarge ? 10 : 3;
        const xMove = Math.random() * 15 - 7.5;
        const yMove = Math.random() * 15 - 7.5;
        const duration = isLarge ? Math.random() * 40 + 50 : Math.random() * 20 + 25;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              filter: `blur(${blur}px)`,
              opacity,
            }}
            animate={{
              x: [
                0,
                xMove + (mousePos.x / window.innerWidth) * (isLarge ? 3 : 6),
                0,
              ],
              y: [
                0,
                yMove + (mousePos.y / window.innerHeight) * (isLarge ? 3 : 6),
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
