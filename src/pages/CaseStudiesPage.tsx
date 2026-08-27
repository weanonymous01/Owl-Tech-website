import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const CaseStudiesPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between w-full bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Main Content matching About Page layout and typography */}
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
              Case Study: We Anonymous
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              OWL Tech didn&apos;t land its first big win with a multinational corporation or a venture-backed startup with millions in funding. It came from a single Instagram page, a passionate founder, and a community of people who cared deeply about cybersecurity. Adarsh Verma had been building We Anonymous for years - creating content, growing an audience, and establishing himself as a genuine voice in the cybersecurity space. But passion alone doesn&apos;t build a business and Adarsh knew it.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              When OWL Tech came in, the first thing we did was listen. We looked at what Adarsh had built - 350,000 followers, a highly engaged community, and real credibility in his niche - and we saw exactly what was missing. There was no system behind it. No automation, no course infrastructure, no onboarding process, no brand identity that matched the size of the audience he had built. The potential was enormous and it was being left on the table every single day.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              So we got to work. We built the automation systems that handled course delivery and client onboarding end to end. We developed a brand identity that matched the ambition of the vision. We built the social media growth strategy that took the existing audience and turned it into a real, monetised community. Every piece was connected. Every decision was made with one outcome in mind - turning We Anonymous from a content page into a real, scalable business.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              The results came faster than even we expected. With the right infrastructure in place, We Anonymous launched its courses, grew its paying community, and built a brand that commands real authority in the cybersecurity and EdTech space. The business that started as an Instagram page is today valued at Rs.279M - not because of luck or virality, but because of strategy, systems, and relentless execution.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base text-neutral-300"
            >
              This is what OWL Tech does. We take what you have built and we give it the foundation it deserves. We find the gap between where you are and where you could be - and we close it.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 text-sm leading-[1.7] sm:text-[15px] md:text-base space-y-4 text-white font-medium"
            >
              <p>One case study. One proof of what is possible.</p>

              <div>
                <a
                  href="https://shorturl.at/QQSy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors hover:text-white underline underline-offset-4 sm:text-[15px] md:text-base"
                >
                  <span>Read on Google</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
