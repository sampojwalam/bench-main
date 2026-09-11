import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { StoreButtonGroup } from "@/components/StoreButtons";
import { PhoneMockup, ScreenshotPlaceholder } from "@/components/Placeholder";
import { Icon } from "@/components/Icon";
import { features } from "@/lib/features";

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-24">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1100px] bg-bench-radial-soft blur-2xl" />
          <div className="absolute inset-0 bg-grid bg-grid opacity-50 grid-mask" />
          <div className="absolute left-[18%] top-40 h-72 w-72 rounded-full bg-bench-purple/15 blur-[120px] animate-glow" />
          <div className="absolute right-[16%] top-60 h-72 w-72 rounded-full bg-bench-blue/15 blur-[120px] animate-glow" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h1 className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-ink-900 animate-fade-up">
            <span className="block">Meet your new</span>
            <span className="block bench-gradient-text mt-2 sm:mt-3 md:mt-4 leading-[1.15] pb-2">
              gym companion.
            </span>
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-ink-500 max-w-2xl mx-auto text-pretty animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Log your lifts, understand your progress, create and share
            workouts, set goals that matter to you, and join a community of
            serious lifters.
          </p>

          <div
            className="mt-10 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <StoreButtonGroup />
          </div>

          <div
            className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-500 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <span className="relative inline-flex" aria-label="Rated 4.7 out of 5">
              {/* Base: 5 outline stars */}
              <span
                className="flex gap-0.5 text-ink-200"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
              </span>
              {/* Overlay: 5 filled stars clipped to 94% (4.7/5) */}
              <span
                className="absolute inset-y-0 left-0 flex gap-0.5 text-bench-purple overflow-hidden"
                style={{ width: "94%", fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
                <Icon name="star" size={14} />
              </span>
            </span>
            <span>Loved by lifters worldwide. Free to use</span>
          </div>

          {/* Hero product preview */}
          <div
            className="mt-16 relative animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <div className="absolute inset-x-0 -top-10 bottom-0 -z-10 bench-gradient blur-3xl opacity-[0.10] rounded-full" />
            <div className="mx-auto max-w-5xl">
              <div className="relative rounded-3xl border border-ink-200 bg-white p-3 shadow-cardHover">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-ink-50">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="Bench Gym Log web dashboard showing your training history, charts, and stats"
                    fill
                    priority
                    sizes="(min-width: 1024px) 960px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating phone (mockup image already includes the iPhone frame) */}
              <div className="absolute -right-6 sm:-right-16 -bottom-6 sm:-bottom-10 w-44 sm:w-64 hidden md:block">
                <Image
                  src="/screenshots/log-workout-mockup.png"
                  alt="Bench mobile app showing a workout being logged in real time"
                  width={722}
                  height={1500}
                  priority
                  sizes="(min-width: 640px) 256px, 176px"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS BAR ============== */}
      <Section className="py-16 border-y border-ink-100 bg-ink-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "400+", label: "Built-in exercises" },
            { stat: "1,000+", label: "Public workouts" },
            { stat: "Unlimited", label: "Workout history" },
            { stat: "Zero ads", label: "No distractions" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight bench-gradient-text">
                {s.stat}
              </div>
              <div className="mt-2 text-sm text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============== FEATURES GRID ============== */}
      <Section className="py-28">
        <div className="max-w-2xl">
          <Eyebrow>Built for the gym floor</Eyebrow>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
            Every feature a serious lifter needs.
          </h2>
          <p className="mt-5 text-lg text-ink-500 text-pretty">
            From the first warm-up set to your next PR, Bench captures the data
            and surfaces the insights that make your training compound.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group relative rounded-2xl border border-ink-100 bg-white shadow-card hover:shadow-cardHover hover:border-ink-200 transition-all p-6 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bench-gradient text-white">
                  <Icon name={f.icon} size={22} />
                </span>
                <span className="text-ink-400 text-xs">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink-900">
                {f.name}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {f.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-700 group-hover:text-ink-900 transition-colors">
                Learn more
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

      {/* ============== FEATURE SPOTLIGHT 1 — Tracking ============== */}
      <Section className="py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Workout tracking</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
              Log a set in <span className="bench-gradient-text">one tap.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-500 text-pretty">
              The interface gets out of your way. Tap to log, watch the rest
              timer count down, swap exercises when the machine you wanted is
              taken — and never lose your spot.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Auto-starting rest timers between every set",
                "Mid-workout exercise swaps without data loss",
                "Notes on every set for RPE, tempo, or cues",
                "Past sessions can be logged manually after the fact",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bench-gradient">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/features/workout-tracking" variant="ghost">
                Explore workout tracking
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-bench-radial-soft blur-2xl" />
            <div className="mx-auto max-w-sm">
              <Image
                src="/screenshots/log-workout-mockup.png"
                alt="Bench mobile app workout logging screen"
                width={722}
                height={1500}
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 280px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============== FEATURE SPOTLIGHT 2 — Analytics ============== */}
      <Section className="py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl border border-ink-200 bg-white p-3 shadow-card">
              <ScreenshotPlaceholder label="Strength trend chart" aspect="wide" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <ScreenshotPlaceholder label="Rep-max history" aspect="square" />
              <ScreenshotPlaceholder label="Volume distribution" aspect="square" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Progress analytics</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
              Charts that update <span className="bench-gradient-text">every rep.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-500 text-pretty">
              Every set you log feeds a deep analytics layer. See total volume,
              rep-max history, session count, and how your training balances
              across muscle groups — over any time range.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Per-exercise stats: volume, sets, reps, sessions",
                "Lifetime PR tracking across every rep range",
                "Volume distribution across every muscle group",
                "Filter charts to any custom time range",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bench-gradient">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/features/analytics" variant="ghost">
                Explore analytics
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ============== EXPLORE & COMMUNITY ============== */}
      <Section className="py-28">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 relative rounded-3xl border border-ink-100 bg-ink-50 p-8 sm:p-12 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bench-purple/15 blur-[100px]" />
            <Eyebrow>Workout library</Eyebrow>
            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-balance text-ink-900">
              Discover workouts from real lifters.
            </h3>
            <p className="mt-4 text-ink-500 max-w-lg">
              Browse thousands of public routines, preview the exercises, and
              start them with a single tap. Clone any program to your library
              and make it your own.
            </p>
            <div className="mt-8">
              <ScreenshotPlaceholder label="Explore tab" aspect="wide" />
            </div>
            <div className="mt-6">
              <Button href="/features/workout-library" variant="ghost">
                Browse the library
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl border border-ink-100 bg-ink-50 p-8 sm:p-12 overflow-hidden">
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-bench-blue/15 blur-[100px]" />
            <Eyebrow>Social</Eyebrow>
            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-balance text-ink-900">
              Lift harder when you're not lifting alone.
            </h3>
            <p className="mt-4 text-ink-500">
              Follow lifters, message them directly, and share programs you
              believe in. Bench is a community of people who care about getting
              better.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <ScreenshotPlaceholder label="Profile" aspect="tall" />
              <ScreenshotPlaceholder label="Messages" aspect="tall" />
            </div>
            <div className="mt-6">
              <Button href="/features/social" variant="ghost">
                Meet the community
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ============== GOALS & HISTORY DUO ============== */}
      <Section className="py-28">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              eyebrow: "Goals",
              title: "Stay accountable to a target.",
              copy: "Set strength, volume, or frequency goals. Bench updates progress automatically every time you log a qualifying set.",
              href: "/features/goals",
              cta: "Set a goal",
              label: "Goal progress",
            },
            {
              eyebrow: "History",
              title: "Every session, forever.",
              copy: "Calendar and list views of every workout you've ever logged — accessible from your phone, tablet, or the web.",
              href: "/features/history",
              cta: "View your history",
              label: "Workout calendar",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="relative rounded-3xl border border-ink-100 bg-ink-50 p-8 sm:p-10 overflow-hidden"
            >
              <Eyebrow>{card.eyebrow}</Eyebrow>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink-900">
                {card.title}
              </h3>
              <p className="mt-4 text-ink-500">{card.copy}</p>
              <div className="mt-8">
                <ScreenshotPlaceholder label={card.label} aspect="wide" />
              </div>
              <div className="mt-6">
                <Button href={card.href} variant="ghost">
                  {card.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============== TESTIMONIALS / QUOTE ============== */}
      <Section className="py-24">
        <div className="relative rounded-3xl border border-ink-100 bg-gradient-to-b from-ink-50 to-white p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-x-0 -top-40 h-80 bg-bench-radial-soft blur-3xl opacity-90" />
          <Eyebrow>Why lifters love Bench</Eyebrow>
          <p className="mt-8 text-2xl sm:text-3xl font-medium tracking-tight max-w-3xl mx-auto text-balance leading-snug text-ink-900">
            "The interface gets out of your way. Bench feels like the logger
            <span className="bench-gradient-text"> a serious lifter would build for themselves.</span>"
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ink-500">
            <span className="h-px w-12 bg-ink-200" />
            <span>Bench user · since 2022</span>
            <span className="h-px w-12 bg-ink-200" />
          </div>
        </div>
      </Section>

      {/* ============== FINAL CTA ============== */}
      <Section className="py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-200 bg-white p-10 sm:p-16 text-center">
          <div className="absolute inset-0 -z-10 bench-gradient opacity-[0.08]" />
          <div className="absolute inset-0 -z-10 bg-grid bg-grid opacity-40 grid-mask" />
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance text-ink-900">
            Make your next set count.
          </h2>
          <p className="mt-5 text-lg text-ink-500 max-w-xl mx-auto text-pretty">
            Get started for free in under a minute. Available on iOS, Android,
            and on the web.
          </p>
          <StoreButtonGroup className="mt-10" />
        </div>
      </Section>
    </>
  );
}
