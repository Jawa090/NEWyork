import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { projectTypeServices, tradeServices } from '@/data/servicesData';

// Main Service Categories
const mainServices = projectTypeServices;

// Trade Services
const tradeServicesData = tradeServices;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Construction Cost Estimating Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Comprehensive Construction Estimating Solutions
          </h2>
          <p className="text-muted-foreground">
            Construction takeoffs are important to control costs and plan resources. It also helps you complete tasks on time. In the competitive market, we cannot afford even small errors. That's why we prepare a full material list with needed expertise and measure all material and labor hours for best results.
          </p>
        </motion.div>

        {/* Main Service Categories */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-bold text-foreground mb-8 text-center"
          >
            Project Type Estimating
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {mainServices.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Link
                  to={`/services/${service.slug}/`}
                  className="group block h-full p-8 bg-card rounded-2xl border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trade Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-bold text-foreground mb-8 text-center"
          >
            Trade Estimating and Takeoff Services
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tradeServicesData.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Link
                  to={`/services/${service.slug}/`}
                  className="group block h-full p-6 bg-card rounded-2xl border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="xl" className="group" asChild>
            <Link to="/contact/">
              Get 20% OFF - Contact Us Now!
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
