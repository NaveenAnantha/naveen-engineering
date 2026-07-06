import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import heroimage from "../../../public/NaveenProfile.png";

const actionLinks = [
  { label: "Download Resume", href: "/Naveen_Software_Engineer.pdf", icon: <ArrowUpRight className="h-3.5 w-3.5" />, download: true },
  { label: "GitHub", href: "https://github.com/NaveenAnantha", icon: <Github className="h-3.5 w-3.5" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-anantha/", icon: <Linkedin className="h-3.5 w-3.5" /> },
  { label: "Contact", href: "mailto:ananthanaveen485@gmail.com", icon: <Mail className="h-3.5 w-3.5" /> },
];

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      <motion.div
        className="flex-1 space-y-5 p-6 text-left md:text-left"
        initial={false}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl">
            🚀 Building AI Products
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          Software Engineer building scalable products, intelligent systems, and modern web experiences.
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          Full Stack Engineer • AI Engineering Enthusiast
        </motion.h2>

        <motion.p
          className="mt-4 text-xs md:text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          I build production software with strong engineering fundamentals, thoughtful product execution, and a growing focus on AI systems, scalable architecture, and modern full-stack development.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          {actionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download ? true : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/80"
            >
              {link.label}
              {link.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative h-80 w-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-sky-400/20 blur-3xl" />
          <div className="relative h-full w-full rounded-full border border-white/15 bg-background/70 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <img src={heroimage} alt="Naveen Anantha" className="h-full w-full rounded-full object-cover" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
