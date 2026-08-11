"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { GithubIcon } from "./icons";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A mix of full-stack applications, interactive 3D experiments, and network architecture designs."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <TiltCard className="flex h-full flex-col p-6 hover:border-cyan/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-emerald"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background px-2.5 py-1 font-mono text-[11px] text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:text-cyan-soft"
                    >
                      <ExternalLink size={15} />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-foreground"
                    >
                      <GithubIcon size={15} />
                      Code
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
