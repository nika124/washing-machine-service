// src/Pages/About/About.jsx
import { Helmet } from "react-helmet-async";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneIcon from "@mui/icons-material/Phone";

export default function About() {
  return (
    <>
      <Helmet>
        <title>DrWash-ის შესახებ | სარეცხი მანქანის ხელოსანი თბილისში</title>
        <meta
          name="description"
          content="გაიგეთ მეტი DrWash-ის შესახებ — სარეცხი მანქანის შეკეთების პროფესიონალური სერვისი თბილისში. გამოცდილება, სანდოობა და გარანტია."
        />
        <meta property="og:title" content="DrWash-ის შესახებ | სარეცხი მანქანის ხელოსანი თბილისში" />
        <meta
          property="og:description"
          content="DrWash სპეციალიზდება სარეცხი მანქანების შეკეთებაში თბილისში და გთავაზობთ სანდო მომსახურებას გარანტიით."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drwash.ge/about" />
        <meta property="og:site_name" content="DrWash" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:image" content="https://drwash.ge/og-image.svg" />
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi" />
        <link rel="canonical" href="https://drwash.ge/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 text-center py-12 sm:py-14 px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">ჩვენს შესახებ</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          პროფესიონალები სარეცხი მანქანის შეკეთებაში
        </p>
      </section>

      {/* About Story */}
      <section className="max-w-screen-lg mx-auto px-6 py-12 sm:py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          ვინ ვართ ჩვენ?
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          DrWash არის გუნდი, რომელიც სპეციალიზებულია სარეცხი მანქანების
          შეკეთებაში. გვაქვს მრავალწლიანი გამოცდილება, ვმუშაობთ ორიგინალი
          ნაწილებით და გთავაზობთ გარანტიას ყველა სერვისზე. ჩვენი მიზანია ვიყოთ
          სანდო პარტნიორი, როცა თქვენს ტექნიკას პრობლემა აქვს.
        </p>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-12 sm:py-14 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-10">
          რატომ ირჩევენ DrWash-ს
        </h2>
        <div className="max-w-screen-lg mx-auto grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left">
            <StarIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              გამოცდილება
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              15 წლიანი პრაქტიკა ტექნიკის სერვისში.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left">
            <BuildIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              ხარისხი
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              მხოლოდ ორიგინალი ნაწილები და სანდო ტექნოლოგიები.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start text-left">
            <VerifiedIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              გარანტია
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              ყველა სერვისზე გაწერილი გარანტია და სწრაფი მომსახურება.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-10 sm:py-12 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          მზად ხართ სარეცხი მანქანის შეკეთებისთვის?
        </h2>
        <p className="mt-2">დაგვირეკეთ დღესვე და მიიღეთ სანდო სერვისი</p>
        <a
          href="tel:+995555123456"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
        >
          <PhoneIcon aria-hidden="true" />
          დაგვირეკეთ – 555 123 456
        </a>
      </section>
    </>
  );
}
