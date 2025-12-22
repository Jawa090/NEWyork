import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { projectTypeServices } from '@/data/servicesData';
import { trades } from '@/data/tradesData';
import TopNav from './TopNav';

const navLinks = [
  { name: 'Home', href: '/' },
  // { name: 'Services', href: '/services', hasDropdown: true, dropdownType: 'services' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  // { name: 'Sample Estimates', href: '/samples' },
  // { name: 'Locations', href: '/locations' },
  // { name: 'Trade', href: '/trade', hasDropdown: true, dropdownType: 'trades' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTradesOpen, setIsTradesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsTradesOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopNav />
      <header className="bg-white shadow-md border-b border-gray-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png.png" 
              alt="New York Estimators" 
              className="h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => link.dropdownType === 'services' ? setIsServicesOpen(true) : setIsTradesOpen(true)}
                    onMouseLeave={() => link.dropdownType === 'services' ? setIsServicesOpen(false) : setIsTradesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                        (link.dropdownType === 'services' && location.pathname.startsWith('/services')) ||
                        (link.dropdownType === 'trades' && location.pathname.startsWith('/trade'))
                        ? isScrolled
                          ? 'text-primary bg-primary/10'
                          : 'bg-white text-primary shadow-sm'
                        : isScrolled
                          ? 'text-foreground hover:text-primary hover:bg-primary/5'
                          : 'text-primary-foreground hover:text-accent hover:bg-primary-foreground/10'
                        }`}
                    >
                      {link.name}
                      <HiChevronDown className={`w-4 h-4 transition-transform ${
                        (link.dropdownType === 'services' && isServicesOpen) || 
                        (link.dropdownType === 'trades' && isTradesOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {((link.dropdownType === 'services' && isServicesOpen) || 
                        (link.dropdownType === 'trades' && isTradesOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card rounded-2xl shadow-strong border border-border/50 overflow-hidden ${
                            link.dropdownType === 'services' ? 'w-[500px]' : 'w-[600px]'
                          }`}
                        >
                          <div className="p-2">
                            <div className={`grid gap-2 ${
                              link.dropdownType === 'services' ? 'grid-cols-1' : 'grid-cols-2'
                            }`}>
                              {link.dropdownType === 'services' 
                                ? projectTypeServices.map((service) => (
                                    <Link
                                      key={service.slug}
                                      to={`/services/${service.slug}`}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <service.icon className="w-5 h-5" />
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                          {service.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                          {service.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))
                                : trades.map((trade) => (
                                    <Link
                                      key={trade.slug}
                                      to={`/trade/${trade.slug}`}
                                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <trade.icon className="w-5 h-5" />
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                          {trade.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                          {trade.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))
                              }
                            </div>
                            <div className="border-t border-border/50 mt-4 pt-2">
                              <Link
                                to={link.href}
                                className="flex items-center justify-center p-3 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
                              >
                                View All {link.name} →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-colors text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-card rounded-xl mb-4 shadow-medium"
            >
              <div className="py-4 px-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => link.dropdownType === 'services' 
                            ? setIsServicesOpen(!isServicesOpen) 
                            : setIsTradesOpen(!isTradesOpen)
                          }
                          className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          {link.name}
                          <HiChevronDown className={`w-4 h-4 transition-transform ${
                            (link.dropdownType === 'services' && isServicesOpen) || 
                            (link.dropdownType === 'trades' && isTradesOpen) ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {((link.dropdownType === 'services' && isServicesOpen) || 
                            (link.dropdownType === 'trades' && isTradesOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {link.dropdownType === 'services' 
                                ? projectTypeServices.map((service) => (
                                    <Link
                                      key={service.slug}
                                      to={`/services/${service.slug}`}
                                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {service.title}
                                    </Link>
                                  ))
                                : trades.map((trade) => (
                                    <Link
                                      key={trade.slug}
                                      to={`/trade/${trade.slug}`}
                                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {trade.title}
                                    </Link>
                                  ))
                              }
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 rounded-lg transition-colors ${location.pathname === link.href
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                          }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;
