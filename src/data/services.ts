import { services } from './servicesData';

// Export service categories for dropdown
export const serviceCategories = services.map(service => service.title);

// Generate slug from service name
export const generateSlug = (serviceName: string): string => {
  return serviceName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};