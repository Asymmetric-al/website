import React, { 
  useEffect, 
  useRef, 
  useState, 
  ButtonHTMLAttributes, 
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode, 
  CSSProperties, 
  forwardRef, 
  memo, 
  useCallback 
} from 'react';
import { Loader2, Plus } from 'lucide-react';
import { ButtonVariant } from '../types';
import { cn } from '../lib/utils';

// --- Constants ---
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@$";

// Strict spacing: h-12 (48px) for touch targets. rounded-sm (2px) for technical feel.
const BUTTON_BASE_STYLES = "inline-flex items-center justify-center h-12 px-8 text-[11px] transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-[0.2em] font-mono uppercase border group relative overflow-hidden focus-visible:ring-1 focus-visible:ring-primary rounded-sm";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: "bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background",
  [ButtonVariant.SECONDARY]: "bg-transparent border-border text-muted-foreground hover:border-foreground hover:text-foreground",
  [ButtonVariant.TERTIARY]: "bg-transparent border-transparent text-muted-foreground hover:text-foreground px-0 h-auto py-2 underline-offset-4 hover:underline",
};

// --- Logo ---
interface LogoProps {
  readonly className?: string;
}

export const Logo = memo(({ className = "w-6 h-6" }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 4V20" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
  </svg>
));

Logo.displayName = 'Logo';

// --- Scramble Text ---
interface ScrambleTextProps {
  readonly text: string;
  readonly className?: string;
  readonly delay?: number;
}

export const ScrambleText = memo(({ text, className = "", delay = 0 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;
    let iteration = 0;
    
    const startScramble = () => {
      interval = setInterval(() => {
        setDisplay(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    timeout = setTimeout(startScramble, delay);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={`font-mono ${className}`}>{display}</span>;
});

ScrambleText.displayName = 'ScrambleText';

// --- Container ---
// Max width set to 1280px (7xl) for consistency. Padding follows 6/12 scale.
interface ContainerProps {
  readonly children?: ReactNode;
  readonly className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={cn("max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full", className)}>
    {children}
  </div>
);

// --- Reveal (Lazy Load Animation) ---
interface RevealProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly key?: React.Key | null;
}

export const Reveal = ({ 
  children, 
  className = "", 
  delay = 0 
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Tech Panel (Card) ---
interface TechPanelProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly title?: string;
  readonly noBorder?: boolean;
}

export const TechPanel = ({ children, className = '', title, noBorder = false }: TechPanelProps) => {
  return (
    <div className={cn(
      "relative bg-card group overflow-hidden rounded-sm",
      !noBorder && "border border-border",
      className
    )}>
      {/* Subtle corner markers */}
      {!noBorder && (
        <div className="pointer-events-none text-border" aria-hidden="true">
          <div className="absolute top-0 left-0 w-px h-2 bg-current" />
          <div className="absolute top-0 left-0 w-2 h-px bg-current" />
          <div className="absolute top-0 right-0 w-px h-2 bg-current" />
          <div className="absolute top-0 right-0 w-2 h-px bg-current" />
          <div className="absolute bottom-0 left-0 w-px h-2 bg-current" />
          <div className="absolute bottom-0 left-0 w-2 h-px bg-current" />
          <div className="absolute bottom-0 right-0 w-px h-2 bg-current" />
          <div className="absolute bottom-0 right-0 w-2 h-px bg-current" />
        </div>
      )}
      
      {title && (
        <div className="absolute top-0 left-0 right-0 border-b border-border px-6 py-3 flex justify-between items-center bg-card">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</span>
        </div>
      )}

      {/* Consistent padding: 24px (p-6) or 32px (p-8) on desktop */}
      <div className={title ? 'pt-16 px-6 pb-6 md:px-8 md:pb-8' : 'p-6 md:p-8'}>
        {children}
      </div>
    </div>
  );
};

// --- Spotlight Card (Performance Optimized) ---
interface SpotlightCardProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly key?: React.Key | null;
}

export const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
    }, []);

    const handleMouseEnter = useCallback(() => setOpacity(1), []);
    const handleMouseLeave = useCallback(() => setOpacity(0), []);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "relative overflow-hidden border border-border bg-card rounded-sm",
              className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--spotlight), transparent 40%)`,
                }}
                aria-hidden="true"
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

// --- Button ---
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly isLoading?: boolean;
  readonly icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  className = '', 
  isLoading = false, 
  icon,
  disabled,
  ...props 
}, ref) => {
  return (
    <button 
      ref={ref}
      className={cn(BUTTON_BASE_STYLES, BUTTON_VARIANTS[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {!isLoading && icon && <span className="mr-3 group-hover:translate-x-0.5 transition-transform">{icon}</span>}
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

// --- Input (Standardized) ---
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className = "", label, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block ml-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-sm border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:border-primary/50 focus:bg-secondary focus:ring-1 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && 'border-destructive focus:border-destructive',
          className
        )}
        {...props}
      />
      {error && <span className="text-destructive text-xs ml-1">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

// --- TextArea (Standardized) ---
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className = "", label, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block ml-1">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:border-primary/50 focus:bg-secondary focus:ring-1 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200",
          error && 'border-destructive focus:border-destructive',
          className
        )}
        {...props}
      />
      {error && <span className="text-destructive text-xs ml-1">{error}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

// --- Section ---
interface SectionProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly id?: string;
  readonly grid?: boolean;
}

// Consistent padding rhythm: py-24 (96px) and md:py-32 (128px)
export const Section = ({ children, className = '', id, grid = false }: SectionProps) => {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 overflow-hidden bg-background", className)}>
       {grid && (
         <div className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)', 
                backgroundSize: '60px 60px' 
              }}
              aria-hidden="true"
         />
       )}
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
};

// --- Grid Pattern ---
interface GridPatternProps {
  readonly className?: string;
}

export const GridPattern = ({ className = "" }: GridPatternProps) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)} aria-hidden="true">
      <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }}
      />
    </div>
  );
};

// --- Dither Grid ---
interface DitherGridProps {
  readonly className?: string;
}

export const DitherGrid = ({ className = "" }: DitherGridProps) => {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)} aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }}
      />
    </div>
  );
};

// --- Enhanced Dither Globe (ULTRA RAD EDITION) ---
interface DitherGlobeProps {
  readonly className?: string;
  readonly scale?: number;
}

export const DitherGlobe = memo(({ className = "", scale = 1 }: DitherGlobeProps) => {
  const sizeStyle: CSSProperties = { width: `${500 * scale}px`, height: `${500 * scale}px` };

  return (
    <div 
        className={cn("relative flex items-center justify-center select-none pointer-events-none", className)}
        style={sizeStyle}
        aria-hidden="true"
    >
      
      {/* Main Globe Container with Mask */}
      <div className="absolute inset-0 rounded-full bg-background overflow-hidden z-10 border border-border">
        
        {/* Layer 1: Core (Dense, Slow) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_120s_linear_infinite] opacity-50">
          <div className="absolute inset-0" 
               style={{
                  backgroundImage: 'radial-gradient(circle at center, var(--globe-dot) 1.5px, transparent 1.5px)',
                  backgroundSize: '20px 20px',
                  transform: 'rotate(45deg)'
               }}
          />
        </div>

        {/* Layer 2: Surface (Sparse, Reverse, Fast) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin-reverse_45s_linear_infinite] opacity-40 mix-blend-overlay">
           <div className="absolute inset-0" 
               style={{
                  backgroundImage: 'radial-gradient(circle at center, var(--globe-dot) 2px, transparent 2px)',
                  backgroundSize: '40px 40px',
               }}
          />
        </div>
        
        {/* Layer 3: Deep Data (Medium, Offset) */}
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_90s_linear_infinite] opacity-30 mix-blend-screen">
            <div className="absolute inset-0"
                 style={{
                     backgroundImage: 'radial-gradient(circle at center, var(--globe-dot) 1px, transparent 2px)',
                     backgroundSize: '24px 24px',
                     transform: 'rotate(-15deg)'
                 }}
            />
        </div>

        {/* 3D Shading Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_10%,var(--background)_90%)] z-20" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full animate-scan z-30 pointer-events-none opacity-40" />

        {/* Rim Light */}
        <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_60px_var(--spotlight)] z-30" />
      </div>
      
      {/* Outer Orbital Ring (Static Tilt) */}
      <div className="absolute inset-[-10%] rounded-full border border-dashed border-border animate-[spin-slow_180s_linear_infinite] opacity-30 z-0" />
      <div className="absolute inset-[-25%] rounded-full border border-dotted border-border animate-[spin-reverse-slower_200s_linear_infinite] opacity-20 z-0" />

      {/* Dynamic Satellite 1 (Bot) */}
      <div className="absolute inset-[-20%] w-[140%] h-[140%] animate-spin-slow z-0 opacity-60">
         <div className="absolute top-1/2 right-0 w-2 h-2 bg-foreground rounded-full shadow-[0_0_15px_var(--foreground)]" />
      </div>

      {/* Dynamic Satellite 2 (Bot - Counter Orbit) */}
       <div className="absolute inset-[-35%] w-[170%] h-[170%] animate-[spin-reverse_60s_linear_infinite] z-0 opacity-40">
         <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-success rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      </div>

      {/* Crosshairs & HUD Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-muted-foreground z-0"><Plus size={16} /></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 text-muted-foreground z-0"><Plus size={16} /></div>
      <div className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 text-muted-foreground z-0"><Plus size={16} /></div>
      <div className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 text-muted-foreground z-0"><Plus size={16} /></div>
    </div>
  );
});

DitherGlobe.displayName = 'DitherGlobe';