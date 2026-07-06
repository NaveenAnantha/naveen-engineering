import { motion } from "framer-motion";
import { BriefcaseBusiness, Sparkles, Layers3, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "../lightswind/card";

const stats = [
  { value: "2+", label: "Years Experience", icon: <BriefcaseBusiness className="h-4 w-4" /> },
  { value: "15+", label: "Projects", icon: <Layers3 className="h-4 w-4" /> },
  { value: "6+", label: "Certifications", icon: <BadgeCheck className="h-4 w-4" /> },
  { value: "20+", label: "Technologies", icon: <Sparkles className="h-4 w-4" /> },
];

export const StatsSection = () => {
  return (
    <motion.section
      id="stats"
      className="mx-auto max-w-7xl px-6 pb-8"
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
          >
            <Card className="border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
