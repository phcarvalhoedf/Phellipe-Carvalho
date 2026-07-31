/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Instagram, MessageCircle, ArrowUpRight, Check, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('phcarvalho.edf@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-28 bg-[#F5F2ED] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-[#C5A880]" />
                <span className="text-[#C5A880] text-[10px] font-extrabold uppercase tracking-[0.4em]">
                  Atendimento Técnico
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-[#1A1A1A] tracking-tight uppercase leading-[0.95] hyphens-none break-normal">
                SOLICITE SEU <br />
                <span className="italic font-normal text-[#C5A880] lowercase tracking-normal">
                  orçamento sem compromisso.
                </span>
              </h2>
              <p className="text-[11px] md:text-sm text-[#1A1A1A]/70 font-medium leading-relaxed mt-4">
                Preencha os dados ao lado para ser direcionado diretamente ao atendimento via WhatsApp com a mensagem estruturada.
              </p>
            </div>

            {/* Quick Contact Cards - Square Glass */}
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511999196556"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/70 border border-[#1A1A1A]/10 hover:border-[#C5A880] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-[#C5A880] flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A880] block">WhatsApp Direto</span>
                    <span className="text-sm font-display font-bold text-[#1A1A1A]">(11) 99919-6556</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#1A1A1A]/40 group-hover:text-[#C5A880] transition-colors" />
              </a>

              <div className="p-4 bg-white/70 border border-[#1A1A1A]/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A880] block">E-mail Comercial</span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#1A1A1A] block truncate max-w-[170px] sm:max-w-none">
                      phcarvalho.edf@gmail.com
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all cursor-pointer shrink-0"
                >
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              <a 
                href="https://instagram.com/phcarvalho.edf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/70 border border-[#1A1A1A]/10 hover:border-[#C5A880] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A880] block">Instagram</span>
                    <span className="text-sm font-display font-bold text-[#1A1A1A]">@phcarvalho.edf</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#1A1A1A]/40 group-hover:text-[#C5A880] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-md p-8 md:p-12 border border-[#1A1A1A]/15 shadow-xl">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#1A1A1A]/10">
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
                Formulário de Atendimento Técnico
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">WhatsApp Ativo</span>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const area = formData.get('area');
                const service = formData.get('service');
                const message = formData.get('message');
                
                const text = `*SOLICITAÇÃO DE ORÇAMENTO TÉCNICO*\n----------------------------------\n*👤 NOME:* ${name}\n*📧 E-MAIL:* ${email}\n*📐 ÁREA APROX:* ${area} m²\n*🏗️ SERVIÇO:* ${service}\n----------------------------------\n*💬 DETALHES DO PROJETO:*\n${message}\n----------------------------------\n_Enviado via phcarvalho.com.br_`;
                window.open(`https://wa.me/5511999196556?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/70">
                    Nome Completo *
                  </label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Seu nome ou empresa"
                    className="w-full bg-white/80 border border-[#1A1A1A]/15 px-4 py-3 text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/70">
                    E-mail de Contato *
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-white/80 border border-[#1A1A1A]/15 px-4 py-3 text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/70">
                    Serviço Desejado *
                  </label>
                  <select 
                    name="service"
                    required
                    className="w-full bg-white/80 border border-[#1A1A1A]/15 px-4 py-3 text-xs font-bold uppercase text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Reforma Residencial / Comercial">Reforma Residencial / Comercial</option>
                    <option value="Regularização & Habite-se">Regularização & Habite-se</option>
                    <option value="Gerenciamento de Obra">Gerenciamento de Obra</option>
                    <option value="Orçamento & Planejamento">Orçamento & Planejamento</option>
                    <option value="Projeto Executivo / BIM">Projeto Executivo / BIM</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/70">
                    Área Aproximada (m²)
                  </label>
                  <input 
                    name="area"
                    type="number" 
                    placeholder="Ex: 80"
                    className="w-full bg-white/80 border border-[#1A1A1A]/15 px-4 py-3 text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/70">
                  Descrição / Mensagem *
                </label>
                <textarea 
                  name="message"
                  required
                  placeholder="Descreva brevemente o imóvel, localização e objetivos da obra..."
                  rows={4}
                  className="w-full bg-white/80 border border-[#1A1A1A]/15 px-4 py-3 text-xs font-medium text-[#1A1A1A] focus:outline-none focus:border-[#C5A880] resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                <MessageCircle size={16} />
                <span>Enviar para o WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

