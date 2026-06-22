import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import { faqSchema, localBusinessSchema } from "../../Components/SEO/schemas.js";
import { CTA, FAQList, LinkCards, Section } from "../../Components/Common/Content.jsx";
import { brands } from "../../data/brands.js";
import { faqs } from "../../data/faqs.js";
import { locations } from "../../data/locations.js";
import { problems } from "../../data/problems.js";
import { services } from "../../data/services.js";
import { contactLinks, site } from "../../data/site.js";

export default function Home() {
  const previewFaqs = faqs.slice(0, 4);

  return (
    <>
      <SEO
        title="სარეცხი მანქანის შეკეთება თბილისში | ხელოსანი გამოძახებით | DrWash"
        description="DrWash გთავაზობთ სარეცხი მანქანის შეკეთებას თბილისში გამოძახებით — დიაგნოსტიკა, მონტაჟი, წყლის გაჟონვის, გაწურვისა და ბრუნვის პრობლემების შემოწმება."
        path="/"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(previewFaqs)} />

      <section className="border-b border-blue-100 bg-blue-50">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
              DrWash • თბილისი
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              სარეცხი მანქანის შეკეთება თბილისში გამოძახებით
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              სარეცხი მანქანის დიაგნოსტიკა, შეკეთება და მონტაჟი მომხმარებლის
              მისამართზე. მოგვწერეთ ბრენდი, პრობლემა და თბილისის უბანი ვიზიტის
              დასაგეგმად.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex justify-center rounded-lg bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" href={contactLinks.phone}>
                დარეკვა — {site.phone.display}
              </a>
              <a className="inline-flex justify-center rounded-lg border border-blue-300 bg-white px-5 py-3 font-bold text-blue-800 hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" href={contactLinks.whatsapp}>
                WhatsApp
              </a>
              <Link className="inline-flex justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:border-blue-400 hover:text-blue-800" to="/services">
                სერვისების ნახვა
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
              <li className="rounded-full border border-blue-200 bg-white px-3 py-2">ადგილზე მისვლა</li>
              <li className="rounded-full border border-blue-200 bg-white px-3 py-2">დიაგნოსტიკა</li>
              <li className="rounded-full border border-blue-200 bg-white px-3 py-2">მონტაჟი</li>
              <li className="rounded-full border border-blue-200 bg-white px-3 py-2">{site.hours.label}</li>
            </ul>
          </div>
          <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-blue-200 bg-white p-2 shadow-lg shadow-blue-900/10">
            <img
              src="/images/hero-service-placeholder.png"
              alt="სარეცხი მანქანის ხელოსანი თბილისში მოწყობილობის შემოწმებისას"
              width="960"
              height="720"
              decoding="async"
              fetchpriority="high"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </figure>
        </div>
      </section>

      <Section
        title="სარეცხი მანქანის ძირითადი სერვისები"
        intro="შეკეთებამდე ვადგენთ მიზეზს, მონტაჟისას კი ვამოწმებთ შეერთებას, გასწორებასა და საცდელ მუშაობას."
      >
        <LinkCards items={services.map((service) => ({
          path: service.path,
          title: service.name,
          text: service.intro,
        }))} columns="md:grid-cols-2" />
      </Section>

      <Section tone="muted" title="გავრცელებული პრობლემები">
        <LinkCards items={problems.map((problem) => ({
          path: problem.path,
          title: problem.name,
          text: problem.description,
        }))} />
        <Link className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900" to="/problems">
          ყველა პრობლემის ნახვა →
        </Link>
      </Section>

      <Section title="სარეცხი მანქანის ბრენდები">
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Link key={brand.path} className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-800" to={brand.path}>
              {brand.name}
            </Link>
          ))}
        </div>
        <Link className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900" to="/brands">
          ბრენდების გვერდი →
        </Link>
      </Section>

      <Section tone="muted" title="მომსახურების უბნები თბილისში">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.path} className="rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-800" to={location.path}>
              ხელოსანი {location.locative}
            </Link>
          ))}
        </div>
        <Link className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900" to="/locations">
          ყველა უბნის ნახვა →
        </Link>
      </Section>

      <Section title="რატომ DrWash">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["პირდაპირი კომუნიკაცია", "პრობლემის დეტალებს უშუალოდ მომსახურების დასაგეგმად ვაზუსტებთ."],
            ["დიაგნოსტიკა პირველ ეტაპზე", "შეკეთების ვარიანტი მიზეზის დადგენის შემდეგ განიხილება."],
            ["თბილისის უბნები", "ადგილზე ვიზიტი წინასწარი შეთანხმებით იგეგმება."],
            ["წინასწარი შეთანხმება", "სამუშაოს მოცულობა, ფასი და გარანტიის პირობები დაწყებამდე ზუსტდება."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="mt-2 leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted" title="ხშირი კითხვები">
        <FAQList items={previewFaqs} />
        <Link className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900" to="/faq">
          ყველა კითხვის ნახვა →
        </Link>
      </Section>

      <CTA />
    </>
  );
}
