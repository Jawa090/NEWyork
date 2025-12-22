import { motion } from 'framer-motion';
import { HiCheckCircle, HiUserGroup, HiLightBulb, HiHeart, HiClock, HiShieldCheck, HiDocumentText, HiCog } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/SEOHead';

const values = [
  { icon: HiCheckCircle, title: 'Accuracy', description: 'Precise estimates you can trust for bidding and budgeting.' },
  { icon: HiLightBulb, title: 'Transparency', description: 'Clear breakdowns with no hidden costs or surprises.' },
  { icon: HiUserGroup, title: 'Speed', description: 'Fast turnaround without compromising quality.' },
  { icon: HiHeart, title: 'Client Success', description: 'Your success is our success. We help you win bids.' },
];

const whyChooseUsReasons = [
  {
    title: '98% Accuracy Rate',
    description: 'We use advanced software to ensure every material and labor cost is accounted for.',
    icon: HiCheckCircle,
  },
  {
    title: 'Fast Turnaround',
    description: 'We know deadlines matter. Get your estimates back in 24 to 48 hours.',
    icon: HiClock,
  },
  {
    title: 'Cost-Effective',
    description: 'Save the expense of hiring a full-time in-house estimator.',
    icon: HiShieldCheck,
  },
  {
    title: 'Certified Professionals',
    description: 'Our team consists of seasoned estimators with deep knowledge of local market prices.',
    icon: HiUserGroup,
  },
  {
    title: 'Detailed Reports',
    description: 'Receive easy-to-read Excel sheets and color-coded markups.',
    icon: HiDocumentText,
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Submit Your Plans',
    description: 'Upload your blueprints (PDF, CAD, or TIF) through our secure portal.',
  },
  {
    step: '2',
    title: 'Expert Review',
    description: 'Our team analyzes the scope of work and performs a detailed takeoff.',
  },
  {
    step: '3',
    title: 'Receive Your Bid',
    description: 'We deliver a comprehensive cost estimate and material list ready for submission.',
  },
];

const services = [
  {
    title: 'Material Takeoffs',
    description: 'Detailed lists of every nut, bolt, and board required for your project.',
  },
  {
    title: 'Bid Estimates',
    description: 'Professional cost breakdowns that help you submit winning proposals.',
  },
  {
    title: 'Design-Stage Estimates',
    description: 'Budgeting support for architects and owners during the early planning phase.',
  },
  {
    title: 'Preliminary Estimates',
    description: 'Quick cost assessments to help you decide if a project is feasible.',
  },
  {
    title: 'Value Engineering',
    description: 'Smart suggestions to lower project costs without losing quality.',
  },
];

const software = [
  {
    name: 'PlanSwift',
    description: 'For rapid and accurate digital takeoffs.',
  },
  {
    name: 'Bluebeam Revu',
    description: 'For seamless markup and coordination of project plans.',
  },
  {
    name: 'STACK',
    description: 'For cloud-based takeoff and collaborative estimating.',
  },
  {
    name: 'Trimble Accubid',
    description: 'Specialized tools for electrical and MEP estimating.',
  },
  {
    name: 'RSMeans',
    description: 'We use up-to-date local market data for precise labor and material pricing.',
  },
];

const clientTypes = [
  {
    title: 'General Contractors',
    description: 'We provide full-scope estimates to help you manage large-scale bids.',
  },
  {
    title: 'Subcontractors',
    description: 'Specialized takeoffs for drywall, roofing, electrical, plumbing, and more.',
  },
  {
    title: 'Real Estate Developers',
    description: 'Accurate budget planning for residential and commercial developments.',
  },
  {
    title: 'Architects & Engineers',
    description: 'Precise cost analysis to keep your designs within the client\'s budget.',
  },
  {
    title: 'Home Builders',
    description: 'Simplified estimates for custom homes and renovations.',
  },
];

const faqs = [
  {
    question: 'How long does it take to get an estimate?',
    answer: 'Most standard projects are delivered within 24 to 48 hours. For larger, more complex commercial projects, we will provide a custom timeline before we begin.',
  },
  {
    question: 'What files do I need to send to get a quote?',
    answer: 'Simply upload your blueprints or architectural plans in PDF, CAD, or TIF format. We can work with anything from preliminary sketches to final construction documents.',
  },
  {
    question: 'How accurate are your estimates?',
    answer: 'We maintain a 98% accuracy rate. Our team uses zip-code-based pricing to ensure that labor and material costs reflect the current market in your specific area.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer flexible pricing. You can pay per project, or choose one of our monthly takeoff packages to save up to 60% compared to hiring an in-house estimator.',
  },
];

const About = () => {
  return (
    <>
      <SEOHead />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-56 pb-16 md:pt-60 md:pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">About Us</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Precision Estimating to Help You Win More Bids
              </h1>
              <p className="text-lg text-primary-foreground/80">
                We provide fast, accurate, and affordable material takeoffs and cost estimating services in Phoenix for contractors, developers, and architects. Let us handle the numbers while you build the future.
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
                  Who We Are?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  New York Estimators bridges the gap between complex construction blueprints and profitable projects. With years of experience in the construction industry, our team understands that accuracy is the foundation of every successful build.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Inspired by the need for speed and precision, we provide detailed quantity takeoffs and cost estimating consultation services of all construction trades. Whether you are a small subcontractor or a large-scale developer, we provide the data you need to bid with confidence.
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
                    <p className="text-6xl font-serif font-bold text-primary mb-2">98%</p>
                    <p className="text-muted-foreground">Accuracy Rate</p>
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
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission: Accuracy Without Compromise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is to empower our clients with data-driven insights. We aim to reduce your overhead costs and save you the time spent on tedious manual calculations. By combining industry expertise with the latest estimating software, we ensure that no detail is overlooked.
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

        {/* Why Choose Us */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground">
                Choosing the right estimating partner can be the difference between a profit and a loss. Here is why contractors trust us:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Process of Estimation In New York!
              </h2>
              <p className="text-muted-foreground">
                We follow three Simple Steps to Your Estimate:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Comprehensive Estimating Solutions for Every Project
              </h2>
              <p className="text-muted-foreground">
                We provide a full suite of pre-construction services designed to give you a competitive edge. Our offerings include:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Software We Use */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Softwares We Use for Estimates
              </h2>
              <p className="text-muted-foreground">
                Accuracy starts with the right tools. We use the latest construction software to ensure our numbers are precise down to the last digit. Our toolkit includes:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {software.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <HiCog className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients We Serve */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Clients We Serve in New York
              </h2>
              <p className="text-muted-foreground">
                We support a wide range of professionals across the construction industry. Whether you are a solo contractor or a large firm, we are here to help:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover-lift"
                >
                  <h3 className="font-semibold text-foreground mb-2">{client.title}</h3>
                  <p className="text-muted-foreground text-sm">{client.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                FAQs
              </h2>
              <p className="text-muted-foreground">
                Common questions about our estimating services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
