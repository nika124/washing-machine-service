import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/SEO/Breadcrumbs.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import { faqSchema, serviceSchema } from "../../Components/SEO/schemas.js";
import SEO from "../../Components/SEO/SEO.jsx";
import {
  CTA,
  Checklist,
  FAQList,
  LinkCards,
  NumberedSteps,
  PageHero,
  Section,
} from "../../Components/Common/Content.jsx";
import { serviceBySlug, services } from "../../data/services.js";
import { problemBySlug } from "../../data/problems.js";
import { brandBySlug } from "../../data/brands.js";
import { locationBySlug } from "../../data/locations.js";
import NotFoundPage from "./NotFoundPage.jsx";

export function ServicePage() {
  const { slug } = useParams();
  const service = serviceBySlug[slug];
  if (!service) return <NotFoundPage />;

  const relatedProblems = service.relatedProblems.map((item) => problemBySlug[item]).filter(Boolean);
  return (
    <>
      <SEO title={service.title} description={service.description} path={service.path} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <Breadcrumbs items={[
        { label: "მთავარი", path: "/" },
        { label: "სერვისები", path: "/services" },
        { label: service.shortName, path: service.path },
      ]} />
      <PageHero eyebrow="სერვისი თბილისში" title={service.h1} intro={service.intro} />
      <Section title="როდის არის ეს სერვისი საჭირო?">
        <Checklist items={service.situations} />
      </Section>
      <Section tone="muted" title="როგორ მიმდინარეობს მომსახურება">
        <NumberedSteps items={service.process} />
      </Section>
      <Section title="რა უნდა იცოდეთ">
        <div className="max-w-3xl space-y-4 leading-7 text-slate-700">
          {service.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Section>
      <Section tone="muted" title="დაკავშირებული პრობლემები">
        <LinkCards items={relatedProblems.map((problem) => ({
          path: problem.path,
          title: problem.name,
          text: problem.intro,
        }))} />
      </Section>
      <Section title="ხშირი კითხვები">
        <FAQList items={service.faqs} />
      </Section>
      <CTA title={`${service.name} — დაგეგმეთ ვიზიტი`} />
    </>
  );
}

export function ProblemPage() {
  const { slug } = useParams();
  const problem = problemBySlug[slug];
  if (!problem) return <NotFoundPage />;

  const relatedServices = problem.relatedServices.map((item) => serviceBySlug[item]).filter(Boolean);
  const schemaItem = {
    ...problem,
    name: `${problem.name} — დიაგნოსტიკა და შეკეთება`,
  };

  return (
    <>
      <SEO title={problem.title} description={problem.description} path={problem.path} />
      <JsonLd data={serviceSchema(schemaItem)} />
      <JsonLd data={faqSchema(problem.faqs)} />
      <Breadcrumbs items={[
        { label: "მთავარი", path: "/" },
        { label: "პრობლემები", path: "/problems" },
        { label: problem.name, path: problem.path },
      ]} />
      <PageHero eyebrow="პრობლემის დიაგნოსტიკა" title={problem.h1} intro={problem.intro} />
      <Section title="შესაძლო მიზეზები">
        <Checklist items={problem.causes} />
      </Section>
      <Section
        tone="muted"
        title="რისი შემოწმება შეგიძლიათ უსაფრთხოდ"
        intro="თუ წყალია დაღვრილი, იგრძნობა დამწვრის სუნი ან ამოდის დამცავი, მოწყობილობა აღარ ჩართოთ."
      >
        <Checklist items={problem.checks} />
      </Section>
      <Section title="როგორ ამოწმებს ხელოსანი">
        <p className="max-w-3xl leading-7 text-slate-700">{problem.service}</p>
      </Section>
      <Section tone="muted" title="შესაბამისი სერვისები">
        <LinkCards items={relatedServices.map((service) => ({
          path: service.path,
          title: service.name,
          text: service.intro,
        }))} />
      </Section>
      <Section title="ხშირი კითხვები">
        <FAQList items={problem.faqs} />
      </Section>
      <CTA title={`${problem.name}? დაგვიკავშირდით დიაგნოსტიკისთვის`} />
    </>
  );
}

export function BrandPage() {
  const { slug } = useParams();
  const brand = brandBySlug[slug];
  if (!brand) return <NotFoundPage />;

  return (
    <>
      <SEO title={brand.title} description={brand.description} path={brand.path} />
      <JsonLd data={serviceSchema({ ...brand, name: `${brand.name} სარეცხი მანქანის შეკეთება` })} />
      <JsonLd data={faqSchema(brand.faq)} />
      <Breadcrumbs items={[
        { label: "მთავარი", path: "/" },
        { label: "ბრენდები", path: "/brands" },
        { label: brand.name, path: brand.path },
      ]} />
      <PageHero eyebrow={`${brand.name} სერვისი`} title={brand.h1} intro={brand.intro} />
      <Section title={`${brand.name}-ის გავრცელებული სიმპტომები`}>
        <Checklist items={brand.issues} />
      </Section>
      <Section tone="muted" title="დიაგნოსტიკის სპეციფიკა">
        <p className="max-w-3xl leading-7 text-slate-700">{brand.focus}</p>
      </Section>
      <Section title="მომსახურების პროცესი">
        <NumberedSteps items={brand.process} />
      </Section>
      <Section tone="muted" title="სასარგებლო გვერდები">
        <LinkCards items={[
          {
            path: "/services/washing-machine-repair",
            title: "სარეცხი მანქანის შეკეთება",
            text: "ადგილზე დიაგნოსტიკა და შეკეთების ვარიანტის შეთანხმება.",
          },
          {
            path: "/services/washing-machine-diagnostics",
            title: "სარეცხი მანქანის დიაგნოსტიკა",
            text: "შეცდომის კოდის და დაკავშირებული კვანძების შემოწმება.",
          },
          {
            path: "/problems",
            title: "გავრცელებული პრობლემები",
            text: "აირჩიეთ სიმპტომი და ნახეთ შესაძლო მიზეზები.",
          },
        ]} />
      </Section>
      <Section title="ხშირი კითხვები">
        <FAQList items={brand.faq} />
      </Section>
      <CTA title={`${brand.name} სარეცხი მანქანის სერვისი თბილისში`} />
    </>
  );
}

export function LocationPage() {
  const { slug } = useParams();
  const location = locationBySlug[slug];
  if (!location) return <NotFoundPage />;

  const nearby = location.nearby.map((item) => locationBySlug[item]).filter(Boolean);
  const locationFaq = [
    {
      question: `როგორ შევუკვეთო ხელოსანი ${location.locative}?`,
      answer:
        "დაგვიკავშირდით ტელეფონით ან WhatsApp-ით, მიუთითეთ ბრენდი, პრობლემა და ზუსტი მისამართი. ხელმისაწვდომ დროს წინასწარ შეგითანხმებთ.",
    },
    {
      question: `რა სერვისებია ხელმისაწვდომი ${location.locative}?`,
      answer:
        "შეგიძლიათ შეუკვეთოთ დიაგნოსტიკა, შეკეთება, მონტაჟი და სარეცხი მანქანის მოვლასთან დაკავშირებული მომსახურება.",
    },
  ];
  const locationService = {
    name: `სარეცხი მანქანის ხელოსანი ${location.locative}`,
    description: location.description,
    path: location.path,
  };

  return (
    <>
      <SEO title={location.title} description={location.description} path={location.path} />
      <JsonLd data={serviceSchema(locationService, location.name)} />
      <JsonLd data={faqSchema(locationFaq)} />
      <Breadcrumbs items={[
        { label: "მთავარი", path: "/" },
        { label: "უბნები", path: "/locations" },
        { label: location.name, path: location.path },
      ]} />
      <PageHero eyebrow="ადგილზე ვიზიტი" title={location.h1} intro={location.intro} />
      <Section title={`როდის დაგჭირდებათ სერვისი ${location.locative}`}>
        <Checklist items={location.situations} />
      </Section>
      <Section tone="muted" title="ვიზიტის დაგეგმვა">
        <p className="max-w-3xl leading-7 text-slate-700">{location.note}</p>
        <p className="mt-4 max-w-3xl leading-7 text-slate-700">
          ვიზიტის დრო დამოკიდებულია დატვირთვასა და მისამართზე. კონკრეტული დრო
          შეკვეთის დადასტურებისას ზუსტდება.
        </p>
      </Section>
      <Section title="ხელმისაწვდომი სერვისები">
        <LinkCards items={services.map((service) => ({
          path: service.path,
          title: service.name,
          text: service.description,
        }))} columns="md:grid-cols-2" />
      </Section>
      <Section tone="muted" title="ახლომდებარე მომსახურების არეალები">
        <div className="flex flex-wrap gap-3">
          {nearby.map((item) => (
            <Link key={item.path} className="rounded-full border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-800 hover:border-blue-500" to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </Section>
      <Section title="ხშირი კითხვები">
        <FAQList items={locationFaq} />
      </Section>
      <CTA title={`სარეცხი მანქანის ხელოსანი ${location.locative}`} />
    </>
  );
}
