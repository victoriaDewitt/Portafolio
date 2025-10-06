import { motion } from "framer-motion";

const concepts = [
  { text: "Think", icon: "/icons/think.png", imageBox: "/icons/think-box.png" },
  { text: "Design", icon: "/icons/design.png", imageBox: "/icons/design-box.png" },
  { text: "Develop", icon: "/icons/develop.png", imageBox: "/icons/develop-box.png" },
];

const skills = [
  { name: "Java", icon: "/icons/java.png" },
  { name: "C++", icon: "/icons/cpp.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "Firebase", icon: "/icons/firebase.png" },
  { name: "VSCode", icon: "/icons/vscode.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "NetBeans", icon: "/icons/netbeans.png" },
];

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Victoria Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-500 dark:hover:text-indigo-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white dark:from-blue-600 dark:via-purple-800 dark:to-black">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center"
        >
          Choose Your Adventure in <br /> Software Engineering 🚀
        </motion.h2>
        <p className="mt-6 text-lg max-w-xl text-center">
          Hi, I’m Victoria. I love building apps, solving problems, and exploring new technologies.
        </p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a software engineer passionate about creating engaging and interactive web applications. My journey feels like a storytelling adventure where each project adds a new chapter.
        </p>

        {/* My Concept */}
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {concepts.map((c) => (
            <div key={c.text} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <img src={c.icon} alt={c.text} className="w-10 h-10" />
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{c.text}</span>
              </div>
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden">
                <img src={c.imageBox} alt={`${c.text} box`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Project cards */}
            {[1,2,3].map((i) => (
              <div key={i} className={`flex items-center bg-gradient-to-r ${i===1 ? 'from-indigo-700 to-indigo-900' : i===2 ? 'from-pink-600 to-pink-800' : 'from-green-600 to-green-800'} rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform`}>
                <div className="w-1/3 flex justify-center items-center">
                  <div className={`w-20 h-20 rounded-xl ${i===1 ? 'bg-indigo-500' : i===2 ? 'bg-pink-500' : 'bg-green-500'}`}></div>
                </div>
                <div className="w-2/3 pl-4 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-gray-300 mb-1">{`0${i}`}</div>
                    <h3 className="text-xl font-bold mb-1">{`Project ${i}`}</h3>
                    <p className="text-gray-200 text-sm">{i===1 ? "React + Tailwind" : i===2 ? "Java + MySQL" : "Dashboard + Animations"}</p>
                  </div>
                  <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Banda */}
      <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10 text-center">Skills</h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-8 animate-marquee"
            animate={{ x: [-200, 0, -200] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {skills.map((s) => (
              <div key={s.name} className="relative group flex flex-col items-center">
                <img src={s.icon} alt={s.name} className="w-16 h-16 rounded-lg shadow-lg group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-0 mb-10 opacity-0 group-hover:opacity-100 bg-black/70 text-white text-sm px-2 py-1 rounded">{s.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white dark:from-blue-700 dark:to-purple-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a href="mailto:tuemail@example.com" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
