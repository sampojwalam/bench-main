import { SITE_URL } from "@/lib/metadata";

const siteData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Bench Gym Log",
      legalName: "Bench LLC",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icons/bench_rounded.png`, width: 400, height: 400 },
      email: "help@benchgymlog.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "help@benchgymlog.com",
        url: `${SITE_URL}/contact`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Bench Gym Log",
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function SiteStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData).replace(/</g, "\\u003c") }} />;
}
