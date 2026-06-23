import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        const element = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );

        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      });

      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}
