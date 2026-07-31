/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Award, CheckCircle2, FileCheck, Layers } from "lucide-react";

export default function About() {
  const skills = [
    "AutoCAD Executivo",
    "Modelagem BIM / Revit",
    "MS Project (Cronograma)",
    "Normas NBR / ABNT",
    "Orçamento BDI / SINAPI",
    "Regularização & Habite-se",
    "Gestão de Canteiro",
    "Medição de Obras",
  ];

  return (
    <section id="sobre" className="py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Square Glass Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-[300px] sm:min-h-[360px] relative overflow-hidden bg-[#1A1A1A] text-white p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="w-10 h-10 bg-[#C5A880] text-[#1A1A1A] font-display font-black text-lg flex items-center justify-center shrink-0">
                  CFT
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shrink-0">
                  <ShieldCheck size={12} />
                  <span>Ativo & Regular</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-1.5">
                  Credencial Profissional
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black leading-none uppercase tracking-tight text-white mb-2">
                  PHELLIPE <br />
                  <span className="text-[#C5A880]">CARVALHO</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-white/60 uppercase font-semibold tracking-wider">
                  Técnico em Edificações • CFT/CRT SP
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-white/50">
                <span>Resolução CFT Nº 058</span>
                <span>Projetos & Obras</span>
              </div>
            </motion.div>

            {/* Floating Square Experience Box */}
            <div className="absolute -bottom-5 -right-5 bg-white/90 backdrop-blur-md p-4 sm:p-5 border border-[#1A1A1A]/10 shadow-xl hidden md:flex items-center gap-3">
              <Award size={24} className="text-[#C5A880] shrink-0" />
              <div>
                <span className="text-xs font-display font-black text-[#1A1A1A] uppercase block">
                  100% Norma NBR
                </span>
                <span className="text-[8px] uppercase font-bold text-[#C5A880] tracking-wider block">
                  Conformidade Garantida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Technical Capabilities */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#C5A880]" />
              <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.4em]">
                Perfil Profissional
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase leading-[0.95] mb-6 hyphens-none break-normal">
              RIGOR TÉCNICO, TRANSPARÊNCIA <br />
              <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
                & compromisso total.
              </span>
            </h2>

            <div className="space-y-4 text-[#1A1A1A]/80 leading-relaxed text-sm md:text-base font-medium mb-8">
              <p>
                Como <strong className="text-[#1A1A1A] uppercase">Técnico em Edificações devidamente registrado no CFT</strong>, atuo na transformação de premissas arquitetônicas em estruturas reais, seguras e financeiramente viáveis.
              </p>
              <p>
                A excelência de um canteiro não depende apenas do material utilizado, mas de um <strong>planejamento minucioso de insumos, cronogramas físico-financeiros sem estouro orçamentário</strong> e fiscalização constante das normas de segurança e execução NBR.
              </p>
            </div>

            {/* Skills Matrix - Square Glass Chips */}
            <div className="mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
                Competências & Softwares Técnicos:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="bg-white/70 p-2.5 border border-[#1A1A1A]/10 text-[10px] md:text-xs font-bold text-[#1A1A1A] flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#C5A880] shrink-0" />
                    <span className="leading-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Highlights */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-[#1A1A1A]/10">
              <div className="bg-white/60 p-4 border border-[#1A1A1A]/10">
                <span className="text-xl md:text-3xl font-display font-black text-[#1A1A1A] block">
                  CFT / CRT
                </span>
                <span className="text-[8px] md:text-[9px] text-[#C5A880] uppercase tracking-wider font-extrabold block mt-1">
                  Habilitação Legal para Emissão de TRT/ART
                </span>
              </div>
              <div className="bg-white/60 p-4 border border-[#1A1A1A]/10">
                <span className="text-xl md:text-3xl font-display font-black text-[#1A1A1A] block">
                  Até 80m²
                </span>
                <span className="text-[8px] md:text-[9px] text-[#C5A880] uppercase tracking-wider font-extrabold block mt-1">
                  Autonomia de Projeto e Direção Executiva
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

