import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400"
        alt="Operação ambiental industrial"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,18,36,0.93) 48%, rgba(5,18,36,0.25) 100%)" }} />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-16 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-dm font-semibold tracking-wider text-lime border border-lime/30 bg-lime/10 mb-6">
            SOLUÇÕES AMBIENTAIS E INDUSTRIAIS
          </span>

          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-[52px] leading-tight max-w-2xl mb-5">
            <span className="text-white">Proteção Ambiental com </span>
            <span className="text-azul">Tecnologia</span>
            <span className="text-white"> e Segurança</span>
          </h1>

          <p className="font-dm text-base md:text-lg max-w-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Coleta, transporte e destinação de resíduos com plantão 24h para o seu negócio.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-lime text-[#0a1a04] font-dm font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform">
              Fale pelo WhatsApp
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 border text-sm font-dm font-medium px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.35)" }}>
              Conheça os Serviços
            </a>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            {[
              { value: "+10", label: "anos de experiência" },
              { value: "24h", label: "atendimento" },
              { value: "100%", label: "frota própria" },
            ].map(c => (
              <div key={c.label}>
                <p className="font-syne font-extrabold text-2xl md:text-[30px] text-azul">{c.value}</p>
                <p className="font-dm text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{c.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
