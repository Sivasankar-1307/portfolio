import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur-xl py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-black tracking-tighter text-white inline-block mb-2">
            Siva<span className="text-primary-500">.</span>
          </a>
          <p className="text-slate-400 text-sm font-light">
            Building elegant software solutions.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/SivaSankar-fswd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary-500 hover:text-slate-950 hover:border-primary-500 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siva-sankar-24075a277"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary-500 hover:text-slate-950 hover:border-primary-500 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sivasankar.dev0@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary-500 hover:text-slate-950 hover:border-primary-500 transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

      {/* Bottom */}
      <div className="text-center text-sm text-slate-500 font-light">
        © {new Date().getFullYear()} Siva Sankar. All rights reserved. 
        <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">Designed & Built with passion.</span>
      </div>
    </footer>
  );
}

export default Footer;