import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (apiKey: string) => {
  const ai = new GoogleGenAI({ apiKey });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é o assistente virtual do Rafael, um Especialista em N8N e automação.
      
      Contexto:
      - O Rafael resolve problemas técnicos complexos em workflows do n8n.
      - Ele tem 2 anos de experiência em n8n e 15 anos em TI.
      - Ele oferece um diagnóstico gratuito de 30 minutos.
      - Preços: Projetos simples a partir de R$ 500. Mentoria R$ 300/h. Suporte mensal R$ 800/mês.
      
      Objetivo:
      - Qualificar leads e incentivá-los a agendar o diagnóstico gratuito.
      - Responder dúvidas básicas sobre o serviço usando as informações fornecidas (preços, prazos, tipos de problemas resolvidos).
      
      Tom de voz:
      - Profissional, direto, técnico (mas acessível) e confiante.
      - Fale Português do Brasil.
      - Não invente informações. Se não souber, sugira o agendamento da conversa.
      
      Se o usuário perguntar sobre um erro específico (webhook, API, loop), diga que o Rafael pode resolver isso rapidamente no diagnóstico.`,
      temperature: 0.7,
    }
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Erro: API Key não configurada no ambiente. Por favor, verifique o metadata.json ou as configurações do servidor.";
  }

  if (!chatSession) {
    await initializeChat(process.env.API_KEY);
  }

  if (!chatSession) {
     return "Erro ao inicializar o chat.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema técnico. Tente novamente mais tarde.";
  }
};