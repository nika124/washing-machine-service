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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold">დაგვიკავშირდით</h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          მზად ვართ დაგეხმაროთ ნებისმიერ დროს
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-screen-md mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          სარეცხი მანქანის ხელოსნის გამოძახება
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <PhoneIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ტელეფონი
            </h3>
            <p className="mt-2 text-gray-600">
              <a href="tel:+995555123456" className="text-blue-500 hover:underline">
                555 123 456
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <EmailIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ელ-ფოსტა
            </h3>
            <p className="mt-2 text-gray-600">
              <a
                href="mailto:info@drwash.ge"
                className="text-blue-500 hover:underline"
              >
                info@drwash.ge
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <WhatsAppIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              WhatsApp
            </h3>
            <p className="mt-2 text-gray-600">
              <a
                href="https://wa.me/995555123456"
                className="text-blue-500 hover:underline"
              >
                მოგვწერეთ WhatsApp-ზე
              </a>
            </p>
          </div>

          {/* Working Hours */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <AccessTimeIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              სამუშაო საათები
            </h3>
            <p className="mt-2 text-gray-600">ორშაბათი - კვირა</p>
            <p className="text-gray-600">10:00 - 20:00</p>
          </div>

          {/* Address */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <PlaceIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              მისამართი
            </h3>
            <p className="mt-2 text-gray-600">თბილისი, საქართველო</p>
          </div>
        </div>
      </section>
    </>
  );
}
