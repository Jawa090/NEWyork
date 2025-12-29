import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Quote from "./pages/Quote";
import Samples from "./pages/Samples";
import Locations from "./pages/Locations";
import Trade from "./pages/Trade";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEOManager from "./pages/SEOManager";

const queryClient = new QueryClient();

const App = () => {

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/samples" element={<Samples />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />

              {/* SEO Manager - Development Only */}
              {import.meta.env.DEV && (
                <Route path="/seo-manager" element={<SEOManager />} />
              )}

              {/* Add dynamic redirects */}
            

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
