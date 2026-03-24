import { motion } from "framer-motion";

const brands = [
  { name: "AMIL Soluções Ambientais", desc: "Divisão especializada em soluções ambientais e industriais de alta complexidade. Limpeza técnica, hidrojato, gestão de resíduos, análises ambientais, descarbonização e atendimento emergencial.", color: "#4BB8F0" },
  { name: "AMIL Desentupidora e Dedetizadora", desc: "Linha operacional para residências, comércios e indústrias. Desentupimentos, hidrojateamento, controle de pragas, dedetização e afastamento de pombos.", color: "#0A2744" },
  { name: "Vacuo Prime – Equipamentos Industriais", desc: "Unidade fabril do grupo. Produção de equipamentos de hidrojato, caminhões a vácuo e soluções de alta pressão para todo o Brasil.", color: "#8DC63F" },
];

export default function BrandsSection() {
  return (
    <section className="bg-bg-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-syne font-extrabold text-2xl md:text-[34px] text-petrol text-center mb-12">Nossas Marcas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-[#d0e4f5] overflow-hidden hover:-translate-y-1 transition-transform"
              style={{ borderTopWidth: 4, borderTopColor: b.color }}
            >
              <div className="p-7">
                <h3 className="font-syne font-bold text-lg text-petrol mb-3">{b.name}</h3>
                <p className="font-dm text-sm text-[#889] leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
