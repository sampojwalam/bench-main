import { ExerciseLibraryPage } from "@/components/features/ExerciseLibraryPage";
import { WorkoutLibraryPage } from "@/components/features/WorkoutLibraryPage";
import { ProgressAnalyticsPage } from "@/components/features/ProgressAnalyticsPage";
import { WorkoutTrackingPage } from "@/components/features/WorkoutTrackingPage";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import {
  WebAppButton,
  StoreButtonGroup,
} from "@/components/StoreButtons";
import {
  PhoneMockup,
  ScreenshotPlaceholder,
} from "@/components/Placeholder";
import { Icon } from "@/components/Icon";
import { features, featureBySlug } from "@/lib/features";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = featureBySlug(params.slug);
  if (!f) return {};
  return {
    title: f.name,
    description: f.slug === "workout-tracking"
      ? "Log your sets, follow your routine, and keep track of your rest with Bench. Unlimited workout tracking on iOS, Android, and the web."
      : f.slug === "analytics"
        ? "Track your strength, multi-rep maxes, workout totals, and training volume by muscle group with Bench Progress Analytics."
        : f.slug === "workout-library"
          ? "Build custom workout routines, explore public workouts, save your favorites, and share a workout link anyone can view without logging in."
          : f.slug === "exercise-library"
            ? "Explore over 400 exercises for weighted, bodyweight, timed, and cardio training. Search the library and build custom exercises with Bench."
            : f.tagline,
  };
}

export default function FeaturePage({
  params,
}: {
  params: { slug: string };
}) {
  const feature = featureBySlug(params.slug);
  if (!feature) notFound();
  if (feature.slug === "workout-tracking") return <WorkoutTrackingPage />;
  if (feature.slug === "analytics") return <ProgressAnalyticsPage />;
  if (feature.slug === "workout-library") return <WorkoutLibraryPage />;
  if (feature.slug === "exercise-library") return <ExerciseLibraryPage />;

  const idx = features.findIndex((f) => f.slug === feature.slug);
  const next = features[(idx + 1) % features.length];

  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-28 pb-12 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] bg-bench-radial-soft blur-2xl" />
        </div>
        <Link
          href="/features"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All features
        </Link>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bench-gradient text-white mb-6">
              <Icon name={feature.icon} size={28} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.05] text-ink-900">
              {feature.name}
            </h1>
            <p className="mt-6 text-xl text-ink-700 text-pretty max-w-xl">
              {feature.tagline}
            </p>
            <p className="mt-4 text-ink-500 text-pretty max-w-xl leading-relaxed">
              {feature.longDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <WebAppButton />
              <Button
                href="/download"
                variant="ghost"
                className="!px-5 !py-3 !text-base !rounded-2xl"
              >
                Get the app
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-10 -z-10 bg-bench-radial-soft blur-2xl opacity-90" />
              {feature.mockup ? (
                <div className="mx-auto max-w-xs">
                  <Image
                    src={feature.mockup.src}
                    alt={feature.mockup.alt}
                    width={722}
                    height={1500}
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 240px"
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <PhoneMockup
                  label={`${feature.shortName} preview`}
                  className="mx-auto max-w-xs"
                />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section className="py-24">
        <div className="max-w-2xl">
          <Eyebrow>What's inside</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
            Every capability, in detail.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {feature.capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-ink-100 bg-white shadow-card hover:shadow-cardHover hover:border-ink-200 transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-ink-50 border border-ink-100 text-bench-purple mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7L6 10L11 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-ink-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* VISUAL SECTION */}
      <Section className="py-24">
        <div className="relative rounded-3xl border border-ink-100 bg-ink-50 p-6 sm:p-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bench-purple/12 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bench-blue/12 blur-[100px]" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>In the app</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-balance text-ink-900">
                Designed to feel invisible.
              </h2>
              <p className="mt-4 text-ink-500 max-w-md">
                Every Bench screen is built with the same principle — show you
                what you need, get out of your way for everything else.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ScreenshotPlaceholder label={`${feature.shortName} view 1`} aspect="tall" />
              <ScreenshotPlaceholder label={`${feature.shortName} view 2`} aspect="tall" className="mt-8" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-200 bg-white p-10 sm:p-16 text-center">
          <div className="absolute inset-0 -z-10 bench-gradient opacity-[0.08]" />
          <div className="absolute inset-0 -z-10 bg-grid bg-grid opacity-40 grid-mask" />
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
            Try {feature.name.toLowerCase()} today.
          </h2>
          <p className="mt-4 text-ink-500 max-w-xl mx-auto">
            Free to start. Available on iOS, Android, and on the web.
          </p>
          <StoreButtonGroup className="mt-9" />

        </div>
      </Section>

      {/* NEXT FEATURE */}
      <Section className="pb-24">
        <Link
          href={`/features/${next.slug}`}
          className="group block rounded-2xl border border-ink-100 bg-white shadow-card hover:shadow-cardHover hover:border-ink-200 transition-all p-6 sm:p-8"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.12em] text-ink-400">
                Next feature
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-ink-900">
                {next.name}
              </div>
              <div className="mt-1 text-sm text-ink-500 max-w-lg">
                {next.tagline}
              </div>
            </div>
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ink-50 border border-ink-100 text-ink-900 group-hover:bench-gradient group-hover:text-white group-hover:border-transparent transition-all">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      </Section>
    </>
  );
}
