// src/Pages/Services/Services.jsx
import { Helmet } from "react-helmet-async";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>სარეცხი მანქანის სერვისები თბილისში | DrWash</title>
        <meta
          name="description"
          content="DrWash-ის სარეცხი მანქანის სერვისები თბილისში: დიაგნოსტიკა, ადგილზე შეკეთება, გაჟონვის, ბარაბნის, ძრავის და ელექტრონული დაფის პრობლემები."
        />
        <meta
          property="og:title"
          content="სარეცხი მანქანის სერვისები თბილისში | DrWash"
        />
        <meta
          property="og:description"
          content="დიაგნოსტიკა, შეკეთება და გავრცელებული დაზიანებების აღმოფხვრა ადგილზე მისვლით."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drwash.ge/services" />
        <meta property="og:site_name" content="DrWash" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:image" content="https://drwash.ge/og-image.svg" />
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi" />
        <link rel="canonical" href="https://drwash.ge/services" />
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 text-center py-12 sm:py-14 px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">ჩვენი სერვისები</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          სწრაფი და სანდო მომსახურება ყველა ტიპის სარეცხი მანქანისთვის, ასევე
          ვიბარებთ სარეცხ მანქანებს.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-10">
          სარეცხი მანქანის შეკეთების ძირითადი მიმართულებები
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Leakage Repair */}
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left">
            <PlumbingIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              პროფესიონალი ხელოსანი ჩაატარებს დანადგარის სრულ დიაგნოსტიკას,
              გაუმართაობის მიზეზის დადგენა ხდება მაქსიმალურად მცირე დროში.
            </p>
          </div>

          {/* Motor Repair */}
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              შეკეთება
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              სარეცხი მანქანის შეკეთება ხდება ადგილზე. შესაძლებელია საჭირო
              გახდეს სარეცხი მანქანის ან ნაწილის სერვისცენტრში გადატანა.
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left sm:col-span-2 lg:col-span-1">
            <SettingsIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              დაზიანების ტიპები
            </h3>
            <ul className="mt-2 text-slate-600 space-y-1 list-disc list-inside">
              <li>ელექტრონული დაფის დაზიანება</li>
              <li>ბარაბნის და საკისრების შეკეთება</li>
              <li>ღვედის და ძრავის შეცვლა ან აღდგენა</li>
              <li>სხვა მექანიკური და ელექტრო დეტალების შეცვლა</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 px-6 py-6 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            გჭირდებათ ხელოსნის გამოძახება?
          </h3>
          <p className="mt-2 text-slate-600">
            დაგვიკავშირდით ტელეფონით ან WhatsApp-ზე და შევათანხმებთ ვიზიტის დროს.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+995555123456"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <PhoneIcon aria-hidden="true" />
              555 123 456
            </a>
            <a
              href="https://wa.me/995555123456"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
