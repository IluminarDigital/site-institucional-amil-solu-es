import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. Telefone: ${form.telefone}. Tenho interesse no serviço: ${form.servico}. ${form.mensagem}`;
    window.open(`https://api.whatsapp.com/send/?phone=5562986090307&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="bg-petrol py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2">FALE CONOSCO</p>
          <h2 className="font-extrabold text-2xl md:text-[32px] text-white mb-6">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "nome", label: "Nome", type: "text" },
              { key: "empresa", label: "Empresa", type: "text" },
              { key: "telefone", label: "Telefone", type: "tel" },
              { key: "email", label: "E-mail", type: "email" },
              { key: "servico", label: "Serviço de Interesse", type: "text" },
            ].map(f => (
              <input
                key={f.key}
                type={f.type}
                placeholder={f.label}
                value={form[f.key as keyof typeof form]}
                onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                className="w-full bg-petrol-card border border-petrol-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#6a9abf] focus:outline-none focus:ring-2 focus:ring-azul"
              />
            ))}
            <textarea
              placeholder="Mensagem"
              rows={4}
              value={form.mensagem}
              onChange={e => setForm(p => ({ ...p, mensagem: e.target.value }))}
              className="w-full bg-petrol-card border border-petrol-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#6a9abf] focus:outline-none focus:ring-2 focus:ring-azul resize-none"
            />
            <button type="submit" className="w-full bg-lime text-[#0a1a04] font-bold text-sm py-3.5 rounded-lg hover:scale-[1.02] transition-transform">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {[
            { icon: Phone, text: "(62) 3291-1000" },
            { icon: Mail, text: "contato@amilambiental.com.br" },
            { icon: MapPin, text: "R. São Fernando, 303 - Quadra 92, Lote 8 - Ipiranga, Goiânia - GO" },
          ].map(item => (
            <div key={item.text} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-petrol-card flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-azul" />
              </div>
              <p className="text-sm text-white/80 pt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
