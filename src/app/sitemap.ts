import type { MetadataRoute } from "next";
import { SITE, DISTRICTS } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/uslugi/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/uslugi/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...DISTRICTS.map((d) => ({
      url: `${SITE.url}/rajony/${d.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
