import { useEffect, useState } from 'react';
import { wordpressService } from '@/services/wordpress';

const CLIENT_URL = 'https://constructionestimatingnewyork.com';

const DynamicSitemapXml = () => {
    const [xml, setXml] = useState('');

    useEffect(() => {
        const generate = async () => {
            // Fetch all data
            const [pages, posts] = await Promise.all([
                wordpressService.getPages(),
                wordpressService.getPosts()
            ]);

            const today = new Date().toISOString();

            let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

            // Pages
            pages.forEach(page => {
                if (page.slug === 'home' || page.slug === 'blog') return;
                const lastMod = page.modified_gmt ? page.modified_gmt + 'Z' : (page.date + 'Z');
                sitemap += `
    <url>
        <loc>${CLIENT_URL}/${page.slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
            });

            // Posts
            posts.forEach(post => {
                const lastMod = post.modified_gmt ? post.modified_gmt + 'Z' : (post.date + 'Z');
                sitemap += `
    <url>
        <loc>${CLIENT_URL}/blog/${post.slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;
            });

            sitemap += `
</urlset>`;

            setXml(sitemap);
        };

        generate();
    }, []);

    // Hijack the render to output raw XML
    if (xml) {
        return (
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', margin: 0, padding: '20px', overflow: 'auto' }}>
                <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', color: 'white', fontFamily: 'monospace' }}>
                    {xml}
                </pre>
            </div>
        );
    }

    return null;
};

export default DynamicSitemapXml;
