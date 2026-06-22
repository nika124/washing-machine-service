import { Link } from "react-router-dom";
import { contactLinks, site } from "../../data/site.js";

export function PageHero({ eyebrow, title, intro }) {
  return (
    <header className="border-b border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-screen-xl px-5 py-10 sm:px-6 sm:py-14">
        {eyebrow && (
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}

export function Section({ title, intro, children, tone = "white", id }) {
  const background = tone === "muted" ? "bg-slate-50" : "bg-white";
  return (
    <section id={id} className={`${background} py-10 sm:py-14`}>
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6">
        {title && <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>}
        {intro && <p className="mt-3 max-w-3xl leading-7 text-slate-600">{intro}</p>}
        <div className={title || intro ? "mt-7" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function LinkCards({ items, columns = "md:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <article key={item.path} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">
            <Link className="rounded hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" to={item.path}>
              {item.title || item.name}
            </Link>
          </h3>
          {item.text && <p className="mt-2 flex-1 leading-6 text-slate-600">{item.text}</p>}
          <Link className="mt-4 inline-flex font-semibold text-blue-700 hover:text-blue-900" to={item.path}>
            სრულად ნახვა <span aria-hidden="true" className="ml-1">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Checklist({ items }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 leading-6 text-slate-700">
          <span aria-hidden="true" className="mr-2 font-bold text-blue-700">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NumberedSteps({ items }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item} className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-slate-700">
          <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
            {index + 1}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function FAQList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer list-none pr-8 font-bold text-slate-950 marker:content-none">
            {item.question}
          </summary>
          <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({
  title = "გჭირდებათ სარეცხი მანქანის ხელოსანი თბილისში?",
  text = "დაგვიკავშირდით, აღწერეთ პრობლემა და შეათანხმეთ ვიზიტის ხელმისაწვდომი დრო.",
}) {
  return (
    <section className="bg-blue-800 py-10 text-white sm:py-12">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl leading-7 text-blue-100">{text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex justify-center rounded-lg bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href={contactLinks.phone}>
            დარეკვა — {site.phone.display}
          </a>
          <a className="inline-flex justify-center rounded-lg border border-blue-300 px-5 py-3 font-bold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href={contactLinks.whatsapp}>
            WhatsApp
          </a>
          <Link className="inline-flex justify-center rounded-lg border border-blue-300 px-5 py-3 font-bold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/contact">
            კონტაქტის გვერდი
          </Link>
        </div>
      </div>
    </section>
  );
}
