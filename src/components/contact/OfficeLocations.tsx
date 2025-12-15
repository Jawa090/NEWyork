import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiClock, HiOfficeBuilding } from 'react-icons/hi';

const offices = [
  {
    name: 'Manhattan Headquarters',
    address: '123 Broadway, Suite 1500',
    city: 'New York, NY 10001',
    phone: '(212) 555-1234',
    hours: 'Mon-Fri: 8AM-6PM EST',
    services: ['General Estimating', 'Commercial Projects', 'High-Rise Buildings'],
    manager: 'Michael Chen, PE',
    description: 'Our main office serving Manhattan and the greater NYC area.',
  },
  {
    name: 'Brooklyn Office',
    address: '456 Atlantic Avenue, Floor 8',
    city: 'Brooklyn, NY 11217',
    phone: '(718) 555-5678',
    hours: 'Mon-Fri: 8AM-6PM EST',
    services: ['Residential Projects', 'Mixed-Use Development', 'Renovation Work'],
    manager: 'Sarah Rodriguez, CPE',
    description: 'Specialized in residential and mixed-use projects throughout Brooklyn.',
  },
  {
    name: 'Queens Branch',
    address: '789 Northern Blvd, Suite 300',
    city: 'Queens, NY 11372',
    phone: '(718) 555-9012',
    hours: 'Mon-Fri: 8AM-6PM EST',
    services: ['Industrial Projects', 'Healthcare Facilities', 'Educational Buildings'],
    manager: 'David Thompson, PE',
    description: 'Serving Queens with expertise in industrial and institutional projects.',
  },
];

const serviceAreas = [
  'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island',
  'Nassau County', 'Suffolk County', 'Westchester County',
  'Rockland County', 'Orange County', 'Dutchess County'
];

const OfficeLocations = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Locations</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Serving New York from Multiple Offices
          </h2>
          <p className="text-muted-foreground">
            With strategically located offices across NYC, we provide local expertise and personalized service throughout the region.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HiOfficeBuilding className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {office.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{office.description}</p>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{office.address}</p>
                    <p className="text-muted-foreground text-sm">{office.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HiPhone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <HiClock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{office.hours}</p>
                </div>
              </div>

              {/* Manager */}
              <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-1">Office Manager</p>
                <p className="text-primary font-semibold">{office.manager}</p>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {office.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
            Service Areas Throughout New York
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <p className="text-foreground font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coverage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">3</p>
            <p className="text-muted-foreground text-sm">Office Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground text-sm">Cities Served</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">11</p>
            <p className="text-muted-foreground text-sm">Counties Covered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">24hr</p>
            <p className="text-muted-foreground text-sm">Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeLocations;