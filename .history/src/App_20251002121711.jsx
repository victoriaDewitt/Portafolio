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
    {[...Array(8)].map((_, i) => {
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
  <h1 className="relative z-20 text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wide text-center select-none">
    Hi, I'm{" "}
    <span style={{ fontFamily: "'Quantico', sans-serif" }} className="quantum-text">
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

  {/* Botón de descarga de CV */}
  <div className="mt-8 flex justify-center relative z-20">
    <a 
      href="/VictoriaCV.pdf" 
      download
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
    >
      Resume <span className="text-xl">⬇️</span>
    </a>
  </div>
</section>



      {/* About Section */}
      <section id="about" className="relative flex items-center justify-center px-6 py-12 overflow-hidden text-white">
        {/* Fondo nebuloso */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute w-[220%] h-[220%] rounded-full blur-[250px] animate-nebulaMove"
            style={{ background: 'radial-gradient(circle at 30% 40%, #0b1c2c, transparent 70%)', opacity: 0.4, mixBlendMode: 'screen' }} />
          <div className="absolute w-[200%] h-[200%] rounded-full blur-[200px] animate-nebulaMove2"
            style={{ background: 'radial-gradient(circle at 70% 50%, #10213a, transparent 70%)', opacity: 0.35, mixBlendMode: 'screen' }} />
          <div className="absolute w-[240%] h-[240%] rounded-full blur-[220px] animate-nebulaMove3"
            style={{ background: 'radial-gradient(circle at 50% 70%, #18304d, transparent 70%)', opacity: 0.3, mixBlendMode: 'screen' }} />
        </div>

        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const color = ["#ffffff","#c0c0ff","#a0ffff","#ffa0ff"][Math.floor(Math.random()*4)];
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full z-10"
              style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, backgroundColor: color }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}

        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
           <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 audiowide-regular">
  About Me
</h2>
            <p 
  className="text-lg leading-relaxed text-gray-300" 
  style={{ fontFamily: "'Quantico', sans-serif" }}
>
  I’m a Software Engineer building web and backend apps. I enjoy creating clean, 
  efficient solutions and am always eager to learn new technologies and improve my skills.
</p>

          </motion.div>
          <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <img src="/icons/vicky.jpg" alt="Victoria Vázquez" className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover "/>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <h2 className="text-3xl md:text-4xl font-bold  text-indigo-400 mb-8 audiowide-regular flex items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        💡
      </motion.span>
      My Concept
    </h2>
        <motion.div className="absolute inset-0 -z-20">
          <motion.div className="absolute w-[220%] h-[220%] rounded-full blur-[250px]" style={{ background: 'radial-gradient(circle at 30% 40%, #0b1c2c, transparent 70%)', opacity: 0.4, mixBlendMode: 'screen' }}
            animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute w-[200%] h-[200%] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle at 70% 50%, #10213a, transparent 70%)', opacity: 0.35, mixBlendMode: 'screen' }}
            animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
            transition={{ duration: 80, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute w-[240%] h-[240%] rounded-full blur-[220px]" style={{ background: 'radial-gradient(circle at 50% 70%, #18304d, transparent 70%)', opacity: 0.3, mixBlendMode: 'screen' }}
            animate={{ x: [-20, 20, -20], y: [-15, 15, -15] }}
            transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>

        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const color = ["#ffffff","#c0c0ff","#a0ffff","#ffa0ff"][Math.floor(Math.random()*4)];
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          return (
            <motion.span key={i} className="absolute rounded-full z-10" style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, backgroundColor: color }}
              animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} />
          );
        })}

        <div className="relative max-w-5xl w-full bg-black/80 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-center items-center gap-12 z-10">
          <div className="flex flex-col gap-6 items-center">
            {conceptItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img src={item.icon} alt={item.text} className="w-20 h-20" />
                <span className="text-lg font-semibold text-white">{item.text}</span>
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
                {/* Contenedor de los proyectos */}
        <div className="relative max-w-6xl w-full mt-8">
          

<h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-8 audiowide-regular">
  Projects{" "}
  <motion.span
    animate={{ y: [0, -8, 0] }} // sube y baja
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="inline-block"
  >
    🚀
  </motion.span>
</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

         {/* Project 1 */}
<div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
  <img src="/icons/proyect1.png" alt="Ecommerce TCG Store" className="w-full h-40 object-cover" />
  <div className="p-4 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold mb-2">Eccomerce-tcg Store</h3>
      <div className="text-sm text-gray-200 mb-2">Java + Spring Boot + HTML</div>
      <p className="text-gray-200 text-sm leading-relaxed">
        Hoenn TCG Store is an interactive e-commerce platform where users can
        browse, filter, and purchase Pokémon TCG products.
      </p>
    </div>
    {/* Contenedor de botones */}
    <div className="mt-2 flex gap-2">
      <a href="https://github.com/victoriaDewitt/eccomerce-tcg.git" target="_blank" rel="noopener noreferrer">
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-quantico">Explore</button>
      </a>
      <a href="https://github.com/victoriadewitt/eccomerce-tcg-demo" target="_blank" rel="noopener noreferrer">
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-quantico">Demo</button>
      </a>
    </div>
  </div>
</div>


            {/* Project 2 */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
              <img src="/icons/proyect2.png" alt="Amazon Product Bot" className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-quantico mb-2">Amazon Product Availability Bot</h3>
                  <div className="text-sm text-gray-200 mb-2">Python</div>
                  <p className="text-gray-200 text-sm leading-relaxed font-quantico">
                    Python bot that sends an email alert when a product becomes available on Amazon Mexico.
                  </p>
                </div>
                <a href="https://github.com/victoriaDewitt/bot_amazon" target="_blank" rel="noopener noreferrer">
                  <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-quantico">Explore</button>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-xl w-[380px] hover:scale-105 transition-transform overflow-hidden">
              <img src="/icons/proyect3.png" alt="Streamline App" className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-quantico mb-2">Streamline</h3>
                  <div className="text-sm text-gray-200 mb-2">FlutterFlow + Firebase</div>
                  <p className="text-gray-200 text-sm leading-relaxed font-quantico">
                    Messaging and task management app combining real-time messaging with collaborative task management features.
                  </p>
                </div>
                <a href="https://github.com/victoriaDewitt/streamline" target="_blank" rel="noopener noreferrer">
                  <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-quantico">Explore</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="absolute inset-0 -z-20">
          <div className="absolute w-[220%] h-[220%] rounded-full blur-[250px] animate-nebulaMove" style={{ background: 'radial-gradient(circle at 30% 40%, #0b1c2c, transparent 70%)', opacity: 0.4, mixBlendMode: 'screen' }} />
          <div className="absolute w-[200%] h-[200%] rounded-full blur-[200px] animate-nebulaMove2" style={{ background: 'radial-gradient(circle at 70% 50%, #10213a, transparent 70%)', opacity: 0.35, mixBlendMode: 'screen' }} />
          <div className="absolute w-[240%] h-[240%] rounded-full blur-[220px] animate-nebulaMove3" style={{ background: 'radial-gradient(circle at 50% 70%, #18304d, transparent 70%)', opacity: 0.3, mixBlendMode: 'screen' }} />
        </div>

        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const color = ["#ffffff","#c0c0ff","#a0ffff","#ffa0ff"][Math.floor(Math.random()*4)];
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          return (
            <motion.span key={i} className="absolute rounded-full z-10" style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, backgroundColor: color }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} />
          );
        })}

        {/* Banda de Skills */}
        <div className="relative w-full py-12 z-10 bg-black/10 overflow-hidden">
          <div className="flex animate-marquee space-x-8 justify-center">
            {skillIcons.concat(skillIcons).map((skill, index) => (
              <div key={index} className="relative flex flex-col items-center group min-w-[100px]">
                <span className="absolute -top-10 px-2 py-1 rounded text-lg font-bold text-cyan-400 opacity-0 group-hover:opacity-100 select-none" style={{ textShadow: '0 0 3px #0ff, 0 0 6px #0ff, 0 0 9px #0ff', transition: 'all 0.25s ease-in-out' }}>{skill.name}</span>
                <img src={skill.icon} alt={skill.name} className="h-32 w-32 md:h-40 md:w-40 object-contain transition-transform duration-300 group-hover:-translate-y-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white">
        <div className="absolute inset-0 -z-20">
          <div className="absolute w-[220%] h-[220%] rounded-full blur-[250px] animate-nebulaMove" style={{ background: 'radial-gradient(circle at 30% 40%, #0b1c2c, transparent 70%)', opacity: 0.4, mixBlendMode: 'screen' }} />
          <div className="absolute w-[200%] h-[200%] rounded-full blur-[200px] animate-nebulaMove2" style={{ background: 'radial-gradient(circle at 70% 50%, #10213a, transparent 70%)', opacity: 0.35, mixBlendMode: 'screen' }} />
          <div className="absolute w-[240%] h-[240%] rounded-full blur-[220px] animate-nebulaMove3" style={{ background: 'radial-gradient(circle at 50% 70%, #18304d, transparent 70%)', opacity: 0.3, mixBlendMode: 'screen' }} />
        </div>

        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const color = ["#ffffff","#c0c0ff","#a0ffff","#ffa0ff"][Math.floor(Math.random()*4)];
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          return (
            <motion.span key={i} className="absolute rounded-full z-10" style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, backgroundColor: color }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }} />
          );
        })}

        <div className="relative max-w-6xl w-full flex flex-col items-center gap-8 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-8 audiowide-regular">
  Education{" "}
  <motion.span
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="inline-block"
  >
    🎓
  </motion.span>
</h2>

          <motion.div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 bg-black rounded-2xl p-6 shadow-lg w-full"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}>
            <img src="/icons/uvm.png" alt="Universidad Del Valle de México" className="w-28 h-28 object-contain rounded-lg" />
            <div>
              <h3 className="text-2xl font-bold text-white">Universidad Del Valle de México</h3>
              <p className="text-white text-lg mt-1">Bachelor’s Degree in Software Engineering (2021 - 2025)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
    <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 audiowide-regular">Contact Me</h2>

    <p className="mb-8 font-quantico">Let’s build something amazing together.</p>

    {/* Botones de contacto */}
    <div className="flex gap-4 flex-wrap justify-center">
      {/* Email */}
      <a
        href="mailto:vazquez-@hotmail.com"
        className="px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition flex items-center gap-2"
      >
        Email
        <img src="/icons/outlook.svg" alt="GitHub" className="w-5 h-5" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/victoriaDewitt"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-800 text-gray-100 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition flex items-center gap-2"
      >
        GitHub
        <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/norma-victoria-vázquez-gutiérrez-b91323240/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-800 text-blue-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition flex items-center gap-2"
      >
        LinkedIn
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
      </a>
    </div>
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

