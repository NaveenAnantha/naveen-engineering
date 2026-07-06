import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card.tsx";
import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import {
  Blocks,
  Cpu,
  Database,
  TerminalSquare,
  CreditCard,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    description:
      "Component-driven UI development and polished product interfaces.",
    icon: <Blocks className="h-4 w-4" />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Aceternity UI",
    ],
  },
  {
    title: "Backend",
    description:
      "Reliable services and API systems that support production applications.",
    icon: <Cpu className="h-4 w-4" />,
    technologies: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "AI Engineering",
    description:
      "Practical AI integration, prompt design, retrieval workflows, and modern assistants.",
    icon: <Sparkles className="h-4 w-4" />,
    technologies: [
      "OpenAI API",
      "Gemini API",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Vector Search",
    ],
  },
  {
    title: "Data & Cloud",
    description:
      "Data persistence, authentication, and cloud-native application development.",
    icon: <Database className="h-4 w-4" />,
    technologies: [
      "MongoDB",
      "MySQL",
      "Supabase",
      "AWS Cognito",
      "JWT",
      "SSO",
      "Qdrant",
    ],
  },
  {
    title: "Developer Tools",
    description:
      "Productive engineering workflows with modern tooling and collaboration practices.",
    icon: <TerminalSquare className="h-4 w-4" />,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "GitHub Copilot",
      "Claude Code",
    ],
  },
  {
    title: "Payments & Auth",
    description:
      "Secure and polished product experiences for payments and identity.",
    icon: <CreditCard className="h-4 w-4" />,
    technologies: ["Stripe", "Authentication", "Supabase", "AWS Cognito"],
  },
];

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="mb-6 text-3xl font-bold">Skills</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="h-full border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </span>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {category.technologies.map((tech) => (
                    <Badge key={tech} className="bg-sky-500/90 text-white">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
