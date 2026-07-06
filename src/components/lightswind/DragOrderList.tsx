"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Tag, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export interface DragItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  link?: string;
  kind?: string;
  summary?: string;
  impact?: string;
  tags?: string[];
}

interface DragOrderListProps {
  items: DragItem[];
  onReorder?: (items: DragItem[]) => void;
}

export function DragOrderList({ items, onReorder }: DragOrderListProps) {
  const [list, setList] = useState(items);

  // Update list when items prop changes
  useEffect(() => {
    setList(items);
  }, [items]);

  // Call onReorder when list changes
  useEffect(() => {
    if (onReorder) {
      onReorder(list);
    }
  }, [list, onReorder]);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="h-full"
          >
            <DragOrderItem item={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function DragOrderItem({ item }: { item: DragItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Random gradient for each card
  const gradients = [
    "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    "from-indigo-500/10 via-violet-500/10 to-purple-500/10",
    "from-rose-500/10 via-red-500/10 to-pink-500/10",
  ];

  const gradient = gradients[item.id % gradients.length];

  // Check if card has expandable content
  const hasExpandableContent = !!(item.summary || item.impact || (item.tags && item.tags.length > 0));

  return (
    <motion.div
      className="relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.03 : 1,
        y: isHovered ? -10 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-primary/20 opacity-0 blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0`}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      {/* Main card */}
      <div
        className={`relative h-full rounded-2xl border border-white/10 bg-background/80 p-6 shadow-lg backdrop-blur-xl transition-shadow duration-300 ${
          isHovered ? "shadow-2xl shadow-primary/20" : ""
        }`}
      >
        {/* Header with kind and date */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="rounded-full border border-white/10 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
              {item.kind || "Project"}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
              <Calendar size={12} />
              {item.date}
            </span>
          </div>

          {item.link && item.link !== "#" && (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2"
              animate={{
                x: isHovered ? 3 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <span className="sr-only">View project</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {item.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {item.subtitle}
        </p>

        {/* Show limited tags when collapsed */}
        {!expanded && item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
            {item.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">
                +{item.tags.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Expanded content - shows ALL details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                {/* Full summary */}
                {item.summary && (
                  <p className="text-sm text-foreground/90">
                    {item.summary}
                  </p>
                )}

                {/* Impact */}
                {item.impact && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">Impact: </span>
                    {item.impact}
                  </p>
                )}

                {/* All tags when expanded */}
                {item.tags && item.tags.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Technologies & Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-full border border-white/10 bg-primary/5 px-3 py-1 text-xs text-foreground/80"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Link */}
                {item.link && (
                  <motion.a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.link === "#" ? (
                      "Source Code Protected"
                    ) : (
                      <>
                        View Project
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* "See More" / "Show Less" button */}
        {hasExpandableContent && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-full justify-center py-2 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {expanded ? (
              <>
                <ChevronUp size={16} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                See More
              </>
            )}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}