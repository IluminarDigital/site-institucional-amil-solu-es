export const WHATSAPP_URL = "https://wa.me/5562986090307";

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  benefits: string[];
}

export const services: ServiceData[] = [
  {
    id: "1", number: "01", title: "Limpeza de Caixa Separadora", slug: "limpeza-caixa-separadora",
    description: "Remoção segura de resíduos oleosos e sólidos em caixas separadoras de água e óleo.",
    longDescription: "Serviço especializado na remoção de resíduos oleosos, sólidos decantados e materiais acumulados em caixas separadoras de água e óleo (SAO). Utilizamos equipamentos de sucção a vácuo de alta potência para garantir eficiência total na operation, com destinação ambientalmente correta de todos os resíduos coletados.",
    image: "/limpezacaixaseparadora.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Equipe especializada com EPIs adequados", "Sucção a vácuo de alta potência", "Destinação correta dos resíduos", "Relatório técnico completo"]
  },
  {
    id: "2", number: "02", title: "Coleta de Resíduos Sólidos", slug: "coleta-residuos-solidos",
    description: "Coleta, transporte e destinação final de resíduos sólidos industriais e comerciais.",
    longDescription: "Realizamos a coleta, transporte e destinação final de resíduos sólidos industriais e comerciais, atendendo às normas ambientais vigentes. Nossa frota própria garante agilidade e rastreabilidade em toda a cadeia de gestão de resíduos.",
    image: "/coletadereisudossolidos.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Frota própria rastreada", "Conformidade com normas CONAMA", "Certificado de destinação final", "Atendimento programado ou emergencial"]
  },
  {
    id: "3", number: "03", title: "Limpeza de Tanque de Combustível", slug: "limpeza-tanque-combustivel",
    description: "Limpeza técnica de tanques subterrâneos e aéreos conforme NR-20.",
    longDescription: "Serviço de limpeza técnica de tanques de combustível subterrâneos e aéreos, realizado em conformidade com a NR-20, NR-35 e NR-33. Inclui desgaseificação, remoção de borra, jateamento interno, garantindo segurança operacional e ambiental.",
    image: "/limpezadetanquedecombustivel.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Conformidade com NR-20", "Desgaseificação segura", "Equipe certificada", "Laudo técnico incluso"]
  },
  {
    id: "4", number: "04", title: "Limpeza de Lagoa Industrial", slug: "limpeza-lagoa-industrial",
    description: "Dragagem e limpeza de lagoas de tratamento e decantação industrial.",
    longDescription: "Realizamos limpeza de lagoas de tratamento, decantação e estabilização industrial. Utilizamos equipamentos de sucção de grande porte para remoção de lodo e sedimentos, com posterior destinação ambiental adequada.",
    image: "/limpezadelagoaindustrial.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Equipamentos de grande porte", "Remoção completa de sedimentos", "Destinação ambiental adequada", "Mínima interferência operacional"]
  },
  {
    id: "5", number: "05", title: "Atendimento Emergencial", slug: "atendimento-emergencial",
    description: "Atendimento imediato a acidentes ambientais com equipe 24h.",
    longDescription: "Serviço de resposta rápida a emergências ambientais, incluindo derramamentos, vazamentos e contaminações. Contamos com equipe de plantão 24h e frota equipada para mobilização imediata em qualquer cenário de crise ambiental.",
    image: "/respostasaemergenciasambientais.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Plantão 24 horas", "Mobilização imediata", "Equipe treinada em emergências", "Relatório ambiental completo"]
  },
  {
    id: "6", number: "06", title: "Coleta, Transporte e Destinação de Resíduos Líquidos e Sólidos", slug: "coleta-transporte-destinacao-residuos",
    description: "Gestão completa de resíduos com rastreabilidade e documentação.",
    longDescription: "Gerenciamento completo da cadeia de resíduos: coleta no local de geração, transporte seguro com rastreamento por GPS e destinação final licenciada. Emitimos toda a documentação legal necessária.",
    image: "/coleta-transporte-destinacao.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Rastreamento por GPS", "Documentação legal completa", "Unidades de destinação licenciadas", "Gestão integrada de resíduos"]
  },
  {
    id: "7", number: "07", title: "Limpeza de Equalizador", slug: "limpeza-equalizador",
    description: "Limpeza e manutenção de tanques equalizadores de estações de tratamento.",
    longDescription: "Serviço especializado de limpeza de tanques equalizadores em estações de tratamento de efluentes. Garantimos a remoção completa de sedimentos e a destinação correta dos resíduos.",
    image: "/limpezadeequalizador.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Restauração da capacidade operacional", "Remoção completa de sedimentos", "Equipe técnica especializada", "Mínimo tempo de parada"]
  },
  {
    id: "8", number: "08", title: "Limpeza de Caldeiras, Trocadores de Calor", slug: "limpeza-caldeiras-trocadores",
    description: "Hidrojateamento de alta pressão em equipamentos industriais térmicos.",
    longDescription: "Limpeza técnica de caldeiras, evaporadores e trocadores de calor utilizando hidrojateamento de alta pressão. Removemos incrustações, depósitos minerais e resíduos que comprometem a eficiência energética dos equipamentos.",
    image: "/limpezadecaldeiraseevaporadores.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Hidrojato de alta pressão", "Melhora na eficiência energética", "Extensão da vida útil dos equipamentos", "Operação sem produtos químicos agressivos"]
  },
  {
    id: "9", number: "09", title: "Limpeza de Superfície", slug: "limpeza-superficie",
    description: "Hidrojateamento para pisos, paredes, estruturas e áreas externas.",
    longDescription: "Serviço de limpeza de superfícies industriais com hidrojateamento de alta e ultra-alta pressão. Ideal para remoção de resíduos aderidos em pisos, paredes, estruturas metálicas e áreas de produção.",
    image: "/Limpeza%20de%20Superf%C3%ADcies%20Industriais.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Hidrojato de alta e ultra-alta pressão", "Remoção de resíduos aderidos", "Aplicação em diversas superfícies", "Sem uso de agentes químicos"]
  },
  {
    id: "10", number: "10", title: "Limpeza em Espaço Confinado", slug: "espaco-confinado",
    description: "Operações seguras em ambientes confinados conforme NR-33.",
    longDescription: "Execução de limpeza e manutenção em espaços confinados (tanques, silos, dutos, galerias) em total conformidade com a NR-33. Equipe certificada, monitoramento atmosférico contínuo e plano de resgate.",
    image: "/public/limpezaemespacoconfinado.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Conformidade com NR-33", "Monitoramento atmosférico contínuo", "Plano de resgate estruturado", "Equipe certificada"]
  },
  {
    id: "15", number: "11", title: "Limpeza de Ultra Pressão", slug: "limpeza-ultra-pressao",
    description: "Limpeza industrial com equipamentos de ultra alta pressão para remoção de incrustações em superfícies e tubulações.",
    longDescription: "Utilizamos tecnologia de ultra alta pressão (UAP) para remover as incrustações mais severas em ambientes industriais. Ideal para limpeza de trocadores de calor, reatores, tanques e tubulações com resíduos petrificados ou altamente aderidos, sem danificar a estrutura base.",
    image: "/limpezaultrapressao.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Ultra alta pressão", "Remoção de incrustações severas", "Zero uso de abrasivos químicos", "Máxima eficiência em grandes equipamentos"]
  },
  {
    id: "16", number: "12", title: "Desobstrução de Tubulações", slug: "desobstrucao-tubulacoes",
    description: "Desobstrução de tubulações industriais com alta pressão e sucção a vácuo, garantindo o fluxo adequado.",
    longDescription: "Soluções completas para desobstrução de redes de esgoto, galerias pluviais e tubulações de processos industriais. Combinamos hidrojateamento de alta pressão para quebra de obstruções e sucção a vácuo para remoção imediata dos detritos.",
    image: "/desobstrucaodetubulacoes.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Alta pressão e sucção combinadas", "Limpeza preventiva e corretiva", "Restabelecimento imediato do fluxo", "Equipamentos adaptáveis a diversos diâmetros"]
  },
  {
    id: "13", number: "13", title: "Afastamento de Pombos", slug: "afastamento-pombos",
    description: "Instalação de barreiras físicas e manejo humanitário de pombos.",
    longDescription: "Serviço de afastamento de pombos com instalação de barreiras físicas (espículas, telas, redes) e manejo humanitário. Protegemos fachadas, telhados e áreas internas contra danos e riscos sanitários causados por pombos.",
    image: "/afastamento%20de%20pombos.jpeg",
    category: "CONTROLE DE PRAGAS",
    benefits: ["Manejo humanitário", "Barreiras físicas duráveis", "Proteção de fachadas e telhados", "Prevenção de riscos sanitários"]
  },
];

export const segments = [
  {
    name: "Indústrias em Geral",
    description: "Atendemos indústrias de todos os portes with soluções completas de limpeza técnica, gestão e destinação de resíduos industriais.",
    services: ["Limpeza de caixa separadora", "Coleta e destinação de resíduos", "Limpeza em espaço confinado", "Limpeza de superfície"],
    icon: "Factory"
  },
  {
    name: "Indústrias Químicas, Petroquímicas e Óleo & Gás",
    description: "Operações especializadas com total conformidade às normas NR-20, NR-33 e NR-35 para ambientes de alto risco.",
    services: ["Limpeza de tanques de combustível", "Atendimento Emergencial", "Limpeza de caldeiras, trocadores", "Espaço confinado"],
    icon: "FlaskConical"
  },
  {
    name: "Alimentos, Bebidas, Higiene e Farmacêuticas",
    description: "Higienização e controle sanitário rigoroso para garantir a segurança alimentar e conformidade com a ANVISA.",
    services: ["Afastamento de pombos"],
    icon: "Apple"
  },
  {
    name: "Mineração, Siderurgia e Metalurgia",
    description: "Soluções robustas para ambientes de alta complexidade com resíduos pesados e processos industriais intensivos.",
    services: ["Limpeza de lagoa industrial", "Coleta de resíduos sólidos", "Limpeza de superfície", "Limpeza de caldeiras, trocadores"],
    icon: "Mountain"
  },
  {
    name: "Papel, Celulose e Florestal",
    description: "Gestão ambiental e limpeza técnica para plantas industriais do setor florestal e de papel.",
    services: ["Coleta e destinação de resíduos", "Limpeza de equalizador", "Limpeza de lagoa", "Atendimento Emergencial"],
    icon: "TreePine"
  },
  {
    name: "Logística, Transportes e Armazenagem",
    description: "Manutenção e limpeza de pátios, frotas, tanques e áreas de armazenagem com rastreabilidade total.",
    services: ["Limpeza de caixa separadora", "Coleta e transporte", "Limpeza de superfície"],
    icon: "Truck"
  },
  {
    name: "Construção Civil e Infraestrutura",
    description: "Gestão de resíduos da construção e limpeza técnica de obras, garantindo conformidade ambiental.",
    services: ["Coleta de resíduos sólidos", "Limpeza de superfície", "Limpeza em espaço confinado"],
    icon: "Building2"
  },
  {
    name: "Agronegócio",
    description: "Proteção ambiental e gestão de resíduos para o setor rural e agroindustrial com responsabilidade sustentável.",
    services: ["Coleta e destinação", "Afastamento de pombos"],
    icon: "Wheat"
  },
  {
    name: "Comércio, Condomínios e Serviços",
    description: "Soluções práticas e ágeis para comércio, shoppings, condomínios residenciais e empresariais.",
    services: ["Afastamento de pombos"],
    icon: "Store"
  },
  {
    name: "Seguradoras e Atendimento Emergencial",
    description: "Resposta rápida a sinistros ambientais com equipe 24h, laudos técnicos e total suporte documental.",
    services: ["Atendimento Emergencial", "Coleta de resíduos", "Limpeza de superfície", "Laudos e documentação"],
    icon: "ShieldCheck"
  }
];
