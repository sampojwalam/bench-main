import type { Metadata } from "next";

export const SITE_URL = "https://benchgymlog.com";
export const HOME_TITLE = "Bench Gym Log — Workout Tracker for Lifters";
export const HOME_DESCRIPTION =
  "Track unlimited workouts, build custom routines, and see your strength progress with Bench Gym Log. Free on iOS, Android, and the web.";

const SOCIAL_IMAGE = {
  url: `${SITE_URL}/images/social/bench-home-split-headline-v2.png`,
  width: 1200,
  height: 630,
  alt: "Bench Gym Log — Log your lifts. See your progress. Web dashboard and mobile workout tracker.",
};

/** Keep search results and shared links specific to the page being viewed. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = path === "/" ? HOME_TITLE : `${title} — Bench Gym Log`;
  const url = path === "/" ? SITE_URL : new URL(path, SITE_URL).toString();
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Bench Gym Log",
      type: "website",
      locale: "en_US",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: SOCIAL_IMAGE.url, alt: SOCIAL_IMAGE.alt }],
      title: fullTitle,
      description,
    },
  };
}
