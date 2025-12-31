import { useState, useEffect } from 'react';
import { wordpressService, SEOData } from '@/services/wordpress';

interface UsePageSEOResult {
    seoData: SEOData | null;
    loading: boolean;
    error: Error | null;
}

/**
 * Hook to fetch SEO data for a WordPress Page or Post.
 * @param slug The slug of the page/post.
 * @param type 'page' or 'post' (default: 'page')
 */
export const usePageSEO = (
    slug: string,
    type: 'page' | 'post' = 'page'
): UsePageSEOResult => {
    const [seoData, setSeoData] = useState<SEOData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // If no slug provided, ensure loading is false and return
        if (!slug) {
            setLoading(false);
            return;
        }

        const fetchSEO = async () => {
            setLoading(true);
            setError(null);

            try {
                const content = type === 'page'
                    ? await wordpressService.getPageBySlug(slug)
                    : await wordpressService.getPostBySlug(slug);

                if (content) {
                    const data = wordpressService.getSeoData(content);
                    setSeoData(data);
                } else {
                    // Content not found
                    setSeoData(null);
                }
            } catch (err) {
                console.error(`[usePageSEO] Error fetching ${type} '${slug}':`, err);
                setError(err instanceof Error ? err : new Error('Unknown error fetching SEO data'));
            } finally {
                setLoading(false);
            }
        };

        fetchSEO();
    }, [slug, type]);

    return { seoData, loading, error };
};
