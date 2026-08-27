import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const NotFoundPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between w-full bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 w-full bg-black px-6 pt-36 pb-24 sm:px-10 sm:pt-44 sm:pb-28 md:px-16 md:pt-48 md:pb-32 lg:px-20">
        <div className="max-w-4xl xl:max-w-5xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-lg font-semibold tracking-wide text-white sm:mb-10 sm:text-xl md:text-2xl"
          >
            404 - Page Not Found
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
          >
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Check the URL or return to the homepage to explore OWL Tech India.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white underline underline-offset-4 sm:text-[15px] md:text-base"
            >
              <span>Back to Home</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
