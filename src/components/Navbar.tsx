"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { features } from "@/lib/features";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-ink-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-1 text-sm text-ink-700">
          <Link
            href="/"
            className="px-3 py-2 rounded-full hover:text-ink-900 hover:bg-ink-50 transition-colors"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setFeaturesOpen((v) => !v)}
              className="px-3 py-2 rounded-full hover:text-ink-900 hover:bg-ink-50 transition-colors flex items-center gap-1"
              aria-expanded={featuresOpen}
              aria-haspopup="menu"
            >
              Features
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${
                  featuresOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 3.5L5 6.5L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
                featuresOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[640px] rounded-2xl bg-white border border-ink-100 shadow-cardHover p-3 grid grid-cols-2 gap-1">
                {features.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/features/${f.slug}`}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-ink-50 transition-colors"
                  >
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bench-gradient text-white text-[18px]">
                      <span className="material-symbols-outlined !text-[20px]">
                        {f.icon}
                      </span>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[13px] font-semibold text-ink-900">
                        {f.name}
                      </span>
                      <span className="text-[12px] text-ink-500 leading-snug mt-0.5 line-clamp-2">
                        {f.tagline}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/download"
            className="px-3 py-2 rounded-full hover:text-ink-900 hover:bg-ink-50 transition-colors"
          >
            Download
          </Link>

          <Button
            href="https://app.benchgymlog.com/login"
            variant="primary"
            external
            className="ml-3"
          >
            Log In
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-ink-200 text-ink-900"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5H15M3 9H15M3 13H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="px-5 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-ink-700 hover:bg-ink-50"
            >
              Home
            </Link>
            <button
              type="button"
              onClick={() => setMobileFeaturesOpen((v) => !v)}
              className="px-3 py-2.5 rounded-lg text-sm text-ink-700 hover:bg-ink-50 flex items-center justify-between"
            >
              Features
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${
                  mobileFeaturesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 3.5L5 6.5L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileFeaturesOpen && (
              <div className="pl-3 flex flex-col">
                {features.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/features/${f.slug}`}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-ink-500 hover:text-ink-900 hover:bg-ink-50"
                  >
                    {f.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-ink-700 hover:bg-ink-50"
            >
              Download
            </Link>
            <div className="h-px bg-ink-100 my-3" />
            <Button
              href="https://app.benchgymlog.com/login"
              variant="primary"
              external
              className="w-full"
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
