import Image from "next/image";
import Link from "next/link";

export function Logo({
  size = 32,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
    >
      <Image
        src="/icons/bench_rounded.png"
        alt={showWordmark ? "" : "Bench Gym Log"}
        width={size}
        height={size}
        priority
        className="rounded-md"
      />
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-ink-900 group-hover:text-ink-700 transition-colors">
          Bench Gym Log
        </span>
      )}
    </Link>
  );
}
