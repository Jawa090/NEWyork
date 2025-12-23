import { motion } from 'framer-motion';
import { HiUpload, HiCalculator, HiDocumentText, HiCheckCircle } from 'react-icons/hi';

const steps = [
  {
    icon: HiUpload,
    title: 'Share your Project Plans',
    description: 'Submit your drawings with any other supporting documents. This information helps us understand your project needs and objectives. Share your plans at zzz@gmail.com and work with our trustworthy construction estimating company.',
    details: ['Architectural drawings', 'Specifications', 'Addendums & RFIs', 'Project timeline'],
  },
  {
    icon: HiCalculator,
    title: 'Review your Quote and Timeline',
    description: 'Now, we will give you a quote with a clear timeline. This will have the time, scope and pricing in it. You can review this and ask questions before confirming.',
    details: ['Clear timeline', 'Detailed scope', 'Transparent pricing', 'Question & answer session'],
  },
  {
    icon: HiDocumentText,
    title: 'Confirm and Process Payment',
    description: 'When you have approved the quote, secure your complete payment. This step will start your review process on an official basis. We will take it from here while you can work on other things.',
    details: ['Secure payment processing', 'Official project start', 'Dedicated project manager', 'Regular updates'],
  },
  {
    icon: HiCheckCircle,
    title: 'Receive your Detailed Report',
    description: 'After the evaluation process, we will deliver you a report with detailed materials and price divisions. Our reports include industry standard cost values and Excel format documents.',
    details: ['Industry standard costs', 'Excel format reports', 'Material lists', 'Marked plans'],
  },
];

const ProcessSteps = () => {
  return (
    <section className="-mt-16 md:-mt-24 lg:-mt-32 pb-16 md:pb-20 lg:pb-24 bg-primary/6 overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
            Simple 4-Step Process to Get Started
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process ensures you get accurate estimates quickly and efficiently with complete transparency.
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
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Start winning more bids today with our proven process.
          </div>
        </motion.div>

        {/* Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-primary/15 rounded-2xl border border-primary/20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Construction Estimating Scope & Deliverables
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
              We will give you clarity with practical value at every stage. You will be able to plan and bid better when you work with us. Each value goes through a review with your drawings and task needs. This calculation approach aligns your goals and timelines. Our #1 estimating company in New York uses modern tools to make detailed reports of labor and margins.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every number helps you make better decisions for smooth processes. Below is the list of what you will receive:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Industry standard cost values with real world practices',
              'Cost reports in Excel format, which is easy to read',
              'Full material list to help with timelines',
              'Fast turnaround times without compromise on quality',
              'Clear documents with exact labor hours',
              'Marked plans for easy references'
            ].map((deliverable, index) => (
              <motion.div
                key={deliverable}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{deliverable}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;