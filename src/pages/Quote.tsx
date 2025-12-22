import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiUpload, HiShieldCheck, HiClock, HiCheckCircle } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Construction Estimating NYC | New York Estimators</title>
        <meta name="description" content="Request a free construction estimate. Upload your plans and get accurate cost estimates within 24-48 hours. No obligation, confidential service." />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-56 pb-16 md:pt-60 md:pb-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Get Started</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Request Your Free Quote
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Upload your plans and get accurate, detailed cost estimates within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <Input placeholder="John Smith" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                        <Input placeholder="Your Company" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                        <Input type="email" placeholder="john@company.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                        <Input type="tel" placeholder="(212) 555-1234" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                        <select className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground" required>
                          <option value="">Select project type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="institutional">Institutional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Trade Selection *</label>
                        <select className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground" required>
                          <option value="">Select trade</option>
                          <option value="electrical">Electrical</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="hvac">HVAC</option>
                          <option value="mechanical">Mechanical</option>
                          <option value="concrete">Concrete</option>
                          <option value="general">General Construction</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Upload Plans (PDF/DWG)</label>
                      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <HiUpload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground text-sm">
                          Drag and drop files here, or <span className="text-primary font-medium">browse</span>
                        </p>
                        <p className="text-muted-foreground text-xs mt-2">PDF, DWG up to 50MB</p>
                        <input type="file" className="hidden" accept=".pdf,.dwg" multiple />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                      <Textarea 
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit for Free Quote'}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-serif font-bold text-foreground mb-4">What Happens Next?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: HiCheckCircle, text: 'We review your plans and requirements' },
                      { icon: HiClock, text: 'You receive a quote within 24 hours' },
                      { icon: HiShieldCheck, text: 'Detailed estimate delivered in 24-48 hrs' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6">
                  <HiShieldCheck className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">100% Confidential</h3>
                  <p className="text-muted-foreground text-sm">
                    Your plans and project details are kept strictly confidential. We never share your information with third parties.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Quote;
