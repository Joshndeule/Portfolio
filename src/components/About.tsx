"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Network, ShieldCheck, Code2 } from "lucide-react";
import { profile } from "@/data/content";

const highlights = [
  {
    icon: Code2,
    accent: "text-cyan",
    title: "Full-Stack Solutions",
    text: "Building end-to-end web applications with clean, typed code.",
  },
  {
    icon: Network,
    accent: "text-emerald",
    title: "Network Topology",
    text: "Designing and analyzing infrastructure with Cisco tooling.",
  },
  {
    icon: ShieldCheck,
    accent: "text-cyan",
    title: "Security-Minded",
    text: "Applying cybersecurity fundamentals across every layer.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm uppercase tracking-widest text-cyan">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            ICT professional, builder at heart
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative h-72 overflow-hidden rounded-2xl border border-border sm:h-80"
          >
            <Image
              src="/about.jpg"
              alt="Joshua Ndeule on site"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </motion.div>

          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background-elevated/60 p-5"
            >
              <item.icon className={`mt-1 shrink-0 ${item.accent}`} size={26} />
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
