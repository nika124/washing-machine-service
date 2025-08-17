// src/Pages/Contact/Contact.jsx
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>კონტაქტი | DrWash</title>
        <meta
          name="description"
          content="დაგვიკავშირდით სარეცხი მანქანის შეკეთებისთვის თბილისში. ტელეფონი, ელფოსტა და მისამართი."
        />
        <link rel="canonical" href="https://drwash.ge/contact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">კონტაქტი</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          დაგვიკავშირდით ნებისმიერი შეკითხვისთვის
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            როგორ დაგვიკავშირდეთ
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              📞 <span className="font-semibold">555 123 456</span>
            </li>
            <li>✉️ info@drwash.ge</li>
            <li>📍 თბილისი, საქართველო</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              სამუშაო საათები
            </h3>
            <p className="text-gray-600 mt-2">ორშ - შაბ: 09:00 - 20:00</p>
            <p className="text-gray-600">კვ: დაისვენება</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            გამოგვიგზავნეთ შეტყობინება
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="სახელი"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="ელფოსტა"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows="4"
              placeholder="თქვენი შეტყობინება"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              გაგზავნა
            </button>
          </form>
        </div>
      </section>

      {/* Map or CTA */}
      <section className="bg-blue-700 text-white text-center py-12">
        <h2 className="text-2xl font-bold">📍 გელოდებით თბილისში</h2>
        <p className="mt-2">
          მოგვწერეთ ან დაგვირეკეთ ნებისმიერი პრობლემის შემთხვევაში
        </p>
      </section>
    </>
  );
}
