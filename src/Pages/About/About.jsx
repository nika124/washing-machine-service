// src/Pages/About/About.jsx
import { Helmet } from "react-helmet-async";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function About() {
  return (
    <>
      <Helmet>
        <title>ჩვენს შესახებ | DrWash</title>
        <meta
          name="description"
          content="გაიგეთ მეტი DrWash-ის შესახებ — სარეცხი მანქანის შეკეთების პროფესიონალური სერვისი თბილისში. გამოცდილება, სანდოობა და გარანტია."
        />

        <meta 
         name="keywords"
         content="სარეცხის ხელოსანი, სარეცხი მანქანის ჩაბარება, სარეცხი მანქანის ხელოსანი, სარეცხი მანქანების ხელოსანი, სარეცხი მანქანის ხელოსანი გამოძახებით, სარეცხის მანქანის, გამოძახების სერვისი, ადგილზე მისვლა,samsung,bosh,beko,Indesit,Gorenje">          
         </meta>

         <meta property="og:title" content="სარეცხი მანქანის შეკეთება ადგილზე"></meta>
         <meta property="og:description" content="სწრაფი და ხარისხიანი მოსახურეობა. Book now."></meta>
         <meta property="og:type" content="website"></meta>
         <meta name="twitter:title" content="Washing Machine Repair in Tbilisi"></meta>
         <meta name="twitter:description" content="Affordable and fast appliance repair service."></meta>
         <meta name="geo.region" content="GE-TB"></meta>
         <meta name="geo.placename" content="Tbilisi"></meta>
         <meta name="twitter:title" content="Washing Machine Repair in Tbilisi"></meta>
         <meta name="twitter:description" content="Affordable and fast appliance repair service."></meta>
         <link rel="canonical" href="https://drwash.ge/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">ჩვენს შესახებ</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          პროფესიონალები სარეცხი მანქანის შეკეთებაში
        </p>
      </section>

      {/* About Story */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ვინ ვართ ჩვენ?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          DrWash არის გუნდი, რომელიც სპეციალიზებულია სარეცხი მანქანების
          შეკეთებაში. გვაქვს მრავალწლიანი გამოცდილება, ვმუშაობთ ორიგინალი
          ნაწილებით და გთავაზობთ გარანტიას ყველა სერვისზე. ჩვენი მიზანია ვიყოთ
          სანდო პარტნიორი, როცა თქვენს ტექნიკას პრობლემა აქვს.
        </p>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-screen-lg mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <StarIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              გამოცდილება
            </h3>
            <p className="mt-2 text-gray-600">
              1+ წელზე მეტი პრაქტიკა ტექნიკის სერვისში.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ხარისხი
            </h3>
            <p className="mt-2 text-gray-600">
              მხოლოდ ორიგინალი ნაწილები და სანდო ტექნოლოგიები.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <VerifiedIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              გარანტია
            </h3>
            <p className="mt-2 text-gray-600">
              ყველა სერვისზე გაწერილი გარანტია და სწრაფი მომსახურება.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          მზად ხართ სარეცხი მანქანის შეკეთებისთვის?
        </h2>
        <p className="mt-2">დაგვირეკეთ დღესვე და მიიღეთ სანდო სერვისი</p>
        <a
          href="tel:555123456"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-300 transition"
        >
          📞 დაგვირეკეთ – 555 123 456
        </a>
      </section>
    </>
  );
}
