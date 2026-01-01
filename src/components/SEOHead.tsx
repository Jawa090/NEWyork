import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

import { usePageSEO } from '@/hooks/usePageSEO';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
  preloadImages?: string[];
  slug?: string; // Optional slug to force fetching specific WP page
  ogImage?: string; // Explicit override
  noindex?: boolean;
}

interface LocalSEOData {
  title?: string;
  description?: string;
  robots?: string;
  canonical?: string;
  ogLocale?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schema?: string | object;
  [key: string]: any;
}

/**
 * Advanced SEO Component
 * Automatically resolves metadata from WordPress (priority), Local Backup JSON (fallback), or Props (defaults).
 */
export default function SEOHead({
  title: propTitle,
  description: propDescription,
  canonical: propCanonical,
  structuredData,
  preloadImages,
  slug: propSlug,
  ogImage: propOgImage,
  noindex = false,
}: SEOHeadProps = {}) {
  const location = useLocation();
  const [localSeoData, setLocalSeoData] = useState<LocalSEOData | null>(null);

  // 1. Determine Slug: Prop > Pathname segment > 'home'
  const slug = useMemo(() => {
    if (propSlug) return propSlug;
    if (location.pathname === '/') return 'home';
    return location.pathname.split('/').filter(Boolean).pop() || 'home';
  }, [propSlug, location.pathname]);

  // 2. Fetch WordPress Data
  const { seoData: wpData } = usePageSEO(slug);

  // 3. Load Local JSON Fallback asynchronously
  useEffect(() => {
    let isMounted = true;
    const fetchLocalData = async () => {
      try {
        const module = await import('@/data/seo-data.json');
        const data = module.default as Record<string, LocalSEOData>;
        if (isMounted) {
          // Try exact path match
          setLocalSeoData(data[location.pathname] || null);
        }
      } catch (error) {
        console.warn('Local SEO data could not be loaded:', error);
      }
    };

    fetchLocalData();
    return () => { isMounted = false; };
  }, [location.pathname]);

  // 4. Resolve Final Values (Priority: WP > Local > Props)
  const title = wpData?.title || localSeoData?.title || propTitle;
  const description = wpData?.description || localSeoData?.description || propDescription;

  // Resolve canonical URL and ensure trailing slash
  let canonical = wpData?.canonicalUrl || localSeoData?.canonical || propCanonical || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '');

  if (canonical && !canonical.endsWith('/') && !canonical.split('/').pop()?.includes('.')) {
    canonical += '/';
  }
  const ogImage = wpData?.ogImage || localSeoData?.ogImage || propOgImage;
  const ogType = wpData?.ogType || localSeoData?.ogType || 'website';

  // Specific fallbacks
  const robots = noindex ? 'noindex, nofollow' : (localSeoData?.robots || 'index, follow');

  // Schema handling
  const schemaToCheck = structuredData || localSeoData?.schema;
  const finalSchema = schemaToCheck ? (typeof schemaToCheck === 'string' ? schemaToCheck : JSON.stringify(schemaToCheck)) : null;

  // Constants
  const SITE_NAME = 'Paradise Estimating';
  const THEME_COLOR = '#7ED957';
  const AUTHOR = 'Paradise Construction Estimating';

  return (
    <Helmet>
      <html lang="en" />
      {/* Essential Meta */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Site Info */}
      <meta name="application-name" content={SITE_NAME} />
      <meta name="author" content={AUTHOR} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />

      {/* Keywords (Consider making dynamic if needed, keeping static for now) */}
      <meta name="keywords" content="construction estimating, quantity takeoff, cost estimation, construction bidding, building estimates, material takeoff, residential estimating, commercial estimating" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {localSeoData?.ogLocale && <meta property="og:locale" content={localSeoData.ogLocale} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Schema.org Helper */}
      {finalSchema && (
        <script type="application/ld+json">
          {finalSchema}
        </script>
      )}

      {/* Preload Resources */}
      {preloadImages?.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} />
      ))}
    </Helmet>
  );
}