import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
      <SpeedInsights />
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
