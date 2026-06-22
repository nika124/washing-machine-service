import { Link } from "react-router-dom";
import { CTA, LinkCards, PageHero, Section } from "../../Components/Common/Content.jsx";
import Breadcrumbs from "../../Components/SEO/Breadcrumbs.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import SEO from "../../Components/SEO/SEO.jsx";
import { localBusinessSchema } from "../../Components/SEO/schemas.js";
import { services } from "../../data/services.js";
import { site } from "../../data/site.js";

export default function About() {
  return (
    <>
      <SEO
        title="DrWash-ის შესახებ | სარეცხი მანქანის სერვისი თბილისში"
        description="DrWash არის სარეცხი მანქანის სერვის-არეალის მომსახურება თბილისში: დიაგნოსტიკა, შეკეთება, მონტაჟი და მოვლა წინასწარი შეთანხმებით."
        path="/about"
      />
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs items={[{ label: "მთავარი", path: "/" }, { label: "ჩვენ შესახებ", path: "/about" }]} />
      <PageHero
        eyebrow="DrWash"
        title="სარეცხი მანქანის სერვისი თბილისში"
        intro="DrWash მომხმარებლებს სთავაზობს სარეცხი მანქანის დიაგნოსტიკას, შეკეთებას, მონტაჟსა და მოვლას თბილისის მასშტაბით."
      />
      <Section title="როგორ ვმუშაობთ">
        <div className="max-w-3xl space-y-4 leading-7 text-slate-700">
          <p>
            მომსახურება იწყება ბრენდის, მოდელისა და სიმპტომის დაზუსტებით. ადგილზე
            შემოწმების შემდეგ მომხმარებელთან თანხმდება სამუშაოს მოცულობა და ფასი.
          </p>
          <p>
            DrWash არის სერვის-არეალის ბიზნესი და საჯარო ოფისის მისამართს არ
            უთითებს. ვიზიტი მომხმარებლის მისამართზე წინასწარი შეთანხმებით იგეგმება.
          </p>
          <p>{site.warrantyNote}</p>
        </div>
      </Section>
      <Section tone="muted" title="ჩვენი სერვისები">
        <LinkCards items={services.map((service) => ({
          path: service.path,
          title: service.name,
          text: service.description,
        }))} columns="md:grid-cols-2" />
      </Section>
      <Section title="დამატებითი ინფორმაცია">
        <div className="flex flex-wrap gap-4">
          <Link className="font-bold text-blue-700 hover:text-blue-900" to="/prices">ფასების პრინციპები →</Link>
          <Link className="font-bold text-blue-700 hover:text-blue-900" to="/faq">ხშირი კითხვები →</Link>
          <Link className="font-bold text-blue-700 hover:text-blue-900" to="/contact">კონტაქტი →</Link>
        </div>
      </Section>
      <CTA />
    </>
  );
}
