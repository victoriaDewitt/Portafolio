// src/components/AboutParticles.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const AboutParticles = () => {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const totalParticles = 200;
    const newParticles = Array.from({ length: totalParticles }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.2 ? Math.random() * 60 + 20 : Math.random() * 8 + 2,
      opacity: Math.random() * 0.3 + 0.3,
      speed: Math.random() * 0.02 + 0.005,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          const dx = (mouseX.get() / window.innerWidth - 0.5) * p.speed * 50;
          const dy = (mouseY.get() / window.innerHeight - 0.5) * p.speed * 50;
          let newX = p.x + dx;
          let newY = p.y + dy;

          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;

          return { ...p, x: newX, y: newY };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/50"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            filter: p.size > 15 ? "blur(12px)" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default AboutParticles;
