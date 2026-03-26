import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services, WHATSAPP_URL } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-petrol">Serviço não encontrado</h1>
          <Link to="/" className="text-azul mt-4 inline-block">Voltar ao início</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div className="relative h-72 lg:h-96 w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12 z-10">
            <Link to="/#servicos" className="inline-flex flex-shrink-0 items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6 w-fit">
              <ArrowLeft size={16} /> Voltar para Serviços
            </Link>
            <span className="inline-block px-3 py-1 bg-lime/20 border border-lime/30 text-lime text-xs font-bold tracking-wider uppercase rounded-full mb-4 w-fit shadow-md">
              {service.category}
            </span>
            <h1 className="font-black text-4xl lg:text-5xl text-white max-w-4xl leading-tight drop-shadow-lg">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-bold text-2xl text-petrol mb-4">Sobre o Serviço</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">{service.longDescription}</p>

            <h2 className="font-bold text-2xl text-petrol mb-6">Como Funciona</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { step: "01", title: "Diagnóstico", desc: "Avaliação técnica do local" },
                { step: "02", title: "Execução", desc: "Operação com equipe especializada" },
                { step: "03", title: "Relatório", desc: "Documentação e laudos técnicos" },
              ].map(s => (
                <div key={s.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl font-black text-verde/20 mb-3 block">{s.step}</span>
                  <h4 className="font-bold text-lg text-petrol mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl text-petrol mb-6">O que inclui</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map(b => (
                <div key={b} className="flex items-start gap-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                  <CheckCircle size={20} className="text-verde flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700">{b}</p>
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl text-petrol mb-6">Normas e Certificações</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {["NR-20", "NR-33", "NR-35", "ISO 14001", "ANVISA"].map(badge => (
                <span key={badge} className="px-4 py-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-sm font-bold shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-bg-light border border-[#d0e4f5] rounded-2xl p-8 shadow-xl">
                <h3 className="font-bold text-xl text-petrol mb-6">Por que escolher a AMIL?</h3>
                <div className="space-y-4 mb-8">
                  {["Equipe certificada e treinada", "Frota 100% própria", "Atendimento 24h", "Documentação e laudos completos"].map(b => (
                    <div key={b} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-verde flex-shrink-0" />
                      <p className="text-sm font-medium text-slate-700">{b}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-verde text-white font-bold text-base py-4 rounded-xl hover:bg-verde/90 shadow-lg shadow-verde/30 transition-all mb-2">
                    Falar no WhatsApp
                  </a>
                  <a href="#contato" className="flex items-center justify-center w-full bg-white border border-slate-200 text-petrol font-bold text-base py-4 rounded-xl hover:bg-slate-50 transition-all">
                    Solicitar Diagnóstico
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-56 border border-slate-100">
                <img src={service.image} alt="Equipe AMIL" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-verde to-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            Precisa deste serviço? Fale com nossa equipe agora.
          </h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-800 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl">
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
