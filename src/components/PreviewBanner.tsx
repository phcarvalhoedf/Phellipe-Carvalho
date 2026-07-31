/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, 
  Share2, 
  FileText, 
  Check, 
  Copy, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  ExternalLink,
  ChevronRight,
  X,
  FileCheck2,
  Building2,
  UserCheck
} from "lucide-react";

export default function PreviewBanner() {
  const [activeTab, setActiveTab] = useState<'card' | 'document'>('card');
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Live document generator state
  const [docClient, setDocClient] = useState("Condomínio Edifício Jardim");
  const [docService, setDocService] = useState("Laudo Técnico de Reforma (NBR 16280)");
  const [docCity, setDocCity] = useState("Santo André • Grande ABC");
  const [docNotes, setDocNotes] = useState("Demolição de alvenaria não estrutural e adequação elétrica");

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://phcarvalho.com.br';

  const handleCopyLink = () => {
    const textToCopy = `PH.CARVALHO | Técnico em Edificações • Registro CFT\nProjetos executivos, Laudos NBR 16280 e Regularização de Imóveis.\nConheça o portfólio: ${currentUrl}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getWhatsAppDocUrl = () => {
    const message = `Olá Phellipe, acabei de gerar a *Minuta de Solicitação Técnica* pelo seu site:
📌 *Cliente/Local:* ${docClient}
📍 *Cidade/Bairro:* ${docCity}
🛠️ *Serviço:* ${docService}
📝 *Observações:* ${docNotes}

Gostaria de agendar a vistoria técnica e confirmar os dados do TRT.`;
    return `https://wa.me/5511999196556?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-[#1A1A1A] text-white py-12 md:py-16 border-y border-[#C5A880]/30 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-10 pointer-events-none" />

      {/* Decorative Gold Light Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Banner Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest">
              <Sparkles size={12} className="animate-pulse" />
              <span>FERRAMENTA DE PRÉ-VISUALIZAÇÃO INTERATIVA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Central de Pré-Visualização & <br />
              <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
                compartilhamento profissional.
              </span>
            </h2>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-5 py-3 bg-[#C5A880] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-white transition-all cursor-pointer shadow-lg"
            >
              <Eye size={16} />
              <span>{isExpanded ? "Ocultar Bancada" : "Abrir Bancada de Testes"}</span>
              <ChevronRight size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
            
            <a
              href="https://wa.me/5511999196556"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
            >
              <MessageCircle size={16} className="text-[#C5A880]" />
              <span>Contato Direto</span>
            </a>
          </div>
        </div>

        {/* Quick Highlights Grid when Collapsed */}
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
          >
            <div 
              onClick={() => { setIsExpanded(true); setActiveTab('card'); }}
              className="p-5 bg-white/5 border border-white/10 hover:border-[#C5A880] transition-all cursor-pointer group flex items-start gap-3"
            >
              <Smartphone className="text-[#C5A880] shrink-0 mt-0.5" size={20} />
              <div>
                <span className="text-xs font-display font-bold uppercase text-white block group-hover:text-[#C5A880] transition-colors">
                  Cartão WhatsApp Preview
                </span>
                <span className="text-[11px] text-white/60 block mt-1 leading-snug">
                  Veja como o link do site e o banner Open Graph aparecem nas conversas de clientes.
                </span>
              </div>
            </div>

            <div 
              onClick={() => { setIsExpanded(true); setActiveTab('document'); }}
              className="p-5 bg-white/5 border border-white/10 hover:border-[#C5A880] transition-all cursor-pointer group flex items-start gap-3"
            >
              <FileCheck2 className="text-[#C5A880] shrink-0 mt-0.5" size={20} />
              <div>
                <span className="text-xs font-display font-bold uppercase text-white block group-hover:text-[#C5A880] transition-colors">
                  Minuta de Laudo / TRT
                </span>
                <span className="text-[11px] text-white/60 block mt-1 leading-snug">
                  Gere e pré-visualize uma ficha técnica personalizada para o seu imóvel ou reforma.
                </span>
              </div>
            </div>

            <div 
              onClick={handleCopyLink}
              className="p-5 bg-white/5 border border-white/10 hover:border-[#C5A880] transition-all cursor-pointer group flex items-start gap-3"
            >
              <Share2 className="text-[#C5A880] shrink-0 mt-0.5" size={20} />
              <div>
                <span className="text-xs font-display font-bold uppercase text-white block group-hover:text-[#C5A880] transition-colors">
                  {copiedLink ? "Link Copiado com Sucesso!" : "Compartilhar com Cliente"}
                </span>
                <span className="text-[11px] text-white/60 block mt-1 leading-snug">
                  Copie a mensagem recomendada de apresentação técnica do profissional CFT.
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Expanded Interactive Workbench */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-8 space-y-8"
            >
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
                <button
                  onClick={() => setActiveTab('card')}
                  className={`px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border cursor-pointer transition-all ${
                    activeTab === 'card'
                      ? 'bg-[#C5A880] text-[#1A1A1A] border-[#C5A880]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <Smartphone size={15} />
                  <span>1. Pré-visualização do Cartão Social</span>
                </button>

                <button
                  onClick={() => setActiveTab('document')}
                  className={`px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border cursor-pointer transition-all ${
                    activeTab === 'document'
                      ? 'bg-[#C5A880] text-[#1A1A1A] border-[#C5A880]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <FileText size={15} />
                  <span>2. Gerador & Pré-visualizador de Minuta</span>
                </button>
              </div>

              {/* TAB 1: SOCIAL & WHATSAPP LINK PREVIEW CARD */}
              {activeTab === 'card' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Controls */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-2 text-[#C5A880]">
                      <Share2 size={18} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest">
                        Open Graph & Preview Meta
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white leading-tight">
                      Cartão de Apresentação Digital
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      Ao enviar o link deste site para síndicos, proprietários ou clientes no WhatsApp e redes sociais, o banner técnico e o selo de registro CFT aparecem formatados automaticamente:
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="p-3 bg-white/5 border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
                        <Check size={14} className="text-[#C5A880] shrink-0" />
                        <span>Imagem HD de Capa: /og-banner.jpg</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
                        <Check size={14} className="text-[#C5A880] shrink-0" />
                        <span>Selo CFT / CRT de Registro Ativo</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
                        <Check size={14} className="text-[#C5A880] shrink-0" />
                        <span>Codificação Meta Open Graph Completa</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={handleCopyLink}
                        className="px-6 py-3.5 bg-[#C5A880] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-white transition-all cursor-pointer"
                      >
                        {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copiedLink ? "Copiado!" : "Copiar Texto de Apresentação"}</span>
                      </button>

                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Conheça os serviços técnicos e laudos NBR 16280 do Técnico em Edificações Phellipe Carvalho: https://phcarvalho.com.br')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-emerald-600 text-white font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-emerald-500 transition-all cursor-pointer"
                      >
                        <MessageCircle size={16} />
                        <span>Testar no WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right WhatsApp Mobile Screen Simulator */}
                  <div className="lg:col-span-7 flex justify-center">
                    <div className="w-full max-w-sm sm:max-w-md bg-[#0B141A] rounded-2xl border-4 border-[#2A3942] p-4 shadow-2xl space-y-3 font-sans">
                      
                      {/* Simulated Chat Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#C5A880] text-[#1A1A1A] font-bold flex items-center justify-center text-xs">
                            PH
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">Atendimento Técnico CFT</span>
                            <span className="text-[10px] text-emerald-400 block">online agora</span>
                          </div>
                        </div>
                        <ShieldCheck size={18} className="text-[#C5A880]" />
                      </div>

                      {/* Simulated Chat Bubble */}
                      <div className="bg-[#202C33] rounded-xl p-3 border border-white/5 space-y-2">
                        {/* Open Graph Card Box */}
                        <div className="rounded-lg overflow-hidden bg-[#111B21] border border-white/10">
                          {/* Banner Image */}
                          <div className="aspect-[1200/630] relative bg-[#1A1A1A] overflow-hidden">
                            <img 
                              src="/og-banner.jpg" 
                              alt="Banner de Pré-visualização" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback styling if image fails
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute top-2 left-2 bg-[#1A1A1A]/90 text-[#C5A880] text-[8px] font-mono font-bold px-2 py-0.5 border border-[#C5A880]/30">
                              PRÉ-VISUALIZAÇÃO OG
                            </div>
                          </div>

                          {/* Card Meta Content */}
                          <div className="p-3 space-y-1">
                            <span className="text-[9px] font-mono text-[#C5A880] uppercase block tracking-wider">
                              phcarvalho.eng.br
                            </span>
                            <h4 className="text-xs font-bold text-white uppercase leading-snug">
                              PH.CARVALHO | Técnico em Edificações • Registro CFT
                            </h4>
                            <p className="text-[10px] text-white/60 line-clamp-2 leading-relaxed">
                              Projetos executivos, laudos técnicos NBR 16280, regularização imobiliária e fiscalização de obras com emissão de TRT.
                            </p>
                          </div>
                        </div>

                        {/* Text Message below card */}
                        <p className="text-xs text-white/90 pt-1 leading-relaxed">
                          Olá! Segue a apresentação técnica oficial e dados do CFT para análise do laudo da obra.
                        </p>

                        <div className="text-[9px] text-white/40 text-right font-mono">
                          10:42 • Enviado
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: LIVE TECHNICAL DOCUMENT / MINUTA PREVIEW GENERATOR */}
              {activeTab === 'document' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Controls / Form Inputs */}
                  <div className="lg:col-span-5 space-y-4 bg-white/5 p-6 border border-white/10">
                    <div className="flex items-center gap-2 text-[#C5A880]">
                      <FileCheck2 size={18} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest">
                        Gerador Instantâneo
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-black uppercase text-white">
                      Monte a Minuta do Laudo / Projeto
                    </h3>

                    <p className="text-xs text-white/70 leading-relaxed">
                      Preencha os dados abaixo para visualizar a minuta estruturada com o registro de responsabilidade técnica CFT antes do envio oficial:
                    </p>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-[10px] font-mono uppercase text-[#C5A880] font-bold block mb-1">
                          Cliente / Condomínio / Imóvel:
                        </label>
                        <input
                          type="text"
                          value={docClient}
                          onChange={(e) => setDocClient(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/20 p-2.5 text-xs text-white focus:border-[#C5A880] outline-none"
                          placeholder="Ex: Edifício Bella Vista"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase text-[#C5A880] font-bold block mb-1">
                          Serviço Solicitado:
                        </label>
                        <select
                          value={docService}
                          onChange={(e) => setDocService(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/20 p-2.5 text-xs text-white focus:border-[#C5A880] outline-none"
                        >
                          <option value="Laudo Técnico de Reforma (NBR 16280)">Laudo Técnico de Reforma (NBR 16280)</option>
                          <option value="Projeto Executivo As-Built em BIM">Projeto Executivo As-Built em BIM</option>
                          <option value="Regularização Imobiliária & Habite-se">Regularização Imobiliária & Habite-se</option>
                          <option value="Fiscalização & Direção de Canteiro">Fiscalização & Direção de Canteiro</option>
                          <option value="Laudo de Vistoria de Recebimento de Chaves">Laudo de Vistoria de Recebimento de Chaves</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase text-[#C5A880] font-bold block mb-1">
                          Cidade / Bairro:
                        </label>
                        <input
                          type="text"
                          value={docCity}
                          onChange={(e) => setDocCity(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/20 p-2.5 text-xs text-white focus:border-[#C5A880] outline-none"
                          placeholder="Ex: Santo André - SP"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono uppercase text-[#C5A880] font-bold block mb-1">
                          Resumo do Escopo:
                        </label>
                        <textarea
                          rows={2}
                          value={docNotes}
                          onChange={(e) => setDocNotes(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/20 p-2.5 text-xs text-white focus:border-[#C5A880] outline-none resize-none"
                          placeholder="Descreva brevemente a obra..."
                        />
                      </div>
                    </div>

                    <a
                      href={getWhatsAppDocUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-[#C5A880] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-white transition-all cursor-pointer mt-4"
                    >
                      <MessageCircle size={16} />
                      <span>Enviar esta Minuta ao Técnico</span>
                    </a>
                  </div>

                  {/* Right Document Visual Sheet Preview */}
                  <div className="lg:col-span-7 bg-[#F5F2ED] text-[#1A1A1A] p-6 sm:p-8 border-2 border-[#1A1A1A] shadow-2xl relative font-sans space-y-6">
                    {/* Watermark CFT Badge */}
                    <div className="absolute top-6 right-6 opacity-15 pointer-events-none">
                      <ShieldCheck size={90} className="text-[#1A1A1A]" />
                    </div>

                    {/* Document Top Bar Header */}
                    <div className="flex justify-between items-start border-b-2 border-[#1A1A1A] pb-4">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#C5A880] uppercase tracking-widest">
                          CONSELHO FEDERAL DOS TÉCNICOS • SP
                        </div>
                        <h4 className="text-xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
                          FICHA DE AVALIAÇÃO TÉCNICA
                        </h4>
                        <span className="text-[9px] font-mono text-[#1A1A1A]/60 block uppercase">
                          CÓDIGO DE MINUTA: TRT-PREVIEW-2026/SP
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-[#1A1A1A] text-[#C5A880] text-[9px] font-mono font-bold px-2 py-1 uppercase">
                          CFT ATIVO
                        </span>
                      </div>
                    </div>

                    {/* Document Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-white/80 p-3 border border-[#1A1A1A]/10">
                        <span className="text-[9px] font-mono uppercase text-[#C5A880] font-bold block mb-0.5">
                          SOLICITANTE / CLIENTE
                        </span>
                        <span className="font-bold text-[#1A1A1A] block truncate">{docClient || "Não informado"}</span>
                      </div>

                      <div className="bg-white/80 p-3 border border-[#1A1A1A]/10">
                        <span className="text-[9px] font-mono uppercase text-[#C5A880] font-bold block mb-0.5">
                          LOCALIZAÇÃO
                        </span>
                        <span className="font-bold text-[#1A1A1A] block truncate">{docCity || "Não informado"}</span>
                      </div>
                    </div>

                    {/* Service Box */}
                    <div className="bg-white/80 p-4 border border-[#1A1A1A]/15 space-y-1">
                      <span className="text-[9px] font-mono uppercase text-[#C5A880] font-bold block">
                        MODALIDADE TÉCNICA / ESCOPO
                      </span>
                      <h5 className="text-sm font-bold text-[#1A1A1A] uppercase">
                        {docService}
                      </h5>
                      <p className="text-xs text-[#1A1A1A]/75 leading-relaxed pt-1 border-t border-[#1A1A1A]/10">
                        {docNotes || "Detalhamento e laudo em elaboração..."}
                      </p>
                    </div>

                    {/* Technical Responsibility Block */}
                    <div className="pt-4 border-t border-[#1A1A1A]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px]">
                      <div>
                        <span className="font-bold text-[#1A1A1A] uppercase block">
                          PHELLIPE CARVALHO • TÉCNICO EM EDIFICAÇÕES
                        </span>
                        <span className="text-[#1A1A1A]/60 block">
                          Registro CFT/CRT SP • Resolução CFT nº 058
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-[#C5A880] font-bold block">
                          STATUS: MINUTA PRÉ-APROVADA
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
