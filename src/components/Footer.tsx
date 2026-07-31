/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Instagram, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-[#1A1A1A] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-display font-black tracking-tight uppercase text-white">
                PHELLIPE <span className="text-[#C5A880]">CARVALHO</span>
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-widest bg-[#C5A880] text-[#1A1A1A] px-2 py-0.5">
                CFT SP
              </span>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-medium">
              Técnico em Edificações especializado em projetos executivos, regularização de imóveis, planejamento orçamentário e gerenciamento de obras com alto padrão técnico e transparência.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              <a 
                href="https://wa.me/5511999196556" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all"
              >
                <MessageCircle size={16} />
              </a>
              <a 
                href="https://instagram.com/phcarvalho.edf" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="mailto:phcarvalho.edf@gmail.com" 
                aria-label="E-mail"
                className="w-9 h-9 border border-white/20 bg-white/5 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] block">
              Navegação do Site
            </span>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              {
                [
                  { label: 'Início', href: '#' },
                  { label: 'Serviços Técnicos', href: '#servicos' },
                  { label: 'Recursos & Simulador', href: '#ferramentas' },
                  { label: 'Acervo & Projetos', href: '#projetos' },
                  { label: 'Perfil Profissional', href: '#sobre' },
                  { label: 'Perguntas Frequentes', href: '#faq' },
                  { label: 'Solicitar Orçamento', href: '#contato' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#C5A880] transition-colors block">
                      {item.label}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Technical Scope & Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A880] block">
              Credenciais & Conformidade
            </span>

            <div className="bg-white/5 p-4 border border-white/10 space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>CFT / CRT Regularizado</span>
              </div>
              <p className="text-[11px] text-white/60 leading-normal">
                Habilitado para projetos e execuções até 80m² conforme legislação federal vigente do Conselho de Técnicos.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <div>
            © {currentYear} Phellipe Carvalho. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-[#C5A880] transition-colors cursor-pointer bg-white/5 px-3 py-1.5 border border-white/10"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}

