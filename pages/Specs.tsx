import React, { memo } from 'react';
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
    Activity, 
    ArrowUpRight,
    type LucideIcon 
} from 'lucide-react';
import { 
    Section, 
    Reveal, 
    SpotlightCard, 
    DitherGrid, 
    ScrambleText, 
    DitherGlobe,
    Container
} from '../components/UI';

// --- Types ---

interface StackItem {
    readonly label: string;
    readonly url: string;
}

interface StackCategory {
    readonly id: string;
    readonly label: string;
    readonly icon: LucideIcon;
    readonly description: string;
    readonly meta: string;
    readonly items: readonly StackItem[];
}

interface Metric {
    readonly label: string;
    readonly value: string;
}

// --- Static Data ---

const STACK_DATA: readonly StackCategory[] = [
    {
        id: "core",
        label: "Languages & Core",
        icon: Terminal,
        description: "The primitives we build with.",
        meta: "LAYER 01",
        items: [
            { label: "TypeScript", url: "https://github.com/microsoft/TypeScript" },
            { label: "JavaScript", url: "https://javascript.tm/" },
            { label: "React", url: "https://github.com/facebook/react" },
            { label: "Next.js", url: "https://github.com/vercel/next.js" },
            { label: "Node.js", url: "https://github.com/nodejs" },
            { label: "NestJS", url: "https://github.com/nestjs/nest" },
            { label: "GraphQL", url: "https://graphql.org/" },
            { label: "TanStack", url: "https://github.com/tanstack" }
        ]
    },
    {
        id: "data",
        label: "Data Persistence",
        icon: Database,
        description: "Polyglot storage layer.",
        meta: "LAYER 02",
        items: [
            { label: "PostgreSQL", url: "https://www.postgresql.org/" },
            { label: "MySQL", url: "https://www.mysql.com/" },
            { label: "Redis", url: "https://github.com/redis/redis/" },
            { label: "TanStack DB", url: "https://github.com/TanStack/db" },
            { label: "pgvector", url: "https://github.com/pgvector/pgvector" },
            { label: "TanStack Query", url: "https://tanstack.com/query/latest" },
            { label: "TanStack Table", url: "https://tanstack.com/table/latest" }
        ]
    },
    {
        id: "modules",
        label: "Mission Control Modules",
        icon: Box,
        description: "Core application domains.",
        meta: "LAYER 03",
        items: [
            { label: "Twenty CRM", url: "https://github.com/twentyhq/twenty" },
            { label: "Documenso CE", url: "https://github.com/documenso/documenso" },
            { label: "Chatwoot CE", url: "https://github.com/chatwoot/chatwoot" }
        ]
    },
    {
        id: "cms",
        label: "Content Engine",
        icon: Globe,
        description: "Headless publishing pipeline.",
        meta: "LAYER 04",
        items: [
            { label: "WordPress (Headless)", url: "https://wordpress.org/" },
            { label: "Gutenberg", url: "https://github.com/WordPress/gutenberg" },
            { label: "Faust.js", url: "https://github.com/wpengine/faustjs" },
            { label: "WPGraphQL", url: "https://github.com/wp-graphql/wp-graphql" },
            { label: "Gotenberg", url: "https://github.com/gotenberg/gotenberg" },
            { label: "Unlayer", url: "https://unlayer.com/" }
        ]
    },
    {
        id: "infra",
        label: "Infrastructure & Ops",
        icon: Cloud,
        description: "Edge delivery and observability.",
        meta: "LAYER 05",
        items: [
            { label: "Vercel", url: "https://vercel.com/" },
            { label: "AWS", url: "https://aws.amazon.com/" },
            { label: "Docker", url: "https://github.com/docker" },
            { label: "GitHub", url: "https://github.com/" },
            { label: "Sentry", url: "https://github.com/getsentry/sentry" },
            { label: "OpenTelemetry", url: "https://github.com/open-telemetry" }
        ]
    },
    {
        id: "security",
        label: "Identity & Security",
        icon: Shield,
        description: "Auth, secrets, and keys.",
        meta: "LAYER 06",
        items: [
            { label: "Keycloak", url: "https://github.com/keycloak/keycloak" },
            { label: "Unkey", url: "https://github.com/unkeyed/unkey" },
            { label: "Infisical", url: "https://github.com/Infisical/infisical" }
        ]
    },
    {
        id: "async",
        label: "Integrations & Async",
        icon: Zap,
        description: "External services and queues.",
        meta: "LAYER 07",
        items: [
            { label: "Stripe", url: "https://stripe.com/" },
            { label: "SendGrid", url: "https://sendgrid.com/" },
            { label: "Zapier", url: "https://zapier.com/" },
            { label: "Inngest", url: "https://github.com/inngest/inngest" },
            { label: "BullMQ", url: "https://github.com/taskforcesh/bullmq" }
        ]
    },
    {
        id: "design",
        label: "Interface & Design",
        icon: PenTool,
        description: "Design system and tooling.",
        meta: "LAYER 08",
        items: [
            { label: "shadcn/ui", url: "https://ui.shadcn.com/" },
            { label: "Recharts", url: "https://recharts.org/" },
            { label: "Figma", url: "https://www.figma.com/" }
        ]
    },
    {
        id: "ai",
        label: "Intelligence",
        icon: Cpu,
        description: "Generative capabilities.",
        meta: "LAYER 09",
        items: [
            { label: "OpenAI", url: "https://openai.com/" }
        ]
    }
] as const;

const PERFORMANCE_METRICS: readonly Metric[] = [
    { label: "Edge Protocol", value: "HTTP/3 + QUIC" },
    { label: "API Read Latency", value: "< 150ms (p50)" },
    { label: "API Write Latency", value: "< 600ms (p95)" },
    { label: "Core Web Vitals", value: "75th % Pass" },
    { label: "Availability", value: "99.9% SLO" },
    { label: "Render Start", value: "~1.0s Global" },
] as const;

const RELEASE_GATES: readonly string[] = [
    "Statement Studio totals match source gifts",
    "Reconciliation ties Stripe payouts to journals",
    "SPF, DKIM, DMARC green across tenants",
    "Secrets scan verified clean (Keyclock/Infisical)",
    "PII masking verified in OpenTelemetry logs",
    "Zapier flows verified idempotent",
    "Two-step donor recovery paths verified"
] as const;

// --- Sub-Components ---

const StatusBadge = memo(() => (
    <div className="inline-flex items-center gap-4 px-3 py-1.5 border border-border bg-background/50 rounded-sm text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur-md w-fit mb-8 select-none">
        <span className="flex items-center gap-2 text-foreground">
            <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
            </span>
            System Normal
        </span>
        <span className="text-border">|</span>
        <ScrambleText text="TECH MANIFEST v2.1.0" delay={200} />
    </div>
));
StatusBadge.displayName = 'StatusBadge';

const StackCard = memo(({ category }: { readonly category: StackCategory }) => (
    <SpotlightCard className="h-full bg-card border-none ring-0 shadow-none group">
        <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-start mb-8">
                <div className="p-2.5 bg-secondary rounded-sm border border-border text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-300">
                    <category.icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest pt-1">
                    {category.meta}
                </span>
            </div>

            <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.label}
                </h3>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest leading-relaxed">
                    {category.description}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item, idx) => (
                    <a 
                        key={idx} 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono text-muted-foreground bg-secondary/50 border border-border rounded-sm hover:text-foreground hover:border-foreground/20 hover:bg-secondary transition-all cursor-pointer select-none no-underline group/tag"
                        aria-label={`Learn more about ${item.label}`}
                    >
                        {item.label}
                        <ArrowUpRight size={8} className="opacity-0 group-hover/tag:opacity-100 transition-opacity -ml-1 group-hover/tag:ml-0" />
                    </a>
                ))}
            </div>
        </div>
    </SpotlightCard>
));
StackCard.displayName = 'StackCard';

const MetricItem = memo(({ metric }: { readonly metric: Metric }) => (
    <div className="group border border-border bg-card p-6 rounded-sm hover:border-foreground/20 transition-colors">
        <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-3 group-hover:text-foreground/80 transition-colors">
            {metric.label}
        </div>
        <div className="text-xl md:text-2xl font-bold text-foreground font-display tracking-tight tabular-nums">
            {metric.value}
        </div>
    </div>
));
MetricItem.displayName = 'MetricItem';

const GateItem = memo(({ gate }: { readonly gate: string }) => (
    <li className="flex gap-4 items-start text-sm text-muted-foreground group py-3 border-b border-border last:border-0">
        <CheckCircle2 size={16} className="text-success/50 group-hover:text-success transition-colors mt-0.5 flex-shrink-0" />
        <span className="group-hover:text-foreground transition-colors text-balance font-light leading-relaxed">
            {gate}
        </span>
    </li>
));
GateItem.displayName = 'GateItem';

// --- Sections ---

const SpecsHero = memo(() => (
    <Section className="relative z-10 !pb-0 min-h-[60vh] flex flex-col justify-center">
        <Reveal>
            <Container>
                <div className="flex flex-col max-w-5xl">
                    <StatusBadge />
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground tracking-tighter leading-[0.9] mb-8">
                        The<br/>Architecture.
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed text-balance border-l border-border pl-6 mb-12">
                        We don't hide our choices. We build on a foundation of best-in-class open source technologies and proven cloud primitives.
                        This is the engine room of Asymmetric.al.
                    </p>
                </div>
            </Container>
        </Reveal>
    </Section>
));
SpecsHero.displayName = 'SpecsHero';

const TechStackGrid = memo(() => (
    <Section className="bg-card border-y border-border mt-20 relative z-10 !p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-y border-border">
            {STACK_DATA.map((category, i) => (
                <Reveal key={category.id} delay={i * 50} className="h-full will-change-transform bg-background">
                    <StackCard category={category} />
                </Reveal>
            ))}
        </div>
    </Section>
));
TechStackGrid.displayName = 'TechStackGrid';

const EngineeringStandards = memo(() => (
    <Section className="relative z-10 bg-background">
        <Container>
            <Reveal>
                <div className="flex items-center gap-3 mb-12 opacity-80">
                    <div className="p-1.5 bg-secondary rounded-sm">
                        <Activity size={16} className="text-foreground" />
                    </div>
                    <span className="font-mono text-xs text-foreground uppercase tracking-widest">Engineering Standards</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left: Performance */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-8 tracking-tight">Performance Targets</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {PERFORMANCE_METRICS.map((metric, i) => (
                                <MetricItem key={i} metric={metric} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Quality Gates */}
                    <div>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-8 tracking-tight">Release Gates</h2>
                        <div className="bg-card border border-border rounded-sm p-8">
                            <ul className="space-y-1">
                                {RELEASE_GATES.map((gate, i) => (
                                    <GateItem key={i} gate={gate} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Reveal>
        </Container>
    </Section>
));
EngineeringStandards.displayName = 'EngineeringStandards';

// --- Main Component ---

const Specs: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans overflow-x-hidden">
      <DitherGrid />
      
      {/* Background Globe (Wireframe feel) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-20 pointer-events-none fixed z-0 mix-blend-screen" aria-hidden="true">
          <DitherGlobe scale={1.8} />
      </div>

      <SpecsHero />
      <TechStackGrid />
      <EngineeringStandards />

    </div>
  );
};

export default Specs;