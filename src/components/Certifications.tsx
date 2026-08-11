"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { certifications } from "@/data/content";

const statusStyles: Record<string, string> = {
  Completed: "border-emerald/40 bg-emerald/10 text-emerald",
  "In Progress": "border-cyan/40 bg-cyan/10 text-cyan",
  Upcoming: "border-border bg-background text-muted",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="IT, networking, and software development certifications from Cisco Networking Academy, Microsoft, and LinkedIn Learning."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <TiltCard className="flex h-full flex-col p-6 hover:border-emerald/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
                  <Award size={22} />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                <div className="mt-4 flex flex-1 items-end justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-semibold ${statusStyles[cert.status]}`}
                  >
                    {cert.status}
                  </span>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:text-cyan-soft"
                    >
                      Verify
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
