// src/Layout/Header/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          <span className="text-blue-600">Dr</span>Wash
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["მთავარი", "სერვისები", "ჩვენს შესახებ", "კონტაქტი"].map(
            (item, idx) => {
              const href = ["/", "/services", "/about", "/contact"][idx];
              return (
                <Link
                  key={item}
                  to={href}
                  className="relative hover:text-blue-600 transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              );
            }
          )}
        </nav>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-gray-50 border-t">
          <div className="flex flex-col px-4 py-3 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>
              მთავარი
            </Link>
            <Link to="/services" onClick={() => setOpen(false)}>
              სერვისები
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              ჩვენს შესახებ
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              კონტაქტი
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
