import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import {
  BrandsOverview,
  LocationsOverview,
  ProblemsOverview,
  ServicesOverview,
} from "./Pages/SEO/OverviewPages.jsx";
import {
  BrandPage,
  LocationPage,
  ProblemPage,
  ServicePage,
} from "./Pages/SEO/DetailPages.jsx";
import {
  BlogPage,
  ContactPage,
  FAQPage,
  PricesPage,
} from "./Pages/SEO/UtilityPages.jsx";
import BlogArticlePage from "./Pages/SEO/BlogArticlePage.jsx";
import NotFoundPage from "./Pages/SEO/NotFoundPage.jsx";

export default function App({ router = BrowserRouter, routerProps = {} }) {
  const RouterComponent = router;

  return (
    <RouterComponent {...routerProps}>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/problems" element={<ProblemsOverview />} />
          <Route path="/problems/:slug" element={<ProblemPage />} />
          <Route path="/brands" element={<BrandsOverview />} />
          <Route path="/brands/:slug" element={<BrandPage />} />
          <Route path="/locations" element={<LocationsOverview />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </RouterComponent>
  );
}
