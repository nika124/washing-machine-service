// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";

export default function App({ router = BrowserRouter, routerProps = {} }) {
  const RouterComponent = router;

  return (
    <RouterComponent {...routerProps}>      
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </RouterComponent>

    
  );
}
