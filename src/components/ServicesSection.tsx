import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Trash2, Fuel, Waves, AlertTriangle, Truck, Gauge, Flame, SprayCan, HardHat, Wrench, GlassWater, Bird, Bug } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  "01": Droplets, "02": Trash2, "03": Fuel, "04": Waves, "05": AlertTriangle,
  "06": Truck, "07": Gauge, "08": Flame, "09": SprayCan, "10": HardHat,
  "11": Wrench, "12": GlassWater, "13": Bird, "14": Bug,
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-bg-section py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-2">NOSSAS SOLUÇÕES</p>
        <h2 className="font-extrabold text-2xl md:text-[34px] text-petrol mb-2">Ambiental e Industrial</h2>
        <p className="text-sm text-muted-foreground mb-10">Soluções completas com tecnologia de ponta para a conformidade e eficiência da sua operação.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.number] || Droplets;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={`/servicos/${s.slug}`} className="group block bg-white border border-[#d8e8f5] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(10,39,68,0.15)]">
                  <div className="relative h-36 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase text-[#b0c8e0]">{s.number}</span>
                  </div>
                  <div className="p-4">
                    <div className="w-9 h-9 rounded-[10px] bg-[#e8f4fd] flex items-center justify-center mb-3">
                      <Icon size={16} className="text-[#1a6b8a]" />
                    </div>
                    <h3 className="font-bold text-[13px] text-petrol mb-1.5 leading-snug">{s.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{s.description}</p>
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
