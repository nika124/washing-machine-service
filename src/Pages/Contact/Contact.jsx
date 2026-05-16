// src/Pages/Contact/Contact.jsx
import { Helmet } from "react-helmet-async";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>კონტაქტი | სარეცხი მანქანის შეკეთება თბილისში | DrWash</title>
        <meta
          name="description"
          content="დაგვიკავშირდით სარეცხი მანქანის შეკეთებისთვის თბილისში. დარეკეთ, მოგვწერეთ ელ-ფოსტაზე ან WhatsApp-ზე და გამოიძახეთ ხელოსანი ადგილზე."
        />
        <meta property="og:title" content="კონტაქტი | სარეცხი მანქანის შეკეთება თბილისში | DrWash" />
        <meta
          property="og:description"
          content="დარეკეთ ან მოგვწერეთ WhatsApp-ზე სარეცხი მანქანის ხელოსნის გამოსაძახებლად თბილისში."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drwash.ge/contact" />
        <meta property="og:site_name" content="DrWash" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:image" content="https://drwash.ge/og-image.svg" />
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi" />
        <link rel="canonical" href="https://drwash.ge/contact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 text-center py-10 sm:py-12 px-5 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">დაგვიკავშირდით</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          მზად ვართ დაგეხმაროთ ნებისმიერ დროს
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-screen-lg mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-10">
          სარეცხი მანქანის ხელოსნის გამოძახება
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Phone */}
          <a
            href="tel:+995555123456"
            className="p-5 sm:p-6 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-900/10 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/15 active:translate-y-px active:bg-blue-800 transition flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <PhoneIcon aria-hidden="true" style={{ fontSize: 42 }} />
            <h3 className="mt-4 text-xl font-semibold">
              ტელეფონი
            </h3>
            <p className="mt-2 text-lg font-semibold">
              555 123 456
            </p>
            <p className="mt-1 text-sm text-blue-100">
              სწრაფი გზა ხელოსნის გამოსაძახებლად
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/995555123456"
            className="p-5 sm:p-6 bg-blue-50 rounded-lg border border-blue-300 shadow-md shadow-blue-900/5 hover:border-blue-500 hover:bg-white hover:shadow-lg hover:shadow-blue-900/10 active:translate-y-px active:bg-blue-100 transition flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="text-blue-700" aria-hidden="true" style={{ fontSize: 42 }} />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              WhatsApp
            </h3>
            <p className="mt-2 text-lg font-semibold text-blue-700">
              მოგვწერეთ WhatsApp-ზე
            </p>
            <p className="mt-1 text-sm text-slate-500">
              მოსახერხებელია ფოტოებისა და დეტალების გასაგზავნად
            </p>
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:info@drwash.ge"
            className="p-5 sm:p-6 bg-white rounded-lg border border-slate-300 shadow-sm hover:border-blue-300 hover:shadow-md active:translate-y-px active:bg-slate-50 transition flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <EmailIcon className="text-blue-600" aria-hidden="true" style={{ fontSize: 38 }} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              ელ-ფოსტა
            </h3>
            <p className="mt-2 text-blue-700">
              info@drwash.ge
            </p>
          </a>

          {/* Working Hours */}
          <div className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col items-start">
            <AccessTimeIcon
              className="text-blue-600"
              style={{ fontSize: 38 }}
            />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              სამუშაო საათები
            </h3>
            <p className="mt-2 text-slate-600">ორშაბათი - კვირა</p>
            <p className="text-slate-600">10:00 - 20:00</p>
          </div>

          {/* Address */}
          <div className="p-5 sm:p-6 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col items-start">
            <PlaceIcon className="text-blue-600" style={{ fontSize: 38 }} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              მისამართი
            </h3>
            <p className="mt-2 text-slate-600">თბილისი, საქართველო</p>
          </div>
        </div>
      </section>
    </>
  );
}
