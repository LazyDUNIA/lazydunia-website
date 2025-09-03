import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// Helper to get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The hostname for your website. Replace with your actual domain.
const hostname = 'https://www.lazydunia.com';

// An array of your site's public routes.
const routes = [
  '/',
  '/our-apps',
  '/upcoming-apps'
];

const generateSitemap = async () => {
  try {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset\n`;
    sitemap += `      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    sitemap += `      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
    sitemap += `      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

    // Add static URLs
    routes.forEach(route => {
      const loc = `${hostname}${route}`;
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${loc}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      sitemap += `    <changefreq>daily</changefreq>\n`;
      sitemap += `    <priority>0.7</priority>\n`;
      sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>\n`;

    // Define the output file path in the 'dist' directory, assuming Vite's default build output.
    const outputPath = path.resolve(__dirname, '..', 'dist', 'sitemap.xml');

    // Write the sitemap to the file system.
    fs.writeFileSync(outputPath, sitemap);

    console.log('Sitemap generated successfully at ' + outputPath);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
