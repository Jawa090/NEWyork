import { useState, useEffect } from 'react';

export interface RedirectRule {
  id: string;
  fromUrl: string;
  toUrl: string;
  type: '301' | '302';
  isActive: boolean;
  createdAt: string;
}

export const useRedirects = () => {
  const [redirects, setRedirects] = useState<RedirectRule[]>([]);

  // Load redirects from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('redirects');
    if (stored) {
      try {
        setRedirects(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading redirects:', error);
      }
    }
  }, []);

  // Save redirects to localStorage
  const saveRedirects = (newRedirects: RedirectRule[]) => {
    setRedirects(newRedirects);
    localStorage.setItem('redirects', JSON.stringify(newRedirects));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('redirectsUpdated'));
  };

  const addRedirect = async (redirect: Omit<RedirectRule, 'id' | 'createdAt'>): Promise<boolean> => {
    try {
      const newRedirect: RedirectRule = {
        ...redirect,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      
      const newRedirects = [...redirects, newRedirect];
      saveRedirects(newRedirects);
      return true;
    } catch (error) {
      console.error('Error adding redirect:', error);
      return false;
    }
  };

  const updateRedirect = async (id: string, updates: Partial<RedirectRule>): Promise<boolean> => {
    try {
      const newRedirects = redirects.map(redirect =>
        redirect.id === id ? { ...redirect, ...updates } : redirect
      );
      saveRedirects(newRedirects);
      return true;
    } catch (error) {
      console.error('Error updating redirect:', error);
      return false;
    }
  };

  const deleteRedirect = async (id: string): Promise<boolean> => {
    try {
      const newRedirects = redirects.filter(redirect => redirect.id !== id);
      saveRedirects(newRedirects);
      return true;
    } catch (error) {
      console.error('Error deleting redirect:', error);
      return false;
    }
  };

  const toggleRedirect = async (id: string): Promise<boolean> => {
    try {
      const newRedirects = redirects.map(redirect =>
        redirect.id === id ? { ...redirect, isActive: !redirect.isActive } : redirect
      );
      saveRedirects(newRedirects);
      return true;
    } catch (error) {
      console.error('Error toggling redirect:', error);
      return false;
    }
  };

  return {
    redirects,
    addRedirect,
    updateRedirect,
    deleteRedirect,
    toggleRedirect,
  };
};