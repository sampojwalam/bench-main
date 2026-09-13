import { SiteStructuredData } from "@/components/SiteStructuredData";
import { pageMetadata, HOME_TITLE, HOME_DESCRIPTION } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { StoreButtonGroup } from "@/components/StoreButtons";
import styles from "./home.module.css";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata(HOME_TITLE, HOME_DESCRIPTION, "/");

function BrowserPreview({ hero = false }: { hero?: boolean }) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserBar} aria-hidden="true">
        <div className={styles.browserDots}><span /><span /><span /></div>
        <div className={styles.browserAddress}><Icon name="lock" size={12} />app.benchgymlog.com</div>
        <Icon name="open_in_full" size={13} />
      </div>
      <Image src="/screenshots/dashboard.png" alt="Bench web dashboard showing workout totals, exercise stats, volume distribution, and training history" width={1824} height={1026} priority={hero} sizes="(min-width: 1280px) 1152px, 95vw" className={styles.dashboard} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteStructuredData />
      {/* ============== HERO ============== */}
      <section className={`${styles.hero} relative overflow-hidden pb-24`} >
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
          <h1 className={`${styles.heroTitle} font-bold tracking-tight text-ink-900 animate-fade-up`}>
            <span className="block">Meet your new</span>
            <span className={`${styles.heroTitleAccent} block bench-gradient-text`}>
              gym companion.
            </span>
          </h1>

          <p
            className={`${styles.heroIntro} text-ink-500 mx-auto animate-fade-up`}
            style={{ animationDelay: "80ms" }}
          >
            Log your lifts, understand your progress, create and share
            workouts, set goals that matter to you, and join a community of
            serious lifters.
          </p>

          <div
            className="mt-7 sm:mt-9 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <StoreButtonGroup className={styles.heroButtons} />
          </div>

          {/* Rating row hidden while trying a cleaner hero.
          <div
            className={`${styles.heroRating} text-xs text-ink-500 animate-fade-up`}
            style={{ animationDelay: "240ms" }}
          >
            <span className="relative inline-flex shrink-0" aria-label="Rated 4.7 out of 5">

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
            <span className="whitespace-nowrap">Loved by lifters worldwide. Free to use.</span>
          </div>
          */}

          {/* Product screenshots sit together on a soft, raised stage. */}
          <div className={`${styles.heroStage} mt-10 sm:mt-12 animate-fade-up`} style={{ animationDelay: "320ms" }}>
            <div className={styles.heroBrowser}><BrowserPreview hero /></div>
            <div className={styles.heroPhone}>
              <Image src="/screenshots/log-workout-mockup.png" alt="Bench iPhone app logging warmup and working sets" width={722} height={1500} priority sizes="(min-width: 1024px) 250px, (min-width: 640px) 190px, 120px" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== DEVICE STRIP ============== */}
      <Section className="border-y border-ink-100 bg-ink-50/60">
        <div className={styles.deviceStrip}>
          <p className="font-semibold text-ink-900">One Account. All Your Devices.</p>
          {[
            { icon: "phone_iphone", text: "Made for the gym floor" },
            { icon: "desktop_windows", text: "See the bigger picture" },
            { icon: "done_all", text: "Automatically synced" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-ink-500"><span aria-hidden="true" className="inline-flex shrink-0 items-center leading-none text-ink-400"><Icon name={icon} size={22} /></span><span>{text}</span></div>
          ))}
        </div>
      </Section>

      {/* ============== FEATURE SPOTLIGHTS ============== */}
      <Section className="py-20 sm:py-28">
        <div className={styles.spotlightGrid}>
          <article className={`${styles.featureCard} ${styles.trackingCard}`}>
            <div className={styles.featureCopy}>
              <span className={styles.featureLabel}>01 / WORKOUT TRACKING</span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
                Log a set in <span className="bench-gradient-text">one tap.</span>
              </h2>
              <p className="mt-5 text-lg text-ink-500 text-pretty">
                Log your sets, check exercise history and stats, and keep
                track of rest. Follow a routine or build your session as you go.
              </p>
              <div className="mt-8"><Button href="/features/workout-tracking" variant="ghost">Explore workout tracking</Button></div>
            </div>
            <div className={`${styles.phoneStage} ${styles.purpleStage}`}>
              <Image src="/screenshots/log-workout-mockup.png" alt="Bench mobile workout log with warmup and working sets" width={722} height={1500} sizes="(min-width: 640px) 270px, 225px" className={`${styles.cardPhone} ${styles.tiltRight}`} />
            </div>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureCopy}>
              <span className={styles.featureLabel}>02 / PROGRESS ANALYTICS</span>
              <h2 className={`${styles.cardHeading} mt-5 tracking-tight text-balance text-ink-900`}>
                See how your training adds up.
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed">
                Follow strength trends, check multi-rep maxes, and see how
                your training volume is distributed across muscle groups.
              </p>
              <div className="mt-8"><Button href="/features/analytics" variant="ghost">Explore analytics</Button></div>
            </div>
            <div className={`${styles.phoneStage} ${styles.purpleStage}`}>
              <Image src="/screenshots/analytics-mockup.png" alt="Bench mobile analytics showing volume distribution across muscle groups" width={722} height={1500} sizes="(min-width: 640px) 270px, 225px" className={`${styles.cardPhone} ${styles.tiltLeft}`} />
            </div>
          </article>

          {[
            {
              eyebrow: "Goals", title: "Stay accountable to a target.",
              copy: "Build consistency, work toward strength milestones, or focus on a muscle group. Bench tracks goal progress from your logged workouts.",
              href: "/features/goals", cta: "Explore goal setting", image: "goals",
              alt: "Bench mobile app showing progress toward a training goal", blue: true,
            },
            {
              eyebrow: "Workout library", title: "Discover workouts from real lifters.",
              copy: "Build your own routines or discover workouts from other lifters. Preview a public workout, save a copy, and make it your own.",
              href: "/features/workout-library", cta: "Explore workout library", image: "workout-library",
              alt: "Bench mobile app showing a community workout and its exercises", blue: true,
            },
            {
              eyebrow: "Social", title: "You lift harder when you're not alone.",
              copy: "Share routines, exercises, completed sessions, and profiles in chat. Send public workout and profile links anyone can view.",
              href: "/features/social", cta: "Explore social features", image: "social",
              alt: "A direct message conversation between lifters in Bench", blue: false,
            },
            {
              eyebrow: "History", title: "Every session, forever.",
              copy: "Find past sessions in calendar or list view and revisit your sets, reps, and notes. Your entire workout history is included free.",
              href: "/features/history", cta: "Explore workout history", image: "history",
              alt: "Bench workout history showing a calendar of completed sessions", blue: false,
            },
            {
              eyebrow: "Exercise library", title: "A place for every movement.",
              copy: "Explore over 400 exercises or create your own. Find movements for weighted, bodyweight, timed, and cardio training.",
              href: "/features/exercise-library", cta: "Explore exercise library", image: "exercise-library",
              alt: "Bench exercise library organized by muscle group", blue: true,
            },
          ].map((card, index) => (
            <article key={card.href} className={styles.featureCard}>
              <div className={styles.featureCopy}>
                <span className={styles.featureLabel}>{String(index + 3).padStart(2, "0")} / {card.eyebrow}</span>
                <h3 className={`${styles.cardHeading} mt-5 tracking-tight text-balance text-ink-900`}>{card.title}</h3>
                <p className="mt-4 text-ink-500 leading-relaxed">{card.copy}</p>
                <div className="mt-8"><Button href={card.href} variant="ghost">{card.cta}</Button></div>
              </div>
              <div className={`${styles.phoneStage} ${card.blue ? styles.blueStage : styles.purpleStage}`}>
                <Image src={`/screenshots/${card.image}-mockup.png`} alt={card.alt} width={card.image === "goals" ? 723 : 722} height={1500} sizes="(min-width: 640px) 270px, 225px" className={`${styles.cardPhone} ${index % 2 === 0 ? styles.tiltRight : styles.tiltLeft}`} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============== BENCH ON THE WEB ============== */}
      <Section id="bench-on-web" className="py-20 sm:py-28 border-y border-ink-100 bg-ink-50/70 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end mb-12">
          <div>
            <Eyebrow>Meet Bench on the web</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">
              See the<br /><span className="bench-gradient-text">bigger picture.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-ink-500 text-pretty">
              Review your history, build your routines, and explore your progress
              with room to breathe. Sign in with the same account you use on mobile.
            </p>
            <div className="mt-7"><Button href="https://app.benchgymlog.com/signup" external variant="ghost">Get Started on Web</Button></div>
          </div>
        </div>
        <div className={styles.webStage}><BrowserPreview /></div>
      </Section>

      {/* ============== FAQ ============== */}
      <Section className="pt-20 sm:pt-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-20">
          <div>
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-balance text-ink-900">A little more about Bench.</h2>
            <p className="mt-5 text-ink-500">Need a hand? <Link className="underline underline-offset-4 hover:text-ink-900" href="/contact">Get in touch.</Link></p>
          </div>
          <div className={styles.faqList}>
            {[
              ["Can I use Bench for free?", "Yes. Bench is built to give most lifters everything they need for free, including unlimited workout logging, your complete workout history, and detailed exercise stats. Premium is an optional upgrade for those who want a few extras."],
              ["Can I use the same account on mobile and web?", "Yes. Sign in with the same Bench account on iOS, Android, and the web to access your saved workouts, goals, and training history across your devices."],
              ["Can I create my own workout routines?", "Yes. Choose exercises, plan your sets and rep ranges, and save the routine to your library. You can also explore public workouts shared by other lifters."],
              ["Do I have to share my workouts?", "No. You can create private workout routines that are only visible to you. Publishing routines and connecting with other lifters are optional."],
              ["Can I track cardio with Bench?", "Yes. Bench allows you to track the duration and calories burned for several popular forms of cardio. You can also create your own custom cardio exercises and include them in your routine."],
              ["Can I create my own exercises?", "Yes. Create custom exercises and track your progress over time. Bench supports weighted, bodyweight, time-based, and cardio exercises."],
              ["Is Bench just for experienced lifters?", "No. Start with a simple workout log whether you’re learning your first lifts or following an established program. Explore stats and goals as your training history grows."],
            ].map(([question, answer]) => (
              <details key={question} className={styles.faqItem}>
                <summary className="text-base sm:text-lg font-medium text-ink-900"><span>{question}</span><span className={styles.faqIcon} aria-hidden="true"><Icon name="add" size={22} /></span></summary>
                <p className="pb-6 pr-8 text-base text-ink-500 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ============== FINAL CTA ============== */}
      <Section className="pt-14 pb-20 sm:py-28">
        <div className={`${styles.downloadCard} relative overflow-hidden rounded-[2rem] border border-ink-200 px-5 py-10 sm:px-8 sm:py-16 md:p-16 text-center`}>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance text-ink-900">
            Make your next set count.
          </h2>
          <p className="mt-5 text-lg text-ink-500 max-w-xl mx-auto text-pretty">
            Get started for free in under a minute. Available on iOS, Android,
            and on the web.
          </p>
          <StoreButtonGroup className={`${styles.heroButtons} mt-8 sm:mt-10`} />
        </div>
      </Section>
    </>
  );
}
