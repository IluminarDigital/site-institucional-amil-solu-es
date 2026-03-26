import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Factory, FlaskConical, Apple, Mountain, TreePine, Truck, Building2, Wheat, Store, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { segments } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Factory, FlaskConical, Apple, Mountain, TreePine, Truck, Building2, Wheat, Store, ShieldCheck,
};

const CLONE_COUNT = 3;
const AUTOPLAY_MS = 4000;
const N = segments.length;

// Clone CLONE_COUNT cards on each end for seamless looping
// e.g. [...last3, ...all10, ...first3]  → 16 items total
const extended = [
  ...segments.slice(-CLONE_COUNT),
  ...segments,
  ...segments.slice(0, CLONE_COUNT),
];
const TOTAL = extended.length; // e.g. 16

export default function SegmentsCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  
  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start at the first REAL card (index CLONE_COUNT inside extended)
  const [idx, setIdx]       = useState(CLONE_COUNT);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isSnapping = useRef(false);

  // Compute which real dot should be highlighted
  const dotIdx = ((idx - CLONE_COUNT) % N + N) % N;

  // --- Navigation ---
  const go = useCallback((dir: 1 | -1) => {
    if (isSnapping.current) return;
    setAnimate(true);
    setIdx(prev => prev + dir);
  }, []);

  // --- Autoplay ---
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS);
  }, [go]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // --- Infinite loop: snap silently after reaching a clone ---
  const handleTransitionEnd = useCallback(() => {
    isSnapping.current = true;
    if (idx >= N + CLONE_COUNT) {
      // We've slid past the last real card into the right clones → jump to start
      setAnimate(false);
      setIdx(CLONE_COUNT);
    } else if (idx < CLONE_COUNT) {
      // We've slid before the first real card into the left clones → jump to end
      setAnimate(false);
      setIdx(N + CLONE_COUNT - 1);
    } else {
      isSnapping.current = false;
    }
  }, [idx]);

  // Re-enable animation one frame after the silent snap
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          isSnapping.current = false;
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  // Transform: shift the full track so the correct card aligns to the left edge
  // Track width = TOTAL / visibleCount * 100%  →  each card occupies 100% / TOTAL of the track
  // Shift = idx / TOTAL * 100% of track   →  which = idx / visibleCount * 100% of container
  const translateX = `${-(idx / TOTAL) * 100}%`;

  return (
    <section id="segmentos" className="bg-petrol py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2 text-center"
        >
          SEGMENTOS QUE ATENDEMOS
        </motion.p>

        <div className="relative flex items-center justify-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-extrabold text-2xl md:text-[32px] text-white text-center"
          >
            Atuação Multissetorial
          </motion.h2>
          <div className="hidden md:flex absolute right-0 gap-4">
            <button
              onClick={() => { go(-1); resetTimer(); }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { go(1); resetTimer(); }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              width: `${(TOTAL / visibleCount) * 100}%`,
              transform: `translateX(${translateX})`,
              transition: animate ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((seg, i) => {
              const Icon = iconMap[seg.icon] || Factory;
              const slug = seg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <div
                  key={i}
                  style={{ width: `${100 / TOTAL}%` }}
                  className="px-2.5"
                >
                  <Link to={`/segmentos/${slug}`} className="block h-full bg-petrol-card border border-petrol-border rounded-xl p-6 min-h-[220px] flex flex-col justify-start hover:border-azul/40 hover:bg-petrol-deep transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-petrol-deep flex items-center justify-center mb-4 flex-shrink-0">
                      <Icon size={18} className="text-azul" />
                    </div>
                    <h3 className="font-bold text-lg text-white leading-snug">{seg.name}</h3>
                    <p className="text-sm text-white/70 mt-2 leading-relaxed">{seg.description}</p>
                    <ul className="mt-3 space-y-1">
                      {seg.services.slice(0, 4).map((service, idx) => (
                        <li key={idx} className="text-xs text-white/50">
                          &bull; {service}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => { go(-1); resetTimer(); }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => { go(1); resetTimer(); }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {segments.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const target = i + CLONE_COUNT;
                setAnimate(true);
                setIdx(target);
                resetTimer();
              }}
              className={`w-2 h-2 rounded-full transition-colors ${i === dotIdx ? "bg-azul" : "bg-petrol-border"}`}
              aria-label={`Ir para ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
