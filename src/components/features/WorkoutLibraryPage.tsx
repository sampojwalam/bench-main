import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";
import library from "./WorkoutLibraryPage.module.css";

const exampleWorkout = "https://app.benchgymlog.com/workout/YAWgvfcqCls3EpYmCx2a";

export function WorkoutLibraryPage() {
  return (
    <div className={`${styles.page} ${library.page}`}>
      <Section className={styles.hero}>
        <Link href="/features" className={styles.back}>← All features</Link>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.featureIcon} aria-hidden="true"><Icon name="explore" size={28} /></div>
            <h1>Workout Library</h1>
            <p className={styles.lead}>A good workout is worth keeping.</p>
            <p>Build routines around the way you train, find new ideas from other lifters, and share your favorites with anyone.</p>
            <div className={styles.heroActions}>
              <WebAppButton />
              <Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button>
            </div>
          </div>
          <div className={styles.heroStage}>
            <div className={styles.heroHalo} aria-hidden="true" />
            <Image src="/screenshots/workout-library/public_workout_list.webp" alt="Bench public workout library with routines to explore" width={1024} height={2064} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} />
          </div>
        </div>
      </Section>

      <Section className={styles.storySection}>
        <article className={styles.routinePanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>01 / BUILD YOUR ROUTINE</span>
            <h2>Your workout.<br />Your way.</h2>
            <p>Put your plan together before you get to the gym. Choose your exercises, arrange them in order, and set up the work ahead.</p>
            <ul className={styles.setDetails}>
              <li><span aria-hidden="true">01</span><div><strong>Set the details once</strong><p>Choose set counts and rest times for your exercises so your routine is ready when you are.</p></div></li>
              <li><span aria-hidden="true">02</span><div><strong>Build a library you’ll come back to</strong><p>Save your favorite sessions and reuse them without rebuilding your plan each time.</p></div></li>
              <li><span aria-hidden="true">03</span><div><strong>Keep it private or make it public</strong><p>Your personal routines can stay just for you. Publish the ones you’d like to share.</p></div></li>
            </ul>
          </div>
          <div className={styles.routineStage}>
            <Image src="/screenshots/workout-library/create_workout.webp" alt="Creating a Leg Day workout in Bench with exercises, set counts, and rest times" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={styles.routineImage} />
          </div>
        </article>

        <article className={styles.restPanel}>
          <div className={styles.panelCopy}>
            <span className={styles.step}>02 / DISCOVER & MAKE IT YOURS</span>
            <h2>A fresh idea for<br />your next session.</h2>
            <p>Explore workouts from other lifters when you want a new routine or a different approach to your training.</p>
            <div className={styles.detail}><strong>Know what you’re getting into.</strong><p>Preview the exercises, sets, and rest times to find a workout that fits your goals.</p></div>
            <div className={styles.detail}><strong>Save a copy. Make it fit.</strong><p>Download a public workout to your profile, then customize your copy for the way you train.</p></div>
          </div>
          <div className={styles.routineStage}>
            <Image src="/screenshots/workout-library/public_workout_preview.webp" alt="Bench public workout preview showing the routine details and options to download or share" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={`${styles.routineImage} ${library.previewPhone}`} />
          </div>
        </article>

        <article className={library.shareCard}>
          <div className={library.shareIntro}>
            <div><span className={styles.step}>03 / SHARE YOUR WORKOUT</span><h2>Your routine, shared.<br />One simple link.</h2></div>
            <div><p>Send your public workout to a friend, your training group, or anyone who asks for your routine. They can open the link and see the whole workout in their browser—no Bench account, app download, or login needed to view it.</p>
              <a href={exampleWorkout} target="_blank" rel="noopener noreferrer" className={styles.textLink}>Try a shared workout <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className={library.webStage}>
            <div className={library.browserFrame}>
              <div className={library.browserBar} aria-hidden="true"><span className={library.dots}><i /><i /><i /></span><span className={library.address}>app.benchgymlog.com/workout/…</span><span className={library.barSpacer} /></div>
              <Image src="/screenshots/workout-library/pull-day-public.png" alt="Public web view of Beginner’s Pull Day Routine by Bench Official, with all five exercises visible and Sign Up and Log In links showing that the viewer is signed out" width={1200} height={760} sizes="(min-width: 1280px) 1080px, (min-width: 1024px) 85vw, 90vw" unoptimized className={library.webImage} />
            </div>
          </div>
        </article>
      </Section>

      <Section className={styles.bottomSection}>
        <div className={styles.cta}>
          <h2>Make your next set count.</h2>
          <p>Build your next routine. Find a new favorite. Get started free.</p>
          <StoreButtonGroup className={styles.storeActions} />
        </div>
        <Link href="/features/exercise-library" className={styles.next}>
          <div><span className={styles.step}>UP NEXT</span><h3>Find the right exercises for your routine.</h3><p>Explore Exercise Library</p></div>
          <span aria-hidden="true" className={styles.nextArrow}>→</span>
        </Link>
      </Section>
    </div>
  );
}
