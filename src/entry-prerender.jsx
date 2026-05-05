import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App router={StaticRouter} routerProps={{ location: url }} />
    </HelmetProvider>
  );
  const { helmet } = helmetContext;

  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
    ]
      .filter(Boolean)
      .join("\n    "),
  };
}
