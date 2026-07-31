/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plus, Minus, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Desenho Técnico & Projetos 2D/3D",
    subtitle: "Plantas, Cortes, Fachadas & BIM",
    description: "Desenvolvimento de plantas humanizadas, cortes, fachadas executivas e modelagem tridimensional com detalhamento de instalações para prevenção de interferências.",
    deliverables: ["Projetos Arquitetônicos 2D/3D", "Detalhamento de Instalações", "Modelagem BIM Interativa", "Plantas Executivas para Obra"],
  },
  {
    id: "02",
    title: "Aprovação & Regularização",
    subtitle: "Processos de Prefeitura & Órgãos",
    description: "Gestão completa de processos de legalização na Prefeitura e Cartório. Emissão de alvarás de construção, habite-se e regularização de imóveis residenciais e comerciais.",
    deliverables: ["Alvará de Construção e Reforma", "Habite-se e Certidão de Baixa", "Regularização de Imóveis Excedentes", "Laudos de Vistoria de Canteiro"],
  },
  {
    id: "03",
    title: "Gerenciamento & Medição de Obras",
    subtitle: "Fiscalização Técnica & Cronograma",
    description: "Acompanhamento presencial no canteiro de obras, medições técnicas periódicas, controle rígido do cronograma físico-financeiro e garantia de qualidade NBR.",
    deliverables: ["Relatório de Medição Semanal", "Controle de Qualidade do Concreto/Aço", "Fiscalização de Segurança e Normas", "Gestão de Empreiteiros"],
  },
  {
    id: "04",
    title: "Orçamento & Quantitativo (BDI)",
    subtitle: "Planejamento Financeiro de Insumos",
    description: "Levantamento detalhado e criterioso da quantidade de materiais e mão de obra necessária. Cálculo exato de BDI e taxa de desperdício zero para seu investimento.",
    deliverables: ["Planilha Orçamentária Discriminada", "Composição de Custos Diretos/Indiretos", "Curva ABC de Insumos", "Cotação com Fornecedores"],
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <section id="servicos" className="py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#C5A880]" />
              <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.3em]">
                Serviços de Engenharia
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase leading-[0.95] hyphens-none break-normal">
              SOLUÇÕES DE <br />
              <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
                alta performance.
              </span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-[#1A1A1A]/70 max-w-xs md:ml-auto text-[10px] md:text-xs font-semibold uppercase tracking-wider leading-relaxed">
              Técnica rigorosa, conformidade com as normas NBR e suporte profissional do planejamento à entrega.
            </p>
          </div>
        </div>

        {/* Services Accordion List */}
        <div className="border-t border-[#1A1A1A]/10">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`border-b border-[#1A1A1A]/10 transition-all duration-300 ${
                  isExpanded ? "bg-white/80 backdrop-blur-md shadow-md" : "hover:bg-white/40"
                }`}
              >
                {/* Accordion Bar */}
                <div
                  className="py-5 sm:py-7 px-3 sm:px-6 flex items-center justify-between cursor-pointer select-none group gap-3"
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                >
                  <div className="flex items-center gap-3 md:gap-8 min-w-0 flex-1 pr-2">
                    <span className="text-[#C5A880] font-mono text-sm sm:text-lg font-bold shrink-0">
                      [{service.id}]
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-xl lg:text-2xl font-display font-black text-[#1A1A1A] uppercase tracking-tight group-hover:text-[#C5A880] transition-colors break-normal hyphens-none leading-tight">
                        {service.title}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] text-[#1A1A1A]/60 font-bold uppercase tracking-wider block mt-0.5 truncate">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className={`w-8 h-8 sm:w-9 sm:h-9 border border-[#1A1A1A]/20 flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isExpanded ? "bg-[#1A1A1A] text-white" : "bg-white/60 text-[#1A1A1A] group-hover:border-[#C5A880]"
                  }`}>
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {/* Expanded Content Box */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-3 sm:px-6 pb-6 sm:pb-8 pt-2 border-t border-[#1A1A1A]/5"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start sm:pl-8 lg:pl-12">
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed font-medium">
                          {service.description}
                        </p>

                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880] block mb-2.5">
                            Entregáveis do Projeto:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((item) => (
                              <div key={item} className="flex items-center gap-2 bg-white/60 p-2.5 border border-[#1A1A1A]/10 text-[11px] sm:text-xs font-bold text-[#1A1A1A] min-w-0">
                                <CheckCircle2 size={14} className="text-[#C5A880] shrink-0" />
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex flex-col justify-between bg-[#1A1A1A] p-5 sm:p-6 text-white border border-white/10 shadow-lg">
                        <div className="flex items-center gap-2 text-[#C5A880] mb-2">
                          <ShieldCheck size={16} className="shrink-0" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Garantia Técnica CFT</span>
                        </div>
                        <p className="text-[11px] text-white/70 mb-5 leading-relaxed">
                          Consulte condições específicas e agende um diagnóstico técnico presencial ou remoto para seu projeto.
                        </p>
                        <a
                          href={`https://wa.me/5511999196556?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço:%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-[#C5A880] text-[#1A1A1A] font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition-all cursor-pointer"
                        >
                          <span>Solicitar Orçamento</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

