import { Button } from "./Button";
import type { ReactNode } from "react";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/app/id1608629087"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 text-white hover:bg-ink-700 transition-colors px-4 py-2.5 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.6 105.6c30.3-36 27.5-68.8 26.6-80.6-26.7 1.5-57.5 18.1-75.1 38.6-19.4 21.9-30.8 49-28.3 79.9 28.9 2.2 55.2-12.7 76.8-37.9z" />
      </svg>
      <span className="text-sm font-semibold">App Store</span>
    </a>
  );
}

export function PlayStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.thebenchapp.bench"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 text-white hover:bg-ink-700 transition-colors px-4 py-2.5 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 512 512" fill="none">
        <defs>
          <linearGradient id="sb1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00C3FF" />
            <stop offset="1" stopColor="#1A73E8" />
          </linearGradient>
          <linearGradient id="sb2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFCE00" />
            <stop offset="1" stopColor="#FFA200" />
          </linearGradient>
          <linearGradient id="sb3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="sb4" x1="0" y1="0" x2="1" y2="-1">
            <stop offset="0" stopColor="#00F076" />
            <stop offset="1" stopColor="#00A04C" />
          </linearGradient>
        </defs>
        <path fill="url(#sb1)" d="M65 36c-7 4-11 11-11 21v398c0 10 4 17 11 21l232-232z" />
        <path fill="url(#sb2)" d="M373 184l-76 72 76 72 81-45c23-13 23-41 0-54z" />
        <path fill="url(#sb3)" d="M297 256L65 488c8 4 17 3 26-2l282-158z" />
        <path fill="url(#sb4)" d="M297 256L91 24c-9-5-18-6-26-2l232 232z" />
      </svg>
      <span className="text-sm font-semibold">Google Play</span>
    </a>
  );
}

export function WebAppButton({ className = "" }: { className?: string }) {
  return (
    <Button
      href="https://app.benchgymlog.com/signup"
      external
      variant="primary"
      className={`!px-4 !py-2.5 !text-sm !rounded-xl ${className}`}
      icon={
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M3 9H15M15 9L9.5 3.5M15 9L9.5 14.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Get Started on Web
    </Button>
  );
}

/**
 * Responsive button group: App Store + Play Store side by side on mobile,
 * with Get Started on Web below them. On sm+ screens, all three sit in a row.
 */
export function StoreButtonGroup({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}
    >
      <div className="flex gap-3">
        <AppStoreButton />
        <PlayStoreButton />
      </div>
      <WebAppButton />
      {children}
    </div>
  );
}
