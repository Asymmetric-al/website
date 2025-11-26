
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Code } from 'lucide-react';
import { 
  Section, 
  Button, 
  Reveal, 
  DitherGrid, 
  DitherGlobe, 
  SpotlightCard, 
  Container, 
  ScrambleText 
} from '../components/UI';
import { ButtonVariant } from '../types';
import InfrastructureBento from '../components/InfrastructureBento';

// --- Types ---

interface PhilosophyItem {
  readonly title: string;
  readonly desc: string;
}

// --- Static Data ---

const TICKER_ITEMS: readonly string[] = [
  "Unified Operating System",
  "Accelerating the Great Commission",
  "Open Source Core",
  "Soli Deo Gloria",
  "Zero Admin Drag",
  "Tenant Sovereignty Architecture",
  "Missions-First Design",
  "Small Inputs, Exponential Outputs",
  "By Missionaries, For Missionaries",
  "Nonprofit 501(c)(3)",
  "Secure Data Stewardship",
  "No Vendor Lock-in",
  "Offline-First Architecture",
  "Automated Reconciliation",
  "Deploy with Confidence",
  "Global Edge Network",
  "Real-time Observability",
  "Donation Processing",
  "Partner Relationship Management",
  "Digital Security",
  "Kingdom Impact",
  "Headless CMS",
  "Audit-Ready Finance",
  "Mobilization Pipelines"
] as const;

const PHILOSOPHY_CARDS: readonly PhilosophyItem[] = [
    { 
        title: "Unified Surface", 
        desc: "One login for finance, mobilization, and care. No context switching between fragmented tools. Your people stay focused." 
    },
    { 
        title: "Tenant Sovereignty", 
        desc: "You own your data. You own your payment keys. No lock-in. Your domains, your reputation. We are stewards, not owners." 
    },
    { 
        title: "Open Foundations", 
        desc: "Built on proven open-source standards (Next.js, Keycloak, WordPress). Extensible by design. Safe for the long haul." 
    }
] as const;

// --- Sub-Components ---

const HeroSection = memo(() => (
    // Standardized padding: min-h-screen minus nav height, strictly centered.
    <div className="relative flex items-center justify-center isolate overflow-hidden min-h-[95vh] pt-20 bg-background">
        <DitherGrid />
        
        {/* Layer 0: Background Globe - CSS Containment for Perf */}
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-50 scale-75 md:scale-110 pointer-events-none will-change-transform mix-blend-screen"
            aria-hidden="true"
        >
            <DitherGlobe scale={1.2} />
        </div>

        {/* Layer 1: Content - LCP Critical Path */}
        <div className="relative z-10 w-full">
            <Container className="text-center flex flex-col items-center">
                
                {/* Badge - CSS Animation (Immediate) */}
                <div className="flex justify-center mb-10 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-background/60 text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur-md rounded-full shadow-2xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                        <ScrambleText text="Mission Operating System" delay={200} />
                    </div>
                </div>
                
                {/* H1 - LCP Element - CSS Animation (Immediate + 100ms delay) */}
                <div className="opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_100ms_forwards] max-w-5xl">
                    <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-semibold tracking-tighter mb-8 text-foreground leading-[0.9] drop-shadow-2xl text-balance">
                        Run the Work<br/>
                        In One Place
                    </h1>
                </div>
                
                {/* Subtext - CSS Animation (Immediate + 200ms delay) */}
                <div className="relative inline-block opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
                    {/* Subtle backdrop to ensure text readability over globe */}
                    <div className="absolute inset-0 bg-background/60 blur-3xl -z-10 rounded-full" aria-hidden="true"></div>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed text-balance">
                        Less admin. More ministry.
                        The unified platform for the modern missions agency.
                    </p>
                </div>
                
                {/* Buttons - CSS Animation (Immediate + 300ms delay) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
                    <Link to="/missions">
                        <Button variant={ButtonVariant.PRIMARY} icon={<Terminal size={14}/>}>
                            Request a Call
                        </Button>
                    </Link>
                    <Link to="/product">
                        <Button variant={ButtonVariant.SECONDARY}>
                            See the Platform
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    </div>
));

HeroSection.displayName = 'HeroSection';

const TickerSection = memo(() => {
    return (
        <div 
            className="border-y border-border bg-background overflow-hidden py-4 relative z-20 flex select-none group"
            aria-hidden="true"
        >
            {/* 
                Seamless Loop Strategy:
                Two identical flex containers animate side-by-side. 
            */}
            {[0, 1].map((i) => (
                <div 
                    key={i} 
                    className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused] will-change-transform"
                >
                    {TICKER_ITEMS.map((text, j) => (
                        <div key={`${i}-${j}`} className="flex items-center mx-4 group/item cursor-default">
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 whitespace-nowrap">
                                {text}
                            </span>
                            <span className="ml-8 text-[10px] md:text-xs text-muted-foreground/30 font-normal font-mono select-none">//</span>
                        </div>
                    ))}
                </div>
            ))}
            
            {/* Gradient masks for smooth fade-in/out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        </div>
    );
});

TickerSection.displayName = 'TickerSection';

const PhilosophySection = memo(() => (
    <Section className="bg-background relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: The Concept (Sticky on Desktop) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 self-start">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-8 text-foreground text-balance tracking-tighter leading-[0.9]">Why the name?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-12 text-lg font-light text-balance border-l border-border pl-6">
                        Good tools let simple actions create larger outcomes. We believe God multiplies faithfulness. 
                        If God is in it, little becomes much.
                    </p>
                    
                    {/* The Multiplier Visualization - Engineered for Alignment */}
                    <div className="relative aspect-[4/3] flex flex-col items-center justify-center p-6 md:p-10 border border-border bg-gradient-to-b from-card to-background rounded-sm overflow-hidden shadow-2xl group">
                        
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-[0.03]" 
                             style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                             aria-hidden="true"
                        />
                        
                        {/* The Equation */}
                        <div className="flex items-center justify-between w-full relative z-10 px-2 h-full">
                            {/* "1" */}
                            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-display font-bold text-foreground leading-none tracking-tighter select-none drop-shadow-2xl flex-shrink-0">
                                1
                            </span>
                            
                            {/* Connector */}
                            <div className="flex-1 mx-4 sm:mx-8 relative flex items-center justify-center">
                                {/* Track */}
                                <div className="w-full h-px bg-border relative overflow-visible">
                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                                </div>
                                {/* Arrow Badge */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-2 rounded-full border border-border text-foreground shadow-sm group-hover:scale-110 transition-transform duration-500 z-10">
                                    <ArrowRight size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </div>
                            </div>
                            
                            {/* "∞" */}
                            <span className="text-8xl sm:text-9xl md:text-[11rem] lg:text-[12rem] font-display font-bold text-foreground leading-none tracking-tighter select-none drop-shadow-2xl flex-shrink-0 translate-y-2">
                                ∞
                            </span>
                        </div>
                        
                        {/* Label - Pinned to bottom */}
                        <div className="mt-auto pt-8 border-t border-border w-full text-center relative z-20">
                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block">
                                Simple Faithfulness → Exponential Impact
                            </span>
                        </div>
                    </div>
                </Reveal>
            </div>
            
            {/* Right Column: The Pillars */}
            <div className="lg:col-span-7 space-y-6 pt-8 lg:pt-0">
                {PHILOSOPHY_CARDS.map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <SpotlightCard className="p-8 md:p-12 group bg-card border-border hover:border-foreground/30 transition-all relative overflow-hidden flex flex-col justify-center min-h-[280px]">
                             {/* Watermark Number - Absolute positioning */}
                             <div className="absolute right-8 top-0 text-[6rem] md:text-[8rem] font-display font-bold text-foreground opacity-[0.03] pointer-events-none select-none z-0 leading-none">
                                {(i + 1).toString().padStart(2, '0')}
                            </div>
                            
                            <div className="relative z-10 max-w-xl flex flex-col justify-center">
                                <div className="bg-background/80 backdrop-blur-md w-fit px-3 py-1 mb-4 border border-border rounded-sm">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors font-light text-lg leading-relaxed text-balance">
                                    {item.desc}
                                </p>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </div>
    </Section>
));

PhilosophySection.displayName = 'PhilosophySection';

const RecruitmentSection = memo(() => (
    <Section className="relative z-10 border-t border-border bg-card">
        <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12 border border-border bg-background/50 backdrop-blur-sm rounded-sm">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-1.5 bg-success/10 rounded-sm">
                            <Code size={16} className="text-success" />
                        </div>
                        <span className="font-mono text-xs text-success uppercase tracking-widest">Hiring Builders</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
                        Write code for the<br />Great Commission.
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                        We are looking for high-agency senior engineers, designers, and problem solvers who want to use their craft for a higher purpose. 
                        Join the core team or contribute to the open source ecosystem.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/join">
                        <Button 
                            variant={ButtonVariant.SECONDARY} 
                            className="h-16 px-10 border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                        >
                            Join the Team <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </Reveal>
    </Section>
));

RecruitmentSection.displayName = 'RecruitmentSection';

// --- Main Component ---

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-foreground selection:text-background overflow-x-hidden font-sans">
      <HeroSection />
      <TickerSection />
      <PhilosophySection />
      <InfrastructureBento />
      <RecruitmentSection />
    </div>
  );
};

export default Home;