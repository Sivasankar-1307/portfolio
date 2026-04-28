import { motion } from "framer-motion";

function Internship() {
  return (
    <section id="internship" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-slate-700 to-transparent ml-8"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative md:pl-24"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-8 top-8 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] -ml-[7.5px] border-2 border-slate-900"></div>

            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Backend Developer Intern
                  </h3>
                  <p className="text-primary-400 font-medium text-lg">
                    Icanio Technology
                  </p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-sm text-slate-300 font-medium inline-block w-fit">
                  1 Month Duration
                </div>
              </div>

              <div className="w-full h-px bg-slate-700/50 mb-6"></div>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Architected and developed core backend infrastructure for an e-commerce platform using 
                <span className="font-semibold text-white"> Spring Boot</span>. 
                Designed efficient RESTful APIs, implemented secure authentication flows, 
                optimized complex database operations, and adhered strictly to clean 
                architecture principles ensuring a highly scalable and maintainable codebase.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
