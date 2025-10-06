// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "./translations";

const conceptItems = [
  { icon: "/icons/think.png", textKey: 0 },
  { icon: "/icons/design.png", textKey: 1 },
  { icon: "/icons/develop.png", textKey: 2 },
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

const projects = [
  {
    titleKey: 0,
    subtitleKey: 0,
    descriptionKey: 0,
    img: "/icons/proyect1.png",
    github: "https://github.com/victoriaDewitt/eccomerce-tcg.git",
    demo: "https://github.com/victoriadewitt/eccomerce-tcg-demo",
  },
  {
    titleKey: 1,
    subtitleKey: 1,
    descriptionKey: 1,
    img: "/icons/proyect2.png",
    github: "https://github.com/victoriaDewitt/bot_amazon",
    demo: null,
  },
  {
    titleKey: 2,
    subtitleKey: 2,
    descriptionKey: 2,
    img: "/icons/proyect3.png",
    github: "https://github.com/victoriaDewitt/streamline",
    demo: null,
  },
];

const educationItems = [
  { title: "Universidad Tecnológica", degree: "Ingeniería en Software", year: "2018 - 2022" },
  { title: "Cursos Online", degree: "Front-end y Back-end", year: "2023 - 2024" },
];

const name = "VICTORIA";

export default function App() {
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
    <div className="font-sans bg-black text-gray-100 relative overflow-x-hidden">

      {/* Cursor */}
      <div
        id="cursorSphere"
        className="w-40 h-40 rounded-full fixed pointer-events-none z-40 bg-indigo-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800/90 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-100">Victoria Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-300">{t.navbar.about}</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">{t.navbar.projects}</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">{t.navbar.skills}</a></li>
            <li><a href="#education" className="hover:text-indigo-300">{t.navbar.education}</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">{t.navbar.contact}</a></li>
          </ul>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-4 px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[2px] bg-white rounded-full absolute animate-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-70 z-10 pointer-events-none"></div>

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
        <div className="mt-8 flex justify-center relative z-20">
          <a href="/VictoriaCV.pdf" download className="flex items-center gap-2 bg-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#ec4899] hover:bg-pink-600">
            {t.hero.resume} <span className="text-xl">🡇</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative flex items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 audiowide-regular">{t.about.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300" style={{ fontFamily: "'Quantico', sans-serif" }}>
              {t.about.description}
            </p>
          </motion.div>
          <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <img src="/icons/vicky.jpg" alt="Victoria Vázquez" className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover "/>
          </motion.div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular flex items-center justify-center gap-2">
          <motion.span animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="inline-block">💡</motion.span>
          {t.concept.title}
        </h2>
        <div className="relative max-w-5xl w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800/70 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-center items-center gap-12 z-10">
          <div className="flex flex-col gap-6 items-center">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img src={item.icon} alt={t.concept.items[item.textKey].text} className="w-20 h-20" />
                <span className="text-lg font-semibold text-white">{t.concept.items[item.textKey].text}</span>
              </div>
            ))}
          </div>
          <motion.div className="w-72 h-72 flex justify-center items-center" animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ rotateY: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }}>
            <img src="/icons/atomo.png" alt="Concept illustration" className="object-contain w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-8 audiowide-regular">
          {t.projects.title} <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-block">🚀</motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((proj, idx) => (
            <div key={idx} className={`bg-gradient-to-r ${idx===0?'from-green-500 to-green-700': idx===1?'from-pink-700 to-pink-900':'from-indigo-700 to-indigo-900'} rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden`}>
              <img src={proj.img} alt={t.projects.items[proj.titleKey].title} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-quantico font-bold mb-2">{t.projects.items[proj.titleKey].title}</h3>
                  <div className="text-sm text-gray-200 mb-2">{t.projects.items[proj.subtitleKey].subtitle}</div>
                  <p className="text-gray-300">{t.projects.items[proj.descriptionKey].description}</p>
                </div>
                <div className="mt-3 flex gap-3">
                  <a href={proj.github} target="_blank" className="px-3 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition">{t.projects.github}</a>
                  {proj.demo && <a href={proj.demo} target="_blank" className="px-3 py-1 bg-indigo-600 rounded-md hover:bg-indigo-500 transition">{t.projects.demo}</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative flex flex-col items-center justify-center px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.skills.title}</h2>
        <div className="w-full overflow-x-auto py-4">
          <div className="flex gap-8 min-w-max">
            {skillIcons.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-24">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                <span className="text-gray-200 text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative flex flex-col items-center justify-center px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.education.title}</h2>
        <div className="flex flex-col gap-6 max-w-3xl w-full">
          {educationItems.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }} className="bg-gradient-to-r from-indigo-700 via-purple-900 to-pink-700 rounded-xl p-4 shadow-lg">
              <h3 className="text-xl font-bold text-white">{edu.title}</h3>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative flex flex-col items-center justify-center px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{t.contact.title}</h2>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-4 w-full max-w-xl">
          <input type="text" placeholder={t.contact.name} className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder={t.contact.email} className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder={t.contact.message} className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="5"></textarea>
          <button type="submit" className="bg-pink-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-pink-600 transition">Enviar</button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-8 text-center text-gray-300">
        &copy; {new Date().getFullYear()} Victoria Vázquez. {t.footer.rights}
      </footer>
    </div>
  );
}

