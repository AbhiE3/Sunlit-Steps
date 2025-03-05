export default function handler(req, res) {
  res.setHeader("Content-Type", "text/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://yourwebsite.com/</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://yourwebsite.com/services</loc>
        <priority>0.8</priority>
      </url>
    </urlset>`);
  res.end();
}
