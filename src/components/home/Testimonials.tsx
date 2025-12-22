import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    company: 'Rodriguez Construction LLC',
    role: 'General Contractor',
    content: 'NY Estimators helped us win 3 major projects this quarter. Their electrical estimates are spot-on and always delivered on time.',
    rating: 5,
    project: 'Commercial Office Building - $2.3M',
  },
  {
    name: 'Sarah Chen',
    company: 'Empire Development Group',
    role: 'Project Manager',
    content: 'The level of detail in their takeoffs is impressive. We use them for all our residential developments in Manhattan.',
    rating: 5,
    project: 'Luxury Residential Complex - $8.5M',
  },
  {
    name: 'David Thompson',
    company: 'Thompson HVAC Solutions',
    role: 'HVAC Contractor',
    content: 'Fast turnaround, accurate pricing, and excellent communication. They understand NYC market rates better than anyone.',
    rating: 5,
    project: 'Hospital HVAC System - $1.8M',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-grey-cool">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what contractors and developers across New York are saying about our construction estimating services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Project Info */}
              <div className="text-sm text-primary font-medium mb-4 p-3 bg-primary/5 rounded-lg">
                Project: {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2,000+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">8,000+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;