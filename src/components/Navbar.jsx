import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-2xl font-black tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          Siva<span className="text-primary-500">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 bg-slate-900/50 px-8 py-3 rounded-full border border-slate-800/50 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow-glow transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium transition-colors"
        >
          Resume
        </motion.a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-primary-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download 
              className="mt-4 bg-primary-500 text-slate-950 font-bold px-6 py-3 rounded-lg text-center"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
