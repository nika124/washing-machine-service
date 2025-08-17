// src/Pages/HomePage.jsx
// import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      {/* <Helmet>
        <title>სარეცხი მანქანის შეკეთება თბილისში | DrWash</title>
        <meta
          name="description"
          content="პროფესიონალური სარეცხი მანქანის შეკეთება თბილისში. სწრაფი მომსახურება, ხელმისაწვდომი ფასები და გამოცდილ ხელოსნები. დარეკეთ ახლავე!"
        />
        <meta
          name="keywords"
          content="სარეცხი მანქანის შეკეთება, სარეცხი მანქანის ხელოსანი, სარეცხი მანქანის პრობლემები, სარეცხი მანქანის შეკეთება თბილისში"
        />
        <link rel="canonical" href="https://drwash.ge/" />
      </Helmet> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          სარეცხი მანქანის შეკეთება თბილისში
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          სწრაფი, სანდო და ხელმისაწვდომი მომსახურება თქვენი სარეცხი
          მანქანისთვის.
        </p>
        <a
          href="tel:555123456"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-300"
        >
          📞 დაგვირეკეთ ახლავე – 555 123 456
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          ჩვენი სერვისები
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              გაჟონვის შეკეთება
            </h3>
            <p className="mt-2 text-gray-600">
              წყლის გაჟონვის სწრაფი აღმოჩენა და შეკეთება.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              ძრავის პრობლემა
            </h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის ძრავის დიაგნოსტიკა და შეკეთება.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold text-blue-700">
              მონტაჟი და დამონტაჟება
            </h3>
            <p className="mt-2 text-gray-600">
              სარეცხი მანქანის მონტაჟი/დამონტაჟება პროფესიონალურად.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            რატომ DrWash?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            გვაქვს მრავალწლიანი გამოცდილება სარეცხი მანქანის შეკეთებაში.
            ვიყენებთ მხოლოდ ორიგინალ ნაწილებს და გთავაზობთ გარანტიას ყველა
            სერვისზე.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">დაგვიკავშირდით დღესვე!</h2>
        <p className="mt-2">ტელეფონი: 555 123 456 • Email: info@drwash.ge</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-300"
        >
          კონტაქტი
        </a>
      </section>
    </>
  );
}
