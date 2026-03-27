import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";

const nrs = [
  { badge: "NR-20", title: "Líquidos Combustíveis e Inflamáveis", desc: "Segurança nas operações com produtos inflamáveis, tanques de combustível e áreas classificadas.", img: "/NR-20-semfundo.png" },
  { badge: "NR-33", title: "Segurança em Espaço Confinado", desc: "Planejamento, monitoramento e execução segura em tanques, silos, dutos e galerias.", img: "/NR-33-semfundo.png" },
  { badge: "NR-35", title: "Trabalho em Altura", desc: "Operações seguras acima de 2 metros com EPIs adequados e procedimentos certificados.", img: "/NR-35-semfundo.png" },
];

export default function CertificationsSection() {
  return (
    <section className="bg-petrol py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2 text-center">CERTIFICAÇÕES E NORMAS</p>
        <h2 className="font-extrabold text-2xl md:text-[32px] text-white mb-3 text-center">Zero Riscos, Total Conformidade</h2>
        <p className="text-sm text-white/60 mb-10 max-w-xl mx-auto text-center">A nossa equipe atua em estrita observância das Normas Regulamentadoras (NRs), garantindo que a sua empresa evita passivos ambientais e sanções legais.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {nrs.map((nr, i) => (
            <motion.div
              key={nr.badge}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-petrol-card border border-petrol-border rounded-xl p-6 flex flex-col items-center text-center gap-4"
            >
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <img src={getImageUrl(nr.img)} alt={nr.badge} className="w-32 h-32 object-contain mx-auto" loading="lazy" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">{nr.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{nr.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
