import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiDocumentText } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const backgroundImages = [
  '/images/hero-blueprint.jpg'
];

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const Counter = ({ end, suffix = '', label, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <p className="text-3xl md:text-4xl font-serif font-bold text-white">
        {count}{suffix}
      </p>
      <p className="text-white/80 text-sm mt-1">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { end: 20, suffix: '+', label: 'Years Experience', delay: 0 },
    { end: 40, suffix: '+', label: 'Expert Teams', delay: 200 },
    { end: 99, suffix: '%', label: 'Accuracy Rate', delay: 400 },
    { end: 2000, suffix: '+', label: 'Projects Completed', delay: 600 },
  ];

  return (
    <section className="relative pt-44 pb-12 md:pt-48 md:pb-16 overflow-hidden">
      {/* Background */}
      {/* Background Slider */}
      <div className="absolute inset-0">
        {/* Full green transparent overlay */}
        <div className="absolute inset-0 bg-primary/70 z-10" />

        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="NYC Construction"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
          >
            New York Construction Estimating Services
            <span className="relative">
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            The construction industry plays an important role in making communities and architecture in the USA. The right estimating is necessary for plans with better budgets. We provide complete services for residential, commercial and industrial projects with accurate cost estimates and market-based pricing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="cta" size="xl" className="w-full sm:w-auto group" asChild>
              <Link to="/contact/">
                Get a Free Quote
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group" asChild>
              <Link to="/samples/">
                <HiDocumentText className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                View Sample Estimates
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/20"
          >
            {stats.map((stat) => (
              <Counter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
