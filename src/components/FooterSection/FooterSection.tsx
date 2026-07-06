import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <motion.footer
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="rounded-2xl border border-border/60 bg-background/70 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          “I build reliable software, explore AI engineering, and stay curious about the next meaningful product.”
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground">
          <a href="mailto:ananthanaveen485@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href="https://github.com/NaveenAnantha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/naveen-anantha/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">© 2026 Naveen Anantha. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};
