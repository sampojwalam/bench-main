export type Feature = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  capabilities: { title: string; description: string }[];
  icon: string;
  /**
   * Optional iPhone mockup image (with frame baked in, transparent BG).
   * When provided, the feature page hero renders this instead of the
   * generic phone placeholder.
   */
  mockup?: { src: string; alt: string };
};

export const features: Feature[] = [
  {
    slug: "workout-tracking",
    name: "Workout Tracking",
    shortName: "Tracking",
    tagline: "Log every set in the most advanced strength-tracking interface ever built.",
    description:
      "Run your session with a clean, distraction-free interface designed for the gym floor. Tap to log sets, watch your rest timer count down, and never lose your place.",
    longDescription:
      "Bench's workout tracker is built around how you actually train. Start a workout with a single tap, log sets as you go, and let the rest timer keep you honest between efforts. Swap exercises mid-session, add notes, and capture your effort exactly the way it happened — every rep syncs to the cloud the moment you record it.",
    capabilities: [
      {
        title: "One-tap set logging",
        description:
          "Record weight and reps with a single tap. Bench remembers your last set and pre-fills it so you can stay in the moment.",
      },
      {
        title: "Smart rest timer",
        description:
          "An auto-starting rest timer keeps your pace tight between sets, with configurable durations for accessory and heavy work.",
      },
      {
        title: "Swap exercises mid-workout",
        description:
          "Machine taken? Sub in any exercise from the library without losing your progress — your data stays intact.",
      },
      {
        title: "Notes on every set",
        description:
          "Capture how a lift felt, RPE, tempo cues, or warm-up notes that you'll want to reference next time.",
      },
      {
        title: "Manual past-session entry",
        description:
          "Forgot to log? Add completed workouts retroactively so your history is always accurate.",
      },
      {
        title: "Resume in-progress workouts",
        description:
          "Phone died mid-set? Pick up where you left off when you reopen the app.",
      },
    ],
    icon: "fitness_center",
    mockup: {
      src: "/screenshots/log-workout-mockup.png",
      alt: "Bench mobile app workout logging screen showing a Barbell Back Squat in progress",
    },
  },
  {
    slug: "analytics",
    name: "Progress Analytics",
    shortName: "Analytics",
    tagline: "Quantify your progress with charts that update every time you log a workout.",
    description:
      "See volume, sets, reps, sessions, and rep-max progression for every exercise. Filter by week, month, or any custom range to find the signal in your training.",
    longDescription:
      "Every set you log fuels a deep analytics layer. Drill into any exercise to see strength curves, all-time rep maxes, total volume, and how often you've trained it. Cut the noise by filtering to a specific time range — the perfect view for spotting plateaus before they happen.",
    capabilities: [
      {
        title: "Per-exercise stats",
        description:
          "Volume, total sets, total reps, and session count for every exercise you've ever logged.",
      },
      {
        title: "Rep-max history",
        description:
          "Track 1RM, 3RM, 5RM and beyond — every PR is captured automatically as you train.",
      },
      {
        title: "Strength trend charts",
        description:
          "Interactive charts show how your lifts are trending across weeks, months, or years.",
      },
      {
        title: "Volume by muscle group",
        description:
          "See how your weekly volume is distributed across muscle groups so nothing gets undertrained.",
      },
      {
        title: "Custom time ranges",
        description:
          "Zoom into a single mesocycle or zoom out to your entire training history.",
      },
      {
        title: "Auto-updating dashboards",
        description:
          "Every chart refreshes the moment you finish a set — no manual updates required.",
      },
    ],
    icon: "monitoring",
    mockup: {
      src: "/screenshots/analytics-mockup.png",
      alt: "Bench mobile app showing volume distribution analytics across muscle groups",
    },
  },
  {
    slug: "workout-library",
    name: "Workout Library",
    shortName: "Library",
    tagline: "Discover thousands of workouts published by the Bench community.",
    description:
      "Browse public routines by category, start one with a single tap, or save it to your library to make it your own. Built for lifters who want fresh ideas without leaving the app.",
    longDescription:
      "The Explore tab is a constantly growing library of community-published workouts — bodybuilding splits, calisthenics circuits, strength programs, and more. Filter by category, preview the exercises, and start the workout instantly or clone it into your own library to customize.",
    capabilities: [
      {
        title: "Community-built workouts",
        description:
          "Thousands of routines published by real lifters, complete with sets, reps, and rest schemes.",
      },
      {
        title: "Filter by category",
        description:
          "Find body-part splits, full-body sessions, calisthenics, hypertrophy programs, and more.",
      },
      {
        title: "Preview before you start",
        description:
          "See every exercise, target rep range, and creator notes before you commit to a workout.",
      },
      {
        title: "Clone & customize",
        description:
          "Save any public workout to your library and adapt it to your equipment, schedule, and goals.",
      },
      {
        title: "Author profiles",
        description:
          "Follow the lifters whose programming you like and see what they publish next.",
      },
      {
        title: "Offline access",
        description:
          "Downloaded workouts are available even when the gym Wi-Fi gives out.",
      },
    ],
    icon: "explore",
    mockup: {
      src: "/screenshots/workout-library-mockup.png",
      alt: "Bench mobile app showing a public workout from the community library",
    },
  },
  {
    slug: "exercise-library",
    name: "Exercise Library",
    shortName: "Exercises",
    tagline: "400+ exercises plus unlimited custom movements of your own.",
    description:
      "Search the full library or build your own custom exercises tagged to the muscle groups you train. Every movement carries demonstration imagery and clean categorization.",
    longDescription:
      "Bench ships with a 400+ exercise database organized by muscle group, equipment, and training style. Need something niche? Create your own custom exercise with a name, muscle group tags, and tracking units — and Bench's analytics treat it like any other movement.",
    capabilities: [
      {
        title: "400+ pre-built exercises",
        description:
          "Compound lifts, machines, accessories, calisthenics — every staple movement is covered out of the box.",
      },
      {
        title: "Demonstration imagery",
        description:
          "Every built-in exercise comes with reference imagery so you can confirm form at a glance.",
      },
      {
        title: "Custom exercises",
        description:
          "Add your own movements with custom names and muscle group tagging. Premium unlocks unlimited.",
      },
      {
        title: "Muscle group tagging",
        description:
          "Tagged movements feed directly into your volume distribution analytics.",
      },
      {
        title: "Fast search & filter",
        description:
          "Find any exercise in seconds with a search that knows your most-used movements.",
      },
      {
        title: "Categorized browsing",
        description:
          "Browse by body part, training style, or equipment — whichever way you think about training.",
      },
    ],
    icon: "list_alt",
    mockup: {
      src: "/screenshots/exercise-library-mockup.png",
      alt: "Bench mobile app showing the exercise catalog organized by muscle group",
    },
  },
  {
    slug: "goals",
    name: "Goal Setting",
    shortName: "Goals",
    tagline: "Set highly customizable goals and watch yourself get closer every session.",
    description:
      "Whether you want to bench 315, knock out 50 unbroken pull-ups, or hit the gym four times a week, Bench tracks the goal and visualizes your progress automatically.",
    longDescription:
      "Goals turn your training into a story with a clear ending. Define a target — a number on the bar, a rep count, a frequency — and Bench tracks your progress against it every workout. See exactly how far you've come and how much further there is to go, with progress bars that update the second you log a qualifying set.",
    capabilities: [
      {
        title: "Strength goals",
        description:
          "Set 1RM, 3RM, or 5RM targets for any exercise — Bench auto-updates progress from your logged lifts.",
      },
      {
        title: "Volume goals",
        description:
          "Hit weekly or monthly volume targets for specific muscle groups or movements.",
      },
      {
        title: "Frequency goals",
        description:
          "Stay consistent with goals like 'train 4x per week' or 'hit legs every Monday'.",
      },
      {
        title: "Custom milestones",
        description:
          "Break long-term targets into smaller wins that keep momentum high.",
      },
      {
        title: "Automatic progress tracking",
        description:
          "No manual updates — every logged set advances your goals automatically.",
      },
      {
        title: "Unlimited goals with Premium",
        description:
          "3 active goals free; Premium unlocks unlimited so you can track every angle of your training.",
      },
    ],
    icon: "flag",
    mockup: {
      src: "/screenshots/goals-mockup.png",
      alt: "Bench mobile app showing goal details with progress toward a strength target",
    },
  },
  {
    slug: "history",
    name: "Workout History",
    shortName: "History",
    tagline: "Every workout you've ever logged, available from anywhere.",
    description:
      "Scroll a clean calendar view or drill into any past session for the exact weights, reps, and notes. Your training journal, always at hand.",
    longDescription:
      "Bench keeps a complete log of every session you've ever finished. Pop open the calendar to see your training rhythm at a glance, tap any day to revisit the exact lifts and notes, and compare today's effort to last week's the way a coach would.",
    capabilities: [
      {
        title: "Calendar & list views",
        description:
          "See your training cadence in a calendar, or scroll a chronological list — your call.",
      },
      {
        title: "Full session detail",
        description:
          "Every set, rep, weight, and note from every workout, exactly as you logged it.",
      },
      {
        title: "Cross-device sync",
        description:
          "Pull up any session on phone, tablet, or web — your history is always in your pocket.",
      },
      {
        title: "Quick navigation",
        description:
          "Jump straight to any date, or filter to a specific exercise to compare lifts over time.",
      },
      {
        title: "Backed up forever",
        description:
          "Cloud-backed so you never lose a training log — even if you upgrade phones.",
      },
      {
        title: "Edit past sessions",
        description:
          "Correct a logging mistake long after the fact; history stays accurate.",
      },
    ],
    icon: "history",
    mockup: {
      src: "/screenshots/history-mockup.png",
      alt: "Bench mobile app showing the workout history view of past sessions",
    },
  },
  {
    slug: "social",
    name: "Social & Community",
    shortName: "Social",
    tagline: "Follow lifters, share workouts, and build a gym community that pushes you.",
    description:
      "Follow the people whose training you respect, message them directly, and share programs that work. Bench is more than a logger — it's a community.",
    longDescription:
      "Lift heavier when you're not lifting alone. Follow other lifters, view their public profiles and recent training, and message them directly inside Bench. Share workouts in chat, swap programming notes, and stay connected with the people who keep you accountable.",
    capabilities: [
      {
        title: "Public profiles",
        description:
          "Showcase your training history, lifts, and the workouts you've published.",
      },
      {
        title: "Follow & followers",
        description:
          "Build a feed of lifters whose programming you respect and want to learn from.",
      },
      {
        title: "Direct messaging",
        description:
          "Message any lifter on Bench one-on-one — share PRs, swap programming, stay in touch.",
      },
      {
        title: "Share workouts in chat",
        description:
          "Send a workout directly to a friend so they can start it in one tap.",
      },
      {
        title: "Publish your own programs",
        description:
          "Make your routines public, get likes and follows, and contribute to the library.",
      },
      {
        title: "Search the community",
        description:
          "Find friends by name and connect with new training partners.",
      },
    ],
    icon: "groups",
    mockup: {
      src: "/screenshots/social-mockup.png",
      alt: "Bench mobile app showing the in-app messaging conversation between lifters",
    },
  },
];

export const featureBySlug = (slug: string) =>
  features.find((f) => f.slug === slug);
