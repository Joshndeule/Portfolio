"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind CSS &amp; Three.js.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-cyan hover:text-cyan"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
