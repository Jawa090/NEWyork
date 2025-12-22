import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCheckCircle, HiClock, HiShieldCheck, HiUserGroup, HiDocument, HiBriefcase, HiArrowRight } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: HiClock,
    title: 'Fast Turnaround Time of 24 Hours',
    description: 'Quick delivery without compromising accuracy. Rush services available.',
  },
  {
    icon: HiUserGroup,
    title: '24/7 Support for Clients',
    description: 'Round-the-clock support to help you with any questions or revisions.',
  },
  {
    icon: HiShieldCheck,
    title: 'Complete Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies for your projects.',
  },
  {
    icon: HiBriefcase,
    title: 'Best Budget Planning',
    description: 'Detailed cost breakdowns to help you plan and manage your project budget effectively.',
  },
  {
    icon: HiDocument,
    title: 'Clear and Transparent Reports',
    description: 'Easy-to-read Excel format reports with detailed material lists and labor hours.',
  },
  {
    icon: HiCheckCircle,
    title: 'Customized Solutions',
    description: 'Tailored estimating services designed to meet your specific project needs.',
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
              Why Choose Our Expert Team
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For the past 20 years, we have been giving you the best New York construction estimating services. We have supported many projects from small ones to industrial developments. Our experience makes us the perfect choice for your cost analysis needs. We have a team of professionals who give detailed quantity takeoffs for your project with many reviews and trade construction estimates for accurate numbers.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="default" size="lg" className="group" asChild>
                <Link to="/about">
                  Learn More About Us
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="/images/why-choose-us.png"
                alt="Construction Estimating Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />

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
