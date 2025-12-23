import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar, HiCurrencyDollar, HiOfficeBuilding } from 'react-icons/hi';

const projects = [
  {
    title: 'Manhattan Office Tower',
    location: 'Midtown Manhattan, NY',
    type: 'Commercial',
    value: '$12.5M',
    trades: ['Electrical', 'Plumbing', 'HVAC', 'Fire Safety'],
    completion: '2024',
    description: '42-story office building with state-of-the-art MEP systems.',
    image: '/images/project-office.png',
  },
  {
    title: 'Brooklyn Residential Complex',
    location: 'Park Slope, Brooklyn',
    type: 'Residential',
    value: '$8.2M',
    trades: ['General Construction', 'Electrical', 'Plumbing'],
    completion: '2024',
    description: '120-unit luxury apartment complex with underground parking.',
    image: '/images/project-residential.png',
  },
  {
    title: 'Queens Medical Center',
    location: 'Flushing, Queens',
    type: 'Healthcare',
    value: '$15.8M',
    trades: ['Mechanical', 'Electrical', 'Medical Gas', 'Fire Safety'],
    completion: '2023',
    description: 'Modern medical facility with specialized HVAC and electrical systems.',
    image: '/images/project-medical.png',
  },
];

const RecentProjects = () => {
  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-grey-cool">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Featured Project Portfolio
          </h2>
          <p className="text-muted-foreground">
            Our past work highlights the standards we bring to you. Explore some of our recent estimating projects across New York's diverse construction landscape.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {project.type}
                </div>
                {/* Value Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-sm font-semibold rounded-full">
                  {project.value}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HiLocationMarker className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HiCalendar className="w-4 h-4 text-primary" />
                    Completed {project.completion}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HiCurrencyDollar className="w-4 h-4 text-primary" />
                    Project Value: {project.value}
                  </div>
                </div>

                {/* Trades */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Trades Estimated:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.trades.map((trade) => (
                      <span
                        key={trade}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                      >
                        {trade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-card rounded-2xl border border-border/50"
        >
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">$500M+</p>
            <p className="text-muted-foreground text-sm">Total Project Value</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">8,000+</p>
            <p className="text-muted-foreground text-sm">Estimates Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground text-sm">NYC Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground text-sm">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;