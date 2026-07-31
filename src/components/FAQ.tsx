/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "O que exatamente um Técnico em Edificações faz e qual a diferença para um engenheiro civil?",
    answer: "O Técnico em Edificações é o profissional focado na viabilidade prática, planejamento e condução direta da obra. Enquanto o engenheiro civil costuma focar em cálculos estruturais complexos e grandes infraestruturas, o técnico atua como o braço direito do cliente no canteiro de obras. Garanto que o projeto seja executado à risca, com rigoroso controle de custos, materiais e prazos, oferecendo uma excelente relação custo-benefício para construções e reformas residenciais e comerciais."
  },
  {
    question: "Qual é o limite de tamanho de projeto que você pode assinar legalmente?",
    answer: "Legalmente, através do Conselho dos Técnicos Industriais (CFT), estou habilitado a projetar, assinar e dirigir obras de até 80m² de área construída, com limite de até dois pavimentos. Para projetos que ultrapassam essa metragem, atuo na gestão executiva da construção, no planejamento físico-financeiro e na compatibilização de projetos em parceria com engenheiros parceiros."
  },
  {
    question: "Você ajuda na parte burocrática de aprovação na Prefeitura e retirada de alvará?",
    answer: "Com certeza! A burocracia técnica é um dos maiores gargalos de quem quer construir. Eu cuido de todo o levantamento métrico, desenho das plantas de acordo com o plano diretor da sua cidade, montagem do processo e acompanhamento junto aos órgãos públicos até a emissão do alvará de construção ou regularização do imóvel."
  },
  {
    question: "Como funciona o serviço de \"Orçamento e Planejamento\"? Eu realmente economizo contratando isso?",
    answer: "Sem dúvida alguma. A maior parte do desperdício em uma obra acontece por falta de planejamento. Com este serviço, calculo detalhadamente a quantidade necessária de cada insumo (do cimento ao acabamento) e crio um cronograma de compras. Isso evita compras emergenciais e mais caras, sobras de material e paralisações na obra, garantindo previsibilidade financeira do início ao fim."
  },
  {
    question: "Você fica em tempo integral na minha obra durante o gerenciamento?",
    answer: "O gerenciamento de obras não exige a presença física de 8 horas diárias no local, mas sim um controle estratégico. Realizo visitas técnicas programadas nos momentos mais cruciais da construção (como marcação de gabarito, concretagem de fundações e lajes, passagens de instalações e fases de acabamento). Além disso, mantenho canal direto com a equipe de execução e faço o acompanhamento constante do cronograma."
  },
  {
    question: "Como faço para solicitar um orçamento para o meu projeto?",
    answer: "É muito simples e rápido! Você pode utilizar o nosso Simulador de Viabilidade diretamente aqui no site ou clicar no botão do WhatsApp para falar comigo agora mesmo. Agendaremos uma conversa inicial para entender as suas ideias, o tamanho do seu sonho e alinhar os próximos passos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#C5A880]" />
            <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Esclarecimentos Técnicos
            </span>
            <div className="h-[2px] w-8 bg-[#C5A880]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase hyphens-none break-normal">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* Search Bar - Square Glass */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#1A1A1A]/40">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="PESQUISAR DÚVIDA TÉCNICA (EX: ALVARÁ, CFT, PREFEITURA...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-md border border-[#1A1A1A]/15 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#C5A880]"
          />
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#C5A880] bg-white/80 shadow-md' 
                    : 'border-[#1A1A1A]/10 bg-white/50 hover:bg-white/70'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-xs md:text-base font-display font-bold uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#C5A880] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border transition-all shrink-0 ${
                    isOpen ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] rotate-180' : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 text-[11px] md:text-sm text-[#1A1A1A]/80 leading-relaxed font-medium border-l-2 border-[#C5A880] ml-5 md:ml-6 mr-5 md:mr-6 mb-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white/60 border border-[#1A1A1A]/10">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                Nenhuma dúvida encontrada para "{searchTerm}".
              </p>
            </div>
          )}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 p-6 bg-[#1A1A1A] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
              Não encontrou sua dúvida?
            </span>
            <p className="text-xs text-white/70 mt-1">
              Fale diretamente com o técnico para tirar suas dúvidas sobre o projeto.
            </p>
          </div>
          <a
            href="https://wa.me/5511999196556?text=Olá%20Phellipe,%20tenho%20uma%20dúvida%20específica%20sobre%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#C5A880] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-white transition-all shrink-0"
          >
            <MessageCircle size={14} />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

