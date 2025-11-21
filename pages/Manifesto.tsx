
import React from 'react';
import { Section, Reveal, GridPattern } from '../components/UI';

const Manifesto: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <GridPattern className="opacity-20 fixed inset-0" />
      
      <Section className="max-w-3xl mx-auto relative z-10">
        <Reveal>
            <div className="mb-8 border-l border-white pl-6">
                <span className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">The Philosophy</span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
                    Small Inputs.<br/>
                    Exponential Outputs.
                </h1>
            </div>
        </Reveal>

        <div className="space-y-16 font-light text-lg md:text-xl text-gray-400 leading-relaxed mt-24">
            {/* The Origin */}
            <Reveal delay={100}>
                <h3 className="text-white font-display text-2xl mb-4">The Origin</h3>
                <p>
                    We started as RisenCode with a simple conviction: <span className="text-white">place excellent technology in the hands of frontline workers.</span> 
                    The biggest gap wasn't on the field—it was the crushing administrative load behind the scenes.
                    <br/><br/>
                    Missionaries were wrestling with spreadsheets instead of serving people. Donors were navigating broken forms. 
                    We realized that bad tools are a stewardship issue. Asymmetric.al is the outgrowth of that origin—a product team operating as a nonprofit project under Global Fellowship.
                </p>
            </Reveal>
            
            {/* The Asymmetry */}
            <Reveal delay={200}>
                <h3 className="text-white font-display text-2xl mb-4">The Design Principle</h3>
                <p>
                    We believe in the "Upside Down Kingdom" (Matt 20:26). We design for asymmetry: simple faithfulness that produces mountain-moving outcomes.
                    <br/><br/>
                    Consider the human brain—how God multiplied a few lobes into vast capacity. Or David and Goliath—disproportionate impact through faith and precision.
                    We build tools where a small action (a clean code commit, a simplified checkout) multiplies into thousands of saved hours for the Kingdom.
                </p>
            </Reveal>

            {/* The Staffing Model */}
            <Reveal delay={300}>
                 <div className="bg-white/5 border border-white/10 p-8">
                    <h3 className="text-white font-display text-xl mb-4">By Missionaries, For Missionaries</h3>
                    <p className="text-base mb-6">
                        Our core staff raise support just like the missionaries we serve. We do this because the work <em>is</em> ministry.
                        We also retain paid development staff to ensure professional delivery. This hybrid model keeps us culturally aligned with the field while technically rigorous.
                    </p>
                    <div className="font-mono text-xs text-muted uppercase tracking-widest border-t border-white/10 pt-4">
                        Covering Nonprofit: Global Fellowship Inc. (501c3)
                    </div>
                </div>
            </Reveal>

            {/* The Promise */}
            <Reveal delay={400}>
                <h3 className="text-white font-display text-2xl mb-4">Our Posture</h3>
                <p>
                    We speak like practitioners. We do not posture. We acknowledge limits. 
                    We build open source because truth should be transparent. We build tenant-owned because ministry should be sovereign.
                    We do not answer to VCs; we answer to the global Church and to God.
                </p>
            </Reveal>
            
            <Reveal delay={500}>
                <div className="mt-16 pt-16 border-t border-border">
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">
                        Signed,<br/>
                        The Asymmetric.al Maintainers
                    </p>
                </div>
            </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default Manifesto;
