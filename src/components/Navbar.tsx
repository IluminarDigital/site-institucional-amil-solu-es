import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { services, segments } from "@/data/services";

const AMIL_NEWS = "https://www.desentupidoradecomercio.com.br";
const WHATSAPP = "https://api.whatsapp.com/send/?phone=5562986090307&text=Oi%2C+eu+vim+pelo+site+do+grupo+amil+ambiental%2C+quero+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0";

const categories = [
  { label: "AMBIENTAL E INDUSTRIAL", items: services.filter(s => s.category === "AMBIENTAL E INDUSTRIAL") },
  { label: "DESENTUPIMENTO E HIDROJATEAMENTO", items: services.filter(s => s.category === "DESENTUPIMENTO E HIDROJATEAMENTO") },
  { label: "CONTROLE DE PRAGAS", items: services.filter(s => s.category === "CONTROLE DE PRAGAS") },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#e0e8f0] ${scrolled ? "backdrop-blur-md shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/">
          <img src="/logo-amil.png" alt="AMIL Soluções Ambientais" className="h-12 object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-petrol">
          <Link to="/#sobre" className="hover:text-azul transition-colors">A Amil Ambiental</Link>

          <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-azul transition-colors">Serviços <ChevronDown size={14} /></button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-[#e0e8f0] p-6 w-[680px] grid grid-cols-3 gap-6">
                  {categories.map(cat => (
                    <div key={cat.label}>
                      <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-3">{cat.label}</p>
                      <div className="space-y-1.5">
                        {cat.items.map(s => (
                          <Link key={s.slug} to={`/servicos/${s.slug}`} className="block text-xs text-petrol hover:text-azul transition-colors leading-snug" onClick={() => setServicesOpen(false)}>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative group" onMouseEnter={() => setSegmentsOpen(true)} onMouseLeave={() => setSegmentsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-azul transition-colors">Segmentos <ChevronDown size={14} /></button>
            {segmentsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-[#e0e8f0] p-5 w-[340px]">
                  {segments.map(seg => (
                    <a key={seg.name} href="#segmentos" className="block text-xs text-petrol hover:text-azul transition-colors py-1.5" onClick={() => setSegmentsOpen(false)}>
                      {seg.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="hover:text-azul transition-colors">Amil News</a>
          <a href="#contato" className="hover:text-azul transition-colors">Contato</a>
        </div>

        <div className="hidden lg:block">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block bg-lime text-[#0a1a04] font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-[1.02] transition-transform">
            Solicitar Atendimento
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-petrol" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e0e8f0] px-6 py-6 space-y-4 text-sm max-h-[80vh] overflow-y-auto">
          <Link to="/#sobre" className="block text-petrol" onClick={() => setMobileOpen(false)}>A Amil Ambiental</Link>
          <div>
            <p className="font-semibold text-petrol mb-2">Serviços</p>
            {categories.map(cat => (
              <div key={cat.label} className="mb-3">
                <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1">{cat.label}</p>
                {cat.items.map(s => (
                  <Link key={s.slug} to={`/servicos/${s.slug}`} className="block text-xs text-petrol py-1" onClick={() => setMobileOpen(false)}>{s.title}</Link>
                ))}
              </div>
            ))}
          </div>
          <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="block text-petrol">Amil News</a>
          <a href="#contato" className="block text-petrol" onClick={() => setMobileOpen(false)}>Contato</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block bg-lime text-[#0a1a04] font-bold text-center py-3 rounded-lg">
            Solicitar Atendimento
          </a>
        </div>
      )}
    </nav>
  );
}
