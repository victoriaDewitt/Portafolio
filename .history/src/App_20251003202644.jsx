// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations";

const conceptItems = [
  { icon: "/icons/think.png", key: 0 },
  { icon: "/icons/design.png", key: 1 },
  { icon: "/icons/develop.png", key: 2 },
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
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  useEffect(() => {
    const cursor = document.getElementById("cursorSphere");
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

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
            <li><a href="#about" className="hover:text-indigo-300">{t.navbar.about}</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">{t.navbar.projects}</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">{t.navbar.skills}</a></li>
            <li><a href="#education" className="hover:text-indigo-300">{t.navbar.education}</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">{t.navbar.contact}</a></li>
          </ul>

          {/* Botón switch idioma */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-4 px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Nebulosas y estrellas */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[220%] h-[220%] rounded-full blur-[400px] animate-nebulaMove"
            style={{ background: 'radial-gradient(circle at 30% 40%, rgba(20,40,120,0.6), rgba(0,0,30,0.1) 80%)', opacity: 0.5, mixBlendMode: 'screen' }} />
          <div className="absolute w-[200%] h-[200%] rounded-full blur-[350px] animate-nebulaMove2"
            style={{ background: 'radial-gradient(circle at 70% 50%, rgba(150,20,90,0.5), rgba(0,0,20,0.05) 75%)', opacity: 0.45, mixBlendMode: 'screen' }} />
          <div className="absolute w-[240%] h-[240%] rounded-full blur-[380px] animate-nebulaMove3"
            style={{ background: 'radial-gradient(circle at 50% 70%, rgba(0,100,160,0.45), rgba(0,0,10,0.05) 70%)', opacity: 0.4, mixBlendMode: 'screen' }} />
        </div>

        {/* Fondo oscuro encima (semi transparente) */}
        <div className="absolute inset-0 bg-black opacity-70 z-10 pointer-events-none"></div>

        {/* Texto */}
        <h1 className="relative z-20 text-7xl md:text-9xl lg:text-[10rem] font-extrabold uppercase tracking-wide text-center select-none">
          <span className="font-medium text-white/70">{t.hero.hi} </span>
          <span style={{ fontFamily: "'Quantico', sans-serif" }} className="quantum-text">
            {name.split("").map((letter, i) => (
              <span key={i} className="text-neon-blue startup" style={{ animationDelay: `${i * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Botón de descarga CV */}
        <div className="mt-8 flex justify-center relative z-20">
          <a 
            href="/VictoriaCV.pdf" 
            download
            className="flex items-center gap-2 bg-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#ec4899] hover:bg-pink-600"
          >
            {t.hero.resume} <span className="text-xl">🡇</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative flex items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 audiowide-regular">{t.about.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300" style={{ fontFamily: "'Quantico', sans-serif" }}>{t.about.description}</p>
          </motion.div>
          <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <img src="/icons/vicky.jpg" alt="Victoria Vázquez" className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"/>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular flex items-center justify-center gap-2">
          <motion.span animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="inline-block">💡</motion.span>
          {t.concept.title}
        </h2>
        <div className="relative max-w-5xl w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800/70 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-center items-center gap-12 z-10">
          <div className="flex flex-col gap-6 items-center">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img src={item.icon} alt={t.concept.items[index]} className="w-20 h-20" />
                <span className="text-lg font-semibold text-white">{t.concept.items[index]}</span>
              </div>
            ))}
          </div>
          <motion.div className="w-72 h-72 flex justify-center items-center" animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ rotateY: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }}>
            <img src="/icons/atomo.png" alt="Concept illustration" className="object-contain w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-8 audiowide-regular">{t.projects.title} <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-block">🚀</motion.span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {/* Project 1 */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
            <img src="/icons/proyect1.png" alt={t.projects.project1.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-quantico font-bold mb-2">{t.projects.project1.name}</h3>
                <div className="text-sm text-gray-200 mb-2">{t.projects.project1.tech}</div>
                <p className="text-gray-200 text-sm leading-relaxed font-quantico">{t.projects.project1.description}</p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <a href="https://github.com/victoriaDewitt/eccomerce-tcg.git" target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-quantico font-semibold">{t.projects.project1.explore}</button>
                </a>
                <a href="https://github.com/victoriadewitt/eccomerce-tcg-demo" target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-quantico font-semibold">{t.projects.project1.demo}</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-r from-pink-700 to-pink-900 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
            <img src="/icons/proyect2.png" alt={t.projects.project2.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-quantico font-bold mb-2">{t.projects.project2.name}</h3>
                <div className="text-sm text-gray-200 mb-2">{t.projects.project2.tech}</div>
                <p className="text-gray-200 text-sm leading-relaxed font-quantico">{t.projects.project2.description}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="https://github.com/victoriaDewitt/bot_amazon" target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-quantico font-semibold">{t.projects.project2.explore}</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
            <img src="/icons/proyect3.png" alt={t.projects.project3.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-quantico font-bold mb-2">{t.projects.project3.name}</h3>
                <div className="text-sm text-gray-200 mb-2">{t.projects.project3.tech}</div>
                <p className="text-gray-200 text-sm leading-relaxed font-quantico">{t.projects.project3.description}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="https://github.com/victoriaDewitt/streamline" target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-quantico font-semibold">{t.projects.project3.explore}</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.skills.title}</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center max-w-5xl">
          {skillIcons.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-2 p-2 hover:scale-110 transition-transform"
              whileHover={{ y: -5 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
              <span className="text-sm md:text-base text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.education.title}</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
          {t.education.items.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 rounded-2xl p-6 shadow-lg flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
              <p className="text-gray-200 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.contact.title}</h2>
        <p className="text-gray-200 text-center mb-6 max-w-3xl">{t.contact.description}</p>
        <a href="mailto:vicky@example.com" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition transform hover:scale-105">{t.contact.button}</a>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900/90 text-gray-200 text-sm py-6 flex flex-col md:flex-row justify-between items-center px-6">
        <span>© {new Date().getFullYear()} Victoria Vázquez. {t.footer.rights}</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/victoriaDewitt" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/victoriaVazquez" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://twitter.com/victoriaDev" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
        </div>
      </footer>

    </div>
  );
}

export default App;

