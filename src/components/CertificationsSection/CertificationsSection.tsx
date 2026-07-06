import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../lightswind/card";

const certifications = [
  {
    title: "GitHub Copilot Fundamentals",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/",
  },
  {
    title: "IBM SQL",
    issuer: "IBM",
    link: "https://www.ibm.com/",
  },
  {
    title: "IBM Python",
    issuer: "IBM",
    link: "https://www.ibm.com/",
  },
  {
    title: "SmartBridge MERN",
    issuer: "SmartBridge",
    link: "https://www.smartbridge.com/",
  },
  {
    title: "SmartInternz Frontend",
    issuer: "SmartInternz",
    link: "https://smartinternz.com/",
  },
  {
    title: "Internshala Web Development",
    issuer: "Internshala",
    link: "https://trainings.internshala.com/",
  },
];

export const CertificationsSection = () => {
  return (
    <motion.section
      id="certifications"
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-3 py-2 text-sm text-foreground transition hover:bg-background/80"
                >
                  <BadgeCheck className="h-4 w-4" /> Verify Credential
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
