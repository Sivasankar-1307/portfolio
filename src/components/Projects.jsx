import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Food Waste Reduction System",
      tech: ["React", "Node.js", "SQLite"],
      desc: "A web platform connecting food donors with NGOs to reduce food waste.",
      details:
        "This full-stack system allows food donors to post surplus food, and NGOs receive real-time notifications to accept or reject donations. Built with a focus on high performance and clean UI/UX.",
      github: "https://github.com/SivaSankar-fswd/Food-Waste-Reduction-System.git",
      demo: "#",
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "ADR Management Platform",
      tech: ["React", "Node.js", "GitHub API"],
      desc: "System to manage Architecture Decision Records directly via GitHub.",
      details:
        "Users can create, filter, and manage ADRs with structured tracking. Integrated seamlessly with the GitHub repository API for persistent, version-controlled documentation.",
      github: "#",
      demo: "#",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Book Library App",
      tech: ["HTML", "CSS", "JS"],
      desc: "A simple Book Library app using HTML, CSS, and JavaScript to manage books with add, delete, and save functionality.",
      details:
        "A simple and responsive Book Library application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and mark books as completed. It uses browser local storage to save books, ensuring data persists across sessions while providing a clean and user-friendly interface.",
      github: "https://github.com/SivaSankar-fswd/Book-Library-App.git",
      demo: "https://book-library-app-zeta.vercel.app/",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "To-Do List App",
      tech: ["HTML", "CSS", "JS"],
      desc: "A simple To-Do List app using HTML, CSS, and JavaScript to manage tasks with add, delete, and save functionality.",
      details:
        "A simple and responsive To-Do List application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and mark tasks as completed. It uses browser local storage to save tasks, ensuring data persists across sessions while providing a clean and user-friendly interface.",
      github: "https://github.com/SivaSankar-fswd/To-Do-LIst-.git",
      demo: "https://to-do-list-nu-murex-15.vercel.app/",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-3xl p-1 relative overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              {/* Animated gradient background border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="bg-slate-900/90 rounded-[22px] p-8 h-full relative z-10 flex flex-col">
                <div className="mb-6 flex gap-2 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold tracking-wider uppercase text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed flex-grow">
                  {project.desc}
                </p>

                <div className="mt-8 flex items-center text-primary-500 font-semibold group-hover:translate-x-2 transition-transform">
                  View Case Study <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700/50 rounded-3xl max-w-2xl w-full p-10 relative shadow-2xl shadow-primary-500/10 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                ✕
              </button>

              <div className="mb-6 flex gap-2 flex-wrap pr-12">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold tracking-wider uppercase text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                {selectedProject.title}
              </h3>

              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full mb-8"></div>

              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                {selectedProject.details}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.demo}
                  target="_blank"
                  className="bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25 border border-primary-400/20"
                >
                  Live Demo <FaExternalLinkAlt className="text-sm" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <FaGithub className="text-lg" /> Source Code
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
