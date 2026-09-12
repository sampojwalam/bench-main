import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import styles from "./download.module.css";
import { DownloadQRCodes } from "./DownloadQRCodes";
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
    "Get Bench Gym Log on iOS, Android, or use it instantly on the web. Track workouts for free and keep your training in sync across devices.",
};

export default function DownloadPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] bg-bench-radial-soft blur-2xl" />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Eyebrow>Download Bench</Eyebrow>
            <h1 className={`${styles.title} mt-5 font-bold tracking-tight text-balance text-ink-900`}>
              Get Bench on <span className="bench-gradient-text">every device.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-ink-500 text-pretty max-w-xl mx-auto lg:mx-0">
              Start tracking for free on iOS, Android, or the web. Sign in with
              the same account to keep your training in sync across devices.
            </p>
            <StoreButtonGroup className={`${styles.actions} mt-7`} />

            <p className="mt-6 text-sm text-ink-500">
              Already have an account?{" "}
              <a
                href="https://app.benchgymlog.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-900 underline underline-offset-4 font-medium whitespace-nowrap"
              >
                Log in →
              </a>
            </p>
          </div>
          <div className={styles.phoneStage}>
            <Image
              src="/screenshots/summary-mockup.png"
              alt="Bench mobile summary showing workout totals, training volume, and exercise stats"
              width={722}
              height={1500}
              priority
              sizes="(min-width: 1024px) 280px, 220px"
              className={styles.phone}
            />
          </div>
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 text-center">Choose your platform</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
              title: "iOS", icon: "phone_iphone",
              copy: "Keep your workout log close on iPhone and iPad, from your first warm-up to your last set.",
              btn: <AppStoreButton />,
            },
            {
              title: "Android", icon: "android",
              copy: "Track your training on your Android phone or tablet, with your routines and history at hand.",
              btn: <PlayStoreButton />,
            },
            {
              title: "Web", icon: "desktop_windows",
              copy: "Log workouts, build routines, and explore your progress in your browser. No download needed.",
              btn: <WebAppButton />,
            },
          ].map((c) => (
            <article
              key={c.title}
              className={`${styles.platformCard} rounded-2xl border border-ink-100 bg-white shadow-card p-6 flex flex-col`}
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex items-center justify-center w-10 h-10 rounded-xl bg-ink-50 text-bench-primary"><Icon name={c.icon} size={24} /></span>
                <h3 className="text-xl font-semibold text-ink-900">{c.title}</h3>
              </div>
              <p className="mt-4 text-ink-500 leading-relaxed flex-1">{c.copy}</p>
              <div className={`${styles.platformActions} mt-6`}>
                {c.btn}
                {(c.title === "iOS" || c.title === "Android") && <DownloadQRCodes initialPlatform={c.title} />}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
