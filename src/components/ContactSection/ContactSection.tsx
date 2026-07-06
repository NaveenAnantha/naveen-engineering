import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, BadgeCheck, FileText, MapPin, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../lightswind/card";

const contacts = [
  {
    label: "Email",
    value: "ananthanaveen485@gmail.com",
    href: "mailto:ananthanaveen485@gmail.com",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "Phone",
    value: "+91 7093917735",
    href: "tel:+917093917735",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    value: "View profile",
    href: "https://www.linkedin.com/in/naveen-anantha/",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    value: "View profile",
    href: "https://github.com/NaveenAnantha",
    icon: <Github className="h-4 w-4" />,
  },
  {
    label: "Credly",
    value: "View badges",
    href: "https://www.credly.com/",
    icon: <BadgeCheck className="h-4 w-4" />,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/Naveen_JrApplication_Developer.pdf",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    label: "Location",
    value: "Vijayawada, Andhra Pradesh",
    href: "https://www.google.com/maps/search/?api=1&query=Vijayawada%2C%20Andhra%20Pradesh",
    icon: <MapPin className="h-4 w-4" />,
  },
];

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {contacts.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <a href={item.href} target="_blank" rel="noreferrer">
              <Card className="h-full border border-white/10 bg-background/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-primary/40">
                <CardContent className="flex items-center gap-3 p-5">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
