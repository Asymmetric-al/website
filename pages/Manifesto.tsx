
import React from 'react';
import { Section, Reveal, GridPattern, ScrambleText, Container } from '../components/UI';

const Manifesto: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <GridPattern className="opacity-20 fixed inset-0 z-0" />
      
      {/* Editorial Layout Wrapper */}
      <Container className="relative z-10">
        
        {/* Header - Brutalist Left-Aligned */}
        <div className="max-w-6xl mb-32 mt-12">
            <Reveal>
                <div className="flex items-center gap-4 mb-6 border-l border-white/20 pl-6">
                    <ScrambleText text="THE PHILOSOPHY" className="font-mono text-xs text-muted uppercase tracking-widest" delay={200} />
                </div>
                
                <h1 className="text-7xl md:text-[10rem] font-display font-bold text-white tracking-tighter leading-[0.8]">
                    Small Inputs.<br/>
                    Exponential<br/>
                    Outputs.
                </h1>
            </Reveal>
        </div>

        {/* Chapter 01: The Origin */}
        <Reveal className="will-change-transform">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-start">
                <div className="md:text-right sticky top-32">
                    <span className="font-mono text-xs text-coral uppercase tracking-widest block mb-2">01 // The Origin</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none text-balance">
                        Bad tools are a stewardship issue.
                    </h2>
                </div>
                <div className="prose prose-invert prose-lg">
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        We started as <span className="text-white font-normal">RisenCode</span> with a simple conviction: place excellent technology in the hands of frontline workers. 
                    </p>
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        The biggest gap wasn't on the field—it was the crushing administrative load behind the scenes. Missionaries were wrestling with spreadsheets instead of serving people. Donors were navigating broken forms.
                    </p>
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        We realized that friction in the back office translates directly to lost ministry on the front lines. Asymmetric.al is the outgrowth of that origin.
                    </p>
                </div>
            </div>
        </Reveal>

        {/* Chapter 02: The Design Principle */}
        <Reveal className="will-change-transform">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-start">
                <div className="md:text-right md:order-last sticky top-32">
                    <span className="font-mono text-xs text-coral uppercase tracking-widest block mb-2">02 // The Design Principle</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none text-balance">
                        The Upside Down Kingdom.
                    </h2>
                </div>
                <div className="prose prose-invert prose-lg md:order-first">
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        We design for asymmetry: simple faithfulness that produces mountain-moving outcomes. This mirrors the Kingdom logic found in Matthew 20:26.
                    </p>
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        Consider the human brain—how God multiplied a few lobes into vast capacity. Or David and Goliath—disproportionate impact through faith and precision.
                    </p>
                    <p className="text-gray-400 font-light leading-relaxed text-balance">
                        We build tools where a small action (a clean code commit, a simplified checkout, an automated receipt) multiplies into thousands of saved hours for the Kingdom.
                    </p>
                </div>
            </div>
        </Reveal>

        {/* Chapter 03: The Model */}
        <Reveal className="will-change-transform">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
                <div className="md:text-right">
                    <span className="font-mono text-xs text-coral uppercase tracking-widest block mb-2">03 // The Staffing Model</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none text-balance">
                        By Missionaries,<br/>For Missionaries.
                    </h2>
                </div>
                <div>
                     <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group">
                        {/* Corner markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20"></div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            Our core staff raise support just like the missionaries we serve. We do this because the work <em>is</em> ministry.
                            We also retain paid development staff to ensure professional delivery.
                        </p>
                        <div className="font-mono text-[10px] text-muted uppercase tracking-widest border-t border-white/10 pt-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-coral rounded-full"></span>
                            Covering Nonprofit: Global Fellowship Inc. (501c3)
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Chapter 04: The Posture */}
        <Reveal className="will-change-transform">
             <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-24 pb-24">
                <span className="font-mono text-xs text-coral uppercase tracking-widest block mb-8">04 // Our Posture</span>
                <p className="text-2xl md:text-4xl font-display font-medium text-white leading-tight mb-12 text-balance">
                    We speak like practitioners. We do not posture. We acknowledge limits. We build open source because truth should be transparent.
                </p>
                <div className="inline-block border border-white/20 px-8 py-4 bg-white/[0.02]">
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">
                        Signed,<br/>
                        <span className="text-white font-bold mt-1 block">The Asymmetric.al Maintainers</span>
                    </p>
                </div>
             </div>
        </Reveal>

      </Container>
    </div>
  );
};

export default Manifesto;
