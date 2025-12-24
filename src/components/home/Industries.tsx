import { motion } from 'framer-motion';
import { HiCog, HiDatabase, HiDocumentText, HiLocationMarker, HiTemplate, HiChip } from 'react-icons/hi';

const software = [
  {
    icon: HiCog,
    title: 'PlanSwift',
    description: 'Digital quantity takeoffs and measurements',
  },
  {
    icon: HiDatabase,
    title: 'RSMeans',
    description: 'Reliable and up-to-date cost data',
  },
  {
    icon: HiDocumentText,
    title: 'BlueBeam',
    description: 'Advanced plan review and markups',
  },
  {
    icon: HiLocationMarker,
    title: 'Trimble',
    description: 'Precision tool for construction data and workflow',
  },
  {
    icon: HiTemplate,
    title: 'FastPipe',
    description: 'Plumbing and Piping Estimate',
  },
  {
    icon: HiChip,
    title: 'FastDuct',
    description: 'HVAC ductwork Estimating',
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Software We Use</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Advanced Technology & Tools
          </h2>
          <p className="text-muted-foreground">
            To ensure accuracy and consistency, we rely on the latest technology and tools. We use tools for cost analysis as well as bidding. Here are a few programs we use:
          </p>
        </motion.div>

        {/* Software Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {software.map((tool) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 hover:shadow-medium transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <tool.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
