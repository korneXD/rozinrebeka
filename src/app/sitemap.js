import fs from "fs";
import path from "path";

async function getLastModifiedDate(filePath) {
  filePath = path.join(process.cwd(), filePath);
  const stats = await fs.promises.stat(filePath);
  return stats.mtime;
}

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap() {
  const pageRoutes = ["", "arlista"];
  const staticRoutes = await Promise.all(
    pageRoutes.map(async (pageRoute) => {
      const lastModified = await getLastModifiedDate(
        `src/app/${pageRoute}/page.jsx`,
      );
      const page = pageRoute.replace(/\/?\(.*?\)/g, "").replace(/^\/+/, "");
      return {
        url: `${BaseURL}/${page}`,
        lastModified,
      };
    }),
  );

  const sitemap = [...staticRoutes];

  return sitemap;
}
