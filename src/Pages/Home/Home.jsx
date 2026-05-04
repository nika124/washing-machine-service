// src/Pages/Home/Home.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="სარეცხი მანქანის შეკეთება თბილისში | DrWash" />
        <meta
          name="twitter:description"
          content="სწრაფი სერვისი თბილისის მასშტაბით: დიაგნოსტიკა, შეკეთება და გარანტია."
        />
        <meta name="twitter:image" content="https://drwash.ge/og-image.svg" />
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi" />
        <link rel="canonical" href="https://drwash.ge/" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            სარეცხი მანქანის შეკეთება ადგილზე, თბილისის მასშტაბით             
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100">            
            სწრაფი, სანდო და პროფესიონალური სერვისი თქვენი სარეცხი მანქანისთვის.            
            სარეცხი მანქანის ხელოსანი გამოძახება 20 ლარი
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+995555123456"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              <PhoneIcon aria-hidden="true" />
              დაგვირეკეთ – 555 123 456
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/70 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              სერვისების ნახვა
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/70 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              კონტაქტი
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ჩვენი სერვისები
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Leakage */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-gray-600">
              პროფესინალი ხელოსანი ჩაატარებს დანადგარის სრულ დიაგნოსტიკას,
              გაუმართაობის მიზეზის დადგენა ხდება მაქსიმალურად მცირე დროში.
            </p>
          </div>

          {/* Engine */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <ElectricalServicesIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის შეკეთება ხდება ადგილზე მოსვლის. 
              შესაძლებელია საჭირო გახდეს სარეცხი მანქანის/ნაწილის სერვისცენტრში გადატანა   
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <HomeRepairServiceIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              დაზიანების  ტიპები
            </h3>
            <ul className="mt-2 text-gray-600 space-y-1 text-left list-disc list-inside">
              <li>ელექტრონული დაფის დაზიანება</li>
              <li>ბარაბნის და საკისრების შეკეთება</li>
              <li>ღვედის, ძრავის და სხვა დეტალების შეცვლა</li>
              <li>წყლის გაჟონვის და დრენაჟის პრობლემები</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            რატომ DrWash?
          </h2>
          <p className="text-gray-600">
            15 წლიანი გამოცდილება და პროფესიონალთა გუნდი, სერვისზე გარანტია, 
            ორიგინალი ნაწილები, პროფესიონალი ხელოსანის ადგილზე მისვლა ხდება ოპერატიულად, 
            სარეცხი მანქანის ხელოსანი გამოძახებით
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            სარეცხი მანქანის ხელოსნის გამოძახება
          </Link>
        </div>
      </section>
    </>
  );
}
