import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import { DirectoryLauncher } from "./exercise-directory/DirectoryLauncher";
import styles from "./WorkoutTrackingPage.module.css";
import exercises from "./ExerciseLibraryPage.module.css";

const types = [
  { id: "weighted", title: "Weighted", example: "Barbell bench press", copy: "Keep track of the weight and reps behind your strength gains." },
  { id: "bodyweight", title: "Bodyweight", example: "Push-up", copy: "Make every rep count, even when you’re training without weights." },
  { id: "timed", title: "Timed", example: "Plank", copy: "Track how long you hold on and see your endurance build." },
  { id: "cardio", title: "Cardio", example: "Running", copy: "Record duration and calories burned alongside your strength work." },
];

export function ExerciseLibraryPage() {
  return (
    <div className={`${styles.page} ${exercises.page}`}>
      <Section className={styles.hero}>
        <Link href="/features" className={styles.back}>← All features</Link>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.featureIcon} aria-hidden="true"><Icon name="list_alt" size={28} /></div>
            <h1>Exercise Library</h1>
            <p className={styles.lead}>Find the right movement for your next set.</p>
            <p>Explore over 400 built-in exercises, from familiar lifts to new variations. Find what fits your routine, or create an exercise of your own.</p>
            <div className={styles.heroActions}><WebAppButton /><Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button></div>
          </div>
          <div className={styles.heroStage}>
            <div className={styles.heroHalo} aria-hidden="true" />
            <Image src="/screenshots/exercise-library-mockup.png" alt="Bench exercise library with illustrated exercises and muscle group labels" width={722} height={1500} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} />
          </div>
        </div>
      </Section>
      <Section className={styles.storySection}>
        <article className={exercises.typesPanel}>
          <div className={exercises.typesIntro}><span className={styles.step}>01 / EXERCISE TYPES</span><h2>Different movements.<br />One place to track them.</h2><p>Heavy lifts, bodyweight sessions, timed holds, and cardio. Build a routine that reflects all the ways you train.</p></div>
          <div className={exercises.typeGrid}>{types.map(type => <div key={type.id} className={exercises.typeCard}>
            <Image src={`/screenshots/exercise-library/${type.id}.webp`} alt="" width={320} height={240} sizes="(min-width: 640px) 200px, 150px" className={exercises.typeImage} />
            <h3>{type.title}</h3><span className={exercises.example}>Example: {type.example}</span><p>{type.copy}</p>
          </div>)}</div>
        </article>
        <article className={exercises.findPanel}>
          <div className={exercises.findGrid}>
            <div className={styles.panelCopy}><span className={styles.step}>02 / FIND YOUR NEXT EXERCISE</span><h2>The exercise you need.<br />Easy to find.</h2><p>Find a lift by name or explore movements for the muscles you want to train. Discover variations that help you build a routine around your goals.</p><div className={styles.detail}><strong>Explore the built-in library.</strong><p>Browse the directory below to find exercises by name, type, or muscle group. Save your favorites into a routine in Bench.</p></div></div>
            <div className={styles.routineStage}><Image src="/screenshots/exercise-library/exercise_catalog_search.webp" alt="Searching the Bench exercise catalog for bench press variations" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={styles.routineImage} /></div>
          </div>
          <DirectoryLauncher />
        </article>
        <article className={styles.restPanel}>
          <div className={styles.panelCopy}><span className={styles.step}>03 / CUSTOM EXERCISES</span><h2>Your exercise.<br />A place in your routine.</h2><p>Have a favorite variation that isn’t in the library? Create a custom exercise and start tracking your progress with it.</p><div className={styles.detail}><strong>Make room for how you train.</strong><p>Bench supports custom weighted, bodyweight, timed, and cardio exercises. Your routine doesn’t have to stop at the built-in list.</p></div><Link href="/features/workout-library" className={styles.textLink}>Build your workout routine <span aria-hidden="true">→</span></Link></div>
          <div className={styles.routineStage}><Image src="/screenshots/exercise-library/create_custom_exercise.webp" alt="Bench custom exercise form creating a Barbell Box Squat with legs and glutes selected" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={`${styles.routineImage} ${exercises.customPhone}`} /></div>
        </article>
      </Section>
      <Section className={styles.bottomSection}>
        <div className={styles.cta}><h2>Make your next set count.</h2><p>Find your exercises. Build your routine. Get started free.</p><StoreButtonGroup className={styles.storeActions} /></div>
        <Link href="/features/goals" className={styles.next}><div><span className={styles.step}>UP NEXT</span><h3>Give your training a target.</h3><p>Explore Goal Setting</p></div><span aria-hidden="true" className={styles.nextArrow}>→</span></Link>
      </Section>
    </div>
  );
}
