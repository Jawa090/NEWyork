import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import { services } from '@/data/servicesData';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Construction Estimating Services NYC | Electrical, Plumbing, HVAC | New York Estimators</title>
        <meta name="description" content="Professional construction estimating services in New York. Electrical, plumbing, HVAC, mechanical, and concrete estimates. Fast turnaround, 98% accuracy." />
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
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Construction Estimating Services NYC
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We provide the most reliable and accurate construction estimating services in New York. From residential houses to commercial and industrial infrastructures, our 40+ expert teams ensure project success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <HiCheck className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Get a Quote <HiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-grey-cool border border-border/50 shadow-medium hover-lift transition-all duration-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
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

export default Services;
