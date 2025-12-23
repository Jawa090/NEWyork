import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { projectTypeServices, tradeServices } from '@/data/servicesData';
import { featuredTrades } from '@/data/tradesData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Match the navbar structure exactly
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get Free Quote', href: '/contact' },
  ];

  // Featured project type services for footer
  const featuredServices = [
    ...projectTypeServices.slice(0, 3), // First 3 project types
    ...tradeServices.slice(0, 3), // First 3 trade services
  ];

  // Featured trades for footer
  const footerTrades = featuredTrades.slice(0, 6);

  const locations = [
    'New York City',
    'Buffalo',
    'Rochester',
    'Syracuse',
    'Yonkers',
    'Brooklyn',
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo.png.png" 
                alt="New York Estimators" 
                className="h-28 w-auto object-contain brightness-0 invert drop-shadow-lg"
              />
            </Link>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6 max-w-md">
              Professional construction cost estimating services serving New York City. Accurate, fast & affordable estimates for all trades.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-primary-foreground">Contact Us</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">New York, NY 10001</span>
              </div>
              
              <div className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+12125551234" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  (212) 555-1234
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:zzz@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  zzz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} New York Estimators. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
