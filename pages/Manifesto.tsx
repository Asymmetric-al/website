
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Hash, AlignLeft, Users, ShieldCheck, Scale, MousePointer2 } from 'lucide-react';
import { 
    Reveal, 
    GridPattern, 
    ScrambleText, 
    Container, 
    DitherGlobe,
    TechPanel,
    SpotlightCard,
    Section
} from '../components/UI';
import { cn } from '../lib/utils';

// --- Types ---

interface ChapterProps {
    readonly label: string;
    readonly title: React.ReactNode;
    readonly children: React.ReactNode;
    readonly align?: 'left' | 'right';
    readonly id?: string;
}

interface ProseProps {
    readonly children: React.ReactNode;
    readonly className?: string;
}

// --- Sub-Components ---

const ChapterHeader = memo(({ 
    label, 
    title, 
    align = 'left',
    className = '' 
}: { 
    label: string, 
    title: React.ReactNode, 
    align?: 'left' | 'right',
    className?: string 
}) => (
    <div className={cn("flex flex-col gap-6", className, align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left')}>
        <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-border bg-secondary/50 rounded-sm w-fit backdrop-blur-md">
            <Hash size={12} className="text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                {label}
            </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tighter leading-[0.9] text-balance">
            {title}
        </h2>
    </div>
));

ChapterHeader.displayName = 'ChapterHeader';

const Prose = memo(({ children, className = '' }: ProseProps) => (
    <div className={cn("prose dark:prose-invert prose-lg max-w-none prose-p:font-light prose-headings:font-display", className)}>
        {children}
    </div>
));

Prose.displayName = 'Prose';

const ProseParagraph = memo(({ children, highlight = false }: { readonly children: React.ReactNode, readonly highlight?: boolean }) => (
    <p className={cn(
        "leading-relaxed text-lg md:text-xl mb-8 last:mb-0 text-pretty font-light transition-colors duration-300",
        highlight ? "text-foreground font-normal" : "text-muted-foreground"
    )}>
        {children}
    </p>
));

ProseParagraph.displayName = 'ProseParagraph';

// --- Main Layout Components ---

const HeroSection = memo(() => (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 border-b border-border overflow-hidden bg-background">
        <Container className="relative z-10">
            <Reveal>
                <div className="max-w-6xl">
                    <div className="flex items-center gap-4 mb-12 border-l border-border pl-6 opacity-80">
                         <AlignLeft size={16} className="text-foreground" />
                        <ScrambleText text="THE PHILOSOPHY // V1.0" className="font-mono text-xs text-foreground uppercase tracking-widest" delay={200} />
                    </div>
                    
                    <h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-[10rem] font-display font-bold text-foreground tracking-tighter leading-[0.8] mb-12">
                        Small Inputs.<br />
                        <span className="text-foreground/10 dark:text-foreground/20 transition-colors duration-500">Exponential</span><br />
                        Outputs.
                    </h1>
                    
                    <p className="max-w-2xl text-xl text-muted-foreground font-light leading-relaxed border-l-2 border-border pl-8 text-balance">
                        The underlying logic of Asymmetric.al. How we think about software, stewardship, and the scale of the Great Commission.
                    </p>
                </div>
            </Reveal>
        </Container>
    </section>
));

HeroSection.displayName = 'HeroSection';

const ChapterOne = memo(() => (
    <Section className="border-b border-border bg-background">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                    <ChapterHeader label="01 // The Origin" title="Bad tools are a stewardship issue." />
                </div>
                <div className="lg:col-span-7 lg:pt-8">
                    <Prose>
                        <ProseParagraph highlight>
                            We started with a simple conviction: place excellent technology in the hands of frontline workers.
                        </ProseParagraph>
                        <ProseParagraph>
                            The biggest gap wasn't on the field; it was the crushing administrative load behind the scenes. Sending agencies and their missionaries were wrestling with spreadsheets instead of serving people. Donors were navigating broken systems.
                        </ProseParagraph>
                        <ProseParagraph>
                            We realized that friction in the back office translates directly to lost ministry on the front lines. Asymmetric.al is the outgrowth of that need.
                        </ProseParagraph>
                    </Prose>
                </div>
            </div>
        </Reveal>
    </Section>
));

ChapterOne.displayName = 'ChapterOne';

const ChapterTwo = memo(() => (
    <Section className="border-b border-border bg-card">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                {/* Content Left on Desktop for Zig-Zag rhythm */}
                <div className="lg:col-span-7 order-2 lg:order-1 lg:pt-8">
                    <Prose>
                        <ProseParagraph>
                            We operate on a logic of asymmetry: simple faithfulness that produces mountain-moving outcomes. This mirrors the Kingdom principle found in Matthew 20:26.
                        </ProseParagraph>
                        
                        <div className="bg-secondary/30 border-l-2 border-primary/50 my-12 pl-8 py-8 rounded-r-sm">
                            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed text-balance">
                                "Consider the mustard seed—how God multiplies the smallest unit into the largest capacity."
                            </p>
                        </div>
                        
                        <ProseParagraph>
                            Or David and Goliath—disproportionate impact through faith and precision. We build tools where a small action (a clean code commit, a simplified checkout, an automated receipt) multiplies into thousands of saved hours for the Kingdom.
                        </ProseParagraph>
                    </Prose>
                </div>
                
                <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 flex flex-col lg:items-end lg:text-right self-start">
                    <ChapterHeader label="02 // The Paradigm" title="The Upside Down Kingdom." align="right" />
                </div>
            </div>
        </Reveal>
    </Section>
));

ChapterTwo.displayName = 'ChapterTwo';

const ChapterThree = memo(() => (
    <Section className="border-b border-border bg-background">
        <Reveal>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                    <ChapterHeader label="03 // The Design Philosophy" title="Precision through Hyper-Focus." />
                    <div className="hidden lg:block mt-12">
                         <SpotlightCard className="bg-card border-border p-6 rounded-sm">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <MousePointer2 size={20} />
                                <span className="font-mono text-xs uppercase tracking-widest">Minimize Clicks. Maximize Ministry.</span>
                            </div>
                         </SpotlightCard>
                    </div>
                </div>
                <div className="lg:col-span-7 lg:pt-8">
                    <Prose>
                        <ProseParagraph highlight>
                            We apply an asymmetrical principle to product design: minimizing inputs to maximize outputs. This governs every decision we make, from our architecture to our interface.
                        </ProseParagraph>
                        <ProseParagraph>
                            Because we are hyper-focused solely on sending agencies, we can build specific workflows that generic software misses. Whether it is a donor updating a card or a mobilizer tracking a candidate, we engineer for the fewest possible actions.
                        </ProseParagraph>
                        <ProseParagraph>
                            Your time is the most valuable resource in the Great Commission. By removing administrative friction, we protect your capacity to fund ministry, support missionaries, and advance the Gospel.
                        </ProseParagraph>
                    </Prose>
                </div>
            </div>
        </Reveal>
    </Section>
));

ChapterThree.displayName = 'ChapterThree';

const ChapterFour = memo(() => (
    <Section className="border-b border-border bg-card">
        <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                 <div className="lg:col-span-7 order-2 lg:order-1 lg:pt-8">
                    <TechPanel title="STAFFING ARCHITECTURE" className="bg-background shadow-xl">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-secondary rounded-sm border border-border text-primary shrink-0">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-display text-foreground mb-2">Support Raised Staff</h4>
                                    <p className="text-muted-foreground font-light leading-relaxed text-balance">
                                        Our core staff raise support just like the missionaries we serve. We do this because the work <em>is</em> ministry. We also retain paid development staff to ensure professional delivery.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="h-px w-full bg-border" />
                            
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-secondary rounded-sm border border-border text-foreground shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-display text-foreground mb-2">Governance & Covering</h4>
                                    <p className="text-muted-foreground font-light leading-relaxed text-balance">
                                        Operating as a project under Global Fellowship Inc. (501c3). We are accountable to a board of directors and strict financial oversight.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TechPanel>
                </div>
                
                <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 flex flex-col lg:items-end lg:text-right self-start">
                    <ChapterHeader label="04 // The Staffing Model" title="By Missionaries, For Missionaries." align="right" />
                </div>
            </div>
        </Reveal>
    </Section>
));

ChapterFour.displayName = 'ChapterFour';

const ChapterFive = memo(() => (
    <Section className="bg-background relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
             <DitherGlobe scale={1.5} />
        </div>

        <Reveal>
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary/50 rounded-sm text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                         <Scale size={12} className="text-success" />
                        <span>05 // Our Posture</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground leading-tight mb-12 text-balance">
                        We operate with open hands. <br/>
                        <span className="text-muted-foreground">We do not lock you in. We acknowledge limits. We build open source.</span>
                    </h2>

                    <div className="mb-20">
                        <Link to="/faith" className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-foreground text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all group bg-card rounded-sm">
                            Read our Statement of Faith <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="max-w-md mx-auto">
                        <SpotlightCard className="bg-card border-border p-1 rounded-sm">
                            <div className="bg-background p-8 flex flex-col items-center gap-6 rounded-sm">
                                <div className="w-16 h-16 rounded-full border border-border bg-secondary/50 flex items-center justify-center">
                                    <CheckCircle2 size={24} className="text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                                        Digitally Signed
                                    </p>
                                    <span className="text-2xl font-display font-bold text-foreground tracking-tight">
                                        The Maintainers
                                    </span>
                                </div>
                                <div className="w-full pt-6 border-t border-border flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                                    <span>Asymmetric.al</span>
                                    <span>EST. 2024</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </Container>
        </Reveal>
    </Section>
));

ChapterFive.displayName = 'ChapterFive';

// --- Main Component ---

const Manifesto: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans overflow-x-hidden pt-20">
            <GridPattern className="opacity-10 fixed inset-0 z-0" />

            {/* Background Globe Fixed */}
            <div className="fixed top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none z-0 mix-blend-screen" aria-hidden="true">
                <DitherGlobe scale={2.5} />
            </div>

            <HeroSection />
            <ChapterOne />
            <ChapterTwo />
            <ChapterThree />
            <ChapterFour />
            <ChapterFive />
        </div>
    );
};

export default Manifesto;