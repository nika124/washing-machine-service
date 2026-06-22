import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/routes.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          aria-label="DrWash მთავარი გვერდი"
          className="shrink-0 rounded text-2xl font-extrabold tracking-tight text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <span className="text-blue-700">Dr</span>Wash
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-2xl text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:hidden"
          aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>

        <nav aria-label="მთავარი ნავიგაცია" className="hidden items-center gap-0.5 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-2.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <nav id="site-navigation" aria-label="მობილური ნავიგაცია" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
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
