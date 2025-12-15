import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUserGroup, HiLightBulb, HiHeart } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamSection from '@/components/about/TeamSection';
import CompanyHistory from '@/components/about/CompanyHistory';
import TechnologyTools from '@/components/about/TechnologyTools';
import WhyChooseUsDetailed from '@/components/about/WhyChooseUsDetailed';

const values = [
  { icon: HiCheckCircle, title: 'Accuracy', description: 'Precise estimates you can trust for bidding and budgeting.' },
  { icon: HiLightBulb, title: 'Transparency', description: 'Clear breakdowns with no hidden costs or surprises.' },
  { icon: HiUserGroup, title: 'Speed', description: 'Fast turnaround without compromising quality.' },
  { icon: HiHeart, title: 'Client Success', description: 'Your success is our success. We help you win bids.' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | New York Estimators - Construction Estimating Experts</title>
        <meta name="description" content="Learn about New York Estimators - 10+ years serving NYC contractors with accurate construction cost estimates. Our mission, vision, and experienced team." />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">About Us</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                New York's Trusted Estimating Partner
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Professional construction cost estimating services serving New York City and all major cities across New York State.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  New York Estimators is a professional construction cost estimating company with over 10 years of experience serving contractors, subcontractors, developers, and architects across New York.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our team of US-based estimators uses industry-leading software including Planswift, Bluebeam, and RSMeans to deliver accurate, detailed estimates that help you win more bids and maximize project profitability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We specialize in all major construction trades including electrical, plumbing, HVAC, mechanical, and concrete work, providing CSI-formatted estimates that meet industry standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl bg-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-serif font-bold text-primary mb-2">10+</p>
                    <p className="text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-card rounded-2xl border border-border/50"
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver accurate, trade-specific, and deadline-driven estimates that help contractors win more bids and complete projects profitably. We're committed to providing exceptional value through precision, speed, and professional service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border/50"
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted construction estimating partner in New York, known for accuracy, reliability, and client success. We aim to set the industry standard for professional estimating services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 text-center hover-lift"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <CompanyHistory />

        {/* Team Section */}
        <TeamSection />

        {/* Technology & Tools */}
        <TechnologyTools />

        {/* Why Choose Us Detailed */}
        <WhyChooseUsDetailed />
      </main>

      <Footer />
    </>
  );
};

export default About;
