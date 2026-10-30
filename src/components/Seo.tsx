import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { aliases, businessSchema, getSeo } from "../lib/seo";

export default function Seo() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    if (aliases[path]) { navigate(aliases[path] + "/" + search + hash, { replace: true }); return; }
    const seo = getSeo(path);
    document.title = seo.title;
    const meta = (key: string, value: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.content = value;
    };
    meta("description", seo.description); meta("robots", seo.robots);
    meta("og:title", seo.title, true); meta("og:description", seo.description, true); meta("og:url", seo.canonical, true);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = seo.canonical;
    let schema = document.getElementById("amil-business-schema");
    if (path === "/") {
      if (!schema) { schema = document.createElement("script"); schema.id = "amil-business-schema"; schema.setAttribute("type", "application/ld+json"); document.head.appendChild(schema); }
      schema.textContent = JSON.stringify(businessSchema);
    } else { schema?.remove(); }
  }, [pathname, search, hash, navigate]);
  return null;
}
