import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiLightningBolt, HiBeaker, HiCog, HiTemplate, HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';

const trades = [
  {
    icon: HiLightningBolt,
    title: 'Electrical Contractors',
    description: 'Power distribution, lighting, low voltage, fire alarm, and communication system estimates tailored for electrical contractors.',
    benefits: ['Win more electrical bids', 'Accurate material counts', 'Labor hour calculations', 'NYC-specific rates'],
  },
  {
    icon: HiBeaker,
    title: 'Plumbing Contractors',
    description: 'Complete plumbing takeoffs including water supply, drainage, fixtures, and underground piping for residential and commercial projects.',
    benefits: ['Detailed fixture counts', 'Pipe quantity takeoffs', 'Material specifications', 'Code-compliant estimates'],
  },
  {
    icon: HiTemplate,
    title: 'HVAC Contractors',
    description: 'Comprehensive HVAC estimates covering ductwork, equipment, controls, and mechanical systems for all project types.',
    benefits: ['Ductwork calculations', 'Equipment schedules', 'Load analysis support', 'Installation costs'],
  },
  {
    icon: HiCog,
    title: 'Mechanical Contractors',
    description: 'Full mechanical system estimates including piping, equipment, insulation, and supports for commercial and industrial projects.',
    benefits: ['System-wide takeoffs', 'Equipment pricing', 'Installation labor', 'Startup & commissioning'],
  },
  {
    icon: HiOfficeBuilding,
    title: 'General Contractors',
    description: 'Complete project estimates covering all trades, from quantity takeoffs to bid-ready summaries for commercial construction.',
    benefits: ['Multi-trade coordination', 'Complete bid packages', 'Value engineering', 'Budget forecasting'],
  },
];

const Trade = () => {
  return (
    <>
      <Helmet>
        <title>Trades We Serve | Electrical, Plumbing, HVAC Contractors | New York Estimators</title>
        <meta name="description" content="Specialized construction estimating for electrical, plumbing, HVAC, mechanical, and general contractors in New York. Trade-specific expertise." />
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
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Trade Expertise</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Trades We Cover
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Specialized estimating services for each construction trade. Our estimators have deep expertise in trade-specific takeoffs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trades List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-8">
              {trades.map((trade, index) => (
                <motion.div
                  key={trade.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl border border-border/50 p-8 hover-lift"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <trade.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-foreground">
                          {trade.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {trade.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {trade.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact/"
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-4 hover:gap-3 transition-all"
                      >
                        Get a Quote <HiArrowRight className="w-4 h-4" />
                      </Link>
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

export default Trade;
