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
      <section className="relative pt-20 bg-petrol">
        <div className="relative">
          <img src={service.image} alt={service.title} className="w-full h-64 md:h-80 object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-10">
            <Link to="/#servicos" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-4">
              <ArrowLeft size={16} /> Voltar para Serviços
            </Link>
            <span className="text-xs font-semibold tracking-wider uppercase text-lime mb-2">{service.category}</span>
            <h1 className="font-extrabold text-3xl md:text-4xl text-white">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-bold text-xl text-petrol mb-4">Sobre o Serviço</h2>
            <p className="text-sm text-[#556] leading-[1.85] mb-8">{service.longDescription}</p>

            <h3 className="font-bold text-lg text-petrol mb-4">O que inclui</h3>
            <div className="space-y-3">
              {service.benefits.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-verde flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#556]">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-bg-light border border-[#d0e4f5] rounded-xl p-6">
              <h3 className="font-bold text-base text-petrol mb-4">Por que escolher a AMIL?</h3>
              <div className="space-y-3 mb-6">
                {["Equipe certificada e treinada", "Frota 100% própria", "Atendimento 24h", "Documentação e laudos completos"].map(b => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-verde flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[#556]">{b}</p>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-lime text-[#0a1a04] font-bold text-sm text-center py-3 rounded-lg hover:scale-[1.02] transition-transform">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
