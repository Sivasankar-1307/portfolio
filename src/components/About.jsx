import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary-500/20 transition-all duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">A Passion for Engineering</h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                I am a B.Tech student passionate about building practical web
                applications that solve real-world problems. I focus on writing
                clean, maintainable backend logic and structured frontend design.
              </p>
              <p>
                During my backend development internship, I architected and implemented 
                an e-commerce system using Spring Boot. This experience deeply ingrained 
                in me the importance of robust API design, security, and scalable database management.
              </p>
              <p>
                My ultimate goal is to evolve into a professional software engineer who consistently 
                delivers highly performant, reliable, and aesthetically pleasing applications.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Stat Cards */}
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-black text-primary-400 mb-2">6 months</span>
              <span className="text-slate-400 font-medium">Internship Experience</span>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-black text-primary-400 mb-2">10+</span>
              <span className="text-slate-400 font-medium">Projects Built</span>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center col-span-2">
              <span className="text-5xl font-black text-primary-400 mb-2 text-gradient">100%</span>
              <span className="text-slate-400 font-medium">Commitment to Quality</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
