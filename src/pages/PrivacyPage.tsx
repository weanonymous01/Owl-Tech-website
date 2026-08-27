import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const PrivacyPage: FC = () => {
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
            Privacy Policy
          </motion.h1>

          <div className="space-y-8 text-sm leading-[1.75] sm:text-[15px] md:text-base font-inter text-neutral-300">
            <p>
              Last updated: August 2026. OWL Tech India (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us through our website and services.
            </p>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                1. Information We Collect
              </h2>
              <p>
                When you interact with our website or submit an inquiry, we collect information that you voluntarily provide to us, including your full name, email address, phone number, and any project details or notes included in your message. We do not collect unnecessary personal data.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect solely to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-300">
                <li>Respond to your inquiries and schedule strategy consultations.</li>
                <li>Evaluate project scopes and deliver agreed-upon technology services.</li>
                <li>Communicate updates regarding ongoing project engagements.</li>
                <li>Maintain the technical security and performance of our infrastructure.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We never sell, rent, or trade your personal data. We only share information with vetted service providers (such as secure email transit tools and cloud hosting providers) strictly necessary to operate our website and communicate with you.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, or misuse. All data transmissions are encrypted using standard SSL/TLS protocols.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                5. Your Rights
              </h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion of your contact records from our database at any time.
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-base font-medium text-white sm:text-lg">
                6. Contact Us
              </h2>
              <p>
                If you have questions or concerns about our Privacy Policy or data handling practices, reach out to us at hello@owltech.in or by mail at OWL Tech India, 1DLF Cyber City, Phase 2, Gurugram, Haryana 122002, India.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
