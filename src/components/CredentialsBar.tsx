import { Award, Truck, Clock, MapPin } from "lucide-react";

const items = [
  { text: "+10 anos de experiência", icon: Award },
  { text: "Frota Própria", icon: Truck },
  { text: "Atendimento 24h", icon: Clock },
  { text: "Atuação Regional e Interestadual", icon: MapPin },
];

export default function CredentialsBar() {
  return (
    <section className="bg-bg-light py-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center gap-4 lg:gap-0">
        {items.map((item, i) => (
          <div key={item.text} className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 px-2 lg:px-8">
              <item.icon className="w-5 h-5 text-azul flex-shrink-0 mb-1 sm:mb-0" />
              <span className="font-semibold text-xs lg:text-base text-slate-700 whitespace-normal sm:whitespace-nowrap">{item.text}</span>
            </div>
            {i !== items.length - 1 && (
              <div className="hidden lg:block w-px h-5 bg-[#c0d8ee]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
