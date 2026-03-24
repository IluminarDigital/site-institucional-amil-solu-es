import { WHATSAPP_URL } from "@/data/services";

export default function CTASection() {
  return (
    <section className="bg-lime py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-extrabold text-2xl md:text-[30px] text-[#0a1a04] leading-snug mb-4">
          Assegure a conformidade e a eficiência da sua operação industrial hoje mesmo.
        </h2>
        <p className="text-sm text-[#0a1a04]/70 mb-6 max-w-2xl mx-auto">
          Preencha o formulário abaixo e um dos nossos engenheiros ambientais entrará em contato em menos de 24 horas.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-petrol text-white font-bold text-sm px-8 py-3.5 rounded-lg hover:scale-[1.02] transition-transform mb-6">
          Fale com Nossa Equipe
        </a>
        <p className="text-sm text-[#0a1a04]/70">(62) 3291-1000 • contato@amilambiental.com.br</p>
      </div>
    </section>
  );
}
