// src/App.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const conceptItems = [
  { icon: "/icons/think.png", text: { en: "Think", es: "Piensa" } },
  { icon: "/icons/design.png", text: { en: "Design", es: "Diseña" } },
  { icon: "/icons/develop.png", text: { en: "Develop", es: "Desarrolla" } },
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

const projects = [
  {
    title: { en: "Ecommerce TCG Store", es: "Tienda TCG Ecommerce" },
    stack: "Java + Spring Boot + HTML",
    description: {
      en: "Hoenn TCG Store is an interactive e-commerce platform where users can browse, filter, and purchase Pokémon TCG products.",
      es: "Hoenn TCG Store es una plataforma de e-commerce interactiva donde los usuarios pueden explorar, filtrar y comprar productos Pokémon TCG."
    },
    img: "/icons/proyect1.png",
    explore: "https://github.com/victoriaDewitt/eccomerce-tcg.git",
    demo: "https://github.com/victoriadewitt/eccomerce-tcg-demo",
    hasDemo: true
  },
  {
    title: { en: "Amazon Product Availability Bot", es: "Bot de Disponibilidad de Productos en Amazon" },
    stack: "Python",
    description: {
      en: "Python bot that sends an email alert when a product becomes available on Amazon Mexico.",
      es: "Bot en Python que envía un correo cuando un producto está disponible en Amazon México."
    },
    img: "/icons/proyect2.png",
    explore: "https://github.com/victoriaDewitt/bot_amazon",
    hasDemo: false
  },
  {
    title: { en: "Streamline", es: "Streamline" },
    stack: "FlutterFlow + Firebase",
    description: {
      en: "Messaging and task management app combining real-time messaging with collaborative task management features.",
      es: "Aplicación de mensajería y gestión de tareas combinando mensajería en tiempo real con gestión colaborativa de tareas."
    },
    img: "/icons/proyect3.png",
    explore: "https://github.com/victoriaDewitt/streamline",
    hasDemo: false
  }
];

function App() {
  const [lang, setLang] = useState("en"); // Estado de idioma

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
          {/* Nebulas y shooting stars - igual que tu código original */}
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

      {/* About Section */}
      <section id="about" className="relative flex items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 audiowide-regular">
              {lang === "en" ? "About Me" : "Sobre Mí"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300" style={{ fontFamily: "'Quantico', sans-serif" }}>
              {lang === "en"
                ? "I’m a Software Engineer building web and backend apps. I enjoy creating clean, efficient solutions and am always eager to learn new technologies and improve my skills."
                : "Soy Ingeniera de Software desarrollando aplicaciones web y backend. Me gusta crear soluciones limpias y eficientes y siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades."}
            </p>
          </motion.div>
          <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <img src="/icons/vicky.jpg" alt="Victoria Vázquez" className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"/>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular flex items-center justify-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            💡
          </motion.span>
          {lang === "en" ? "My Concept" : "Mi Concepto"}
        </h2>
        <div className="relative max-w-5xl w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800/70 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-center items-center gap-12 z-10">
          <div className="flex flex-col gap-6 items-center">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img src={item.icon} alt={item.text.en} className="w-20 h-20" />
                <span className="text-lg font-semibold text-white">{item.text[lang]}</span>
              </div>
            ))}
          </div>
          <motion.div
            className="w-72 h-72 flex justify-center items-center"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }}
          >
            <img src="/icons/atomo.png" alt="Concept illustration" className="object-contain w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-8 audiowide-regular">
          {lang === "en" ? "Projects" : "Proyectos"}{" "}
          <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-block">🚀</motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((project, i) => (
            <div key={i} className={`bg-gradient-to-r rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden ${i===0?"from-green-500 to-green-700":i===1?"from-pink-700 to-pink-900":"from-indigo-700 to-indigo-900"}`}>
              <img src={project.img} alt={project.title[lang]} className="w-full h-40 object-cover"/>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-quantico font-bold mb-2">{project.title[lang]}</h3>
                  <p className="text-gray-300 mb-2">{project.stack}</p>
                  <p className="text-gray-200">{project.description[lang]}</p>
                </div>
                <div className="mt-4 flex gap-3 justify-center">
                  <a href={project.explore} target="_blank" rel="noopener noreferrer" className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">{lang==="en"?"Explore":"Explorar"}</a>
                  {project.hasDemo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-pink-500 px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition">{lang==="en"?"Demo":"Demo"}</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{lang === "en" ? "Skills" : "Habilidades"} ⚡</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl">
          {skillIcons.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2"/>
              <span className="text-sm text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{lang === "en" ? "Education" : "Educación"} 🎓</h2>
        <ul className="max-w-4xl w-full flex flex-col gap-6">
          <li className="bg-gray-900/70 p-4 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">Ingeniería en Software</h3>
            <p className="text-gray-300">{lang==="en"?"University of Technology, 2021-2025":"Universidad Tecnológica, 2021-2025"}</p>
          </li>
          <li className="bg-gray-900/70 p-4 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">Cursos y Certificaciones</h3>
            <p className="text-gray-300">{lang==="en"?"Cisco NetAcad, Java Spring Boot, React":"Cisco NetAcad, Java Spring Boot, React"}</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8 audiowide-regular">{lang === "en" ? "Contact Me" : "Contáctame"} 📬</h2>
        <p className="text-gray-200 text-center mb-6">{lang === "en" ? "Feel free to reach out via email or LinkedIn!" : "¡Puedes contactarme por correo o LinkedIn!"}</p>
        <div className="flex gap-6">
          <a href="mailto:vicky@example.com" className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">{lang==="en"?"Email":"Correo"}</a>
          <a href="https://linkedin.com/in/victoria" target="_blank" rel="noopener noreferrer" className="bg-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
