import { useState, useEffect } from 'react';
import { HiX, HiClock, HiPhone, HiMail, HiGift } from 'react-icons/hi';

const TopNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end time to Dec 30th, 2025
    const endTime = new Date('2025-12-30T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary/90 to-accent text-white py-3 text-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          {/* Left - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <HiPhone className="w-4 h-4 text-yellow-300" />
              <a href="tel:+17187196171" className="font-medium hover:text-yellow-200 transition-colors">
                Call: (718) 719-6171
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <HiMail className="w-4 h-4 text-yellow-300" />
              <a href="mailto:zzz@gmail.com" className="font-medium hover:text-yellow-200 transition-colors">
                zzz@gmail.com
              </a>
            </div>
          </div>

          {/* Center - Offer Message */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <HiGift className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="font-bold text-yellow-300">🎄 CHRISTMAS SPECIAL!</span>
            </div>
            <span className="font-medium">Get 50% OFF on all estimates - Limited Time!</span>
          </div>

          {/* Right - Timer */}
          <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full border border-primary-foreground/30">
            <HiClock className="w-4 h-4 text-primary-foreground/80" />
            <span className="text-xs font-medium text-primary-foreground/90">ENDS IN:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs text-primary-foreground">
              <span className="bg-primary-foreground/30 px-2 py-1 rounded">{String(timeLeft.days).padStart(2, '0')}d</span>
              <span className="bg-primary-foreground/30 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="bg-primary-foreground/30 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="bg-primary-foreground/30 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 group"
        aria-label="Close banner"
      >
        <HiX className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default TopNav;