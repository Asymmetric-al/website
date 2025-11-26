import React, { FormEvent, memo, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    Database, Globe, Zap, Mail, FileText, PenTool, BarChart, Layout, Heart, 
    Calendar, PlusCircle, ArrowRight, AlertTriangle, 
    Layers, ShieldAlert, type LucideIcon, Server,
    MessageCircle, Target, DollarSign
} from 'lucide-react';
import { 
    Section, Reveal, Button, DitherGrid, SpotlightCard, 
    DitherGlobe, ScrambleText, Input, TextArea
} from '../components/UI';
import { ButtonVariant } from '../types';
import { cn } from '../lib/utils';

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
        desc: <>Powered by a custom Missions Built <a href="https://github.com/twentyhq/twenty" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline decoration-border transition-colors">Twenty CRM</a>, the open-source standard with 40k GitHub Stars. The definitive source of truth for people, churches, and pledges. A living record that updates in real-time, managed with a modern interface designed for speed. A CRM your Advancement team will actually enjoy using.</>,
        icon: Database,
        meta: "// CORE RECORD"
    },
    { 
        title: "Contributions Hub", 
        desc: "Live transaction feed. Automate reconciliation and eliminate manual entry. Reversals and management in one place all perfectly integrated with Stripe for the best in class payment processing experience.",
        icon: DollarSign,
        meta: "// FINANCE"
    },
    { 
        title: "Web Studio", 
        desc: <>The power of <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline decoration-border transition-colors">Next.js</a> with the ease of a visual CMS (A headless WordPress). Whether you have a frontend team or just need to update the blog, you are in control. No more change orders for simple button tweaks. Build on open standards, not proprietary cages.</>,
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
        desc: <>Integrated <a href="https://github.com/chatwoot/chatwoot" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline decoration-border transition-colors">Chatwoot CE</a> to handle all donor issues with easy tracking to make sure no donor question gets dropped or missed. Donor care is vital to any missions organization. All integrated into your Mission Control Panel.</>,
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
        desc: <>No need for DocuSign anymore. Powered by <a href="https://github.com/documenso/documenso" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary underline decoration-border transition-colors">Documenso CE</a>, fully integrated in your mobilization and onboarding workflow. One integrated place to handle agreements, waivers, and packets.</>,
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
        icon: Zap,
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

// --- Sub-Components ---

const MissionCard = memo(({ tile }: MissionCardProps) => (
    <div className={cn(
        "group relative h-full flex flex-col justify-between bg-card border rounded-sm overflow-hidden transition-all duration-300",
        tile.highlight 
            ? 'border-primary/40 shadow-[0_0_0_1px_rgba(16,185,129,0.1)]' 
            : 'border-border hover:border-foreground/20'
    )}>
        {/* Header */}
        <div className="p-8 flex justify-between items-start border-b border-border bg-card">
            <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-sm border transition-colors",
                tile.highlight 
                    ? 'bg-primary/10 border-primary/20 text-primary dark:text-primary' 
                    : 'bg-secondary border-border text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30'
            )}>
                <tile.icon size={20} strokeWidth={1.5} />
            </div>
            <span className={cn(
                "font-mono text-[9px] uppercase tracking-widest mt-2",
                tile.highlight 
                    ? 'text-emerald-600 dark:text-primary' 
                    : 'text-muted-foreground group-hover:text-foreground/60 transition-colors'
            )}>
                {tile.meta}
            </span>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow relative bg-card">
             <div className="relative z-10">
                <h3 className={cn(
                    "text-xl font-display font-bold mb-4 tracking-tight transition-colors",
                    tile.highlight 
                        ? 'text-foreground' 
                        : 'text-foreground group-hover:text-primary'
                )}>
                    {tile.title}
                </h3>
                <div className="text-sm text-muted-foreground leading-relaxed font-light text-balance">
                    {tile.desc}
                </div>
            </div>
        </div>

        {/* Status Bar */}
        <div className={cn(
            "px-8 py-4 border-t flex items-center gap-3",
            tile.highlight 
                ? 'bg-primary/5 border-primary/20' 
                : 'bg-background border-border'
        )}>
            <div className="relative flex h-1.5 w-1.5">
                <span className={cn(
                    "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                    tile.highlight ? 'bg-primary' : 'bg-success'
                )} />
                <span className={cn(
                    "relative inline-flex rounded-full h-1.5 w-1.5",
                    tile.highlight ? 'bg-primary' : 'bg-success'
                )} />
            </div>
            <span className={cn(
                "font-mono text-[9px] uppercase tracking-widest",
                tile.highlight ? 'text-emerald-600 dark:text-primary' : 'text-muted-foreground'
            )}>
                {tile.highlight ? 'Continuous Deployment' : 'System Active'}
            </span>
        </div>
    </div>
));
MissionCard.displayName = 'MissionCard';

const FalseChoicePanel = memo(({ option }: FalseChoicePanelProps) => {
    const isDIY = option.id === 'diy';
    
    // Derived values
    const { label, headline } = useMemo(() => {
        const [lbl, ...headlineParts] = option.title.split(':');
        return {
            label: lbl,
            headline: headlineParts.join(':').trim()
        };
    }, [option.title]);

    // Theme logic - Adapted for light/dark mode contrast
    const borderColor = isDIY 
        ? 'group-hover:border-orange-500/50 dark:group-hover:border-orange-500/30' 
        : 'group-hover:border-blue-500/50 dark:group-hover:border-blue-500/30';
    
    const iconColor = isDIY 
        ? 'text-orange-600 dark:text-orange-500' 
        : 'text-blue-600 dark:text-blue-500';

    const subtitleColor = isDIY 
        ? 'text-orange-600 dark:text-orange-400' 
        : 'text-blue-600 dark:text-blue-400';

    const lineColor = isDIY 
        ? 'bg-orange-500/50' 
        : 'bg-blue-500/50';

    return (
        <div className={cn(
            "bg-card h-full border border-border transition-colors duration-500 group relative overflow-hidden flex flex-col rounded-sm",
            borderColor
        )}>
            {/* Corner Markers (Standardized) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-border" aria-hidden="true">
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-current" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-bottom border-current" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-bottom border-current" />
            </div>

            <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                    <div className={cn(
                        "p-3 rounded-sm border bg-secondary border-border transition-colors",
                        iconColor
                    )}>
                        <option.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-secondary px-3 py-1.5 rounded-sm border border-border">
                        {label}
                    </span>
                </div>

                {/* Content */}
                <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight group-hover:text-foreground/90 transition-colors">
                        {headline}
                    </h3>
                    <div className={cn("flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-6", subtitleColor)}>
                        <div className={cn("h-px w-6", lineColor)} />
                        {option.subtitle}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed border-l border-border pl-6 text-balance">
                        {option.desc}
                    </p>
                </div>

                {/* Footer List */}
                <div className="mt-auto pt-8 border-t border-border">
                     <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-4">Critical Failures</div>
                     <ul className="space-y-4">
                        {option.points.map((point, i) => (
                            <li key={i} className="text-[11px] font-mono text-muted-foreground flex items-center gap-3 group/list">
                                <div className="w-1 h-1 bg-destructive rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                                <span className="group-hover/list:text-foreground transition-colors tracking-wider">{point}</span>
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
    <SpotlightCard className="h-full bg-card flex flex-col justify-between group rounded-sm border-border hover:border-foreground/20">
        <div className="p-8 md:p-10 h-full flex flex-col">
            <div className="mb-8 p-3 bg-secondary w-fit rounded-sm border border-border text-foreground group-hover:text-primary transition-colors">
                <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm text-balance border-l border-border pl-6 mt-auto">{item.desc}</p>
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
            <div className="relative bg-card border border-border rounded-sm p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-mono text-[10px] uppercase tracking-widest">Secure Uplink</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Input placeholder="ORG NAME" aria-label="Organization Name" />
                     <Input placeholder="CONTACT NAME" aria-label="Contact Name" />
                </div>
                <Input type="email" placeholder="EMAIL ADDRESS" aria-label="Email Address" />
                <TextArea 
                    placeholder="TELL US ABOUT YOUR CURRENT CHALLENGES..." 
                    className="h-32"
                    aria-label="Current Challenges"
                />
                
                <div className="pt-2">
                    <Button className="w-full h-14 font-bold tracking-wide" icon={<ArrowRight size={16} />}>
                        Start the Conversation
                    </Button>
                </div>
            </div>
        </form>
    );
});
DeploymentForm.displayName = 'DeploymentForm';

const PlatformHero = memo(() => (
    <Section className="border-b border-border relative !pb-0 md:!pb-12 bg-background">
        <DitherGrid />
        
        {/* Layer 0: Main Background Globe (Right aligned) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-40 pointer-events-none hidden lg:block mix-blend-screen" aria-hidden="true">
            <DitherGlobe scale={1.6} />
        </div>

        <Reveal>
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                    <ScrambleText text="MISSION OPERATING SYSTEM" delay={200} />
                </div>

                <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                    One Surface.<br /> 
                    <span className="text-muted-foreground">Total Clarity.</span>
                </h1>
                
                <div className="pl-6 border-l-2 border-border mb-12">
                    <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed text-balance">
                        Most agencies are running on a patchwork of disconnected tools. Data is siloed. Staff are exhausted. The mission slows down.
                    </p>
                    <p className="text-lg text-muted-foreground/80 max-w-2xl font-light leading-relaxed text-balance mt-4">
                        Asymmetric.al replaces the chaos of the "DIY stack" with a single, unified operating system designed specifically for the complexities of sending.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Link to="/specs"><Button>System Architecture</Button></Link>
                    <Link to="#mission-control"><Button variant={ButtonVariant.SECONDARY}>Role Views</Button></Link>
                </div>
            </div>
        </Reveal>
    </Section>
));
PlatformHero.displayName = 'PlatformHero';

const FalseChoiceSection = memo(() => (
    <Section className="bg-card relative border-b border-border">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                      The "False Choice"<br/>facing agencies today.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-12 text-balance font-light">
                      For decades, mission leaders have been forced to choose between two failing options. This compromise drains resources and slows deployment.
                  </p>
                  
                  <div className="p-8 border border-destructive/20 bg-destructive/5 rounded-sm">
                      <div className="flex items-center gap-3 text-destructive mb-4 font-mono text-xs uppercase tracking-widest">
                          <AlertTriangle size={14} />
                          System Warning
                      </div>
                      <p className="text-destructive/80 text-sm leading-relaxed italic border-l border-destructive/20 pl-4">
                          "Our ops, mobilization, and finance teams are spending more time managing our tools than we are supporting our missionaries." — Common Agency Feedback
                      </p>
                  </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
    <Section grid className="bg-background border-b border-border relative overflow-hidden">
        {/* Subtle Globe Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" aria-hidden="true">
            <DitherGlobe scale={1.2} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
             <Reveal>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">Why we focus here.</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance">
                    We aren't trying to build software for everyone. We are hyper-focused on the unique complexities of sending agencies.
                </p>
             </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
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
    <Section id="mission-control" className="bg-background relative overflow-hidden border-b border-border">
        {/* Decorative Dither Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
             aria-hidden="true"
        />

        <div className="relative z-10">
             {/* Section Header: The Solution Pitch */}
             <Reveal>
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <Server size={14} className="text-success" />
                        <span className="font-mono text-xs text-success uppercase tracking-widest">The Unified Solution</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                        Mission Control
                    </h2>
                    
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-foreground/40 to-transparent mx-auto mb-8" />

                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-balance mb-8">
                        Replace the clutter with cohesion. Every operational function under one login, sharing one database.
                    </p>
                    
                    <p className="text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed text-balance">
                        No more "integration tax." No more zapping data between five different SaaS tools. 
                        Just one sovereign operating system designed to run the work of the Great Commission.
                    </p>
                </div>
             </Reveal>

             {/* The Modules Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <Section id="contact" className="relative overflow-hidden bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
            <Reveal>
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <Heart size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">Partnership Model</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                    Let's build<br/>the future.
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed max-w-md text-balance text-lg border-l border-border pl-6">
                    We are looking for agencies who are tired of the status quo. If you are ready to modernize your operations and steward your data, we want to talk.
                </p>
                <ul className="space-y-6 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    <li className="flex items-center gap-4 group">
                        <div className="p-1 border border-border rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-colors"></div>
                        </div>
                        Early Access Program
                    </li>
                    <li className="flex items-center gap-4 group">
                         <div className="p-1 border border-border rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-colors"></div>
                        </div>
                        Data Migration Support
                    </li>
                    <li className="flex items-center gap-4 group">
                         <div className="p-1 border border-border rounded-full group-hover:border-primary/50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-colors"></div>
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
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background">
      <PlatformHero />
      <FalseChoiceSection />
      <WhyFocusSection />
      <MissionControlSection />
      <DeploymentSection />
    </div>
  );
};

export default Platform;