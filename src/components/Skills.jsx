import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion", "Next.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["FastAPIs","Node.js", "Express", "RESTful APIs", "Python"],
    },
    {
      title: "Database",
      icon: "s🗄️",
      skills: ["MySQL", "SQLite", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Glowing accent top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-4xl mb-6 bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                {group.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm px-3 py-1.5 rounded-lg hover:border-primary-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
