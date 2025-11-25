
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Section, Reveal, SpotlightCard, TechPanel, ScrambleText, Button, DitherGrid, DitherGlobe } from '../components/UI';
import { Code, Globe, ArrowRight, Zap, Terminal, Users, GitPullRequest, BookOpen, Heart, LucideIcon } from 'lucide-react';
import { ButtonVariant } from '../types';

// --- Types ---

interface Pathway {
    title: string;
    icon: LucideIcon;
    subtitle: string;
    desc: string;
    action: string;
    link: string;
    internal: boolean;
}

interface ValueItem {
    title: string;
    icon: LucideIcon;
    desc: string;
}

interface RoleItem {
    id: string;
    title: string;
    type: string;
    location: string;
    stack: string;
    desc: string;
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

const PathwayCard: React.FC<{ pathway: Pathway; onScroll: (e: React.MouseEvent) => void }> = ({ pathway, onScroll }) => (
    <SpotlightCard className="bg-black/50 border-white/10 h-full flex flex-col justify-between p-8 group">
        <div>
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-white/30 group-hover:text-white text-gray-400 transition-all">
                    <pathway.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted">{pathway.subtitle}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">{pathway.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">{pathway.desc}</p>
        </div>
        <div className="pt-6 border-t border-white/5">
            {pathway.internal ? (
                <button 
                    onClick={onScroll}
                    className="text-xs font-mono text-white group-hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest cursor-pointer w-fit focus:outline-none"
                >
                    {pathway.action} <ArrowRight size={12} />
                </button>
            ) : (
                <a 
                    href={pathway.link}
                    target={pathway.link.startsWith('http') ? "_blank" : undefined}
                    rel={pathway.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-xs font-mono text-white group-hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest cursor-pointer w-fit"
                >
                    {pathway.action} <ArrowRight size={12} />
                </a>
            )}
        </div>
    </SpotlightCard>
);

const ValueCard: React.FC<{ value: ValueItem }> = ({ value }) => (
    <div className="p-8 border-l border-white/10 hover:bg-white/[0.02] transition-colors">
        <value.icon size={24} strokeWidth={1.5} className="text-gray-500 mb-6" />
        <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight">{value.title}</h3>
        <p className="text-sm text-muted leading-relaxed text-balance">{value.desc}</p>
    </div>
);

const RoleCard: React.FC<{ role: RoleItem }> = ({ role }) => {
    // Determine badge styling based on role type
    const isSupportRaised = role.type.includes('Support');
    const badgeStyle = isSupportRaised 
        ? 'bg-emerald-900/20 text-emerald-300 border border-emerald-800/30' // Updated to match primary/green
        : 'bg-white/10 text-white/80';

    return (
        <TechPanel noBorder className="border border-white/10 bg-black hover:border-white/30 transition-all group relative overflow-hidden">
             <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                 <div className="flex-1">
                     <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                         <h3 className="text-xl font-bold text-white font-display">{role.title}</h3>
                         <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider w-fit ${badgeStyle}`}>
                            {role.type}
                         </span>
                     </div>
                     <p className="text-gray-400 text-sm max-w-2xl mb-4 leading-relaxed">{role.desc}</p>
                     <div className="flex flex-wrap gap-2">
                         <div className="flex items-center gap-1 text-[10px] font-mono text-primary uppercase tracking-widest">
                             <Code size={10} /> {role.stack}
                         </div>
                         <span className="text-white/10 text-[10px]">|</span>
                         <div className="flex items-center gap-1 text-[10px] font-mono text-muted uppercase tracking-widest">
                             <Globe size={10} /> {role.location}
                         </div>
                     </div>
                 </div>
                 
                 <div className="flex items-center justify-end">
                     <Link to="/contact">
                         <Button 
                            variant={ButtonVariant.SECONDARY} 
                            className="border-white/20 text-white hover:bg-white hover:!text-black hover:border-white transition-all duration-300"
                         >
                             Initiate <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                     </Link>
                 </div>
             </div>
        </TechPanel>
    );
};

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
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      
      {/* Background Globe */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/4 opacity-20 pointer-events-none z-0 mix-blend-screen">
         <DitherGlobe scale={1.6} />
      </div>

      {/* Hero Section */}
      <Section className="relative z-10 !pb-12">
        <div className="max-w-5xl">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <Terminal size={12} className="text-primary" />
                    <ScrambleText text="OPEN RECRUITMENT" delay={200} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    Your code.<br/>
                    <span className="text-muted">Their mission.</span>
                </h1>
                
                <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed text-balance border-l border-white/20 pl-6 mb-12">
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
                <h2 className="text-3xl font-display font-bold text-white mb-4">How to Engage</h2>
                <p className="text-gray-400 max-w-xl">There are three ways to join the mission, depending on your capacity and calling.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PATHWAYS.map((path, i) => (
                    <PathwayCard key={i} pathway={path} onScroll={scrollToRoles} />
                ))}
             </div>
          </Reveal>
      </Section>

      {/* Culture / DNA Section */}
      <Section className="bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
          <Reveal>
            <div className="flex items-center gap-2 mb-12">
                <Zap size={16} className="text-white/40" />
                <h2 className="font-mono text-xs text-white uppercase tracking-widest">Engineering Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <h2 className="text-4xl font-display font-bold text-white tracking-tight mb-2">Active Deployments</h2>
                    <p className="text-muted font-mono text-xs uppercase tracking-widest">Current priority needs for the team</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 gap-4">
                 {OPEN_ROLES.map((role) => (
                     <RoleCard key={role.id} role={role} />
                 ))}
             </div>

             {/* General CTA */}
             <div className="mt-16 mb-24 p-8 md:p-12 border border-dashed border-white/10 rounded bg-white/[0.02] text-center relative overflow-hidden">
                 <DitherGrid className="opacity-50" />
                 <div className="relative z-10">
                    <h4 className="text-2xl font-display font-bold text-white mb-4">Don't see your specific role?</h4>
                    <p className="text-muted text-sm mb-8 max-w-lg mx-auto leading-relaxed">
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
