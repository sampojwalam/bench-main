import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import {
  AppStoreButton,
  PlayStoreButton,
  WebAppButton,
  StoreButtonGroup,
} from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Get Bench Gym Log on iOS, Android, or use it instantly on the web. Free to start, sync across devices.",
};

export default function DownloadPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28 pb-20 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] bg-bench-radial-soft blur-2xl" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Download Bench</Eyebrow>
            <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.05] text-ink-900">
              Get Bench on <span className="bench-gradient-text">every device.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 text-pretty max-w-xl">
              Your workouts and logs are automatically synced across all
              devices so you never lose your data. Choose where you want to
              start.
            </p>
            <StoreButtonGroup className="mt-10 sm:!justify-start" />

            <p className="mt-6 text-sm text-ink-500">
              Already have an account?{" "}
              <a
                href="https://app.benchgymlog.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 hover:underline font-medium"
              >
                Log in →
              </a>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-bench-radial-soft blur-2xl opacity-90" />
            <div className="mx-auto max-w-xs">
              <Image
                src="/screenshots/summary-mockup.png"
                alt="Bench mobile app showing a completed workout summary"
                width={722}
                height={1500}
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 240px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "iOS",
              copy: "iPhone & iPad. Requires iOS 15 or later.",
              btn: <AppStoreButton />,
            },
            {
              title: "Android",
              copy: "Phones & tablets. Requires Android 8.0 or later.",
              btn: <PlayStoreButton />,
            },
            {
              title: "Web",
              copy: "View your progress from any browser. No install required.",
              btn: <WebAppButton />,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-ink-100 bg-white shadow-card p-7 flex flex-col"
            >
              <div className="text-sm uppercase tracking-[0.12em] text-ink-400">
                {c.title}
              </div>
              <div className="mt-3 text-ink-700 flex-1">{c.copy}</div>
              <div className="mt-6">{c.btn}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
