import { motion } from 'framer-motion';
import { HiCalculator, HiLightningBolt, HiTrendingUp, HiAcademicCap, HiOfficeBuilding, HiCog } from 'react-icons/hi';

const categories = [
  {
    name: 'Estimating Tips',
    icon: HiCalculator,
    count: 15,
    description: 'Best practices and techniques for accurate construction estimates',
    color: 'bg-blue-500',
  },
  {
    name: 'Electrical',
    icon: HiLightningBolt,
    count: 8,
    description: 'Electrical estimating guides and industry insights',
    color: 'bg-yellow-500',
  },
  {
    name: 'Industry Trends',
    icon: HiTrendingUp,
    count: 12,
    description: 'Market analysis and construction industry developments',
    color: 'bg-green-500',
  },
  {
    name: 'Business Growth',
    icon: HiAcademicCap,
    count: 10,
    description: 'Strategies to grow your construction business',
    color: 'bg-purple-500',
  },
  {
    name: 'NYC Construction',
    icon: HiOfficeBuilding,
    count: 18,
    description: 'Local insights for New York City construction projects',
    color: 'bg-red-500',
  },
  {
    name: 'Technology',
    icon: HiCog,
    count: 6,
    description: 'Construction technology and software reviews',
    color: 'bg-indigo-500',
  },
];

const BlogCategories = () => {
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Browse Topics</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground">
            Find articles tailored to your specific interests and expertise level in construction estimating.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary text-sm font-medium">
                  Browse articles →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
            Popular Tags
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'NYC Construction', 'Electrical Estimating', 'Cost Analysis', 'Bid Strategy',
              'Material Pricing', 'Labor Costs', 'Project Management', 'Software Tools',
              'Market Trends', 'Profit Margins', 'Risk Management', 'Quality Control'
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCategories;