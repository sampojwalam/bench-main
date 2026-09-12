import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WebAppButton, StoreButtonGroup } from "@/components/StoreButtons";
import { Icon } from "@/components/Icon";
import styles from "./WorkoutTrackingPage.module.css";
import goals from "./GoalsPage.module.css";

const categories = [
  { image: "general", title: "Show up consistently", label: "General goals", copy: "Give your training a rhythm with a target for how often you work out.", example: "Work out 3 times a week." },
  { image: "exercise", title: "Focus on a movement", label: "Exercise goals", copy: "Work toward a strength milestone or give a specific exercise more attention.", example: "Log 10 sets of squats each week." },
  { image: "legs", title: "Make room for weak points", label: "Muscle group goals", copy: "Set a target for a muscle group you want to train more deliberately.", example: "Complete 10 working sets for legs per week." },
];

export function GoalsPage() {
  return <div className={`${styles.page} ${goals.page}`}>
    <Section className={styles.hero}>
      <Link href="/features" className={styles.back}>← All features</Link>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.featureIcon} aria-hidden="true"><Icon name="flag" size={28} /></div>
          <h1>Goal Setting</h1>
          <p className={styles.lead}>Give every session something to work toward.</p>
          <p>Build a habit, bring up a lift, or give a muscle group the attention it deserves. Set your target in Bench and track your progress through the workouts you log.</p>
          <div className={styles.heroActions}><WebAppButton /><Button href="/download" variant="ghost" className="!rounded-xl">Get the app</Button></div>
        </div>
        <div className={styles.heroStage}><div className={styles.heroHalo} aria-hidden="true" /><Image src="/screenshots/goals-mockup.png" alt="Bench goals with progress toward training targets" width={722} height={1500} sizes="(min-width: 1024px) 270px, 220px" priority className={styles.phone} /></div>
      </div>
    </Section>
    <Section className={styles.storySection}>
      <article className={goals.typesPanel}>
        <div className={goals.intro}><span className={styles.step}>01 / GOAL TYPES</span><h2>Choose what matters.<br />Give it a target.</h2><p>A little more consistency. A stronger squat. Fewer skipped leg days. Start with the part of your training you want to improve.</p></div>
        <div className={goals.typesGrid}>{categories.map(category => <div className={goals.typeCard} key={category.image}>
          <Image src={`/screenshots/goals/${category.image}-icon-aligned.webp`} alt="" width={160} height={160} className={goals.typeIcon} />
          <span className={styles.step}>{category.label}</span><h3>{category.title}</h3><p>{category.copy}</p><div className={goals.example}><span>Example</span>{category.example}</div>
        </div>)}</div>
      </article>
      <article className={styles.routinePanel}>
        <div className={styles.panelCopy}><span className={styles.step}>02 / MILESTONES & ROUTINES</span><h2>A milestone to reach.<br />A habit to keep.</h2><p>Some goals give you a finish line. Others give you a reason to keep showing up. Bench makes room for both.</p>
          <ol className={styles.setDetails}>
            <li><span>01</span><div><strong>Build toward a stronger lift.</strong><p>Set a strength target based on your estimated one-rep max and follow your progress toward it.</p></div></li>
            <li><span>02</span><div><strong>Set your own rhythm.</strong><p>Choose daily, weekly, or monthly recurring goals for the training habits you want to build.</p></div></li>
            <li><span>03</span><div><strong>Count the work that matters.</strong><p>Track sessions, sets, reps, or total weight lifted, depending on your goal. For volume targets, choose whether warm-up sets count.</p></div></li>
          </ol>
        </div>
        <div className={styles.routineStage}><Image src="/screenshots/goals/history-phone.webp" alt="Bench goal history for working out three times a week, showing progress across 25 weeks" width={1024} height={2064} sizes="(min-width: 1024px) 280px, 240px" className={styles.routineImage} /></div>
      </article>
      <article className={styles.restPanel}>
        <div className={styles.panelCopy}><span className={styles.step}>03 / PROGRESS OVER TIME</span><h2>See your consistency.<br />Build on it.</h2><p>A missed target doesn’t erase the weeks you showed up. Look back at your goal history to spot a habit taking hold, notice where you’re falling short, and make your next session count.</p><div className={styles.detail}><strong>Keep your focus on training.</strong><p>Bench tracks progress from your workout logs, so you can see how often you’ve met a recurring goal without keeping a separate checklist.</p></div><Link href="/features/analytics" className={styles.textLink}>Explore your training progress <span aria-hidden="true">→</span></Link></div>
        <div className={goals.historyStage}>
          <Image src="/screenshots/goals/legs-target.webp" alt="Legs goal: 10 working sets per week, met in 23 of 25 weeks" width={1108} height={263} sizes="(min-width: 1024px) 350px, 72vw" className={goals.targetCrop} />
          <Image src="/screenshots/goals/legs-history.webp" alt="Weekly progress toward the leg training goal, with completed weeks and current progress" width={1108} height={653} sizes="(min-width: 1024px) 325px, 68vw" className={goals.historyCrop} />
        </div>
      </article>
    </Section>
    <Section className={styles.bottomSection}><div className={styles.cta}><h2>Make your next set count.</h2><p>Choose a target. Start showing up for it. Get started free.</p><StoreButtonGroup className={styles.storeActions} /></div><Link href="/features/history" className={styles.next}><div><span className={styles.step}>UP NEXT</span><h3>Every session has a place in your story.</h3><p>Explore Workout History</p></div><span aria-hidden="true" className={styles.nextArrow}>→</span></Link></Section>
  </div>;
}
