import { Helmet } from "react-helmet-async";
import { absoluteUrl, site } from "../../data/site.js";

export default function SEO({
  title,
  description,
  path,
  type = "website",
  image = site.ogImage,
  robots = "index,follow",
  geo = true,
  published,
  updated,
}) {
  const brandedTitle = title.replaceAll("DrWash", site.name);
  const brandedDescription = description.replaceAll("DrWash", site.name);
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <html lang={site.language} />
      <title>{brandedTitle}</title>
      <meta name="description" content={brandedDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={brandedTitle} />
      <meta property="og:description" content={brandedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${site.name} — სარეცხი მანქანის სერვისი თბილისში`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brandedTitle} />
      <meta name="twitter:description" content={brandedDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {geo && <meta name="geo.region" content={site.region} />}
      {geo && <meta name="geo.placename" content={site.city} />}
      {type === "article" && published && (
        <meta property="article:published_time" content={published} />
      )}
      {type === "article" && updated && (
        <meta property="article:modified_time" content={updated} />
      )}
    </Helmet>
  );
}
