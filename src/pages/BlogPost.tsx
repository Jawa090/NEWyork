import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wordpressService, WordPressPost } from '@/services/wordpress';
import SEO from '@/components/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { HiArrowLeft, HiCalendar } from 'react-icons/hi';
import { format } from 'date-fns';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<WordPressPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            setLoading(true);
            setError(false);

            try {
                const data = await wordpressService.getPostBySlug(slug);
                if (data) {
                    setPost(data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow container-custom py-24 md:py-32">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-12 w-3/4" />
                        <div className="flex gap-4">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                        <Skeleton className="h-[400px] w-full rounded-xl" />
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex flex-col">
                <SEO title="Post Not Found" />
                <Navbar />
                <main className="flex-grow container-custom flex items-center justify-center py-20">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-serif font-bold">Post Not Found</h1>
                        <p className="text-muted-foreground">The article you are looking for does not exist or has been removed.</p>
                        <Button asChild>
                            <Link to="/blog">Return to Blog</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Extract SEO data
    const seoData = wordpressService.getSeoData(post);

    return (
        <>
            <SEO
                title={seoData.title}
                description={seoData.description}
                canonicalUrl={seoData.canonicalUrl}
                ogType="article"
                ogImage={seoData.ogImage}
            />

            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow pt-24 md:pt-32 pb-16">
                    <article className="container-custom max-w-4xl mx-auto">
                        {/* Back Link */}
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <HiArrowLeft className="mr-2 w-4 h-4" />
                            Back to Blog
                        </Link>

                        {/* Header */}
                        <header className="mb-10 text-center md:text-left">
                            <h1
                                className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <HiCalendar className="w-4 h-4" />
                                    {format(new Date(post.date), 'MMMM d, yyyy')}
                                </span>
                                {/* Can add Author or Categories here if available in _embed */}
                            </div>
                        </header>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </div>

                    </article>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default BlogPost;
