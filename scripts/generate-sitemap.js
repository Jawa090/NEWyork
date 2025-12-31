import fs from 'fs';
import path from 'path';
import axios from 'axios';

// Configuration
const WP_API_BASE = 'https://cms.constructionestimatingnewyork.com/wp-json/wp/v2';
const CLIENT_URL = 'https://constructionestimatingnewyork.com'; // Replace with actual production URL if different
const OUT_FILE = path.resolve('public', 'sitemap.xml');

async function fetchAll(endpoint) {
    let page = 1;
    let allData = [];
    while (true) {
        try {
            console.log(`Fetching ${endpoint} page ${page}...`);
            const res = await axios.get(`${WP_API_BASE}/${endpoint}`, {
                params: { per_page: 100, page }
            });
            allData = allData.concat(res.data);
            if (page >= res.headers['x-wp-totalpages']) break;
            page++;
        } catch (err) {
            if (err.response && err.response.status === 400) break; // End of pagination
            console.error(`Error fetching ${endpoint}:`, err.message);
            break;
        }
    }
    return allData;
}

function generateXML(pages, posts) {
    const today = new Date().toISOString();
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static Routes (Manual)
    xml += `
    <url>
        <loc>${CLIENT_URL}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${CLIENT_URL}/blog</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>`;

    // WordPress Pages
    pages.forEach(page => {
        let slug = page.slug;
        let priority = 0.8;
        
        // Skip 'home' or 'blog' if handled manually, or map them
        if (slug === 'home') return; 
        if (slug === 'blog') return;

        // Nested Pages? WP API "link" field usually has structure, but here we flatten or need parent info.
        // For simplicity reusing the logic: /:slug for top level pages.
        // If you strictly matched slug=route, then:
        const url = `${CLIENT_URL}/${slug}`;
        
        xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${page.modified_gmt || page.date_gmt}Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>`;
    });

    // WordPress Posts
    posts.forEach(post => {
        const url = `${CLIENT_URL}/blog/${post.slug}`;
        xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${post.modified_gmt || post.date_gmt}Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;
    });

    xml += `
</urlset>`;

    return xml;
}

async function main() {
    try {
        const [pages, posts] = await Promise.all([
            fetchAll('pages'),
            fetchAll('posts')
        ]);

        console.log(`Found ${pages.length} pages and ${posts.length} posts.`);
        const xml = generateXML(pages, posts);

        fs.writeFileSync(OUT_FILE, xml);
        console.log(`Sitemap generated at ${OUT_FILE}`);

    } catch (e) {
        console.error('Failed to generate sitemap:', e);
        process.exit(1);
    }
}

main();
