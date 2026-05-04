// src/Pages/Services/Services.jsx
import { Helmet } from "react-helmet-async";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>სერვისები | DrWash</title>
        <meta
          name="description"
          content="გაეცანით DrWash-ის სერვისებს — გაჟონვის შეკეთება, ძრავის პრობლემების აღმოფხვრა.სარეცხი მანქანის ხელოსანი გამოძახებით, ადგილზე მისვლის სერვისი"          
        />
        <meta 
         name="keywords"
         content="სარეცხის ხელოსანი, სარეცხი მანქანის ჩაბარება, სარეცხი მანქანის ხელოსანი, სარეცხი მანქანების ხელოსანი, სარეცხი მანქანის ხელოსანი გამოძახებით, სარეცხის მანქანის, გამოძახების სერვისი, ადგილზე მისვლა,samsung,bosh,beko,Indesit,Gorenje">          
         </meta>
         <meta property="og:title" content="სარეცხი მანქანის შეკეთება ადგილზე"></meta>
         <meta property="og:description" content="სწრაფი და ხარისხიანი მოსახურეობა. Book now."></meta>
         <meta property="og:type" content="website"></meta>
         <meta name="geo.region" content="GE-TB"></meta>
         <meta name="geo.placename" content="Tbilisi"></meta>
        <link rel="canonical" href="https://drwash.ge/services" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">ჩვენი სერვისები</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          სწრაფი და სანდო მომსახურება ყველა ტიპის სარეცხი მანქანისთვის,
          ასევე ვიბარებთ სარეცხ მანქანებს
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
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
              სარეცხი მანქანის შეკეთება ხდება ადგილზე. 
              შესაძლებელია საჭირო გახდეს სარეცხი მანქანის/ნაწილის სერვისცენტრში გადატანა   
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <SettingsIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              დაზიანების  ტიპები
            </h3>
            <p className="mt-2 text-gray-600">
                ელექტრონული დაფის(პლატის) დაზიანება;
                ბარაბნის შეკეთება;
                ღვედის შეცვლა;
                ძრავის შეკეთება/შეცვლა;
                საკისრების შეცვლა;                                
                სხვა დეტალების შეცვლა არდგენა;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
