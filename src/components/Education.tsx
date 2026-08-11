"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Academic Journey" title="Education" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background-elevated/60 p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald/40 bg-emerald/10 text-emerald">
                <GraduationCap size={22} />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-cyan">
                {item.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
