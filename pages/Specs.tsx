
import React from 'react';
import { Section, Reveal, SpotlightCard, DitherGrid, ScrambleText } from '../components/UI';
import { 
    Terminal, 
    Database, 
    Box, 
    Globe, 
    Cloud, 
    Shield, 
    Zap, 
    PenTool,
    Cpu,
    CheckCircle2,
    Activity
} from 'lucide-react';

// --- Static Data Configuration ---
interface StackCategory {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
    items: string[];
    meta: string;
}

const STACK_DATA: StackCategory[] = [
    {
        id: "core",
        label: "Languages & Core",
        icon: Terminal,
        description: "The primitives we build with.",
        meta: "LAYER 01",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS", "GraphQL", "TanStack"]
    },
    {
        id: "data",
        label: "Data Persistence",
        icon: Database,
        description: "Polyglot storage layer.",
        meta: "LAYER 02",
        items: ["PostgreSQL", "Amazon Aurora MySQL", "Redis", "TanStack DB", "pgvector", "TanStack Query", "TanStack Table"]
    },
    {
        id: "modules",
        label: "Mission Control Modules",
        icon: Box,
        description: "Core application domains.",
        meta: "LAYER 03",
        items: ["Twenty CRM", "Documenso CE", "Chatwoot CE"]
    },
    {
        id: "cms",
        label: "Content Engine",
        icon: Globe,
        description: "Headless publishing pipeline.",
        meta: "LAYER 04",
        items: ["WordPress (Headless)", "Gutenberg", "Faust.js", "WPGraphQL", "Gotenberg (chromium-based)", "Unlayer"]
    },
    {
        id: "infra",
        label: "Infrastructure & Ops",
        icon: Cloud,
        description: "Edge delivery and observability.",
        meta: "LAYER 05",
        items: ["Vercel", "AWS", "Docker", "GitHub", "Sentry", "OpenTelemetry"]
    },
    {
        id: "security",
        label: "Identity & Security",
        icon: Shield,
        description: "Auth, secrets, and keys.",
        meta: "LAYER 06",
        items: ["Keycloak", "Unkey", "Infisical"]
    },
    {
        id: "async",
        label: "Integrations & Async",
        icon: Zap,
        description: "External services and queues.",
        meta: "LAYER 07",
        items: ["Stripe", "SendGrid", "Zapier", "Inngest", "BullMQ"]
    },
    {
        id: "design",
        label: "Interface & Design",
        icon: PenTool,
        description: "Design system and tooling.",
        meta: "LAYER 08",
        items: ["shadcn/ui", "Recharts", "Figma"]
    },
    {
        id: "ai",
        label: "Intelligence",
        icon: Cpu,
        description: "Generative capabilities.",
        meta: "LAYER 09",
        items: ["OpenAI"]
    }
];

const PERFORMANCE_METRICS = [
    { k: "Edge Protocol", v: "HTTP/3 + QUIC" },
    { k: "API Read Latency", v: "< 150ms (p50)" },
    { k: "API Write Latency", v: "< 600ms (p95)" },
    { k: "Core Web Vitals", v: "75th % Pass" },
    { k: "Availability", v: "99.9% SLO" },
    { k: "Render Start", v: "~1.0s Global" },
];

const RELEASE_GATES = [
    "Statement Studio totals match source gifts",
    "Reconciliation ties Stripe payouts to journals",
    "SPF, DKIM, DMARC green across tenants",
    "Secrets scan verified clean (Infisical)",
    "PII masking verified in OpenTelemetry logs",
    "Zapier flows verified idempotent",
    "Two-step donor recovery paths verified"
];

const Specs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <DitherGrid />
      
      {/* Header Section */}
      <Section className="relative z-10 pb-0">
        <Reveal>
            <div className="flex flex-col gap-8 max-w-5xl">
                {/* Status Bar */}
                <div className="inline-flex items-center gap-4 px-4 py-2 border border-white/10 bg-white/5 rounded-sm text-[10px] font-mono uppercase tracking-widest text-muted backdrop-blur-md w-fit">
                    <span className="flex items-center gap-2 text-coral">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
                        </span>
                        System Nominal
                    </span>
                    <span className="text-white/20">|</span>
                    <ScrambleText text="TECH MANIFEST v2.1.0" delay={200} />
                </div>

                <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9]">
                    The<br/>Architecture.
                </h1>
                
                <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed text-balance border-l border-white/20 pl-6">
                    We don't hide our choices. We build on a foundation of best-in-class open source technologies and proven cloud primitives.
                    This is the engine room of Asymmetric.al.
                </p>
            </div>
        </Reveal>
      </Section>

      {/* The Stack Grid */}
      <Section grid className="bg-white/[0.02] border-y border-white/5 mt-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 relative z-10 shadow-2xl">
            {STACK_DATA.map((category, i) => (
                <Reveal key={category.id} delay={i * 50} className="h-full will-change-transform">
                    <SpotlightCard className="h-full p-8 bg-black hover:bg-offblack transition-colors duration-500 group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-white/5 rounded border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all">
                                <category.icon size={20} strokeWidth={1.5} />
                            </div>
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{category.meta}</span>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-display font-bold text-xl text-white tracking-tight mb-1 group-hover:text-coral transition-colors">{category.label}</h3>
                            <p className="text-[10px] text-muted font-mono uppercase tracking-widest">{category.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item, idx) => (
                                <span 
                                    key={idx} 
                                    className="inline-flex px-2 py-1 text-[10px] font-mono text-gray-500 bg-white/[0.02] border border-white/5 rounded-sm hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-default select-none"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </Reveal>
            ))}
         </div>
      </Section>

      {/* System Engineering Standards */}
      <Section className="relative z-10">
         <Reveal>
            <div className="flex items-center gap-2 mb-8 opacity-60">
                <Activity size={16} className="text-white" />
                <span className="font-mono text-xs text-white uppercase tracking-widest">Engineering Standards</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
                
                {/* Left: Performance */}
                <div className="bg-black/50 p-8 md:p-12 backdrop-blur-sm">
                    <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Performance Targets</h2>
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        {PERFORMANCE_METRICS.map((s, i) => (
                            <div key={i} className="group">
                                <div className="text-[9px] font-mono text-muted uppercase tracking-widest mb-2 group-hover:text-white/60 transition-colors">{s.k}</div>
                                <div className="text-xl md:text-2xl font-bold text-white font-display tracking-tight">{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Quality Gates */}
                <div className="bg-black/50 p-8 md:p-12 backdrop-blur-sm">
                     <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Release Gates</h2>
                     <ul className="space-y-5">
                        {RELEASE_GATES.map((gate, i) => (
                            <li key={i} className="flex gap-4 items-start text-sm text-gray-400 group">
                                <CheckCircle2 size={16} className="text-coral/50 group-hover:text-coral transition-colors mt-0.5 flex-shrink-0" />
                                <span className="group-hover:text-gray-300 transition-colors">{gate}</span>
                            </li>
                        ))}
                     </ul>
                </div>
            </div>
         </Reveal>
      </Section>

    </div>
  );
};

export default Specs;
