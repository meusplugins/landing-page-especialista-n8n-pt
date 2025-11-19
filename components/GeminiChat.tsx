import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente do Rafael. Seu workflow quebrou ou precisa de otimização? Posso te ajudar a agendar um diagnóstico gratuito.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await sendMessageToGemini(input);
    
    const modelMsg: ChatMessage = { role: 'model', text: response };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-n8n-panel border border-n8n-border rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-n8n-primary to-n8n-secondary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
               <h3 className="text-white font-semibold">Suporte Especialista N8N</h3>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-n8n-dark/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-n8n-primary text-white rounded-br-none' 
                      : 'bg-n8n-border text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-n8n-border text-gray-200 rounded-2xl rounded-bl-none p-3 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-n8n-primary" />
                  <span className="text-xs opacity-70">Processando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-n8n-panel border-t border-n8n-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tire sua dúvida..."
              className="flex-1 bg-n8n-dark border border-n8n-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-n8n-primary transition-colors placeholder-gray-500"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className="bg-n8n-primary hover:bg-red-500 text-white p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 bg-gradient-to-r from-n8n-primary to-n8n-secondary p-4 rounded-full shadow-lg hover:shadow-n8n-primary/30 text-white flex items-center justify-center group`}
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default GeminiChat;