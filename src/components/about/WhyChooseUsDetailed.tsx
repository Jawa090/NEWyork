import { motion } from 'framer-motion';
import { HiShieldCheck, HiClock, HiUserGroup, HiAcademicCap, HiLocationMarker, HiCurrencyDollar } from 'react-icons/hi';

const advantages = [
  {
    icon: HiShieldCheck,
    title: '98% Accuracy Guarantee',
    description: 'Our estimates consistently achieve 98% accuracy based on client feedback and project outcomes.',
    details: [
      'Rigorous quality control process',
      'Peer review by senior estimators',
      'Industry-standard methodologies',
      'Continuous accuracy tracking'
    ],
  },
  {
    icon: HiClock,
    title: 'Fast 24-48 Hour Delivery',
    description: 'Quick turnaround without compromising quality. Rush services available for urgent deadlines.',
    details: [
      'Standard 24-48 hour delivery',
      '12-hour rush service available',
      'Real-time project status updates',
      'Dedicated project managers'
    ],
  },
  {
    icon: HiUserGroup,
    title: '100% US-Based Team',
    description: 'All our estimators are based in the United States with deep knowledge of American construction practices.',
    details: [
      'Native English speakers',
      'US construction experience',
      'Local building code knowledge',
      'Direct communication channels'
    ],
  },
  {
    icon: HiAcademicCap,
    title: 'Certified Professionals',
    description: 'Our team holds industry certifications and continues professional development.',
    details: [
      'Professional Engineer (PE) licenses',
      'AACE International members',
      'LEED AP certifications',
      'Ongoing training programs'
    ],
  },
  {
    icon: HiLocationMarker,
    title: 'NYC Market Expertise',
    description: 'Deep understanding of New York City construction market, codes, and pricing.',
    details: [
      'Local labor rate knowledge',
      'NYC building code compliance',
      'Borough-specific requirements',
      'Union vs. non-union pricing'
    ],
  },
  {
    icon: HiCurrencyDollar,
    title: 'Competitive Pricing',
    description: 'Transparent, competitive pricing with no hidden fees. Volume discounts available.',
    details: [
      'Upfront pricing quotes',
      'No hidden charges',
      'Volume discount programs',
      'Flexible payment terms'
    ],
  },
];

const WhyChooseUsDetailed = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Competitive Advantages</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Why Contractors Choose Us
          </h2>
          <p className="text-muted-foreground">
            Discover the key advantages that make us New York's most trusted construction estimating partner.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <advantage.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {advantage.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {advantage.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-12">
            How We Compare
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border border-border/50 overflow-hidden">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                  <th className="text-center p-6 font-semibold text-primary">NY Estimators</th>
                  <th className="text-center p-6 font-semibold text-muted-foreground">Typical Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-6 text-foreground">Turnaround Time</td>
                  <td className="p-6 text-center text-primary font-semibold">24-48 hours</td>
                  <td className="p-6 text-center text-muted-foreground">3-7 days</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">Accuracy Rate</td>
                  <td className="p-6 text-center text-primary font-semibold">98%</td>
                  <td className="p-6 text-center text-muted-foreground">85-90%</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">Team Location</td>
                  <td className="p-6 text-center text-primary font-semibold">100% US-Based</td>
                  <td className="p-6 text-center text-muted-foreground">Often Offshore</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">NYC Market Knowledge</td>
                  <td className="p-6 text-center text-primary font-semibold">Expert Level</td>
                  <td className="p-6 text-center text-muted-foreground">Limited</td>
                </tr>
                <tr>
                  <td className="p-6 text-foreground">Communication</td>
                  <td className="p-6 text-center text-primary font-semibold">Direct & Immediate</td>
                  <td className="p-6 text-center text-muted-foreground">Delayed/Indirect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Client Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-primary rounded-2xl text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-8">
            Client Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">85%</p>
              <p className="text-primary-foreground/80 text-sm">Client Retention Rate</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">4.9/5</p>
              <p className="text-primary-foreground/80 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">72%</p>
              <p className="text-primary-foreground/80 text-sm">Client Bid Win Rate</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">24hr</p>
              <p className="text-primary-foreground/80 text-sm">Average Response Time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsDetailed;