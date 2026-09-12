import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://benchgymlog.com"),
  title: {
    default: "Bench Gym Log — Meet your new gym companion.",
    template: "%s — Bench Gym Log",
  },
  description:
    "Bench Gym Log is your gym companion — log every set, monitor progress, set goals, and discover workouts from a worldwide community of serious lifters.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bench Gym Log — Meet your new gym companion.",
    description:
      "Your gym companion for tracking every set, hitting every goal, and discovering workouts from a worldwide community of lifters.",
    type: "website",
    url: "https://benchgymlog.com",
    siteName: "Bench Gym Log",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Gym Log — Meet your new gym companion.",
    description: "Your gym companion for serious lifters.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-ink-900 min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 pt-16 focus:outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
