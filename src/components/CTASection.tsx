import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";

export default function CTASection() {
  return (
    <section className="bg-lime py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-extrabold text-2xl md:text-[30px] text-[#0a1a04] leading-snug mb-4"
        >
          Assegure a conformidade e a eficiência da sua operação industrial hoje mesmo.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-[#0a1a04]/70 mb-6 max-w-2xl mx-auto"
        >
          Preencha o formulário abaixo e um dos nossos engenheiros ambientais entrará em contato em menos de 24 horas.
        </motion.p>
        <motion.a
          href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-block bg-petrol text-white font-bold text-sm px-8 py-3.5 rounded-lg mb-6"
        >
          Fale com Nossa Equipe
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-sm text-[#0a1a04]/70"
        >
          (62) 3291-1000 • contato@amilambiental.com.br
        </motion.p>
      </div>
    </section>
  );
}
