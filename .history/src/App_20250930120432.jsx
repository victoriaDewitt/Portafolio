import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-sans bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-500">
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-sm z-50 transition-colors duration-500">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-light-primary dark:text-dark-primary">
            Victoria Dev
          </h1>

          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-light-primary dark:hover:text-dark-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-light-primary dark:hover:text-dark-primary"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-light-primary dark:hover:text-dark-primary"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-light-primary dark:hover:text-dark-primary"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Switch */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded-full bg-light-card dark:bg-dark-card transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center 
        bg-gradient-to-br from-light-primary via-light-secondary to-light-accent text-white
        dark:from-dark-primary dark:via-dark-secondary dark:to-dark-bg transition-colors duration-500"
      >
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
          className="mt-8 px-6 py-3 bg-white text-light-primary font-semibold rounded-2xl shadow-lg hover:bg-light-card transition dark:bg-dark-card dark:text-dark-text dark:hover:bg-gray-700"
        >
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-light-secondary dark:text-dark-secondary">
          I’m a software engineer passionate about creating engaging 
          and interactive web applications. My journey feels like a 
          storytelling adventure where each project adds a new chapter.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 px-6 bg-light-card text-light-text dark:bg-dark-card dark:text-dark-text transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose your Adventure 🚀
          </h2>

          {/* Contenedor en fila */}
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Card 1 */}
            <div className="flex items-center 
              bg-gradient-to-r from-light-primary to-light-accent 
              dark:from-dark-primary dark:to-dark-card
              rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-light-card dark:bg-dark-secondary rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">01</div>
                  <h3 className="text-xl font-bold mb-1">Project 1</h3>
                  <p className="text-sm">React + Tailwind</p>
                </div>
                <button className="mt-2 self-start bg-light-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold dark:bg-dark-accent">
                  Explore
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center 
              bg-gradient-to-r from-pink-400 to-pink-600 
              dark:from-pink-600 dark:to-pink-800
              rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-light-card dark:bg-dark-secondary rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">02</div>
                  <h3 className="text-xl font-bold mb-1">Project 2</h3>
                  <p className="text-sm">Java + MySQL</p>
                </div>
                <button className="mt-2 self-start bg-light-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold dark:bg-dark-accent">
                  Explore
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center 
              bg-gradient-to-r from-green-400 to-green-600 
              dark:from-green-600 dark:to-green-800
              rounded-2xl shadow-xl w-[350px] h-[220px] p-6 hover:scale-105 transition-transform">
              <div className="w-1/3 flex justify-center items-center">
                <div className="w-20 h-20 bg-light-card dark:bg-dark-secondary rounded-xl"></div>
              </div>
              <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">03</div>
                  <h3 className="text-xl font-bold mb-1">Project 3</h3>
                  <p className="text-sm">Dashboard + Animations</p>
                </div>
                <button className="mt-2 self-start bg-light-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold dark:bg-dark-accent">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-light-card dark:bg-dark-card rounded-xl shadow">⚛️ React</div>
          <div className="p-4 bg-light-card dark:bg-dark-card rounded-xl shadow">🎨 Tailwind</div>
          <div className="p-4 bg-light-card dark:bg-dark-card rounded-xl shadow">☕ Java</div>
          <div className="p-4 bg-light-card dark:bg-dark-card rounded-xl shadow">🐬 MySQL</div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-r from-light-primary to-light-secondary text-white dark:from-dark-primary dark:to-dark-secondary py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a
            href="mailto:tuemail@example.com"
            className="px-6 py-3 bg-white text-light-primary font-semibold rounded-2xl shadow-lg hover:bg-light-card transition dark:bg-dark-card dark:text-dark-text dark:hover:bg-gray-700"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-light-secondary dark:text-dark-secondary text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
