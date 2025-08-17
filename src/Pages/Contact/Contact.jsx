// src/Pages/Contact/Contact.jsx
import { Helmet } from "react-helmet-async";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>კონტაქტი | DrWash</title>
        <meta
          name="description"
          content="დაგვიკავშირდით სარეცხი მანქანის შეკეთებისთვის თბილისში — ტელეფონი, ელ-ფოსტა, სამუშაო საათები და მისამართი."
        />
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
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Phone */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <PhoneIcon className="text-blue-600" style={{ fontSize: 48 }} />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              ტელეფონი
            </h3>
            <p className="mt-2 text-gray-600">
              <a href="tel:555123456" className="text-blue-500 hover:underline">
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

          {/* Working Hours */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center">
            <AccessTimeIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              სამუშაო საათები
            </h3>
            <p className="mt-2 text-gray-600">ორშაბათი - შაბათი</p>
            <p className="text-gray-600">09:00 - 20:00</p>
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
