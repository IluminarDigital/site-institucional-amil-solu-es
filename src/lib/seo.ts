import { services, segments } from "../data/services";

export const SITE_URL = "https://www.amilambiental.com.br";
export const legacySegmentSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const segmentSlug = (name: string) => legacySegmentSlug(name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
export const aliases = Object.fromEntries(segments.filter(s => segmentSlug(s.name) !== legacySegmentSlug(s.name)).map(s => [`/segmentos/${legacySegmentSlug(s.name)}`, `/segmentos/${segmentSlug(s.name)}`]));
export const businessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#empresa`, name: "AMIL Soluções Ambientais", url: `${SITE_URL}/`,
  telephone: "+556232911000", email: "comercial@amilgoiania.com.br",
  address: { "@type": "PostalAddress", streetAddress: "Rua São Fernando, 303 - Quadra 92, Lote 8 - Ipiranga", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
  areaServed: "Centro-Oeste, Brasil",
  openingHours: "Mo-Su 08:00-18:00",
  sameAs: ["https://www.instagram.com/amil.ambiental/", "https://www.linkedin.com/company/amil-ambiental/", "https://www.facebook.com/amilambiental"]
};
export const seoRoutes = [
  { path: "/", title: "Gestão de Resíduos em Goiânia e Centro-Oeste | AMIL", description: "Coleta, transporte e destinação de resíduos e limpeza industrial em Goiânia e no Centro-Oeste. AMIL Soluções Ambientais, com plantão emergencial 24h." },
  ...services.map(s => ({ path: `/servicos/${s.slug}`, title: `${s.title} em Goiânia | AMIL`, description: `${s.description} Atendimento em Goiânia e no Centro-Oeste. Solicite um diagnóstico à AMIL.` })),
  ...segments.map(s => ({ path: `/segmentos/${segmentSlug(s.name)}`, title: `${s.name}: Soluções Ambientais | AMIL`, description: s.description })),
  { path: "/missao-visao-valores", title: "Missão, Visão e Valores | AMIL Soluções Ambientais", description: "Conheça a missão, a visão e os valores da AMIL Soluções Ambientais: sustentabilidade, segurança, tecnologia, excelência e ética." }
];
export function getSeo(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const route = seoRoutes.find(r => r.path === (aliases[path] || path));
  return { ...(route || { path, title: "Página não encontrada | AMIL", description: "Página não encontrada. Conheça os serviços da AMIL Soluções Ambientais." }), canonical: `${SITE_URL}${(route?.path || path) === "/" ? "/" : (route?.path || path) + "/"}`, robots: route ? "index,follow" : "noindex,follow" };
}
