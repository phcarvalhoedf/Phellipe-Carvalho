/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Calculator, FileText, Calendar, CheckCircle2, Download, ArrowUpRight, ShieldCheck, Clock, Layers } from "lucide-react";

export default function Tools() {
  const [activeTool, setActiveTool] = useState<'simulador' | 'guias' | 'cronograma'>('simulador');
  
  // Simulator State
  const [workType, setWorkType] = useState('reforma');
  const [area, setArea] = useState(60);

  // Computed metrics for simulator
  const estimatedWeeks = Math.ceil(area * (workType === 'construção nova' ? 0.35 : workType === 'reforma' ? 0.2 : 0.15));
  const teamSize = area < 50 ? "2 a 3 profissionais" : area < 120 ? "4 a 6 profissionais" : "7+ profissionais e supervisor";
  const cftAutonomy = area <= 80 ? "Autonomia Total (Projeto + Execução)" : "Execução + Parceria em Projetos Grandes";

  const handleGuideRequest = (guideTitle: string) => {
    const text = `Olá Phellipe! Gostaria de receber o material técnico em PDF: *${guideTitle}*.`;
    window.open(`https://wa.me/5511999196556?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="ferramentas" className="py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#C5A880]" />
            <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Ecossistema Técnico
            </span>
            <div className="h-[2px] w-8 bg-[#C5A880]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase hyphens-none break-normal">
            FERRAMENTAS & <br />
            <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
              recursos práticos.
            </span>
          </h2>
        </div>

        {/* Custom Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-8 md:mb-10">
          {[
            { id: 'simulador', label: 'Simulador', icon: Calculator },
            { id: 'guias', label: 'Guias PDF', icon: FileText },
            { id: 'cronograma', label: 'Fluxograma', icon: Calendar },
          ].map((tab) => {
            const isActive = activeTool === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTool(tab.id as any)}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 font-bold text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all border cursor-pointer ${
                  isActive 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md' 
                    : 'bg-white/60 text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:border-[#C5A880] hover:text-[#1A1A1A]'
                }`}
              >
                <tab.icon size={14} className={isActive ? 'text-[#C5A880] shrink-0' : 'shrink-0'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box - Square Glass Layout */}
        <div className="border border-[#1A1A1A]/15 bg-white/50 backdrop-blur-md p-5 md:p-14 relative shadow-xl">
          
          <AnimatePresence mode="wait">
            {activeTool === 'simulador' && (
              <motion.div
                key="simulador"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12"
              >
                {/* Left Controls */}
                <div className="lg:col-span-7 space-y-8 md:space-y-10">
                  <div>
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A] mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 md:w-6 md:h-6 bg-[#1A1A1A] text-white flex items-center justify-center font-mono text-[10px]">1</span>
                      Tipo de Obra / Intervenção
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { id: 'reforma', label: 'Reforma Geral' },
                        { id: 'construção nova', label: 'Construção do Zero' },
                        { id: 'regularização', label: 'Regularização' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setWorkType(item.id)}
                          className={`p-3 md:p-4 text-[10px] md:text-[11px] font-bold uppercase tracking-wider border transition-all text-left ${
                            workType === item.id 
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md' 
                              : 'bg-white/60 border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#C5A880]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A] flex items-center gap-2">
                        <span className="w-5 h-5 md:w-6 md:h-6 bg-[#1A1A1A] text-white flex items-center justify-center font-mono text-[10px]">2</span>
                        Área Estimada do Imóvel
                      </h3>
                      <span className="text-xl md:text-2xl font-display font-black text-[#1A1A1A]">
                        {area} <span className="text-[10px] md:text-xs font-normal text-[#C5A880]">m²</span>
                      </span>
                    </div>

                    <div className="bg-white/70 p-4 md:p-6 border border-[#1A1A1A]/10 space-y-4">
                      <input 
                        type="range" 
                        min="15" 
                        max="250" 
                        value={area} 
                        onChange={(e) => setArea(parseInt(e.target.value))}
                        className="w-full h-1.5 md:h-2 bg-neutral-200 appearance-none cursor-pointer accent-[#C5A880]"
                      />
                      <div className="flex justify-between text-[8px] md:text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
                        <span>15 m²</span>
                        <span>120 m²</span>
                        <span>250 m²</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Quick Metrics */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white/70 p-3 md:p-4 border border-[#1A1A1A]/10">
                      <div className="flex items-center gap-2 text-[#C5A880] mb-1">
                        <Clock size={14} />
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Prazo Estimado</span>
                      </div>
                      <span className="text-sm md:text-lg font-display font-bold text-[#1A1A1A]">
                        ~ {estimatedWeeks} Semanas
                      </span>
                    </div>
                    <div className="bg-white/70 p-3 md:p-4 border border-[#1A1A1A]/10">
                      <div className="flex items-center gap-2 text-[#C5A880] mb-1">
                        <Layers size={14} />
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Equipe Recomendada</span>
                      </div>
                      <span className="text-[10px] md:text-xs font-bold text-[#1A1A1A] uppercase">
                        {teamSize}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Result Card - Square Dark Box */}
                <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-6 md:p-8 border border-white/10 flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <ShieldCheck size={18} className="text-[#C5A880]" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                        Diagnóstico de Enquadramento
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-[9px] md:text-[10px] text-white/50 uppercase font-bold tracking-widest block mb-1">
                          Enquadramento Técnico CFT
                        </span>
                        <p className="text-xs md:text-sm font-semibold text-white/90 leading-relaxed">
                          {cftAutonomy}
                        </p>
                      </div>

                      <div>
                        <span className="text-[9px] md:text-[10px] text-white/50 uppercase font-bold tracking-widest block mb-2">
                          Próximos Passos Recomendados
                        </span>
                        <div className="space-y-2">
                          {[
                            'Vistoria técnica presencial no local',
                            'Levantamento métrico cadastral',
                            'Emissão de TRT/ART de responsabilidade',
                          ].map((step, i) => (
                            <div key={i} className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-white/80 bg-white/5 p-2 md:p-2.5 border border-white/5">
                              <CheckCircle2 size={12} className="text-[#C5A880] shrink-0" />
                              <span className="leading-tight">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/5511999196556?text=Olá%20Phellipe,%20fiz%20uma%20simulação%20no%20site:%20Obra%20de%20${encodeURIComponent(workType)}%20com%20${area}m². Gostaria%20de%20um%20orçamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 md:py-4 bg-[#C5A880] text-[#1A1A1A] font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition-all mt-8"
                  >
                    <span>Enviar para WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            )}

            {activeTool === 'guias' && (
              <motion.div
                key="guias"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-4"
              >
                {[
                  { 
                    title: 'Checklist Pré-Reforma & Obras', 
                    desc: 'Protocolo de verificação de instalações elétricas, hidráulicas e alvenarias antes de iniciar a obra.', 
                    tag: 'Documento Técnico • PDF',
                    file: '/assets/downloads/checklist-pre-reforma.pdf'
                  },
                  { 
                    title: 'Guia de Economia & Gestão de Materiais', 
                    desc: 'Instruções para evitar desperdício de insumos no canteiro e controle de notas fiscais.', 
                    tag: 'Planejamento • PDF',
                    file: '/assets/downloads/guia-de-materiais-e-economia.pdf'
                  },
                  { 
                    title: 'Passo a Passo de Aprovação em Prefeitura', 
                    desc: 'Fluxograma de documentos para obtenção de alvará, habite-se e laudos de vistoria técnica.', 
                    tag: 'Normas & Legislação • PDF',
                    file: '/assets/downloads/passo-a-passo-prefeitura.pdf'
                  }
                ].map((guide, i) => (
                  <div 
                    key={i}
                    className="p-6 bg-white/70 border border-[#1A1A1A]/10 hover:border-[#C5A880] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1A1A1A] text-[#C5A880] flex items-center justify-center shrink-0">
                        <FileText size={22} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
                          {guide.tag}
                        </span>
                        <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A1A] uppercase tracking-tight">
                          {guide.title}
                        </h3>
                        <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mt-1">
                          {guide.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                      <a
                        href={guide.file}
                        download
                        className="px-5 py-3 bg-[#1A1A1A] text-white font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all cursor-pointer"
                      >
                        <Download size={14} />
                        <span>Baixar PDF</span>
                      </a>
                      <button
                        onClick={() => handleGuideRequest(guide.title)}
                        className="px-4 py-3 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer"
                      >
                        <ArrowUpRight size={14} />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTool === 'cronograma' && (
              <motion.div
                key="cronograma"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  { step: '01', title: 'Diagnóstico & Briefing', desc: 'Análise in loco do espaço, escopo do projeto, verificação de legislação e definição de metas orçamentárias.' },
                  { step: '02', title: 'Engenharia de Custos', desc: 'Levantamento detalhado de quantitativos e elaboração do cronograma físico-financeiro para previsibilidade total.' },
                  { step: '03', title: 'Projetos & Licenciamento', desc: 'Elaboração das plantas executivas, compatibilização técnica e protocolo junto à prefeitura ou condomínio.' },
                  { step: '04', title: 'Gestão Executiva & Entrega', desc: 'Fiscalização diária/semanal do canteiro, medições de avanço e vistoria final para entrega das chaves.' }
                ].map((item) => (
                  <div key={item.step} className="p-6 bg-white/70 border border-[#1A1A1A]/10 hover:border-[#C5A880] transition-all relative">
                    <span className="text-2xl font-display font-black text-[#C5A880] block mb-2">
                      [{item.step}]
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#1A1A1A] uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

