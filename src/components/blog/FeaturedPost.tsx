import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCalendar, HiUser, HiClock, HiArrowRight } from 'react-icons/hi';

const featuredPost = {
  slug: 'ultimate-guide-construction-estimating-nyc-2025',
  title: 'The Ultimate Guide to Construction Estimating in NYC for 2025',
  excerpt: 'Everything you need to know about construction estimating in New York City, from local regulations to market trends, pricing strategies, and winning more bids.',
  author: 'Michael Chen, PE',
  date: 'December 15, 2024',
  readTime: '12 min read',
  category: 'Featured Guide',
  tags: ['NYC Construction', 'Estimating', 'Business Strategy', '2025 Trends'],
};

const FeaturedPost = () => {
  return (
    <section className="section-padding bg-grey-cool">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Featured Article</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Must-Read Content
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-strong transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif font-bold text-primary">NYC</span>
                  </div>
                  <p className="text-primary/60 font-medium">Construction Estimating Guide</p>
                </div>
              </div>
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <HiUser className="w-4 h-4 text-primary" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-4 h-4 text-primary" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-4 h-4 text-primary" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group w-fit"
              >
                Read Full Guide
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default FeaturedPost;