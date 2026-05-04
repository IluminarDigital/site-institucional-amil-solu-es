import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, Factory, Droplets, Bug, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { services, segments } from "@/data/services";
import { getImageUrl } from "@/lib/utils";

const AMIL_NEWS = "https://www.desentupidoradecomercio.com.br";
const WHATSAPP = "https://wa.me/5562986090307";

const categories = [
  { label: "AMBIENTAL & INDUSTRIAL", icon: Factory, iconColor: "text-teal-600", items: services.filter(s => s.category === "AMBIENTAL E INDUSTRIAL") },
  { label: "CONTROLE DE PRAGAS", icon: Bug, iconColor: "text-green-600", items: services.filter(s => s.category === "CONTROLE DE PRAGAS") },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSegmentsOpen, setMobileSegmentsOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#e0e8f0] ${scrolled ? "backdrop-blur-md shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/">
          <img 
            src={getImageUrl("/public/logo-amil-clean.png")} 
            alt="AMIL Soluções Ambientais" 
            className="object-contain" 
            style={{ height: "75px", width: "auto", background: "transparent !important", mixBlendMode: "multiply" }} 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-petrol">
          <Link to="/#sobre" className="hover:text-azul transition-colors">A Amil Ambiental</Link>

          <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-azul transition-colors">Serviços <ChevronDown size={14} /></button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[800px] overflow-hidden">
                  <div className="p-6 lg:p-8 grid grid-cols-3 gap-8 items-start max-h-[500px] overflow-y-auto">
                    {categories.map((cat, i) => (
                      <div key={cat.label} className="relative min-w-[220px]">
                        {i !== 0 && <div className="absolute -left-4 top-0 bottom-0 w-px bg-slate-100" />}
                        <p className="text-xs font-bold text-petrol mb-4 flex items-center whitespace-nowrap">
                          <cat.icon className={`w-4 h-4 mr-2 inline ${cat.iconColor}`} />
                          {cat.label}
                        </p>
                        <div className="space-y-3">
                          {cat.items.map(s => (
                            <Link key={s.slug} to={`/servicos/${s.slug}`} className="block text-base text-slate-600 hover:text-azul transition-colors leading-snug whitespace-nowrap overflow-hidden text-ellipsis" onClick={() => setServicesOpen(false)}>
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-teal-50/50 py-4 text-center">
                    <a href="#servicos" className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors" onClick={() => setServicesOpen(false)}>
                      Ver todos os serviços &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative group" onMouseEnter={() => setSegmentsOpen(true)} onMouseLeave={() => setSegmentsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-azul transition-colors">Segmentos <ChevronDown size={14} /></button>
            {segmentsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[600px] overflow-hidden">
                  <div className="p-6 flex justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center whitespace-nowrap">
                        <MapPin className="w-4 h-4 mr-2 inline text-teal-600 flex-shrink-0" />
                        SEGMENTOS QUE ATENDEMOS
                      </p>
                      <div className="space-y-3">
                        {segments.slice(0, 5).map(seg => {
                          const slug = seg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                          return (
                            <Link key={seg.name} to={`/segmentos/${slug}`} className="flex items-center text-base text-slate-600 hover:text-azul transition-colors leading-snug" onClick={() => setSegmentsOpen(false)}>
                              <ChevronRight className="w-3 h-3 text-slate-300 mr-2 flex-shrink-0" />
                              {seg.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="w-px bg-slate-100 self-stretch mx-4" />

                    <div className="flex-1">
                      <p className="invisible text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center whitespace-nowrap">
                        <MapPin className="w-4 h-4 mr-2 inline text-teal-600 flex-shrink-0" />
                        SEGMENTOS QUE ATENDEMOS
                      </p>
                      <div className="space-y-3">
                        {segments.slice(5, 10).map(seg => {
                          const slug = seg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                          return (
                            <Link key={seg.name} to={`/segmentos/${slug}`} className="flex items-center text-base text-slate-600 hover:text-azul transition-colors leading-snug" onClick={() => setSegmentsOpen(false)}>
                              <ChevronRight className="w-3 h-3 text-slate-300 mr-2 flex-shrink-0" />
                              {seg.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50/50 py-4 text-center border-t border-slate-100">
                    <a href="#segmentos" className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors" onClick={() => setSegmentsOpen(false)}>
                      Ver todos os segmentos &rarr;
                    </a>
                  </div>
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
          <Link to="/#sobre" className="block text-petrol font-medium" onClick={() => setMobileOpen(false)}>A Amil Ambiental</Link>
          
          <div>
            <button className="flex items-center justify-between w-full text-petrol font-medium mb-2" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              Serviços <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-3 mb-2 border-l-2 border-slate-100">
                {categories.map(cat => (
                  <div key={cat.label} className="mb-3">
                    <p className="text-[10px] font-semibold tracking-wider text-teal-600 uppercase mb-2 flex items-center">
                      <cat.icon className="w-3 h-3 mr-1.5 inline" /> {cat.label}
                    </p>
                    <div className="space-y-2">
                      {cat.items.map(s => (
                        <Link key={s.slug} to={`/servicos/${s.slug}`} className="block text-xs text-petrol/80 py-1" onClick={() => setMobileOpen(false)}>{s.title}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button className="flex items-center justify-between w-full text-petrol font-medium mb-2" onClick={() => setMobileSegmentsOpen(!mobileSegmentsOpen)}>
              Segmentos <ChevronDown size={16} className={`transition-transform ${mobileSegmentsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSegmentsOpen && (
              <div className="pl-4 space-y-2 mb-2 border-l-2 border-slate-100">
                {segments.map(seg => {
                  const slug = seg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return (
                    <Link key={seg.name} to={`/segmentos/${slug}`} className="block text-xs text-petrol/80 py-1.5" onClick={() => setMobileOpen(false)}>
                      {seg.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="block text-petrol font-medium">Amil News</a>
          <a href="#contato" className="block text-petrol font-medium" onClick={() => setMobileOpen(false)}>Contato</a>
        </div>
      )}
    </motion.nav>
  );
}
