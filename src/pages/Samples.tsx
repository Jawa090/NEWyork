import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiDownload, HiEye, HiLightningBolt, HiBeaker, HiTemplate, HiCube } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';

const samples = [
  {
    icon: HiLightningBolt,
    title: 'Electrical Estimate Sample',
    description: 'Commercial office building electrical takeoff including power distribution, lighting, and low voltage systems.',
    type: 'Electrical',
  },
  {
    icon: HiBeaker,
    title: 'Plumbing Estimate Sample',
    description: 'Multi-family residential plumbing estimate with water supply, drainage, and fixture schedules.',
    type: 'Plumbing',
  },
  {
    icon: HiTemplate,
    title: 'HVAC Takeoff Sample',
    description: 'Industrial warehouse HVAC system takeoff with equipment schedules and ductwork quantities.',
    type: 'HVAC',
  },
  {
    icon: HiCube,
    title: 'Concrete Takeoff Sample',
    description: 'Commercial foundation and slab estimate with reinforcement and formwork quantities.',
    type: 'Concrete',
  },
];

const Samples = () => {
  return (
    <>
      <Helmet>
        <title>Sample Estimates | Construction Estimating Examples | New York Estimators</title>
        <meta name="description" content="View sample construction estimates for electrical, plumbing, HVAC, and concrete work. See the quality and detail of our professional estimating services." />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Our Work</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Sample Estimates
              </h1>
              <p className="text-lg text-primary-foreground/80">
                See the quality and detail we deliver. Download sample estimates for various trades and project types.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Samples Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {samples.map((sample, index) => (
                <motion.div
                  key={sample.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift"
                >
                  {/* Preview */}
                  <div className="aspect-video bg-grey-cool flex items-center justify-center">
                    <sample.icon className="w-20 h-20 text-primary/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {sample.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {sample.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {sample.description}
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <HiEye className="w-4 h-4" />
                        Preview
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        <HiDownload className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Samples;
