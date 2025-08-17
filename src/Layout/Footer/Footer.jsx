// src/Layout/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Links */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-white font-semibold mb-3">DrWash</h3>
            <p className="text-sm">სარეცხი მანქანის შეკეთება თბილისში</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">ნავიგაცია</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">მთავარი</Link>
              </li>
              <li>
                <Link to="/services">სერვისები</Link>
              </li>
              <li>
                <Link to="/about">ჩვენს შესახებ</Link>
              </li>
              <li>
                <Link to="/contact">კონტაქტი</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">კონტაქტი</h3>
            <p className="text-sm">📞 555 123 456</p>
            <p className="text-sm">✉️ info@drwash.ge</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">სამუშაო საათები</h3>
            <p className="text-sm">ორშ - შაბ: 09:00 - 20:00</p>
            <p className="text-sm">კვ: დაისვენება</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DrWash. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
}
