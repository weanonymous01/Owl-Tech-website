import { useState, useEffect, useRef, type FC } from "react";
import { Code2, Settings2, Megaphone, Share2, Cpu, type LucideIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  return "dark";
};

interface BentoFeature {
  title: string;
  blurb: string;
  icon: LucideIcon;
  animation: string;
}

interface BentoItemProps {
  feature: BentoFeature;
  span?: string;
  theme?: string;
  index?: number;
  isVisible?: boolean;
}

function BentoItem({ feature, span = "", theme = "dark", index = 0, isVisible = false }: BentoItemProps) {
  const { icon: Icon, animation, title, blurb } = feature;
  const gradientFill =
    theme === "dark"
      ? "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(59,130,246,0.18), transparent 72%)"
      : "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(148,163,184,0.25), transparent 72%)";
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${
        theme === "dark"
          ? "border-white/10 bg-[#0c0d12]/90 text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.7)]"
          : "border-neutral-900/10 bg-white/90 text-neutral-900 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      } motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[bento2-card_0.8s_ease-out_forwards]" : ""
      } ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === "dark" ? "bg-white/[0.03]" : "bg-white/85"
          }`}
        />
        <div
          className="absolute inset-0 opacity-70 transition-opacity duration-500"
          style={{ background: gradientFill }}
        />
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
            theme === "dark"
              ? "border-white/15 bg-white/[0.06] text-white"
              : "border-neutral-900/15 bg-white text-neutral-900"
          }`}
        >
          <Icon
            className="h-6 w-6"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1">
          <header className="flex items-center justify-between gap-3">
            <h3 className="font-montserrat text-sm font-bold uppercase tracking-wider sm:text-base">
              {title}
            </h3>
          </header>
          <p
            className={`mt-2 font-inter text-xs leading-relaxed transition-colors duration-500 sm:text-sm ${
              theme === "dark" ? "text-white/60" : "text-neutral-600"
            }`}
          >
            {blurb}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className={`absolute inset-0 rounded-2xl border transition-colors duration-500 ${
            theme === "dark" ? "border-white/20" : "border-neutral-900/10"
          }`}
          style={{
            maskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
            WebkitMaskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
          }}
        />
      </div>
    </article>
  );
}

export const ServicesPage: FC = () => {
  const [theme, setTheme] = useState(() => getRootTheme());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes bento2-tilt {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
        100% { transform: rotate(-2deg); }
      }
      @keyframes bento2-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(6%, -6%, 0); }
      }
      @keyframes bento2-glow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 0 rgba(0,0,0,0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0,0,0,0.2)); }
      }
      @keyframes bento2-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMediaChange = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMediaChange);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const current = getRootTheme();
    const next = current === "dark" ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.setAttribute("data-theme", next);
    setTheme(next);
    try {
      window.localStorage?.setItem("bento-theme", next);
    } catch (_err) {
      /* ignore */
    }
  };

  const features: BentoFeature[] = [
    {
      title: "Web & Software Development",
      blurb:
        "High-performance websites and custom software built to power your business operations, engineered with scalable full-stack architectures, modern interfaces, and lightning-fast speed.",
      icon: Code2,
      animation: "bento2-float 6s ease-in-out infinite",
    },
    {
      title: "Full Business Automation",
      blurb: "Funnels, onboarding systems, and workflows that run your business while you focus on growth.",
      icon: Settings2,
      animation: "bento2-pulse 4s ease-in-out infinite",
    },
    {
      title: "Brand & PR Positioning",
      blurb: "SEO, blog management, and strategic PR that puts your brand in front of the right people.",
      icon: Megaphone,
      animation: "bento2-tilt 5.5s ease-in-out infinite",
    },
    {
      title: "Social Media Management",
      blurb: "Organic and paid strategies that build audiences, drive engagement, and convert followers into customers.",
      icon: Share2,
      animation: "bento2-drift 8s ease-in-out infinite",
    },
    {
      title: "AI Infrastructure",
      blurb:
        "Intelligent systems that automate operations, manage customer relationships, and integrate AI directly into your workflow to make your business faster and more efficient.",
      icon: Cpu,
      animation: "bento2-glow 7s ease-in-out infinite",
    },
  ];

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div
      className={`relative min-h-screen w-full transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-neutral-900"
      }`}
    >
      <Navbar />

      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "[--aurora-base:#040404] [--aurora-accent:rgba(59,130,246,0.15)]"
              : "[--aurora-base:#ffffff] [--aurora-accent:rgba(148,163,184,0.15)]"
          }`}
          style={{
            background:
              "radial-gradient(ellipse 55% 100% at 12% 0%, var(--aurora-accent), transparent 65%), radial-gradient(ellipse 40% 80% at 88% 0%, rgba(148,163,184,0.1), transparent 70%), var(--aurora-base)",
          }}
        />
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "[--grid-color:rgba(255,255,255,0.06)]"
              : "[--grid-color:rgba(17,17,17,0.08)]"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            opacity: 0.9,
          }}
        />
        <div
          className={`pointer-events-none absolute inset-0 ${
            theme === "dark"
              ? "[--edge-color:rgba(0,0,0,1)]"
              : "[--edge-color:rgba(255,255,255,1)]"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 55%, var(--edge-color) 100%)",
            filter: "blur(40px)",
            opacity: 0.75,
          }}
        />
      </div>

      {/* Bento Grid Header & Showcase */}
      <section
        ref={sectionRef}
        className={`relative w-full px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20 md:px-16 md:pt-36 md:pb-24 lg:px-20 lg:pt-40 lg:pb-28 motion-safe:opacity-0 ${
          sectionVisible ? "motion-safe:animate-[bento2-intro_0.9s_ease-out_forwards]" : ""
        }`}
      >
        <header
          className={`mb-10 flex flex-col gap-6 border-b pb-6 transition-colors duration-500 md:flex-row md:items-end md:justify-between ${
            theme === "dark" ? "border-white/10" : "border-neutral-900/10"
          }`}
        >
          <div className="flex flex-col gap-2">
            <span
              className={`font-inter text-xs uppercase tracking-[0.35em] transition-colors duration-500 ${
                theme === "dark" ? "text-white/40" : "text-neutral-500"
              }`}
            >
              Technical Strategy
            </span>
            <h1 className="font-montserrat text-3xl font-black tracking-tight transition-colors duration-500 md:text-5xl">
              Core Capabilities
            </h1>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p
              className={`font-inter max-w-sm text-sm transition-colors duration-500 md:text-base ${
                theme === "dark" ? "text-white/60" : "text-neutral-600"
              }`}
            >
              High-performance digital engineering, automated systems, and market-dominating brand growth.
            </p>
            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-full border px-4 py-1 font-inter text-[10px] font-medium uppercase tracking-[0.35em] transition-colors duration-500 ${
                theme === "dark"
                  ? "border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                  : "border-neutral-900/15 text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900"
              }`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {features.map((feature, index) => (
            <BentoItem
              key={feature.title}
              span={spans[index]}
              feature={feature}
              theme={theme}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      </section>

      {/* Services Philosophy / Wordings */}
      <section
        className={`w-full border-t px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-20 transition-colors duration-500 ${
          theme === "dark" ? "border-white/10 bg-black" : "border-neutral-900/10 bg-white"
        }`}
      >
        <div className="max-w-4xl xl:max-w-5xl">
          <div>
            <p
              className="mb-6 text-sm leading-[1.75] sm:text-[15px] md:text-base font-inter"
              style={{
                color: theme === "dark" ? "rgba(225, 224, 204, 0.7)" : "#4b5563",
              }}
            >
              At OWL Tech, our services are not a menu you pick from and hope for the best. Every capability we offer - Web and Software Development, Business Automation, PR and Brand Positioning, Social Media Management, and AI Infrastructure - is designed to work together as one connected system. We don&apos;t hand you a website and walk away. We build the full stack and we stay until it is working.
            </p>

            <div
              className="space-y-1 text-sm leading-[1.75] sm:text-[15px] md:text-base font-inter"
              style={{
                color: theme === "dark" ? "rgba(225, 224, 204, 0.7)" : "#4b5563",
              }}
            >
              <p>Every service is built around your business specifically.</p>
              <p>Not a template. Not a shortcut. Built for you.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
