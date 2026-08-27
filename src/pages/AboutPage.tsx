import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const AboutPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between w-full bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Main Content: comfortable reading width with balanced right-side whitespace */}
      <main className="flex-1 w-full bg-black px-6 pt-36 pb-24 sm:px-10 sm:pt-44 sm:pb-28 md:px-16 md:pt-48 md:pb-32 lg:px-20">
        <div className="max-w-4xl xl:max-w-5xl">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-lg font-semibold tracking-wide text-white sm:mb-10 sm:text-xl md:text-2xl"
            >
              About OWL Tech
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              OWL Tech didn&apos;t start as a big agency with a fancy office and a list of Fortune 500 clients. It started with a simple observation - that most businesses, no matter how good their product or service, were being held back by the same thing. Bad technology, broken systems, and strategies that were built for someone else&apos;s business. We saw it everywhere and we knew exactly how to fix it.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              So we built OWL Tech around one idea - that modern technology, when applied with the right strategy, can transform any business. Not just the big ones. Not just the ones with massive budgets. Any business with a real vision and the hunger to grow. We started working with founders, small teams, and growing brands who needed a partner that could come in, understand their world, and actually build something that worked.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              The proof came fast. We partnered with Adarsh Verma, who had built We Anonymous - a cybersecurity page on Instagram with a loyal audience and zero business infrastructure. We came in and built the full stack. Automation systems, course delivery, client onboarding, brand identity, social media growth strategy. Everything a real business needs to operate and scale. Today We Anonymous is valued at Rs.279M - built from nothing but passion, content, and the right strategy behind it.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="-mt-3 mb-6"
            >
              <a
                href="https://shorturl.at/QQSy9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors hover:text-white underline underline-offset-4 sm:text-[15px] md:text-base"
              >
                <span>Read on Google</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              That result changed how we thought about what OWL Tech could be. We stopped thinking small. We went global, expanded our capabilities, and built a team that could handle everything under one roof - from a brand new website to a fully automated business operating system. Every client we take on becomes a partner and every partnership is measured by one thing only - real, measurable growth.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              We are still growing. We are still building. And we are still driven by the same thing that started all of this.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 text-sm leading-[1.7] sm:text-[15px] md:text-base space-y-1 text-white font-medium"
            >
              <p>The right technology changes everything.</p>
              <p>And we are here to make sure your business has it.</p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
