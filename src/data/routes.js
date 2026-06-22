import { services } from "./services.js";
import { problems } from "./problems.js";
import { brands } from "./brands.js";
import { locations } from "./locations.js";
import { articles } from "./blog.js";

export const coreRoutes = [
  "/",
  "/about",
  "/services",
  "/problems",
  "/brands",
  "/locations",
  "/prices",
  "/faq",
  "/contact",
  "/blog",
];

export const seoRoutes = [
  ...coreRoutes,
  ...services.map(({ path }) => path),
  ...problems.map(({ path }) => path),
  ...brands.map(({ path }) => path),
  ...locations.map(({ path }) => path),
  ...articles.map(({ path }) => path),
];

export const navItems = [
  { label: "მთავარი", path: "/" },
  { label: "სერვისები", path: "/services" },
  { label: "პრობლემები", path: "/problems" },
  { label: "ბრენდები", path: "/brands" },
  { label: "უბნები", path: "/locations" },
  { label: "ფასები", path: "/prices" },
  { label: "FAQ", path: "/faq" },
  { label: "კონტაქტი", path: "/contact" },
];
