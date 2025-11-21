
import React, { useState } from 'react';
import { Section, Button, TechPanel, Reveal } from '../components/UI';
import { ShieldCheck } from 'lucide-react';

const Give: React.FC = () => {
  const [amount, setAmount] = useState(100);

  return (
    <div className="pt-24 min-h-screen bg-black">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal>
                <span className="font-mono text-xs text-white bg-white/10 px-3 py-1 mb-8 inline-block rounded-full">NON-PROFIT 501(c)(3)</span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                    Fund the <br/> Infrastructure.
                </h1>
                <p className="text-muted text-lg leading-relaxed mb-12 max-w-md">
                    Your capital builds the digital rails for the next generation of missions. 
                    Zero profit margin. 100% mission velocity.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div className="pl-4 border-l border-white">
                        <h3 className="text-white font-bold mb-2">Open Source</h3>
                        <p className="text-sm text-muted">Code is public. Contributions accelerate the entire ecosystem.</p>
                    </div>
                    <div className="pl-4 border-l border-white">
                        <h3 className="text-white font-bold mb-2">Stewardship</h3>
                        <p className="text-sm text-muted">Operating under Global Fellowship Inc. Fully tax-deductible.</p>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <TechPanel className="bg-black/50 border-white/10">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                            <span className="font-mono text-xs text-muted uppercase tracking-widest">Frequency</span>
                            <div className="flex gap-4">
                                <button className="text-white text-sm font-bold border-b-2 border-white pb-1">Monthly</button>
                                <button className="text-muted text-sm hover:text-white transition-colors pb-1">One-time</button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3">
                            {[50, 100, 250, 500].map(val => (
                                <button 
                                    key={val}
                                    onClick={() => setAmount(val)}
                                    className={`py-4 font-mono text-sm border transition-all duration-300 ${amount === val ? 'border-white text-white bg-white/10' : 'border-border text-muted hover:border-white hover:text-white'}`}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>

                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-white transition-colors">$</span>
                            <input 
                                type="number" 
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full bg-transparent border border-border p-4 pl-8 text-white font-mono text-xl focus:outline-none focus:border-white transition-all placeholder-white/20"
                            />
                        </div>

                        <Button className="w-full py-5 text-base">Process Gift</Button>
                        
                        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest opacity-60 pt-4">
                            <ShieldCheck size={12} />
                            <span>Secure SSL Encrypted Transaction</span>
                        </div>
                    </div>
                </TechPanel>
            </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default Give;
