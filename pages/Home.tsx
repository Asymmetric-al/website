
import React from 'react';
import { Section, Button, TechPanel, Reveal, DitherGrid, DitherGlobe, SpotlightCard } from '../components/UI';
import { ButtonVariant } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Activity, Lock, Scale } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DitherGrid />
        
        {/* Center Globe Visual - Massive and Layered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 scale-125 md:scale-100">
            <Reveal delay={200}>
                <DitherGlobe scale={1.2} />
            </Reveal>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
             <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-black/60 text-[10px] font-mono uppercase tracking-widest text-white mb-12 backdrop-blur-md rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Mission Operating System
                </div>
             </Reveal>
             
             <Reveal delay={100}>
                <h1 className="text-6xl md:text-9xl font-display font-semibold tracking-tighter mb-8 text-white leading-[0.9] mix-blend-screen">
                    Run the Work<br/>
                    In One Place
                </h1>
             </Reveal>
             
             <Reveal delay={200}>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-xl text-balance">
                    Less admin. More ministry.
                    The unified platform for the modern missions agency.
                </p>
             </Reveal>
             
             <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
             </Reveal>
        </div>
      </div>

      {/* Stats Ticker */}
      <div className="border-y border-white/10 bg-black overflow-hidden py-6 relative z-20">
        <div className="flex whitespace-nowrap gap-16 animate-[marquee_40s_linear_infinite] text-xs font-mono uppercase tracking-widest text-muted opacity-70">
            {Array(10).fill("Missions Gap: 94% Unreached // Efficiency: +400% // Open Source Core // Soli Deo Gloria //").map((text, i) => (
                <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      {/* Philosophy Section - 1 -> Infinity */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 sticky top-32 h-fit">
                <Reveal>
                    <h2 className="text-4xl font-display font-medium mb-6 text-white text-balance">Why the name?</h2>
                    <p className="text-muted leading-relaxed mb-8 text-lg font-light text-balance">
                        Good tools let simple actions create larger outcomes. We believe God multiplies faithfulness. 
                        If God is in it, little becomes much.
                    </p>
                    <div className="p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-8 px-4">
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">1</span>
                            <div className="h-px bg-white/20 flex-1 mx-8 relative">
                                <ArrowRight className="text-white absolute right-0 top-1/2 -translate-y-1/2" size={20} />
                            </div>
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">∞</span>
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-muted text-center border-t border-white/10 pt-6">
                            Simple Faithfulness → Exponential Impact
                        </div>
                    </div>
                </Reveal>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
                {[
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
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <SpotlightCard className="p-8 group">
                            <div className="grid grid-cols-1 gap-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                                <p className="text-muted font-light text-lg leading-relaxed border-l border-white/10 pl-6 text-balance">{item.desc}</p>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </div>
      </Section>

      {/* Feature Grid */}
      <Section grid>
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <Reveal>
                <h2 className="text-5xl font-display font-bold text-white tracking-tight">Engineered for Scale</h2>
            </Reveal>
            <Reveal delay={200}>
                <span className="font-mono text-xs text-muted uppercase tracking-widest mb-2 md:mb-0 block">System Capabilities</span>
            </Reveal>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
                { icon: Terminal, title: "Headless CMS", meta: "Next.js + WP" },
                { icon: Activity, title: "Real-time Data", meta: "TanStack Query" },
                { icon: Lock, title: "Identity", meta: "Keycloak SSO" },
                { icon: Scale, title: "Balance", meta: "Auto Reconciliation" },
                { icon: Terminal, title: "Observability", meta: "OpenTelemetry" },
                { icon: Lock, title: "Governance", meta: "Audit Logs" }
            ].map((feature, i) => (
                <Reveal key={i} delay={i * 150} className="h-full">
                    <SpotlightCard className="p-12 h-full">
                        <feature.icon className="text-muted mb-8 group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-xs font-mono text-muted uppercase tracking-widest">{feature.meta}</p>
                    </SpotlightCard>
                </Reveal>
            ))}
         </div>
      </Section>

    </div>
  );
};

export default Home;
