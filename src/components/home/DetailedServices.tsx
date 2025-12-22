import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOfficeBuilding, HiHome, HiCog, HiTruck, HiLightningBolt, HiBeaker, HiCube, HiTemplate, HiArrowRight } from 'react-icons/hi';

const serviceCategories = [
  {
    title: 'Commercial Estimating Services',
    description: 'You need accuracy for commercial constructions to complete tasks on time. Our services include complete breakdowns for material cost and bid projections. We handle all trades with complex scopes and deliver the right pricing for warehouses, hospitality places, and other commercial developments.',
    icon: HiOfficeBuilding,
    href: '/services/commercial',
  },
  {
    title: 'Residential Estimating Services',
    description: 'Household constructions need a balance between cost control and expected quality. We have years of experience to understand these challenges and deal with housings of every size. Our team pays attention to detail while providing realistic labor hours and material quantities for renovations, additions, and new construction.',
    icon: HiHome,
    href: '/services/residential',
  },
  {
    title: 'Industrial Estimating Services',
    description: 'Industrial developments need technical knowledge for right analysis. We meet all the needs of this complex environment with production units, process piping, gas setups, and other industrial systems. Our expert construction estimators have all the knowledge and tools for best results.',
    icon: HiCog,
    href: '/services/industrial',
  },
  {
    title: 'Civil Estimating Services',
    description: 'You need an understanding of earthwork quantities and conditions for civil works. We have experience in cost calculation for civil sites like roads and highways. We help you with bid preparation for better performance and financial planning.',
    icon: HiTruck,
    href: '/services/civil',
  },
];

const tradeServices = [
  {
    title: 'MEP Estimating Services',
    description: 'MEP services for cost analysis of technical building systems including mechanical, electrical, and plumbing systems. We prepare takeoffs and cost projections for HVAC systems, ductwork, piping, wiring, and fitting equipment.',
    icon: HiLightningBolt,
    href: '/services/mep',
  },
  {
    title: 'Concrete Estimating Services',
    description: 'Our concrete cost projections include all quantities and costs of concrete work including foundations, slabs, and parking areas. We help you bid right with accurate material quantities and labor calculations.',
    icon: HiCube,
    href: '/services/concrete',
  },
  {
    title: 'Steel Estimating Services',
    description: 'Steel cost calculations include exact quantities for all parts including beams, columns, and connections. We cover contractors and other materials to ensure exact values for timely completion.',
    icon: HiTemplate,
    href: '/services/steel',
  },
  {
    title: 'Drywall Estimating and Takeoff',
    description: 'Correct values to bid right and manage supplies. Our drywall quantities are precise with complete division serving both commercial and residential projects.',
    icon: HiBeaker,
    href: '/services/drywall',
  },
  {
    title: 'Lumber Takeoff Services',
    description: 'Our lumber calculations help builders deal with all woodwork. We give you exact quantities for framing and finishes. With this, you can avoid large fees of full time cost analysis experts.',
    icon: HiCog,
    href: '/services/lumber',
  },
  {
    title: 'Earthwork Estimating Services',
    description: 'Earthwork cost assessment will help you understand site conditions. We will give you exact quantities of curbs and site concrete. This will help you handle site preparation without cost loss.',
    icon: HiTruck,
    href: '/services/earthwork',
  },
  {
    title: 'Masonry Estimating Services',
    description: 'These services handle all the quantities of brickwork and other material. We will give you clear values with which you can plan labor and equipment. With careful review of drawings, our numbers are very accurate.',
    icon: HiOfficeBuilding,
    href: '/services/masonry',
  },
  {
    title: 'Opening Estimating Services',
    description: 'Opening estimations mean doors, windows and other frames. We will measure quantities and costs after seeing the drawings. These numbers will help you order and setup these frames.',
    icon: HiHome,
    href: '/services/openings',
  },
];

const DetailedServices = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Construction Cost Estimating Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Professional Construction Takeoff Services in New York
          </h2>
          <p className="text-muted-foreground">
            Construction takeoffs are important to control costs and plan resources. In the competitive market, we cannot afford even small errors. That's why we prepare a full material list with needed expertise and measure all material and labor hours for best results.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-bold text-foreground mb-8 text-center"
          >
            Project Type Estimating
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trade Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-bold text-foreground mb-8 text-center"
          >
            Trade Estimating and Takeoff Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradeServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;