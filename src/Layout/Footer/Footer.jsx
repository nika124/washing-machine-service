import { Link } from "react-router-dom";
import { brands } from "../../data/brands.js";
import { locations } from "../../data/locations.js";
import { problems } from "../../data/problems.js";
import { services } from "../../data/services.js";
import { contactLinks, site } from "../../data/site.js";

function FooterLinks({ title, items }) {
  return (
    <div>
      <h2 className="font-bold text-white">{title}</h2>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.path}>
            <Link className="inline-flex rounded py-1 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-2xl font-extrabold text-white">
            <span className="text-blue-400">Dr</span>Wash
          </Link>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            სარეცხი მანქანის შეკეთება, დიაგნოსტიკა და მონტაჟი თბილისში ადგილზე ვიზიტით.
          </p>
          <address className="mt-4 space-y-2 not-italic text-sm">
            <a className="block hover:text-white" href={contactLinks.phone}>{site.phone.display}</a>
            <a className="block hover:text-white" href={contactLinks.whatsapp}>WhatsApp</a>
            <a className="block break-all hover:text-white" href={contactLinks.email}>{site.email.value}</a>
          </address>
          <p className="mt-4 text-sm text-slate-400">{site.hours.label}</p>
          <p className="mt-1 text-sm text-slate-400">{site.serviceArea}</p>
        </div>

        <FooterLinks title="სერვისები" items={services.map((item) => ({ label: item.shortName, path: item.path }))} />
        <FooterLinks title="პრობლემები" items={problems.map((item) => ({ label: item.name.replace("სარეცხი მანქანა ", ""), path: item.path }))} />
        <FooterLinks title="ბრენდები" items={[
          ...brands.slice(0, 6).map((item) => ({ label: item.name, path: item.path })),
          { label: "ყველა ბრენდი", path: "/brands" },
        ]} />
        <FooterLinks title="უბნები" items={[
          ...locations.filter((item) => item.slug !== "tbilisi").slice(0, 6).map((item) => ({ label: item.name, path: item.path })),
          { label: "ყველა უბანი", path: "/locations" },
        ]} />
      </div>
      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 DrWash. ყველა უფლება დაცულია.</p>
          <nav aria-label="დამატებითი ბმულები" className="flex flex-wrap gap-4">
            <Link className="hover:text-white" to="/about">ჩვენ შესახებ</Link>
            <Link className="hover:text-white" to="/prices">ფასები</Link>
            <Link className="hover:text-white" to="/faq">FAQ</Link>
            <Link className="hover:text-white" to="/blog">ბლოგი</Link>
            <Link className="hover:text-white" to="/contact">კონტაქტი</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
