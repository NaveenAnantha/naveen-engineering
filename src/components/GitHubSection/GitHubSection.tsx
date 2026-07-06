import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card";

const pinnedProjects = [
  {
    name: "Portfolio Website",
    description:
      "A polished React and TypeScript portfolio showcasing engineering work and product thinking.",
    link: "https://github.com/NaveenAnantha/naveen-engineering",
  },
  {
    name: "Engineering Repositories",
    description:
      "A collection of full-stack, AI, and software engineering projects shared on GitHub.",
    link: "https://github.com/NaveenAnantha?tab=repositories",
  },
];

export const GitHubSection = () => {
  return (
    <motion.section
      id="github"
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
        GitHub Showcase
      </h2>
      <Card className="border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <CardHeader>
          <div className="flex items-center gap-1">
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </span>
            <CardTitle>Pinned Projects</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {pinnedProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-white/10 bg-background/60 p-4"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers3 className="h-4 w-4" /> Repository
                </div>
                <h3 className="mt-2 font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:translate-x-0.5"
                >
                  Open Repository <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-background/60 p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex-1 text-sm text-muted-foreground">
              Building and sharing engineering work across full-stack
              applications, AI experiments, and product-focused projects.
            </div>
            <a
              href="https://github.com/NaveenAnantha"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Visit GitHub Profile
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
