"use client";

import { useState } from "react";
import { profile } from "@/app/data/portfolio";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 block">
          Get in touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Let's Build Something Together
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed text-sm md:text-base">
          I'm currently open to select consulting opportunities, leadership roles, and full-stack project engagements.
        </p>

        {/* Dynamic Email Copy Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-6 py-4 glass-panel glass-panel-hover rounded-2xl border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer group"
          >
            <svg className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-sm">{profile.email}</span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 ml-2 min-w-[70px]">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-white/10 mx-auto mb-10" />

        {/* Bottom Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{profile.location}</span>
          </div>

          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
