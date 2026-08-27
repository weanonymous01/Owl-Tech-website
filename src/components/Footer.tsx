import { FC } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Globe, Instagram } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-black text-white px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand, Description, Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Logo */}
              <Link to="/" className="inline-block group">
                <span className="font-montserrat text-2xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                  OWL Tech India
                </span>
              </Link>

              <p className="mt-5 max-w-sm font-inter text-sm leading-relaxed text-neutral-400">
                Empowering businesses with innovative solutions. Let&apos;s create something amazing together.
              </p>
            </div>

            {/* Social Media Icons (X removed) */}
            <div className="flex items-center gap-4 text-neutral-400">
              <a
                href="https://www.linkedin.com/company/skgroup-holdings/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://owltech.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="transition-colors hover:text-white"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/owltech.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter text-sm font-semibold text-white tracking-normal">
              Sitemap
            </h4>
            <ul className="space-y-3 font-inter text-sm text-neutral-400">
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="transition-colors hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter text-sm font-semibold text-white tracking-normal">
              Other Pages
            </h4>
            <ul className="space-y-3 font-inter text-sm text-neutral-400">
              <li>
                <Link to="/404" className="transition-colors hover:text-white">
                  Error 404
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-inter text-sm font-semibold text-white tracking-normal">
              Contact Details
            </h4>
            <div className="space-y-3 font-inter text-sm text-neutral-400 leading-relaxed">
              <p>1DLF Cyber City, Phase 2, Gurugram, Haryana 122002, India</p>
              <p>
                <a
                  href="mailto:hello@owltech.in"
                  className="transition-colors hover:text-white"
                >
                  hello@owltech.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+917755089045"
                  className="transition-colors hover:text-white"
                >
                  +91-7755089045
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
