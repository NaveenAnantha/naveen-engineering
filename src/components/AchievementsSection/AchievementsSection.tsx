import { motion } from "framer-motion";
import { Sparkles, Trophy, BookOpenText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card";

const achievements = [
  { title: "Promoted to Software Engineer", description: "A step forward in ownership, engineering maturity, and product contribution.", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Hack Overflow 2022 — 3rd Prize", description: "Recognized for problem solving and collaborative execution in a competitive technical setting.", icon: <Trophy className="h-5 w-5" /> },
  { title: "Completed MERN Internship", description: "Built a strong foundation through hands-on full-stack development and real implementation work.", icon: <BookOpenText className="h-5 w-5" /> },
  { title: "GitHub Copilot Certification", description: "Strengthened my fluency with AI-assisted development and modern engineering workflows.", icon: <Sparkles className="h-5 w-5" /> },
];

export const AchievementsSection = () => {
  return (
    <motion.section
      id="achievements"
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
          >
            <Card className="border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl h-full">
              <CardHeader>
                <div className="flex items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {achievement.icon}
                  </span>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {achievement.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
