import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiCheckCircle, HiTrendingUp } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  'Weekly construction cost updates',
  'Exclusive estimating tips and tricks',
  'NYC market insights and trends',
  'Early access to new articles',
  'Free estimating templates',
];

const BlogNewsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our weekly newsletter with the latest insights.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/80 font-medium text-sm tracking-wider uppercase">Newsletter</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                Stay Ahead of the Market
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Get weekly insights on construction costs, estimating tips, and NYC market trends delivered straight to your inbox.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <HiTrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
                  Join 2,500+ Contractors
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  Who rely on our weekly insights to stay competitive
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-primary-foreground/90 border-primary-foreground/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="heroOutline" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe for Free'}
                </Button>
              </form>

              <p className="text-primary-foreground/60 text-xs text-center mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary-foreground/20">
                <div className="text-center">
                  <p className="text-lg font-bold text-primary-foreground">2,500+</p>
                  <p className="text-xs text-primary-foreground/70">Subscribers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-primary-foreground">Weekly</p>
                  <p className="text-xs text-primary-foreground/70">Updates</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-primary-foreground">Free</p>
                  <p className="text-xs text-primary-foreground/70">Always</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;