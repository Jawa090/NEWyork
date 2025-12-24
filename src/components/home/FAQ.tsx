import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'Do you offer Preliminary estimating services?',
    answer: 'Yes, we offer preliminary services to give rough costs early on. This is possible even when your drawings are incomplete. Hence, we help you plan better and make smart decisions.',
  },
  {
    question: 'What information do you need to start working on the cost analysis?',
    answer: 'To start, we will need your drawings and details with a timeline. Even if you lack complete plans, share what you have. However, more details will help construction estimating New York to get the exact calculation.',
  },
  {
    question: 'Are your estimates good for bidding processes?',
    answer: 'Yes, the numbers at New York construction estimating services are good for bidding. We give clear numbers that you can use to win bids with confidence. Our reports are also easy to review to make good proposals.',
  },
  {
    question: 'Do you also offer ongoing support during your projects?',
    answer: 'Yes, we stay available for you even after giving you assessments. Our team will help you with revisions and answer questions. Our goal is to support you in the complete process of your development.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'We offer fast turnaround time of 24 hours for most projects. We also provide 24/7 support for clients to ensure you get the help you need when you need it.',
  },
  {
    question: 'What types of projects do you estimate?',
    answer: 'We handle all project types including residential, commercial, industrial, and civil construction. Our services cover MEP, concrete, steel, drywall, lumber, earthwork, masonry, and opening estimates for all project sizes.',
  },
  {
    question: 'How accurate are your construction estimates?',
    answer: 'Our estimates maintain high accuracy rates based on industry standard cost values with real world practices. We use the latest software and experienced professionals to ensure precision with detailed backup documentation.',
  },
  {
    question: 'What deliverables do you provide?',
    answer: 'You will receive cost reports in Excel format, full material lists, clear documents with exact labor hours, marked plans for easy references, and industry standard cost values with real world practices.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10"
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
              href="mailto:info@constructionestimatingnewyork.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Email Us at info@constructionestimatingnewyork.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;