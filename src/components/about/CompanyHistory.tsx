import { motion } from 'framer-motion';
import { HiCalendar, HiTrendingUp, HiOfficeBuilding, HiUserGroup } from 'react-icons/hi';

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Started as a small estimating firm serving local NYC contractors with electrical and plumbing estimates.',
    icon: HiOfficeBuilding,
    stats: '50+ Projects',
  },
  {
    year: '2016',
    title: 'Team Expansion',
    description: 'Added HVAC and mechanical estimating services. Grew to serve all five NYC boroughs.',
    icon: HiUserGroup,
    stats: '500+ Projects',
  },
  {
    year: '2018',
    title: 'Technology Upgrade',
    description: 'Implemented advanced estimating software and digital takeoff tools for improved accuracy.',
    icon: HiTrendingUp,
    stats: '2,000+ Projects',
  },
  {
    year: '2020',
    title: 'Service Excellence',
    description: 'Achieved 98% accuracy rate and expanded to serve major developers and GCs across New York State.',
    icon: HiCalendar,
    stats: '5,000+ Projects',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Now serving 2,000+ clients with over 8,000 successful estimates delivered across all construction trades.',
    icon: HiTrendingUp,
    stats: '8,000+ Projects',
  },
];

const CompanyHistory = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            A Decade of Growth & Excellence
          </h2>
          <p className="text-muted-foreground">
            From a small local firm to New York's trusted estimating partner - here's how we've grown while maintaining our commitment to accuracy and service.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <milestone.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-serif font-bold text-primary">{milestone.year}</p>
                        <p className="text-sm text-muted-foreground">{milestone.stats}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background" />

                {/* Spacer for mobile */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 bg-primary rounded-2xl text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">
            Where We Stand Today
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">2,000+</p>
              <p className="text-primary-foreground/80 text-sm">Active Clients</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">8,000+</p>
              <p className="text-primary-foreground/80 text-sm">Estimates Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">98%</p>
              <p className="text-primary-foreground/80 text-sm">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">50+</p>
              <p className="text-primary-foreground/80 text-sm">NYC Locations Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistory;