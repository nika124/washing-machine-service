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
        <meta 
         name="keywords"
         content="სარეცხის ხელოსანი,სარეცხი მანქანის ჩაბარეაბ, სარეცხი მანქანის ხელოსანი, სარეცხი მანქანების ხელოსანი, სარეცხი მანქანის ხელოსანი გამოძახებით, სარეცხის მანქანის, გამოძახების სერვისი, ადგილზე მისვლა,samsung,bosh,beko,Indesit,Gorenje">          
         </meta>
         <meta property="og:title" content="სარეცხი მანქანის შეკეთება ადგილზე"></meta>
         <meta property="og:description" content="სწრაფი და ხარისხიანი მოსახურეობა. Book now."></meta>
         <meta property="og:type" content="website"></meta>
         <meta name="twitter:title" content="Washing Machine Repair in Tbilisi"></meta>
         <meta name="twitter:description" content="Affordable and fast appliance repair service."></meta>
         <meta name="geo.region" content="GE-TB"></meta>
         <meta name="geo.placename" content="Tbilisi"></meta> 
         <link rel="canonical" href="https://drwash.ge/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            სარეცხი მანქანის შეკეთება ადგილზე, თბილისის მასშტაბით             
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100">            
            სწრაფი, სანდო და პროფესიონალური სერვისი თქვენი სარეცხი მანქანისთვის.            
            სარეცხი მანქანის ხელოსანი გამოძახება 20 ლარი
          </p>
          <a
            href="tel:555123456"
            className="mt-6 inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            <PhoneIcon />
            დაგვირეკეთ  – 555 123 456
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
              დიაგნოსტიკა
            </h3>
            <p className="mt-2 text-gray-600">
              პროფესინალი ხელოსანი ჩაატარებს დანადგარის სრულ დიაგნოსტიკას,
              გაუმართაობის მიზეზის დადგენა ხდება მაქსიმალურად მცირე დროში.
            </p>
          </div>

          {/* Engine */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <ElectricalServicesIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-700">
              შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის შეკეთება ხდება ადგილზე მოსვლის. 
              შესაძლებელია საჭირო გახდეს სარეცხი მანქანის/ნაწილის სერვისცენტრში გადატანა   
            </p>
          </div>

          {/* Installation */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center text-center">
            <HomeRepairServiceIcon
              className="text-blue-600"
              style={{ fontSize: 48 }}
            />
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

      {/* About */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            რატომ DrWash?
          </h2>
          <p className="text-gray-600">
            15 წლიანი გამოცდილება და პროფესიონალთა გუნდი, სერვისზე გარანტია, 
            ორიგინალი ნაწილები, პროფესიონალი ხელოსანის ადგილზე მისვლა ხდება ოპერატიულად, 
            სარეცხი მანქანის ხელოსანი გამოძახებით
          </p>
        </div>
      </section>
    </>
  );
}
