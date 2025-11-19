import { 
  Workflow, 
  Zap, 
  Cpu, 
  MessageSquare, 
  Database, 
  Lock, 
  ShoppingCart, 
  Briefcase, 
  BarChart3 
} from 'lucide-react';
import { UseCaseCategory, FAQItem, Testimonial, MethodologyStep, StatData } from './types';

export const ROI_DATA: StatData[] = [
  { name: 'Mês 1', hours: 40, tasks: 1200 },
  { name: 'Mês 2', hours: 30, tasks: 3500 },
  { name: 'Mês 3', hours: 20, tasks: 8000 },
  { name: 'Mês 4', hours: 10, tasks: 15000 },
  { name: 'Mês 5', hours: 5, tasks: 28000 },
  { name: 'Mês 6', hours: 2, tasks: 45000 }
];

export const PAIN_POINTS = [
  "Workflow roda 3 vezes, trava na 4ª sem motivo aparente",
  "Webhook não captura dados (mas você JÁ configurou tudo)",
  "Erro 401/403 em APIs que deveriam estar funcionando",
  "Dados somem entre nodes e você não sabe onde",
  "Function node te dá pesadelos (e você evita usar)",
  "Integrações que funcionavam ontem, hoje quebraram",
  "Você perdeu horas em fóruns e Stack Overflow sem solução"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Problema que eu travei 3 semanas foi resolvido em 2 dias. Tentei de tudo. Refiz o fluxo 4 vezes. O Rafael olhou, identificou o erro de lógica que eu não via, e resolveu. Agora roda perfeito.",
    author: "Lucas M.",
    role: "Head de Operações | E-commerce"
  },
  {
    quote: "Reduzi 12 horas de trabalho manual por semana. Meu fluxo de qualificação de leads estava quebrado. Ele não só consertou — otimizou. Hoje meu time comercial recebe leads prontos no Slack.",
    author: "Carla R.",
    role: "Diretora de Marketing | Agência Digital"
  },
  {
    quote: "Finalmente entendi como N8N funciona de verdade. Não foi só um 'arruma aí'. Ele explicou a lógica, me mostrou onde eu errava, e agora consigo criar fluxos sozinho. Valeu cada centavo.",
    author: "Pedro S.",
    role: "Founder | SaaS B2B"
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    title: "Diagnóstico (30 min — Grátis)",
    description: "Você me mostra o problema. Eu analiso e te digo se consigo resolver (e quanto tempo leva)."
  },
  {
    title: "Execução",
    description: "Eu entro no seu N8N, identifico a causa raiz, corrijo e testo. Você acompanha tudo."
  },
  {
    title: "Entrega + Documentação",
    description: "Fluxo funcionando + explicação do que foi feito + boas práticas para você não travar de novo."
  },
  {
    title: "Suporte Pós-Entrega",
    description: "7 dias de suporte incluído. Se quebrar (por erro meu), eu volto e corrijo sem custo."
  }
];

export const TECHNICAL_SOLUTIONS = [
  "Webhooks que não capturam dados",
  "Erros de autenticação em APIs (OAuth, Bearer Token)",
  "Workflows que travam aleatoriamente",
  "Manipulação de JSON complexos e arrays",
  "Lógica condicional quebrada (IF, Switch, Merge)",
  "Integrações com CRMs, ERPs, Google Sheets",
  "Function nodes que retornam erro",
  "Fluxos lentos que precisam de otimização",
  "Migrações de Zapier/Make para N8N"
];

export const USE_CASES: UseCaseCategory[] = [
  {
    category: "Marketing & Vendas",
    icon: BarChart3,
    items: [
      { title: "Qualificação de Leads com IA", description: "Formulário → IA analisa → Envia lead quente para CRM + notifica Slack." },
      { title: "Relatórios Automáticos", description: "Puxa dados do Ads + GA4 → Gera relatório → Envia por email." },
      { title: "Sincronização CRM ↔ Email", description: "Novo contato CRM → Adiciona em lista segmentada no ActiveCampaign." }
    ]
  },
  {
    category: "Operações & Finanças",
    icon: Briefcase,
    items: [
      { title: "Processamento de Faturas", description: "Recebe PDF por email → IA extrai dados → Envia para ERP." },
      { title: "Contratos Personalizados", description: "Formulário preenchido → Gera contrato → Envia para assinatura." },
      { title: "Monitoramento de Concorrência", description: "Scraping de preços → Alertas no Telegram quando há mudanças." }
    ]
  },
  {
    category: "Produtividade & Gestão",
    icon: Zap,
    items: [
      { title: "Onboarding Automatizado", description: "Novo cliente → Pasta Drive + Email boas-vindas + Tarefa ClickUp." },
      { title: "Centralização de Alertas", description: "Notificações (Stripe, Sentry, Analytics) em um único canal Slack." },
      { title: "Resumo de Reuniões", description: "Gravação → Transcrição IA → Resumo + Tarefas → Envia para equipe." }
    ]
  },
  {
    category: "E-commerce & Logística",
    icon: ShoppingCart,
    items: [
      { title: "Notificações WhatsApp", description: "Status de pedido atualizado → Cliente recebe mensagem automática." },
      { title: "Estoque Multi-canal", description: "Venda Shopify → Atualiza estoque ML, Magalu, B2W." },
      { title: "Extração de Pedidos", description: "Email com pedido → Extrai dados → Envia para sistema interno." }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quanto custa?",
    answer: "Depende da complexidade. Após o diagnóstico gratuito, te passo um orçamento claro. Projetos simples começam em R$ 500. Complexos podem chegar a R$ 3.000+."
  },
  {
    question: "Quanto tempo leva?",
    answer: "Problemas simples: 1-2 dias. Fluxos complexos: 1-2 semanas. Urgências: posso priorizar (com taxa adicional)."
  },
  {
    question: "E se não der certo?",
    answer: "Se eu te disser que consigo resolver e não conseguir, você não paga. Simples assim."
  },
  {
    question: "Você faz manutenção contínua?",
    answer: "Sim. Ofereço pacotes mensais de suporte (a partir de R$ 800/mês) para quem quer alguém cuidando dos fluxos 24/7."
  },
  {
    question: "Você ensina a usar N8N?",
    answer: "Sim. Tenho sessões de mentoria técnica (R$ 300/hora) onde te ensino a criar fluxos sozinho."
  },
  {
    question: "Trabalha com que ferramentas?",
    answer: "N8N + qualquer coisa que tenha API. CRMs, Google Workspace, Notion, Airtable, Stripe, WhatsApp, Telegram, WordPress, Shopify, e mais."
  }
];