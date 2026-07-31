/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Ruler, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#F5F2ED] bg-architectural-grid">
      {/* Background Vignette and Light FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A880]/10 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1A1A1A]/5 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#F5F2ED_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 relative z-10 items-center">
        
        {/* Left Column - Main Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Top Status Badge - Square Glass */}
          <div className="inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-md px-3.5 py-2 border border-[#1A1A1A]/10 shadow-xs mb-6 sm:mb-8 max-w-full overflow-hidden">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <ShieldCheck size={14} className="text-[#C5A880] shrink-0" />
            <span className="text-[#1A1A1A] text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] font-extrabold truncate">
              CFT/CRT REGULARIZADO • EDIFICAÇÕES & OBRAS
            </span>
          </div>

          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#1A1A1A] leading-[1.05] sm:leading-[0.92] tracking-tight mb-5 md:mb-7 uppercase hyphens-none break-normal">
            EXCELÊNCIA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] to-[#8D7556] italic font-normal lowercase tracking-normal pr-2">
              técnica.
            </span>
          </h1>

          <div className="max-w-xl mb-6 md:mb-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C5A880]" />
            <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed font-medium pl-4 md:pl-6 py-0.5">
              Do planejamento e projetos à fiscalização de canteiro. Rigor normativo, relatórios precisos e controle de insumos.
            </p>
          </div>

          {/* Key Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 md:mb-8 max-w-xl">
            <div className="bg-white/50 backdrop-blur-md p-3 border border-[#1A1A1A]/10 shadow-xs min-w-0">
              <span className="text-[8px] uppercase tracking-wider text-[#C5A880] font-bold block mb-1">Responsabilidade</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#1A1A1A] uppercase flex items-center gap-1 leading-tight">
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                <span className="truncate">ART/TRT Emissão</span>
              </span>
            </div>
            <div className="bg-white/50 backdrop-blur-md p-3 border border-[#1A1A1A]/10 shadow-xs min-w-0">
              <span className="text-[8px] uppercase tracking-wider text-[#C5A880] font-bold block mb-1">Normas NBR</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#1A1A1A] uppercase leading-tight block truncate">100% Conformidade</span>
            </div>
            <div className="bg-white/50 backdrop-blur-md p-3 border border-[#1A1A1A]/10 shadow-xs col-span-2 sm:col-span-1 min-w-0">
              <span className="text-[8px] uppercase tracking-wider text-[#C5A880] font-bold block mb-1">Atendimento</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#1A1A1A] uppercase leading-tight block truncate">Suporte Direto</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/5511999196556"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2.5 bg-[#1A1A1A] text-white px-6 sm:px-8 py-4 sm:py-4.5 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg border border-white/10"
            >
              <MessageCircle size={16} className="group-hover:rotate-12 transition-transform shrink-0" />
              <span>Solicitar Consultoria</span>
              <ArrowUpRight size={15} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
            <a
              href="#ferramentas"
              className="flex items-center justify-center gap-2.5 border-2 border-[#1A1A1A] bg-white/40 backdrop-blur-sm text-[#1A1A1A] px-6 sm:px-8 py-4 sm:py-4.5 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 shadow-xs group"
            >
              <Ruler size={16} className="group-hover:scale-110 transition-transform shrink-0" />
              <span>Simulador de Obra</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Visual Graphic & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Photo Frame - Square Frame with Glass Border */}
          <div className="aspect-[4/5] relative bg-[#1A1A1A] border border-[#1A1A1A]/20 shadow-2xl group overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80"
              fallbackSrc="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80"
              alt="Engenharia Civil e Edificações - Phellipe Carvalho"
              className="object-cover w-full h-full brightness-[0.9] contrast-[1.1] group-hover:scale-105 transition-transform duration-1000 ease-out"
              badgeText="EXCELÊNCIA TÉCNICA CFT"
            />

            {/* Glass Overlay Card inside Frame */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-xl p-6 border border-white/15 text-white flex justify-between items-center shadow-2xl">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-bold block mb-1">
                  Phellipe Carvalho
                </span>
                <span className="font-display font-bold text-base tracking-wide uppercase block">
                  Edificações & Projetos
                </span>
              </div>
              <div className="w-10 h-10 bg-[#C5A880] text-[#1A1A1A] font-display font-black flex items-center justify-center text-sm">
                CFT
              </div>
            </div>
          </div>

          {/* Floating Experience Glass Card */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl p-6 border border-[#1A1A1A]/10 shadow-xl hidden sm:flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center font-display font-black text-xl">
              3
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#1A1A1A] block">
                Anos de Atuação
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#C5A880] font-bold block">
                Projetos, Estudos & Obras
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

