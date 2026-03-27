import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="font-black text-2xl sm:text-3xl md:text-4xl text-azul">
      {count > 0 ? `${prefix}${count}${suffix}` : "0"}
    </p>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center origin-center"
          style={{ 
            backgroundImage: `url('${getImageUrl("/hero-bg.jpg")}')`,
            animation: "kenBurns 20s ease-in-out infinite alternate"
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: "linear-gradient(to right, rgba(5,18,36,0.95) 0%, rgba(5,18,36,0.90) 45%, rgba(5,18,36,0) 100%)" 
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-lime border border-lime/30 bg-lime/10 mb-6"
          >
            <Leaf className="w-4 h-4" />
            SOLUÇÕES AMBIENTAIS E INDUSTRIAIS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-4xl mb-5"
          >
            <span className="text-white">Proteção Ambiental com</span><br className="hidden md:block" />
            <span className="text-azul"> Soluções </span>
            <span className="text-white">Seguras e Tecnológicas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 max-w-xl mb-8"
          >
            Especialistas em limpeza industrial, gestão de resíduos e conformidade ambiental com atendimento 24h em todo estado de Goiás.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 mb-12 w-full sm:w-auto"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-lime text-[#0a1a04] font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.02] transition-transform animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-[0_0_20px_rgba(141,198,63,0.3)] w-full sm:w-auto text-center"
            >
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border text-sm font-medium px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              Conheça nossos Serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 md:flex md:flex-wrap md:items-center md:gap-10 sm:px-0"
          >
            {[
              { value: 10, label: "anos de experiência", prefix: "+" },
              { value: 24, label: "atendimento emergencial", suffix: "h" },
              { value: 100, label: "frota própria", suffix: "%" },
            ].map((c, i) => (
              <div key={c.label} className="flex items-center gap-4 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                  className="text-center md:text-left"
                >
                  <CountUp target={c.value} prefix={c.prefix} suffix={c.suffix} />
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-white/60 mt-1">
                    {c.label}
                  </p>
                </motion.div>
                {i < 2 && (
                  <div className="hidden md:block w-px h-12 bg-white/20" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
