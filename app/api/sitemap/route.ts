export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.kaza-interieur.fr/</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/services</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/realisations</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/a-propos</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/contact</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/faq</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/mentions-legales</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.kaza-interieur.fr/politique-confidentialite</loc>
    <lastmod>2026-08-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
