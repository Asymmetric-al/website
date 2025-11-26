
import React, { FormEvent, memo, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    Database, Globe, Zap, Mail, FileText, PenTool, BarChart, Layout, Heart, 
    Calendar, PlusCircle, ArrowRight, AlertTriangle, 
    Split, Lock, Clock, Target, Layers, ShieldAlert, LucideIcon, Server,
    MessageCircle 
} from 'lucide-react';
import { 
    Section, Reveal, Button, DitherGrid, SpotlightCard, 
    DitherGlobe, ScrambleText
} from '../components/UI';
import { ButtonVariant } from '../types';

// --- Types ---

interface MissionTile {
    readonly title: string;
    readonly desc: React.ReactNode;
    readonly icon: LucideIcon;
    readonly meta: string;
    readonly highlight?: boolean;
    readonly className?: string;
}

interface FocusPoint {
    readonly title: string;
    readonly icon: LucideIcon;
    readonly desc: string;
}

interface ProblemOption {
    readonly id: string;
    readonly title: string;
    readonly icon: LucideIcon;
    readonly subtitle: string;
    readonly desc: string;
    readonly points: readonly string[];
}

interface MissionCardProps {
    readonly tile: MissionTile;
}

interface FalseChoicePanelProps {
    readonly option: ProblemOption;
}

interface FocusCardProps {
    readonly item: FocusPoint;
}

// --- Static Data ---

const MISSION_CONTROL_TILES: readonly MissionTile[] = [
    { 
        title: "Partners CRM", 
        desc: <>Powered by a custom Missions Built <a href="https://github.com/twentyhq/twenty" target="_blank" rel="noreferrer" className="text-white hover:text-primary underline decoration-white/30 transition-colors">Twenty CRM</a>, the open-source standard with 40k GitHub Stars. The definitive source of truth for people, churches, and pledges. A living record that updates in real-time, managed with a modern interface designed for speed. A CRM your Advancement team will actually enjoy using.</>,
        icon: Database,
        meta: "// CORE RECORD"
    },
    { 
        title: "Contributions Hub", 
        desc: "Live transaction feed. Automate reconciliation and eliminate manual entry. Reversals and management in one place all perfectly integrated with Stripe for the best in class payment processing experience.",
        icon: Zap,
        meta: "// FINANCE"
    },
    { 
        title: "Web Studio", 
        desc: <>The power of <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-white hover:text-primary underline decoration-white/30 transition-colors">Next.js</a> with the ease of a visual CMS (A headless WordPress). Whether you have a frontend team or just need to update the blog, you are in control. No more change orders for simple button tweaks. Build on open standards, not proprietary cages.</>,
        icon: Globe,
        meta: "// CMS"
    },
    { 
        title: "Email Studio", 
        desc: "Every email that comes from your organization needs to represent the work you're doing. No more compromises on what comes from your organization whether it be an appeal campaign, emailed donation receipt, or a simple password-reset email. It all needs to be perfect and fully branded and owned by you.",
        icon: Mail,
        meta: "// COMMS"
    },
    {
        title: "Donor Support Hub",
        desc: <>Integrated <a href="https://github.com/chatwoot/chatwoot" target="_blank" rel="noreferrer" className="text-white hover:text-primary underline decoration-white/30 transition-colors">Chatwoot CE</a> to handle all donor issues with easy tracking to make sure no donor question gets dropped or missed. Donor care is vital to any missions organization. All integrated into your Mission Control Panel.</>,
        icon: MessageCircle,
        meta: "// SUPPORT"
    },
    { 
        title: "Statements Studio", 
        desc: "Generate receipt packs and year-end tax documents automatically. The easy way to create and manage templates for your printable statements or reports. You can make it exactly how you want it with no compromises or hours of endless coding just to get the header or footer right.",
        icon: FileText,
        meta: "// COMPLIANCE"
    },
    { 
        title: "Sign Studio", 
        desc: <>No need for DocuSign anymore. Powered by <a href="https://github.com/documenso/documenso" target="_blank" rel="noreferrer" className="text-white hover:text-primary underline decoration-white/30 transition-colors">Documenso CE</a>, fully integrated in your mobilization and onboarding workflow. One integrated place to handle agreements, waivers, and packets.</>,
        icon: PenTool,
        meta: "// LEGAL"
    },
    { 
        title: "Mobilize", 
        desc: "Powered by Zapier. Accelerate your deployment with effortless management. You set up the workflow and process you want with best-in-class automation that is fully visualized and not endless and confusing 'If This Then That' logic trees. Move candidates from interest to field with clear steps.",
        icon: ArrowRight,
        meta: "// HR FLOW"
    },
    { 
        title: "Report Studio", 
        desc: "Real-time visibility. Pull or Schedule reports for leadership, finance, etc. in one easy to use place. One beautiful easy to use interface that just gives you the reports you need when you need them.",
        icon: BarChart,
        meta: "// INTELLIGENCE"
    },
    { 
        title: "Automations", 
        desc: "Powered by Zapier's workflow engine. You are fully in charge to trigger actions based on donations, applications, anything imaginable with Zapier's 8,000+ app integrations.",
        icon: Layout,
        meta: "// LOGIC"
    },
    {
        title: "Member Care",
        desc: "One dashboard for your MC team to Track care, MC Plans, and milestones. Sustain your workers with intentional care and give your team everything they need stay on top of their care plans. (Note: Not HIPAA compliant yet).",
        icon: Heart,
        meta: "// RETENTION"
    },
    {
        title: "Events & Gatherings",
        desc: "Handle events on your own website, fully branded and under your control. One source of truth for centralized registration and logistics. Connect attendees to your CRM instantly without re-entering data.",
        icon: Calendar,
        meta: "// LOGISTICS"
    },
    {
        title: "Roadmap Active",
        desc: "The OS is alive. We are continuously deploying new modules to serve the field.",
        icon: PlusCircle,
        meta: "// FUTURE",
        highlight: true,
        className: "md:col-span-2 lg:col-span-3"
    }
];

const WHY_FOCUS_DATA: readonly FocusPoint[] = [
    {
        title: "Sending is not Selling",
        icon: Target,
        desc: "Generic CRMs are built for sales pipelines. They don't understand deputation, support raising, or the delicate nature of donor relationships. We build for partnership, not transactions."
    },
    {
        title: "The Fragmentation Tax",
        icon: Layers,
        desc: "When you stitch together 15 different SaaS tools, you pay a 'tax' in lost data, broken syncs, and staff burnout. Missions agencies lose millions of dollars annually to this inefficiency."
    },
    {
        title: "Sovereignty Matters",
        icon: ShieldAlert,
        desc: "True ownership means you aren't beholden to a vendor's roadmap or pricing. We build architecture where you own the data, the keys, and the code, ensuring you are never locked into a system you can't control."
    }
];

const PROBLEM_OPTIONS: readonly ProblemOption[] = [
    {
        id: 'diy',
        title: "OPTION A: THE DIY TRAP",
        icon: Layers,
        subtitle: "The Generic Stack",
        desc: "Stitching together Salesforce, Mailchimp, QuickBooks, spreadsheets, and standalone website builders.",
        points: ["DATA SILOS", "BROKEN AUTOMATION LINKS", "HIGH SUBSCRIPTION FEES"]
    },
    {
        id: 'legacy',
        title: "OPTION B: THE LEGACY MONOLITH",
        icon: Globe,
        subtitle: "The Outdated Vendor",
        desc: "Proprietary software built in the early 2000s. Safe, but stagnant and difficult to modernize.",
        points: ["VENDOR LOCK-IN", "CLUNKY UX", "SLOW ROADMAPS"]
    }
];

const FORM_INPUT_CLASSES = "w-full bg-transparent p-6 text-white placeholder-muted/40 focus:bg-white/[0.02] focus:outline-none font-mono text-xs border-none transition-colors";

// --- Sub-Components ---

const MissionCard = memo(({ tile }: MissionCardProps) => (
    <div className={`group relative h-full flex flex-col bg-black border transition-all duration-300 overflow-hidden ${tile.highlight ? 'border-primary/40 hover:border-primary/70 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-white/10 hover:border-white/30'}`}>
        
        {/* Module Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-start bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors">
            <div className={`p-2 rounded-sm border transition-colors ${tile.highlight ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30'}`}>
                <tile.icon size={20} strokeWidth={1.5} />
            </div>
            <span className={`font-mono text-[9px] uppercase tracking-widest transition-colors ${tile.highlight ? 'text-primary' : 'text-white/30 group-hover:text-white/60'}`}>
                {tile.meta}
            </span>
        </div>

        {/* Module Body */}
        <div className="p-6 flex-grow flex flex-col justify-between relative">
             {/* Tech Grid Background (Subtle) */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                  aria-hidden="true"
             />
             
            <div className="relative z-10">
                <h3 className={`text-xl font-display font-bold mb-3 tracking-tight transition-colors ${tile.highlight ? 'text-white' : 'text-white group-hover:text-primary'}`}>
                    {tile.title}
                </h3>
                <div className="text-sm text-gray-400 leading-relaxed font-light text-balance">
                    {tile.desc}
                </div>
            </div>
        </div>

        {/* Module Status Footer */}
        <div className={`px-6 py-3 border-t flex items-center gap-2 ${tile.highlight ? 'bg-primary/5 border-primary/20' : 'bg-white/[0.01] border-white/5'}`}>
            <div className="relative flex h-1.5 w-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tile.highlight ? 'bg-primary' : 'bg-success'}`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${tile.highlight ? 'bg-primary' : 'bg-success'}`}></span>
            </div>
            <span className={`font-mono text-[9px] uppercase tracking-widest ${tile.highlight ? 'text-primary' : 'text-white/20'}`}>
                {tile.highlight ? 'Continuous Deployment' : 'System Active'}
            </span>
        </div>
    </div>
));
MissionCard.displayName = 'MissionCard';

const FalseChoicePanel = memo(({ option }: FalseChoicePanelProps) => {
    const isDIY = option.id === 'diy';
    
    // Memoize derived values to prevent recalculation on parent re-renders
    const { label, headline } = useMemo(() => {
        const [lbl, ...headlineParts] = option.title.split(':');
        return {
            label: lbl,
            headline: headlineParts.join(':').trim()
        };
    }, [option.title]);

    return (
        <div className="bg-black/80 h-full border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col">
            
            {/* TechPanel Corner Markers - Stylized */}
            <div className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-60" aria-hidden="true">
                <div className="absolute top-0 left-0 w-px h-3 bg-white" />
                <div className="absolute top-0 left-0 w-3 h-px bg-white" />
                <div className="absolute top-0 right-0 w-px h-3 bg-white" />
                <div className="absolute top-0 right-0 w-3 h-px bg-white" />
                <div className="absolute bottom-0 left-0 w-px h-3 bg-white" />
                <div className="absolute bottom-0 left-0 w-3 h-px bg-white" />
                <div className="absolute bottom-0 right-0 w-px h-3 bg-white" />
                <div className="absolute bottom-0 right-0 w-3 h-px bg-white" />
            </div>

            {/* Ambient Glow */}
            <div className={`absolute -top-32 -right-32 w-64 h-64 ${isDIY ? 'bg-orange-500/10' : 'bg-blue-500/10'} blur-[80px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500`} aria-hidden="true" />

            <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
                
                {/* Header Section */}
                <div className="flex justify-between items-start mb-8">
                    <div className={`p-2.5 rounded-sm border backdrop-blur-md ${
                        isDIY 
                        ? 'bg-orange-900/10 border-orange-500/20 text-orange-500' 
                        : 'bg-blue-900/10 border-blue-500/20 text-blue-500'
                    } group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                        <option.icon size={20} strokeWidth={1.5} />
                    </div>
                    {/* ENHANCED OPTION CHIP */}
                    <span className="font-mono text-[11px] font-bold text-white uppercase tracking-widest bg-white/15 px-4 py-2 rounded border border-white/20 backdrop-blur-md shadow-lg">
                        {label}
                    </span>
                </div>

                {/* Typography Block */}
                <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight leading-[1.1] group-hover:text-white/90 transition-colors">
                        {headline}
                    </h3>
                    <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${isDIY ? 'text-orange-400' : 'text-blue-400'}`}>
                        <div className={`h-px w-4 ${isDIY ? 'bg-orange-500/50' : 'bg-blue-500/50'}`} />
                        {option.subtitle}
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4 font-light flex-grow text-balance">
                    {option.desc}
                </p>

                {/* Bottom List */}
                <div className="mt-auto pt-5 border-t border-white/5 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-6 lg:p-8 bg-white/[0.02]">
                     <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-3">Critical Failures</div>
                     <ul className="space-y-2.5">
                        {option.points.map((point, i) => (
                            <li key={i} className="text-[10px] font-mono text-white/70 flex items-start gap-2.5 group/list">
                                <AlertTriangle size={12} className="text-red-500 shrink-0 mt-[1px] group-hover/list:text-red-400 transition-colors" />
                                <span className="group-hover/list:text-white transition-colors tracking-wide">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});
FalseChoicePanel.displayName = 'FalseChoicePanel';

const FocusCard = memo(({ item }: FocusCardProps) => (
    <SpotlightCard className="h-full p-8 md:p-10 bg-black/80 flex flex-col justify-between group">
        <div>
            <item.icon className="text-white mb-6 group-hover:text-primary transition-colors" size={32} strokeWidth={1} />
            <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">{item.title}</h3>
            <p className="text-muted leading-relaxed text-sm text-balance border-l border-white/10 pl-4">{item.desc}</p>
        </div>
    </SpotlightCard>
));
FocusCard.displayName = 'FocusCard';

const DeploymentForm = memo(() => {
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
    }, []);

    return (
        <form className="space-y-0 relative group" onSubmit={handleSubmit}>
            {/* Decorative form border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-sm pointer-events-none" aria-hidden="true" />
            
            <div className="relative bg-black border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    <div className="bg-black">
                         <input type="text" placeholder="ORG NAME" className={FORM_INPUT_CLASSES} aria-label="Organization Name" />
                    </div>
                    <div className="bg-black">
                         <input type="text" placeholder="CONTACT NAME" className={FORM_INPUT_CLASSES} aria-label="Contact Name" />
                    </div>
                </div>
                <div className="gap-px bg-white/10 border-t border-white/10 bg-black">
                    <input type="email" placeholder="EMAIL ADDRESS" className={FORM_INPUT_CLASSES} aria-label="Email Address" />
                </div>
                <div className="gap-px bg-white/10 border-t border-white/10 bg-black">
                    <textarea 
                        placeholder="TELL US ABOUT YOUR CURRENT CHALLENGES..." 
                        className={`${FORM_INPUT_CLASSES} h-40 resize-none`}
                        aria-label="Current Challenges"
                    />
                </div>
                <div className="p-1 bg-white/5">
                    <Button className="w-full py-6 bg-white text-black hover:bg-primary hover:text-white border-none font-bold" icon={<ArrowRight size={16} />}>
                        Start the Conversation
                    </Button>
                </div>
            </div>
        </form>
    );
});
DeploymentForm.displayName = 'DeploymentForm';

const PlatformHero = memo(() => (
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
                <Link to="#mission-control"><Button variant={ButtonVariant.SECONDARY}>Role Views</Button></Link>
            </div>
        </Reveal>
    </Section>
));
PlatformHero.displayName = 'PlatformHero';

const FalseChoiceSection = memo(() => (
    <Section className="bg-offblack/30 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">The "False Choice" facing agencies today.</h2>
                  <p className="text-muted leading-relaxed text-lg mb-8 text-balance">
                      For decades, mission leaders have been forced to choose between two failing options. This compromise drains resources and slows deployment.
                  </p>
                  <div className="p-6 border border-red-500/20 bg-red-900/10 rounded-sm">
                      <div className="flex items-center gap-3 text-red-400 mb-3 font-mono text-xs uppercase tracking-widest">
                          <AlertTriangle size={14} />
                          System Warning
                      </div>
                      <p className="text-red-200/80 text-sm leading-relaxed italic">
                          "Our ops, mobilization, and finance teams are spending more time managing our tools than we are supporting our missionaries." — Common Agency Feedback
                      </p>
                  </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PROBLEM_OPTIONS.map((option) => (
                      <FalseChoicePanel key={option.id} option={option} />
                  ))}
              </div>
          </div>
        </Reveal>
    </Section>
));
FalseChoiceSection.displayName = 'FalseChoiceSection';

const WhyFocusSection = memo(() => (
    <Section grid className="bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        {/* Subtle Globe Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" aria-hidden="true">
            <DitherGlobe scale={1.2} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
             <Reveal>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Why we focus here.</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed text-balance">
                    We aren't trying to build software for everyone. We are hyper-focused on the unique complexities of sending agencies.
                </p>
             </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {WHY_FOCUS_DATA.map((item, i) => (
                <Reveal key={i} delay={i * 100} className="h-full">
                    <FocusCard item={item} />
                </Reveal>
            ))}
        </div>
    </Section>
));
WhyFocusSection.displayName = 'WhyFocusSection';

const MissionControlSection = memo(() => (
    <Section id="mission-control" className="bg-black relative overflow-hidden border-b border-white/5">
        {/* Decorative Dither Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
             aria-hidden="true"
        />

        <div className="relative z-10">
             {/* Section Header: The Solution Pitch */}
             <Reveal>
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <Server size={14} className="text-success" />
                        <span className="font-mono text-xs text-success uppercase tracking-widest">The Unified Solution</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                        Mission Control
                    </h2>
                    
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8" />

                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed text-balance mb-8">
                        Replace the clutter with cohesion. Every operational function under one login, sharing one database.
                    </p>
                    
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-balance">
                        No more "integration tax." No more zapping data between five different SaaS tools. 
                        Just one sovereign operating system designed to run the work of the Great Commission.
                    </p>
                </div>
             </Reveal>

             {/* The Modules Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                 {MISSION_CONTROL_TILES.map((tile, i) => (
                     <Reveal key={i} delay={i * 50} className={`h-full ${tile.className || ''}`}>
                        <MissionCard tile={tile} />
                     </Reveal>
                 ))}
             </div>
        </div>
    </Section>
));
MissionControlSection.displayName = 'MissionControlSection';

const DeploymentSection = memo(() => (
    <Section id="contact" className="relative overflow-hidden bg-white/[0.02]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <Reveal>
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <Heart size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">Partnership Model</span>
                </div>
                <h2 className="text-5xl font-display font-bold text-white mb-6 tracking-tighter">Let's build the future.</h2>
                <p className="text-muted mb-8 leading-relaxed max-w-md text-balance text-lg">
                    We are looking for agencies who are tired of the status quo. If you are ready to modernize your operations and steward your data, we want to talk.
                </p>
                <ul className="space-y-5 font-mono text-xs text-muted uppercase tracking-widest">
                    <li className="flex items-center gap-4 group">
                        <div className="p-1 border border-white/10 rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-primary transition-colors"></div>
                        </div>
                        Early Access Program
                    </li>
                    <li className="flex items-center gap-4 group">
                         <div className="p-1 border border-white/10 rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-primary transition-colors"></div>
                        </div>
                        Data Migration Support
                    </li>
                    <li className="flex items-center gap-4 group">
                         <div className="p-1 border border-white/10 rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-primary transition-colors"></div>
                        </div>
                        Open Source Contribution
                    </li>
                </ul>
            </Reveal>
            
            <Reveal delay={200}>
                <DeploymentForm />
            </Reveal>
        </div>
    </Section>
));
DeploymentSection.displayName = 'DeploymentSection';

// --- Main Component ---

const Platform: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <PlatformHero />
      <FalseChoiceSection />
      <WhyFocusSection />
      <MissionControlSection />
      <DeploymentSection />
    </div>
  );
};

export default Platform;
