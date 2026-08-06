import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../../Assets/Images/logo.webp";
import { MenuItems } from "../../../Assets/Data/MenuItems";
import Resume from "../../../Assets/resume.pdf";

const linkClass = ({ isActive }) =>
  "flex items-baseline gap-1.5 font-heading text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors " +
  (isActive ? "text-steel" : "text-ink hover:text-steel");

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/15 bg-paper">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-8 py-3">
        <NavLink
          to="/"
          end
          onClick={() => setNavOpen(false)}
          className="mr-auto flex items-center gap-3 no-underline transition-colors hover:text-steel"
          aria-label="Muhammad Mamooji — home"
        >
          <img src={Logo} alt="" className="h-[26px] w-[26px] shrink-0 object-cover" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[17px] font-semibold tracking-[0.01em] uppercase">
              Muhammad Mamooji
            </span>
            <span className="mt-[3px] text-[9.5px] uppercase tracking-[0.18em] text-ink/55">
              Full Stack Developer
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 sm:flex">
          {MenuItems.map((item) => (
            <NavLink key={item.url} to={item.url} className={linkClass} end={item.url === "/"}>
              <span className="text-[9px] tracking-[0.1em] text-ink/40">{item.num}</span>
              {item.title}
            </NavLink>
          ))}
          <a className="btn btn-primary" href={Resume} download>
            Resume
          </a>
        </nav>

        <button
          className="btn btn-secondary btn-icon sm:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
        </button>
      </div>

      {navOpen && (
        <nav className="flex flex-col border-t border-ink/15 px-8 py-4 sm:hidden">
          {MenuItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/"}
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                "flex items-baseline gap-2 border-b border-ink/10 py-3 font-heading text-[15px] font-semibold uppercase tracking-[0.1em] " +
                (isActive ? "text-steel" : "text-ink")
              }
            >
              <span className="text-[10px] tracking-[0.1em] text-ink/40">{item.num}</span>
              {item.title}
            </NavLink>
          ))}
          <a className="btn btn-primary mt-4" href={Resume} download>
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
