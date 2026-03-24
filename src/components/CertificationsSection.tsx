import { motion } from "framer-motion";

const nrs = [
  { badge: "NR-20", title: "Líquidos Combustíveis e Inflamáveis", desc: "Segurança nas operações com produtos inflamáveis, tanques de combustível e áreas classificadas.", img: "/nr20.png" },
  { badge: "NR-33", title: "Segurança em Espaço Confinado", desc: "Planejamento, monitoramento e execução segura em tanques, silos, dutos e galerias.", img: "/nr33.png" },
  { badge: "NR-35", title: "Trabalho em Altura", desc: "Operações seguras acima de 2 metros com EPIs adequados e procedimentos certificados.", img: "/nr35.png" },
];

export default function CertificationsSection() {
  return (
    <section className="bg-petrol py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2">CERTIFICAÇÕES E NORMAS</p>
        <h2 className="font-extrabold text-2xl md:text-[32px] text-white mb-3">Zero Riscos, Total Conformidade</h2>
        <p className="text-sm text-white/60 mb-10 max-w-xl">A nossa equipe atua em estrita observância das Normas Regulamentadoras (NRs), garantindo que a sua empresa evita passivos ambientais e sanções legais.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {nrs.map((nr, i) => (
            <motion.div
              key={nr.badge}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-petrol-card border border-petrol-border rounded-xl p-6 flex gap-5"
            >
              <div className="flex-shrink-0">
                <span className="inline-block bg-lime text-[#0a1a04] font-extrabold text-sm px-3 py-2 rounded-lg">{nr.badge}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white mb-2">{nr.title}</h3>
                <p className="text-xs text-[#6a9abf] leading-relaxed">{nr.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
