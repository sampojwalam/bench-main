import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-ink-700 font-medium ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bench-gradient" />
      {children}
    </span>
  );
}
