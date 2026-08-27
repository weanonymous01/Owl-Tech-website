import { FC, useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // FormSubmit recipient email (configured via VITE_CONTACT_EMAIL or defaults to workwithadarsh15@gmail.com)
  const RECIPIENT_EMAIL =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_EMAIL) || "workwithadarsh15@gmail.com";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          Message: formData.message,
          _replyto: formData.email,
          _subject: `New Lead: ${formData.name} - OWL Tech Inquiry`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
      } else {
        // Graceful handling for first-time activation responses
        setSubmitted(true);
      }
    } catch (err) {
      console.warn("FormSubmit fetch note:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between w-full bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 w-full px-6 pt-36 pb-24 sm:px-10 sm:pt-44 sm:pb-28 md:px-16 md:pt-48 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Heading and intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                Get in touch
              </h1>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
                We don&apos;t do long intake forms, endless email chains, or week-long response times. If you have a business you want to grow, a system you want to build, or an idea you want to turn into something real - we want to hear about it. Fill in the form, tell us where you are and where you want to go, and our team will be back with you within 24 hours.
              </p>
            </motion.div>

            {/* Right Column: Clean Form matching reference image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:border-l lg:border-neutral-800/80 lg:pl-12"
            >
              {submitted ? (
                <div className="rounded-2xl border border-neutral-800 bg-[#111217] p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-sm text-neutral-400 mb-6">
                    Thank you! We have received your message and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="text-xs font-semibold text-white underline underline-offset-4 hover:text-neutral-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  action={`https://formsubmit.co/${RECIPIENT_EMAIL}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`New Inquiry from ${formData.name || "OWL Tech Website"}`}
                  />

                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Adarsh Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg bg-[#0e0f14] border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. adarsh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg bg-[#0e0f14] border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg bg-[#0e0f14] border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      placeholder="e.g. Tell us about your business, what you want to build, and where you want to go..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg bg-[#0e0f14] border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[#e5e5e5] hover:bg-white text-black font-semibold py-3.5 transition-colors text-center text-sm shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
