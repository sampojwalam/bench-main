import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";
import social from "./SocialPage.module.css";

export function SocialPage() {
  return <div className={`${styles.page} ${social.page}`}>
    <Section className={styles.hero}>
      <Link href="/features" className={styles.back}>← All features</Link>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.featureIcon} aria-hidden="true"><Icon name="groups" size={28} /></div>
          <h1>Social &amp; Community</h1>
          <p className={styles.lead}>Good training is worth sharing.</p>
          <p>Swap routines with a friend, send your coach a completed session, or pass along an exercise you love. Keep the conversation and the training details together in Bench.</p>
          <div className={styles.heroActions}><WebAppButton /><Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button></div>
        </div>
        <div className={styles.heroStage}><div className={styles.heroHalo} aria-hidden="true" /><Image src="/screenshots/social-mockup.png" alt="Bench chat with a shared Romanian Deadlift exercise and a Leg Day routine" width={722} height={1500} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} /></div>
      </div>
    </Section>
    <Section className={styles.storySection}>
      <article className={styles.restPanel}>
        <div className={styles.panelCopy}><span className={styles.step}>01 / SHARE IN CHAT</span><h2>Talk training.<br />Share the details.</h2><p>Keep your training conversations in Bench. Send the details directly in chat.</p>
          <ol className={styles.setDetails}>
            <li><span aria-hidden="true">01</span><div><strong>Workouts</strong><p>Share a public routine or send a copy of a private one.</p></div></li>
            <li><span aria-hidden="true">02</span><div><strong>Exercises</strong><p>Share a catalog exercise or one you created.</p></div></li>
            <li><span aria-hidden="true">03</span><div><strong>Completed sessions</strong><p>Send a workout log to your training partner or coach.</p></div></li>
            <li><span aria-hidden="true">04</span><div><strong>Profiles</strong><p>Introduce a friend to another lifter on Bench.</p></div></li>
          </ol>
        </div>
        <div className={social.chatStage}><Image src="/screenshots/social/exercise-card.webp" alt="Romanian Deadlift exercise card shared in Bench chat" width={373} height={217} sizes="(min-width: 1024px) 240px, 65vw" className={social.exerciseCard} /><Image src="/screenshots/social/workout-card.webp" alt="Public Beginner’s Leg Day Routine card shared in chat, containing five exercises and nineteen sets" width={438} height={409} sizes="(min-width: 1024px) 250px, 68vw" className={social.workoutCard} /></div>
      </article>
      <article className={styles.routinePanel}>
        <div className={styles.panelCopy}><span className={styles.step}>02 / PUBLIC SHARE LINKS</span><h2>Share a link.<br />Let anyone take a look.</h2><p>Your friends don’t need a Bench account to see what you’ve shared. Public workout and profile links open right in their browser, with no login required.</p>
          <div className={social.linkDetail}><span aria-hidden="true"><Icon name="link" size={22} /></span><div><strong>Put your routine out there.</strong><p>Share a public workout wherever the conversation happens, so anyone can see the plan.</p></div></div>
          <div className={social.linkDetail}><span aria-hidden="true"><Icon name="account_circle" size={22} /></span><div><strong>Make yourself easy to find.</strong><p>Send your public profile link so friends and fellow lifters can find you on Bench.</p></div></div>
          <div className={social.exampleLinks}><a href="https://app.benchgymlog.com/workout/YAWgvfcqCls3EpYmCx2a" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Try a public workout link <span aria-hidden="true">→</span></a>
          <a href="https://app.benchgymlog.com/user/4KG3K403w1YFPHpImcoRKDvarHp1" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Try a public profile link <span aria-hidden="true">→</span></a></div>
          <p className={social.note}>Public links are for public workouts and profiles. Share a private routine directly in chat.</p>
        </div>
        <div className={styles.routineStage}><Image src="/screenshots/workout-library/public_workout_preview.webp" alt="Bench public workout preview with its exercises and sharing option" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={`${styles.routineImage} ${social.previewPhone}`} /></div>
      </article>
    </Section>
    <Section className={styles.bottomSection}><div className={styles.cta}><h2>Make your next set count.</h2><p>Train together. Share what works. Get started free.</p><StoreButtonGroup className={styles.storeActions} /></div><Link href="/features/workout-tracking" className={styles.next}><div><span className={styles.step}>KEEP EXPLORING</span><h3>Your next session starts here.</h3><p>Explore Workout Tracking</p></div><span aria-hidden="true" className={styles.nextArrow}>→</span></Link></Section>
  </div>;
}
