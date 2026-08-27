import { useRef, type CSSProperties, type FC } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

// ---------------- WordsPullUp ----------------
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.2em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span
                className="absolute top-[0.1em] -right-[0.32em] text-[0.38em] leading-none select-none"
                style={{ color: "#E1E0CC" }}
              >
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

// ---------------- WordsPullUpMultiStyle ----------------
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words: { word: string; className?: string }[] = [];

  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

// ---------------- Hero ----------------
const PrismaHero: FC = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-black font-sans select-none">
        <div className="relative h-full w-full overflow-hidden">
          {/* Background image */}
          <img
            src="/room.gif"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Noise texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Cinematic Vignette & Gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-transparent to-black/40" />

          {/* Navbar */}
          <Navbar />

          {/* Hero Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6 md:px-10 md:pb-8 lg:px-12 lg:pb-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              {/* Left: Giant "OWL*" Branding */}
              <div className="overflow-visible">
                <h1
                  className="font-medium leading-[0.88] tracking-[-0.05em] text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18.5vw] xl:text-[18vw]"
                  style={{ color: "#E1E0CC" }}
                >
                  <WordsPullUp text="OWL" showAsterisk />
                </h1>
              </div>

              {/* Right: Mission Statement & CTA Button */}
              <div className="flex max-w-md flex-col gap-5 pb-2 sm:pb-3 md:pb-4 lg:pb-3">
                <motion.p
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs font-normal leading-[1.5] sm:text-sm md:text-[14.5px]"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                >
                  OWL Tech is a global technology and strategy company on a simple mission: take modern tech and put it to work for businesses that are ready to grow.
                </motion.p>

                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:opacity-90 active:scale-[0.98] sm:text-[15px]"
                    style={{ backgroundColor: "#E1E0CC", color: "#000000" }}
                  >
                    Book a Call
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:translate-x-0.5 sm:h-9 sm:w-9">
                      <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Strategy Meets Execution Section */}
      <section className="w-full bg-black px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-lg font-semibold tracking-wide sm:mb-10 sm:text-xl md:text-2xl"
              style={{ color: "rgba(180, 200, 220, 0.9)" }}
            >
              Strategy Meets Execution
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-sm leading-[1.7] sm:text-[15px] md:text-base"
              style={{ color: "rgba(225, 224, 204, 0.65)" }}
            >
              At OWL Tech, we don&apos;t believe in half-measures. We partner with businesses from early-stage founders to established enterprises - and plug in the exact technology, systems, and strategy they need to grow. Whether you&apos;re launching, scaling, or rebuilding, we bring the tools, the team, and the thinking to make it happen.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-sm leading-[1.7] sm:text-[15px] md:text-base"
              style={{ color: "rgba(225, 224, 204, 0.65)" }}
            >
              Our work spans three core areas -{" "}
              <span className="font-bold" style={{ color: "#E1E0CC" }}>Digital Presence</span>,{" "}
              <span className="font-bold" style={{ color: "#E1E0CC" }}>Business Automation</span>, and{" "}
              <span className="font-bold" style={{ color: "#E1E0CC" }}>Brand Growth</span>.{" "}
              We don&apos;t pick one and ignore the rest. Every client gets all three working together, built around their business, executed under one roof.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-[1.7] sm:text-[15px] md:text-base font-medium"
              style={{ color: "#E1E0CC" }}
            >
              One partner for every capability your business needs. Zero compromise on execution, strategy, or results.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrismaHero;



