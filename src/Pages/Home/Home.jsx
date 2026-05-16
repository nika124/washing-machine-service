// src/Pages/Home/Home.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BuildIcon from "@mui/icons-material/Build";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>სარეცხი მანქანის შეკეთება თბილისში | DrWash</title>
        <meta
          name="description"
          content="სარეცხი მანქანის შეკეთება თბილისში ადგილზე მისვლით. DrWash გთავაზობთ სწრაფ დიაგნოსტიკას, შეკეთებას და გარანტიას."
        />
        <meta property="og:title" content="სარეცხი მანქანის შეკეთება თბილისში | DrWash" />
        <meta
          property="og:description"
          content="გამოიძახეთ სარეცხი მანქანის ხელოსანი თბილისში. ადგილზე მისვლა, დიაგნოსტიკა და შეკეთება გარანტიით."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drwash.ge/" />
        <meta property="og:site_name" content="DrWash" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:image" content="https://drwash.ge/og-image.svg" />
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi" />
        <link rel="canonical" href="https://drwash.ge/" />
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 py-9 sm:py-12 px-5 sm:px-6">
        <div className="max-w-screen-xl mx-auto grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              სარეცხი მანქანის შეკეთება ადგილზე, თბილისის მასშტაბით
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              სწრაფი დიაგნოსტიკა, ადგილზე შეკეთება და გარანტია სერვისზე.
              ხელოსნის გამოძახება თბილისში - 20 ლარი.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a
                href="tel:+995555123456"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-900/10 transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/15 active:translate-y-px active:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <PhoneIcon aria-hidden="true" />
                დაგვირეკეთ – 555 123 456
              </a>
              <a
                href="https://wa.me/995555123456"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-300 bg-white/95 px-6 py-3 font-semibold text-blue-700 shadow-md shadow-blue-900/5 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-800 hover:shadow-lg hover:shadow-blue-900/10 active:translate-y-px active:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <WhatsAppIcon aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-white hover:text-blue-700 hover:shadow-md active:translate-y-px active:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                სერვისების ნახვა
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2 text-sm font-medium text-slate-600">
              <span className="rounded-full bg-white px-3 py-1.5 border border-blue-200 shadow-sm">გარანტია სერვისზე</span>
              <span className="rounded-full bg-white px-3 py-1.5 border border-blue-200 shadow-sm">ადგილზე მისვლა</span>
              <span className="rounded-full bg-white px-3 py-1.5 border border-blue-200 shadow-sm">10:00 - 20:00</span>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-blue-200 bg-white/90 p-2 shadow-lg shadow-blue-900/10">
            <img
              src="/images/hero-service-placeholder.png"
              alt="სარეცხი მანქანის ხელოსანი თბილისში ადგილზე შეკეთების დროს"
              width="960"
              height="720"
              decoding="async"
              fetchpriority="high"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-screen-lg mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-10">
          ჩვენი სერვისები
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Leakage */}
          <div className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition flex flex-col items-start text-left">
            <BuildIcon className="text-blue-600" style={{ fontSize: 42 }} />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-slate-900">
              დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              პროფესიონალი ხელოსანი ჩაატარებს დანადგარის სრულ დიაგნოსტიკას,
              გაუმართაობის მიზეზის დადგენა ხდება მაქსიმალურად მცირე დროში.
            </p>
          </div>

          {/* Engine */}
          <div className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition flex flex-col items-start text-left">
            <ElectricalServicesIcon
              className="text-blue-600"
              style={{ fontSize: 42 }}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-slate-900">
              შეკეთება
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              სარეცხი მანქანის შეკეთება ხდება ადგილზე. შესაძლებელია საჭირო
              გახდეს სარეცხი მანქანის ან ნაწილის სერვისცენტრში გადატანა.
            </p>
          </div>

          {/* Installation */}
          <div className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition flex flex-col items-start text-left sm:col-span-2 lg:col-span-1">
            <HomeRepairServiceIcon
              className="text-blue-600"
              style={{ fontSize: 42 }}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-slate-900">
              დაზიანების ტიპები
            </h3>
            <ul className="mt-2 text-slate-600 space-y-1 list-disc list-inside">
              <li>ელექტრონული დაფის დაზიანება</li>
              <li>ბარაბნის და საკისრების შეკეთება</li>
              <li>ღვედის, ძრავის და სხვა დეტალების შეცვლა</li>
              <li>წყლის გაჟონვის და დრენაჟის პრობლემები</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50 py-10 sm:py-12 text-center px-5 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
            რატომ DrWash?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            15 წლიანი გამოცდილება და პროფესიონალთა გუნდი, სერვისზე გარანტია, 
            ორიგინალი ნაწილები, პროფესიონალი ხელოსანის ადგილზე მისვლა ხდება ოპერატიულად, 
            სარეცხი მანქანის ხელოსანი გამოძახებით
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-900/10 transition hover:bg-blue-700 hover:shadow-lg active:translate-y-px active:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            სარეცხი მანქანის ხელოსნის გამოძახება
          </Link>
        </div>
      </section>
    </>
  );
}
