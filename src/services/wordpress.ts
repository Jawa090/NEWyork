import axios from 'axios';

// Configuration: Prefer environment variable, fallback to hardcoded URL
// This ensures the code is production-ready (configurable) but works out-of-the-box (dev default)
const DEFAULT_WP_API_URL = 'https://cms.constructionestimatingnewyork.com/wp-json/wp/v2';
const WP_API_BASE_URL = import.meta.env.VITE_WP_API_URL || DEFAULT_WP_API_URL;

/**
 * Unified interface for WordPress Posts and Pages
 */
export interface WordPressContent {
    id: number;
    date: string;
    modified: string;
    modified_gmt: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    // Yoast SEO Data
    yoast_head_json?: {
        title: string;
        description: string;
        canonical: string;
        og_title?: string;
        og_description?: string;
        og_url?: string;
        og_site_name?: string;
        og_type?: string;
        og_image?: Array<{
            url: string;
            width: number;
            height: number;
            type: string;
        }>;
        twitter_card?: string;
        schema?: any;
    };
    // RankMath SEO Data
    head?: string; // HTML head block (fallback)
    rank_math_title?: string;
    rank_math_description?: string;
    rank_math_canonical?: string;
    rank_math_facebook_image?: string;

    // Allow dynamic keys for future plugin support without breaking types
    [key: string]: any;
}

// Alias for backward compatibility with existing components
export type WordPressPost = WordPressContent;

export interface SEOData {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    twitterCard?: 'summary' | 'summary_large_image';
}

// --- Extraction Strategies ---

const extractRankMathData = (post: WordPressContent): Partial<SEOData> => {
    const data: Partial<SEOData> = {};
    if (post.rank_math_title) data.title = post.rank_math_title;
    if (post.rank_math_description) data.description = post.rank_math_description;
    if (post.rank_math_canonical) data.canonicalUrl = post.rank_math_canonical;
    if (post.rank_math_facebook_image) data.ogImage = post.rank_math_facebook_image;
    return data;
};

const extractYoastData = (post: WordPressContent): Partial<SEOData> => {
    const data: Partial<SEOData> = {};
    const yoast = post.yoast_head_json;
    if (!yoast) return data;

    if (yoast.title) data.title = yoast.title;
    if (yoast.description) data.description = yoast.description;
    if (yoast.canonical) data.canonicalUrl = yoast.canonical;
    if (yoast.og_image?.[0]?.url) data.ogImage = yoast.og_image[0].url;
    if (yoast.og_type) data.ogType = yoast.og_type as 'website' | 'article';

    return data;
};

const extractFallbackHeadData = (post: WordPressContent): Partial<SEOData> => {
    const data: Partial<SEOData> = {};
    if (!post.head) return data;

    // Simple Regex extraction for cases where JSON API is disabled/restricted
    const titleMatch = post.head.match(/<title>([^<]*)<\/title>/);
    if (titleMatch) data.title = titleMatch[1];

    const descMatch = post.head.match(/<meta name="description" content="([^"]*)"/);
    if (descMatch) data.description = descMatch[1];

    const canonMatch = post.head.match(/<link rel="canonical" href="([^"]*)"/);
    if (canonMatch) data.canonicalUrl = canonMatch[1];

    const ogImgMatch = post.head.match(/<meta property="og:image" content="([^"]*)"/);
    if (ogImgMatch) data.ogImage = ogImgMatch[1];

    return data;
};

const stripHtml = (html: string): string => {
    if (!html) return '';
    // SSR-safe stripping using Regex (avoids DOM dependency)
    return html.replace(/<[^>]*>?/gm, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
};

export const wordpressService = {
    /**
     * Fetch a single post by slug
     */
    getPostBySlug: async (slug: string): Promise<WordPressContent | null> => {
        try {
            const response = await axios.get<WordPressContent[]>(`${WP_API_BASE_URL}/posts`, {
                params: { slug, _embed: true },
            });
            return response.data?.[0] || null;
        } catch (error) {
            console.error(`[WP Service] Error fetching post: ${slug}`, error);
            return null;
        }
    },

    /**
     * Fetch all posts
     */
    getPosts: async (perPage = 100): Promise<WordPressContent[]> => {
        try {
            const response = await axios.get<WordPressContent[]>(`${WP_API_BASE_URL}/posts`, {
                params: { per_page: perPage, _embed: true },
            });
            return response.data || [];
        } catch (error) {
            console.error('[WP Service] Error fetching posts:', error);
            return [];
        }
    },

    /**
     * Fetch all pages
     */
    getPages: async (perPage = 100): Promise<WordPressContent[]> => {
        try {
            const response = await axios.get<WordPressContent[]>(`${WP_API_BASE_URL}/pages`, {
                params: { per_page: perPage, _embed: true },
            });
            return response.data || [];
        } catch (error) {
            console.error('[WP Service] Error fetching pages:', error);
            return [];
        }
    },

    /**
     * Fetch a single page by slug
     */
    getPageBySlug: async (slug: string): Promise<WordPressContent | null> => {
        try {
            const response = await axios.get<WordPressContent[]>(`${WP_API_BASE_URL}/pages`, {
                params: { slug, _embed: true },
            });
            return response.data?.[0] || null;
        } catch (error) {
            console.error(`[WP Service] Error fetching page: ${slug}`, error);
            return null;
        }
    },

    /**
     * Helper to strip HTML tags from content
     */
    stripHtml,

    /**
     * Extract SEO Data with Priority: RankMath > Yoast > Head Fallback > Default
     */
    getSeoData: (post: WordPressContent): SEOData => {
        // 0. Base Defaults
        const defaultData: SEOData = {
            title: post.title?.rendered || '',
            description: post.excerpt?.rendered ? stripHtml(post.excerpt.rendered) : '',
            canonicalUrl: post.link || '',
            ogImage: undefined, // Will be filtered out if undefined
            ogType: 'website',
            twitterCard: 'summary_large_image',
        };

        // 1. Gather Strategy Data
        const rankMath = extractRankMathData(post);
        const yoast = extractYoastData(post);
        const fallbackHead = extractFallbackHeadData(post);

        // 2. Merge Strategies (RankMath takes precedence, then Yoast, then Parsing Head, then Defaults)
        const mergedData = {
            ...defaultData,
            ...fallbackHead,
            ...yoast,
            ...rankMath,
        };

        // 3. Sanitize Canonical URL (Remove 'cms.' subdomain to match frontend)
        if (mergedData.canonicalUrl) {
            // Regex matches "http://cms." or "https://cms." and removes "cms."
            mergedData.canonicalUrl = mergedData.canonicalUrl.replace(/^(https?:\/\/)(cms\.)/i, '$1');
        }

        return mergedData;
    }
};
