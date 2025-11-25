
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Section, Button, Reveal, DitherGrid, DitherGlobe, SpotlightCard, Container, ScrambleText } from '../components/UI';
import { ButtonVariant } from '../types';
import { ArrowRight, Terminal, Activity, Lock, Scale, Clock, Globe, Code, LucideIcon } from 'lucide-react';

// --- Types ---

interface PhilosophyItem {
  title: string;
  desc: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  meta: string;
}

// --- Static Data ---

const TICKER_ITEMS = [
  "Unified Operating System",
  "Accelerating the Great Commission",
  "Open Source Core",
  "Soli Deo Gloria",
  "Zero Admin Drag",
  "Tenant Sovereign Architecture",
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
];

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
];

const FEATURES_DATA: readonly FeatureItem[] = [
    { icon: Terminal, title: "Headless CMS", meta: "Next.js + WP" },
    { icon: Activity, title: "Real-time Data", meta: "TanStack Query" },
    { icon: Lock, title: "Identity", meta: "Keycloak SSO" },
    { icon: Scale, title: "Balance", meta: "Auto Reconciliation" },
    { icon: Clock, title: "Observability", meta: "OpenTelemetry" },
    { icon: Globe, title: "Governance", meta: "Audit Logs" }
];

// --- Sub-Components ---

const HeroSection: React.FC = () => (
    <div className="relative min-h-screen flex items-center justify-center isolate overflow-hidden">
        <DitherGrid />
        
        {/* Layer 0: Background Globe - CSS Containment for Perf */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-70 scale-50 md:scale-100 pointer-events-none will-change-transform">
            <DitherGlobe scale={1.2} />
        </div>

        {/* Layer 1: Content - LCP Critical Path */}
        <div className="relative z-10 w-full">
            <Container className="text-center">
                
                {/* Badge - CSS Animation (Immediate) */}
                <div className="flex justify-center mb-12 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-black/60 text-[10px] font-mono uppercase tracking-widest text-muted backdrop-blur-md rounded-full shadow-2xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                        <ScrambleText text="Mission Operating System" delay={200} />
                    </div>
                </div>
                
                {/* H1 - LCP Element - CSS Animation (Immediate + 100ms delay) */}
                <div className="opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_100ms_forwards]">
                    <h1 className="text-6xl md:text-9xl font-display font-semibold tracking-tighter mb-8 text-white leading-[0.9] drop-shadow-2xl">
                        Run the Work<br/>
                        In One Place
                    </h1>
                </div>
                
                {/* Subtext - CSS Animation (Immediate + 200ms delay) */}
                <div className="relative inline-block opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
                    {/* Subtle backdrop to ensure text readability over globe */}
                    <div className="absolute inset-0 bg-black/40 blur-2xl -z-10 rounded-full"></div>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-balance">
                        Less admin. More ministry.
                        The unified platform for the modern missions agency.
                    </p>
                </div>
                
                {/* Buttons - CSS Animation (Immediate + 300ms delay) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
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
);

const TickerSection: React.FC = memo(() => {
    // Generate a seamless sequence of items
    const renderTickerItems = () => (
        <>
            {/* 
                We use the full list directly since it's now long enough to cover 
                significant screen width. The parent double-render handles the looping. 
            */}
            {TICKER_ITEMS.map((text, i) => (
                <div key={i} className="flex items-center mx-3 group/item cursor-default">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-muted group-hover/item:text-white transition-colors duration-300 whitespace-nowrap">
                        {text}
                    </span>
                    <span className="ml-6 text-[10px] md:text-xs text-white/10 font-normal font-mono select-none">//</span>
                </div>
            ))}
        </>
    );

    return (
        <div 
            className="border-y border-white/10 bg-black overflow-hidden py-4 relative z-20 flex select-none group"
            aria-hidden="true"
        >
            {/* 
                Seamless Loop Strategy:
                Two identical flex containers animate side-by-side. 
                As the first one moves fully out of view (-100%), the second one has perfectly replaced it.
                The animation instantly resets to 0% at that exact moment.
            */}
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused] will-change-transform">
                {renderTickerItems()}
            </div>
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused] will-change-transform">
                {renderTickerItems()}
            </div>
            
            {/* Gradient masks for smooth fade-in/out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
    );
});

const PhilosophySection: React.FC = () => (
    <Section className="bg-black relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: The Concept (Sticky on Desktop) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 self-start">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-white text-balance tracking-tight">Why the name?</h2>
                    <p className="text-muted leading-relaxed mb-10 text-lg font-light text-balance">
                        Good tools let simple actions create larger outcomes. We believe God multiplies faithfulness. 
                        If God is in it, little becomes much.
                    </p>
                    
                    {/* 1 -> Infinity Graphic */}
                    <div className="p-12 border border-white/10 bg-offblack/50 backdrop-blur-sm rounded-sm">
                        <div className="flex justify-between items-center mb-8 px-2 md:px-6">
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">1</span>
                            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 mx-4 md:mx-8 relative">
                                <ArrowRight className="text-white absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" size={20} />
                            </div>
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">∞</span>
                        </div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/80 text-center border-t border-white/10 pt-6">
                            Simple Faithfulness → Exponential Impact
                        </div>
                    </div>
                </Reveal>
            </div>
            
            {/* Right Column: The Pillars */}
            <div className="lg:col-span-7 space-y-6 pt-8 lg:pt-0">
                {PHILOSOPHY_CARDS.map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <SpotlightCard className="p-10 group bg-offblack/40 border-white/5">
                            <div className="grid grid-cols-1 gap-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-muted font-light text-lg leading-relaxed border-l border-white/10 pl-6 text-balance">
                                    {item.desc}
                                </p>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </div>
    </Section>
);

const FeaturesSection: React.FC = () => (
    <Section grid className="bg-white/[0.02] border-t border-white/5">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <Reveal>
                <h2 className="text-5xl font-display font-bold text-white tracking-tighter">Engineered for Scale</h2>
            </Reveal>
            <Reveal delay={200}>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                    <span className="font-mono text-xs text-muted uppercase tracking-widest block">System Capabilities</span>
                </div>
            </Reveal>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {FEATURES_DATA.map((feature, i) => (
                <Reveal key={i} delay={i * 100} className="h-full">
                    <SpotlightCard className="p-10 h-full bg-black/80 hover:bg-black transition-colors duration-500">
                        <feature.icon className="text-muted mb-8 group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                        <h4 className="text-xl font-bold text-white mb-2 font-display tracking-tight">{feature.title}</h4>
                        <p className="text-xs font-mono text-muted uppercase tracking-widest group-hover:text-white/60 transition-colors">{feature.meta}</p>
                    </SpotlightCard>
                </Reveal>
            ))}
         </div>
    </Section>
);

const RecruitmentSection: React.FC = () => (
    <Section className="relative z-10 border-t border-white/5 bg-offblack/30">
        <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-6">
                        <Code size={14} className="text-success" />
                        <span className="font-mono text-xs text-success uppercase tracking-widest">Hiring Builders</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        Write code for the<br />Great Commission.
                    </h2>
                    <p className="text-muted text-lg leading-relaxed text-balance">
                        We are looking for high-agency senior engineers, designers, and problem solvers who want to use their craft for a higher purpose. 
                        Join the core team or contribute to the open source ecosystem.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/join">
                        <Button 
                            variant={ButtonVariant.SECONDARY} 
                            className="border-white text-white hover:bg-white hover:!text-black transition-all duration-300 group"
                        >
                            Join the Team <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </Reveal>
    </Section>
);

// --- Main Component ---

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
      <HeroSection />
      <TickerSection />
      <PhilosophySection />
      <FeaturesSection />
      <RecruitmentSection />
    </div>
  );
};

export default Home;
