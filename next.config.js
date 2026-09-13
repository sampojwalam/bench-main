/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Published WordPress guides and category archives, inventoried before migration.
    // Core pages retain their paths; Next normalizes trailing slashes automatically.
    return [
      { source: "/docs", destination: "/features", permanent: true },
      { source: "/docs/what-is-bench", destination: "/features", permanent: true },
      { source: "/docs/how-to-log-an-empty-workout", destination: "/features/workout-tracking", permanent: true },
      { source: "/docs/how-to-log-a-saved-workout", destination: "/features/workout-tracking", permanent: true },
      { source: "/docs/how-to-set-a-rest-timer", destination: "/features/workout-tracking", permanent: true },
      { source: "/docs/what-are-goals-in-bench", destination: "/features/goals", permanent: true },
      { source: "/docs/delete-bench-account", destination: "/privacy-policy#account-deletion", permanent: true },
      { source: "/docs/media-kit", destination: "/contact", permanent: true },
      { source: "/docs-category/getting-started", destination: "/features", permanent: true },
      { source: "/docs-category/workouts", destination: "/features/workout-tracking", permanent: true },
      { source: "/docs-category/goals", destination: "/features/goals", permanent: true },
      { source: "/docs-category/account", destination: "/privacy-policy#account-deletion", permanent: true },
      { source: "/docs-category/about", destination: "/contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
