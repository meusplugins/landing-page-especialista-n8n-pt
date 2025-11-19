import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle,
  Terminal,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Check
} from 'lucide-react';
import NodeBackground from './components/NodeBackground';
import GeminiChat from './components/GeminiChat';
import { 
  PAIN_POINTS, 
  TESTIMONIALS, 
  METHODOLOGY_STEPS, 
  TECHNICAL_SOLUTIONS, 
  USE_CASES, 
  FAQS 
} from './constants';

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-n8n-dark relative overflow-x-hidden text-gray-200 font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-n8n-dark/90 backdrop-blur-md border-b border-n8n-border z-40 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-br from-n8n-primary to-n8n-secondary rounded-lg flex items-center justify-center transform rotate-3 shadow-lg shadow-n8n-primary/20">
              <span className="font-bold text-white text-lg">n</span>
           </div>
           <span className="font-bold text-xl tracking-tight text-white">Rafael<span className="text-n8n-primary">.n8n</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#problems" className="hover:text-white transition-colors">Problemas</a>
          <a href="#methodology" className="hover:text-white transition-colors">Como Trabalho</a>
          <a href="#solutions" className="hover:text-white transition-colors">Soluções</a>
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
        </div>
        <a href="#contact" className="bg-white text-n8n-dark px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors shadow-md">
          Diagnóstico Grátis
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 md:px-12 border-b border-n8n-border overflow-hidden">
        <NodeBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-n8n-panel border border-n8n-border text-xs font-medium text-n8n-primary mb-8 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-n8n-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-n8n-primary"></span>
            </span>
            Especialista N8N — Vagas limitadas para este mês
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Destravo Seus Fluxos<br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-n8n-primary to-n8n-secondary">Em Até 48h.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white font-medium mb-6">
            Seu workflow quebrou. Eu conserto.
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conexões que falham. Erros que você não entende. Automações pela metade.
            Sou <strong>Rafael</strong> — Especialista N8N com 15 anos de TI. Não uso templates. 
            Eu analiso, corrijo e otimizo seus fluxos para rodarem de verdade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a href="#contact" className="h-14 px-8 rounded-lg bg-n8n-primary hover:bg-red-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-n8n-primary/40 hover:-translate-y-1">
               Quero resolver meu problema agora <ArrowRight size={20} />
             </a>
             <p className="text-sm text-gray-500 mt-2 sm:mt-0">
               <span className="text-n8n-primary">●</span> Diagnóstico de 30min Gratuito
             </p>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section id="problems" className="py-20 px-6 md:px-12 bg-n8n-panel/30 border-b border-n8n-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Seu Fluxo Está Assim?</h2>
              <p className="text-n8n-primary font-medium mb-8">Marque o que você já enfrentou:</p>
              
              <div className="space-y-4">
                {PAIN_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-n8n-panel transition-colors cursor-default group">
                    <div className="mt-1 min-w-[20px] h-5 border-2 border-gray-600 rounded bg-n8n-dark group-hover:border-n8n-primary flex items-center justify-center transition-colors">
                      <Check size={14} className="text-n8n-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0" />
                <p className="text-sm text-red-200">
                  <strong>Se marcou 2 ou mais:</strong> você precisa de ajuda profissional. E eu posso te ajudar hoje.
                </p>
              </div>
            </div>
            
            {/* Visual Representation of "Broken" */}
            <div className="relative h-96 bg-n8n-dark rounded-xl border border-n8n-border overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <AlertTriangle size={32} className="text-red-500" />
                   </div>
                   <div className="font-mono text-red-400 mb-2">ERROR: UNKNOWN</div>
                   <div className="text-xs text-gray-600">Workflow ID: 48291... stopped.</div>
                </div>
              </div>
              {/* Decorative nodes */}
              <div className="absolute top-10 left-10 w-32 h-12 bg-n8n-panel border border-n8n-border rounded-md opacity-50"></div>
              <div className="absolute bottom-20 right-10 w-32 h-12 bg-n8n-panel border border-n8n-border rounded-md opacity-50"></div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <path d="M 100 50 C 200 50, 200 300, 300 300" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">O Que Meus Clientes Dizem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
             <div key={i} className="bg-n8n-panel p-6 rounded-xl border border-n8n-border relative">
                <MessageSquare className="absolute -top-4 left-6 text-n8n-primary bg-n8n-panel p-1" size={32} />
                <p className="text-gray-300 italic mb-6 mt-4 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-24 bg-n8n-dark border-y border-n8n-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como Eu Trabalho</h2>
            <p className="text-gray-400">Processo Simples. Resultado Rápido.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-10 h-10 rounded-full bg-n8n-panel border border-n8n-border text-n8n-primary font-bold flex items-center justify-center mb-4 group-hover:bg-n8n-primary group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                {/* Connecting line for desktop */}
                {i < METHODOLOGY_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-12 w-[calc(100%-3rem)] h-[1px] bg-n8n-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Solutions */}
      <section id="solutions" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">O Que Eu Resolvo</h2>
            <p className="text-gray-400 mb-8">
              Problemas técnicos que eu destravo todo dia. Não importa a complexidade.
            </p>
            <div className="grid gap-4">
              {TECHNICAL_SOLUTIONS.map((sol, i) => (
                <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 size={18} className="text-n8n-primary shrink-0" />
                   <span className="text-gray-200">{sol}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Code visual */}
          <div className="flex-1 w-full">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
              <div className="bg-[#252526] px-4 py-2 flex gap-2 items-center border-b border-black">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-500 ml-2">Fixing_Logic.js</span>
              </div>
              <div className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <div className="text-purple-400">async function <span className="text-yellow-200">processWebhook</span>(items) {'{'}</div>
                <div className="pl-4 text-gray-500">// Corrigindo parsing do JSON quebrado</div>
                <div className="pl-4">try {'{'}</div>
                <div className="pl-8">const data = <span className="text-blue-400">JSON</span>.parse(items[0].json.body);</div>
                <div className="pl-8 text-green-400">return [ {'{'} json: data {'}'} ];</div>
                <div className="pl-4">{'}'} catch (error) {'{'}</div>
                <div className="pl-8 text-red-400">throw new Error("Formato inválido!");</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-n8n-panel/20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Casos de Uso Reais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((category, idx) => (
              <div key={idx} className="bg-n8n-panel border border-n8n-border rounded-xl p-8 hover:border-n8n-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-n8n-dark rounded-lg border border-n8n-border">
                    <category.icon className="text-n8n-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-n8n-border hover:border-n8n-primary transition-colors">
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="w-24 h-24 bg-n8n-panel rounded-full mx-auto mb-6 border-2 border-n8n-primary flex items-center justify-center">
           <Terminal size={40} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-bold mb-6">Rafael — Especialista N8N</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          2 anos mergulhado no ecossistema N8N. 15 anos resolvendo problemas com tecnologia.
          Já criei mais de 150 workflows. Do simples ao complexo.
          Não sou só um técnico. Sou um solucionador de problemas de negócio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
           {['Agências Digitais', 'E-commerces', 'SaaS B2B', 'PMEs'].map((tag, i) => (
             <span key={i} className="px-4 py-2 bg-n8n-panel rounded-full border border-n8n-border text-sm text-gray-300">
               {tag}
             </span>
           ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-n8n-dark border-t border-n8n-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-n8n-border rounded-lg bg-n8n-panel overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-200">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp size={20} className="text-n8n-primary" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-n8n-dark/50 border-t border-n8n-border text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-gradient-to-b from-n8n-dark to-black pt-20 pb-12 px-6 md:px-12 border-t border-n8n-border">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para Destravar?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Seus fluxos podem estar rodando amanhã. Agende agora sua sessão gratuita.
            </p>
            
            <div className="bg-n8n-panel p-8 rounded-2xl border border-n8n-border max-w-md mx-auto text-left mb-12 shadow-2xl">
               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Nome Completo</label>
                    <input type="text" className="w-full bg-n8n-dark border border-n8n-border rounded-lg px-4 py-3 text-white focus:border-n8n-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">E-mail</label>
                    <input type="email" className="w-full bg-n8n-dark border border-n8n-border rounded-lg px-4 py-3 text-white focus:border-n8n-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Descreva seu problema (1 linha)</label>
                    <input type="text" className="w-full bg-n8n-dark border border-n8n-border rounded-lg px-4 py-3 text-white focus:border-n8n-primary outline-none transition-colors" placeholder="Ex: Webhook não envia dados..." />
                  </div>
                  <button className="w-full bg-n8n-primary text-white font-bold py-4 rounded-lg hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-n8n-primary/20 text-lg">
                    Agendar Sessão Gratuita
                  </button>
               </form>
               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                  <AlertTriangle size={12} />
                  <span>Apenas 3 vagas disponíveis este mês</span>
               </div>
            </div>

            <div className="flex justify-center gap-8 mb-12">
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github /></a>
               <a href="#" className="text-gray-500 hover:text-n8n-primary transition-colors"><Linkedin /></a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail /></a>
            </div>
            
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Rafael Especialista N8N.
            </div>
            <div className="text-gray-700 text-xs mt-2">
               contato@seuemail.com | (00) 00000-0000
            </div>
         </div>
      </footer>

      <GeminiChat />
    </div>
  );
}

export default App;