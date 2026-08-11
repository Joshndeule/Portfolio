"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { skillCategories } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I Work With"
          title="Technical Skills"
          description="A toolkit spanning full-stack development, databases, and network & security fundamentals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const accentText =
              category.accent === "cyan" ? "text-cyan" : "text-emerald";
            const accentBorder =
              category.accent === "cyan"
                ? "hover:border-cyan/50"
                : "hover:border-emerald/50";
            const accentDot =
              category.accent === "cyan" ? "bg-cyan" : "bg-emerald";

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <TiltCard
                  className={`h-full p-6 transition-colors ${accentBorder}`}
                >
                  <h3 className={`font-mono text-sm font-semibold uppercase tracking-wider ${accentText}`}>
                    {category.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm text-foreground/90"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
