
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
    DitherGrid
} from '../components/UI';
import { 
    Target, 
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
    LucideIcon
} from 'lucide-react';
import { ButtonVariant } from '../types';

// --- Types ---

interface ChallengeItem {
    title: string;
    icon: LucideIcon;
    desc: string;
}

interface ServantRole {
    role: string;
    icon: LucideIcon;
    desc: string;
}

interface FeaturePoint {
    title: string;
    desc: string;
}

// --- Static Data ---

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
        icon: Briefcase, // Representing the partnership
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

const HeroSection = memo(() => (
    <Section className="relative border-b border-white/5 pb-24">
        {/* Globe Effect */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-30 pointer-events-none hidden lg:block z-0 mix-blend-screen">
             <DitherGlobe scale={1.5} />
        </div>

        <div className="max-w-4xl relative z-10">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    <ScrambleText text="THE UNDERSERVED SECTOR" delay={200} />
                </div>

                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter text-balance">
                    The frontier deserves<br/>
                    world-class tools.
                </h1>
                
                <div className="border-l-2 border-white/10 pl-8 mb-12">
                    <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed text-balance mb-6">
                        Global missions is the most important work on earth. The tools behind it shouldn’t feel like an afterthought. We exist to serve one thing: getting the gospel to people who have never heard the name of Jesus.
                    </p>
                    <p className="text-lg text-gray-500 max-w-2xl font-light leading-relaxed text-balance">
                        Let's close the gap between silicon valley innovation and the Great Commission.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#contact">
                        <Button variant={ButtonVariant.PRIMARY} icon={<ArrowRight size={16} />}>
                            Start the Conversation
                        </Button>
                    </a>
                    <Link to="/product">
                        <Button variant={ButtonVariant.SECONDARY}>
                            Learn how the platform works
                        </Button>
                    </Link>
                </div>
            </Reveal>
        </div>
    </Section>
));

const WhyMissionsOnly = memo(() => (
    <Section className="bg-offblack/30 relative">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 relative">
                     <div className="sticky top-32">
                        <div className="text-xs font-mono text-success uppercase tracking-widest mb-4">01 // The Focus</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                            Why we give all our focus to missions agencies.
                        </h2>
                        <TechPanel noBorder className="bg-white/[0.02] border-l border-white/10">
                            <p className="text-gray-400 leading-relaxed text-balance">
                                "Most software stacks are built for sales teams, memberships, or generic fundraising. Missions does not fit that mold."
                            </p>
                        </TechPanel>
                     </div>
                </div>
                <div className="lg:col-span-7 space-y-8 text-lg font-light text-gray-300 leading-relaxed">
                    <p>
                        You carry a different weight. You are sending people, not shipping products. You are caring for families in hard places, coordinating with churches, donors, and field partners across borders, currencies, and time zones.
                    </p>
                    <p>
                        The current leadership of Asymmetric.al felt that gap in missions ourselves. We watched faithful staff spend hours wrestling tools that were never built for their calling. 
                    </p>
                    <p>
                        That tension is what gave birth to Asymmetric.al: <strong className="text-white font-normal">a project by missionaries, for missionaries.</strong>
                    </p>
                </div>
            </div>
        </Reveal>
    </Section>
));

const NotGenericSection = memo(() => (
    <Section grid className="bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <DitherGrid />
        </div>

        <Container className="relative z-10">
            <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-20">
                     <div className="text-xs font-mono text-muted uppercase tracking-widest mb-4">02 // The Reality</div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Sending is different.</h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed text-balance">
                         If you lead a missions agency, you already know this, but most software does not. Because missions is unique, we believe it deserves software that is born from that world, not adapted to it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {UNIQUE_CHALLENGES.map((item, i) => (
                        <SpotlightCard key={i} className="h-full bg-white/[0.02] border-white/10 p-8 flex flex-col group">
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-sm border border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed text-balance font-light">
                                {item.desc}
                            </p>
                        </SpotlightCard>
                    ))}
                </div>
            </Reveal>
        </Container>
    </Section>
));

const ServeTheServants = memo(() => (
    <Section className="bg-offblack/50 border-y border-white/5">
        <Reveal>
             <div className="mb-16 md:mb-24">
                 <div className="flex items-center gap-2 mb-4">
                     <Users size={14} className="text-success" />
                     <span className="text-xs font-mono text-success uppercase tracking-widest">03 // Our Calling</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-8 max-w-4xl">
                     We use technology to serve the servants.
                 </h2>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     <p className="text-lg text-gray-400 leading-relaxed">
                         We believe some of the most important work on earth is happening quietly, through missionaries and local believers taking the gospel where it has never gone.
                     </p>
                     <p className="text-lg text-white leading-relaxed border-l-2 border-white/20 pl-6">
                         Our role is not to be the hero of that story. Our role is to lift the load from their shoulders.
                     </p>
                 </div>
             </div>

             <div className="space-y-4">
                 {SERVANT_ROLES.map((role, i) => (
                     <div key={i} className="group relative overflow-hidden bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all duration-500 rounded-sm">
                         <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         
                         <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                             <div className="lg:col-span-4 flex items-center gap-4">
                                 <div className="p-3 bg-black border border-white/10 rounded-full text-gray-400 group-hover:text-white group-hover:border-white/40 transition-all">
                                     <role.icon size={20} />
                                 </div>
                                 <h3 className="text-2xl font-display font-bold text-white">{role.role}</h3>
                             </div>
                             <div className="lg:col-span-8">
                                 <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                     {role.desc}
                                 </p>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
        </Reveal>
    </Section>
));

const WhatFocusChanges = memo(() => (
    <Section className="relative z-10">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                     <div className="text-xs font-mono text-muted uppercase tracking-widest mb-4">04 // The Impact</div>
                     <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                         What missions‑only focus means in practice.
                     </h2>
                     <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                         Because we only build for missions nonprofits, we can shape the whole platform around your world instead of forcing you into someone else’s pattern.
                     </p>
                     <div className="p-8 border border-dashed border-white/10 bg-white/[0.02] rounded-sm">
                         <Target size={32} className="text-white mb-6" />
                         <p className="text-white font-bold text-lg mb-2">The Goal is Simple.</p>
                         <p className="text-gray-400 font-light">
                             Fewer hours fighting systems, more hours on people and places still waiting for the good news.
                         </p>
                     </div>
                </div>

                <div className="space-y-0">
                    {FOCUS_POINTS.map((pt, i) => (
                        <div key={i} className="flex gap-6 py-8 border-b border-white/5 group">
                            <div className="font-mono text-xs text-muted pt-1">{(i + 1).toString().padStart(2, '0')}</div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{pt.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{pt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
    </Section>
));

const OriginStory = memo(() => (
    <Section className="bg-offblack text-center border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10 max-w-3xl">
            <Reveal>
                <div className="inline-flex items-center gap-2 mb-8 text-primary">
                    <Database size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">05 // Origin Story</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 tracking-tight">
                    We felt this pain from the inside.
                </h2>
                
                <div className="prose prose-invert prose-lg mx-auto text-gray-300 font-light leading-relaxed">
                    <p className="mb-8">
                        Asymmetric.al started inside a mission organization that wanted to send technologists as missionaries. We expected to build field‑facing tools. Then we kept running into the same problem.
                    </p>
                    <p className="mb-8 text-white font-normal text-2xl">
                        Mission staff were drowning in admin.
                    </p>
                    <p className="mb-12">
                         Wrestling old donor systems, manual statements, scattered websites, and brittle integrations. The field was waiting, but the back office was underwater. That “holy frustration” pushed us to ask a simple question:
                    </p>
                    <div className="border-l-2 border-white/20 pl-8 text-left italic text-xl text-white mb-12">
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

const OpenProjectSection = memo(() => (
    <Section className="relative z-10">
        <Reveal>
             <div className="mb-16">
                 <div className="text-xs font-mono text-muted uppercase tracking-widest mb-4">06 // Open Source</div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight max-w-4xl">
                     Not just a product. A shared build for the global church.
                 </h2>
                 <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed text-balance">
                     We do not want missions agencies to feel captive to one vendor’s roadmap. Our platform is built on open‑source foundations, with open hands, so the Body of Christ can shape and extend the tools it relies on.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <TechPanel title="OPEN BY DESIGN" className="h-full bg-black/50">
                     <ul className="space-y-6">
                         <li className="flex gap-4">
                             <GitBranch className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">Built on open‑source tools that can be audited and extended.</span>
                         </li>
                         <li className="flex gap-4">
                             <Lock className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">Clear data ownership: your organization keeps control of your content, data, and domains.</span>
                         </li>
                         <li className="flex gap-4">
                             <Cpu className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">A stack that can be curated and contributed to by a wider missions tech community.</span>
                         </li>
                     </ul>
                 </TechPanel>

                 <TechPanel title="BETTER TOGETHER" className="h-full bg-black/50">
                     <ul className="space-y-6">
                         <li className="flex gap-4">
                             <Users className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">Agencies can share patterns, flows, and templates instead of solving the same problems alone.</span>
                         </li>
                         <li className="flex gap-4">
                             <Code className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">Developers in your network can add features or integrations and share them back.</span>
                         </li>
                         <li className="flex gap-4">
                             <MessageSquare className="text-white shrink-0" size={20} />
                             <span className="text-gray-400 text-sm leading-relaxed">As we ship new modules, we listen first to sending agencies on the front lines.</span>
                         </li>
                     </ul>
                 </TechPanel>
             </div>
             
             <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 font-light text-sm">
                 Our hope is simple: a global community of missions organizations, technologists, and senders working on one shared platform, so that every new improvement helps the whole church, not just one org.
             </div>
        </Reveal>
    </Section>
));

const ContactSection = memo(() => {
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        // Handle logic
    }, []);

    const inputClasses = "w-full bg-transparent p-6 text-white placeholder-muted/40 focus:bg-white/[0.02] focus:outline-none font-mono text-xs border-none transition-colors";

    return (
        <Section id="contact" className="bg-white/[0.02] border-t border-white/5">
            <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 text-primary">
                             <Globe size={16} />
                             <span className="font-mono text-xs uppercase tracking-widest">07 // Invitation</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                            Let's talk about your agency.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-12">
                            <p>
                                We are early on purpose. We would rather build this with a small group of sending agencies who care about the field as much as we do, than build in a corner and roll out a finished product that misses real needs.
                            </p>
                            <p>
                                If you lead a missions organization and you feel the weight of broken systems, we would love to hear your story. No hard sell, just a real conversation about what you are carrying, where your pain points are, and whether Asymmetric.al could help.
                            </p>
                        </div>
                        
                        <div className="p-8 border border-white/10 bg-black/50 rounded-sm">
                            <div className="flex items-center gap-2 mb-4 text-white font-bold font-display text-xl">
                                <Code size={20} />
                                For missions-minded technologists
                            </div>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                If you are a developer, designer, or tech leader who wants to contribute to a missions‑first platform, we would love to connect. There is room for people who want to write code, shape UX, or help agencies migrate into healthier systems.
                            </p>
                            <Link to="/join" className="text-xs font-mono uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2">
                                Join the build community <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-0 relative group shadow-2xl" onSubmit={handleSubmit}>
                            {/* Decorative form border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm blur-sm pointer-events-none" />
                            
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
                                        placeholder="SHARE A BIT ABOUT YOUR AGENCY, CURRENT TOOLS, AND PAIN POINTS..." 
                                        className={`${inputClasses} h-40 resize-none`}
                                    />
                                </div>
                                <div className="p-1 bg-white/5">
                                    <Button className="w-full py-6 bg-white text-black hover:bg-primary hover:text-white border-none font-bold" icon={<ArrowRight size={16} />}>
                                        Start the Conversation
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-4 text-[10px] text-gray-600 font-mono text-center uppercase tracking-widest">
                                We’ll follow up with a short call & walkthrough.
                            </p>
                        </form>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
});

// --- Main Component ---

const Missions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden selection:bg-white selection:text-black">
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
