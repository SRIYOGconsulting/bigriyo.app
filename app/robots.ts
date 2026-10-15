import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/admin/",
        allow: "/"
      }
    ],
    sitemap: "https://www.bigriyo.app/sitemap.xml"
  };
};

export default robots;
