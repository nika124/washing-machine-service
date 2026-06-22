import { Link } from "react-router-dom";
import JsonLd from "./JsonLd.jsx";
import { breadcrumbSchema } from "./schemas.js";

export default function Breadcrumbs({ items }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-screen-xl px-5 py-4 sm:px-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {last ? (
                  <span aria-current="page" className="font-medium text-slate-900">
                    {item.label}
                  </span>
                ) : (
                  <Link className="rounded hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" to={item.path}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
