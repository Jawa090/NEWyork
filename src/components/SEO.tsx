import { Helmet } from 'react-helmet-async';

// Default constants for fallback values
const SITE_NAME = 'Construction Estimating New York';
const DEFAULT_DESCRIPTION = 'Expert construction estimating services in New York.';
const DEFAULT_OG_TYPE = 'website';
const DEFAULT_TWITTER_CARD = 'summary_large_image';

export interface SEOProps {
    title: string;
    description?: string;
    canonicalUrl?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    noindex?: boolean;
}

/**
 * SEO Component
 * Manages the <head> section of the page including Title, Meta tags, Open Graph, and Twitter Cards.
 */
const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    canonicalUrl,
    ogType = DEFAULT_OG_TYPE,
    ogImage,
    ogTitle,
    ogDescription,
    twitterCard = DEFAULT_TWITTER_CARD,
    noindex = false,
}: SEOProps) => {
    // Construct the final title: Use as-is if it contains a pipe, otherwise append site name
    const finalTitle = title.includes('|') ? title : `${title} | ${SITE_NAME}`;

    // Determine canonical URL: Prefer prop, fallback to window.location if strictly necessary/available
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const finalCanonical = canonicalUrl || currentUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            {finalCanonical && <link rel="canonical" href={finalCanonical} />}

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={ogTitle || finalTitle} />
            <meta property="og:description" content={ogDescription || description} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={finalCanonical} />
            <meta name="twitter:title" content={ogTitle || finalTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default SEO;
