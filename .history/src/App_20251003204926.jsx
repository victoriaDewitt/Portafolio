// src/App.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const conceptItems = [
  { icon: "/icons/think.png", text: "Think" },
  { icon: "/icons/design.png", text: "Design" },
  { icon: "/icons/develop.png", text: "Develop" },
];

const skillIcons = [
  { icon: "/icons/java.svg", name: "Java" },
  { icon: "/icons/cpp.svg", name: "C++" },
  { icon: "/icons/python.svg", name: "Python" },
  { icon: "/icons/html.svg", name: "HTML" },
  { icon: "/icons/react.svg", name: "React" },
  { icon: "/icons/javascript.svg", name: "JavaScript" },
  { icon: "/icons/mysql.svg", name: "MySQL" },
  { icon: "/icons/firebase.svg", name: "Firebase" },
  { icon: "/icons/vscode.svg", name: "VSCode" },
  { icon: "/icons/github.svg", name: "GitHub" },
  { icon: "/icons/netbeans.svg", name: "NetBeans" },
];

const name = "VICTORIA";

function App() {
  const [lang, setLang] = useState("en"); // estado de idioma

  useEffect(() => {
    const cursor = document.getElementById("cursorSphere");
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  const toggleLanguage = () => setLang(lang === "en" ? "es" : "en");

  return (
    <div className="font-sans bg-black text-gray-100 relative">

      {/* Cursor esférico */}
      <div
        id="cursorSphere"
        className="w-40 h-40 rounded-full fixed pointer-events-none z-40 bg-indigo-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800/90">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-100">Victoria Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-300">{lang === "en" ? "About" : "Acerca"}</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">{lang === "en" ? "Projects" : "Proyectos"}</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">{lang === "en" ? "Skills" : "Habilidades"}</a></li>
            <li><a href="#education" className="hover:text-indigo-300">{lang === "en" ? "Education" : "Educación"}</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">{lang === "en" ? "Contact" : "Contacto"}</a></li>
          </ul>
          {/* Botón de idioma */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* Nebulosas y estrellas */}
        <div className="absolute inset-0 z-0">
          {/* Nebulosas */}
          <div className="absolute w-[220%] h-[220%] rounded-full blur-[400px] animate-nebulaMove" style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(20,40,120,0.6), rgba(0,0,30,0.1) 80%)',
            opacity: 0.5,
            mixBlendMode: 'screen'
          }} />
          <div className="absolute w-[200%] h-[200%] rounded-full blur-[350px] animate-nebulaMove2" style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(150,20,90,0.5), rgba(0,0,20,0.05) 75%)',
            opacity: 0.45,
            mixBlendMode: 'screen'
          }} />
          <div className="absolute w-[240%] h-[240%] rounded-full blur-[380px] animate-nebulaMove3" style={{
            background: 'radial-gradient(circle at 50% 70%, rgba(0,100,160,0.45), rgba(0,0,10,0.05) 70%)',
            opacity: 0.4,
            mixBlendMode: 'screen'
          }} />

          {/* Estrellas */}
          {[...Array(800)].map((_, i) => {
            const size = Math.random() * 2.5 + 0.5;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 4 + 2;
            const color = ["#ffffff","#c0c0ff","#a0ffff","#80d8ff","#ffd700"][Math.floor(Math.random()*5)];
            return (
              <motion.span
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, backgroundColor: color }}
                animate={{ opacity: [0.05, 1, 0.05] }}
                transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}

          {/* Shooting stars */}
          {[...Array(50)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 60;
            const duration = Math.random() * 1.5 + 0.8;
            const delay = Math.random() * 8;
            return (
              <motion.span
                key={`shooting-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: "4px",
                  height: "4px",
                  background: "radial-gradient(circle, #fff, #80d8ff, transparent)",
                  boxShadow: "0 0 6px #fff, 0 0 20px #80d8ff",
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ x: -400, y: 250, opacity: [0, 1, 0] }}
                transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
              />
            );
          })}
        </div>

        {/* Fondo oscuro encima (semi transparente) */}
        <div className="absolute inset-0 bg-black opacity-70 z-10 pointer-events-none"></div>

        {/* Texto y Botón */}
        <h1 className="relative z-20 text-7xl md:text-9xl lg:text-[10rem] font-extrabold uppercase tracking-wide text-center select-none">
          <span className="font-medium text-white/70">
            {lang === "en" ? "Hi, I'm " : "Hola, soy "}
          </span>
          <span style={{ fontFamily: "'Quantico', sans-serif" }} className="quantum-text">
            {name.split("").map((letter, i) => (
              <span
                key={i}
                className="text-neon-blue startup"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Botón de descarga de CV con efecto neon */}
        <div className="mt-8 flex justify-center relative z-20">
          <a 
            href={lang === "en" ? "/VictoriaCV.pdf" : "/VictoriaCV_ES.pdf"} 
            download
            className="flex items-center gap-2 bg-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#ec4899] hover:bg-pink-600"
          >
            {lang === "en" ? "Resume" : "Currículum"} <span className="text-xl">🡇</span>
          </a>
        </div>

      </section>

      {/* ...el resto del código sigue igual, solo ajustando textos según `lang` */}
      {/* Por ejemplo: About, Projects, Skills, Education, Contact */}
      {/* Solo necesitas envolver los textos con condiciones ternarias basadas en `lang` */}

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
