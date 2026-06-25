import Breadcrumbs from "../../Components/SEO/Breadcrumbs.jsx";
import SEO from "../../Components/SEO/SEO.jsx";
import { CTA, LinkCards, PageHero, Section } from "../../Components/Common/Content.jsx";
import { services } from "../../data/services.js";
import { problems } from "../../data/problems.js";
import { brands } from "../../data/brands.js";
import { locations } from "../../data/locations.js";

export function ServicesOverview() {
  return (
    <>
      <SEO
        title="სარეცხი მანქანის სერვისები თბილისში | Sarecxo"
        description="სარეცხი მანქანის შეკეთება, დიაგნოსტიკა, მონტაჟი, გაწმენდა და მოვლა თბილისში ადგილზე მისვლით. გაეცანით Sarecxo-ის სერვისებს."
        path="/services"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "სერვისები", path: "/services" }]} />
      <PageHero
        eyebrow="Sarecxo სერვისები"
        title="სარეცხი მანქანის სერვისები თბილისში"
        intro="აირჩიეთ საჭირო მომსახურება. თუ ზუსტად არ იცით რომელი სერვისი გჭირდებათ, დაიწყეთ დიაგნოსტიკით — მიზეზი და სამუშაოს მოცულობა შემოწმების შემდეგ განისაზღვრება."
      />
      <Section title="შეკეთება, მონტაჟი და მოვლა">
        <LinkCards
          items={services.map((service) => ({
            path: service.path,
            title: service.name,
            text: service.intro,
          }))}
          columns="md:grid-cols-2"
        />
      </Section>
      <Section
        tone="muted"
        title="რომელი სიმპტომი აქვს თქვენს მანქანას?"
        intro="პრობლემის გვერდებზე ნახავთ უსაფრთხო პირველ ნაბიჯებს და გავრცელებულ მიზეზებს."
      >
        <LinkCards
          items={problems.map((problem) => ({
            path: problem.path,
            title: problem.name,
            text: problem.intro,
          }))}
        />
      </Section>
      <CTA />
    </>
  );
}

export function ProblemsOverview() {
  return (
    <>
      <SEO
        title="სარეცხი მანქანის პრობლემები და შეკეთება | Sarecxo"
        description="სარეცხი მანქანა არ წურავს, არ ატრიალებს, ჟონავს, ხმაურობს, კარი არ იღება ან არ ირთვება? ნახეთ მიზეზები და შეუკვეთეთ დიაგნოსტიკა თბილისში."
        path="/problems"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "პრობლემები", path: "/problems" }]} />
      <PageHero
        eyebrow="გავრცელებული გაუმართაობები"
        title="სარეცხი მანქანის პრობლემები"
        intro="სიმპტომი დაზიანების ზუსტ მიზეზს ყოველთვის არ გვიჩვენებს. აირჩიეთ შესაბამისი პრობლემა, გაეცანით უსაფრთხო ნაბიჯებს და საჭიროების შემთხვევაში დაგეგმეთ დიაგნოსტიკა."
      />
      <Section title="იპოვეთ თქვენი სიმპტომი">
        <LinkCards
          items={problems.map((problem) => ({
            path: problem.path,
            title: problem.name,
            text: problem.description,
          }))}
        />
      </Section>
      <Section tone="muted" title="პრობლემის დადგენა და გამოსწორება">
        <LinkCards
          items={services.slice(0, 3).map((service) => ({
            path: service.path,
            title: service.name,
            text: service.intro,
          }))}
        />
      </Section>
      <CTA />
    </>
  );
}

export function BrandsOverview() {
  return (
    <>
      <SEO
        title="სარეცხი მანქანის ბრენდების შეკეთება თბილისში | Sarecxo"
        description="Samsung, LG, Bosch, Beko, Whirlpool, Electrolux, Zanussi, Gorenje, Vestel, Indesit და Ariston სარეცხი მანქანების დიაგნოსტიკა თბილისში."
        path="/brands"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "ბრენდები", path: "/brands" }]} />
      <PageHero
        eyebrow="მოდელის მიხედვით დიაგნოსტიკა"
        title="სარეცხი მანქანის ბრენდები"
        intro="შეცდომის კოდები და კვანძების განლაგება ბრენდისა და მოდელის მიხედვით განსხვავდება. აირჩიეთ მწარმოებელი და ნახეთ, რა ინფორმაცია გამოგვადგება დიაგნოსტიკისთვის."
      />
      <Section title="ბრენდების სერვისი">
        <LinkCards
          items={brands.map((brand) => ({
            path: brand.path,
            title: `${brand.name} სარეცხი მანქანის შეკეთება`,
            text: brand.focus,
          }))}
        />
      </Section>
      <Section tone="muted" title="ბრენდი სიაში არ არის?">
        <p className="max-w-3xl leading-7 text-slate-700">
          დაგვიკავშირდით და მოგვაწოდეთ მწარმოებელი, მოდელის ნომერი და სიმპტომი.
          მომსახურების შესაძლებლობას კონკრეტული მოწყობილობის მიხედვით დავაზუსტებთ.
        </p>
      </Section>
      <CTA />
    </>
  );
}

export function LocationsOverview() {
  return (
    <>
      <SEO
        title="სარეცხი მანქანის ხელოსანი თბილისის უბნებში | Sarecxo"
        description="სარეცხი მანქანის ხელოსანი თბილისში: გლდანი, მუხიანი, თემქა, დიღომი, დიდი დიღომი, დიდუბე, საბურთალო, ვაკე, ისანი, სამგორი და ვარკეთილი."
        path="/locations"
      />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "უბნები", path: "/locations" }]} />
      <PageHero
        eyebrow="მომსახურების არეალი"
        title="სარეცხი მანქანის ხელოსანი თბილისის უბნებში"
        intro="Sarecxo მუშაობს თბილისში, როგორც სერვის-არეალის ბიზნესი. საჯარო ოფისის მისამართის ნაცვლად ტექნიკოსის ვიზიტი მომხმარებლის მისამართზე წინასწარი შეთანხმებით იგეგმება."
      />
      <Section title="აირჩიეთ უბანი">
        <LinkCards
          items={locations.map((location) => ({
            path: location.path,
            title: `ხელოსანი ${location.locative}`,
            text: location.note,
          }))}
        />
      </Section>
      <Section tone="muted" title="ვიზიტის დასაგეგმად">
        <p className="max-w-3xl leading-7 text-slate-700">
          მოგვაწოდეთ ბრენდი, მოდელი, პრობლემის აღწერა და ზუსტი უბანი. თუ
          მოწყობილობა ჟონავს ან უჩვეულოდ ხმაურობს, სასარგებლოა მოკლე ფოტო ან ვიდეო.
        </p>
      </Section>
      <CTA />
    </>
  );
}
