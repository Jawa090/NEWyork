import { motion } from 'framer-motion';
import { HiDesktopComputer, HiCloudDownload, HiShieldCheck, HiLightningBolt } from 'react-icons/hi';

const tools = [
  {
    name: 'PlanSwift',
    category: 'Digital Takeoff',
    description: 'Industry-leading digital takeoff software for accurate quantity measurements.',
    features: ['Digital plan markup', 'Automated calculations', 'Export to Excel', 'Cloud sync'],
  },
  {
    name: 'Bluebeam Revu',
    category: 'PDF Management',
    description: 'Professional PDF creation, markup, and collaboration platform.',
    features: ['Plan markup', 'Measurement tools', 'Collaboration', 'Version control'],
  },
  {
    name: 'RSMeans Data',
    category: 'Cost Database',
    description: 'Comprehensive construction cost database with local pricing.',
    features: ['NYC market rates', 'Material costs', 'Labor rates', 'Equipment pricing'],
  },
  {
    name: 'ConEst',
    category: 'Electrical Estimating',
    description: 'Specialized electrical estimating software with NEC compliance.',
    features: ['Electrical takeoffs', 'Code compliance', 'Load calculations', 'Panel schedules'],
  },
  {
    name: 'FastPIPE & FastDUCT',
    category: 'MEP Estimating',
    description: 'Specialized software for plumbing and HVAC system takeoffs.',
    features: ['Pipe sizing', 'Duct calculations', 'Equipment schedules', 'Material lists'],
  },
  {
    name: 'Microsoft Excel',
    category: 'Data Analysis',
    description: 'Advanced spreadsheet analysis and custom estimating templates.',
    features: ['Custom formulas', 'Data analysis', 'Report generation', 'Cost tracking'],
  },
];

const capabilities = [
  {
    icon: HiDesktopComputer,
    title: 'Advanced Software Suite',
    description: 'We use the latest industry-standard software for maximum accuracy and efficiency.',
  },
  {
    icon: HiCloudDownload,
    title: 'Cloud-Based Collaboration',
    description: 'Secure cloud platforms enable real-time collaboration and file sharing.',
  },
  {
    icon: HiShieldCheck,
    title: 'Data Security',
    description: 'Enterprise-grade security protocols protect your confidential project information.',
  },
  {
    icon: HiLightningBolt,
    title: 'Automated Workflows',
    description: 'Streamlined processes and automation ensure fast, consistent deliverables.',
  },
];

const TechnologyTools = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Technology & Tools</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Industry-Leading Technology Stack
          </h2>
          <p className="text-muted-foreground">
            We invest in the best tools and technology to deliver accurate, professional estimates efficiently and securely.
          </p>
        </motion.div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border/50 text-center hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{capability.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Software Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-12">
            Professional Software Suite
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-serif font-semibold text-foreground">{tool.name}</h4>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                    {tool.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Key Features:</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              Quality Assurance Process
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every estimate goes through our rigorous quality control process including peer review, 
              accuracy checks, and final verification before delivery. Our technology stack enables 
              consistent, reliable results across all project types and sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p className="font-medium text-foreground">Initial Review</p>
                <p className="text-sm text-muted-foreground">Automated checks & validation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <p className="font-medium text-foreground">Peer Review</p>
                <p className="text-sm text-muted-foreground">Senior estimator verification</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <p className="font-medium text-foreground">Final Approval</p>
                <p className="text-sm text-muted-foreground">Quality assurance sign-off</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyTools;