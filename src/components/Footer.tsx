import { Link } from "react-router-dom";
import { services, segments } from "@/data/services";

const AMIL_NEWS = "https://www.desentupidoradecomercio.com.br";

export default function Footer() {
  return (
    <footer className="bg-petrol-dark pt-16 pb-8 text-center sm:text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 justify-items-center sm:justify-items-start">
          {/* Sobre */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div>
              <img
                src="/logo-amil-transparent.png"
                alt="AMIL Soluções Ambientais"
                className="w-36 mb-1 object-contain"
              />
            </div>
            <p className="text-base text-white/50 leading-relaxed">
              Grupo Amil Ambiental – tecnologia e sustentabilidade a serviço do seu negócio.
            </p>
          </div>

          {/* Serviços — todos os 14 */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-bold text-base text-white mb-4">Serviços</h4>
            <div className="space-y-1.5 flex flex-col items-center sm:items-start">
              {services.map(s => (
                <Link key={s.slug} to={`/servicos/${s.slug}`} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-white/50 hover:text-white transition-colors">{s.title}</Link>
              ))}
            </div>
          </div>

          {/* Segmentos */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-bold text-base text-white mb-4">Segmentos</h4>
            <div className="space-y-1.5 flex flex-col items-center sm:items-start">
              {segments.map(seg => {
                const slug = seg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <Link key={seg.name} to={`/segmentos/${slug}`} onClick={() => window.scrollTo(0, 0)} className="block text-sm text-white/50 hover:text-white transition-colors">
                    {seg.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Empresa */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h4 className="font-bold text-base text-white mb-4">Empresa</h4>
            <div className="space-y-1.5 flex flex-col items-center sm:items-start">
              <a href="#sobre" className="block text-sm text-white/50 hover:text-white transition-colors">Sobre Nós</a>
              <a href="#servicos" className="block text-sm text-white/50 hover:text-white transition-colors">Serviços</a>
              <a href="#contato" className="block text-sm text-white/50 hover:text-white transition-colors">Contato</a>
              <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/50 hover:text-white transition-colors">Amil News</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-0">
          <p className="text-xs sm:text-sm text-white/30 text-center sm:text-left">© {new Date().getFullYear()} Grupo Amil Ambiental. Todos os direitos reservados.</p>
          <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/30 hover:text-azul transition-colors text-center sm:text-right">Amil News</a>
        </div>
      </div>
    </footer>
  );
}