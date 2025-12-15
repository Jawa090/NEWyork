import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="text-8xl font-serif font-bold text-primary mb-4">404</p>
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/">
                <HiHome className="w-5 h-5" />
                Return to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
