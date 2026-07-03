import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 0,
      }}
    >
      {/* ── Layer 0: Background image with ken-burns ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${getImageUrl("/hero-bg.jpg")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          animation: "kenBurns 20s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Directional gradient overlay (dense left → transparent right) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,15,30,0.85) 0%, rgba(5,15,30,0.75) 40%, rgba(5,15,30,0.20) 70%, rgba(5,15,30,0.00) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Layer 2: Main content ── */}
      <div
        className="relative w-full max-w-7xl mx-auto hero-content"
        style={{
          zIndex: 2,
          padding: "80px 60px 48px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid rgba(34, 197, 94, 0.5)",
              borderRadius: "999px",
              padding: "8px 20px",
              marginBottom: "20px",
              color: "#86efac",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            <Leaf style={{ width: "14px", height: "14px", flexShrink: 0 }} />
            Soluções diversas para gestão de Resíduos
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 leading-[1.05] hero-h1"
            style={{ fontWeight: 800 }}
          >
            <span className="block text-white text-[38px] md:text-[68px]">Gestão Integrada de</span>
            <span className="block text-[#38BDF8] text-[38px] md:text-[68px]">Resíduos</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-10 hero-subtitle"
            style={{
              fontSize: "17px",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "520px",
              lineHeight: 1.6,
            }}
          >
            Especialistas em gestão e Destinação Ambientalmente Correta de Resíduos
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            className="hero-buttons flex flex-col sm:flex-row gap-4 mb-0"
          >
            <a
              href="#contato"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center text-center transition-all hover:scale-[1.03]"
              style={{
                background: "#84cc16",
                color: "#1a2e05",
                fontWeight: 700,
                borderRadius: "8px",
                padding: "14px 28px",
                boxShadow: "0 4px 14px rgba(132, 204, 22, 0.3)",
                border: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#65a30d")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#84cc16")}
            >
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center text-center transition-colors hover:bg-white/10"
              style={{
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "8px",
                padding: "14px 28px",
              }}
            >
              Conheça nossos Serviços
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62 }}
            className="hero-stats"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "40px",
              marginTop: "48px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              maxWidth: "500px",
            }}
          >
            <div className="flex flex-col">
              <span
                style={{
                  color: "#38BDF8",
                  fontSize: "34px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                +15 anos
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                DE EXPERIÊNCIA
              </span>
            </div>

            <div
              className="hero-sep"
              style={{
                width: "1px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.2)",
                flexShrink: 0,
              }}
            />

            <div className="flex flex-col">
              <span
                style={{
                  color: "#38BDF8",
                  fontSize: "34px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Centro Oeste
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "4px",
                }}
              >
                ATENDEMOS EM TODO
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
