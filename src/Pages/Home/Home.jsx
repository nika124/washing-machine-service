import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import {
  faqSchema,
  localBusinessSchema,
} from "../../Components/SEO/schemas.js";
import {
  CTA,
  FAQList,
  LinkCards,
  Section,
} from "../../Components/Common/Content.jsx";
import { brands } from "../../data/brands.js";
import { articles } from "../../data/blog.js";
import { faqs } from "../../data/faqs.js";
import { locations } from "../../data/locations.js";
import { problems } from "../../data/problems.js";
import { services } from "../../data/services.js";
import { contactLinks, site } from "../../data/site.js";
import { siteImages } from "../../data/visuals.js";

export default function Home() {
  const previewFaqs = faqs.slice(0, 4);

  return (
    <>
      <SEO
        title={`სარეცხი მანქანის შეკეთება თბილისში | ${site.name}`}
        description={`${site.name} გთავაზობთ სარეცხი მანქანის შეკეთებას თბილისში გამოძახებით — დიაგნოსტიკა, მონტაჟი, წყლის გაჟონვის, გაწურვისა და ბრუნვის პრობლემების შემოწმება.`}
        path="/"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(previewFaqs)} />

      <section className="px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6">
        <div className="relative mx-auto min-h-[570px] max-w-6xl overflow-hidden rounded-[30px] bg-slate-950 shadow-[0_28px_80px_-38px_rgba(15,23,42,0.8)] sm:min-h-[600px] lg:min-h-[620px]">
          <img
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            width="1448"
            height="1086"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
          <div className="blue-grid absolute inset-0 opacity-30" />
          <div className="relative flex min-h-[570px] items-end px-5 py-8 sm:min-h-[600px] sm:items-center sm:px-10 sm:py-12 lg:min-h-[620px] lg:px-14">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-300">
                {site.name} • თბილისი
              </p>
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                სარეცხი მანქანის შეკეთება თბილისში გამოძახებით
              </h1>
              <div className="mt-7 flex flex-col gap-3 sm:hidden">
                <a
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
                  href={contactLinks.phone}
                >
                  {site.phone.display}
                </a>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                {site.name} გთავაზობთ სარეცხი მანქანის შეკეთებას თბილისში
                გამოძახებით. ხელოსანი ადგილზე ამოწმებს დაზიანებას და გეხმარებათ
                გაჟონვის, არდატრიალების, გაწურვის, ხმაურის, წყლის არშეშვებისა და
                მონტაჟის პრობლემების მოგვარებაში. მოგვწერეთ მოწყობილობის ბრენდი,
                აღწერეთ სიმპტომი და მიუთითეთ თბილისის უბანი, რათა ვიზიტის დრო
                წინასწარ შევათანხმოთ.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="focus-ring hidden min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 sm:inline-flex"
                  href={contactLinks.phone}
                >
                  {site.phone.display}
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  href={contactLinks.whatsapp}
                >
                  WhatsApp
                </a>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
                  to="/services"
                >
                  სერვისების ნახვა
                </Link>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2 text-xs font-bold text-white sm:text-sm">
                <li className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  ადგილზე მისვლა
                </li>
                <li className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  დიაგნოსტიკა
                </li>
                <li className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  მონტაჟი
                </li>
                <li className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">
                  {site.hours.label}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="გავრცელებული პრობლემები"
        intro="აირჩიეთ სიმპტომი და ნახეთ შესაძლო მიზეზები, უსაფრთხო პირველი ნაბიჯები და შესაბამისი სერვისი."
      >
        <LinkCards
          items={problems.map((problem) => ({
            path: problem.path,
            title: problem.name,
            text: problem.description,
          }))}
          columns="md:grid-cols-2"
        />
        <Link
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 font-bold text-white hover:bg-blue-700"
          to="/problems"
        >
          ყველა პრობლემის ნახვა →
        </Link>
      </Section>

      <Section
        tone="muted"
        title="სარეცხი მანქანის ძირითადი სერვისები"
        intro="შეკეთებამდე ვადგენთ მიზეზს, მონტაჟისას კი ვამოწმებთ შეერთებას, გასწორებასა და საცდელ მუშაობას."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const image =
              siteImages[service.image] ??
              (index % 2 === 0 ? siteImages.hero : siteImages.process);

            return (
              <article
                key={service.path}
                className="group surface-card overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-950 to-blue-700">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-blue-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xl font-black text-slate-950">
                    <Link className="hover:text-blue-700" to={service.path}>
                      {service.name}
                    </Link>
                  </p>

                  <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                    {service.intro}
                  </p>

                  <Link
                    className="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900"
                    to={service.path}
                  >
                    სრულად ნახვა →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-slate-950 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.8)]">
          <img
            src={siteImages.process.src}
            alt={siteImages.process.alt}
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="relative px-5 py-12 text-center text-white sm:px-10 sm:py-16">
            <p className="text-2xl font-black sm:text-4xl">
              გჭირდებათ სწრაფი დიაგნოსტიკა?
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
              დაგვიკავშირდით, აღწერეთ პრობლემა და შეათანხმეთ ვიზიტის
              ხელმისაწვდომი დრო.
            </p>
            <a
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 font-bold text-slate-950 hover:bg-blue-50 sm:w-auto"
              href={contactLinks.phone}
            >
              დიაგნოსტიკის მოთხოვნა — {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <Section title={`რატომ ${site.name}`}>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-3">
            {[
              [
                "პირდაპირი კომუნიკაცია",
                "პრობლემის დეტალებს უშუალოდ მომსახურების დასაგეგმად ვაზუსტებთ.",
              ],
              [
                "დიაგნოსტიკა პირველ ეტაპზე",
                "შეკეთების ვარიანტი მიზეზის დადგენის შემდეგ განიხილება.",
              ],
              [
                "თბილისის უბნები",
                "ადგილზე ვიზიტი წინასწარი შეთანხმებით იგეგმება.",
              ],
              [
                "წინასწარი შეთანხმება",
                "სამუშაოს მოცულობა, ფასი და გარანტიის პირობები დაწყებამდე ზუსტდება.",
              ],
            ].map(([title, text], index) => (
              <article
                key={title}
                className="surface-card flex items-start gap-4 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-black text-slate-950">{title}</p>
                  <p className="mt-1 leading-6 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="surface-card overflow-hidden">
            <img
              src={siteImages.visit.src}
              alt={siteImages.visit.alt}
              width="1536"
              height="1024"
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
            />
          </figure>
        </div>
      </Section>

      <Section tone="muted" title="სასარგებლო რესურსები">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <article
              key={article.path}
              className="group surface-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-600 to-slate-950">
                <img
                  src={
                    [
                      siteImages.hero.src,
                      siteImages.diagnosting.src,
                      siteImages.trust.src,
                      siteImages.cleaning.src,
                    ][index % 4]
                  }
                  alt={
                    [
                      siteImages.hero.alt,
                      siteImages.diagnosting.alt,
                      siteImages.trust.alt,
                      siteImages.cleaning.alt,
                    ][index % 4]
                  }
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 font-black leading-snug text-white">
                  <Link to={article.path}>{article.h1}</Link>
                </p>
              </div>
              <p className="p-4 text-sm leading-6 text-slate-600">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
        <Link
          className="mt-7 inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 font-bold text-white hover:bg-blue-700"
          to="/blog"
        >
          ბლოგის ნახვა →
        </Link>
      </Section>

      <Section title="სარეცხი მანქანის ბრენდები">
        <div className="flex flex-wrap gap-2.5">
          {brands.map((brand) => (
            <Link
              key={brand.path}
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-700"
              to={brand.path}
            >
              {brand.name}
            </Link>
          ))}
        </div>
        <Link
          className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900"
          to="/brands"
        >
          ბრენდების გვერდი →
        </Link>
      </Section>

      <Section tone="muted" title="მომსახურების უბნები თბილისში">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.path}
              className="surface-card p-4 font-bold text-slate-800 hover:border-blue-400 hover:text-blue-700"
              to={location.path}
            >
              ხელოსანი {location.locative}
            </Link>
          ))}
        </div>
        <Link
          className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-900"
          to="/locations"
        >
          ყველა უბნის ნახვა →
        </Link>
      </Section>

      <Section title="ხშირი კითხვები">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr]">
          <FAQList items={previewFaqs} />
          <aside className="blue-grid rounded-[26px] bg-blue-600 p-6 text-white sm:p-8">
            <p className="text-2xl font-black">დამატებითი კითხვა გაქვთ?</p>
            <p className="mt-3 leading-7 text-blue-100">
              დაგვიკავშირდით ტელეფონით ან WhatsApp-ით და მოგვწერეთ მოწყობილობის
              ბრენდი და პრობლემა.
            </p>
            <Link
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 font-bold text-blue-700"
              to="/faq"
            >
              ყველა კითხვის ნახვა →
            </Link>
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
