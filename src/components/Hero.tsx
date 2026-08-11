"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/content";

const typeSequence = profile.roles.flatMap((role) => [role, 2000]);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="section-container grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-lg text-emerald sm:text-xl">
            Hi, I&apos;m Joshua Ndeule 👋
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            I am a{" "}
            <span className="block text-gradient sm:inline">
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                cursor
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="animate-pulse-border inline-flex items-center gap-2 rounded-full border border-cyan bg-cyan/10 px-6 py-3 font-semibold text-cyan transition-colors hover:bg-cyan/20"
            >
              Let&apos;s Work Together
              <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm text-muted">
            <span>{profile.location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{profile.email}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mx-auto flex justify-center"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div
              className="animate-spin-slow absolute inset-0 rounded-full opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg, #06b6d4, #10b981, #06b6d4)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
              }}
            />
            <div className="absolute inset-[10px] overflow-hidden rounded-full border-4 border-background bg-background-elevated">
              <Image
                src="/profile.jpg"
                alt="Portrait of Joshua Ndeule"
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
