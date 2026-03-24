import { Link } from "react-router-dom";
import { services, segments } from "@/data/services";

const AMIL_NEWS = "https://www.desentupidoradecomercio.com.br";

export default function Footer() {
  return (
    <footer className="bg-petrol-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Sobre */}
          <div>
            <div className="mb-4">
              <img src="/logo-amil-clean.png" alt="AMIL Soluções Ambientais" className="h-10 object-contain brightness-0 invert" />
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Grupo Amil Ambiental – tecnologia e sustentabilidade a serviço do seu negócio.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Serviços</h4>
            <div className="space-y-1.5">
              {services.slice(0, 8).map(s => (
                <Link key={s.slug} to={`/servicos/${s.slug}`} className="block text-xs text-white/50 hover:text-azul transition-colors">{s.title}</Link>
              ))}
            </div>
          </div>

          {/* Segmentos */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Segmentos</h4>
            <div className="space-y-1.5">
              {segments.slice(0, 8).map(seg => (
                <span key={seg.name} className="block text-xs text-white/50">{seg.name}</span>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Empresa</h4>
            <div className="space-y-1.5">
              <a href="#sobre" className="block text-xs text-white/50 hover:text-azul transition-colors">Sobre Nós</a>
              <a href="#servicos" className="block text-xs text-white/50 hover:text-azul transition-colors">Serviços</a>
              <a href="#contato" className="block text-xs text-white/50 hover:text-azul transition-colors">Contato</a>
              <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="block text-xs text-white/50 hover:text-azul transition-colors">Amil News</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Grupo Amil Ambiental. Todos os direitos reservados.</p>
          <a href={AMIL_NEWS} target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-azul transition-colors">Amil News</a>
        </div>
      </div>
    </footer>
  );
}
