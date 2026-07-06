"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Professional Project — StandOut",
      subtitle:
        "An AI-powered career preparation platform designed to help users practice interviews and track opportunities.",
      date: "Professional Experience",
      link: "#",
      kind: "Professional",
      summary: "Built and refined product experiences for a modern career-preparation workflow with a focus on reliability and usability.",
      impact: "Contributed to a product experience that blends user journey design, frontend architecture, and intelligent guidance.",
      tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "OpenAI API", "FastAPI", "Python"],
    },
    {
      id: 2,
      title: "Professional Project — Admin Monitoring Platform",
      subtitle:
        "An internal administration and monitoring platform used to streamline operational oversight and product control.",
      date: "Professional Experience",
      link: "#",
      kind: "Professional",
      summary: "Delivered engineering work that supported administration workflows and operational visibility in a production environment.",
      impact: "Focused on maintainability, integration quality, and dependable product behavior within a secure internal system.",
      tags: ["React", "Node.js", "Express", "TypeScript"],
    },
    {
      id: 3,
      title: "Personal Project — DevFusion",
      subtitle:
        "A polished full-stack experience with modern UI, email workflows, and refined interaction design.",
      date: "Personal Project",
      link: "https://github.com/NaveenAnantha",
      kind: "Personal",
      summary: "Explored modern frontend polish and product-ready interaction patterns using React, Tailwind, and animation-driven details.",
      impact: "Shaped a portfolio-quality experience that emphasizes engineering craft and visual clarity.",
      tags: ["React", "TypeScript", "Tailwind", "GSAP"],
    },
    {
      id: 4,
      title: "Personal Project — AI PDF Chatbot",
      subtitle:
        "A chatbot experience for querying PDF content with retrieval-augmented generation and semantic retrieval.",
      date: "Personal Project",
      link: "https://github.com/NaveenAnantha",
      kind: "Personal",
      summary: "Built an AI-native workflow that combines vector search, embeddings, and retrieval logic to create a more useful document experience.",
      impact: "Strengthened my understanding of AI system design, retrieval quality, and practical LLM application architecture.",
      tags: ["Python", "FastAPI", "Qdrant", "OpenAI"],
    },
    {
      id: 5,
      title: "Personal Project — Portfolio Website",
      subtitle:
        "A recruiter-ready portfolio built to communicate engineering maturity, product thinking, and continuous learning.",
      date: "Personal Project",
      link: "https://github.com/NaveenAnantha/naveen-engineering",
      kind: "Personal",
      summary: "Designed as a premium engineering portfolio that balances elegant presentation with strong technical storytelling.",
      impact: "Represents a focused effort to present product engineering experience with clarity and confidence.",
      tags: ["React", "TypeScript", "Framer Motion"],
    },
  ]);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="w-full xl:max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Professional work grounded in real delivery, alongside personal projects focused on AI engineering, modern frontend development, and product experimentation.
        </p>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
