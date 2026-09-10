import type { ReactNode } from "react";
import { Section, Eyebrow } from "./Section";

export function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <Section className="pt-20 sm:pt-28 pb-12 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] bg-bench-radial blur-2xl" />
        </div>
        <div className="max-w-3xl">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 text-ink-400 text-sm">
            Effective {effectiveDate}
          </p>
        </div>
      </Section>

      <Section className="pb-32">
        <article className="max-w-3xl prose-bench">
          {children}
        </article>
      </Section>
    </>
  );
}
