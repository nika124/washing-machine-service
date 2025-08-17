// src/Layout/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          DrWash
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600">
            მთავარი
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            სერვისები
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            ჩვენს შესახებ
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            კონტაქტი
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-gray-50 border-t">
          <div className="px-4 py-2 flex flex-col gap-3">
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
