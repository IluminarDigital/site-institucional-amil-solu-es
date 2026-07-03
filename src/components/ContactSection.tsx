import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook, ChevronDown } from "lucide-react";

const serviceOptions = [
  "Limpeza de Caixa Separadora",
  "Coleta de Resíduos Sólidos",
  "Limpeza de Tanque de Combustível",
  "Limpeza de Lagoa Industrial",
  "Atendimento Emergencial",
  "Coleta, Transporte e Destinação de Resíduos Líquidos e Sólidos",
  "Limpeza de Equalizador",
  "Limpeza de Caldeiras, Trocadores de Calor",
  "Limpeza de Superfície",
  "Limpeza em Espaço Confinado",
  "Limpeza de Ultra Pressão",
  "Desobstrução de Tubulações",
  "Vídeo Inspeção",
  "Afastamento de Pombos",
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/amil.ambiental/",  label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/amil-ambiental/?viewAsMember=true", label: "LinkedIn",  bg: "#0077B5" },
  { icon: Facebook,  href: "https://facebook.com/amilambiental",         label: "Facebook",  bg: "#1877F2" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", email: "", servico: "", mensagem: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3f737688-bc03-4eee-a933-aa3c9b6bcded",
          subject: `Novo contato via site - ${form.nome} (${form.empresa})`,
          from_name: form.nome,
          name: form.nome,
          email: form.email,
          empresa: form.empresa,
          telefone: form.telefone,
          servico: form.servico,
          message: form.mensagem,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ nome: "", empresa: "", telefone: "", email: "", servico: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (key: string) =>
    `w-full bg-petrol-card border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white focus:outline-none transition-all duration-300 ${
      focused === key ? "border-lime shadow-[0_0_12px_rgba(141,198,63,0.3)]" : "border-petrol-border"
    }`;

  return (
    <section id="contato" className="bg-petrol py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* Formulário */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold tracking-[3px] uppercase text-lime mb-2 text-center">FALE CONOSCO</p>
          <h2 className="font-extrabold text-2xl md:text-[32px] text-white mb-6 text-center">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {[
              { key: "nome", label: "Nome", type: "text" },
              { key: "empresa", label: "Empresa", type: "text" },
              { key: "telefone", label: "Telefone", type: "tel" },
              { key: "email", label: "E-mail", type: "email" },
            ].map(f => (
              <div key={f.key} className="relative">
                <motion.label
                  animate={{ y: focused === f.key || form[f.key as keyof typeof form] ? -24 : 0, scale: focused === f.key || form[f.key as keyof typeof form] ? 0.85 : 1 }}
                  className="absolute left-4 top-3 text-sm text-white pointer-events-none origin-left"
                >
                  {f.label}
                </motion.label>
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  onFocus={() => setFocused(f.key)}
                  onBlur={() => setFocused(null)}
                  className={inputClass(f.key)}
                  placeholder={focused === f.key ? "" : f.label}
                />
              </div>
            ))}

            {/* Dropdown de serviços */}
            <div className="relative">
              <select
                value={form.servico}
                onChange={e => setForm(p => ({ ...p, servico: e.target.value }))}
                onFocus={() => setFocused("servico")}
                onBlur={() => setFocused(null)}
                className={`${inputClass("servico")} appearance-none cursor-pointer`}
              >
                <option value="" disabled className="bg-petrol-card">Serviço de Interesse</option>
                {serviceOptions.map(s => (
                  <option key={s} value={s} className="bg-petrol-card text-white">{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
            </div>

            <div className="relative">
              <textarea
                rows={4}
                value={form.mensagem}
                onChange={e => setForm(p => ({ ...p, mensagem: e.target.value }))}
                onFocus={() => setFocused("mensagem")}
                onBlur={() => setFocused(null)}
                className={`${inputClass("mensagem")} resize-none`}
                placeholder="Mensagem"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-lime text-[#0a1a04] font-bold text-sm py-3.5 rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
            </button>

            {status === "success" && (
              <p className="text-center text-lime text-sm font-medium">✅ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm font-medium">❌ Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</p>
            )}
          </form>
        </motion.div>

        {/* Dados de contato + mapa */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start gap-5"
        >
          {[
            { icon: Phone,  text: "(62) 3291-1000",                                                    href: "tel:+556232911000" },
            { icon: Mail,   text: "comercial@amilgoiania.com.br",                                      href: "mailto:comercial@amilgoiania.com.br" },
            { icon: MapPin, text: "R. São Fernando, 303 - Quadra 92, Lote 8 - Ipiranga, Goiânia - GO", href: "https://www.google.com/maps/search/R.+S%C3%A3o+Fernando,+303+Quadra+92+Lote+8+Ipiranga+Goi%C3%A2nia+GO" },
          ].map(item => (
            <div key={item.text} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-verde/20 border border-verde/40 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-lime" />
              </div>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-white/80 pt-2 hover:text-verde transition-colors"
              >
                {item.text}
              </a>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-verde/20 border border-verde/40 flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-lime" />
            </div>
            <div className="pt-1.5">
              <p className="text-sm text-white/80">Seg – Dom: 08h às 18h</p>
              <p className="text-sm text-lime font-medium">Plantão emergencial: 24h / 7 dias</p>
            </div>
          </div>

          <div className="flex gap-3 mt-1">
            {socials.map(({ icon: Icon, href, label, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                style={{ background: bg }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-2 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4533.997910305937!2d-49.3306799!3d-16.6621342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef5ae1127a47d%3A0x12c6fd9e3dbab16e!2sR.%20S%C3%A3o%20Fernando%2C%20303%20-%20Quadra%2092%20Lote%208%20-%20Ipiranga%2C%20Goi%C3%A2nia%20-%20GO%2C%2074453-310!5e1!3m2!1spt-BR!2sbr!4v1780068023709!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              title="Localização AMIL Soluções Ambientais"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}