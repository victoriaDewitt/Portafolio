// src/App.jsx
import { useEffect } from "react";
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
      <header className="fixed w-full bg-black/80 backdrop-blur-md shadow-sm z-50">
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
<section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
  {/* Fondo negro semitransparente */}
  <div className="absolute inset-0 bg-black" style={{ opacity: 0.85 }}></div>

  {/* Capas de nebulosa */}
  <div className="absolute inset-0">
    <div className="absolute w-[220%] h-[220%] rounded-full blur-[350px] animate-nebulaMove" style={{
      background: 'radial-gradient(circle at 30% 40%, #0a2342, transparent 70%)',
      opacity: 0.7,
      mixBlendMode: 'screen'
    }} />
    <div className="absolute w-[200%] h-[200%] rounded-full blur-[300px] animate-nebulaMove2" style={{
      background: 'radial-gradient(circle at 70% 50%, #1e88e5, transparent 65%)',
      opacity: 0.65,
      mixBlendMode: 'screen'
    }} />
    <div className="absolute w-[240%] h-[240%] rounded-full blur-[280px] animate-nebulaMove3" style={{
      background: 'radial-gradient(circle at 50% 70%, #009688, transparent 70%)',
      opacity: 0.45,
      mixBlendMode: 'screen'
    }} />
  </div>

  {/* Estrellas normales */}
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

  {/* Estrellas fugaces */}
  {[...Array(10)].map((_, i) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 50; 
    const duration = Math.random() * 2 + 1; 
    const delay = Math.random() * 10; 

    return (
      <motion.span
        key={`shooting-${i}`}
        className="absolute h-[2px] w-[80px] bg-white rounded-full opacity-80"
        style={{
          left: `${startX}%`,
          top: `${startY}%`,
          transform: "rotate(-20deg)",
          boxShadow: "0 0 6px #fff, 0 0 15px #80d8ff"
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: -300, y: 200, opacity: [0, 1, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      />
    );
  })}

  {/* Nombre con efecto neon */}
  <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wide text-center select-none">
    Hi, I'm{" "}
    <span>
      {name.split("").map((letter, i) => (
        <span
          key={i}
          className="text-neon startup"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </span>
  </h1>
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
          <motion.div className="w-72 h-72 flex justify-center items-center"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }}>
            <img src="/icons/atomo.png" alt="Concept illustration" className="object-contain w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black py-20 px-6 text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

            {/* Project 1 */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
              <img src="/icons/proyect1.png" alt="Ecommerce TCG Store" className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Eccomerce-tcg Store</h3>
                  <div className="text-sm text-gray-200 mb-2">Java + Spring Boot + HTML</div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Hoenn TCG Store is an interactive e-commerce platform where users can
                    browse, filter, and purchase Pokémon TCG products. It features a dynamic
                    shopping cart, user authentication, and product management by category
                    and expansion.
                  </p>
                </div>
                <a href="https://victoriadewitt.github.io/eccomerce-tcg-demo/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">Explore</button>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
              <img src="/icons/proyect2.png" alt="Amazon Product Bot" className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Amazon Product Availability Bot</h3>
                  <div className="text-sm text-gray-200 mb-2">Python</div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Python bot that sends an email alert when a product becomes available on
                    Amazon Mexico. Ideal for automating product monitoring and receiving
                    real-time notifications about restocks.
                  </p>
                </div>
                <a href="https://github.com/victoriaDewitt/bot_amazon" target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">Explore</button>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
              <img src="/icons/proyect3.png" alt="Streamline App" className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Streamline</h3>
                  <div className="text-sm text-gray-200 mb-2">
                    Messaging and task management app with FlutterFlow and Firebase
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    FlutterFlow + Firebase project that combines real-time messaging with
                    collaborative task management features.
                  </p>
                </div>
                <a href="https://github.com/victoriaDewitt/streamline" target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold">Explore</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Band */}
      <div className="relative w-full overflow-hidden bg-black py-8">
        <div className="flex animate-marquee space-x-12 max-w-6xl mx-auto">
          {skillIcons.concat(skillIcons).map((skill, index) => (
            <img key={index} src={skill.icon} alt={skill.name} className="h-24 w-24 object-contain" />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Education</h2>
        <div className="flex flex-col items-center gap-12">
          <motion.div className="flex flex-col md:flex-row items-center gap-6 bg-black rounded-2xl p-8 shadow-lg w-full"
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
          <a href="mailto:tuemail@example.com" className="px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition">
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
