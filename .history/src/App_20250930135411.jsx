import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark por default

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-500">
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

          {/* Switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center 
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white
        dark:from-blue-700 dark:via-purple-900 dark:to-black transition-colors duration-500">
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
        <a
          href="#projects"
          className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition
            dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a software engineer passionate about creating engaging web applications. My journey feels like a storytelling adventure.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 text-white
        dark:from-gray-800 dark:to-black transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center bg-gradient-to-r from-indigo-700 to-indigo-900 dark:from-blue-800 dark:to-purple-900 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-indigo-500 dark:bg-blue-600 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 dark:text-gray-400 mb-1">01</div>
                  <h3 className="text-xl font-bold mb-1">Project 1</h3>
                  <p className="text-gray-200 dark:text-gray-300 text-sm">React + Tailwind</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                  Explore
                </button>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-pink-600 to-pink-800 dark:from-purple-700 dark:to-purple-900 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-pink-500 dark:bg-purple-600 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 dark:text-gray-400 mb-1">02</div>
                  <h3 className="text-xl font-bold mb-1">Project 2</h3>
                  <p className="text-gray-200 dark:text-gray-300 text-sm">Java + MySQL</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                  Explore
                </button>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-green-500 dark:bg-green-600 rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 dark:text-gray-400 mb-1">03</div>
                  <h3 className="text-xl font-bold mb-1">Project 3</h3>
                  <p className="text-gray-200 dark:text-gray-300 text-sm">Dashboard + Animations</p>
                </div>
                <button className="mt-2 self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">⚛️ React</div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">🎨 Tailwind</div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">☕ Java</div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">🐬 MySQL</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-700 dark:to-purple-900 text-white py-20 px-6 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a
            href="mailto:tuemail@example.com"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
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
