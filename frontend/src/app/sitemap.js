import { siteConfig } from "./metadata";

export default function sitemap() {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
