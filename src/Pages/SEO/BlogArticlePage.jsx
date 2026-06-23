import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/SEO/Breadcrumbs.jsx";
import JsonLd from "../../Components/SEO/JsonLd.jsx";
import { articleSchema } from "../../Components/SEO/schemas.js";
import SEO from "../../Components/SEO/SEO.jsx";
import { CTA, PageHero, Section } from "../../Components/Common/Content.jsx";
import { articleBySlug } from "../../data/blog.js";
import NotFoundPage from "./NotFoundPage.jsx";

const relatedLabels = {
  "/problems/washing-machine-not-draining": "სარეცხი მანქანა არ წურავს",
  "/services/washing-machine-diagnostics": "სარეცხი მანქანის დიაგნოსტიკა",
  "/services/washing-machine-installation": "სარეცხი მანქანის მონტაჟი",
  "/problems/washing-machine-noisy": "სარეცხი მანქანა ხმაურობს",
  "/problems/washing-machine-leaking": "სარეცხი მანქანიდან წყალი ჟონავს",
  "/services/washing-machine-repair": "სარეცხი მანქანის შეკეთება",
  "/services/washing-machine-cleaning": "სარეცხი მანქანის გაწმენდა და მოვლა",
};

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = articleBySlug[slug];
  if (!article) return <NotFoundPage />;

  return (
    <article>
      <SEO
        title={article.title}
        description={article.description}
        path={article.path}
        type="article"
        published={article.published}
        updated={article.updated}
      />
      <JsonLd data={articleSchema(article)} />
      <Breadcrumbs items={[
        { label: "მთავარი", path: "/" },
        { label: "ბლოგი", path: "/blog" },
        { label: article.h1, path: article.path },
      ]} />
      <PageHero eyebrow="პრაქტიკული გზამკვლევი" title={article.h1} intro={article.excerpt} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {article.sections.map((section) => (
          <section key={section.heading} className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_45px_-30px_rgba(15,23,42,0.3)] sm:p-7">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">{section.heading}</h2>
            <div className="mt-4 space-y-4 leading-8 text-slate-700">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <aside className="blue-grid rounded-[26px] bg-blue-600 p-6 text-white sm:p-8">
          <h2 className="text-xl font-black">დაკავშირებული სერვისები</h2>
          <ul className="mt-3 space-y-2">
            {article.related.map((path) => (
              <li key={path}>
                <Link className="font-bold text-white hover:text-blue-100" to={path}>
                  {relatedLabels[path] || "დაკავშირებული გვერდი"} →
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Section tone="muted" title="მნიშვნელოვანი შენიშვნა">
        <p className="max-w-3xl leading-7 text-slate-700">
          სტატია ზოგადი საინფორმაციო მასალაა. ელექტრო კვანძის, გაჟონვის, დამწვრის
          სუნის ან გაჭედილი მექანიზმის შემთხვევაში მოწყობილობა გამორთეთ და მიმართეთ
          სპეციალისტს.
        </p>
      </Section>
      <CTA />
    </article>
  );
}
