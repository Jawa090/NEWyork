import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Get a Quote', href: '/contact' },
    { name: 'Sample Estimates', href: '/samples' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Electrical Estimating', href: '/services/electrical' },
    { name: 'Plumbing Estimating', href: '/services/plumbing' },
    { name: 'HVAC Estimating', href: '/services/hvac' },
    { name: 'Mechanical Estimating', href: '/services/mechanical' },
    { name: 'Concrete Estimating', href: '/services/concrete' },
    { name: 'General Construction', href: '/services/general' },
  ];

  const locations = [
    'New York City',
    'Buffalo',
    'Rochester',
    'Syracuse',
    'Yonkers',
    'Brooklyn',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-serif font-bold text-xl">NY</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-tight">New York</p>
                <p className="text-xs text-primary-foreground/70 -mt-0.5">Estimators</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Professional construction cost estimating services serving New York City and all major cities across New York State. Accurate, fast & affordable estimates for all trades.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
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

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">
                  New York, NY 10001<br />United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-primary-foreground/60" />
                <a href="tel:+12125551234" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-primary-foreground/60" />
                <a href="mailto:info@nyestimators.com" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  info@nyestimators.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Locations We Serve</h5>
              <p className="text-primary-foreground/70 text-xs">
                {locations.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} New York Estimators. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
