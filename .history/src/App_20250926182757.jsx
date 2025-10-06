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
<section id="projects" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Choose your Adventure 🚀</h2>

    <div className="flex flex-col gap-8">
      {/* Card 1 */}
      <div className="flex items-center bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl shadow-xl h-[220px] p-6 hover:scale-105 transition-transform">
        {/* Imagen o ícono */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-28 h-28 bg-indigo-500 rounded-xl"></div>
        </div>
        {/* Texto */}
        <div className="w-2/3 pl-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-300 mb-2">01</div>
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-200 text-sm">
              A web app built with React and Tailwind CSS.
            </p>
          </div>
          <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold">
            Explore
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl shadow-xl h-[220px] p-6 hover:scale-105 transition-transform">
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-28 h-28 bg-pink-500 rounded-xl"></div>
        </div>
        <div className="w-2/3 pl-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-300 mb-2">02</div>
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-200 text-sm">
              Java + MySQL backend with REST API.
            </p>
          </div>
          <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold">
            Explore
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-xl h-[220px] p-6 hover:scale-105 transition-transform">
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-28 h-28 bg-green-500 rounded-xl"></div>
        </div>
        <div className="w-2/3 pl-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-300 mb-2">03</div>
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-200 text-sm">
              Interactive dashboard with charts and animations.
            </p>
          </div>
          <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold">
            Explore
          </button>
        </div>
      </div>
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
