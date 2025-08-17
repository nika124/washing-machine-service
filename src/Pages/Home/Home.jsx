// src/Pages/Home/Home.jsx
import { Helmet } from "react-helmet-async";
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
          content="პროფესიონალური სარეცხი მანქანის შეკეთება თბილისში. სწრაფი მომსახურება, ხელმისაწვდომი ფასები და გარანტია."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            სარეცხი მანქანის შეკეთება თბილისში
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100">
            სწრაფი, სანდო და პროფესიონალური სერვისი თქვენი სარეცხი მანქანისთვის.
          </p>
          <a
            href="tel:555123456"
            className="mt-6 inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            <PhoneIcon />
            დაგვირეკეთ ახლავე – 555 123 456
          </a>
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
              გაჟონვის შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              წყლის გაჟონვის სწრაფი აღმოჩენა და შეკეთება.
            </p>
          </div>

          {/* Engine */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <ElectricalServicesIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ძრავის პრობლემა
            </h3>
            <p className="mt-2 text-gray-600">
              ძრავის დიაგნოსტიკა და სრულფასოვანი შეკეთება.
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <HomeRepairServiceIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              მონტაჟი
            </h3>
            <p className="mt-2 text-gray-600">
              პროფესიონალური მონტაჟი და კონფიგურაცია.
            </p>
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
            მრავალწლიანი გამოცდილება, ორიგინალი ნაწილები და სერვისზე გარანტია —
            ჩვენზე შეგიძლიათ თავდაჯერებით იფიქროთ, როგორც სანდო პარტნიორზე.
          </p>
        </div>
      </section>
    </>
  );
}
