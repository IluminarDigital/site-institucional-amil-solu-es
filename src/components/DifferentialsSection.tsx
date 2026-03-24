import { motion } from "framer-motion";

const items = [
  { num: "24h", title: "Atendimento emergencial", desc: "Plantão todos os dias do ano, inclusive feriados." },
  { num: "100%", title: "Frota própria", desc: "Controle total da operação com rastreamento GPS." },
  { num: "+10", title: "Anos de mercado", desc: "Experiência em operações complexas e de alta criticidade." },
  { num: "Multi", title: "Soluções personalizadas", desc: "Diagnóstico específico para cada cliente e segmento." },
];

export default function DifferentialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-[#1a6b8a] mb-2">POR QUE ESCOLHER A AMIL</p>
        <h2 className="font-extrabold text-2xl md:text-[32px] text-petrol mb-10">Diferenciais que Fazem a Diferença</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-light border border-[#d0e4f5] rounded-xl p-6 border-t-[3px] border-t-azul"
            >
              <p className="font-extrabold text-[26px] text-petrol mb-1">{item.num}</p>
              <p className="font-bold text-sm text-petrol mb-2">{item.title}</p>
              <p className="text-xs text-[#889]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
