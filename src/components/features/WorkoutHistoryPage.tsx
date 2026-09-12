import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";
import history from "./WorkoutHistoryPage.module.css";

export function WorkoutHistoryPage() {
  return <div className={`${styles.page} ${history.page}`}>
    <Section className={styles.hero}>
      <Link href="/features" className={styles.back}>← All features</Link>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.featureIcon} aria-hidden="true"><Icon name="history" size={28} /></div>
          <h1>Workout History</h1>
          <p className={styles.lead}>Every session, forever.</p>
          <p>Your training is worth remembering. Revisit past workouts, check what you lifted, and pick up where you left off. Your entire workout history is included free.</p>
          <div className={styles.heroActions}><WebAppButton /><Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button></div>
        </div>
        <div className={styles.heroStage}><div className={styles.heroHalo} aria-hidden="true" /><Image src="/screenshots/history-mockup.png" alt="Bench workout history showing past training sessions" width={722} height={1500} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} /></div>
      </div>
    </Section>
    <Section className={styles.storySection}>
      <article className={history.viewsPanel}>
        <div className={history.intro}><span className={styles.step}>01 / CALENDAR & LIST VIEWS</span><h2>Your training timeline.<br />Two ways to see it.</h2><p>Find a workout by date or browse your sessions in order. Switch views whenever you want a different perspective.</p></div>
        <div className={history.viewsGrid}>
          <div className={history.view}><div className={history.viewCopy}><Icon name="calendar_month" size={22} /><h3>Find your day.</h3><p>See when you trained and select a date to open its workouts.</p></div><Image src="/screenshots/history/calendar-phone.webp" alt="Bench calendar history with a selected November date and its Pull Day workout" width={800} height={1613} sizes="(min-width: 640px) 240px, 210px" className={history.calendarPhone} /></div>
          <div className={history.view}><div className={history.viewCopy}><Icon name="format_list_bulleted" size={22} /><h3>Follow your sessions.</h3><p>Scroll through your workout list and expand a session for the details.</p></div><Image src="/screenshots/history/list-phone.webp" alt="Bench list view with an expanded Pull Day workout and another saved session below" width={800} height={1613} sizes="(min-width: 640px) 240px, 210px" className={history.listPhone} /></div>
        </div>
      </article>
      <article className={styles.restPanel}>
        <div className={styles.panelCopy}><span className={styles.step}>02 / SESSION DETAILS</span><h2>Remember the work.<br />Not just the workout.</h2><p>What weight did you use? How many reps did you get? Open a past session and find the details that help you decide what to do next.</p><ol className={styles.setDetails}>
          <li><span>01</span><div><strong>Every logged set.</strong><p>Revisit your exercises, weights, and reps, with warm-up sets clearly identified.</p></div></li>
          <li><span>02</span><div><strong>The context you left yourself.</strong><p>Read your saved exercise notes so useful details don’t get lost between sessions.</p></div></li>
          <li><span>03</span><div><strong>A starting point for next time.</strong><p>Use your previous workout as a reference when choosing your next weights and rep targets.</p></div></li>
        </ol></div>
        <div className={history.detailStage}><Image src="/screenshots/history/session-detail.webp" alt="A saved Leg Day workout with squat, leg press, and lunge weights and reps, including warm-up sets" width={1110} height={1307} sizes="(min-width: 1024px) 350px, 80vw" className={history.detailCrop} /></div>
      </article>
      <article className={styles.routinePanel}>
        <div className={styles.panelCopy}><span className={styles.step}>03 / ADD YOUR PAST WORKOUTS</span><h2>You did the work.<br />Give it a place.</h2><p>Forgot to track a workout? Have sessions from before you started using Bench? Add them to your history so your training record includes the work you’ve already put in.</p><div className={styles.detail}><strong>More history. A fuller picture.</strong><p>Adding or updating past workouts updates your exercise and volume stats, giving you a more complete picture of your strength and training over time.</p></div><p className={history.premiumNote}>Note: Adding and editing past logs requires Bench Premium.</p></div>
        <div className={styles.routineStage}><Image src="/screenshots/history/edit-phone.webp" alt="Bench Update Workout Log screen with editable workout date and bench press sets, weights, and reps" width={800} height={1613} sizes="(min-width: 1024px) 280px, 240px" className={`${styles.routineImage} ${history.editPhone}`} /></div>
      </article>
    </Section>
    <Section className={styles.bottomSection}><div className={styles.cta}><h2>Make your next set count.</h2><p>Start your next session. Keep the whole story. Get started free.</p><StoreButtonGroup className={styles.storeActions} /></div><Link href="/features/social" className={styles.next}><div><span className={styles.step}>UP NEXT</span><h3>Find your people. Share your training.</h3><p>Explore Social &amp; Community</p></div><span aria-hidden="true" className={styles.nextArrow}>→</span></Link></Section>
  </div>;
}
