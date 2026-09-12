import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { features } from "@/lib/features";
import styles from "./FeaturesIndex.module.css";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Bench Gym Log: workout tracking, progress analytics, custom routines, over 400 exercises, goals, complete workout history, and sharing with other lifters.",
};

// Index-specific summaries keep the overview concise without changing other pages.
const summaries: Record<string, string> = {
  "workout-tracking": "Log your sets, check exercise history and stats, and keep track of rest. Follow a routine or build your session as you go.",
  analytics: "See your strength trends, multi-rep maxes, and training volume by muscle group. Use your progress to guide what comes next.",
  "workout-library": "Build your own routines, discover public workouts, and save a copy to make your own. Share public routines with a simple link.",
  "exercise-library": "Find what you need among over 400 exercises, or create your own. Track weighted, bodyweight, timed, and cardio movements.",
  goals: "Build consistency with workout, exercise, and muscle group goals. Set strength milestones or recurring targets and follow your progress.",
  history: "Revisit every logged session in calendar or list view, with your entire history included free. Add or edit past logs with Bench Premium.",
  social: "Send routines, exercises, workout logs, and profiles in chat. Share private routine copies by DM, or public workout and profile links anyone can view.",
};

export default function FeaturesIndex() {
  return <>
    <Section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>Everything Bench can do.</h1>
        <p>Plan your workouts, log the work, and see your progress. Explore the tools that help you make the most of every session.</p>
      </div>
    </Section>
    <Section className={styles.section}>
      <div className={styles.grid}>
        {features.map(feature => <Link key={feature.slug} href={`/features/${feature.slug}`} className={styles.card}>
          <span className={styles.icon} aria-hidden="true"><Icon name={feature.icon} size={24} /></span>
          <h2>{feature.name}</h2>
          <p>{summaries[feature.slug]}</p>
          <div className={styles.explore}>Explore {feature.shortName.toLowerCase()}<span aria-hidden="true">→</span></div>
        </Link>)}
      </div>
    </Section>
  </>;
}
