import { motion } from 'framer-motion';
import { HiCheckCircle, HiClock, HiShieldCheck, HiUserGroup, HiDocument, HiBriefcase } from 'react-icons/hi';

const features = [
  {
    icon: HiDocument,
    title: 'CSI-Based Estimates',
    description: 'Industry-standard CSI MasterFormat organization for clear, professional documentation.',
  },
  {
    icon: HiClock,
    title: 'Fast 24-48hr Turnaround',
    description: 'Quick delivery without compromising accuracy. Rush services available.',
  },
  {
    icon: HiShieldCheck,
    title: 'NYC-Compliant Pricing',
    description: 'Local market knowledge with accurate NYC labor rates and material costs.',
  },
  {
    icon: HiUserGroup,
    title: 'US-Based Estimators',
    description: 'Experienced professionals who understand American construction practices.',
  },
  {
    icon: HiCheckCircle,
    title: 'Trade-Specific Takeoffs',
    description: 'Specialized estimators for each trade ensure detailed, accurate quantities.',
  },
  {
    icon: HiBriefcase,
    title: 'Contractor & Developer Focused',
    description: 'Tailored services designed to help you win more bids and maximize profits.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-grey-cool">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              New York's Trusted Construction Estimating Partner
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience serving contractors, subcontractors, and developers across New York, we've built a reputation for accuracy, reliability, and exceptional service. Our team uses industry-leading software and proven methodologies to deliver estimates you can trust.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-primary">
              {/* Abstract Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute border border-primary-foreground/20"
                      style={{
                        left: `${i * 20}%`,
                        top: `${i * 15}%`,
                        width: `${80 - i * 10}%`,
                        height: `${80 - i * 10}%`,
                        borderRadius: '1rem',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-7xl md:text-8xl font-serif font-bold text-primary-foreground mb-4">98%</p>
                  <p className="text-xl text-primary-foreground/90 font-medium">Accuracy Rate</p>
                  <p className="text-primary-foreground/70 text-sm mt-2">Based on client feedback</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 w-20 h-20 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center"
              >
                <HiCheckCircle className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center"
              >
                <HiClock className="w-8 h-8 text-primary-foreground" />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
