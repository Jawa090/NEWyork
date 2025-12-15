import { motion } from 'framer-motion';
import { HiUpload, HiCalculator, HiDocumentText, HiCheckCircle } from 'react-icons/hi';

const steps = [
  {
    icon: HiUpload,
    title: 'Submit Your Plans',
    description: 'Upload your drawings, specifications, and project details through our secure portal.',
    details: ['Architectural drawings', 'Specifications', 'Addendums & RFIs', 'Project timeline'],
  },
  {
    icon: HiCalculator,
    title: 'Expert Analysis',
    description: 'Our certified estimators perform detailed quantity takeoffs using industry-leading software.',
    details: ['CSI MasterFormat organization', 'Trade-specific takeoffs', 'Material & labor pricing', 'Local market rates'],
  },
  {
    icon: HiDocumentText,
    title: 'Detailed Report',
    description: 'Receive a comprehensive estimate with itemized costs and professional documentation.',
    details: ['Quantity takeoff sheets', 'Cost breakdown by trade', 'Material specifications', 'Labor calculations'],
  },
  {
    icon: HiCheckCircle,
    title: 'Win More Bids',
    description: 'Submit confident bids with accurate pricing and detailed backup documentation.',
    details: ['Competitive advantage', 'Professional presentation', 'Backup documentation', 'Ongoing support'],
  },
];

const ProcessSteps = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            How We Deliver Accurate Estimates
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven 4-step process ensures you get detailed, accurate estimates that help you win more profitable projects.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-card p-6 pt-12 rounded-2xl border border-border hover:border-primary/50 hover:shadow-strong transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-background">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Details Divider */}
                <div className="h-px w-full bg-border/50 my-4 group-hover:bg-primary/20 transition-colors" />

                {/* Details List */}
                <ul className="space-y-2 text-left">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <HiCheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Start winning more bids today with our proven process.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;