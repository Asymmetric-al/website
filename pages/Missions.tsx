import React, { FormEvent, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
    Section, 
    Reveal, 
    Button, 
    DitherGlobe, 
    SpotlightCard, 
    ScrambleText, 
    TechPanel,
    Container,
    DitherGrid,
    Input,
    TextArea
} from '../components/UI';
import { 
    Users, 
    Heart, 
    Globe, 
    ArrowRight, 
    Map, 
    Briefcase, 
    CreditCard, 
    TrendingUp, 
    Database, 
    Lock, 
    Cpu, 
    GitBranch, 
    Share2, 
    MessageSquare,
    Code,
    Target,
    type LucideIcon
} from 'lucide-react';
import { ButtonVariant } from '../types';

// --- Types ---

interface ChallengeItem {
    readonly title: string;
    readonly icon: LucideIcon;
    readonly desc: string;
}

interface ServantRole {
    readonly role: string;
    readonly icon: LucideIcon;
    readonly desc: string;
}

interface FeaturePoint {
    readonly title: string;
    readonly desc: string;
}

// --- Constants & Static Data ---

const UNIQUE_CHALLENGES: readonly ChallengeItem[] = [
    {
        title: "You send people, not products",
        icon: Users,
        desc: "Support raising, field placement, member care, and long‑term support all tie together. A “donor pipeline” view is not enough. You need a clear picture of people, teams, churches, and sending relationships around each worker."
    },
    {
        title: "You serve many kinds of partners",
        icon: Share2,
        desc: "Missionaries on support, national workers, senders back home, churches, field leaders, finance staff. Each group needs a different window into the same story, with the same data underneath."
    },
    {
        title: "You live at the edges of complexity",
        icon: Globe,
        desc: "Cross‑border gifts, multi‑currency support, receipts in different jurisdictions, staff spread across continents. You need tools that carry that complexity without burying your teams in manual work."
    }
];

const SERVANT_ROLES: readonly ServantRole[] = [
    {
        role: "For Missionaries",
        icon: Map,
        desc: "They should not need a degree in software just to know if they are at support. Our vision is clear dashboards, clear next steps, simple ways to thank donors, and tools that help them stay healthy enough to stay on the field."
    },
    {
        role: "For Mobilizers & Member Care",
        icon: Heart,
        desc: "You live in the tension between “we need more workers” and “we must care well for the ones we have.” We design screens that tie together applicants, references, interviews, training, and care in one connected story, so nothing slips through the cracks."
    },
    {
        role: "For Finance & Operations",
        icon: CreditCard,
        desc: "You see the whole iceberg: bank feeds, payouts, reconciliations, audits. Our platform is shaped so finance can trust the numbers, match gifts and deposits, and produce statements without juggling twelve spreadsheets on the side, freeing time for counsel, planning, and stewardship."
    },
    {
        role: "For Advancement & Development",
        icon: TrendingUp,
        desc: "You carry the task of funding the work, building long‑term relationships with churches, major partners, and first‑time givers. We connect your giving data, campaigns, missionary stories, and statements in one place, so you can see where momentum is growing, where support is at risk, and who needs a personal touch."
    },
    {
        role: "For Donors & Sending Churches",
        icon: Briefcase,
        desc: "Your partners want clarity and connection, not just tax receipts. We give them clean portals to see their giving, update cards, download statements, and hear from the missionaries they love, so they stay engaged for the long haul."
    }
];

const FOCUS_POINTS: readonly FeaturePoint[] = [
    { title: "Sending at the center", desc: "Every part of the system starts with missionaries, designations, and sending relationships, not generic “accounts” or “opportunities”." },
    { title: "Front‑to‑back support", desc: "From first interest and applications, to onboarding, to support raising, to field service, to retirement, the data stays connected so your teams stay on the same page." },
    { title: "Global from day one", desc: "Currency, receipts, address formats, and communications are built with cross‑border work in mind, so your systems grow as your fields grow." },
    { title: "One Mission Control, many roles", desc: "Mobilizers, finance, advancement, communications, and executives all work in the same place, with views shaped to their role, instead of hopping between unlinked tools." },
    { title: "AI and automation with guardrails", desc: "Assistants, workflows, and reporting help staff do more with less screen time, while keeping tenant‑level safety, audit trails, and clear permissions." }
];

// --- Sub-Components ---

const HeroSection = memo(() => {
    const scrollToContact = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <Section className="relative border-b border-border !pb-0 md:!pb-12 bg-background">
            <DitherGrid />
            {/* Globe Effect - Rendered only on large screens to save resources */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-40 pointer-events-none hidden lg:block z-0 mix-blend-screen" aria-hidden="true">
                <DitherGlobe scale={1.6} />
            </div>

            <Container className="relative z-10">
                <Reveal>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                            <ScrambleText text="THE UNDERSERVED SECTOR" delay={200} />
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-8 leading-[0.9] tracking-tighter text-balance">
                            The frontier deserves<br/>
                            world-class tools.
                        </h1>
                        
                        <div className="border-l-2 border-border pl-8 mb-12">
                            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed text-balance mb-6">
                                Global missions is the most important work on earth. The tools behind it shouldn’t feel like an afterthought. We exist to serve one thing: getting the gospel to people who have never heard the name of Jesus.
                            </p>
                            <p className="text-lg text-muted-foreground/80 max-w-2xl font-light leading-relaxed text-balance">
                                Let's close the gap between silicon valley innovation and the Great Commission.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                variant={ButtonVariant.PRIMARY} 
                                icon={<ArrowRight size={16} />} 
                                onClick={scrollToContact}
                            >
                                Start the Conversation
                            </Button>
                            <Link to="/product">
                                <Button variant={ButtonVariant.SECONDARY}>
                                    Learn how the platform works
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
});
HeroSection.displayName = 'HeroSection';

const WhyMissionsOnly = memo(() => (
    <Section className="bg-card border-b border-border relative">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-5 relative">
                     <div className="lg:sticky lg:top-32 space-y-8">
                        <div>
                            <div className="text-xs font-mono text-success uppercase tracking-widest mb-4">01 // The Focus</div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 tracking-tight leading-[1.1] text-balance">
                                Why we give all our focus to missions agencies.
                            </h2>
                        </div>
                        <TechPanel noBorder className="bg-background border-l border-border">
                            <p className="text-muted-foreground leading-relaxed text-balance italic">
                                "Most software stacks are built for sales teams, memberships, or generic fundraising. Missions does not fit that mold."
                            </p>
                        </TechPanel>
                     </div>
                </div>
                <div className="lg:col-span-7 space-y-8 text-lg font-light text-muted-foreground leading-relaxed">
                    <p>
                        You carry a different weight. You are sending people, not shipping products. You are caring for families in hard places, coordinating with churches, donors, and field partners across borders, currencies, and time zones.
                    </p>
                    <p>
                        The current leadership of Asymmetric.al felt that gap in missions ourselves. We watched faithful staff spend hours wrestling tools that were never built for their calling. 
                    </p>
                    <p className="text-foreground border-l border-border pl-6">
                        That tension is what gave birth to Asymmetric.al: <strong className="font-normal">a project by missionaries, for missionaries.</strong>
                    </p>
                </div>
            </div>
        </Reveal>
    </Section>
));
WhyMissionsOnly.displayName = 'WhyMissionsOnly';

const ChallengeCard = memo(({ item }: { readonly item: ChallengeItem }) => (
    <SpotlightCard className="h-full bg-card border-border flex flex-col group rounded-sm hover:border-foreground/20 transition-all">
        <div className="p-8 md:p-10 flex flex-col h-full">
            <div className="mb-8 p-3 bg-secondary w-fit rounded-sm border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors text-muted-foreground">
                <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-4 tracking-tight">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed text-balance font-light mt-auto border-t border-border pt-6">
                {item.desc}
            </p>
        </div>
    </SpotlightCard>
));
ChallengeCard.displayName = 'ChallengeCard';

const NotGenericSection = memo(() => (
    <Section grid className="bg-background relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <DitherGrid />
        </div>

        <Container className="relative z-10">
            <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-20">
                     <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">02 // The Reality</div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">Sending is different.</h2>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance">
                         If you lead a missions agency, you already know this, but most software does not. Because missions is unique, we believe it deserves software that is born from that world, not adapted to it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {UNIQUE_CHALLENGES.map((item, i) => (
                        <ChallengeCard key={i} item={item} />
                    ))}
                </div>
            </Reveal>
        </Container>
    </Section>
));
NotGenericSection.displayName = 'NotGenericSection';

const ServantRoleCard = memo(({ role }: { readonly role: ServantRole }) => (
    <div className="group relative overflow-hidden bg-card border border-border hover:border-foreground/20 transition-all duration-300 rounded-sm">
        <div className="absolute inset-0 bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
        
        <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex items-center gap-6">
                <div className="p-3 bg-secondary border border-border rounded-sm text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all flex-shrink-0">
                    <role.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground tracking-tight">{role.role}</h3>
            </div>
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                <p className="text-muted-foreground font-light leading-relaxed text-balance group-hover:text-foreground/80 transition-colors">
                    {role.desc}
                </p>
            </div>
        </div>
    </div>
));
ServantRoleCard.displayName = 'ServantRoleCard';

const ServeTheServants = memo(() => (
    <Section className="bg-card border-b border-border">
        <Reveal>
             <div className="mb-16 md:mb-24">
                 <div className="flex items-center gap-2 mb-4">
                     <Users size={14} className="text-success" />
                     <span className="text-xs font-mono text-success uppercase tracking-widest">03 // Our Calling</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter mb-8 max-w-4xl leading-[0.9]">
                     We use technology to serve the servants.
                 </h2>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                     <p className="text-lg text-muted-foreground leading-relaxed text-balance font-light">
                         We believe some of the most important work on earth is happening quietly, through missionaries and local believers taking the gospel where it has never gone.
                     </p>
                     <p className="text-lg text-foreground leading-relaxed border-l-2 border-border pl-6 text-balance font-light">
                         Our role is not to be the hero of that story. Our role is to lift the load from their shoulders.
                     </p>
                 </div>
             </div>

             <div className="space-y-4">
                 {SERVANT_ROLES.map((role, i) => (
                     <ServantRoleCard key={i} role={role} />
                 ))}
             </div>
        </Reveal>
    </Section>
));
ServeTheServants.displayName = 'ServeTheServants';

const FeatureRow = memo(({ item, index }: { readonly item: FeaturePoint; readonly index: number }) => (
    <div className="flex gap-6 py-8 border-b border-border last:border-0 group">
        <div className="font-mono text-xs text-muted-foreground pt-1">{(index + 1).toString().padStart(2, '0')}</div>
        <div>
            <h4 className="text-xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">{item.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-light text-balance">{item.desc}</p>
        </div>
    </div>
));
FeatureRow.displayName = 'FeatureRow';

const WhatFocusChanges = memo(() => (
    <Section className="relative z-10 border-b border-border bg-background">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div>
                     <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">04 // The Impact</div>
                     <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 tracking-tight leading-[1.1]">
                         What missions‑only focus means in practice.
                     </h2>
                     <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 text-balance">
                         Because we only build for missions nonprofits, we can shape the whole platform around your world instead of forcing you into someone else’s pattern.
                     </p>
                     <div className="p-8 border border-dashed border-border bg-card rounded-sm">
                         <Target size={32} className="text-foreground mb-6" />
                         <p className="text-foreground font-bold font-display text-lg mb-2">The Goal is Simple.</p>
                         <p className="text-muted-foreground font-light text-sm leading-relaxed">
                             Fewer hours fighting systems, more hours on people and places still waiting for the good news.
                         </p>
                     </div>
                </div>

                <div className="space-y-0 border-t border-border lg:border-t-0">
                    {FOCUS_POINTS.map((pt, i) => (
                        <FeatureRow key={i} item={pt} index={i} />
                    ))}
                </div>
            </div>
        </Reveal>
    </Section>
));
WhatFocusChanges.displayName = 'WhatFocusChanges';

const OriginStory = memo(() => (
    <Section className="bg-background text-center relative overflow-hidden border-b border-border">
        {/* Background Ambience */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/[0.03] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        
        <Container className="relative z-10 max-w-3xl">
            <Reveal>
                <div className="inline-flex items-center gap-2 mb-8 text-primary">
                    <Database size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">05 // Origin Story</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-12 tracking-tighter leading-[1.1]">
                    We felt this pain from the inside.
                </h2>
                
                <div className="prose dark:prose-invert prose-lg mx-auto text-muted-foreground font-light leading-relaxed text-balance">
                    <p className="mb-8">
                        Asymmetric.al started inside a mission organization that wanted to send technologists as missionaries. We expected to build field‑facing tools. Then we kept running into the same problem.
                    </p>
                    <p className="mb-8 text-foreground font-normal text-2xl font-display">
                        Mission staff were drowning in admin.
                    </p>
                    <p className="mb-12">
                         Wrestling old donor systems, manual statements, scattered websites, and brittle integrations. The field was waiting, but the back office was underwater. That “holy frustration” pushed us to ask a simple question:
                    </p>
                    <div className="border-l-2 border-border pl-8 text-left italic text-xl text-foreground mb-12 py-2">
                        "What if missions agencies had first‑class tools, built for their calling, not as an afterthought to some other market?"
                    </div>
                    <p>
                        Today we operate as a nonprofit project, with developers and staff who raise support like missionaries. We share the same heart and the same dependence on God’s provision as the agencies we serve.
                    </p>
                </div>
            </Reveal>
        </Container>
    </Section>
));
OriginStory.displayName = 'OriginStory';

const OpenProjectSection = memo(() => (
    <Section className="relative z-10 border-b border-border bg-card">
        <Reveal>
             <div className="mb-16 max-w-4xl">
                 <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">06 // Open Source</div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                     Not just a product. A shared build for the global church.
                 </h2>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance">
                     We do not want missions agencies to feel captive to one vendor’s roadmap. Our platform is built on open‑source foundations, with open hands, so the Body of Christ can shape and extend the tools it relies on.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <TechPanel title="OPEN BY DESIGN" className="h-full bg-background">
                     <ul className="space-y-6">
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><GitBranch size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">Built on open‑source tools that can be audited and extended.</span>
                         </li>
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><Lock size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">Clear data ownership: your organization keeps control of your content, data, and domains.</span>
                         </li>
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><Cpu size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">A stack that can be curated and contributed to by a wider missions tech community.</span>
                         </li>
                     </ul>
                 </TechPanel>

                 <TechPanel title="BETTER TOGETHER" className="h-full bg-background">
                     <ul className="space-y-6">
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><Users size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">Agencies can share patterns, flows, and templates instead of solving the same problems alone.</span>
                         </li>
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><Code size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">Developers in your network can add features or integrations and share them back.</span>
                         </li>
                         <li className="flex gap-4">
                             <div className="mt-1 text-muted-foreground"><MessageSquare size={16} /></div>
                             <span className="text-muted-foreground text-sm leading-relaxed">As we ship new modules, we listen first to sending agencies on the front lines.</span>
                         </li>
                     </ul>
                 </TechPanel>
             </div>
             
             <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground font-mono text-xs uppercase tracking-widest">
                 Our hope is simple: a global community working on one shared platform.
             </div>
        </Reveal>
    </Section>
));
OpenProjectSection.displayName = 'OpenProjectSection';

const ContactSection = memo(() => {
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        // Handle logic
    }, []);

    return (
        <Section id="contact" className="bg-background">
            <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 text-primary">
                             <Globe size={16} />
                             <span className="font-mono text-xs uppercase tracking-widest">07 // Invitation</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 tracking-tight leading-[0.9]">
                            Let's talk about your agency.
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed mb-12">
                            <p>
                                We are early on purpose. We would rather build this with a small group of sending agencies who care about the field as much as we do, than build in a corner and roll out a finished product that misses real needs.
                            </p>
                            <p>
                                If you lead a missions organization and you feel the weight of broken systems, we would love to hear your story. No hard sell, just a real conversation.
                            </p>
                        </div>
                        
                        <div className="p-8 border border-border bg-card rounded-sm">
                            <div className="flex items-center gap-2 mb-4 text-foreground font-bold font-display text-xl">
                                <Code size={20} />
                                For missions-minded technologists
                            </div>
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                If you are a developer, designer, or tech leader who wants to contribute to a missions‑first platform, we would love to connect. There is room for people who want to write code, shape UX, or help agencies migrate into healthier systems.
                            </p>
                            <Link to="/join" className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center gap-2">
                                Join the build community <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-32">
                        <form className="space-y-0 relative group shadow-2xl" onSubmit={handleSubmit}>
                            {/* Decorative form border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-sm pointer-events-none" aria-hidden="true" />
                            
                            <div className="relative bg-card border border-border p-8 md:p-10 rounded-sm space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input 
                                        label="Identity // Org Name"
                                        placeholder="ORG NAME" 
                                        aria-label="Organization Name" 
                                    />
                                    <Input 
                                        label="Identity // Contact"
                                        placeholder="CONTACT NAME" 
                                        aria-label="Contact Name" 
                                    />
                                </div>
                                
                                <Input 
                                    label="Communication // Email"
                                    type="email" 
                                    placeholder="EMAIL ADDRESS" 
                                    aria-label="Email Address" 
                                />
                                
                                <TextArea 
                                    label="Context // Briefing"
                                    placeholder="SHARE A BIT ABOUT YOUR AGENCY, CURRENT TOOLS, AND PAIN POINTS..." 
                                    className="h-40"
                                    aria-label="Message"
                                />
                                
                                <div className="pt-2">
                                    <Button className="w-full h-14 font-bold tracking-wide" icon={<ArrowRight size={16} />}>
                                        Start the Conversation
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-4 text-[10px] text-muted-foreground font-mono text-center uppercase tracking-widest">
                                We’ll follow up with a short call & walkthrough.
                            </p>
                        </form>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
});
ContactSection.displayName = 'ContactSection';

// --- Main Component ---

const Missions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background">
      <HeroSection />
      <WhyMissionsOnly />
      <NotGenericSection />
      <ServeTheServants />
      <WhatFocusChanges />
      <OriginStory />
      <OpenProjectSection />
      <ContactSection />
    </div>
  );
};

export default Missions;