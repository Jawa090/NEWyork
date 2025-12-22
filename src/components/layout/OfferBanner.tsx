import { useState, useEffect } from 'react';
import { HiX, HiClock, HiSparkles } from 'react-icons/hi';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end time to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-accent text-white py-3 text-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <HiSparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="font-bold text-lg">SPECIAL OFFER</span>
            <HiSparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white/95 font-medium">
              Get <span className="text-yellow-300 font-bold text-lg">20% OFF</span> on all construction estimates!
            </span>
            
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <HiClock className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-medium">Ends in:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-yellow-300">
                <span className="bg-white/20 px-2 py-1 rounded text-sm">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-yellow-300/20 px-3 py-1 rounded-full">
            <span className="text-yellow-300 font-bold text-sm">Code:</span>
            <span className="font-mono font-bold text-yellow-100">SAVE20</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 group"
        aria-label="Close offer banner"
      >
        <HiX className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default OfferBanner;