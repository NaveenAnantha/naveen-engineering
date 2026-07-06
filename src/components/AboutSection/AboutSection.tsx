import { motion } from "framer-motion";
import { Brain, Cpu, Rocket, Compass } from "lucide-react";

const pillars = [
  {
    title: "Who I Am",
    description: "A software engineer focused on building reliable products, strong user experiences, and maintainable systems in real-world environments.",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    title: "Engineering Philosophy",
    description: "I care deeply about clean architecture, thoughtful implementation, and engineering decisions that scale with product growth.",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: "Current Focus",
    description: "My work increasingly blends modern full-stack engineering with AI systems, RAG, intelligent tooling, and product thinking.",
    icon: <Rocket className="h-4 w-4" />,
  },
  {
    title: "What Drives Me",
    description: "I enjoy solving meaningful problems, collaborating across functions, and continuously improving as an engineer and builder.",
    icon: <Compass className="h-4 w-4" />,
  },
];

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          I build software with a strong focus on production reliability, thoughtful product delivery, and continuous improvement. My work sits at the intersection of modern full-stack development, AI engineering, and scalable product experiences.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="rounded-2xl border border-white/10 bg-background/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{pillar.icon}</span>
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>

            </div>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
