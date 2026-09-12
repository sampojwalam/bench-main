import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";

export function WorkoutTrackingPage() {
  return (
    <div className={styles.page}>
      <Section className={styles.hero}>
        <Link href="/features" className={styles.back}>← All features</Link>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.featureIcon}><Icon name="fitness_center" size={28} /></div>
            <h1>Workout Tracking</h1>
            <p className={styles.lead}>Your next set deserves your full attention.</p>
            <p>Log your reps, keep track of your rest, and move through your workout with everything you need in one place.</p>
            <div className={styles.heroActions}>
              <WebAppButton />
              <Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button>
            </div>
          </div>
          <div className={styles.heroStage}>
            <div className={styles.heroHalo} aria-hidden="true" />
            <Image src="/screenshots/log-workout-mockup.png" alt="Bench workout tracker showing a Barbell Back Squat and logged sets" width={722} height={1500} sizes="(min-width: 1024px) 290px, 240px" priority className={styles.phone} />
          </div>
        </div>
      </Section>

      <Section className={styles.storySection}>
        <article className={styles.routinePanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>01 / GET STARTED</span>
            <h3>Follow a plan.<br />Or play it by ear.</h3>
            <p>Start with a saved routine, or open an empty workout and add exercises as you go.</p>
            <div className={styles.detail}>
              <strong>Make room for today.</strong>
              <p>Reorder, add, or remove exercises in your workout preview before you start.</p>
            </div>
            <Link href="/features/workout-library" className={styles.textLink}>Explore workout routines <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.routineStage}>
            <Image src="/screenshots/workout-tracking/routine-phone.webp" alt="Workout preview with bench press, military press, incline press, lateral raise and rope pushdown, each with reorder and remove controls" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={styles.routineImage} />
          </div>
        </article>

        <article className={styles.setPanel}>
          <div className={styles.setCopy}>
            <span className={styles.step}>02 / LOG YOUR SETS</span>
            <h3>Your training context.<br />Right where you need it.</h3>
            <p>Log your sets with your exercise history, stats, and notes close at hand. Everything you need to decide what comes next.</p>
            <ul className={styles.setDetails}>
              <li><span aria-hidden="true">01</span><div><strong>See what you did last time</strong><p>Open previous workouts with your current exercise highlighted so it’s easy to find.</p></div></li>
              <li><span aria-hidden="true">02</span><div><strong>Know your numbers</strong><p>Check stats for the selected exercise, including your multi-rep maxes.</p></div></li>
              <li><span aria-hidden="true">03</span><div><strong>Keep the details that matter</strong><p>Add notes to remember your setup, technique cues, or how an exercise felt.</p></div></li>
            </ul>
          </div>
          <div className={styles.setStage}>
            <Image src="/screenshots/workout-tracking/rep-max-clean.webp" alt="Bench multi-rep max popup showing a new 8-rep max and personal records from 1 to 15 reps" width={1062} height={1246} sizes="(min-width: 540px) 365px, 75vw" className={styles.setImage} />
          </div>
        </article>

        <article className={styles.restPanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>03 / TAKE YOUR REST</span>
            <h3>Catch your breath.<br />Keep your rhythm.</h3>
            <p>Use the built-in rest timer between efforts. Open it when you need it, or choose to show it after every set.</p>
            <div className={styles.detail}><strong>Your rest, your pace.</strong><p>Set rest durations for your exercises. The timer keeps going even when you switch apps, and a notification lets you know when your rest is over.</p></div>
          </div>
          <div className={styles.timerStage}>
            <Image src="/screenshots/workout-tracking/timer.webp" alt="Bench rest timer showing 1 minute 45 seconds and the option to show the timer after every set" width={1014} height={1334} sizes="(min-width: 768px) 320px, 75vw" className={styles.timerImage} />
          </div>
        </article>
      </Section>

      <Section className={styles.bottomSection}>
        <div className={styles.cta}>
          <h2>Make your next set count.</h2>
          <p>Unlimited workout logging. Free on iOS, Android, and the web.</p>
          <StoreButtonGroup className={styles.storeActions} />
        </div>
        <Link href="/features/analytics" className={styles.next}>
          <div><span className={styles.step}>UP NEXT</span><h3>Turn your hard work into insight.</h3><p>Explore Progress Analytics</p></div>
          <span aria-hidden="true" className={styles.nextArrow}>→</span>
        </Link>
      </Section>
    </div>
  );
}
