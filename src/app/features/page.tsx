import Link from "next/link";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { features } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Tour every feature in Bench Gym Log — from one-tap set logging to deep progress analytics, a 500+ exercise library, social features, and more.",
};

export default function FeaturesIndex() {
  return (
    <>
      <Section className="pt-20 sm:pt-28 pb-16 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] bg-bench-radial-soft blur-2xl" />
        </div>
        <div className="max-w-3xl">
          <Eyebrow>The full feature tour</Eyebrow>
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.05] text-ink-900">
            Everything Bench can do.
          </h1>
          <p className="mt-6 text-lg text-ink-500 text-pretty">
            Bench is built for lifters who want their app to work as hard as
            they do. Here's every feature, in detail.
          </p>
        </div>
      </Section>

      <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group relative rounded-2xl border border-ink-100 bg-white shadow-card hover:shadow-cardHover hover:border-ink-200 transition-all p-7 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bench-gradient text-white">
                  <Icon name={f.icon} size={24} />
                </span>
                <span className="text-ink-400 text-xs">0{i + 1}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink-900">
                {f.name}
              </h2>
              <p className="mt-3 text-ink-500 leading-relaxed">
                {f.tagline}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-700 group-hover:text-ink-900 transition-colors">
                Explore {f.shortName.toLowerCase()}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
