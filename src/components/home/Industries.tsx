import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiUsers, HiLibrary, HiPencilAlt, HiCalculator, HiHome } from 'react-icons/hi';

const industries = [
  {
    icon: HiOfficeBuilding,
    title: 'Contractors',
    description: 'General and specialty contractors seeking accurate bid support.',
  },
  {
    icon: HiUsers,
    title: 'Subcontractors',
    description: 'Trade-specific subcontractors needing detailed material takeoffs.',
  },
  {
    icon: HiLibrary,
    title: 'Developers',
    description: 'Real estate developers requiring feasibility and budget estimates.',
  },
  {
    icon: HiPencilAlt,
    title: 'Architects',
    description: 'Design firms needing cost analysis during the design phase.',
  },
  {
    icon: HiCalculator,
    title: 'Engineers',
    description: 'Engineering firms requiring MEP and structural estimates.',
  },
  {
    icon: HiHome,
    title: 'Home Builders',
    description: 'Residential builders needing detailed construction cost breakdowns.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Industries = () => {
  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-primary/10">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Construction Industry Sectors We Support
          </h2>
          <p className="text-muted-foreground">
            From small residential projects to large commercial developments, we provide estimating services tailored to your industry needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 hover:shadow-medium transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
