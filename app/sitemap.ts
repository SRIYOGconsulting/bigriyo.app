import { MetadataRoute } from "next";

type SitemapItem = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const sitemapData: SitemapItem[] = [
  { url: "/", changeFrequency: "daily", priority: 1.0 },
  { url: "/about", changeFrequency: "monthly", priority: 0.8 },
  { url: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { url: "/notice", changeFrequency: "weekly", priority: 0.8 },
  { url: "/feedback", changeFrequency: "monthly", priority: 0.6 },
  { url: "/team", changeFrequency: "monthly", priority: 0.7 },
  { url: "/vmgo", changeFrequency: "yearly", priority: 0.7 },
  { url: "/history", changeFrequency: "yearly", priority: 0.6 },
  { url: "/why", changeFrequency: "yearly", priority: 0.7 },
  { url: "/timeline", changeFrequency: "yearly", priority: 0.5 },
  { url: "/gallery", changeFrequency: "weekly", priority: 0.8 },
  { url: "/career", changeFrequency: "weekly", priority: 0.7 },
  { url: "/repair", changeFrequency: "yearly", priority: 0.8 },
  { url: "/qr", changeFrequency: "yearly", priority: 0.4 },
  { url: "/glossary", changeFrequency: "monthly", priority: 0.7 },
  { url: "/message", changeFrequency: "monthly", priority: 0.6 },
  { url: "/calendar", changeFrequency: "daily", priority: 0.9 },
  { url: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { url: "/payment", changeFrequency: "yearly", priority: 0.6 },
  { url: "/internship", changeFrequency: "weekly", priority: 0.7 },
  { url: "/download", changeFrequency: "monthly", priority: 0.6 },
  { url: "/videos", changeFrequency: "weekly", priority: 0.8 },
  { url: "/blogs", changeFrequency: "weekly", priority: 0.8 },
  { url: "/testimonials", changeFrequency: "weekly", priority: 0.8 },
  { url: "/ai", changeFrequency: "yearly", priority: 0.4 },
  { url: "/location", changeFrequency: "yearly", priority: 0.4 },
  { url: "/refund", changeFrequency: "yearly", priority: 0.5 },
  { url: "/cookie", changeFrequency: "yearly", priority: 0.5 },
  { url: "/tos", changeFrequency: "yearly", priority: 0.6 },
  { url: "/privacy", changeFrequency: "yearly", priority: 0.6 },
  { url: "/disclaimer", changeFrequency: "yearly", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bigriyo.app";
  const lastModDate = new Date("2025-11-21");

  return sitemapData.map((item) => ({
    url: `${baseUrl}${item.url === "/" ? "" : item.url}`,
    lastModified: lastModDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority
  }));
}
