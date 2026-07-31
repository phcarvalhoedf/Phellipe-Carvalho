/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Compass, FileCheck2 } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  badgeText?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackSrc = "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80",
  badgeText = "DESENHO TÉCNICO CAD/BIM",
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      // Try backup fallback image first
      setCurrentSrc(fallbackSrc);
    } else {
      // If backup image also fails, render CAD Blueprint SVG
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`relative bg-[#1A1A1A] border border-white/10 flex flex-col justify-between p-6 text-white overflow-hidden ${className}`}>
        {/* Background CAD Grid Graphic */}
        <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
        
        <div className="relative z-10 flex justify-between items-start">
          <div className="w-10 h-10 bg-[#C5A880] text-[#1A1A1A] font-display font-black flex items-center justify-center text-xs">
            CFT
          </div>
          <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase border border-[#C5A880]/30 px-2 py-0.5 bg-[#C5A880]/10">
            {badgeText}
          </span>
        </div>

        <div className="relative z-10 my-auto py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
            <Compass className="animate-spin-slow" size={32} />
          </div>
          <h4 className="font-display font-bold uppercase tracking-wider text-sm md:text-base text-white">
            {alt}
          </h4>
          <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-mono">
            Projetos Executivos & Modelagem NBR
          </p>
        </div>

        <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-white/40">
          <span className="flex items-center gap-1">
            <FileCheck2 size={12} className="text-[#C5A880]" />
            CFT SP Regular
          </span>
          <span>Escala 1:50</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1A1A1A]">
      {isLoading && (
        <div className="absolute inset-0 bg-[#1A1A1A] animate-pulse flex items-center justify-center z-10">
          <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-widest">
            Carregando Imagem...
          </span>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
}
