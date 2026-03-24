import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

export default function CTASection() {
  return (
    <section
      className="py-20"
      style={{
        background: "radial-gradient(ellipse at center, #8DC63F 0%, #6aa22e 60%, #4e8a1e 100%)",
      }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-2xl md:text-[32px] text-[#0a1a04] leading-snug mb-5"
        >
          Assegure a conformidade e a eficiência da sua operação industrial hoje mesmo.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-[#0a1a04]/70 mb-8 max-w-2xl mx-auto"
        >
          Preencha o formulário abaixo e um dos nossos engenheiros ambientais entrará em contato em menos de 24 horas.
        </motion.p>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200, damping: 12 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-petrol text-white font-bold text-sm px-8 py-4 rounded-lg mb-8 shadow-[0_8px_24px_rgba(10,39,68,0.35)] hover:bg-[#0d3361] transition-colors duration-300"
        >
          Fale com Nossa Equipe
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-[#0a1a04]/70"
        >
          (62) 3291-1000 • contato@amilambiental.com.br
        </motion.p>
      </div>
    </section>
  );
}
