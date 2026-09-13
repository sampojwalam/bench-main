import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/assets/fonts/material-symbols.css";
import localFont from "next/font/local";

const jakarta = localFont({
  src: "../assets/fonts/jakarta-latin.woff2",
  variable: "--font-jakarta",
  weight: "400 800",
  display: "swap",
});
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION } from "@/lib/metadata";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s — Bench Gym Log",
  },
  description: HOME_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans bg-white text-ink-900 min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 pt-16 focus:outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
