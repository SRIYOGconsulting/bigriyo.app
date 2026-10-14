import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bigriyo.app";
  const lastModDate = new Date("2025-11-21");

  return [
    // Main Pages
    {
      url: `${baseUrl}/`,
      lastModified: lastModDate,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/team`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.7
    },

    // VMGO Group
    {
      url: `${baseUrl}/vmgo`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/history`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/why`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.5
    },

    // General Content
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/career`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/qr`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/message`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.6
    },

    // Functional Pages
    {
      url: `${baseUrl}/calendar`,
      lastModified: lastModDate,
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/internship`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/download`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.6
    },

    // Media
    {
      url: `${baseUrl}/videos`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.8
    },

    // Legal & Policy
    {
      url: `${baseUrl}/location`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/cookie`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/tos`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}
