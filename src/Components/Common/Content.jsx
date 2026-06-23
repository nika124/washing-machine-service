import { Link } from "react-router-dom";
import { contactLinks, site } from "../../data/site.js";

export function PageHero({ eyebrow, title, intro }) {
  return (
    <header className="px-4 pb-5 sm:px-6 sm:pb-8">
      <div className="blue-grid relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-slate-950 px-5 py-10 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.75)] sm:px-10 sm:py-14 lg:px-14">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="relative">
          {eyebrow && (
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {intro}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export function Section({ title, intro, children, tone = "white", id }) {
  const background = tone === "muted" ? "bg-slate-100/70" : "bg-transparent";
  return (
    <section id={id} className={`${background} py-12 sm:py-16 lg:py-20`}>
      <div className="container-shell">
        {(title || intro) && (
          <div className="max-w-3xl">
            {title && <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 leading-7 text-slate-600">{intro}</p>}
          </div>
        )}
        <div className={title || intro ? "mt-8 sm:mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function LinkCards({ items, columns = "md:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <div className={`grid gap-4 sm:gap-5 ${columns}`}>
      {items.map((item) => (
        <article key={item.path} className="group surface-card flex min-w-0 flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_-28px_rgba(37,99,235,0.35)] sm:p-6">
          <span aria-hidden="true" className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M8 4h8" />
            </svg>
          </span>
          <p className="text-lg font-bold text-slate-950">
            <Link className="focus-ring rounded hover:text-blue-700" to={item.path}>
              {item.title || item.name}
            </Link>
          </p>
          {item.text && <p className="mt-3 flex-1 leading-7 text-slate-600">{item.text}</p>}
          <Link className="mt-5 inline-flex items-center font-bold text-blue-700 hover:text-blue-900" to={item.path}>
            სრულად ნახვა <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Checklist({ items }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {items.map((item) => (
        <li key={item} className="surface-card flex items-start gap-3 p-4 leading-7 text-slate-700 sm:p-5">
          <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedSteps({ items }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item} className="surface-card relative overflow-hidden p-5 leading-7 text-slate-700 sm:p-6">
          <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 font-black text-white shadow-lg shadow-blue-600/20">
            {String(index + 1).padStart(2, "0")}
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
        <details key={item.question} className="group surface-card p-5 open:border-blue-200 sm:p-6">
          <summary className="flex min-h-7 cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-950 marker:content-none">
            <span>{item.question}</span>
            <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-700 transition group-open:rotate-45 group-open:bg-blue-600 group-open:text-white">+</span>
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
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="blue-grid relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-blue-700 px-5 py-9 text-white shadow-[0_24px_60px_-30px_rgba(29,78,216,0.75)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <div className="relative">
          <p className="text-2xl font-black leading-tight sm:text-3xl">{title}</p>
          <p className="mt-3 max-w-2xl leading-7 text-blue-100">{text}</p>
        </div>
        <div className="relative mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
          <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-bold text-blue-800 hover:bg-blue-50" href={contactLinks.phone}>
            სარეცხი მანქანის შეკეთების შეკვეთა — {site.phone.display}
          </a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 font-bold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href={contactLinks.whatsapp}>
            WhatsApp
          </a>
          <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 font-bold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" to="/contact">
            კონტაქტის გვერდი
          </Link>
        </div>
      </div>
    </section>
  );
}
