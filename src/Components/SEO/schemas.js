import { locations } from "../../data/locations.js";
import { services } from "../../data/services.js";
import { absoluteUrl, site } from "../../data/site.js";

export function localBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(site.ogImage),
    description:
      "სარეცხი მანქანის შეკეთება, დიაგნოსტიკა, მონტაჟი და მოვლა თბილისში ადგილზე მისვლით.",
    areaServed: locations.map((location) => ({
      "@type": "Place",
      name: location.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "სარეცხი მანქანის სერვისები",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(service.path),
        },
      })),
    },
  };

  if (!site.phone.isPlaceholder) schema.telephone = site.phone.international;
  if (!site.email.isPlaceholder) schema.email = site.email.value;
  const profiles = [
    ...Object.values(site.socialLinks),
    site.googleBusinessProfileUrl,
  ].filter(Boolean);
  if (profiles.length) schema.sameAs = profiles;

  return schema;
}

export function serviceSchema(service, area = site.city) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "City",
      name: area,
    },
    serviceType: service.name,
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    inLanguage: site.language,
    mainEntityOfPage: absoluteUrl(article.path),
    image: absoluteUrl(site.ogImage),
    author: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.svg"),
      },
    },
  };
}
