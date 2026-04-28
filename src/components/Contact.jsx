import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "sivasankar.dev0@gmail.com",
      link: "mailto:sivasankar.dev0@gmail.com",
      icon: <FaEnvelope className="text-3xl" />,
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    {
      name: "LinkedIn",
      value: "siva-sankar",
      link: "https://www.linkedin.com/in/siva-sankar-24075a277",
      icon: <FaLinkedin className="text-3xl" />,
      color: "text-blue-500",
      bg: "bg-blue-600/10 border-blue-500/20",
    },
    {
      name: "GitHub",
      value: "SivaSankar-fswd",
      link: "https://github.com/SivaSankar-fswd",
      icon: <FaGithub className="text-3xl" />,
      color: "text-slate-300",
      bg: "bg-slate-700/30 border-slate-600/30",
    },
    {
      name: "Location",
      value: "Nazareth, Tamil Nadu",
      link: "#",
      icon: <FaMapMarkerAlt className="text-3xl" />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">Let's </span>
            <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto rounded-full mb-8"></div>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            I'm currently exploring new opportunities in software engineering.
            Whether you have a question, a project proposal, or just want to say hi, 
            my inbox is always open!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.name !== "Location" && item.name !== "Email" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-8 rounded-3xl flex flex-col items-center text-center group cursor-pointer ${item.bg} border hover:border-primary-500/50 transition-all`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-900/50 shadow-inner ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-slate-400 text-sm font-medium break-all group-hover:text-primary-400 transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
