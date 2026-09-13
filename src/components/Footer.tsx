import Link from "next/link";
import { Logo } from "./Logo";
import { features } from "@/lib/features";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "All Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "Web App", href: "https://app.benchgymlog.com", external: true },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-10 lg:grid-cols-[1.6fr_0.75fr_1fr_1fr] lg:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-ink-500 max-w-xs leading-relaxed">
              Plan your workouts, track your lifts, and see your progress.
              Available on iOS, Android, and the web.
            </p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <a
                href="https://apps.apple.com/app/id1608629087"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink-900 text-white hover:bg-ink-700 transition-colors w-[124px] px-3 py-2"
                aria-label="Download on the App Store"
              >
                <svg width="17" height="17" aria-hidden="true" className="shrink-0" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.6 105.6c30.3-36 27.5-68.8 26.6-80.6-26.7 1.5-57.5 18.1-75.1 38.6-19.4 21.9-30.8 49-28.3 79.9 28.9 2.2 55.2-12.7 76.8-37.9z"/>
                </svg>
                <span className="flex flex-col leading-tight">
                  <span className="text-[9px] text-ink-300">Download on the</span>
                  <span className="text-xs font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.thebenchapp.bench"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-ink-900 text-white hover:bg-ink-700 transition-colors w-[124px] px-3 py-2"
                aria-label="Get it on Google Play"
              >
                <svg width="17" height="17" aria-hidden="true" className="shrink-0" viewBox="0 0 512 512" fill="none">
                  <defs>
                    <linearGradient id="fp1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#00C3FF"/>
                      <stop offset="1" stopColor="#1A73E8"/>
                    </linearGradient>
                    <linearGradient id="fp2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#FFCE00"/>
                      <stop offset="1" stopColor="#FFA200"/>
                    </linearGradient>
                    <linearGradient id="fp3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#FF3A44"/>
                      <stop offset="1" stopColor="#C31162"/>
                    </linearGradient>
                    <linearGradient id="fp4" x1="0" y1="0" x2="1" y2="-1">
                      <stop offset="0" stopColor="#00F076"/>
                      <stop offset="1" stopColor="#00A04C"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#fp1)" d="M65 36c-7 4-11 11-11 21v398c0 10 4 17 11 21l232-232z"/>
                  <path fill="url(#fp2)" d="M373 184l-76 72 76 72 81-45c23-13 23-41 0-54z"/>
                  <path fill="url(#fp3)" d="M297 256L65 488c8 4 17 3 26-2l282-158z"/>
                  <path fill="url(#fp4)" d="M297 256L91 24c-9-5-18-6-26-2l232 232z"/>
                </svg>
                <span className="flex flex-col leading-tight">
                  <span className="text-[9px] text-ink-300">Get it on</span>
                  <span className="text-xs font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-[11px] uppercase tracking-[0.12em] text-ink-400 font-semibold mb-4">
              Product
            </h2>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-700 hover:text-ink-900 transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-ink-700 hover:text-ink-900 transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-ink-700 hover:text-ink-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="row-span-2 sm:row-span-1">
            <h2 className="text-[11px] uppercase tracking-[0.12em] text-ink-400 font-semibold mb-4">
              Features
            </h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/features/${f.slug}`}
                    className="text-sm text-ink-700 hover:text-ink-900 transition-colors"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-start-1 sm:col-start-auto">
            <h2 className="text-[11px] uppercase tracking-[0.12em] text-ink-400 font-semibold mb-4">
              Legal
            </h2>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-700 hover:text-ink-900 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-100 flex flex-col sm:flex-row justify-between gap-4 text-xs text-ink-400">
          <span>© {new Date().getFullYear()} Bench LLC. All rights reserved.</span>
          <span className="bench-gradient-text font-semibold">Made for the love of lifting.</span>
        </div>
      </div>
    </footer>
  );
}
