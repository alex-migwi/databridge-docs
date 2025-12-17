import { g as getCollection } from '../chunks/_astro_content_CMrrjOhZ.mjs';
import { c as clarityConfig } from '../chunks/clarity.config_DRA55FFN.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  const allDocs = await getCollection("docs", ({ data }) => {
    return data.draft !== true ;
  });
  const baseUrl = clarityConfig.site.url;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${allDocs.map((doc) => `  <url>
    <loc>${baseUrl}/docs/${doc.slug}</loc>
    <lastmod>${doc.data.lastUpdated ? new Date(doc.data.lastUpdated).toISOString() : (/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
