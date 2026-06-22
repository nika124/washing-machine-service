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
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <html lang={site.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="DrWash — სარეცხი მანქანის სერვისი თბილისში" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
