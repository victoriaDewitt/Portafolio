import { motion } from "framer-motion";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-indigo-600">Vicky Dev</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-indigo-500">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
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
          className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
        >
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I’m a software engineer passionate about creating engaging 
          and interactive web applications. My journey feels like a 
          storytelling adventure where each project adds a new chapter.
        </p>
      </section>

   {/* Projects */}
<section id="projects" className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-indigo-600 mb-12 text-center">
      My Projects
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src="https://placehold.co/600x400/6366F1/fff?text=Project+1"
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            Project 1
          </h3>
          <p className="text-gray-600 mb-4">
            A cool web app I built using React and Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            View Project
          </a>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src="https://placehold.co/600x400/EC4899/fff?text=Project+2"
          alt="Project 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-pink-600">
            Project 2
          </h3>
          <p className="text-gray-600 mb-4">
            A Java + MySQL project with a clean REST API.
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            View Project
          </a>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src="https://placehold.co/600x400/10B981/fff?text=Project+3"
          alt="Project 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            Project 3
          </h3>
          <p className="text-gray-600 mb-4">
            Interactive dashboard with charts and animations.
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-xl shadow">⚛️ React</div>
          <div className="p-4 bg-white rounded-xl shadow">🎨 Tailwind</div>
          <div className="p-4 bg-white rounded-xl shadow">☕ Java</div>
          <div className="p-4 bg-white rounded-xl shadow">🐬 MySQL</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Let’s build something amazing together.</p>
          <a 
            href="mailto:tuemail@example.com"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Victoria Vázquez — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
