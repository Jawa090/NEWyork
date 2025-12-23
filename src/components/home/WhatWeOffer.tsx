import { motion } from 'framer-motion';
import { HiCheckCircle, HiCog, HiDocumentText, HiLightningBolt, HiChartBar, HiShieldCheck } from 'react-icons/hi';

const offerings = [
  {
    icon: HiCheckCircle,
    title: 'CSI Divisions Coverage',
    description: 'Our offers include all CSI divisions for cost breakdown of every trade. We commit to quality and give you practical numbers to work with.',
  },
  {
    icon: HiCog,
    title: 'Latest Software & Tools',
    description: 'You will get reports that we make with the latest software. Our team will provide guidance to you at every stage.',
  },
  {
    icon: HiDocumentText,
    title: 'Customized Calculations',
    description: 'Our team customizes each calculation to the scope and needs of a project. As a result, we will help you predict and avoid any shortage and delay.',
  },
  {
    icon: HiLightningBolt,
    title: 'Value Engineering Advice',
    description: 'We also give you value engineering advice and alternative options. This, in turn, allows you to avoid any cost or waste.',
  },
  {
    icon: HiChartBar,
    title: 'Eliminate Full-Time Estimator Costs',
    description: 'You can eliminate the expenses and the need for a full time estimator. We will give you reports for better decision making.',
  },
  {
    icon: HiShieldCheck,
    title: 'Clarity and Honesty',
    description: 'Our team sticks to principles of clarity and honesty. You can contact our team to book a call and work with the best construction estimating services New York.',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-primary/8">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 p-6 bg-primary/15 rounded-2xl border border-primary/20"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Complete Estimating Solutions & Value-Added Services
          </h2>
          <p className="text-muted-foreground">
            Better construction sites start with good planning and clarity. Our calculations will give you the base to turn your plans into reality. New York construction estimating services prepare each estimate with a focus on accuracy.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-primary/15 rounded-2xl border border-primary/20 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <offering.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {offering.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center p-8 bg-primary/15 rounded-2xl border border-primary/20"
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
            Comprehensive Takeoff Services
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our takeoffs include structural, building and MEP trades. These reports help you avoid any shortage and help you save cost. We measure all the material and labor hours for best results. The experts support smooth planning and bidding for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:zzz@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact us at zzz@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Upload Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center p-8 bg-card rounded-2xl border border-border/50"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <HiDocumentText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Upload your plans and get accurate estimates with the latest software. Our team will provide guidance at every stage and ensure the same quality in all numbers we deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:zzz@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
              >
                <HiDocumentText className="w-5 h-5" />
                Upload Plans & Get Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;