import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Factory, ShieldCheck } from "lucide-react";
import { segments, services, WHATSAPP_URL } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getImageUrl } from "@/lib/utils";

export default function SegmentPage() {
  const { slug } = useParams();
  // slug = "industrias-em-geral"
  const segment = segments.find(
    s => s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug
  );

  if (!segment) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-petrol">Segmento não encontrado</h1>
          <Link to="/" className="text-azul mt-4 inline-block">Voltar ao início</Link>
        </div>
        <Footer />
      </>
    );
  }

  // Find actual service objects matching the strings loosely
  const relatedServices = segment.services.map(srvName => {
    const match = services.find(s => {
      const srvWords = srvName.toLowerCase().split(' ').filter(w => w.length > 3);
      const title = s.title.toLowerCase();
      // Match if at least one significant word matches
      return srvWords.some(w => title.includes(w));
    });
    return {
      title: srvName,
      slug: match ? `/servicos/${match.slug}` : "/#servicos",
    };
  });

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div className="relative h-72 lg:h-96 w-full flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${getImageUrl("/hero-bg.jpg")}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-petrol-dark/95 via-teal-900/90 to-verde/80" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <Link to="/#segmentos" className="inline-flex items-center gap-2 text-sm text-teal-100 hover:text-white transition-colors mb-6">
              <ArrowLeft size={16} /> Voltar para Segmentos
            </Link>
            <br/>
            <span className="inline-block px-3 py-1 bg-lime/20 border border-lime/30 text-lime text-xs font-bold tracking-wider uppercase rounded-full mb-4 shadow-md">
              Segmento
            </span>
            <h1 className="font-black text-4xl lg:text-5xl text-white max-w-4xl leading-tight drop-shadow-lg mb-4">
              {segment.name}
            </h1>
            <p className="text-lg text-teal-50 max-w-2xl leading-relaxed">
              {segment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Services Grid */}
          <div className="lg:col-span-2">
            <h2 className="font-bold text-2xl text-petrol mb-8">Serviços para este segmento</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {relatedServices.map((srv, idx) => (
                <Link key={idx} to={srv.slug} className="group block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <Factory className="text-teal-600 w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-petrol mb-2 group-hover:text-teal-700 transition-colors">{srv.title}</h3>
                  <span className="text-sm font-semibold text-teal-600 inline-flex items-center">
                    Saiba mais <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-bg-light border border-[#d0e4f5] rounded-2xl p-8 shadow-xl">
                <h3 className="font-bold text-xl text-petrol mb-6">Por que escolher a AMIL?</h3>
                <div className="space-y-4 mb-8">
                  {["Equipe certificada e treinada", "Frota 100% própria", "Atendimento 24h", "Documentação e laudos completos"].map(b => (
                    <div key={b} className="flex items-center gap-3">
                      <ShieldCheck size={20} className="text-verde flex-shrink-0" />
                      <p className="text-sm font-medium text-slate-700">{b}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-verde text-white font-bold text-base py-4 rounded-xl hover:bg-verde/90 shadow-lg shadow-verde/30 transition-all mb-2">
                    Solicitar Atendimento
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-white border border-slate-200 text-petrol font-bold text-base py-4 rounded-xl hover:bg-slate-50 transition-all">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-verde to-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            Atendemos este segmento em todo o Brasil.
          </h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-800 font-extrabold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl">
            Fale com um especialista
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
