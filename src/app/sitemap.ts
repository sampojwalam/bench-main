export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { features } from "@/lib/features";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/features", "/download", "/contact",
    "/privacy-policy", "/terms-and-conditions",
    ...features.map((feature) => `/features/${feature.slug}`),
  ];
  return paths.map((path) => ({ url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString() }));
}
