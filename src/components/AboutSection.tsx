import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", text: "Entregar soluções ambientais completas, seguras e sustentáveis." },
  { icon: Eye, title: "Visão", text: "Ser referência nacional em serviços ambientais e fabricação de equipamentos." },
  { icon: Heart, title: "Valores", text: "Sustentabilidade, Segurança, Tecnologia, Excelência e Ética." },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image column */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
            alt="Equipe AMIL em operação"
            className="w-full h-full object-cover min-h-[400px]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-lime px-8 py-5">
            <p className="text-xs font-dm font-semibold tracking-wider uppercase text-[#333]">GRUPO AMIL AMBIENTAL</p>
            <p className="font-syne font-bold text-xl text-[#0a1a04]">3 marcas. 1 missão.</p>
          </div>
        </div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white px-8 py-12 lg:px-16 lg:py-[72px] flex flex-col justify-center"
        >
          <p className="text-xs font-dm font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-3">QUEM SOMOS</p>
          <h2 className="font-syne font-extrabold text-2xl md:text-[32px] text-petrol leading-tight mb-6">
            Especialistas em Serviços Ambientais Integrados
          </h2>
          <p className="font-dm text-sm text-[#556] leading-[1.85] mb-8">
            A AMIL Soluções Ambientais é um grupo especializado em serviços ambientais integrados, com atuação em limpeza técnica com alta pressão e sucção a vácuo, gestão e transporte de resíduos, controle de pragas e afastamento de pombo. Com uma trajetória consolidada e uma estrutura operacional completa, oferecemos respostas rápidas e eficazes para os desafios ambientais de empresas de todos os portes e segmentos com plantão 24h. Nosso propósito é proteger o meio ambiente com soluções seguras, tecnológicas e de alto desempenho, alinhando a sustentabilidade à performance operacional.
          </p>

          <div className="space-y-5">
            {values.map(v => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f4fd] flex items-center justify-center flex-shrink-0">
                  <v.icon size={18} className="text-[#1a6b8a]" />
                </div>
                <div>
                  <p className="font-dm font-semibold text-sm text-petrol mb-0.5">{v.title}</p>
                  <p className="font-dm text-xs text-[#889]">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
