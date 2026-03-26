import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-bg-section py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-2 text-center">NOSSAS SOLUÇÕES</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold text-2xl md:text-[34px] text-petrol mb-2 text-center">Ambiental e Industrial</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-muted-foreground mb-10 text-center">Soluções completas com tecnologia de ponta para a conformidade e eficiência da sua operação.</motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/servicos/${s.slug}`} className="group block bg-white border border-[#d8e8f5] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_12px_40px_-10px_rgba(10,39,68,0.18)] hover:border-verde/40">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase text-[#b0c8e0]">{s.number}</span>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-base text-petrol mb-1.5 leading-snug pt-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                    <span className="text-xs font-medium text-verde">Saiba mais →</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
