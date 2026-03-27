export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562986090307&text=Oi%2C+eu+vim+pelo+site+do+grupo+amil+ambiental%2C+quero+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0";

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
    longDescription: "Serviço especializado na remoção de resíduos oleosos, sólidos decantados e materiais acumulados em caixas separadoras de água e óleo (SAO). Utilizamos equipamentos de sucção a vácuo de alta potência para garantir eficiência total na operação, com destinação ambientalmente correta de todos os resíduos coletados.",
    image: "/Limpeza%20de%20Caixa%20Separadora.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Equipe especializada com EPIs adequados", "Sucção a vácuo de alta potência", "Destinação correta dos resíduos", "Relatório técnico completo"]
  },
  {
    id: "2", number: "02", title: "Coleta de Resíduos Sólidos", slug: "coleta-residuos-solidos",
    description: "Coleta, transporte e destinação final de resíduos sólidos industriais e comerciais.",
    longDescription: "Realizamos a coleta, transporte e destinação final de resíduos sólidos industriais e comerciais, atendendo às normas ambientais vigentes. Nossa frota própria garante agilidade e rastreabilidade em toda a cadeia de gestão de resíduos.",
    image: "/Coleta%20de%20Res%C3%ADduos%20S%C3%B3lidos.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Frota própria rastreada", "Conformidade com normas CONAMA", "Certificado de destinação final", "Atendimento programado ou emergencial"]
  },
  {
    id: "3", number: "03", title: "Limpeza de Tanque de Combustível", slug: "limpeza-tanque-combustivel",
    description: "Limpeza técnica de tanques subterrâneos e aéreos conforme NR-20.",
    longDescription: "Serviço de limpeza técnica de tanques de combustível subterrâneos e aéreos, realizado em conformidade com a NR-20. Inclui desgaseificação, remoção de borra, lavagem interna e inspeção visual, garantindo segurança operacional e ambiental.",
    image: "/Limpeza%20de%20Tanque%20de%20Combust%C3%ADvel.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Conformidade com NR-20", "Desgaseificação segura", "Equipe certificada", "Laudo técnico incluso"]
  },
  {
    id: "4", number: "04", title: "Limpeza de Lagoa Industrial", slug: "limpeza-lagoa-industrial",
    description: "Dragagem e limpeza de lagoas de tratamento e decantação industrial.",
    longDescription: "Realizamos a dragagem e limpeza de lagoas de tratamento, decantação e estabilização industrial. Utilizamos equipamentos de sucção de grande porte para remoção de lodo e sedimentos, com posterior destinação ambiental adequada.",
    image: "/limpeza%20tanque.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Equipamentos de grande porte", "Remoção completa de sedimentos", "Destinação ambiental adequada", "Mínima interferência operacional"]
  },
  {
    id: "5", number: "05", title: "Respostas a Emergências Ambientais", slug: "emergencias-ambientais",
    description: "Atendimento imediato a acidentes ambientais com equipe 24h.",
    longDescription: "Serviço de resposta rápida a emergências ambientais, incluindo derramamentos, vazamentos e contaminações. Contamos com equipe de plantão 24h e frota equipada para mobilização imediata em qualquer cenário de crise ambiental.",
    image: "/acidentes%20ambientais.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Plantão 24 horas", "Mobilização imediata", "Equipe treinada em emergências", "Relatório ambiental completo"]
  },
  {
    id: "6", number: "06", title: "Coleta, Transporte e Destinação", slug: "coleta-transporte-destinacao",
    description: "Gestão completa de resíduos com rastreabilidade e documentação.",
    longDescription: "Gerenciamento completo da cadeia de resíduos: coleta no local de geração, transporte seguro com rastreamento por GPS e destinação final em unidades licenciadas. Emitimos toda a documentação legal necessária.",
    image: "/coleta-transporte-destinacao.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Rastreamento por GPS", "Documentação legal completa", "Unidades de destinação licenciadas", "Gestão integrada de resíduos"]
  },
  {
    id: "7", number: "07", title: "Limpeza de Equalizador", slug: "limpeza-equalizador",
    description: "Limpeza e manutenção de tanques equalizadores de estações de tratamento.",
    longDescription: "Serviço especializado de limpeza e manutenção de tanques equalizadores em estações de tratamento de efluentes. Garantimos a remoção completa de sedimentos e a restauração da capacidade operacional do sistema.",
    image: "/Limpeza%20de%20Equalizador.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Restauração da capacidade operacional", "Remoção completa de sedimentos", "Equipe técnica especializada", "Mínimo tempo de parada"]
  },
  {
    id: "8", number: "08", title: "Limpeza de Caldeiras e Evaporadores", slug: "limpeza-caldeiras",
    description: "Hidrojateamento de alta pressão em equipamentos industriais térmicos.",
    longDescription: "Limpeza técnica de caldeiras, evaporadores e trocadores de calor utilizando hidrojateamento de alta pressão. Removemos incrustações, depósitos minerais e resíduos que comprometem a eficiência energética dos equipamentos.",
    image: "/Limpeza%20de%20Caldeiras%20e%20Evaporadores.jpeg",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Hidrojato de alta pressão", "Melhora na eficiência energética", "Extensão da vida útil dos equipamentos", "Operação sem produtos químicos agressivos"]
  },
  {
    id: "9", number: "09", title: "Limpeza de Superfícies Industriais", slug: "limpeza-superficies",
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
    image: "/Limpeza%20em%20Espa%C3%A7o%20Confinado.png",
    category: "AMBIENTAL E INDUSTRIAL",
    benefits: ["Conformidade com NR-33", "Monitoramento atmosférico contínuo", "Plano de resgate estruturado", "Equipe certificada"]
  },
  {
    id: "11", number: "11", title: "Desentupimento Residencial e Comercial", slug: "desentupimento",
    description: "Desentupimento com equipamentos rotativos e hidrojato.",
    longDescription: "Serviço de desentupimento para residências, comércios e indústrias, utilizando equipamentos rotativos e hidrojateamento. Atendemos tubulações, ralos, caixas de gordura, esgotos e redes pluviais com rapidez e eficiência.",
    image: "/Desentupimento%20Residencial%20e%20Comercial.png",
    category: "DESENTUPIMENTO E HIDROJATEAMENTO",
    benefits: ["Equipamentos rotativos e hidrojato", "Atendimento residencial e comercial", "Sem quebrar paredes ou pisos", "Garantia do serviço"]
  },
  {
    id: "12", number: "12", title: "Limpeza de Caixa d'Água", slug: "limpeza-caixa-dagua",
    description: "Higienização e desinfecção de reservatórios conforme normas sanitárias.",
    longDescription: "Limpeza, higienização e desinfecção de caixas d'água e reservatórios, seguindo as normas sanitárias vigentes. Garantimos água potável e livre de contaminações para sua residência ou empresa.",
    image: "/limpeza-caixa-dagua.png",
    category: "DESENTUPIMENTO E HIDROJATEAMENTO",
    benefits: ["Conforme normas sanitárias", "Desinfecção completa", "Certificado de limpeza", "Agendamento flexível"]
  },
  {
    id: "13", number: "13", title: "Afastamento de Pombos", slug: "afastamento-pombos",
    description: "Instalação de barreiras físicas e manejo humanitário de pombos.",
    longDescription: "Serviço de afastamento de pombos com instalação de barreiras físicas (espículas, telas, redes) e manejo humanitário. Protegemos fachadas, telhados e áreas internas contra danos e riscos sanitários causados por pombos.",
    image: "/afastamento%20de%20pombos.jpeg",
    category: "CONTROLE DE PRAGAS",
    benefits: ["Manejo humanitário", "Barreiras físicas duráveis", "Proteção de fachadas e telhados", "Prevenção de riscos sanitários"]
  },
  {
    id: "14", number: "14", title: "Dedetização Geral", slug: "dedetizacao-geral",
    description: "Controle integrado de pragas urbanas com produtos autorizados.",
    longDescription: "Controle integrado de pragas urbanas (baratas, formigas, escorpiões, ratos, mosquitos) com produtos autorizados pela ANVISA. Atendemos residências, comércios, indústrias e condomínios com planos de manutenção preventiva.",
    image: "/Dedetiza%C3%A7%C3%A3o%20Geral.png",
    category: "CONTROLE DE PRAGAS",
    benefits: ["Produtos autorizados ANVISA", "Controle integrado", "Planos de manutenção preventiva", "Atendimento em todos os segmentos"]
  },
];

export const segments = [
  {
    name: "Indústrias em Geral",
    description: "Atendemos indústrias de todos os portes com soluções completas de limpeza técnica, gestão e destinação de resíduos industriais.",
    services: ["Limpeza de caixa separadora", "Coleta e destinação de resíduos", "Limpeza em espaço confinado", "Limpeza de superfícies"],
    icon: "Factory"
  },
  {
    name: "Indústrias Químicas, Petroquímicas e Óleo & Gás",
    description: "Operações especializadas com total conformidade às normas NR-20, NR-33 e NR-35 para ambientes de alto risco.",
    services: ["Limpeza de tanques de combustível", "Respostas a emergências", "Limpeza de caldeiras", "Espaço confinado"],
    icon: "FlaskConical"
  },
  {
    name: "Alimentos, Bebidas, Higiene e Farmacêuticas",
    description: "Higienização e controle sanitário rigoroso para garantir a segurança alimentar e conformidade com a ANVISA.",
    services: ["Limpeza de caixa d'água", "Dedetização", "Desintupimento", "Afastamento de pombos"],
    icon: "Apple"
  },
  {
    name: "Mineração, Siderurgia e Metalurgia",
    description: "Soluções robustas para ambientes de alta complexidade com resíduos pesados e processos industriais intensivos.",
    services: ["Limpeza de lagoa industrial", "Coleta de resíduos sólidos", "Limpeza de superfícies", "Limpeza de caldeiras"],
    icon: "Mountain"
  },
  {
    name: "Papel, Celulose e Florestal",
    description: "Gestão ambiental e limpeza técnica para plantas industriais do setor florestal e de papel.",
    services: ["Coleta e destinação de resíduos", "Limpeza de equalizador", "Limpeza de lagoa", "Respostas a emergências"],
    icon: "TreePine"
  },
  {
    name: "Logística, Transportes e Armazenagem",
    description: "Manutenção e limpeza de pátios, frotas, tanques e áreas de armazenagem com rastreabilidade total.",
    services: ["Limpeza de caixa separadora", "Coleta e transporte", "Desentupimento", "Limpeza de superfícies"],
    icon: "Truck"
  },
  {
    name: "Construção Civil e Infraestrutura",
    description: "Gestão de resíduos da construção e limpeza técnica de obras, garantindo conformidade ambiental.",
    services: ["Coleta de resíduos sólidos", "Limpeza de superfícies", "Desentupimento", "Limpeza em espaço confinado"],
    icon: "Building2"
  },
  {
    name: "Agronegócio",
    description: "Proteção ambiental e gestão de resíduos para o setor rural e agroindustrial com responsabilidade sustentável.",
    services: ["Coleta e destinação", "Dedetização", "Afastamento de pombos", "Limpeza de caixa d'água"],
    icon: "Wheat"
  },
  {
    name: "Comércio, Condomínios e Serviços",
    description: "Soluções práticas e ágeis para comércio, shoppings, condomínios residenciais e empresariais.",
    services: ["Desentupimento", "Limpeza de caixa d'água", "Dedetização", "Afastamento de pombos"],
    icon: "Store"
  },
  {
    name: "Seguradoras e Atendimento Emergencial",
    description: "Resposta rápida a sinistros ambientais com equipe 24h, laudos técnicos e total suporte documental.",
    services: ["Respostas a emergências", "Coleta de resíduos", "Limpeza de superfícies", "Laudos e documentação"],
    icon: "ShieldCheck"
  }
];
