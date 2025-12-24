import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiDocumentText, HiCalculator, HiCog } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const ProfessionalTakeoff = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Professional Takeoffs</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
            Professional Construction Takeoff Services in New York
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Construction takeoffs are important to control costs and plan resources. It also helps you complete tasks on time. In the competitive market, we cannot afford even small errors. That's why, we prepare a full material list with needed expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Construction estimating New York will give you these numbers after careful reviews. We measure all the material and labor hours for best results. The experts support smooth planning and bidding for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Comprehensive Takeoff Coverage
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our takeoffs include structural, building and MEP trades. These reports help you avoid any shortage and help you save cost. We also give you value engineering advice and alternative options. This, in turn, allows you to avoid any cost or waste.
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: HiDocumentText,
                  title: 'Structural Takeoffs',
                  description: 'Complete structural analysis and material quantification'
                },
                {
                  icon: HiCog,
                  title: 'Building Takeoffs',
                  description: 'Comprehensive building component measurements'
                },
                {
                  icon: HiCalculator,
                  title: 'MEP Trades',
                  description: 'Mechanical, electrical, and plumbing system takeoffs'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Eliminate expenses and need for full-time estimator',
                'Reports for better decision making',
                'Principles of clarity and honesty',
                'Value engineering advice and alternatives'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="default" size="lg" className="group" asChild>
                <Link to="/contact">
                  Book a Call Today
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
            <div className="relative rounded-2xl overflow-hidden bg-primary/10 p-8">
              {/* Main Content */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <HiDocumentText className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-4">
                  Precision in Every Detail
                </h4>
                <p className="text-muted-foreground">
                  You can contact our team to book a call and work with the best construction estimating services New York.
                </p>
              </div>

              {/* Contact Info */}
              <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Contact us directly:</p>
                <a
                  href="mailto:info@constructionestimatingnewyork.com"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  info@constructionestimatingnewyork.com
                </a>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center"
              >
                <HiCalculator className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
              >
                <HiCog className="w-6 h-6 text-primary" />
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

export default ProfessionalTakeoff;