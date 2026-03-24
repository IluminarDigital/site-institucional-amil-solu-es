import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/services";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <p ref={ref} className="font-extrabold text-2xl md:text-[30px] text-azul">{count > 0 ? (target === 100 ? `${count}%` : `+${count}`) : "0"}{suffix}</p>;
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/hero-bg.jpg"
        alt="Operação ambiental industrial"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,18,36,0.93) 48%, rgba(5,18,36,0.25) 100%)" }} />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-16 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-lime border border-lime/30 bg-lime/10 mb-6"
          >
            SOLUÇÕES AMBIENTAIS E INDUSTRIAIS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-extrabold text-3xl sm:text-4xl md:text-[52px] leading-tight max-w-2xl mb-5"
          >
            <span className="text-white">Soluções Ambientais e Industriais de </span>
            <span className="text-azul">Excelência</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg max-w-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Protegemos a sua operação, garantimos a conformidade legal e promovemos a sustentabilidade através de tecnologia avançada. Plantão 24h.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-lime text-[#0a1a04] font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-[0_0_20px_rgba(141,198,63,0.3)]">
              Solicitar Diagnóstico Gratuito
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 border text-sm font-medium px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.35)" }}>
              Conheça os Serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {[
              { value: 10, label: "anos de experiência", prefix: "+" },
              { value: 24, label: "atendimento", suffix: "h" },
              { value: 100, label: "frota própria", suffix: "%" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
              >
                <CountUp target={c.value} />
                <p className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{c.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
