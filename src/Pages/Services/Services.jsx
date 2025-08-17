// src/Pages/Services/Services.jsx
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>სერვისები | DrWash</title>
        <meta
          name="description"
          content="სარეცხი მანქანის შეკეთების სერვისები თბილისში: გაჟონვის შეკეთება, ძრავის დიაგნოსტიკა, მონტაჟი და სხვა."
        />
        <link rel="canonical" href="https://drwash.ge/services" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">ჩვენი სერვისები</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
          ვთავაზობთ სარეცხი მანქანის სწრაფ და სანდო შეკეთებას თბილისში.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              გაჟონვის შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              წყლის გაჟონვის აღმოჩენა და შეკეთება უმოკლეს დროში.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              ძრავის დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-gray-600">
              პროფესიონალური დიაგნოსტიკა და ძრავის ყველა პრობლემის მოგვარება.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">მონტაჟი</h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის მონტაჟი და კავშირის სრული კონფიგურაცია.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              ელექტრო პრობლემა
            </h3>
            <p className="mt-2 text-gray-600">
              ელექტრო სისტემის დიაგნოსტიკა და დაზიანებული ნაწილების შეკეთება.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              დრენაჟის პრობლემა
            </h3>
            <p className="mt-2 text-gray-600">
              წყლის გადინების სისტემის გაწმენდა და შეკეთება.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">
              რეგულარული მოვლა
            </h3>
            <p className="mt-2 text-gray-600">
              პრევენციული მოვლა, რათა სარეცხი მანქანამ დიდხანს იმუშაოს.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
