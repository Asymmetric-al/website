
import React, { FormEvent } from 'react';
import { Section, Reveal, Button, DitherGlobe, SpotlightCard, ScrambleText } from '../components/UI';
import { Target, Layers, AlertTriangle, ArrowRight, Heart, ShieldAlert, Globe, LucideIcon } from 'lucide-react';

// --- Types ---

interface FocusPoint {
    title: string;
    icon: LucideIcon;
    desc: string;
}

interface ProblemOption {
    id: string;
    title: string;
    icon: LucideIcon;
    subtitle: string;
    desc: string;
    points: string[];
}

// --- Static Data ---

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

const FalseChoicePanel: React.FC<{ option: ProblemOption }> = ({ option }) => {
    const isDIY = option.id === 'diy';
    const [label, ...headlineParts] = option.title.split(':');
    const headline = headlineParts.join(':').trim();

    // Inline implementation of TechPanel styles to ensure perfect flex height behavior
    return (
        <div className="bg-black/80 h-full border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col">
            
            {/* TechPanel Corner Markers */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute top-0 left-0 w-px h-2 bg-white/30" />
                <div className="absolute top-0 left-0 w-2 h-px bg-white/30" />
                <div className="absolute top-0 right-0 w-px h-2 bg-white/30" />
                <div className="absolute top-0 right-0 w-2 h-px bg-white/30" />
                <div className="absolute bottom-0 left-0 w-px h-2 bg-white/30" />
                <div className="absolute bottom-0 left-0 w-2 h-px bg-white/30" />
                <div className="absolute bottom-0 right-0 w-px h-2 bg-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-px bg-white/30" />
            </div>

            {/* Ambient Glow */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 ${isDIY ? 'bg-orange-500/10' : 'bg-blue-500/10'} blur-[60px] rounded-full pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-sm border backdrop-blur-md ${
                        isDIY 
                        ? 'bg-orange-900/10 border-orange-500/20 text-orange-500' 
                        : 'bg-blue-900/10 border-blue-500/20 text-blue-500'
                    } group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                        <option.icon size={24} strokeWidth={1.5} />
                    </div>
                    {/* ENHANCED OPTION CHIP */}
                    <span className="font-mono text-[11px] font-bold text-white uppercase tracking-widest bg-white/15 px-4 py-2 rounded border border-white/20 backdrop-blur-md shadow-lg">
                        {label}
                    </span>
                </div>

                {/* Typography Block */}
                <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight leading-[1.1] group-hover:text-white/90 transition-colors">
                        {headline}
                    </h3>
                    <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${isDIY ? 'text-orange-400' : 'text-blue-400'}`}>
                        <div className={`h-px w-4 ${isDIY ? 'bg-orange-500/50' : 'bg-blue-500/50'}`} />
                        {option.subtitle}
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4 font-light flex-grow">
                    {option.desc}
                </p>

                {/* Bottom List */}
                <div className="mt-auto pt-5 border-t border-white/5 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 md:p-8 bg-white/[0.02]">
                     <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-3">Critical Failures</div>
                     <ul className="space-y-2">
                        {option.points.map((point, i) => (
                            <li key={i} className="text-[11px] font-mono text-white/70 flex items-start gap-2.5 group/list">
                                <AlertTriangle size={12} className="text-red-500 shrink-0 mt-0.5 group-hover/list:text-red-400 transition-colors" />
                                <span className="group-hover/list:text-white transition-colors">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const FocusCard: React.FC<{ item: FocusPoint }> = ({ item }) => (
    <SpotlightCard className="h-full p-10 bg-black/80 flex flex-col justify-between group">
        <div>
            <item.icon className="text-white mb-6 group-hover:text-primary transition-colors" size={32} strokeWidth={1} />
            <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">{item.title}</h3>
            <p className="text-muted leading-relaxed text-sm text-balance border-l border-white/10 pl-4">{item.desc}</p>
        </div>
    </SpotlightCard>
);

const DeploymentForm: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const inputClasses = "w-full bg-transparent p-6 text-white placeholder-muted/40 focus:bg-white/[0.02] focus:outline-none font-mono text-xs border-none transition-colors";

    return (
        <form className="space-y-0 relative group" onSubmit={handleSubmit}>
            {/* Decorative form border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-sm pointer-events-none"></div>
            
            <div className="relative bg-black border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    <div className="bg-black">
                         <input type="text" placeholder="ORG NAME" className={inputClasses} />
                    </div>
                    <div className="bg-black">
                         <input type="text" placeholder="CONTACT NAME" className={inputClasses} />
                    </div>
                </div>
                <div className="gap-px bg-white/10 border-t border-white/10 bg-black">
                    <input type="email" placeholder="EMAIL ADDRESS" className={inputClasses} />
                </div>
                <div className="gap-px bg-white/10 border-t border-white/10 bg-black">
                    <textarea 
                        placeholder="TELL US ABOUT YOUR CURRENT CHALLENGES..." 
                        className={`${inputClasses} h-40 resize-none`}
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
};

// --- Main Component ---

const Missions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <Section className="relative border-b border-white/5">
        {/* Globe Effect */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-30 pointer-events-none hidden lg:block z-0 mix-blend-screen">
             <DitherGlobe scale={1.5} />
        </div>

        <div className="max-w-4xl relative z-10">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                    <ScrambleText text="THE UNDERSERVED SECTOR" delay={200} />
                </div>

                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter text-balance">
                    The frontier deserves<br/>
                    world-class tools.
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl font-light mb-12 leading-relaxed text-balance border-l border-white/10 pl-6">
                    Global missions is the most important work on earth, yet it often runs on the oldest software. 
                    We exist to close the gap between silicon valley innovation and the Great Commission.
                </p>
            </Reveal>
        </div>
      </Section>

      {/* The Problem: The False Choice */}
      <Section className="bg-offblack/30 relative">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6 tracking-tight">The "False Choice" facing agencies today.</h2>
                    <p className="text-muted leading-relaxed text-lg mb-8 text-balance">
                        For decades, mission leaders have been forced to choose between two failing options. This compromise drains resources and slows deployment.
                    </p>
                    <div className="p-6 border border-red-500/20 bg-red-900/10 rounded-sm">
                        <div className="flex items-center gap-3 text-red-400 mb-2 font-mono text-xs uppercase tracking-widest">
                            <AlertTriangle size={14} />
                            System Warning
                        </div>
                        <p className="text-red-200/80 text-sm leading-relaxed">
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

      {/* The Solution: Specialized Focus */}
      <Section grid className="bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        {/* Subtle Globe Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
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

      {/* Deployment Form / CTA */}
      <Section id="contact" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <Reveal>
                <div className="flex items-center gap-2 mb-6 text-primary">
                    <Heart size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">Partnership Model</span>
                </div>
                <h2 className="text-5xl font-display font-bold text-white mb-6 tracking-tighter">Let's build the future.</h2>
                <p className="text-muted mb-8 leading-relaxed max-w-md text-balance">
                    We are looking for agencies who are tired of the status quo. If you are ready to modernize your operations and steward your data, we want to talk.
                </p>
                <ul className="space-y-4 font-mono text-xs text-muted uppercase tracking-widest">
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-white rounded-full"></span> Early Access Program
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-white rounded-full"></span> Data Migration Support
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-white rounded-full"></span> Open Source Contribution
                    </li>
                </ul>
            </Reveal>
            
            <Reveal delay={200}>
                <DeploymentForm />
            </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default Missions;
