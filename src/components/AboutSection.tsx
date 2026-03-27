import { motion } from "framer-motion";
import { Target, Eye, Heart, Leaf } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

const values = [
  { icon: Target, title: "Missão", text: "Entregar soluções ambientais completas, seguras e sustentáveis." },
  { icon: Eye, title: "Visão", text: "Ser referência nacional em serviços ambientais e fabricação de equipamentos." },
  { icon: Heart, title: "Valores", text: "Sustentabilidade, Segurança, Tecnologia, Excelência e Ética." },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[600px]">
        {/* Image column */}
        <div className="relative flex items-center justify-center bg-transparent min-h-[400px] overflow-hidden">
          {/* Floating & rotating earth */}
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
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
          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-lime px-8 py-5 flex items-center justify-center gap-3">
            <Leaf className="w-6 h-6 text-[#0a1a04]" />
            <p className="text-xl font-semibold text-[#0a1a04]">Tecnologia e responsabilidade ambiental em cada operação.</p>
          </div>
        </div>

        {/* Text column */}
        <div className="px-8 py-12 lg:px-16 lg:py-[72px] flex flex-col justify-center text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-3"
          >
            QUEM SOMOS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-extrabold text-2xl md:text-[32px] text-slate-800 leading-tight mb-6"
          >
            Especialistas em Serviços Ambientais Integrados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 leading-[1.85] mb-8"
          >
            A AMIL Soluções Ambientais é um grupo especializado em serviços ambientais integrados, com atuação em
            limpeza técnica com alta pressão e sucção a vácuo, gestão e transporte de resíduos, controle de pragas e
            afastamento de pombo. Com uma trajetória consolidada e uma estrutura operacional completa, oferecemos
            respostas rápidas e eficazes para os desafios ambientais de empresas de todos os portes e segmentos com
            plantão 24h. Nosso propósito é proteger o meio ambiente com soluções seguras, tecnológicas e de alto
            desempenho, alinhando a sustentabilidade à performance operacional.
          </motion.p>

          <div className="space-y-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f4fd] flex items-center justify-center flex-shrink-0">
                  <v.icon size={18} className="text-[#1a6b8a]" />
                </div>
                <div>
                  <p className="font-semibold text-base text-slate-800 mb-0.5">{v.title}</p>
                  <p className="text-sm text-slate-500">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
