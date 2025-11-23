
import React from 'react';
import { Section, TechPanel, Reveal, Button, DitherGlobe, SpotlightCard } from '../components/UI';
import { Users, DollarSign, Globe, PenTool } from 'lucide-react';

const Missions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden">
      
      {/* Header */}
      <Section className="relative">
        <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 opacity-20 pointer-events-none hidden lg:block">
             <DitherGlobe scale={1.2} />
        </div>

        <div className="max-w-4xl relative z-10">
            <Reveal>
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                    Role-Based <br/> Clarity.
                </h1>
                <p className="text-xl text-muted max-w-2xl font-light mb-12 leading-relaxed text-balance">
                    Current options force a false choice: a closed, outdated all-in-one or a piecemeal stack. 
                    We provide tailored interfaces for every stakeholder in the mission lifecycle.
                </p>
            </Reveal>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
                { 
                    role: "Leadership", 
                    icon: Globe, 
                    desc: "Global oversight metrics. Website management. Real-time giving health." 
                },
                { 
                    role: "Finance", 
                    icon: DollarSign, 
                    desc: "Clean exports to QBO/Xero. No manual re-keying. Faster close." 
                },
                { 
                    role: "Mobilization", 
                    icon: Users, 
                    desc: "Move candidates from contact to deployed with fewer hand-offs." 
                },
                { 
                    role: "Missionaries", 
                    icon: PenTool, 
                    desc: "Support progress at a glance. Spend time with people, not screens." 
                }
            ].map((r, i) => (
                <Reveal key={i} delay={i * 100}>
                    <SpotlightCard className="h-64 flex flex-col justify-between p-6 bg-offblack/20 group">
                        <r.icon className="text-white group-hover:text-coral transition-colors" size={24} strokeWidth={1} />
                        <div>
                            <h3 className="text-lg font-display font-bold text-white mb-2">{r.role}</h3>
                            <p className="text-xs text-muted leading-relaxed text-balance">{r.desc}</p>
                        </div>
                    </SpotlightCard>
                </Reveal>
            ))}
        </div>
      </Section>

      {/* The Problem / Solution Table */}
      <Section className="border-t border-border bg-offblack/30">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-12">Operational Outcomes</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/20">
                            <th className="py-4 font-mono text-xs text-muted uppercase tracking-widest w-1/3">The Pain</th>
                            <th className="py-4 font-mono text-xs text-white uppercase tracking-widest">The Asymmetric.al Fix</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-border">
                            <td className="py-6 text-muted pr-8">Donors cannot update cards or pledges easily. They call the office.</td>
                            <td className="py-6 text-white">Self-service portals. Two-step recovery from dunning emails.</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="py-6 text-muted pr-8">Missionaries struggle to see real-time fund balances or donor details.</td>
                            <td className="py-6 text-white">Missionary Portal with Month-to-Date balance and donor drill-down.</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="py-6 text-muted pr-8">Finance fights manual reconciliation across Stripe and accounting.</td>
                            <td className="py-6 text-white">Automated connectors for QBO/Xero. Deposit-centric journal styles.</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="py-6 text-muted pr-8">Comms templates live in different tools; links aren't branded.</td>
                            <td className="py-6 text-white">Email Studio with Unlayer. Tenant-branded links and domain auth.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </Reveal>
      </Section>

      {/* Deployment Form */}
      <Section id="contact" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
                <h2 className="text-4xl font-display font-medium text-white mb-6">Start the Conversation</h2>
                <p className="text-muted mb-8 leading-relaxed max-w-md">
                    We are onboarding anchor partners selectively. 
                    Tell us about your current context to begin the conversation.
                </p>
                <ul className="space-y-4 font-mono text-xs text-muted uppercase tracking-widest">
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-coral"></span> Current Stack Analysis
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-coral"></span> Migration Planning
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-coral"></span> Pilot Deployment
                    </li>
                </ul>
            </Reveal>
            
            <Reveal delay={200}>
                <form className="space-y-0" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                        <div className="bg-black">
                             <input type="text" placeholder="ORG NAME" className="w-full bg-transparent p-6 text-white placeholder-muted/50 focus:bg-offblack focus:outline-none font-mono text-sm border-none transition-colors" />
                        </div>
                        <div className="bg-black">
                             <input type="text" placeholder="CONTACT NAME" className="w-full bg-transparent p-6 text-white placeholder-muted/50 focus:bg-offblack focus:outline-none font-mono text-sm border-none transition-colors" />
                        </div>
                    </div>
                    <div className="gap-px bg-border border-x border-b border-border bg-black">
                        <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent p-6 text-white placeholder-muted/50 focus:bg-offblack focus:outline-none font-mono text-sm border-none transition-colors" />
                    </div>
                    <div className="gap-px bg-border border-x border-b border-border bg-black">
                        <textarea placeholder="CURRENT CHALLENGES..." className="w-full bg-transparent p-6 text-white placeholder-muted/50 focus:bg-offblack focus:outline-none font-mono text-sm h-40 resize-none border-none transition-colors"></textarea>
                    </div>
                    <div className="pt-6">
                        <Button className="w-full py-6">Request a Call</Button>
                    </div>
                </form>
            </Reveal>
        </div>
      </Section>
    </div>
  );
};

export default Missions;
