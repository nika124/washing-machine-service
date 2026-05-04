// src/Pages/Services/Services.jsx
import { Helmet } from "react-helmet-async";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">ჩვენი სერვისები</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          სწრაფი და სანდო მომსახურება ყველა ტიპის სარეცხი მანქანისთვის, ასევე
          ვიბარებთ სარეცხ მანქანებს
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          სარეცხი მანქანის შეკეთების ძირითადი მიმართულებები
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Leakage Repair */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <PlumbingIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-gray-600">
              პროფესინალი ხელოსანი ჩაატარებს დანადგარის სრულ დიაგნოსტიკას,
              გაუმართაობის მიზეზის დადგენა ხდება მაქსიმალურად მცირე დროში.
            </p>
          </div>

          {/* Motor Repair */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის შეკეთება ხდება ადგილზე. შესაძლებელია საჭირო
              გახდეს სარეცხი მანქანის/ნაწილის სერვისცენტრში გადატანა
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <SettingsIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              დაზიანების ტიპები
            </h3>
            <ul className="mt-2 text-gray-600 space-y-1 text-left list-disc list-inside">
              <li>ელექტრონული დაფის დაზიანება</li>
              <li>ბარაბნის და საკისრების შეკეთება</li>
              <li>ღვედის და ძრავის შეცვლა ან აღდგენა</li>
              <li>სხვა მექანიკური და ელექტრო დეტალების შეცვლა</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
