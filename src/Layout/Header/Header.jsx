// src/Layout/Header/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "მთავარი", href: "/" },
  { label: "სერვისები", href: "/services" },
  { label: "ჩვენს შესახებ", href: "/about" },
  { label: "კონტაქტი", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded"
        >
          <span className="text-blue-600">Dr</span>Wash
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 text-slate-700 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded px-1 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 ${
                  isActive
                    ? "text-blue-700"
                    : "hover:text-blue-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav id="mobile-navigation" className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col px-4 py-3 text-slate-700 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
