import { motion } from "framer-motion";

function App() {
  const conceptItems = [
    { icon: "/icons/think.png", text: "Think" },
    { icon: "/icons/design.png", text: "Design" },
    { icon: "/icons/develop.png", text: "Develop" },
  ];

  const skillIcons = [
    { icon: "/icons/java.png", name: "Java" },
    { icon: "/icons/cpp.png", name: "C++" },
    { icon: "/icons/python.png", name: "Python" },
    { icon: "/icons/html.png", name: "HTML" },
    { icon: "/icons/react.png", name: "React" },
    { icon: "/icons/javascript.png", name: "JavaScript" },
    { icon: "/icons/mysql.png", name: "MySQL" },
    { icon: "/icons/firebase.png", name: "Firebase" },
    { icon: "/icons/vscode.png", name: "VSCode" },
    { icon: "/icons/github.png", name: "GitHub" },
    { icon: "/icons/netbeans.png", name: "NetBeans" },
  ];

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      {/* Navbar */}
      <header className="fixed w-full bg-gray-800/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-400">Victoria Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center 
        bg-gradient-to-br from-blue-800 via-purple-900 to-black text-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center"
        >
          Choose Your Adventure in <br /> Software Engineering 🚀
        </motion.h2>
        <p className="mt-6 text-lg max-w-xl text-center">
          Hi, I’m Victoria. I love building apps, solving problems,
          and exploring new technologies to craft unique digital journeys.
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-gray-800 text-indigo-400 font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition"
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

  {/* My Concept Section */}
  <section id="concept" className="max-w-5xl mx-auto py-20 px-6">
    <h2 className="text-3xl font-bold text-indigo-600 mb-10">My Concept</h2>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
      {/* Lista de conceptos */}
      <div className="flex flex-col gap-6">
        {conceptItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={item.icon} alt={item.text} className="w-16 h-16" />
            <span className="text-lg font-semibold">{item.text}</span>
          </div>
        ))}
      </div>

  import { motion } from "framer-motion";

{/* Imagen adicional animada */}
<motion.div
  className="w-64 h-64 flex justify-center items-center overflow-hidden" // Más grande: w-64 h-64
  animate={{ y: [0, -30, 0] }} // Flotado más visible
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    rotateZ: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  }}
>
  <img
    src="/icons/atomo.png"
    alt="Concept illustration"
    className="object-contain w-full h-full" // Imagen ocupa todo el contenedor
  />
</motion.div>




    </div>
  </section>
</section>


      {/* Projects */}
      <section id="projects" className="bg-gray-900 py-20 px-6 text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Cards */}
            <div className="flex items-center bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">01</div>
                  <h3 className="text-xl font-bold mb-1">Project 1</h3>
                  <p className="text-gray-300 text-sm">React + Tailwind</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">Explore</button>
              </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-800 to-pink-900 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-purple-700 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">02</div>
                  <h3 className="text-xl font-bold mb-1">Project 2</h3>
                  <p className="text-gray-300 text-sm">Java + MySQL</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">Explore</button>
              </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-green-800 to-green-700 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-green-600 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">03</div>
                  <h3 className="text-xl font-bold mb-1">Project 3</h3>
                  <p className="text-gray-300 text-sm">Dashboard + Animations</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">Explore</button>
              </div>
            </div>
          </div>

          {/* Skills Icons Band */}
          <div className="mt-16 overflow-x-hidden">
            <div className="flex animate-marquee gap-8 py-6">
              {skillIcons.concat(skillIcons).map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center relative group">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                  <span className="absolute bottom-full mb-2 px-2 py-1 text-sm rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-xl shadow">⚛️ React</div>
          <div className="p-4 bg-gray-800 rounded-xl shadow">🎨 Tailwind</div>
          <div className="p-4 bg-gray-800 rounded-xl shadow">☕ Java</div>
          <div className="p-4 bg-gray-800 rounded-xl shadow">🐬 MySQL</div>
        </div>
      </section>

      {/* Contact */}
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
