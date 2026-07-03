import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        I am a Junior Application Developer currently working at Maganti IT Solutions, 
        where I contribute to building real-world, full-stack applications used by end users.

        My work focuses on frontend architecture, API integrations, authentication systems, and payment workflows, with hands-on experience using Supabase, Stripe, and Google APIs.

        I actively use AI development tools like GitHub Copilot and Cursor to improve code quality, speed, and maintainability. I enjoy working on scalable systems and collaborating
        with cross-functional teams to turn ideas into reliable software products.
      </p>
      <Separator />
    </motion.div>
  );
};
