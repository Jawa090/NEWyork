import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiUpload } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactMethods from '@/components/contact/ContactMethods';
import OfficeLocations from '@/components/contact/OfficeLocations';
import ContactFAQ from '@/components/contact/ContactFAQ';

const contactInfo = [
  {
    icon: HiPhone,
    title: 'Phone',
    value: '(212) 555-1234',
    href: 'tel:+12125551234',
  },
  {
    icon: HiMail,
    title: 'Email',
    value: 'info@nyestimators.com',
    href: 'mailto:info@nyestimators.com',
  },
  {
    icon: HiLocationMarker,
    title: 'Address',
    value: 'New York, NY 10001',
    href: null,
  },
  {
    icon: HiClock,
    title: 'Business Hours',
    value: 'Mon - Fri: 8AM - 6PM EST',
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | New York Estimators - Construction Estimating Services</title>
        <meta name="description" content="Contact New York Estimators for professional construction cost estimates. Call (212) 555-1234 or email us. Serving NYC and all major NY cities." />
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
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Contact NYC Estimating
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Ready to win more bids? Reach out for detailed, accurate, and reliable construction estimates. Our team is ready to respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <ContactMethods />

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
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

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {contactInfo.map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Response Guarantee */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">Response Guarantee</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Email response within 4 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Phone consultation same day</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">Quote delivery 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-square rounded-xl bg-grey-cool border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm font-medium">Serving All NYC Boroughs</p>
                    <p className="text-xs text-muted-foreground">Manhattan • Brooklyn • Queens • Bronx • Staten Island</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <OfficeLocations />

        {/* Contact FAQ */}
        <ContactFAQ />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
