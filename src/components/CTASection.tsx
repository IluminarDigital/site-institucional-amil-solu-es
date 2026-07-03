import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-teal-800 to-emerald-900 overflow-hidden py-24 px-6">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs text-white/80 uppercase tracking-widest mb-6"
        >
          <Leaf size={14} /> FALE COM UM ESPECIALISTA
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-white max-w-3xl mx-auto text-center leading-tight"
        >
          Pronto para garantir a conformidade ambiental da sua empresa?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/70 max-w-xl mx-auto text-center mt-4"
        >
          Nossa equipe de especialistas está disponível 24h para atender sua demanda com agilidade e total segurança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full"
        >
          <a
            href="#contato"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white text-green-900 font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-colors shadow-lg shadow-white/10 text-center"
          >
            Solicitar Diagnóstico Gratuito
          </a>
          
          <a
            href="https://wa.me/5562986090307"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            onClick={(e) => {
              if (typeof window !== "undefined" && (window as any).gtagLead) {
                const res = (window as any).gtagLead("https://wa.me/5562986090307", true);
                if (res === false) {
                  e.preventDefault();
                }
              }
            }}
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
           viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
           className="mt-8 border-t border-white/20 w-full pt-6"
        >
          <p className="text-white/50 text-sm">
            (62) 3291-1000 · comercial@amilgoiania.com.br
          </p>
        </motion.div>
      </div>
    </section>
  );
}
