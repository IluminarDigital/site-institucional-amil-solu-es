import { motion } from "framer-motion";
import { Crosshair, Eye, Gem, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getImageUrl } from "@/lib/utils";
import { WHATSAPP_URL } from "@/data/services";

const values = [
  { label: "Compromisso com o cliente", text: "Atendimento ágil, transparente e personalizado." },
  { label: "Sustentabilidade", text: "Respeito e cuidado com o meio ambiente em todas as etapas dos serviços." },
  { label: "Excelência", text: "Busca contínua pela qualidade e melhoria dos processos." },
  { label: "Ética e transparência", text: "Relações claras e responsáveis com clientes, colaboradores e parceiros." },
  { label: "Inovação", text: "Adoção de tecnologias e práticas modernas para soluções eficientes." },
  { label: "Responsabilidade social", text: "Atuação com foco no bem-estar da comunidade." },
];

export default function MvvPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero banner ── */}
      <section className="relative pt-[72px]">
        <div 
          className="relative w-full flex flex-col items-center justify-center"
          style={{ minHeight: "200px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${getImageUrl("/hero-bg.jpg")}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a1a]/90 to-[#0d2a1a]/50" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-8">
            <div style={{ paddingTop: "20px" }}>
              <Link
                to="/#sobre"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors w-fit"
              >
                <ArrowLeft size={16} /> Voltar para Quem Somos
              </Link>
            </div>
            
            <div className="flex flex-col items-start mt-6">
              <h1 
                className="font-black text-white leading-tight drop-shadow-lg italic"
                style={{ fontSize: "52px" }}
              >
                Missão, Visão e Valores
              </h1>
              <p 
                className="mt-2 max-w-xl"
                style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Os pilares que guiam cada decisão e operação da AMIL Soluções Ambientais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section 
        style={{ 
          background: "#f8fdf9"
        }}
      >
        <div 
          className="mx-auto"
          style={{ maxWidth: "1100px", padding: "60px 40px" }}
        >
          <div className="flex flex-col gap-[20px]">
            {/* MISSÃO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl w-full"
              style={{ background: "#e8f5e9", padding: "36px" }}
            >
              {/* deco */}
              <div className="pointer-events-none absolute top-0 right-0 w-20 h-20 rounded-full opacity-30"
                style={{ background: "#26a69a", transform: "translate(40%,-40%)" }} />

              <div className="flex items-start gap-5 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#c8e6c9" }}>
                  <Crosshair size={22} style={{ color: "#2e7d32" }} />
                </div>
                <div>
                  <h2 className="font-black italic text-xl mb-3" style={{ color: "#1b5e20" }}>
                    MISSÃO
                  </h2>
                  <p className="text-slate-700 text-base leading-[1.8]">
                    Oferecer soluções ambientais integradas, seguras e sustentáveis, com excelência no atendimento e
                    compromisso com o cliente, contribuindo para a preservação do meio ambiente e a qualidade de vida
                    da sociedade.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VISÃO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl w-full"
              style={{ background: "#e8f5e9", padding: "36px" }}
            >
              <div className="pointer-events-none absolute top-0 right-0 w-20 h-20 rounded-full opacity-30"
                style={{ background: "#26a69a", transform: "translate(40%,-40%)" }} />

              <div className="flex items-start gap-5 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#c8e6c9" }}>
                  <Eye size={22} style={{ color: "#2e7d32" }} />
                </div>
                <div>
                  <h2 className="font-black italic text-xl mb-3" style={{ color: "#1b5e20" }}>
                    VISÃO
                  </h2>
                  <p className="text-slate-700 text-base leading-[1.8]">
                    Ser reconhecida como referência em soluções ambientais e gerenciamento de resíduos no Centro-Oeste,
                    destacando-se pela inovação, responsabilidade socioambiental e resultados que superam as expectativas
                    de nossos clientes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VALORES */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl w-full"
              style={{ background: "#e8f5e9", padding: "36px" }}
            >
              <div className="pointer-events-none absolute bottom-0 left-0 w-32 h-24 opacity-30"
                style={{ background: "#1b5e20", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", transform: "translate(-30%, 30%)" }} />

              <div className="flex items-start gap-5 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#c8e6c9" }}>
                  <Gem size={22} style={{ color: "#2e7d32" }} />
                </div>
                <div className="flex-1">
                  <h2 className="font-black italic text-xl mb-5" style={{ color: "#1b5e20" }}>
                    VALORES
                  </h2>
                  
                  {/* Grid de Valores */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                    {values.map((v) => (
                      <div 
                        key={v.label} 
                        className="bg-white p-5 rounded-[10px]"
                        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-2 flex-shrink-0 w-2.5 h-2.5 rounded-full"
                            style={{ background: "#3A9E4A" }}
                          />
                          <div>
                            <p className="font-semibold text-slate-800 text-[15px] mb-1">{v.label}</p>
                            <p className="text-slate-600 text-[13px] leading-[1.6]">{v.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Alinhado à Direita */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ margin: "32px 0 0 auto", width: "fit-content" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center transition-all hover:scale-[1.03]"
              style={{
                background: "#22c55e",
                color: "#000",
                fontWeight: 700,
                borderRadius: "8px",
                padding: "14px 28px",
                textDecoration: "none",
                fontSize: "15px"
              }}
              onClick={(e) => {
                if (typeof window !== "undefined" && (window as any).gtagLead) {
                  const res = (window as any).gtagLead(WHATSAPP_URL, true);
                  if (res === false) {
                    e.preventDefault();
                  }
                }
              }}
            >
              Falar com nossa equipe
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
