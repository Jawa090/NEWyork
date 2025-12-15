import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'How accurate are your construction estimates?',
    answer: 'Our estimates maintain a 98% accuracy rate based on client feedback. We use industry-leading software, local market data, and experienced estimators to ensure precision. All estimates include detailed backup documentation and are organized using CSI MasterFormat standards.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Standard delivery is 24-48 hours for most projects. We also offer rush services with 12-hour turnaround for urgent deadlines. Complex projects like large commercial developments may require up to 72 hours to ensure thoroughness.',
  },
  {
    question: 'What types of projects do you estimate?',
    answer: 'We handle all project types including residential, commercial, industrial, and institutional construction. Our services cover electrical, plumbing, HVAC, mechanical, concrete, and general construction estimates for projects ranging from $10K to $50M+.',
  },
  {
    question: 'Do you provide estimates for all NYC boroughs?',
    answer: 'Yes, we serve all five NYC boroughs: Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Our pricing reflects local labor rates, material costs, and permit requirements specific to each area.',
  },
  {
    question: 'What information do you need to provide an estimate?',
    answer: 'We need architectural drawings, specifications, project scope, and any addendums or RFIs. For preliminary estimates, even basic sketches or plans work. The more detailed information you provide, the more accurate our estimate will be.',
  },
  {
    question: 'How much do your estimating services cost?',
    answer: 'Pricing varies based on project size, complexity, and turnaround time. We offer competitive rates starting from $200 for small residential projects. Contact us for a free quote - we\'ll provide transparent pricing with no hidden fees.',
  },
  {
    question: 'Do you offer quantity takeoffs only?',
    answer: 'Yes, we provide both quantity takeoffs and full cost estimates. You can choose takeoffs only if you prefer to apply your own pricing, or get complete estimates with material and labor costs included.',
  },
  {
    question: 'Are your estimators licensed and insured?',
    answer: 'All our estimators are certified professionals with extensive construction industry experience. We carry professional liability insurance and maintain strict confidentiality protocols for all client projects.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Get answers to common questions about our construction estimating services and process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <HiChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Contact us for personalized answers about your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12125551234"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Call (212) 555-1234
            </a>
            <a
              href="mailto:info@nyestimators.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;