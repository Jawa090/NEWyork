import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Win More Bids?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Get accurate, professional estimates delivered within 24-48 hours. Start with a free quote today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group" asChild>
              <Link to="/quote">
                Get Your Free Quote
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="w-full sm:w-auto text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+12125551234">
                <HiPhone className="w-5 h-5" />
                (212) 555-1234
              </a>
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/60 text-sm mt-8"
          >
            No obligation • Confidential • Response within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
