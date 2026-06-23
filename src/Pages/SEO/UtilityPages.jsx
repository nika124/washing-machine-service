import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/SEO/Breadcrumbs.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import { faqSchema, localBusinessSchema } from "../../Components/SEO/schemas.js";
import SEO from "../../Components/SEO/SEO.jsx";
import {
  CTA,
  FAQList,
  LinkCards,
  PageHero,
  Section,
} from "../../Components/Common/Content.jsx";
import { articles } from "../../data/blog.js";
import { faqs } from "../../data/faqs.js";
import { locations } from "../../data/locations.js";
import { problems } from "../../data/problems.js";
import { services } from "../../data/services.js";
import { contactLinks, site } from "../../data/site.js";

export function PricesPage() {
  const priceItems = [
    {
      title: "გამოძახება და დიაგნოსტიკა",
      text: "ღირებულება წინასწარ ზუსტდება უბნისა და მოთხოვნის მიხედვით. დიაგნოსტიკა განსაზღვრავს დაზიანებასა და სამუშაოს მოცულობას.",
    },
    {
      title: "სარეცხი მანქანის მონტაჟი",
      text: "ფასი დამოკიდებულია არსებულ წყლის, დრენაჟისა და ელექტრო წერტილებზე და დამატებითი სამუშაოს საჭიროებაზე.",
    },
    {
      title: "მცირე შეკეთება",
      text: "რეგულირება, გაწმენდა ან მარტივი კვანძის მომსახურება ფასდება კონკრეტული შემთხვევის შემოწმების შემდეგ.",
    },
    {
      title: "დეტალის შეცვლა",
      text: "საბოლოო თანხა მოიცავს სამუშაოსა და შეთანხმებული დეტალის ღირებულებას. დეტალი მომხმარებელთან წინასწარ თანხმდება.",
    },
    {
      title: "რთული დაზიანება",
      text: "ძრავის, ავზის, საკისრის ან ელექტრონული კვანძის სამუშაო დამოკიდებულია მოდელზე, მდგომარეობასა და დეტალის ხელმისაწვდომობაზე.",
    },
  ];

  return (
    <>
      <SEO
        title="სარეცხი მანქანის შეკეთების ფასები თბილისში | DrWash"
        description="სარეცხი მანქანის დიაგნოსტიკის, მონტაჟისა და შეკეთების ფასი დამოკიდებულია დაზიანებაზე, დეტალებზე და სამუშაოს სირთულეზე. გაიარეთ კონსულტაცია."
        path="/prices"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "ფასები", path: "/prices" }]} />
      <PageHero
        eyebrow="გამჭვირვალე შეთანხმება"
        title="სარეცხი მანქანის სერვისის ფასები"
        intro={site.pricingNote}
      />
      <Section
        title="როგორ განისაზღვრება ღირებულება"
        intro="ზუსტი ფასის თქმა მოწყობილობის შემოწმების გარეშე არასწორი მოლოდინის შექმნას შეიძლება ნიშნავდეს. თანხა სამუშაოს დაწყებამდე თანხმდება."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {priceItems.map((item) => (
            <article key={item.title} className="surface-card p-5 sm:p-6">
              <h2 className="text-lg font-black text-slate-950">{item.title}</h2>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              <p className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">დამოკიდებულია შემთხვევაზე</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="muted" title="ფასზე მოქმედი ფაქტორები">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="surface-card p-5 leading-7 text-slate-700">სარეცხი მანქანის ბრენდი, მოდელი და კონსტრუქცია</li>
          <li className="surface-card p-5 leading-7 text-slate-700">დაზიანების მიზეზი და სამუშაოს მოცულობა</li>
          <li className="surface-card p-5 leading-7 text-slate-700">საჭირო დეტალის ფასი და ხელმისაწვდომობა</li>
          <li className="surface-card p-5 leading-7 text-slate-700">მონტაჟის შემთხვევაში — არსებული კომუნიკაციების მდგომარეობა</li>
        </ul>
      </Section>
      <Section title="სერვისები და გავრცელებული პრობლემები">
        <LinkCards items={[
          ...services.slice(0, 2).map((item) => ({ path: item.path, title: item.name, text: item.description })),
          ...problems.slice(0, 2).map((item) => ({ path: item.path, title: item.name, text: item.description })),
        ]} columns="md:grid-cols-2" />
      </Section>
      <CTA title="ფასის დასაზუსტებლად დაგვიკავშირდით" text={site.calloutNote} />
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <SEO
        title="ხშირად დასმული კითხვები | სარეცხი მანქანის სერვისი | DrWash"
        description="პასუხები სარეცხი მანქანის ხელოსნის გამოძახებაზე, ფასზე, მონტაჟზე, ბრენდებზე, გარანტიის პირობებზე, WhatsApp-სა და თბილისის უბნებზე."
        path="/faq"
      />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "FAQ", path: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="ხშირად დასმული კითხვები"
        intro="აქ მოცემულია პრაქტიკული პასუხები მომსახურების პირობებზე. კონკრეტული დაზიანების, ფასისა და ვიზიტის დროის დასაზუსტებლად დაგვიკავშირდით."
      />
      <Section>
        <FAQList items={faqs} />
      </Section>
      <CTA />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <SEO
        title="კონტაქტი | სარეცხი მანქანის ხელოსანი თბილისში | DrWash"
        description="დაუკავშირდით DrWash-ს სარეცხი მანქანის შეკეთების, დიაგნოსტიკის ან მონტაჟისთვის თბილისში. ტელეფონი, WhatsApp, სამუშაო საათები და უბნები."
        path="/contact"
      />
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "კონტაქტი", path: "/contact" }]} />
      <PageHero
        eyebrow="DrWash კონტაქტი"
        title="დაგვიკავშირდით სარეცხი მანქანის სერვისისთვის"
        intro="დარეკეთ ან მოგვწერეთ WhatsApp-ზე. ვიზიტამდე მოგვაწოდეთ ბრენდი, სიმპტომი და უბანი, რათა მოთხოვნა სწორად დავგეგმოთ."
      />
      <Section title="საკონტაქტო ინფორმაცია">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a className="rounded-2xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700" href={contactLinks.phone}>
            <span className="text-sm text-blue-100">ტელეფონი</span>
            <strong className="mt-2 block text-xl">{site.phone.display}</strong>
          </a>
          <a className="surface-card p-5 text-blue-900 transition hover:-translate-y-1 hover:border-blue-400" href={contactLinks.whatsapp}>
            <span className="text-sm text-blue-700">შეტყობინება</span>
            <strong className="mt-2 block text-xl">WhatsApp</strong>
          </a>
          {site.email.value && (
            <a className="surface-card p-5 text-slate-900 transition hover:-translate-y-1 hover:border-blue-400" href={contactLinks.email}>
              <span className="text-sm text-slate-500">ელფოსტა</span>
              <strong className="mt-2 block break-all">{site.email.value}</strong>
            </a>
          )}
          <div className="surface-card p-5">
            <span className="text-sm text-slate-500">სამუშაო საათები</span>
            <strong className="mt-2 block">{site.hours.label}</strong>
          </div>
        </div>
      </Section>
      <Section tone="muted" title="რა ინფორმაცია გამოგვიგზავნოთ">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "სარეცხი მანქანის ბრენდი და, თუ შესაძლებელია, მოდელი",
            "პრობლემის აღწერა და შეცდომის კოდი",
            "თბილისის უბანი და მისამართის ორიენტირი",
            "ფოტო ან ვიდეო WhatsApp-ზე, თუ სიმპტომი ჩანს ან ისმის",
          ].map((item) => (
            <li key={item} className="surface-card p-5 leading-7 text-slate-700">{item}</li>
          ))}
        </ul>
      </Section>
      <Section title="მომსახურების უბნები">
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <Link key={location.path} to={location.path} className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:border-blue-500 hover:text-blue-700">
              {location.name}
            </Link>
          ))}
        </div>
        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
          DrWash არის სერვის-არეალის ბიზნესი. საჯარო ოფისის მისამართი არ არის
          მითითებული; მომსახურება სრულდება მომხმარებლის მისამართზე შეთანხმებული ვიზიტით.
        </p>
      </Section>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <SEO
        title="სარეცხი მანქანის მოვლა და პრობლემების გზამკვლევი | DrWash"
        description="პრაქტიკული სტატიები სარეცხი მანქანის გაუწურაობაზე, გაჟონვაზე, მონტაჟსა და ფილტრის უსაფრთხო გაწმენდაზე."
        path="/blog"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "ბლოგი", path: "/blog" }]} />
      <PageHero
        eyebrow="DrWash რესურსები"
        title="სარეცხი მანქანის მოვლის გზამკვლევი"
        intro="უსაფრთხო პირველადი ნაბიჯები, გავრცელებული მიზეზები და ნიშნები, როცა ტექნიკოსის დიაგნოსტიკა საჭიროა."
      />
      <Section title="ბოლო სტატიები">
        <LinkCards items={articles.map((article) => ({
          path: article.path,
          title: article.h1,
          text: article.excerpt,
        }))} columns="md:grid-cols-2" />
      </Section>
      <Section tone="muted" title="პირდაპირ სერვისზე გადასვლა">
        <LinkCards items={services.slice(0, 3).map((service) => ({
          path: service.path,
          title: service.name,
          text: service.description,
        }))} />
      </Section>
      <CTA />
    </>
  );
}
