import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wordpressService, WordPressPost } from '@/services/wordpress';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const Sitemap = () => {
    const [pages, setPages] = useState<WordPressPost[]>([]);
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [pagesData, postsData] = await Promise.all([
                    wordpressService.getPages(),
                    wordpressService.getPosts()
                ]);
                setPages(pagesData);
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching sitemap data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <SEO
                title="Sitemap"
                description="Sitemap of Construction Estimating New York. Find all our pages and articles here."
                canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/sitemap` : ''}
            />

            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow pt-24 md:pt-32 pb-16">
                    <div className="container-custom max-w-4xl mx-auto">
                        <header className="mb-10 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Sitemap</h1>
                            <p className="text-muted-foreground">Detailed list of all pages and articles on our website.</p>
                        </header>

                        {loading ? (
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Skeleton className="h-8 w-48" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>
                                <div className="space-y-4">
                                    <Skeleton className="h-8 w-48" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Pages Section */}
                                <div>
                                    <h2 className="text-2xl font-serif font-bold mb-6 pb-2 border-b">Pages</h2>
                                    <ul className="space-y-3">
                                        {pages.map((page) => (
                                            <li key={page.id}>
                                                <Link
                                                    to={`/${page.slug}/`}
                                                    className="text-primary hover:underline hover:text-primary/80 transition-colors"
                                                >
                                                    {page.title.rendered}
                                                </Link>
                                            </li>
                                        ))}
                                        {/* Hardcoded Static Pages if any (e.g., Home) */}
                                        <li>
                                            <Link to="/" className="text-primary hover:underline hover:text-primary/80 transition-colors">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/" className="text-primary hover:underline hover:text-primary/80 transition-colors">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Articles Section */}
                                <div>
                                    <h2 className="text-2xl font-serif font-bold mb-6 pb-2 border-b">Articles</h2>
                                    {posts.length > 0 ? (
                                        <ul className="space-y-3">
                                            {posts.map((post) => (
                                                <li key={post.id}>
                                                    <Link
                                                        to={`/blog/${post.slug}/`}
                                                        className="text-primary hover:underline hover:text-primary/80 transition-colors"
                                                    >
                                                        {post.title.rendered}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-muted-foreground italic">No articles found.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Sitemap;
