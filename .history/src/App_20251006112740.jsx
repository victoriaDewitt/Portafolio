import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const conceptItems = [
  { icon: "/icons/think.png", text: { en: "Think", es: "Piensa" } },
  { icon: "/icons/design.png", text: { en: "Design", es: "Diseña" } },
  { icon: "/icons/develop.png", text: { en: "Develop", es: "Desarrolla" } },
];

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
  const [lang, setLang] = useState("en");

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
      <div
        id="cursorSphere"
        className="w-40 h-40 rounded-full fixed pointer-events-none z-40 bg-indigo-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

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
          <button
            onClick={toggleLanguage}
            className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
      </header>

      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          {lang === "en" ? "Hello, I'm Victoria" : "Hola, soy Victoria"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300"
        >
          {lang === "en"
            ? "Software Engineer focused on interactive experiences."
            : "Ingeniera de Software enfocada en experiencias interactivas."}
        </motion.p>
      </section>

      <section id="about" className="relative flex items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6">
            {lang === "en" ? "About Me" : "Sobre Mí"}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {lang === "en"
              ? "I’m a passionate Software Engineer who loves creating digital experiences that combine design and logic. My goal is to build interactive and intuitive applications that tell stories."
              : "Soy una Ingeniera de Software apasionada por crear experiencias digitales que combinan diseño y lógica. Mi objetivo es construir aplicaciones interactivas e intuitivas que cuenten historias."}
          </p>
        </div>
      </section>

      <section id="concept" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {conceptItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={item.icon} alt={item.text[lang]} className="w-20 h-20 mb-4" />
              <p className="text-xl font-semibold text-gray-200">{item.text[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative flex flex-col items-center justify-center px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          {lang === "en" ? "Projects" : "Proyectos"} 🚀
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={project.img} alt={project.title[lang]} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title[lang]}</h3>
                <p className="text-gray-300 mb-2">{project.stack}</p>
                <p className="text-gray-200 mb-4">{project.description[lang]}</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={project.explore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    {lang === "en" ? "Explore" : "Explorar"}
                  </a>
                  {project.hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          {lang === "en" ? "Skills" : "Habilidades"} ⚡
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/icons/java.png" alt="Java" className="w-16 h-16" />
          <img src="/icons/react.png" alt="React" className="w-16 h-16" />
          <img src="/icons/js.png" alt="JavaScript" className="w-16 h-16" />
          <img src="/icons/html.png" alt="HTML" className="w-16 h-16" />
          <img src="/icons/css.png" alt="CSS" className="w-16 h-16" />
          <img src="/icons/mysql.png" alt="MySQL" className="w-16 h-16" />
        </div>
      </section>

      <section id="education" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          {lang === "en" ? "Education" : "Educación"} 🎓
        </h2>
        <ul className="max-w-4xl w-full flex flex-col gap-6">
          <li className="bg-gray-900/70 p-4 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">{lang === "en" ? "Software Engineering" : "Ingeniería en Software"}</h3>
            <p className="text-gray-300">{lang === "en" ? "Technological University, 2021-2025" : "Universidad Tecnológica, 2021-2025"}</p>
          </li>
          <li className="bg-gray-900/70 p-4 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl">{lang === "en" ? "Courses & Certifications" : "Cursos y Certificaciones"}</h3>
            <p className="text-gray-300">{lang === "en" ? "Cisco NetAcad, Java Spring Boot, React" : "Cisco NetAcad, Java Spring Boot, React"}</p>
          </li>
        </ul>
      </section>

      <section id="contact" className="relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-8">
          {lang === "en" ? "Contact Me" : "Contáctame"} 📬
        </h2>
        <p className="text-gray-200 text-center mb-6">
          {lang === "en"
            ? "Feel free to reach out via email or LinkedIn!"
            : "¡Puedes contactarme por correo o LinkedIn!"}
        </p>
        <div className="flex gap-6">
          <a href="mailto:vicky@example.com" className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            {lang === "en" ? "Email" : "Correo"}
          </a>
          <a href="https://linkedin.com/in/victoria" target="_blank" rel="noopener noreferrer" className="bg-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
