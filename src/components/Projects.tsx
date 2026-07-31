/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Clock, MessageCircle, FileCheck2, ArrowUpRight, Compass } from "lucide-react";

export default function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#C5A880]" />
            <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Acervo Técnico & Portfólio
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase leading-[0.95] hyphens-none break-normal">
            GALERIA DE <br />
            <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
              projetos e obras.
            </span>
          </h2>
        </div>

        {/* Coming Soon Showcase Container */}
        <div className="border border-[#1A1A1A]/15 bg-white/60 backdrop-blur-md p-8 md:p-14 relative shadow-xl overflow-hidden">
          {/* Subtle Grid Background Accent */}
          <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] text-[#C5A880] border border-[#C5A880]/30 text-[10px] font-mono font-bold uppercase tracking-widest mx-auto">
              <Clock size={14} className="text-[#C5A880] animate-pulse" />
              <span>EM BREVE • ACERVO EM CATALOGAÇÃO</span>
            </div>

            {/* Main Title */}
            <h3 className="text-2xl md:text-4xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
              Portfólio em Seleção
            </h3>

            {/* Descriptive Text */}
            <p className="text-xs md:text-base text-[#1A1A1A]/75 leading-relaxed font-medium">
              Estamos estruturando a galeria com os registros fotográficos e documentações técnicas autorizadas de obras e projetos executados. O acervo inclui modelagens BIM, vistorias técnicas e projetos de regularização.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
              <div className="bg-white/80 p-3.5 border border-[#1A1A1A]/10 text-xs font-semibold text-[#1A1A1A] flex items-center gap-2">
                <FileCheck2 size={16} className="text-[#C5A880] shrink-0" />
                <span>Projetos Executivos</span>
              </div>
              <div className="bg-white/80 p-3.5 border border-[#1A1A1A]/10 text-xs font-semibold text-[#1A1A1A] flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C5A880] shrink-0" />
                <span>Reformas com TRT</span>
              </div>
              <div className="bg-white/80 p-3.5 border border-[#1A1A1A]/10 text-xs font-semibold text-[#1A1A1A] flex items-center gap-2">
                <Compass size={16} className="text-[#C5A880] shrink-0" />
                <span>Modelagem BIM / CAD</span>
              </div>
            </div>

            {/* Direct Contact Call to Action */}
            <div className="pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5511999196556?text=Olá%20Phellipe,%20gostaria%20de%20solicitar%20exemplos%20de%20projetos%20ou%20atestados%20técnicos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all cursor-pointer shadow-md"
              >
                <MessageCircle size={16} />
                <span>Solicitar Amostras de Projetos</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

