import { HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi';

const TopNav = () => {
  return (
    <div className="bg-gradient-to-r from-primary/95 to-primary text-primary-foreground py-3 text-sm border-b border-primary-foreground/10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left side - Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <HiPhone className="w-4 h-4" />
              </div>
              <a href="tel:+12125551234" className="hover:text-accent transition-colors font-medium">
                (212) 555-1234
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <HiMail className="w-4 h-4" />
              </div>
              <a href="mailto:zzz@gmail.com" className="hover:text-accent transition-colors font-medium">
                zzz@gmail.com
              </a>
            </div>
          </div>

          {/* Right side - Business hours & location */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <HiClock className="w-4 h-4" />
              </div>
              <span className="text-primary-foreground/90 font-medium">Mon-Fri: 8AM-6PM EST</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <HiLocationMarker className="w-4 h-4" />
              </div>
              <span className="text-primary-foreground/90 font-medium">New York, NY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;