
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Database, Globe, Zap, Mail, FileText, PenTool, BarChart, Layout, Heart, 
    Calendar, PlusCircle, ArrowRight, AlertTriangle, XCircle, CheckCircle, 
    Clock, Split, Lock, Activity, LucideIcon 
} from 'lucide-react';
import { 
    Section, TechPanel, Reveal, Button, DitherGrid, SpotlightCard, 
    DitherGlobe, ScrambleText 
} from '../components/UI';
import { ButtonVariant } from '../types';

// --- Types ---

interface DiagnosticItem {
    label: string;
    icon: LucideIcon;
}

interface MissionTile {
    title: string;
    desc: string;
    icon: LucideIcon;
    meta: string;
    highlight?: boolean;
}

// --- Static Data ---

const DIAGNOSTIC_ITEMS: readonly DiagnosticItem[] = [
    { label: "Data Silos", icon: Split }, 
    { label: "Vendor Lock", icon: Lock }, 
    { label: "Legacy Debt", icon: Clock }, 
    { label: "Sync Error", icon: AlertTriangle }
];

const MISSION_CONTROL_TILES: readonly MissionTile[] = [
    { 
        title: "Partners CRM", 
        desc: "The single source of truth. People, churches, and pledges in one living record.",
        icon: Database,
        meta: "// CORE RECORD"
    },
    { 
        title: "Contributions Hub", 
        desc: "Live transaction feed. Automate reconciliation and eliminate manual entry.",
        icon: Zap,
        meta: "// FINANCE"
    },
    { 
        title: "Web Studio", 
        desc: "Manage headless sites and missionary pages without code. Connected directly to CRM.",
        icon: Globe,
        meta: "// CMS"
    },
    { 
        title: "Email Studio", 
        desc: "Send branded, authenticated campaigns. No more exporting lists to Mailchimp.",
        icon: Mail,
        meta: "// COMMS"
    },
    { 
        title: "Statements Studio", 
        desc: "Generate receipt packs and year-end tax documents automatically.",
        icon: FileText,
        meta: "// COMPLIANCE"
    },
    { 
        title: "Sign Studio", 
        desc: "Integrated e-signature. Build packets and track routing for agreements.",
        icon: PenTool,
        meta: "// LEGAL"
    },
    { 
        title: "Mobilize", 
        desc: "Accelerate deployment. Move candidates from interest to field with clear steps.",
        icon: ArrowRight,
        meta: "// HR FLOW"
    },
    { 
        title: "Report Studio", 
        desc: "Real-time visibility. Schedule reports for leadership without SQL knowledge.",
        icon: BarChart,
        meta: "// INTELLIGENCE"
    },
    { 
        title: "Automations", 
        desc: "Embedded workflow engine. Trigger actions based on donations or applications.",
        icon: Layout,
        meta: "// LOGIC"
    },
    {
        title: "Member Care",
        desc: "Track health and milestones. Sustain your workers with intentional care.",
        icon: Heart,
        meta: "// RETENTION"
    },
    {
        title: "Events & Gatherings",
        desc: "Centralized registration and logistics. Connect attendees to your CRM instantly.",
        icon: Calendar,
        meta: "// LOGISTICS"
    },
    {
        title: "Roadmap Active",
        desc: "The OS is alive. We are continuously deploying new modules to serve the field.",
        icon: PlusCircle,
        meta: "// FUTURE",
        highlight: true
    }
];

// --- Sub-Components ---

const MissionCard: React.FC<{ tile: MissionTile }> = ({ tile }) => (
    <SpotlightCard className={`p-8 h-full flex flex-col justify-between group ${tile.highlight ? 'border-dashed border-white/20' : ''}`}>
        <div>
            <div className="flex justify-between items-start mb-8">
                <tile.icon className={`${tile.highlight ? 'text-white' : 'text-gray-500'} group-hover:text-primary transition-colors`} size={28} strokeWidth={1} />
                <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">{tile.meta}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight">{tile.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed text-balance">{tile.desc}</p>
        </div>
        {tile.highlight && (
            <div className="mt-8 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-coral uppercase tracking-widest animate-pulse">In Development</span>
            </div>
        )}
    </SpotlightCard>
);

const DiagnosticGrid: React.FC = () => (
    <div className="grid grid-cols-2 gap-px bg-red-900/20 border border-red-900/20 opacity-60">
        {DIAGNOSTIC_ITEMS.map((item, i) => (
            <div key={i} className="aspect-square flex flex-col items-center justify-center p-4 bg-black/80 hover:bg-red-900/10 transition-colors group">
                <item.icon className="text-red-700 mb-2 group-hover:text-red-500 transition-colors" size={24} strokeWidth={1.5} />
                <span className="text-[10px] font-mono text-red-700 uppercase text-center group-hover:text-red-400 transition-colors">{item.label}</span>
            </div>
        ))}
    </div>
);

const PlatformHero: React.FC = () => (
    <Section className="border-b border-white/5 relative">
        <DitherGrid />
        
        {/* Layer 0: Main Background Globe (Right aligned) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-40 pointer-events-none hidden lg:block mix-blend-screen" aria-hidden="true">
            <DitherGlobe scale={1.6} />
        </div>

        <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                <ScrambleText text="MISSION OPERATING SYSTEM" delay={200} />
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                One Surface.<br /> 
                <span className="text-muted">Total Clarity.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12 text-balance border-l border-white/10 pl-6">
                Most agencies are running on a patchwork of disconnected tools. Data is siloed. Staff are exhausted. The mission slows down.
                <br/><br/>
                Asymmetric.al replaces the chaos of the "DIY stack" with a single, unified operating system designed specifically for the complexities of sending.
            </p>
            <div className="flex flex-wrap gap-6">
                <Link to="/specs"><Button>System Architecture</Button></Link>
                <Link to="/missions"><Button variant={ButtonVariant.SECONDARY}>Role Views</Button></Link>
            </div>
        </Reveal>
    </Section>
);

const ProblemSection: React.FC = () => (
    <Section className="bg-red-900/[0.02] relative">
        {/* Secondary Globe Element (Faint, behind audit) */}
        <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-10 pointer-events-none grayscale" aria-hidden="true">
            <DitherGlobe scale={1.2} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <Reveal>
                <div className="flex items-center gap-2 text-red-500 mb-4">
                    <Activity size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">Legacy Architecture Audit</span>
                </div>
                <h3 className="text-white font-display font-bold text-4xl mb-6 tracking-tight">The False Choice: Chaos or Stagnation.</h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-balance">
                    Agencies are typically forced to choose between two failing options.
                    <br/><br/>
                    <strong>Option A: The Chaos of DIY.</strong> Juggling disconnected tools that degrade data and force staff into endless manual entry.
                    <br/><br/>
                    <strong>Option B: The Prison of Legacy.</strong> "Unified" platforms that are proprietary, locked down, and decades out of date. Making simple changes requires expensive contracts, holding your mission velocity hostage to their slow roadmap.
                </p>
                <div className="space-y-4">
                    {[
                        "Fragmented Data Silos (DIY Stack)",
                        "Proprietary Vendor Lock-in (Legacy Monoliths)",
                        "Outdated UX & High Technical Debt"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-red-400/80 font-mono text-xs uppercase tracking-wider">
                             <XCircle size={14} /> {item}
                        </div>
                    ))}
                </div>
            </Reveal>
            
            <Reveal delay={200} className="h-full">
                <TechPanel title="DIAGNOSTIC: CRITICAL SYSTEM ALERTS" className="h-full bg-black border-red-500/20">
                    <DiagnosticGrid />
                </TechPanel>
            </Reveal>
        </div>
    </Section>
);

const MissionControlSection: React.FC = () => (
    <Section grid className="bg-black relative overflow-hidden">
        {/* Decorative Grid Globe at bottom right */}
        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-[0.05] pointer-events-none rotate-180" aria-hidden="true">
            <DitherGlobe scale={2} />
        </div>

        <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8 relative z-10">
                <div>
                    <h2 className="text-5xl font-display font-bold text-white mb-4 tracking-tighter">Mission Control</h2>
                    <p className="text-gray-400 max-w-md text-balance">
                        Replace the clutter with cohesion. Every operational function under one login, sharing one database.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-success font-mono text-xs uppercase tracking-widest mt-4 md:mt-0">
                    <CheckCircle size={14} /> Unified Platform
                </div>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
             {MISSION_CONTROL_TILES.map((tile, i) => (
                 <Reveal key={i} delay={i * 50} className="h-full">
                    <MissionCard tile={tile} />
                 </Reveal>
             ))}
        </div>
    </Section>
);

// --- Main Component ---

const Platform: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <PlatformHero />
      <ProblemSection />
      <MissionControlSection />
    </div>
  );
};

export default Platform;
