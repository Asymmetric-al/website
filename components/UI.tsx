
import React, { useEffect, useRef, useState } from 'react';
import { ButtonVariant } from '../types';
import { Loader2, Plus, MousePointer2 } from 'lucide-react';

// --- Logo ---
export const Logo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 4V20" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
  </svg>
);

// --- Container ---
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-[1280px] mx-auto px-6 md:px-12 ${className}`}>
    {children}
  </div>
);

// --- Reveal (Lazy Load Animation) ---
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Tech Panel (Card) ---
interface TechPanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  noBorder?: boolean;
}

export const TechPanel: React.FC<TechPanelProps> = ({ children, className = '', title, noBorder = false }) => {
  return (
    <div className={`relative bg-offblack/40 ${!noBorder ? 'border border-white/5' : ''} ${className} group overflow-hidden`}>
      {/* Subtle corner markers */}
      {!noBorder && (
        <>
          <div className="absolute top-0 left-0 w-px h-2 bg-white/20"></div>
          <div className="absolute top-0 left-0 w-2 h-px bg-white/20"></div>
          <div className="absolute top-0 right-0 w-px h-2 bg-white/20"></div>
          <div className="absolute top-0 right-0 w-2 h-px bg-white/20"></div>
          <div className="absolute bottom-0 left-0 w-px h-2 bg-white/20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-px bg-white/20"></div>
          <div className="absolute bottom-0 right-0 w-px h-2 bg-white/20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-px bg-white/20"></div>
        </>
      )}
      
      {title && (
        <div className="absolute top-0 left-0 right-0 border-b border-white/5 px-6 py-3 flex justify-between items-center bg-white/[0.02]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{title}</span>
        </div>
      )}

      <div className={title ? 'pt-16 p-6 md:p-8' : 'p-6 md:p-8'}>
        {children}
      </div>
    </div>
  );
};

// --- Spotlight Card ---
export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden border border-white/10 bg-black ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};


// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  className = '', 
  isLoading, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-widest font-mono uppercase border group relative overflow-hidden";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-white text-black border-white hover:bg-transparent hover:text-white",
    [ButtonVariant.SECONDARY]: "bg-transparent border-border text-muted hover:border-white hover:text-white",
    [ButtonVariant.TERTIARY]: "bg-transparent border-transparent text-muted hover:text-white px-0 py-1 underline-offset-4 hover:underline",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && icon && <span className="mr-2 group-hover:translate-x-0.5 transition-transform">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

// --- Section ---
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, grid = false }) => {
  return (
    <section id={id} className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
       {grid && (
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                backgroundSize: '60px 60px' 
              }}>
         </div>
       )}
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
};

// --- Dither Grid ---
export const DitherGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}>
      </div>
    </div>
  );
};

// --- Enhanced Dither Globe (RAD EDITION) ---
export const DitherGlobe: React.FC<{ className?: string, scale?: number }> = ({ className = "", scale = 1 }) => {
  return (
    <div 
        className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
        style={{ width: `${500 * scale}px`, height: `${500 * scale}px` }}
    >
      
      {/* Main Globe Container with Mask */}
      <div className="absolute inset-0 rounded-full bg-black overflow-hidden z-10 border border-white/5">
        
        {/* Layer 1: Core (Dense, Slow) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_120s_linear_infinite] opacity-40">
          <div className="absolute inset-0" 
               style={{
                  backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  transform: 'rotate(45deg)'
               }}
          ></div>
        </div>

        {/* Layer 2: Surface (Sparse, Reverse, Fast) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin-reverse_45s_linear_infinite] opacity-30 mix-blend-overlay">
           <div className="absolute inset-0" 
               style={{
                  backgroundImage: 'radial-gradient(circle at center, #fff 2px, transparent 2px)',
                  backgroundSize: '40px 40px',
               }}
          ></div>
        </div>
        
        {/* Layer 3: Deep Data (Medium, Offset) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_90s_linear_infinite] opacity-20 mix-blend-screen">
            <div className="absolute inset-0"
                 style={{
                     backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 2px)',
                     backgroundSize: '24px 24px',
                     transform: 'rotate(-15deg)'
                 }}
            ></div>
        </div>

        {/* 3D Shading Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_10%,black_90%)] z-20"></div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[20%] w-full animate-scan z-30 pointer-events-none opacity-30"></div>

        {/* Rim Light */}
        <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_60px_rgba(255,255,255,0.05)] z-30"></div>
      </div>
      
      {/* Outer Orbital Ring (Static Tilt) */}
      <div className="absolute inset-[-10%] rounded-full border border-dashed border-white/10 animate-[spin-slow_180s_linear_infinite] opacity-20 z-0"></div>
      
      {/* Dynamic Satellite */}
      <div className="absolute inset-[-20%] w-[140%] h-[140%] animate-spin-slow z-0 opacity-40">
         <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
      </div>

      {/* Crosshairs & HUD Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-white/20 z-0"><Plus size={16} /></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 text-white/20 z-0"><Plus size={16} /></div>
      <div className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 text-white/20 z-0"><Plus size={16} /></div>
      <div className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 text-white/20 z-0"><Plus size={16} /></div>
      
      {/* Decorative Horizontal Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

    </div>
  );
};

// --- Grid Pattern ---
export const GridPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }}>
      </div>
    </div>
  );
};
