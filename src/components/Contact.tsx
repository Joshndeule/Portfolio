"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { profile, socials } from "@/data/content";

type Status = "idle" | "loading" | "success" | "error";

const contactDetails: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: "#",
  },
];

const socialLinks = [
  { icon: GithubIcon, href: socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: socials.linkedin, label: "LinkedIn" },
  { icon: XIcon, href: socials.twitter, label: "X (Twitter)" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind, an internship opportunity, or just want to talk networks and code? Reach out."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background-elevated/60 p-4 transition-colors hover:border-cyan/40"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-emerald/50 hover:text-emerald"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald bg-emerald/10 px-5 py-3 font-semibold text-emerald transition-colors hover:bg-emerald/20"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-background-elevated/60 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-cyan"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-cyan"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-cyan"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-cyan"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald">
                <CheckCircle2 size={18} />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-400">
                <XCircle size={18} />
                {errorMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
