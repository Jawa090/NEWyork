import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';

const locations = [
  { name: 'New York City', description: 'Serving all five boroughs with comprehensive construction estimating services.' },
  { name: 'Hempstead', description: 'Professional estimates for residential and commercial projects in Hempstead.' },
  { name: 'Brookhaven', description: 'Accurate takeoffs for Suffolk County contractors and developers.' },
  { name: 'Oyster Bay', description: 'Construction cost estimates for projects in Nassau County.' },
  { name: 'Buffalo', description: 'Serving Western New York with reliable estimating services.' },
  { name: 'Islip', description: 'Complete estimating solutions for Long Island projects.' },
  { name: 'North Hempstead', description: 'Professional estimates for residential and commercial builds.' },
  { name: 'Babylon', description: 'Accurate cost estimation for South Shore projects.' },
  { name: 'Yonkers', description: 'Construction estimating services for Westchester County.' },
  { name: 'Huntington', description: 'Detailed takeoffs for Huntington area contractors.' },
  { name: 'Rochester', description: 'Upstate New York estimating services you can trust.' },
  { name: 'Ramapo', description: 'Professional estimates for Rockland County projects.' },
  { name: 'Syracuse', description: 'Central New York construction estimating expertise.' },
  { name: 'Amherst', description: 'Comprehensive estimates for Western NY developments.' },
];

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Locations We Serve | NYC & All Major NY Cities | New York Estimators</title>
        <meta name="description" content="Construction estimating services across New York State. Serving NYC, Buffalo, Rochester, Syracuse, Yonkers, and all major cities. Local market expertise." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-56 pb-16 md:pt-60 md:pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Coverage Area</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Construction Estimating Services Across New York
              </h1>
              <p className="text-lg text-primary-foreground/80">
                From NYC to Buffalo, we provide bid-winning construction estimates with local market expertise across the entire state.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <HiLocationMarker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">{location.name}</h3>
                  <p className="text-muted-foreground text-sm">{location.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Locations;
