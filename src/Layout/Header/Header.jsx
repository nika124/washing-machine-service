import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/routes.js";
import { contactLinks, site } from "../../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.6)] backdrop-blur-xl">
      <div className="container-shell flex h-[68px] items-center justify-between gap-3">
        <Link
          to="/"
          aria-label="DrWash მთავარი გვერდი"
          className="focus-ring flex shrink-0 items-center gap-2 rounded-xl text-xl font-black tracking-tight text-slate-950 sm:text-2xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm text-white shadow-lg shadow-blue-600/25">
            DW
          </span>
          <span><span className="text-blue-600">Dr</span>Wash</span>
        </Link>

        <nav aria-label="მთავარი ნავიგაცია" className="hidden items-center gap-0.5 text-[13px] font-bold xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="focus-ring hidden min-h-11 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-blue-700 sm:inline-flex"
            href={contactLinks.phone}
          >
            {site.phone.display}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm xl:hidden"
            aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
            aria-expanded={open}
            aria-controls="site-navigation"
          >
            <span aria-hidden="true" className="text-symbol-icon mobile-menu-symbol-icon text-2xl">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="site-navigation" aria-label="მობილური ნავიგაცია" className="border-t border-slate-200 bg-white/98 py-3 shadow-xl xl:hidden">
          <div className="container-shell grid max-h-[calc(100vh-84px)] gap-1 overflow-y-auto sm:grid-cols-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `min-h-12 rounded-xl px-4 py-3 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-4 font-bold text-white sm:col-span-2"
              href={contactLinks.phone}
            >
              დარეკვა — {site.phone.display}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
