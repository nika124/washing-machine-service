const siteUrl = "https://sarecxo.ge";

export const site = {
  name: "Sarecxo",
  url: siteUrl,
  canonicalUrl: siteUrl,
  locale: "ka_GE",
  language: "ka",
  region: "GE-TB",
  city: "თბილისი",
  ogImage: "/og-image.svg",
  phone: {
    display: "579 674 040",
    international: "+995579674040",
    isPlaceholder: false,
  },
  email: {
    value: "",
    isPlaceholder: true,
  },
  whatsapp: {
    url: "https://wa.me/995579674040",
    isPlaceholder: false,
  },
  socialLinks: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  },
  googleBusinessProfileUrl: "",
  hours: {
    label: "ორშაბათი – კვირა | 10:00 – 22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "22:00",
  },
  serviceArea: "თბილისი და ჩამოთვლილი უბნები",
  pricingNote:
    "ფასი დამოკიდებულია დაზიანების ტიპზე, საჭირო დეტალებზე და სამუშაოს სირთულეზე.",
  calloutNote:
    "გამოძახებისა და დიაგნოსტიკის ღირებულება წინასწარ ზუსტდება; საბოლოო ფასი განისაზღვრება შემოწმების შემდეგ.",
  warrantyNote:
    "შესრულებულ სამუშაოზე გარანტიის პირობები დამოკიდებულია სამუშაოსა და გამოყენებულ დეტალზე და წინასწარ ზუსტდება.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.canonicalUrl}/`).toString();
}

export const contactLinks = {
  phone: `tel:${site.phone.international}`,
  email: site.email.value ? `mailto:${site.email.value}` : "",
  whatsapp: site.whatsapp.url,
};

export const activeSocialLinks = Object.entries(site.socialLinks)
  .filter(([, url]) => Boolean(url))
  .map(([platform, url]) => ({ platform, url }));
