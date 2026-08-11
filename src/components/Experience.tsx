"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Work Experience"
        />

        <div className="relative border-l border-border pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border border-cyan/40 bg-background-elevated text-cyan">
                <Briefcase size={14} />
              </span>

              <div className="rounded-2xl border border-border bg-background-elevated/60 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 font-mono text-xs font-semibold text-emerald">
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-cyan">
                  {item.company} • {item.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
