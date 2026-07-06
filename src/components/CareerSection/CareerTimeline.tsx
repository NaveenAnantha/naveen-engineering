import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "April 2026 – Present",
      title: "Software Engineer",
      subtitle: "Maganti IT Solutions",
      description:
        "Building scalable web applications and product experiences with React, Next.js, TypeScript, Node.js, and modern cloud services. Contributing to production features involving authentication, payments, API integrations, and AI-assisted workflows.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "September 2024 – March 2026",
      title: "Junior Application Developer",
      subtitle: "Maganti IT Solutions",
      description:
        "Delivered full-stack application features for real-world products, including Stripe payment integration, Supabase authentication and SSO, Google API integrations, and AI-assisted development workflows using GitHub Copilot and Cursor.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "6 Months Internship",
      title: "Full Stack MERN Intern",
      subtitle: "SmartInternz",
      description:
        "Built practical web application experience through hands-on full-stack development with the MERN stack, strengthening problem solving, collaboration, and modern frontend engineering skills.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Experience"
        subtitle="A practical engineering path from internship to professional software delivery"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
