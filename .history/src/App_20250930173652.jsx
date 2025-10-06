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
    const cursor = document.getElementById("cursor");
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    const addHover = () => cursor.classList.add("hovered");
    const removeHover = () => cursor.classList.remove("hovered");

    document.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll("a, button, .hoverable");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-gray-100 relative">
      {/* Cursor */}
      <div
        id="cursor"
        className="w-6 h-6 border-2 border-indigo-400 rounded-full fixed pointer-events-none z-50 transition-transform duration-150"
      ></div>

      {/* Aquí sigue todo tu JSX del portafolio */}
      <header className="fixed w-full bg-gray-800/80 backdrop-blur-md shadow-sm z-50">
        {/* Navbar... */}
      </header>

      {/* Hero, About, Concept, Projects, Skills, Education, Contact, Footer */}
      {/* ... todo tu JSX anterior ... */}
    </div>
  );
}

export default App;
