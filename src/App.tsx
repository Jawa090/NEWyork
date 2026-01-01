import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useDynamicRedirects } from "./components/DynamicRedirects";
import HttpsRedirect from "./components/HttpsRedirect";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Quote from "./pages/Quote";
import Samples from "./pages/Samples";
import Locations from "./pages/Locations";
import Trade from "./pages/Trade";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEOManager from "./pages/SEOManager";
import Sitemap from "./pages/Sitemap";
import DynamicSitemapXml from "./pages/DynamicSitemapXml";

const queryClient = new QueryClient();

const App = () => {
  const dynamicRedirects = useDynamicRedirects();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <HttpsRedirect />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about/" element={<About />} />
              <Route path="/services/" element={<Services />} />
              <Route path="/services/:slug/" element={<Services />} />
              <Route path="/pricing/" element={<Pricing />} />
              <Route path="/quote/" element={<Quote />} />
              <Route path="/samples/" element={<Samples />} />
              <Route path="/locations/" element={<Locations />} />
              <Route path="/trade/" element={<Trade />} />
              <Route path="/blog/" element={<Blog />} />
              <Route path="/blog/:slug/" element={<BlogPost />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/sitemap/" element={<Sitemap />} />
              <Route path="/sitemap.xml" element={<DynamicSitemapXml />} />

              {/* SEO Manager - Development Only */}
              {import.meta.env.DEV && (
                <Route path="/seo-manager/" element={<SEOManager />} />
              )}

              {/* Add dynamic redirects */}
              {dynamicRedirects}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
