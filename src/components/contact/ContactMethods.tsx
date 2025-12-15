import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiChat, HiCalendar, HiClock, HiShieldCheck } from 'react-icons/hi';

const contactMethods = [
  {
    icon: HiPhone,
    title: 'Phone Consultation',
    description: 'Speak directly with our estimating experts for immediate assistance.',
    action: 'Call Now',
    contact: '(212) 555-1234',
    href: 'tel:+12125551234',
    availability: 'Mon-Fri 8AM-6PM EST',
    responseTime: 'Immediate',
  },
  {
    icon: HiMail,
    title: 'Email Support',
    description: 'Send us your project details and receive a detailed response.',
    action: 'Email Us',
    contact: 'info@nyestimators.com',
    href: 'mailto:info@nyestimators.com',
    availability: '24/7 Monitoring',
    responseTime: 'Within 4 hours',
  },
  {
    icon: HiChat,
    title: 'Live Chat',
    description: 'Get instant answers to your questions through our live chat.',
    action: 'Start Chat',
    contact: 'Available on website',
    href: '#',
    availability: 'Mon-Fri 8AM-8PM EST',
    responseTime: 'Under 2 minutes',
  },
  {
    icon: HiCalendar,
    title: 'Schedule Meeting',
    description: 'Book a consultation to discuss your project requirements in detail.',
    action: 'Book Now',
    contact: 'Online Scheduling',
    href: '#',
    availability: 'Flexible Hours',
    responseTime: 'Same day confirmation',
  },
];

const ContactMethods = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-muted-foreground">
            Choose the communication method that works best for you. Our team is ready to help with your estimating needs.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <method.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {method.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <HiClock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{method.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <HiShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Response: {method.responseTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={method.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {method.action}
              </a>

              {/* Contact Detail */}
              <p className="text-center text-xs text-muted-foreground mt-2">
                {method.contact}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-primary rounded-2xl text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
            Need Rush Estimates?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            For urgent project deadlines, we offer 12-hour rush service. Contact us immediately for expedited estimates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12125551234"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              Emergency Line: (212) 555-1234
            </a>
            <a
              href="mailto:rush@nyestimators.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <HiMail className="w-5 h-5" />
              rush@nyestimators.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethods;