import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";
import analytics from "./ProgressAnalyticsPage.module.css";

export function ProgressAnalyticsPage() {
  return (
    <div className={`${styles.page} ${analytics.page}`}>
      <Section className={styles.hero}>
        <Link href="/features" className={styles.back}>← All features</Link>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.featureIcon} aria-hidden="true"><Icon name="monitoring" size={28} /></div>
            <h1>Progress Analytics</h1>
            <p className={styles.lead}>See what your hard work adds up to.</p>
            <p>Follow your strength, understand your training volume, and see which muscles are getting the work. Your logged workouts tell the story.</p>
            <div className={styles.heroActions}>
              <WebAppButton />
              <Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button>
            </div>
          </div>
          <div className={styles.heroStage}>
            <div className={styles.heroHalo} aria-hidden="true" />
            <Image src="/screenshots/analytics-mockup.png" alt="Bench mobile volume distribution screen showing muscle groups and training volume" width={722} height={1500} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} />
          </div>
        </div>
      </Section>

      <Section className={styles.storySection}>
        <article className={styles.routinePanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>01 / YOUR TRAINING SUMMARY</span>
            <h2>Your training.<br />All in one view.</h2>
            <p>Workouts, sets, reps, and total weight lifted. See your training totals together, then look closer at the exercises behind them.</p>
            <div className={styles.detail}>
              <strong>Look beyond a single session.</strong>
              <p>Choose a time range to review a block of training, or step back for a longer view of your consistency.</p>
            </div>
          </div>
          <div className={styles.routineStage}>
            <Image src="/screenshots/analytics/summary-phone.webp" alt="Bench monthly summary with 23 workouts, 350 sets, 3,011 reps, total weight lifted, and a muscle-group volume chart" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={styles.routineImage} />
          </div>
        </article>

        <article className={styles.setPanel}>
          <div className={styles.setCopy}>
            <span className={styles.step}>02 / STRENGTH & PROGRESSION</span>
            <h2>See how far<br />you’ve come.</h2>
            <p>A heavier single isn’t the only way to get stronger. Track your best lifts across rep counts and follow each exercise over time.</p>
            <ul className={styles.setDetails}>
              <li><span aria-hidden="true">01</span><div><strong>Personal bests across rep ranges</strong><p>See your multi-rep maxes for weighted exercises, from 1 through 15 reps.</p></div></li>
              <li><span aria-hidden="true">02</span><div><strong>Strength trends over time</strong><p>Follow your one-rep max and estimated one-rep max in the exercise stats charts.</p></div></li>
              <li><span aria-hidden="true">03</span><div><strong>The volume behind your progress</strong><p>Explore charts for sets, reps, and training volume alongside your strength stats.</p></div></li>
            </ul>
          </div>
          <div className={styles.setStage}>
            <Image src="/screenshots/workout-tracking/rep-max-clean.webp" alt="Bench personal record popup with a new 8-rep max and best lifts for 1 through 15 reps" width={1062} height={1246} sizes="(min-width: 540px) 365px, 75vw" className={styles.setImage} />
          </div>
        </article>

        <article className={styles.restPanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>03 / VOLUME BY MUSCLE GROUP</span>
            <h2>See where<br />the work is going.</h2>
            <p>Spot muscle groups getting plenty of attention—and the ones you might be overlooking. Use your training volume to plan a more balanced routine.</p>
            <div className={styles.detail}>
              <strong>Give your weak points more attention.</strong>
              <p>See where you’re putting in the work so you can be more deliberate about bringing up lagging muscle groups and exercises.</p>
            </div>
            <div className={styles.detail}>
              <strong>Make your next session more intentional.</strong>
              <p>Look at the exercises behind each muscle group’s total to decide where to add work or ease back. Compare sets or weight lifted, with control over warm-up and bodyweight volume.</p>
            </div>
          </div>
          <div className={analytics.muscleStage}>
            <Image src="/screenshots/analytics/muscle-map.webp" alt="Bench muscle map showing training volume across the front and back of the body" width={1075} height={835} sizes="(min-width: 540px) 350px, 72vw" className={analytics.muscleMap} />
            <Image src="/screenshots/analytics/chest-breakdown.webp" alt="Chest volume breakdown: 77 sets, with 48 sets from barbell bench press and 29 from push-ups" width={1075} height={570} sizes="(min-width: 540px) 365px, 78vw" className={analytics.muscleDetail} />
          </div>
        </article>
      </Section>

      <Section className={styles.bottomSection}>
        <div className={styles.cta}>
          <h2>Make your next set count.</h2>
          <p>Log your workouts. See your progress. Start free on mobile or web.</p>
          <StoreButtonGroup className={styles.storeActions} />
        </div>
        <Link href="/features/workout-library" className={styles.next}>
          <div><span className={styles.step}>UP NEXT</span><h3>Find your next great workout.</h3><p>Explore Workout Library</p></div>
          <span aria-hidden="true" className={styles.nextArrow}>→</span>
        </Link>
      </Section>
    </div>
  );
}
