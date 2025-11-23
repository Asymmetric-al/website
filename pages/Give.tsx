
import React, { useState } from 'react';
import { Section, Button, TechPanel, Reveal, DitherGrid, ScrambleText, SpotlightCard } from '../components/UI';
import { ShieldCheck, ArrowRight, Lock, HeartHandshake, HelpCircle } from 'lucide-react';

// --- Static Data ---
const AMOUNTS = [50, 100, 250, 500, 1000];

const PITCH_POINTS = [
    { title: "Open Source", desc: "Code is public. Contributions accelerate the entire ecosystem." },
    { title: "Stewardship", desc: "Operating under Global Fellowship Inc. Fully tax-deductible." },
    { title: "Efficiency", desc: "We build shared rails so individual ministries don't have to." },
    { title: "Scale", desc: "One platform serving many agencies multiplies your impact." }
];

const FAQ_ITEMS = [
    { q: "Is my gift tax-deductible?", a: "Yes. All gifts are processed through our covering nonprofit, Global Fellowship Inc. (EIN 68-0214543), and are fully tax-deductible in the US." },
    { q: "Do you charge a margin?", a: "No. Ministries keep their own Stripe accounts. We charge only at-cost for hosting and licensing. Our aim is global impact, not profit." },
    { q: "Will you stay open source?", a: "Yes. We build on and contribute to open-source. We will keep publishing our forks and patches to ensure no vendor lock-in." },
    { q: "What does my gift fund?", a: "Core engineering, security reviews, data residency work, and early onboarding for pilot organizations." },
    { q: "Can I give via Check or DAF?", a: "Yes. Please contact info@asymmetric.al for wire instructions or mailing addresses for Donor Advised Funds." },
    { q: "Who controls the funds?", a: "Asymmetric.al operates as a project under the governance of the Global Fellowship board, ensuring financial accountability." }
];

const Give: React.FC = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState<'monthly' | 'onetime'>('monthly');

  return (
    <div className="pt-32 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <DitherGrid className="opacity-20 fixed inset-0 z-0" />

      <Section className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: The Pitch */}
            <div className="lg:col-span-7 pt-8">
                <Reveal>
                    <div className="inline-flex items-center gap-3 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse"></span>
                        <ScrambleText text="NONPROFIT 501(c)(3)" delay={200} />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter text-balance">
                        Fuel the tool that<br/>
                        serves the servants.
                    </h1>
                    
                    <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl text-balance border-l border-white/10 pl-6">
                        Your capital builds the digital rails for the next generation of missions. 
                        We operate with zero profit margin to maximize mission velocity.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PITCH_POINTS.map((item, i) => (
                        <Reveal key={i} delay={300 + (i * 100)}>
                            <div className="group">
                                <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-coral transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed text-balance">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Right Column: The Terminal */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32">
                <Reveal delay={200} className="will-change-transform">
                    <SpotlightCard className="bg-black/80 backdrop-blur-xl border-white/10 p-1">
                        <div className="p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden">
                            {/* Header */}
                            <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                <div className="flex items-center gap-2 text-white">
                                    <HeartHandshake size={16} className="text-coral" />
                                    <span className="font-mono text-sm uppercase tracking-wider font-bold">Secure Donation</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-mono text-coral/80 uppercase tracking-widest">
                                    <Lock size={10} />
                                    Encrypted
                                </div>
                            </div>

                            {/* Frequency Toggle */}
                            <div className="grid grid-cols-2 p-1 bg-white/5 rounded-sm">
                                <button 
                                    onClick={() => setFrequency('monthly')}
                                    className={`py-3 text-xs font-mono uppercase tracking-widest transition-all ${frequency === 'monthly' ? 'bg-white text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Monthly
                                </button>
                                <button 
                                    onClick={() => setFrequency('onetime')}
                                    className={`py-3 text-xs font-mono uppercase tracking-widest transition-all ${frequency === 'onetime' ? 'bg-white text-black font-bold shadow-lg' : 'text-gray-500 hover:text-white'}`}
                                >
                                    One-Time
                                </button>
                            </div>

                            {/* Amount Grid */}
                            <div className="grid grid-cols-3 gap-2">
                                {AMOUNTS.map(val => (
                                    <button 
                                        key={val}
                                        onClick={() => setAmount(val)}
                                        className={`py-4 font-mono text-sm border transition-all duration-200 ${amount === val ? 'border-white text-white bg-white/5' : 'border-white/5 text-gray-500 hover:border-white/20 hover:text-white'}`}
                                    >
                                        ${val}
                                    </button>
                                ))}
                                <div className="relative col-span-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                                    <input 
                                        type="number" 
                                        placeholder="Custom"
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full h-full bg-transparent border border-white/5 text-white font-mono text-sm pl-6 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Total Display */}
                            <div className="py-8 text-center border-y border-white/10 bg-white/[0.02]">
                                <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Total Contribution</span>
                                <span className="text-5xl font-display font-bold text-white tracking-tight">${amount}</span>
                                <span className="text-sm text-gray-500 block mt-2">
                                    {frequency === 'monthly' ? '/ month' : ' single gift'}
                                </span>
                            </div>

                            <Button className="w-full py-6 text-base bg-white hover:bg-coral hover:text-black border-none" icon={<ArrowRight size={16} />}>
                                Process Donation
                            </Button>

                            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                                <ShieldCheck size={12} className="text-coral" />
                                <span>256-bit SSL Encrypted</span>
                            </div>
                        </div>
                    </SpotlightCard>
                </Reveal>
            </div>
        </div>
      </Section>

      {/* FAQ / Technical Details */}
      <Section className="border-t border-white/5 bg-white/[0.02]">
        <Reveal>
            <div className="flex items-center gap-2 mb-12">
                <HelpCircle size={16} className="text-white/40" />
                <h2 className="font-mono text-xs text-white uppercase tracking-widest">Financial FAQ</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FAQ_ITEMS.map((item, i) => (
                    <TechPanel key={i} noBorder className="bg-transparent pl-6 border-l border-white/10 hover:border-coral/50 transition-colors group">
                        <h4 className="text-white font-bold font-display text-lg mb-3 group-hover:text-coral transition-colors">{item.q}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed text-balance">{item.a}</p>
                    </TechPanel>
                ))}
            </div>
        </Reveal>
      </Section>

    </div>
  );
};

export default Give;
