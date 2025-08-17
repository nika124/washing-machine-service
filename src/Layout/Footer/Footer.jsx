// src/Layout/Footer/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-white text-2xl font-extrabold">
            <span className="text-blue-500">Dr</span>Wash
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            სარეცხი მანქანის შეკეთება თბილისში
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">ნავიგაცია</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-blue-400 transition" to="/">
                მთავარი
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition" to="/services">
                სერვისები
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition" to="/about">
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition" to="/contact">
                კონტაქტი
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">კონტაქტი</h4>
          <p>📞 555 123 456</p>
          <p>✉️ info@drwash.ge</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">სამუშაო საათები</h4>
          <p>ორშ - შაბ: 09:00 - 20:00</p>
          <p>კვ: დაისვენება</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} DrWash. ყველა უფლება დაცულია.
      </div>
    </footer>
  );
}
