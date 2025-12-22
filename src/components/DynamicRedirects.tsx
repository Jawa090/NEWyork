import { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import ExternalRedirect from './ExternalRedirect';

interface RedirectRule {
  id: string;
  fromUrl: string;
  toUrl: string;
  type: '301' | '302';
  isActive: boolean;
  createdAt: string;
}

export const useDynamicRedirects = () => {
  const [redirects, setRedirects] = useState<RedirectRule[]>([]);

  useEffect(() => {
    // Load redirects from both JSON file and localStorage
    const loadRedirects = async () => {
      try {
        // First, load from JSON file
        const jsonModule = await import('@/data/redirects.json');
        const jsonRedirects = jsonModule.default || [];
        
        // Then, load from localStorage (for SEO Manager additions)
        const stored = localStorage.getItem('redirects');
        const localRedirects = stored ? JSON.parse(stored) : [];
        
        // Combine both sources, with localStorage taking precedence
        const allRedirects = [...jsonRedirects, ...localRedirects];
        
        // Remove duplicates based on fromUrl
        const uniqueRedirects = allRedirects.reduce((acc: RedirectRule[], current: RedirectRule) => {
          const existing = acc.find(item => item.fromUrl === current.fromUrl);
          if (!existing) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        setRedirects(uniqueRedirects);
      } catch (error) {
        console.error('Error loading redirects:', error);
      }
    };

    // Load initial redirects
    loadRedirects();

    // Listen for redirect updates from SEO Manager
    const handleRedirectsUpdate = (event: CustomEvent) => {
      loadRedirects(); // Reload all redirects when updated
    };

    window.addEventListener('redirectsUpdated', handleRedirectsUpdate as EventListener);

    return () => {
      window.removeEventListener('redirectsUpdated', handleRedirectsUpdate as EventListener);
    };
  }, []);

  // Filter only active redirects and return Route elements
  const activeRedirects = redirects.filter(redirect => redirect.isActive);

  return activeRedirects.map((redirect) => {
    const fromPath = redirect.fromUrl.trim();
    const toUrl = redirect.toUrl.trim();
    const isExternal = toUrl.startsWith('http://') || toUrl.startsWith('https://');

    return (
      <Route
        key={redirect.id}
        path={fromPath}
        element={
          isExternal ? (
            <ExternalRedirect to={toUrl} />
          ) : (
            <Navigate to={toUrl} replace />
          )
        }
      />
    );
  });
};

// This component is no longer needed, but keeping for compatibility
const DynamicRedirects = () => null;

export default DynamicRedirects;