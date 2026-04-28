import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Food Waste Reduction System",
      tech: ["React", "Node.js", "SQLite"],
      desc: "A web platform connecting food donors with NGOs to reduce food waste.",
      details:
        "This full-stack system allows food donors to post surplus food, and NGOs receive real-time notifications to accept or reject donations. Built with a focus on high performance and clean UI/UX.",
      github: "#",
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "ADR Management Platform",
      tech: ["React", "Node.js", "GitHub API"],
      desc: "System to manage Architecture Decision Records directly via GitHub.",
      details:
        "Users can create, filter, and manage ADRs with structured tracking. Integrated seamlessly with the GitHub repository API for persistent, version-controlled documentation.",
      github: "#",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Rich Text Engine",
      tech: ["React", "Tiptap", "Node.js"],
      desc: "Custom highly extensible rich text editor with backend sync.",
      details:
        "Built a customizable editor featuring complex formatting tools, markdown support, and reliable server-side storage for structured content management.",
      github: "#",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "E-commerce Microservice",
      tech: ["Spring Boot", "MySQL", "JWT"],
      desc: "Robust REST API backend for a high-traffic e-commerce platform.",
      details:
        "Implemented secure JWT authentication, efficient product catalog management, and structured API endpoints adhering strictly to clean layered architecture principles.",
      github: "#",
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

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center"
                >
                  View Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
