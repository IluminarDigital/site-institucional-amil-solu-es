import { motion } from "framer-motion";
import { Clock, Truck, Award, Layers } from "lucide-react";

const items = [
  { num: "24h", title: "Atendimento emergencial", desc: "Plantão todos os dias do ano, inclusive feriados.", icon: Clock, bg: "bg-cyan-100", color: "text-cyan-600" },
  { num: "100%", title: "Frota própria", desc: "Controle total da operação com rastreamento GPS.", icon: Truck, bg: "bg-green-100", color: "text-green-600" },
  { num: "+10", title: "Anos de mercado", desc: "Experiência em operações complexas e de alta criticidade.", icon: Award, bg: "bg-amber-100", color: "text-amber-600" },
  { num: "Multi", title: "Soluções personalizadas", desc: "Diagnóstico específico para cada cliente e segmento.", icon: Layers, bg: "bg-teal-100", color: "text-teal-600" },
];

export default function DifferentialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-2 text-center">POR QUE ESCOLHER A AMIL</p>
        <h2 className="font-extrabold text-2xl md:text-[32px] text-slate-800 mb-10 text-center">Diferenciais que Fazem a Diferença</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.bg}`}>
                <item.icon className={item.color} size={24} />
              </div>
              <p className="font-black text-5xl text-petrol mt-2">{item.num}</p>
              <p className="font-bold text-lg text-slate-700 mt-1">{item.title}</p>
              <p className="text-base text-slate-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
