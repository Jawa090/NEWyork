import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { serviceAreasData } from '@/data/serviceAreas';
import seoDataFile from '@/data/seo-data.json';
import { useRedirects, RedirectRule } from '@/hooks/useRedirects';
import { serviceCategories, generateSlug } from '@/data/services';

interface SEOData {
  path: string;
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

// Generate location pages from service areas data
const generateLocationPages = () => {
  const locationPages: { path: string; name: string; category: string }[] = [];
  
  serviceAreasData.forEach(stateData => {
    stateData.areas.forEach(city => {
      const stateLower = stateData.state.toLowerCase().replace(/\s+/g, '-');
      const cityLower = city.toLowerCase().replace(/\s+/g, '-');
      locationPages.push({
        path: `/service-areas/${stateLower}/${cityLower}`,
        name: `${city}, ${stateData.state}`,
        category: 'Location'
      });
    });
  });
  
  return locationPages;
};

// Generate service pages from serviceCategories (only dropdown services)
const generateServicePages = () => {
  return serviceCategories.map(service => ({
    path: `/${generateSlug(service)}`,
    name: service,
    category: 'Service'
  }));
};

const pages = [
  { path: '/', name: 'Home', category: 'Main' },
  { path: '/services', name: 'Services', category: 'Main' },
  { path: '/about', name: 'About Us', category: 'Main' },
  { path: '/contact', name: 'Contact', category: 'Main' },
  { path: '/portfolio', name: 'Portfolio', category: 'Main' },
  { path: '/blog', name: 'Blog', category: 'Main' },
  { path: '/service-areas', name: 'Service Areas', category: 'Main' },
  { path: '/get-free-quote', name: 'Get Free Quote', category: 'Main' },
  { path: '/sample', name: 'Samples', category: 'Main' },
  { path: '/pricing', name: 'Pricing', category: 'Main' },
  ...generateServicePages(),
  ...generateLocationPages()
];

const defaultSEO: SEOData = {
  path: '',
  title: 'Paradise Estimating - Professional Construction Estimating',
  description: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation. Accurate estimates for residential & commercial projects.',
  robots: 'index, follow',
  canonical: 'https://paradiseestimating.com',
  ogLocale: 'en_US',
  ogType: 'website',
  ogTitle: 'Paradise Estimating - Professional Construction Estimating Services',
  ogDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for all types of construction projects.',
  ogUrl: 'https://paradiseestimating.com',
  ogSiteName: 'Paradise Estimating',
  ogImage: 'https://paradiseestimating.com/assets/logo.webp',
  articlePublisher: 'https://facebook.com/paradiseestimating',
  articleModifiedTime: new Date().toISOString(),
  twitterCard: 'summary_large_image',
  twitterSite: '@paradiseestimate',
  twitterTitle: 'Paradise Estimating - Professional Construction Estimating',
  twitterDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for construction projects.',
  twitterImage: 'https://paradiseestimating.com/assets/logo.webp',
  schema: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Paradise Estimating",
    "description": "Professional construction estimating and quantity takeoff services",
    "url": "https://paradiseestimating.com",
    "logo": "https://paradiseestimating.com/assets/logo.webp",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceType": "Construction Estimating Services",
    "areaServed": "United States"
  }, null, 2),
};

export default function SEOManager() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [seoData, setSeoData] = useState<SEOData>(defaultSEO);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(false);
  const [savedPages, setSavedPages] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'seo' | 'redirects'>('seo');
  const [newRedirect, setNewRedirect] = useState<Partial<RedirectRule>>({
    fromUrl: '',
    toUrl: '',
    type: '301',
    isActive: true
  });

  const { toast } = useToast();
  const { redirects, addRedirect, updateRedirect, deleteRedirect, toggleRedirect } = useRedirects();

  const categories = ['All', 'Main', 'Service', 'Location'];

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         page.path.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || page.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const checkSEOStatus = (path: string): boolean => {
    // Check if page was recently saved (will show green)
    if (savedPages.has(path)) {
      return true;
    }

    // Check existing JSON data
    const jsonData = seoDataFile[path as keyof typeof seoDataFile];
    if (!jsonData) return false;

    const data = jsonData as any;
    const hasValidTitle = data.title && data.title.length > 10;
    const hasValidDescription = data.description && data.description.length > 50;
    const hasValidCanonical = data.canonical && !data.canonical.includes('yourdomain.com');

    return hasValidTitle && hasValidDescription && hasValidCanonical;
  };

  const getPageDefaults = (path: string, pageName: string): SEOData => {
    const baseUrl = 'https://paradiseestimating.com';
    const isLocationPage = path.includes('/service-areas/') && path.split('/').filter(Boolean).length === 3;

    if (isLocationPage) {
      const pathParts = path.split('/').filter(Boolean);
      const state = pathParts[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const city = pathParts[2].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      return {
        path,
        title: `Construction Estimating Services in ${city}, ${state} - Paradise Estimating`,
        description: `Professional construction estimating and quantity takeoff services in ${city}, ${state}. Get accurate cost estimates for residential, commercial, and industrial projects.`,
        robots: 'index, follow',
        canonical: `${baseUrl}${path}`,
        ogLocale: 'en_US',
        ogType: 'website',
        ogTitle: `Construction Estimating Services in ${city}, ${state}`,
        ogDescription: `Expert construction estimating services in ${city}, ${state}. Accurate quantity takeoffs and cost estimation for all project types.`,
        ogUrl: `${baseUrl}${path}`,
        ogSiteName: 'Paradise Estimating',
        ogImage: `${baseUrl}/assets/logo.webp`,
        articlePublisher: 'https://facebook.com/paradiseestimating',
        articleModifiedTime: new Date().toISOString(),
        twitterCard: 'summary_large_image',
        twitterSite: '@paradiseestimate',
        twitterTitle: `Construction Estimating Services in ${city}, ${state}`,
        twitterDescription: `Professional construction estimating services in ${city}, ${state}. Get accurate estimates today.`,
        twitterImage: `${baseUrl}/assets/logo.webp`,
        schema: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Paradise Estimating",
          "description": `Professional construction estimating services in ${city}, ${state}`,
          "url": `${baseUrl}${path}`,
          "logo": `${baseUrl}/assets/logo.webp`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": state,
            "addressCountry": "US"
          },
          "serviceType": "Construction Estimating Services",
          "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {
              "@type": "State",
              "name": state
            }
          }
        }, null, 2),
      };
    }

    return {
      path,
      title: `${pageName} - Paradise Estimating`,
      description: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      robots: 'index, follow',
      canonical: `${baseUrl}${path}`,
      ogLocale: 'en_US',
      ogType: 'website',
      ogTitle: `${pageName} - Paradise Estimating`,
      ogDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      ogUrl: `${baseUrl}${path}`,
      ogSiteName: 'Paradise Estimating',
      ogImage: `${baseUrl}/assets/logo.webp`,
      articlePublisher: 'https://facebook.com/paradiseestimating',
      articleModifiedTime: new Date().toISOString(),
      twitterCard: 'summary_large_image',
      twitterSite: '@paradiseestimate',
      twitterTitle: `${pageName} - Paradise Estimating`,
      twitterDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
      twitterImage: `${baseUrl}/assets/logo.webp`,
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${pageName} - Paradise Estimating`,
        "description": `Professional construction estimating services for ${pageName.toLowerCase()}`,
        "url": `${baseUrl}${path}`,
      }, null, 2),
    };
  };
  const handleEdit = (path: string) => {
    const jsonData = seoDataFile[path as keyof typeof seoDataFile];
    const page = pages.find(p => p.path === path);

    if (jsonData) {
      const data = jsonData as any;
      setSeoData({
        path,
        title: data.title || '',
        description: data.description || '',
        robots: data.robots || 'index, follow',
        canonical: data.canonical || '',
        ogLocale: data.ogLocale || 'en_US',
        ogType: data.ogType || 'website',
        ogTitle: data.ogTitle || '',
        ogDescription: data.ogDescription || '',
        ogUrl: data.ogUrl || '',
        ogSiteName: data.ogSiteName || 'Paradise Estimating',
        ogImage: data.ogImage || 'https://paradiseestimating.com/assets/logo.webp',
        articlePublisher: data.articlePublisher || 'https://facebook.com/paradiseestimating',
        articleModifiedTime: data.articleModifiedTime || new Date().toISOString(),
        twitterCard: data.twitterCard || 'summary_large_image',
        twitterSite: data.twitterSite || '@paradiseestimate',
        twitterTitle: data.twitterTitle || '',
        twitterDescription: data.twitterDescription || '',
        twitterImage: data.twitterImage || 'https://paradiseestimating.com/assets/logo.webp',
        schema: data.schema || ''
      });
    } else {
      setSeoData(getPageDefaults(path, page?.name || 'Page'));
    }

    setSelectedPage(path);
  };

  const saveToJSONFile = async (path: string, data: SEOData) => {
    try {
      // Call Vite plugin API to save to actual JSON file
      const response = await fetch('/api/save-seo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path,
          seoData: {
            title: data.title,
            description: data.description,
            robots: data.robots,
            canonical: data.canonical,
            ogLocale: data.ogLocale,
            ogType: data.ogType,
            ogTitle: data.ogTitle,
            ogDescription: data.ogDescription,
            ogUrl: data.ogUrl,
            ogSiteName: data.ogSiteName,
            ogImage: data.ogImage,
            articlePublisher: data.articlePublisher,
            articleModifiedTime: data.articleModifiedTime,
            twitterCard: data.twitterCard,
            twitterSite: data.twitterSite,
            twitterTitle: data.twitterTitle,
            twitterDescription: data.twitterDescription,
            twitterImage: data.twitterImage,
            schema: data.schema
          }
        })
      });

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('Error saving to JSON file:', error);
      return false;
    }
  };

  const handleSave = async () => {
    if (!selectedPage) return;

    setIsLoading(true);
    try {
      // Save to JSON file (this would be an API call in production)
      const success = await saveToJSONFile(selectedPage, seoData);

      if (success) {
        // Mark this page as saved (will show green dot)
        setSavedPages(prev => new Set([...prev, selectedPage]));
        
        toast({
          title: 'SEO Data Saved Successfully! 🎉',
          description: 'Changes automatically saved to JSON file. Commit and deploy to see changes on live site.',
        });
        
        setSelectedPage(null);
      } else {
        throw new Error('Failed to save to JSON file');
      }
    } catch (error) {
      toast({
        title: 'Save Failed',
        description: 'There was an error saving the SEO data. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setSelectedPage(null);
  };

  // Redirect management functions
  const handleAddRedirect = async () => {
    if (!newRedirect.fromUrl || !newRedirect.toUrl) {
      toast({
        title: 'Error',
        description: 'Please fill in both From URL and To URL fields.',
        variant: 'destructive'
      });
      return;
    }

    const success = await addRedirect({
      fromUrl: newRedirect.fromUrl!,
      toUrl: newRedirect.toUrl!,
      type: newRedirect.type || '301',
      isActive: newRedirect.isActive || true
    });

    if (success) {
      setNewRedirect({
        fromUrl: '',
        toUrl: '',
        type: '301',
        isActive: true
      });
      
      toast({
        title: 'Redirect Added & Active! 🎉',
        description: 'New redirect rule is now working on your site.',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Failed to add redirect. Please try again.',
        variant: 'destructive'
      });
    }
  };

  const handleDeleteRedirect = async (id: string) => {
    const success = await deleteRedirect(id);
    if (success) {
      toast({
        title: 'Redirect Deleted',
        description: 'Redirect rule has been removed.',
      });
    }
  };

  const handleToggleRedirect = async (id: string) => {
    const success = await toggleRedirect(id);
    if (success) {
      toast({
        title: 'Redirect Updated',
        description: 'Redirect status has been changed.',
      });
    }
  };

  const handleUpdateRedirect = async (id: string, updates: Partial<RedirectRule>) => {
    const success = await updateRedirect(id, updates);
    if (success) {
      toast({
        title: 'Redirect Updated',
        description: 'Changes have been saved.',
      });
    }
  };

  if (selectedPage) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <Button onClick={handleCancel} variant="ghost" className="mb-4">
          ← Back to SEO Manager
        </Button>
        
        <Card>
          <CardHeader>
            <CardTitle>Edit SEO Tags - {pages.find(p => p.path === selectedPage)?.name}</CardTitle>
            <p className="text-sm text-gray-600">
              Changes will automatically update the JSON file and work on live site after deployment.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Title (Max 60 characters)</Label>
              <Input 
                value={seoData.title} 
                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })} 
                maxLength={60}
              />
              <span className="text-xs text-gray-500">{seoData.title.length}/60</span>
            </div>

            <div className="space-y-2">
              <Label>Description (Max 160 characters)</Label>
              <Textarea 
                value={seoData.description} 
                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })} 
                maxLength={160}
                rows={3}
              />
              <span className="text-xs text-gray-500">{seoData.description.length}/160</span>
            </div>

            <div className="space-y-2">
              <Label>Robots</Label>
              <Input 
                value={seoData.robots} 
                onChange={(e) => setSeoData({ ...seoData, robots: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Canonical URL</Label>
              <Input 
                value={seoData.canonical} 
                onChange={(e) => setSeoData({ ...seoData, canonical: e.target.value })} 
              />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Open Graph Tags</h3>

            <div className="space-y-2">
              <Label>OG Locale</Label>
              <Input 
                value={seoData.ogLocale} 
                onChange={(e) => setSeoData({ ...seoData, ogLocale: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>OG Type</Label>
              <Input 
                value={seoData.ogType} 
                onChange={(e) => setSeoData({ ...seoData, ogType: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>OG Title</Label>
              <Input 
                value={seoData.ogTitle} 
                onChange={(e) => setSeoData({ ...seoData, ogTitle: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>OG Description</Label>
              <Textarea 
                value={seoData.ogDescription} 
                onChange={(e) => setSeoData({ ...seoData, ogDescription: e.target.value })} 
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>OG URL</Label>
              <Input 
                value={seoData.ogUrl} 
                onChange={(e) => setSeoData({ ...seoData, ogUrl: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>OG Site Name</Label>
              <Input 
                value={seoData.ogSiteName} 
                onChange={(e) => setSeoData({ ...seoData, ogSiteName: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>OG Image</Label>
              <Input 
                value={seoData.ogImage} 
                onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Article Publisher</Label>
              <Input 
                value={seoData.articlePublisher} 
                onChange={(e) => setSeoData({ ...seoData, articlePublisher: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Article Modified Time</Label>
              <Input 
                value={seoData.articleModifiedTime} 
                onChange={(e) => setSeoData({ ...seoData, articleModifiedTime: e.target.value })} 
              />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Twitter Tags</h3>

            <div className="space-y-2">
              <Label>Twitter Card</Label>
              <Input 
                value={seoData.twitterCard} 
                onChange={(e) => setSeoData({ ...seoData, twitterCard: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Twitter Site</Label>
              <Input 
                value={seoData.twitterSite} 
                onChange={(e) => setSeoData({ ...seoData, twitterSite: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Twitter Title</Label>
              <Input 
                value={seoData.twitterTitle} 
                onChange={(e) => setSeoData({ ...seoData, twitterTitle: e.target.value })} 
              />
            </div>

            <div className="space-y-2">
              <Label>Twitter Description</Label>
              <Textarea 
                value={seoData.twitterDescription} 
                onChange={(e) => setSeoData({ ...seoData, twitterDescription: e.target.value })} 
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>Twitter Image</Label>
              <Input 
                value={seoData.twitterImage} 
                onChange={(e) => setSeoData({ ...seoData, twitterImage: e.target.value })} 
              />
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-4">Schema Markup</h3>

            <div className="space-y-2">
              <Label>Schema JSON-LD</Label>
              <Textarea 
                value={seoData.schema} 
                onChange={(e) => setSeoData({ ...seoData, schema: e.target.value })} 
                rows={6}
                className="font-mono text-sm"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button onClick={handleSave} className="flex-1" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save SEO Tags'}
              </Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const completedCount = filteredPages.filter(page => checkSEOStatus(page.path)).length;
  const totalCount = filteredPages.length;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">SEO Manager</h1>
        <p className="text-gray-600">
          Manage SEO tags and URL redirects. Changes automatically update and work on live site after deployment.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'seo' ? 'default' : 'outline'}
            onClick={() => setActiveTab('seo')}
          >
            SEO Tags
          </Button>
          <Button
            variant={activeTab === 'redirects' ? 'default' : 'outline'}
            onClick={() => setActiveTab('redirects')}
          >
            URL Redirects
          </Button>
        </div>
      </div>

      {activeTab === 'seo' && (
        <>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Showing {totalCount} pages • {completedCount} completed • {totalCount - completedCount} incomplete
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pages ({totalCount})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredPages.map((page) => {
                  const isComplete = checkSEOStatus(page.path);
                  return (
                    <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div 
                          className={`w-4 h-4 rounded-full flex-shrink-0 ${isComplete ? 'bg-green-500' : 'bg-red-500'}`} 
                          title={isComplete ? 'SEO Complete' : 'SEO Incomplete'} 
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold truncate">{page.name}</h3>
                          <p className="text-sm text-gray-500 truncate">{page.path}</p>
                        </div>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded flex-shrink-0">
                          {page.category}
                        </span>
                      </div>
                      <Button onClick={() => handleEdit(page.path)} className="ml-4 flex-shrink-0">
                        Edit
                      </Button>
                    </div>
                  );
                })}
                {filteredPages.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No pages found matching your search.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === 'redirects' && (
        <>
          {/* Add New Redirect */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Redirect</CardTitle>
              <p className="text-sm text-gray-600">
                Create URL redirects to redirect old URLs to new ones. Use 301 for permanent redirects (SEO friendly).
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>From URL</Label>
                  <Input
                    placeholder="/old-page/"
                    value={newRedirect.fromUrl}
                    onChange={(e) => setNewRedirect({ ...newRedirect, fromUrl: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>To URL</Label>
                  <Input
                    placeholder="/new-page/"
                    value={newRedirect.toUrl}
                    onChange={(e) => setNewRedirect({ ...newRedirect, toUrl: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newRedirect.type}
                    onChange={(e) => setNewRedirect({ ...newRedirect, type: e.target.value as '301' | '302' })}
                  >
                    <option value="301">301 (Permanent)</option>
                    <option value="302">302 (Temporary)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button onClick={handleAddRedirect} className="w-full">
                    Add Redirect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Existing Redirects */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Redirects ({redirects.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {redirects.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No redirects configured yet. Add your first redirect above.
                </div>
              ) : (
                <div className="space-y-2">
                  {redirects.map((redirect) => (
                    <div key={redirect.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div 
                          className={`w-4 h-4 rounded-full flex-shrink-0 ${redirect.isActive ? 'bg-green-500' : 'bg-gray-400'}`} 
                          title={redirect.isActive ? 'Active' : 'Inactive'} 
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Input
                              value={redirect.fromUrl}
                              onChange={(e) => handleUpdateRedirect(redirect.id, { fromUrl: e.target.value })}
                              className="text-sm"
                              placeholder="From URL"
                            />
                            <span className="text-gray-400">→</span>
                            <Input
                              value={redirect.toUrl}
                              onChange={(e) => handleUpdateRedirect(redirect.id, { toUrl: e.target.value })}
                              className="text-sm"
                              placeholder="To URL"
                            />
                          </div>
                          <p className="text-xs text-gray-500">
                            {redirect.type} redirect • Created {new Date(redirect.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <select
                            value={redirect.type}
                            onChange={(e) => handleUpdateRedirect(redirect.id, { type: e.target.value as '301' | '302' })}
                            className="text-xs p-1 border rounded"
                          >
                            <option value="301">301</option>
                            <option value="302">302</option>
                          </select>
                          <Button
                            size="sm"
                            variant={redirect.isActive ? "default" : "outline"}
                            onClick={() => handleToggleRedirect(redirect.id)}
                          >
                            {redirect.isActive ? 'Active' : 'Inactive'}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteRedirect(redirect.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}