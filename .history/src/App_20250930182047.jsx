import { useEffect } from "react";
import { motion } from "framer-motion";

function App() {
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

  // Cursor interactivo
 useEffect(() => {
  const cursor = document.getElementById("cursorSphere");

  const moveCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  document.addEventListener("mousemove", moveCursor);

  return () => {
    document.removeEventListener("mousemove", moveCursor);
  };
}, []);



  return (
    <div className="font-sans bg-gray-900 text-gray-100 relative">

 {/* Esfera de fondo */}
<div
  id="cursorSphere"
  className="w-40 h-40 rounded-full fixed pointer-events-none z-40 bg-indigo-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
></div>



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

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-purple-900 to-black text-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center"
        >
          Victoria Vazquez <br /> Software Engineering 🚀
        </motion.h2>
        <p className="mt-6 text-lg max-w-xl text-center">
          Hi, I’m Victoria. I love building apps, solving problems,
          and exploring new technologies to craft unique digital journeys.
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition hoverable"
        >
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m a software engineer passionate about creating engaging 
          and interactive web applications. My journey feels like a 
          storytelling adventure where each project adds a new chapter.
        </p>
      </section>

      {/* My Concept */}
      <section id="concept" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10">My Concept</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="flex flex-col gap-6">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.icon} alt={item.text} className="w-20 h-20" />
                <span className="text-lg font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Animated Atomo */}
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

      {/* Projects */}
      <section id="projects" className="bg-gray-900 py-20 px-6 text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Repeat your project cards here */}
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

      {/* Education */}
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

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a
            href="mailto:tuemail@example.com"
            className="px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition hoverable"
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
