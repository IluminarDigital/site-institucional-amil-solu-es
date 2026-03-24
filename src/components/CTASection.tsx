import { WHATSAPP_URL } from "@/data/services";

export default function CTASection() {
  return (
    <section className="bg-lime py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-extrabold text-2xl md:text-[30px] text-[#0a1a04] leading-snug mb-6">
          Pronto para elevar o nível da sua operação com{" "}
          <span className="text-petrol">soluções ambientais</span>{" "}
          de alto desempenho?
        </h2>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-petrol text-white font-bold text-sm px-8 py-3.5 rounded-lg hover:scale-[1.02] transition-transform mb-6">
          Fale com Nossa Equipe
        </a>
        <p className="text-sm text-[#0a1a04]/70">(62) 3291-1000 • contato@amilambiental.com.br</p>
      </div>
    </section>
  );
}
