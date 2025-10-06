import { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
    <div className="font-sans bg-gray-900 text-gray-100 relative">

      {/* Cursor esférico */}
      <div
        id="cursorSphere"
        className="w-40 h-40 rounded-full fixed pointer-events-none z-40 bg-indigo-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navbar */}
      <header className="fixed w-full bg-gray-800/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-400">Victoria Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">Skills</a></li>
            <li><a href="#education" className="hover:text-indigo-300">Education</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-purple-900 to-black text-white overflow-hidden">

        {/* Estrellitas de fondo */}
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 6 + 4;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;
          return (
            <motion.span
              key={i}
              className="absolute bg-white rounded-full"
              style={{ width: size, height: size, left: `${left}%`, top: `-${size}px` }}
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            />
          );
        })}

        {/* Nombre con efecto neón */}
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wide text-center select-none mt-6">
          Hi, I'm{" "}
          <span className="relative inline-block cursor-pointer group">
            {name.split("").map((letter, i) => (
              <span key={i} className="relative inline-block overflow-hidden">
                {/* Letra base */}
                <span className="relative z-10 text-white">{letter}</span>

                {/* Barra que recorre las letras */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-400/70 via-cyan-400/70 to-purple-400/70 mix-blend-lighten"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeInOut" }}
                />

                {/* Texto neón que se activa con la barra */}
                <span className="absolute inset-0 text-neon opacity-0 group-hover:opacity-100 z-20">
                  {letter}
                </span>
              </span>
            ))}
          </span>

        </h1>

        {/* Neon style */}
        <style jsx>{`
          .text-neon {
            color: #0ff;
            text-shadow:
              0 0 5px #0ff,
              0 0 10px #0ff,
              0 0 20px #0ff,
              0 0 40px #0ff,
              0 0 60px #0ff;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m a software engineer passionate about creating engaging and interactive web applications.
          My journey feels like a storytelling adventure where each project adds a new chapter.
        </p>
      </section>

      {/* Concept Section */}
      <section id="concept" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">My Concept</h2>
        <div className="bg-black rounded-2xl p-10 shadow-lg flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex flex-col gap-6 items-center">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img src={item.icon} alt={item.text} className="w-20 h-20" />
                <span className="text-lg font-semibold text-white">{item.text}</span>
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
      <section id="projects" className="bg-black-900 py-20 px-6 text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Project cards go here */}
          </div>

          {/* Skills Band */}
          <div className="mt-16 overflow-hidden relative">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {skillIcons.concat(skillIcons).map((skill, idx) => (
                <div key={idx} className="inline-block relative group">
                  <img src={skill.icon} alt={skill.name} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
                  <span className="absolute bottom-full mb-2 px-2 py-1 text-sm rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Education</h2>
        <div className="flex flex-col items-center gap-12">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 bg-black rounded-2xl p-8 shadow-lg w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <img src="/icons/uvm.png" alt="Universidad Del Valle de México" className="w-32 h-32 object-contain rounded-lg" />
            <div>
              <h3 className="text-2xl font-bold text-white">Universidad Del Valle de México</h3>
              <p className="text-white text-lg mt-2">Bachelor’s Degree in Software Engineering (2021 - 2025)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a
            href="mailto:tuemail@example.com"
            className="px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>

    </div>
  );
}

export default App;
