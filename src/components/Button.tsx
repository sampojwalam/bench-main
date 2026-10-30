import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  /** Ends the label with a right arrow that nudges forward on hover. */
  arrow?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bench-gradient text-white px-5 py-2.5 hover:opacity-90 hover:shadow-[0_8px_30px_-8px_rgba(171,85,255,0.6)]",
  secondary:
    "bg-ink-900 text-white px-5 py-2.5 hover:bg-ink-700",
  ghost:
    "bg-white text-ink-900 border border-ink-200 px-5 py-2.5 hover:bg-ink-50 hover:border-ink-300",
};

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
    >
      <path
        d="M3 9H15M15 9L9.5 3.5M15 9L9.5 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  icon,
  arrow,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {icon}
        {children}
        {arrow && <ArrowIcon />}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
      {arrow && <ArrowIcon />}
    </Link>
  );
}
