import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessSteps from '@/components/home/ProcessSteps';
import Industries from '@/components/home/Industries';
import RecentProjects from '@/components/home/RecentProjects';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>New York Estimators | Professional Construction Estimating Services NYC</title>
        <meta name="description" content="Professional construction cost estimating services in New York City. Accurate electrical, plumbing, HVAC, and concrete estimates. 98% accuracy rate. Get a free quote today." />
        <meta name="keywords" content="construction estimating NYC, cost estimation New York, electrical estimating, plumbing estimating, HVAC takeoff, concrete estimating" />
        <link rel="canonical" href="https://nyestimators.com/" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessSteps />
        <Industries />
        <RecentProjects />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
