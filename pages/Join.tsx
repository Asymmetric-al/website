
import React, { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
    Code, 
    Globe, 
    ArrowRight, 
    Zap, 
    Terminal, 
    Users, 
    GitPullRequest, 
    BookOpen, 
    Heart, 
    type LucideIcon 
} from 'lucide-react';
import { 
    Section, 
    Reveal, 
    SpotlightCard, 
    TechPanel, 
    ScrambleText, 
    Button, 
    DitherGrid, 
    DitherGlobe 
} from '../components/UI';
import { ButtonVariant } from '../types';

// --- Types ---

interface Pathway {
    readonly title: string;
    readonly icon: LucideIcon;
    readonly subtitle: string;
    readonly desc: string;
    readonly action: string;
    readonly link: string;
    readonly internal: boolean;
}

interface ValueItem {
    readonly title: string;
    readonly icon: LucideIcon;
    readonly desc: string;
}

interface RoleItem {
    readonly id: string;
    readonly title: string;
    readonly type: string;
    readonly location: string;
    readonly stack: string;
    readonly desc: string;
}

interface PathwayCardProps {
    readonly pathway: Pathway;
    readonly onScroll: (e: React.MouseEvent) => void;
}

interface ValueCardProps {
    readonly value: ValueItem;
}

interface RoleCardProps {
    readonly role: RoleItem;
}

// --- Static Data ---

const PATHWAYS: readonly Pathway[] = [
    {
        title: "Full-Time Staff",
        icon: Users,
        subtitle: "The Core Team",
        desc: "Join the core engineering unit. Our staff operate on a support-raised model, similar to the missionaries we serve. This allows us to sustain world-class engineering talent while keeping platform costs accessible for the global church.",
        action: "View Roles",
        link: "#roles",
        internal: true
    },
    {
        title: "Internships",
        icon: BookOpen,
        subtitle: "The Forge",
        desc: "A rigorous season of contribution and learning. We pair you with senior engineers to ship real code to production. Ideal for students or boot camp graduates looking to bridge the gap to seniority.",
        action: "Inquire via Email",
        link: "mailto:careers@asymmetric.al?subject=Internship Inquiry",
        internal: false
    },
    {
        title: "Open Source",
        icon: GitPullRequest,
        subtitle: "The Community",
        desc: "You don't need to change jobs to contribute. Jump into our GitHub, pick up a ticket, and help us improve the ecosystem. A perfect way to tithe your talent on your own schedule.",
        action: "GitHub Repo",
        link: "https://github.com/Asymmetric-al",
        internal: false
    }
];

const VALUES: readonly ValueItem[] = [
    {
        title: "Excellence as Stewardship",
        icon: Heart,
        desc: "We don't ship broken windows. We believe that building reliable, performant, and maintainable software is a form of care for the people who rely on it."
    },
    {
        title: "High-Agency Builders",
        icon: Zap,
        desc: "We are a lean team. We value individuals who can take an ambiguous problem, architect a solution, and drive it to completion without needing constant oversight."
    },
    {
        title: "Empathy for the Field",
        icon: Globe,
        desc: "We build for people working in low-bandwidth, high-stress environments. We prioritize offline-first architecture and accessible UX over flashy trends."
    }
];

const OPEN_ROLES: readonly RoleItem[] = [
    {
        id: 'fe-eng',
        title: "Senior Frontend Engineer",
        type: "Full-Time (Support Raised)",
        location: "Remote",
        stack: "React, Next.js, TypeScript, Tailwind",
        desc: "Own the Mission Control interface. You will architect the dashboard experience used by thousands of workers, focusing on performance, accessibility, and offline-sync capabilities."
    },
    {
        id: 'be-eng',
        title: "Backend Systems Architect",
        type: "Full-Time (Support Raised)",
        location: "Remote",
        stack: "Node.js, PostgreSQL, Redis, Keycloak",
        desc: "Scale the kernel. You will handle complex data synchronization between tenants, manage identity across services, and ensure data sovereignty protocols."
    },
    {
        id: 'db-eng',
        title: "Database Reliability Engineer",
        type: "Full-Time (Support Raised)",
        location: "Remote",
        stack: "PostgreSQL, Redis, pgvector",
        desc: "Steward the data. You will optimize complex multi-tenant queries, design efficient schemas for financial ledgers, and manage replication strategies for high availability."
    },
    {
        id: 'devops',
        title: "Infrastructure Engineer",
        type: "Full-Time (Support Raised)",
        location: "Remote",
        stack: "AWS, Terraform, Docker, GitHub Actions",
        desc: "Manage the fleet. You will own our Infrastructure as Code, secure our cloud perimeter, and build resilient CI/CD pipelines for zero-downtime deployments."
    },
    {
        id: 'dev-rel',
        title: "Developer Advocate",
        type: "Part-Time / Contract",
        location: "Remote",
        stack: "Docs, Community, Content",
        desc: "Bridge the gap between our core team and the open-source community. You will write technical documentation, manage PRs, and help external contributors succeed."
    },
    {
        id: 'prod-design',
        title: "Product Designer",
        type: "Full-Time (Support Raised)",
        location: "Remote",
        stack: "Figma, Design Systems, UX Research",
        desc: "Translate complex operational workflows into intuitive interfaces. You will maintain our design system and work directly with missionaries to understand their friction points."
    }
];

// --- Sub-Components ---

const PathwayCard = memo(({ pathway, onScroll }: PathwayCardProps) => (
    <SpotlightCard className="h-full bg-card border-border group rounded-sm hover:border-foreground/30 transition-all duration-500">
        <div className="flex flex-col justify-between h-full p-8 md:p-10">
            <div>
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-secondary rounded-sm border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors text-muted-foreground">
                        <pathway.icon size={24} strokeWidth={1.5} />
                    </div>
                </div>
                
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4 border-l border-border pl-3">
                    {pathway.subtitle}
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight group-hover:text-foreground/90 transition-colors">
                    {pathway.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 text-balance font-light">
                    {pathway.desc}
                </p>
            </div>

            <div className="pt-6 border-t border-border">
                {pathway.internal ? (
                    <button 
                        onClick={onScroll}
                        className="text-xs font-mono text-foreground group-hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest cursor-pointer w-fit focus:outline-none"
                    >
                        {pathway.action} <ArrowRight size={12} />
                    </button>
                ) : (
                    <a 
                        href={pathway.link}
                        target={pathway.link.startsWith('http') ? "_blank" : undefined}
                        rel={pathway.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-xs font-mono text-foreground group-hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest cursor-pointer w-fit"
                    >
                        {pathway.action} <ArrowRight size={12} />
                    </a>
                )}
            </div>
        </div>
    </SpotlightCard>
));
PathwayCard.displayName = 'PathwayCard';

const ValueCard = memo(({ value }: ValueCardProps) => (
    <div className="group h-full p-8 border border-border bg-card hover:bg-secondary/20 transition-colors rounded-sm flex flex-col">
        <div className="mb-6 text-muted-foreground group-hover:text-primary transition-colors">
            <value.icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-tight">{value.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-balance font-light mt-auto">
            {value.desc}
        </p>
    </div>
));
ValueCard.displayName = 'ValueCard';

const RoleCard = memo(({ role }: RoleCardProps) => {
    // Determine badge styling based on role type
    const isSupportRaised = role.type.includes('Support');
    const badgeStyle = isSupportRaised 
        ? 'bg-success/10 text-success border-success/20'
        : 'bg-secondary text-muted-foreground border-border';

    return (
        <TechPanel noBorder className="border border-border bg-card hover:border-foreground/30 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden="true" />
             
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                 <div className="flex-1 space-y-3">
                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                         <h3 className="text-xl font-bold text-foreground font-display tracking-tight">{role.title}</h3>
                         <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-widest w-fit border ${badgeStyle}`}>
                            {role.type}
                         </span>
                     </div>
                     
                     <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed font-light text-balance">{role.desc}</p>
                     
                     <div className="flex flex-wrap items-center gap-3 pt-2">
                         <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-secondary px-2 py-1 rounded-sm border border-border">
                             <Code size={10} /> {role.stack}
                         </div>
                         <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-secondary px-2 py-1 rounded-sm border border-border">
                             <Globe size={10} /> {role.location}
                         </div>
                     </div>
                 </div>
                 
                 <div className="flex items-center justify-end w-full md:w-auto pt-4 md:pt-0 border-t border-border md:border-0">
                     <Link to="/contact" className="w-full md:w-auto">
                         <Button 
                            variant={ButtonVariant.SECONDARY} 
                            className="w-full md:w-auto border-border text-foreground hover:bg-foreground hover:!text-background hover:border-foreground transition-all duration-300"
                         >
                             Initiate <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                     </Link>
                 </div>
             </div>
        </TechPanel>
    );
});
RoleCard.displayName = 'RoleCard';

// --- Main Component ---

const Join: React.FC = () => {
  const scrollToRoles = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('roles');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      
      {/* Background Globe */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 opacity-20 pointer-events-none z-0 mix-blend-screen" aria-hidden="true">
         <DitherGlobe scale={1.6} />
      </div>

      {/* Hero Section */}
      <Section className="relative z-10 !pb-12">
        <div className="max-w-5xl">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                    <Terminal size={12} className="text-primary" />
                    <ScrambleText text="OPEN RECRUITMENT" delay={200} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                    Your code.<br/>
                    <span className="text-muted-foreground">Their mission.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed text-balance border-l border-border pl-6 mb-12">
                    We are bridging the gap between Silicon Valley innovation and the Great Commission. 
                    If you are a builder looking to use your craft for something that outlasts you, you belong here.
                </p>
            </Reveal>
        </div>
      </Section>

      {/* Pathways Section */}
      <Section className="relative z-10 !pt-0">
          <Reveal>
             <div className="mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4 tracking-tight">How to Engage</h2>
                <p className="text-muted-foreground max-w-xl font-light leading-relaxed">There are three ways to join the mission, depending on your capacity and calling.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {PATHWAYS.map((path, i) => (
                    <PathwayCard key={i} pathway={path} onScroll={scrollToRoles} />
                ))}
             </div>
          </Reveal>
      </Section>

      {/* Culture / DNA Section */}
      <Section className="bg-card border-y border-border relative overflow-hidden">
          <Reveal>
            <div className="flex items-center gap-2 mb-12">
                <Zap size={16} className="text-muted-foreground/60" />
                <h2 className="font-mono text-xs text-foreground uppercase tracking-widest">Engineering Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {VALUES.map((item, i) => (
                    <ValueCard key={i} value={item} />
                ))}
            </div>
          </Reveal>
      </Section>

      {/* Roles Board */}
      <Section id="roles" className="relative z-10 !pb-0">
          <Reveal>
             <div className="flex justify-between items-end mb-16">
                 <div>
                    <h2 className="text-4xl font-display font-bold text-foreground tracking-tight mb-2">Active Deployments</h2>
                    <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Current priority needs for the team</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 gap-6">
                 {OPEN_ROLES.map((role) => (
                     <RoleCard key={role.id} role={role} />
                 ))}
             </div>

             {/* General CTA */}
             <div className="mt-20 mb-24 p-12 border border-dashed border-border rounded-sm bg-card text-center relative overflow-hidden">
                 <DitherGrid className="opacity-50" />
                 <div className="relative z-10">
                    <h4 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight">Don't see your specific role?</h4>
                    <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto leading-relaxed font-light">
                        We are always interested in conversations with high-agency builders. 
                        Whether you are a Security Specialist, Data Scientist, or just want to help—let's talk.
                    </p>
                    <Link to="/contact">
                        <Button>Start a Conversation</Button>
                    </Link>
                 </div>
             </div>
          </Reveal>
      </Section>

    </div>
  );
};

export default Join;