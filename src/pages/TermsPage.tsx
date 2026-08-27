import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const TermsPage: FC = () => {
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
            Terms &amp; Conditions
          </motion.h1>

          <div className="space-y-8 text-sm leading-[1.75] sm:text-[15px] md:text-base font-inter text-neutral-300">
            <p>
              Last updated: August 2026. Welcome to OWL Tech India. By accessing our website, engaging our services, or partnering with us, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                1. Scope of Services
              </h2>
              <p>
                OWL Tech India provides digital consulting, custom web and software development, business automation systems, brand positioning, social media strategy, and AI infrastructure services. Specific project deliverables, scopes, and timelines are agreed upon in individual statements of work or partner agreements.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                2. Intellectual Property
              </h2>
              <p>
                Unless explicitly outlined in a custom agreement, all intellectual property rights for custom code, systems, and creative deliverables developed specifically for a client pass to that client upon full settlement of project fees. All foundational frameworks, proprietary tools, and methodology remain the intellectual property of OWL Tech India.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                3. Client Responsibilities
              </h2>
              <p>
                Clients agree to provide necessary assets, feedback, and access required for the execution of agreed-upon deliverables in a timely manner. Delays in providing necessary input may alter project completion timelines.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                4. Confidentiality
              </h2>
              <p>
                Both parties agree to treat proprietary business information, strategies, metrics, credentials, and technical architectures with the highest degree of care and not disclose confidential information to any unauthorised third parties.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                5. Limitation of Liability
              </h2>
              <p>
                OWL Tech India executes all services with rigorous professional standards. However, we do not guarantee specific third-party platform algorithm changes, third-party hosting outages, or market outcomes outside of our direct technological and strategic control.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-medium text-white sm:text-lg">
                6. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <h2 className="text-base font-medium text-white sm:text-lg">
                7. Contact Information
              </h2>
              <p>
                For questions regarding these terms, please contact us at hello@owltech.in or write to OWL Tech India, 1DLF Cyber City, Phase 2, Gurugram, Haryana 122002, India.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
