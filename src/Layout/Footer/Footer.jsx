// src/Layout/Footer/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 py-10 sm:py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-white text-2xl font-extrabold">
            <span className="text-blue-500">Dr</span>Wash
          </p>
          <p className="text-sm mt-2 text-slate-400">
            სარეცხი მანქანის შეკეთება თბილისში 
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">ნავიგაცია</p>
          <ul className="space-y-1">
            <li>
              <Link className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" to="/">
                მთავარი
              </Link>
            </li>
            <li>
              <Link className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" to="/services">
                სერვისები
              </Link>
            </li>
            <li>
              <Link className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" to="/about">
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" to="/contact">
                კონტაქტი
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">კონტაქტი</p>
          <address className="not-italic space-y-1">
            <p>
              <a className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" href="tel:+995555123456">
                555 123 456
              </a>
            </p>
            <p>
              <a className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" href="mailto:info@drwash.ge">
                info@drwash.ge
              </a>
            </p>
            <p>
              <a className="inline-flex py-1.5 hover:text-blue-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" href="https://wa.me/995555123456">
                WhatsApp
              </a>
            </p>
          </address>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">სამუშაო საათები</p>
          <p>ორშ - კვირა: 10:00 - 20:00</p>
          <p>სარეცხი მანქანების ხელოსანი გამოძახებით</p>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center text-sm text-slate-500 py-4">
        © {new Date().getFullYear()} DrWash. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}
