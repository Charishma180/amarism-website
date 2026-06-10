import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amarism.org";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signin`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/missions/mission-manisha`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/missions/nyaya-sadan`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}