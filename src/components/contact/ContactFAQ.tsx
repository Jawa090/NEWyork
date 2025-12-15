import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi';

const faqs = [
  {
    question: 'How quickly can you provide an estimate?',
    answer: 'Our standard turnaround is 24-48 hours for most projects. We also offer 12-hour rush service for urgent deadlines. The exact timeline depends on project complexity and scope.',
  },
  {
    question: 'What information do you need to get started?',
    answer: 'We need architectural drawings, specifications, project scope, and any addendums or RFIs. For preliminary estimates, basic sketches or plans work. The more detailed information you provide, the more accurate our estimate will be.',
  },
  {
    question: 'Do you provide free consultations?',
    answer: 'Yes, we offer free initial consultations to discuss your project requirements and determine the best estimating approach. This helps us understand your needs and provide accurate pricing.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms including net 30 for established clients. For new clients, we typically require 50% upfront with the balance due upon delivery. Volume discounts are available for multiple projects.',
  },
  {
    question: 'Can you handle large commercial projects?',
    answer: 'Absolutely. We regularly handle projects ranging from $10K residential work to $50M+ commercial developments. Our team has experience with high-rise buildings, hospitals, schools, and industrial facilities.',
  },
  {
    question: 'Do you work with contractors outside NYC?',
    answer: 'While we specialize in NYC projects, we also serve contractors throughout New York State and the tri-state area. We can adapt our pricing to local market conditions in other regions.',
  },
  {
    question: 'What if I need revisions to the estimate?',
    answer: 'Minor revisions are included at no charge. For significant scope changes, we provide transparent pricing for additional work. We want to ensure your estimate accurately reflects your project requirements.',
  },
  {
    question: 'Are your estimates guaranteed for accuracy?',
    answer: 'We maintain a 98% accuracy rate and stand behind our work. While we cannot guarantee exact costs due to market fluctuations, our estimates provide reliable baselines for bidding and budgeting.',
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-grey-cool">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Get quick answers to common questions about our services, process, and pricing before you contact us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 hover:bg-primary/5 transition-colors group"
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
                        <div className="px-6 pb-6">
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
          </div>

          {/* Contact Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Still Have Questions */}
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <HiQuestionMarkCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help with any specific questions about your project.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+12125551234"
                  className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                >
                  Call (212) 555-1234
                </a>
                <a
                  href="mailto:info@nyestimators.com"
                  className="block w-full px-4 py-2 border border-primary text-primary rounded-lg font-medium text-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Response Time:</span>
                  <span className="text-foreground font-medium text-sm">Within 4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Standard Delivery:</span>
                  <span className="text-foreground font-medium text-sm">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Rush Service:</span>
                  <span className="text-foreground font-medium text-sm">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Accuracy Rate:</span>
                  <span className="text-foreground font-medium text-sm">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Free Consultation:</span>
                  <span className="text-primary font-medium text-sm">Yes</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Monday - Friday:</span>
                  <span className="text-foreground font-medium text-sm">8AM - 6PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Saturday:</span>
                  <span className="text-foreground font-medium text-sm">9AM - 2PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Sunday:</span>
                  <span className="text-muted-foreground text-sm">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Emergency:</span>
                  <span className="text-primary font-medium text-sm">24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;