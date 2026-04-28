import { motion } from "framer-motion";

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroItem} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 backdrop-blur-sm shadow-lg shadow-primary-500/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide uppercase">Available for Hire</span>
        </motion.div>

        <motion.h1 variants={heroItem} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Siva <span className="text-gradient">Sankar</span>
        </motion.h1>

        <motion.h3 variants={heroItem} className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-8">
          Full Stack Developer
        </motion.h3>

        <motion.p variants={heroItem} className="max-w-2xl text-lg text-slate-400 mx-auto mb-10 leading-relaxed font-light">
          I craft highly scalable web applications using React and Spring Boot. 
          Dedicated to building elegant solutions through clean architecture, immersive design, and meticulous engineering.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.a
             style={{color:"white"}}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            Explore My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto glass border border-slate-700/50 hover:border-primary-500/50 px-8 py-4 rounded-xl text-white font-medium text-lg transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}

export default Hero;
