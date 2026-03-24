const items = ["+10 anos de experiência", "Frota Própria", "Atendimento 24h", "Atuação Regional e Interestadual"];

export default function CredentialsBar() {
  return (
    <section className="bg-bg-light py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 md:gap-0 md:divide-x divide-[#c0d8ee]">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2 px-4 md:px-8">
            <span className="w-2 h-2 rounded-full bg-verde flex-shrink-0" />
            <span className="font-semibold text-sm text-[#1a3a5c] whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
