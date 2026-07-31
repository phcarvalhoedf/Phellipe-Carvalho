/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, Calculator, PhoneCall, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#servicos" },
    { name: "Ferramentas", href: "#ferramentas" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', '')).filter(Boolean);
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#C5A880]/20 z-[110]">
        <div 
          className="h-full bg-[#C5A880] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glass Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#F5F2ED]/80 backdrop-blur-xl border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Square Brand Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center font-display font-black text-lg border border-white/10 group-hover:bg-[#C5A880] group-hover:text-[#1A1A1A] transition-colors duration-300">
              PH
            </div>
            <div className="flex flex-col">
              <span className="text-[#1A1A1A] text-xl font-display font-black tracking-tight leading-none uppercase group-hover:text-[#C5A880] transition-colors duration-300">
                PH.CARVALHO
              </span>
              <div className="flex items-center gap-2 mt-1">
                <ShieldCheck size={12} className="text-[#C5A880]" />
                <span className="text-[#C5A880] text-[9px] tracking-[0.3em] font-bold uppercase">
                  CFT Ativo • Edificações
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = (link.href === "#" && !activeSection) || activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 py-2 relative group ${
                    isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A880] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="https://wa.me/5511999196556"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all border border-white/10 flex items-center gap-2"
            >
              <MessageCircle size={14} />
              Consultoria Técnica
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#1A1A1A] p-3 bg-white/60 border border-[#1A1A1A]/10 hover:bg-[#1A1A1A] hover:text-white transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Square Glass Layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-[#1A1A1A]/95 backdrop-blur-2xl text-white md:hidden overflow-y-auto flex flex-col justify-between border-l border-white/10"
          >
            {/* Header in Drawer */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C5A880] text-[#1A1A1A] flex items-center justify-center font-display font-black text-sm">
                  PH
                </div>
                <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
                  Navegação Técnica
                </span>
              </div>
              <button
                className="text-white p-2.5 border border-white/20 hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar Menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-8 space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-[#C5A880] hover:bg-white/10 transition-all group"
                >
                  <span className="text-xs font-mono text-[#C5A880]">0{i + 1}</span>
                  <span className="font-display text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#C5A880]">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="p-8 border-t border-white/10 bg-white/5 space-y-3">
              <a
                href="https://wa.me/5511999196556"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-[#C5A880] text-[#1A1A1A] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 border border-[#C5A880]"
              >
                <MessageCircle size={16} />
                WhatsApp do Técnico
              </a>
              <div className="text-center text-[10px] text-white/40 uppercase tracking-widest pt-2">
                Registro CFT/CRT • Atendimento Especializado
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile Bottom Quick Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[#1A1A1A]/95 backdrop-blur-md border-t border-white/10 px-2 py-1 md:hidden flex justify-around items-center text-white pb-safe">
        <a 
          href="#ferramentas" 
          className="flex flex-col items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-white/70 hover:text-[#C5A880] min-w-[64px] min-h-[48px] justify-center"
        >
          <Calculator size={18} className="text-[#C5A880]" />
          <span>Simulador</span>
        </a>
        <a 
          href="#servicos" 
          className="flex flex-col items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-white/70 hover:text-[#C5A880] min-w-[64px] min-h-[48px] justify-center"
        >
          <ShieldCheck size={18} className="text-[#C5A880]" />
          <span>Serviços</span>
        </a>
        <a 
          href="https://wa.me/5511999196556" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#C5A880] text-[#1A1A1A] px-3 py-2 font-bold text-[9px] uppercase tracking-wider border border-[#C5A880] min-h-[40px]"
        >
          <PhoneCall size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}

