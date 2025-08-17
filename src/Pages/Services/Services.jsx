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
          content="გაეცანით DrWash-ის სერვისებს — გაჟონვის შეკეთება, ძრავის პრობლემების აღმოფხვრა და სარეცხი მანქანის მონტაჟი."
        />
        <link rel="canonical" href="https://drwash.ge/services" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">ჩვენი სერვისები</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          სწრაფი და სანდო მომსახურება ყველა ტიპის სარეცხი მანქანისთვის
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Leakage Repair */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <PlumbingIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              გაჟონვის შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              წყლის გაჟონვის სწრაფი აღმოჩენა და ეფექტური შეკეთება, რომ თავიდან
              აიცილოთ სერიოზული დაზიანებები.
            </p>
          </div>

          {/* Motor Repair */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ძრავის პრობლემა
            </h3>
            <p className="mt-2 text-gray-600">
              ძრავის დიაგნოსტიკა და პროფესიონალური შეკეთება ნებისმიერი სირთულის
              პრობლემის შემთხვევაში.
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <SettingsIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              მონტაჟი
            </h3>
            <p className="mt-2 text-gray-600">
              ახალი სარეცხი მანქანის მონტაჟი და სრულფასოვანი კონფიგურაცია
              უსაფრთხოებისა და ხარისხის დაცვით.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
