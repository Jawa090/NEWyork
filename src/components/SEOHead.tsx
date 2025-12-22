import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface SEOData {
  title: string;
  description: string;
  robots: string;
  canonical: string;
  ogLocale: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage: string;
  articlePublisher: string;
  articleModifiedTime: string;
  twitterCard: string;
  twitterSite: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  schema: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
  preloadImages?: string[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  structuredData,
  preloadImages
}: SEOHeadProps = {}) {
  const location = useLocation();
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    // Dynamically import SEO data to avoid caching
    const loadSeoData = async () => {
      try {
        const module = await import('@/data/seo-data.json');
        const seoDataFile = module.default;
        const jsonData = seoDataFile[location.pathname as keyof typeof seoDataFile];
        
        if (jsonData) {
          setSeoData(jsonData as SEOData);
        } else {
          setSeoData(null);
        }
      } catch (error) {
        console.error('Failed to load SEO data:', error);
        setSeoData(null);
      }
    };

    loadSeoData();
  }, [location.pathname]);

  // If JSON data exists, use ONLY JSON data and completely ignore props
  if (seoData) {
    return (
      <Helmet>
        <html lang="en" />
        {seoData.title && <title>{seoData.title}</title>}
        {seoData.description && <meta name="description" content={seoData.description} />}
        {seoData.robots && <meta name="robots" content={seoData.robots} />}
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
        
        {/* Additional Professional Meta Tags */}
        <meta name="author" content="Paradise Construction Estimating" />
        <meta name="theme-color" content="#7ED957" />
        <meta name="msapplication-TileColor" content="#7ED957" />
        <meta name="application-name" content="Paradise Estimating" />
        
        {/* Keywords for better SEO */}
        <meta name="keywords" content="construction estimating, quantity takeoff, cost estimation, construction bidding, building estimates, material takeoff, residential estimating, commercial estimating" />
        
        {/* Open Graph - Only from JSON */}
        {seoData.ogLocale && <meta property="og:locale" content={seoData.ogLocale} />}
        {seoData.ogType && <meta property="og:type" content={seoData.ogType} />}
        {seoData.ogTitle && <meta property="og:title" content={seoData.ogTitle} />}
        {seoData.ogDescription && <meta property="og:description" content={seoData.ogDescription} />}
        {seoData.ogUrl && <meta property="og:url" content={seoData.ogUrl} />}
        {seoData.ogSiteName && <meta property="og:site_name" content={seoData.ogSiteName} />}
        {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
        {seoData.articlePublisher && <meta property="article:publisher" content={seoData.articlePublisher} />}
        {seoData.articleModifiedTime && <meta property="article:modified_time" content={seoData.articleModifiedTime} />}
        
        {/* Twitter - Only from JSON */}
        {seoData.twitterCard && <meta name="twitter:card" content={seoData.twitterCard} />}
        {seoData.twitterSite && <meta name="twitter:site" content={seoData.twitterSite} />}
        {seoData.twitterTitle && <meta name="twitter:title" content={seoData.twitterTitle} />}
        {seoData.twitterDescription && <meta name="twitter:description" content={seoData.twitterDescription} />}
        {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
        
        {/* Schema - Prefer structured data from props if available, otherwise use JSON */}
        {structuredData ? (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        ) : seoData.schema && (
          <script type="application/ld+json">
            {seoData.schema}
          </script>
        )}
        
        {/* Preload Images */}
        {preloadImages?.map((img, index) => (
          <link key={index} rel="preload" as="image" href={img} />
        ))}
      </Helmet>
    );
  }

  // Fallback to props only if NO JSON data exists
  if (!title && !description) return null;

  return (
    <Helmet>
      <html lang="en" />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      {preloadImages?.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} />
      ))}
    </Helmet>
  );
}