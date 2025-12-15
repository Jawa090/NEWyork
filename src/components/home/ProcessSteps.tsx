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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            How We Deliver Accurate Estimates
          </h2>
          <p className="text-muted-foreground">
            Our proven 4-step process ensures you get detailed, accurate estimates that help you win more profitable projects.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-8 text-primary/30">
                    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
                      <path
                        d="M2 16h56m0 0l-12-12m12 12l-12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              Typical Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary font-bold">24h</span>
                </div>
                <p className="font-medium text-foreground">Standard Delivery</p>
                <p className="text-sm text-muted-foreground">Most projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <span className="text-accent font-bold">12h</span>
                </div>
                <p className="font-medium text-foreground">Rush Service</p>
                <p className="text-sm text-muted-foreground">Urgent deadlines</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <span className="text-secondary-foreground font-bold">48h</span>
                </div>
                <p className="font-medium text-foreground">Complex Projects</p>
                <p className="text-sm text-muted-foreground">Large developments</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;