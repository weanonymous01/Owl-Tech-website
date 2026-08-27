import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

export const Navbar: FC<{ className?: string }> = ({ className = "" }) => {
  const location = useLocation();

  return (
    <nav className={`fixed left-1/2 top-0 z-50 -translate-x-1/2 ${className}`}>
      <div className="flex items-center gap-3 rounded-b-2xl border-b border-x border-white/10 bg-black/90 px-4 py-2.5 backdrop-blur-md sm:gap-5 sm:px-7 md:gap-8 md:rounded-b-3xl md:px-9 lg:gap-10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`font-inter text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 sm:text-xs md:text-sm ${
                isActive
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
