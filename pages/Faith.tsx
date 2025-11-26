import React, { memo } from 'react';
import { Container, DitherGrid, ScrambleText, Reveal, DitherGlobe, Section } from '../components/UI';
import { BookOpen } from 'lucide-react';

// --- Types ---

interface FaithPoint {
  readonly label: string;
  readonly text: string;
}

// --- Static Data ---

const FAITH_POINTS: readonly FaithPoint[] = [
    { 
        label: "One", 
        text: "We believe that the writings of both Old and New Testaments were breathed out by God through the Holy Spirit, perfectly and without error, and are the final authority in all matters of faith and practice." 
    },
    { 
        label: "Two", 
        text: "We believe in one true and living God the maker of heaven and earth, who exists eternally as three distinct persons: Father, Son, and Holy Spirit." 
    },
    { 
        label: "Three", 
        text: "We believe man was created in the image of God, to glorify God, and enjoy Him forever. But, because of Adam's sin, man lost his innocence and incurred the penalty of spiritual and physical death, so that all human beings are now born with a sinful nature, unable to please God, unable to satisfy God's just requirements, and are therefore separated from God, lost, and unable to save themselves." 
    },
    { 
        label: "Four", 
        text: "We believe Jesus Christ is the only begotten Son of God, who was born of the virgin Mary, lived a life of perfect obedience, suffered under Pontius Pilate, was crucified, died, and was buried; and that on the third day He arose bodily from the tomb, ascended into heaven, and now sits at the right hand of the throne of God." 
    },
    { 
        label: "Five", 
        text: "We believe salvation is in no way a work of man, but a gracious gift of God, received by faith, and made possible only by the substitutionary death of Jesus Christ on the cross." 
    },
    { 
        label: "Six", 
        text: "We believe in one church, which is the body of Christ, and includes all those who have been born again by the Holy Spirit. We affirm that believers in Jesus Christ should be baptized, and should participate together in the Lord's Supper to remember His death until He comes." 
    },
    { 
        label: "Seven", 
        text: "We believe Jesus Christ is coming again in glory to receive His church to Himself, and to judge the world in righteousness." 
    },
    { 
        label: "Eight", 
        text: "We believe in the resurrection of the dead, the punishment of the wicked, and the eternal blessedness of the redeemed." 
    }
];

// --- Sub-Components ---

const FaithHero = memo(() => (
    <Section className="relative z-10 border-b border-white/5 pb-16 md:pb-24">
        <Container>
            <Reveal>
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                        <BookOpen size={12} className="text-primary" />
                        <ScrambleText text="DOCTRINAL FOUNDATION" delay={200} />
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8">
                        Statement<br/>
                        of Faith.
                    </h1>
                    
                    <div className="border-l-2 border-white/10 pl-8">
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl text-balance">
                             The theological bedrock upon which we build. We are a project of Global Fellowship Inc., standing on the historic Christian faith.
                        </p>
                    </div>
                </div>
            </Reveal>
        </Container>
    </Section>
));

FaithHero.displayName = 'FaithHero';

const FaithPointItem = memo(({ point, index }: { readonly point: FaithPoint; readonly index: number }) => (
    <Reveal delay={index * 50} className="w-full">
        <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-white/5 transition-colors duration-500 hover:bg-white/[0.02]">
             {/* Left Column: Number & Label */}
             <div className="md:col-span-3 flex flex-row md:flex-col items-baseline md:items-start gap-4 md:gap-2 select-none">
                 <span className="text-4xl md:text-5xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors duration-500">
                     {(index + 1).toString().padStart(2, '0')}
                 </span>
                 <span className="font-mono text-xs text-primary/80 uppercase tracking-widest pt-1 group-hover:text-primary transition-colors">
                     // {point.label}
                 </span>
             </div>

             {/* Right Column: Text */}
             <div className="md:col-span-9">
                 <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed text-balance group-hover:text-gray-200 transition-colors duration-500">
                     {point.text}
                 </p>
             </div>
        </div>
    </Reveal>
));

FaithPointItem.displayName = 'FaithPointItem';

const FaithFooter = memo(() => (
    <Section className="py-24 relative z-10">
        <Container>
            <Reveal delay={200}>
                <div className="flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6 bg-white/[0.02]">
                            <span className="text-2xl font-serif italic">†</span>
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Soli Deo Gloria</div>
                </div>
            </Reveal>
        </Container>
    </Section>
));

FaithFooter.displayName = 'FaithFooter';

// --- Main Component ---

const Faith: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <DitherGrid className="opacity-10 fixed inset-0 z-0" />
        
        {/* Background Atmosphere */}
        <div className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 mix-blend-screen">
            <DitherGlobe scale={1.8} />
        </div>

        <FaithHero />

        {/* Doctrinal Points List */}
        <Section className="relative z-10 bg-white/[0.02] !pt-0">
            <Container className="max-w-5xl">
                <div className="flex flex-col border-t border-white/5">
                    {FAITH_POINTS.map((item, i) => (
                        <FaithPointItem key={i} point={item} index={i} />
                    ))}
                </div>
            </Container>
        </Section>
        
        <FaithFooter />
    </div>
  );
};

export default Faith;