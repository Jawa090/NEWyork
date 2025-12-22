import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/SEOHead';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import ProcessSteps from '@/components/home/ProcessSteps';
import Industries from '@/components/home/Industries';
import ClientTypes from '@/components/home/ClientTypes';
import RecentProjects from '@/components/home/RecentProjects';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <SEOHead />
      
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <WhatWeOffer />
        <ProcessSteps />
        <Industries />
        <ClientTypes />
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
