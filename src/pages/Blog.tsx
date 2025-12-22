import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCalendar, HiUser, HiClock, HiEye } from 'react-icons/hi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogNewsletter from '@/components/blog/BlogNewsletter';

const blogPosts = [
  {
    slug: 'how-to-win-bids-nyc',
    title: 'How to Win More Construction Bids in NYC',
    excerpt: 'Learn the strategies successful contractors use to win more bids in the competitive New York City construction market. From pricing strategies to relationship building.',
    author: 'Mike Thompson, PE',
    date: 'December 10, 2024',
    category: 'Business Strategy',
    readTime: '8 min read',
    views: '2.1k',
    image: 'nyc-skyline',
    imagePath: '/images/hero-bg.png',
  },
  {
    slug: 'construction-estimating-mistakes',
    title: '5 Common Construction Estimating Mistakes to Avoid',
    excerpt: 'Avoid these costly estimating errors that can hurt your profit margins and damage client relationships. Real examples from NYC projects.',
    author: 'Sarah Rodriguez, CPE',
    date: 'December 5, 2024',
    category: 'Estimating Tips',
    readTime: '6 min read',
    views: '1.8k',
    image: 'calculator-plans',
    imagePath: '/images/why-choose-us.png',
  },
  {
    slug: 'electrical-estimating-tips',
    title: 'Electrical Estimating Tips for Commercial Projects',
    excerpt: 'Expert tips for accurate electrical takeoffs on commercial construction projects in New York. Code compliance and cost optimization strategies.',
    author: 'David Thompson, PE',
    date: 'November 28, 2024',
    category: 'Electrical',
    readTime: '10 min read',
    views: '1.5k',
    image: 'electrical-work',
    imagePath: '/images/project-office.png',
  },
  {
    slug: 'nyc-construction-cost-trends',
    title: 'NYC Construction Cost Trends for 2025',
    excerpt: 'An analysis of construction material and labor cost trends in New York City and what to expect in the coming year. Market insights and predictions.',
    author: 'Michael Chen, PE',
    date: 'November 20, 2024',
    category: 'Market Analysis',
    readTime: '12 min read',
    views: '3.2k',
    image: 'construction-site',
    imagePath: '/images/sample-commercial.png',
  },
  {
    slug: 'plumbing-estimating-guide',
    title: 'Complete Guide to Plumbing Estimating in NYC',
    excerpt: 'Master plumbing estimates for NYC projects. From fixture counts to underground work, learn the techniques that ensure accurate bids.',
    author: 'Jennifer Park, CPE',
    date: 'November 15, 2024',
    category: 'Plumbing',
    readTime: '9 min read',
    views: '1.3k',
    image: 'plumbing-pipes',
    imagePath: '/images/project-residential.png',
  },
  {
    slug: 'hvac-cost-estimation',
    title: 'HVAC Cost Estimation for High-Rise Buildings',
    excerpt: 'Navigate the complexities of HVAC estimating for tall buildings in NYC. Equipment sizing, ductwork, and energy efficiency considerations.',
    author: 'Robert Kim, PE',
    date: 'November 8, 2024',
    category: 'HVAC',
    readTime: '11 min read',
    views: '1.7k',
    image: 'hvac-system',
    imagePath: '/images/project-medical.png',
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Construction Estimating Blog | Tips & Industry Insights | New York Estimators</title>
        <meta name="description" content="Expert construction estimating tips, industry insights, and cost trends for New York contractors. Learn how to win more bids and improve profitability." />
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
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary-foreground/70 font-medium text-sm tracking-wider uppercase">Expert Resources</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mt-3 mb-6">
                Construction Estimating Blog
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Expert insights, industry trends, and practical tips to help you succeed in construction estimating and win more profitable projects.
              </p>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">50+</p>
                  <p className="text-primary-foreground/70 text-sm">Expert Articles</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">2,500+</p>
                  <p className="text-primary-foreground/70 text-sm">Monthly Readers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">Weekly</p>
                  <p className="text-primary-foreground/70 text-sm">New Content</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FeaturedPost />
        <BlogCategories />

        {/* Recent Articles */}
        <section className="section-padding bg-grey-cool">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Latest Articles</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
                Recent Posts
              </h2>
              <p className="text-muted-foreground">
                Stay updated with the latest insights, tips, and trends in construction estimating.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-strong transition-all duration-300"
                >
                  {/* Blog Post Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.imagePath}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <HiClock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiEye className="w-3 h-3" />
                          {post.views}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-semibold text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Read <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        <BlogNewsletter />
      </main>

      <Footer />
    </>
  );
};

export default Blog;