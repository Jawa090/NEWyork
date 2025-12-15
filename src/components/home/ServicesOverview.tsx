import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiBeaker, HiCube, HiCog, HiTemplate, HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';

const services = [
  {
    icon: HiLightningBolt,
    title: 'Electrical Estimating',
    description: 'Power distribution, lighting systems, low voltage, fire alarm, and data communication takeoffs.',
    href: '/services/electrical',
  },
  {
    icon: HiBeaker,
    title: 'Plumbing Estimating',
    description: 'Water supply, drainage systems, fixtures, and underground piping cost estimates.',
    href: '/services/plumbing',
  },
  {
    icon: HiCog,
    title: 'Mechanical Estimating',
    description: 'Complete mechanical system takeoffs including equipment schedules and specifications.',
    href: '/services/mechanical',
  },
  {
    icon: HiTemplate,
    title: 'HVAC Estimating',
    description: 'Ductwork, equipment takeoff, load calculations, and mechanical schedules.',
    href: '/services/hvac',
  },
  {
    icon: HiCube,
    title: 'Concrete Estimating',
    description: 'Foundations, slabs, reinforcement, and formwork quantity takeoffs.',
    href: '/services/concrete',
  },
  {
    icon: HiOfficeBuilding,
    title: 'General Construction',
    description: 'Complete quantity takeoffs, labor & material pricing, and bid summaries.',
    href: '/services/general',
  },
];

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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Trade-Specific Estimating Services
          </h2>
          <p className="text-muted-foreground">
            We provide detailed, accurate cost estimates for all major construction trades. Our CSI-based approach ensures consistency and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                to={service.href}
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
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services <HiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
