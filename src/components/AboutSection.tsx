import { motion } from "framer-motion";
import { Crosshair, Eye, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { getImageUrl } from "@/lib/utils";

const mvvInline = [
  {
    icon: Crosshair,
    title: "Missão",
    text: "Entregar soluções ambientais completas, seguras e sustentáveis.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional em serviços ambientais e fabricação de equipamentos.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Sustentabilidade, Segurança, Tecnologia, Excelência e Ética.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="content-section scroll-mt-20 bg-gradient-to-br from-slate-50 to-teal-50 !pb-0">
      {/* ── Grid: image (left) + institutional text + MVV (right) ── */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[600px]">
        {/* ── Left: globe image ── */}
        <div className="relative flex items-center justify-center bg-transparent min-h-[400px] overflow-hidden">
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-full flex justify-center p-8 pb-24"
          >
            <img
              src={getImageUrl("/globo -sem-fundo.png")}
              alt="Planeta Terra"
              className="w-48 sm:w-64 md:w-full md:max-w-md mx-auto drop-shadow-2xl"
              loading="lazy"
              width={800}
              height={800}
            />
          </motion.div>
        </div>

        {/* ── Right: text column + MVV inline ── */}
        <div className="px-10 pb-12 pt-0 lg:px-16 lg:pb-[72px] lg:pt-0 flex flex-col justify-center text-left">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-3"
          >
            QUEM SOMOS
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-extrabold text-2xl md:text-[32px] text-slate-800 leading-tight mb-6"
          >
            Especialistas em gestão e Destinação Ambientalmente Correta de Resíduos
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 leading-[1.85] mb-8"
          >
            A Amil Soluções Ambientais é uma empresa especializada em coleta, transporte e destinação ambientalmente correta de
            resíduos e serviços ambientais integrado. Com uma trajetória consolidada e uma estrutura operacional completa, oferecemos
            respostas rápidas e eficazes para os desafios ambientais de empresas de todos os portes e segmentos com
            plantão 24h. Nosso propósito é proteger o meio ambiente com soluções seguras, tecnológicas e de alto
            desempenho, alinhando a sustentabilidade à performance operacional.
          </motion.p>

          {/* ── MVV inline list ── */}
          <div>
            {mvvInline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: i < mvvInline.length - 1 ? "20px" : 0,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(13, 148, 136, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1px",
                  }}
                >
                  <item.icon size={18} style={{ color: "#0d9488" }} />
                </div>

                {/* Text */}
                <div>
                  <p style={{ fontWeight: 600, color: "#1a1a1a", fontSize: "15px", marginBottom: "2px" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.55 }}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link para a página completa */}
          <Link
            to="/missao-visao-valores"
            style={{
              display: "inline-block",
              marginTop: "8px",
              color: "#0d9488",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
          >
            Ver Missão, Visão e Valores completos →
          </Link>
        </div>
      </div>

      {/* Bottom bar full-width */}
      <div className="w-full bg-lime px-8 py-5 flex items-center justify-center gap-3">
        <Leaf className="w-6 h-6 text-[#0a1a04]" />
        <p className="text-xl font-semibold text-[#0a1a04] text-center">
          Tecnologia e responsabilidade ambiental em cada operação.
        </p>
      </div>
    </section>
  );
}
