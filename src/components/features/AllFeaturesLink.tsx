import Link from "next/link";
import styles from "./WorkoutTrackingPage.module.css";

/** The "back to all features" link at the top of each feature page. */
export function AllFeaturesLink() {
  return (
    <Link href="/features" className={styles.back}>
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M15 9H3M3 9L8.5 3.5M3 9L8.5 14.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      All features
    </Link>
  );
}
