import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiClock, HiPhone, HiCalendar, HiUpload } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/SEOHead';

// ... (omitting lines between)

const pricingPlans = [
  {
    name: 'Single Trade Package',
    subtitle: 'Single Trade',
    description: 'Ideal for subcontractors focusing on a single trade (e.g., electrical, plumbing, HVAC). Includes detailed Quantity takeoffs and trade-specific cost analysis.',
    price: '$150 - $250',
    period: 'per project',
    features: [
      'Within two working days',
      'Multiple revisions allowed',
      'All USA Regions',
    ],
    popular: false,
  },
  {
    name: 'Standard Package',
    subtitle: 'Multiple Trade / GC',
    description: 'Best for general contractors handling small to mid size projects. Includes complete trade breakdown, CSI-Coded summary and pricing sheets.',
    price: '$400 - $600',
    period: 'per project',
    features: [
      'Within four working days',
      'Multiple revisions allowed',
      'All USA Regions',
    ],
    popular: false,
  },
  {
    name: 'Premium Packages',
    subtitle: 'Full Project Estimation',
    description: 'Designed for large GC or developers needing Comprehensive and prioritized estimates. Includes Value engineering, detailed reports, and clarifications.',
    price: '$1,000 - $1,500',
    period: 'per project',
    features: [
      'Within four working days',
      'Unlimited revisions',
      'All USA Regions',
    ],
    popular: true,
  },
  {
    name: 'Residential Monthly Package',
    subtitle: 'Residential Project',
    description: 'For builders or contractors managing residential projects per month. Includes recurring report, project tracking, and fast delivery.',
    price: '$2,500 - $3,500',
    period: 'per month',
    features: [
      '15 Projects',
      'Two story buildings',
      '3 days per project',
      'Multiple revisions',
      'All USA Regions',
    ],
    popular: false,
  },
  {
    name: 'Commercial Monthly Package',
    subtitle: 'Commercial Project',
    description: 'For commercial GCs and developers needing consistent monthly estimating support. Includes material takeoffs and dedicated estimator access.',
    price: '$3,500 - $4,500',
    period: 'per month',
    features: [
      '15 Projects',
      '10,000 SF to 20,000 SF',
      '3 days per project',
      'Multiple revisions',
      'All USA Regions',
    ],
    popular: false,
  },
];

const factors = [
  {
    title: 'Project Scope and Complexity',
    description: 'The size and difficulty of your project play a major role when the project is started. Larger builds or jobs with complex designs have higher prices, while smaller or simpler projects are more affordable.',
  },
  {
    title: 'Required Turnaround Time',
    description: 'In addition, the speed at which you need your estimate can impact the price. If you request a fast turnaround, such as a 9–24-hour delivery, some companies may charge an extra fee for the rushed service.',
  },
  {
    title: 'Level of Detail Needed',
    description: 'Moreover, the amount of detail you want in your estimate also affects the cost. For example, including markups, specific cost codes, or deeper breakdowns. Such estimations often require more time and expertise, leading to a slightly higher price.',
  },
  {
    title: 'Extra Services Included',
    description: 'Some estimating packages come with additional services. Such as software guidance, cost engineering, or full material takeoffs. Since these add more value and support, they may increase the overall cost.',
  },
  {
    title: 'Location-Based Pricing Data',
    description: 'Finally, geographic pricing plays a role as well. Many companies use location-specific databases, such as RSMeans zip-code pricing in the U.S. This type of pricing adjusts material and labor costs based on regional market rates.',
  },
];

const whyOurPricing = [
  'You get accurate numbers, not guesswork.',
  'You meet deadlines without rushing.',
  'You pay less than typical market rates.',
  'You get ongoing support without extra charges.',
  'Each estimate is formatted to be easy to plug into your bid.',
];

const whyBestChoice = [
  '100% accurate and reliable takeoffs',
  'Competitive pricing that beats market rates',
  'Fast turnaround — no missed deadlines',
  '24/7 customer support',
  'Revisions & clarifications included (based on plan)',
];

const faqs = [
  {
    question: 'Are revisions included in your estimating plans?',
    answer: 'Yes. Depending on the plan you choose, we offer limited, free, or unlimited revisions. For small projects, revisions may be basic. While our Customized Premium Plan includes full revision without an extra charge.',
  },
  {
    question: 'Do you charge extra for urgent or rush estimates?',
    answer: 'Rush estimates may incur additional fees depending on the turnaround time requested. We offer 9-24 hour delivery for urgent projects.',
  },
  {
    question: 'How do I know which pricing plan is best for me?',
    answer: 'The best plan depends on your project type, size, and frequency. Single trade contractors should choose our Single Trade Package, while general contractors benefit from our Standard or Premium packages.',
  },
  {
    question: 'Do you offer discounts for repeat clients or bulk projects?',
    answer: 'Yes, we offer special pricing for repeat clients and bulk projects. Our monthly packages provide the best value for contractors with ongoing projects.',
  },
  {
    question: 'Can I get a custom price for a complex or industrial project?',
    answer: 'Absolutely. We provide custom pricing for complex industrial projects that fall outside our standard packages. Contact us for a personalized quote.',
  },
  {
    question: 'What payment methods do you accept for estimation?',
    answer: 'We accept all major credit cards, bank transfers, and online payment methods for your convenience.',
  },
  {
    question: 'Are your estimating rates lower than other companies?',
    answer: 'Yes, we offer competitive pricing that beats market rates while maintaining the highest quality and accuracy standards.',
  },
  {
    question: 'How much do construction estimating services typically cost?',
    answer: 'Construction estimating services typically range from $150 for single trade projects to $4,500 for comprehensive monthly packages, depending on project complexity and scope.',
  },
];

const Pricing = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <SEOHead />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-56 pb-16 md:pt-60 md:pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                Paradise Estimating
              </h1>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground/90 mb-6">
                Best Estimates at a Reasonable Budget
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Are you looking for a platform that provides accurate construction estimates at low rates? We have been providing the best construction Estimating Services for 20 years for the best budgets ever possible. We have supported thousands of contractors, builders, developers, architects, and homeowners to achieve budget accuracy and bid-win ratio upto 99%.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="heroOutline" size="xl" className="group" asChild>
                  <a href="tel:+17187196171">
                    <HiPhone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Call Us: (718) 719-6171
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="group" asChild>
                  <Link to="/contact">
                    <HiCalendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Schedule a Meeting
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans Introduction */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Construction Estimating Plans
              </h2>
              <p className="text-muted-foreground mb-4">
                Cost is the most important factor in estimation. It should be clear before the project starts. Generally, smaller or simpler projects come with a straightforward, fixed fee. For simple projects, the estimation fee averages around $200 per project. This option is good for contractors who need estimates or only handle a few jobs.
              </p>
              <p className="text-muted-foreground">
                If you manage multiple projects every month, choose a monthly estimating package. Because it is most cost-effective for you. Many estimating companies offer plans starting from about $1,500 per month. These include a dedicated estimator and a set number of estimates. This approach not only saves time but also brings consistency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Choose Your Perfect Plan
              </h2>
              <p className="text-muted-foreground">
                There are some of the best plans for construction estimating services. You can pick one of them based on your budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-8 bg-card rounded-2xl border transition-all duration-300 hover-lift ${plan.popular
                    ? 'border-primary shadow-strong'
                    : 'border-border/50 hover:border-primary/30'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-primary font-medium mb-4">{plan.subtitle}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-foreground">Package Details:</h4>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <HiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={plan.popular ? "cta" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">Get Started</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Factors Affecting Pricing */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Factors that Affect the Estimation Prices
              </h2>
              <p className="text-muted-foreground">
                When it comes to construction estimating services, the final price can vary widely. Several key factors influence what you will pay. However, understanding them can help you choose the right service for your project.
              </p>
            </motion.div>

            <div className="space-y-6">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {index + 1}. {factor.title}
                  </h3>
                  <p className="text-muted-foreground">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Pricing Works */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Why Our Pricing Works for Contractors
                </h2>
                <div className="space-y-4">
                  {whyOurPricing.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Why We Are the Best Choice
                </h2>
                <p className="text-muted-foreground mb-6">
                  We combine speed, accuracy, affordability, and industry-tested experience to help contractors win more projects without stress.
                </p>
                <div className="space-y-4">
                  {whyBestChoice.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Turnaround Time & CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <HiClock className="w-8 h-8 text-primary-foreground" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
                  Turnaround Time: 9-24 Hours
                </h2>
              </div>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Get your estimates fast without compromising on accuracy
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="/contact">Get a Quick Price Quote</a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="tel:+17187196171">Book a Consultation Call</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about our pricing and services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <HiCheckCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>
                  </button>

                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;