import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 px-6 py-10"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h3
          className="mb-6 text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-3 sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <CardTitle>B.Tech Computer Science</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  JNTUK — 2020 – 2024
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Built a strong foundation in{" "}
                <strong className="text-foreground">
                  Software Engineering
                </strong>
                , <strong className="text-foreground">Database Systems</strong>,{" "}
                <strong className="text-foreground">Operating Systems</strong>,
                and{" "}
                <strong className="text-foreground">Computer Networks</strong>.
              </p>
              <div className="rounded-xl border border-white/10 bg-background/50 p-4">
                <p className="mb-2 font-medium text-foreground">
                  Relevant Coursework
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Software Engineering</li>
                  <li>Database Systems</li>
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
