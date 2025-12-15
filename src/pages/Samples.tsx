import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiDownload, HiEye, HiDocumentText, HiOfficeBuilding, HiHome, HiChip, HiLightningBolt } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';

// Sample Data
const samplesData = [
  // Commercial
  {
    id: 'c1',
    category: 'commercial',
    title: '5-Story Hotel Construction',
    description: 'Complete Division 1-16 estimate for a hospitality project in Manhattan.',
    location: 'New York, NY',
    size: '45,000 sq ft',
    image: '/images/sample-commercial.png',
    trades: ['General', 'MEP', 'Finishes'],
  },
  {
    id: 'c2',
    category: 'commercial',
    title: 'Office Fit-Out Estimation',
    description: 'Interior renovation cost breakdown for a tech corporate office.',
    location: 'Brooklyn, NY',
    size: '12,000 sq ft',
    image: '/images/project-office.png',
    trades: ['Interiors', 'Electrical', 'HVAC'],
  },
  {
    id: 'c3',
    category: 'commercial',
    title: 'Retail Store Renovation',
    description: 'Detailed quantity takeoff for a luxury retail outlet.',
    location: 'SoHo, NY',
    size: '3,500 sq ft',
    image: '/images/sample-commercial.png',
    trades: ['Millwork', 'Lighting', 'Flooring'],
  },

  // Residential
  {
    id: 'r1',
    category: 'residential',
    title: 'Luxury Apartment Complex',
    description: 'Ground-up construction estimate for a 20-unit residential building.',
    location: 'Queens, NY',
    size: '28,000 sq ft',
    image: '/images/project-residential.png',
    trades: ['Structural', 'Plumbing', 'Masonry'],
  },
  {
    id: 'r2',
    category: 'residential',
    title: 'Single Family Home Renovation',
    description: 'Full gut renovation estimate including structural changes and additions.',
    location: 'Long Island, NY',
    size: '2,800 sq ft',
    image: '/images/project-residential.png',
    trades: ['Carpentry', 'Roofing', 'Siding'],
  },

  // Industrial
  {
    id: 'i1',
    category: 'industrial',
    title: 'Warehouse Distribution Center',
    description: 'Steel structure and concrete slab estimate for logistics facility.',
    location: 'Bronx, NY',
    size: '150,000 sq ft',
    image: '/images/sample-commercial.png',
    trades: ['Steel', 'Concrete', 'Site Work'],
  },
  {
    id: 'i2',
    category: 'industrial',
    title: 'Manufacturing Plant Expansion',
    description: 'Heavy industrial electrical and mechanical system upgrade estimate.',
    location: 'New Jersey',
    size: '60,000 sq ft',
    image: '/images/sample-commercial.png',
    trades: ['Mechanical', 'Electrical', 'Piping'],
  },

  // MEP
  {
    id: 'm1',
    category: 'mep',
    title: 'High-Rise Electrical Takeoff',
    description: 'Complete electrical estimate for a 40-story residential tower.',
    location: 'Manhattan, NY',
    size: '500 Units',
    image: '/images/project-office.png',
    trades: ['Electrical', 'Fire Alarm', 'Low Voltage'],
  },
  {
    id: 'm2',
    category: 'mep',
    title: 'Hospital HVAC System Upgrade',
    description: 'Specialized mechanical estimate for medical facility air handling units.',
    location: 'Staten Island, NY',
    size: 'N/A',
    image: '/images/project-medical.png', // Reusing medical project image
    trades: ['HVAC', 'Controls', 'Ductwork'],
  },
];

const SampleCard = ({ sample }: { sample: typeof samplesData[0] }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
  >
    <div className="flex flex-col h-full">
      {/* Visual Header */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={sample.image}
          alt={sample.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
          {sample.trades[0]}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-1" title={sample.title}>
          {sample.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
          {sample.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {sample.trades.slice(1).map((trade) => (
            <span key={trade} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground font-medium">
              {trade}
            </span>
          ))}
          <span className="text-xs px-2 py-1 bg-secondary/50 rounded-md text-muted-foreground font-medium">
            {sample.location}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <HiEye className="w-4 h-4" />
            Preview
          </Button>
          <Button variant="default" size="sm" className="flex-1 gap-2">
            <HiDownload className="w-4 h-4" />
            PDF
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Samples = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSamples = activeTab === 'all'
    ? samplesData
    : samplesData.filter(s => s.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Sample Construction Estimates | Commercial, Residential, MEP | NYC Estimating</title>
        <meta name="description" content="Browse our portfolio of construction cost estimates. Download sample PDF estimates for commercial, residential, electrical, and plumbing projects in New York." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Sample Estimates & Takeoffs
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Explore our extensive track record. We deliver detailed, accurate, and bid-ready estimates for every trade and project size.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background min-h-screen">
          <div className="container-custom">

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-1 bg-muted/50 rounded-xl gap-1">
                  <TabsTrigger value="all" className="py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">All Samples</TabsTrigger>
                  <TabsTrigger value="commercial" className="py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Commercial</TabsTrigger>
                  <TabsTrigger value="residential" className="py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Residential</TabsTrigger>
                  <TabsTrigger value="industrial" className="py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Industrial</TabsTrigger>
                  <TabsTrigger value="mep" className="py-3 px-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">MEP Trades</TabsTrigger>
                </TabsList>
              </div>

              <div className="min-h-[400px]">
                <TabsContent value="all" className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSamples.map((sample) => (
                      <SampleCard key={sample.id} sample={sample} />
                    ))}
                  </div>
                </TabsContent>

                {['commercial', 'residential', 'industrial', 'mep'].map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredSamples.map((sample) => (
                        <SampleCard key={sample.id} sample={sample} />
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>

            {/* Empty State / More Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center p-8 bg-card rounded-2xl border border-dashed border-border"
            >
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Looking for something specific?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We have thousands of past projects in our archives. If you need a specific type of sample estimate relevant to your project, just ask.
              </p>
              <Button asChild>
                <a href="/contact">Request Specific Sample</a>
              </Button>
            </motion.div>

          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Samples;
