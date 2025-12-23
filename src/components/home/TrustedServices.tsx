import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiClock, HiCalculator } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const TrustedServices = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Trusted Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              Trusted Construction Estimating Services in NYC
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For the past 20 years, we have been giving you the best New York construction estimating services. We have supported many projects from small ones to industrial developments. Our experience makes us the perfect choice for your cost analysis needs.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We have a team of professionals who give detailed quantity takeoffs for your project. We also offer trade construction estimates for accurate numbers. It allows us to manage complex projects and deliver the right numbers. We will also help you stay on your schedule and meet all the goals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our company deals with warehouses and hospitality places among others. You will get our support in the complete process of calculation. In short, New York construction estimating services will give you solid numbers in a clear format. This way, you can make better decisions to complete your work in success.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {[
                'Detailed quantity takeoffs for all project types',
                'Trade construction estimates for accurate numbers',
                'Complex project management with precise delivery',
                'Schedule adherence and goal achievement support'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="cta" size="lg" className="group" asChild>
                <Link to="/contact">
                  Get Your Free Quote
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-2 p-8 bg-primary/10 rounded-2xl border border-primary/20 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <HiClock className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">20+</p>
                <p className="text-foreground font-semibold mb-2">Years of Experience</p>
                <p className="text-muted-foreground text-sm">Serving NYC construction industry</p>
              </motion.div>

              {/* Project Range Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 bg-card rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HiCalculator className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-serif font-bold text-foreground mb-1">Small to</p>
                <p className="text-2xl font-serif font-bold text-foreground mb-2">Industrial</p>
                <p className="text-muted-foreground text-sm">All project sizes</p>
              </motion.div>

              {/* Professional Team Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 bg-card rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HiCheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-serif font-bold text-foreground mb-1">Expert</p>
                <p className="text-2xl font-serif font-bold text-foreground mb-2">Team</p>
                <p className="text-muted-foreground text-sm">Professional estimators</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedServices;