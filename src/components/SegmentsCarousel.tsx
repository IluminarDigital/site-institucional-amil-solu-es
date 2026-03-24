import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Factory, FlaskConical, Apple, Mountain, TreePine, Truck, Building2, Wheat, Store, ShieldCheck } from "lucide-react";
import { segments } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Factory, FlaskConical, Apple, Mountain, TreePine, Truck, Building2, Wheat, Store, ShieldCheck,
};

export default function SegmentsCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(segments.length / perPage);
  const visible = segments.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="segmentos" className="bg-petrol py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2">SEGMENTOS QUE ATENDEMOS</p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-extrabold text-2xl md:text-[32px] text-white">Atuação Multissetorial</h2>
          <div className="hidden md:flex gap-2">
            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="w-10 h-10 rounded-full border border-petrol-border flex items-center justify-center text-white disabled:opacity-30 hover:bg-petrol-card transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} className="w-10 h-10 rounded-full border border-petrol-border flex items-center justify-center text-white disabled:opacity-30 hover:bg-petrol-card transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {visible.map((seg, i) => {
            const Icon = iconMap[seg.icon] || Factory;
            return (
              <motion.div
                key={seg.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-petrol-card border border-petrol-border rounded-xl p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-lg bg-petrol-deep flex items-center justify-center mb-4">
                  <Icon size={18} className="text-azul" />
                </div>
                <h3 className="font-bold text-sm text-white mb-2 leading-snug">{seg.name}</h3>
                <p className="text-xs text-[#6a9abf]">{seg.services}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-1.5 mt-8 md:hidden">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-azul" : "bg-petrol-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
