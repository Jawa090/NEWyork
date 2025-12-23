import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCog, HiHome, HiTruck, HiTemplate, HiBeaker, HiUserGroup, HiClipboard } from 'react-icons/hi';

const clientTypes = [
  {
    icon: HiOfficeBuilding,
    title: 'General Contractors',
    description: 'Comprehensive estimating services for all project types and sizes.',
  },
  {
    icon: HiCog,
    title: 'Trade Contractors',
    description: 'Specialized estimates for specific trades and subcontractor work.',
  },
  {
    icon: HiHome,
    title: 'Remodeling Contractors',
    description: 'Detailed estimates for renovation and remodeling projects.',
  },
  {
    icon: HiTruck,
    title: 'Residential Builders',
    description: 'Accurate cost analysis for residential construction projects.',
  },
  {
    icon: HiTemplate,
    title: 'Property Developers',
    description: 'Development cost analysis and feasibility studies.',
  },
  {
    icon: HiBeaker,
    title: 'Commercial Builders',
    description: 'Commercial construction cost estimates and takeoffs.',
  },
  {
    icon: HiUserGroup,
    title: 'Industrial Contractors',
    description: 'Complex industrial project estimating and cost analysis.',
  },
  {
    icon: HiClipboard,
    title: 'Architectural Firms',
    description: 'Design phase cost estimates and budget planning.',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Property Owners',
    description: 'Owner-direct project cost estimates and budget planning.',
  },
];

const ClientTypes = () => {
  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-primary/4">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Trusted by Construction Professionals
          </h2>
          <p className="text-muted-foreground">
            We provide New York construction estimating services to a wide range of professionals in the construction industry.
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <client.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {client.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;