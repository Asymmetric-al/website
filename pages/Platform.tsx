
import React from 'react';
import { Section, TechPanel, Reveal, Button, DitherGrid, SpotlightCard, DitherGlobe } from '../components/UI';
import { Link } from 'react-router-dom';
import { Database, Layout, Globe, Shield, Zap, ArrowRight, Mail, FileText, PenTool, BarChart } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white overflow-hidden">
      
      {/* Hero / Value Prop */}
      <Section className="border-b border-border relative">
        {/* Offset Globe in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-40 pointer-events-none hidden lg:block">
            <DitherGlobe scale={1.5} />
        </div>

        <Reveal>
            <span className="font-mono text-xs text-muted uppercase tracking-widest mb-4 block">Mission Control v1.0</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-[0.9]">
                One Surface.<br /> 
                <span className="text-muted">Zero Friction.</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl font-light leading-relaxed mb-12 text-balance">
                Mission focused organizations are forced into a false choice: outdated all-in-one platforms or a brittle, pieced-together stack.
                <br/><br/>
                Asymmetric.al is the third option. A unified operating system where identity, data, and automation live in one kernel.
            </p>
            <div className="flex gap-6">
                <Link to="/specs"><Button>System Architecture</Button></Link>
                <Link to="/missions"><Button variant="secondary">Role Views</Button></Link>
            </div>
        </Reveal>
      </Section>

      {/* The Problem */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal>
                <h3 className="text-white font-display text-3xl mb-6">The Fractured Stack</h3>
                <p className="text-muted leading-relaxed mb-6 text-balance">
                    In the "DIY" model, data is copied by hand. Staff juggle multiple logins. APIs don't line up.
                    Operators spend time moving files and fixing sync issues instead of serving people.
                </p>
                <ul className="space-y-4 font-mono text-xs text-muted uppercase tracking-widest">
                    <li className="flex items-center gap-2 text-red-400"><span className="w-1 h-1 bg-red-400"></span> Month-end close drift</li>
                    <li className="flex items-center gap-2 text-red-400"><span className="w-1 h-1 bg-red-400"></span> Donor drop-off at checkout</li>
                    <li className="flex items-center gap-2 text-red-400"><span className="w-1 h-1 bg-red-400"></span> Security gaps in plugins</li>
                </ul>
            </Reveal>
            <Reveal delay={200}>
                <TechPanel title="Legacy State" className="h-full bg-red-900/5 border-red-900/20">
                    <div className="grid grid-cols-2 gap-4 opacity-50 pointer-events-none">
                        <div className="border border-dashed border-red-800 p-4 text-xs font-mono text-red-800 text-center">Spreadsheets</div>
                        <div className="border border-dashed border-red-800 p-4 text-xs font-mono text-red-800 text-center">Manual Mailchimp</div>
                        <div className="border border-dashed border-red-800 p-4 text-xs font-mono text-red-800 text-center">Brittle Zapier</div>
                        <div className="border border-dashed border-red-800 p-4 text-xs font-mono text-red-800 text-center">Offline Checks</div>
                    </div>
                </TechPanel>
            </Reveal>
        </div>
      </Section>

      {/* Mission Control Tiles */}
      <Section grid className="bg-offblack/30">
        <Reveal>
            <div className="mb-16">
                <h2 className="text-4xl font-display font-bold text-white mb-4">Mission Control Modules</h2>
                <p className="text-muted">Role-aware tiles. Every operational function under one login.</p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
             {[
                { 
                    title: "Partners CRM", 
                    desc: "Single source for people, churches, pledges. The living center of relationships.",
                    icon: Database 
                },
                { 
                    title: "Contributions Hub", 
                    desc: "Live feed of transactions. Filter recurring gifts, returns, and enter offline checks.",
                    icon: Zap 
                },
                { 
                    title: "Web Studio", 
                    desc: "Manage headless sites and missionary pages without coding. See visitor engagement.",
                    icon: Globe 
                },
                { 
                    title: "Email Studio", 
                    desc: "Branded Unlayer templates with verified domains. Track delivery and bounces.",
                    icon: Mail 
                },
                { 
                    title: "Statements Studio", 
                    desc: "Official documents via Gotenberg. Receipt packs and year-end PDFs.",
                    icon: FileText 
                },
                { 
                    title: "Sign Studio", 
                    desc: "Integrated e-signature via Documenso. Build packets and track routing.",
                    icon: PenTool 
                },
                { 
                    title: "Mobilize", 
                    desc: "Applicant intake to deployment. Manage checklists and references.",
                    icon: ArrowRight 
                },
                { 
                    title: "Report Studio", 
                    desc: "Explore data via ECharts. Schedule CSV/PDF delivery via Automations.",
                    icon: BarChart 
                },
                { 
                    title: "Automations", 
                    desc: "Embedded Zapier hub. Create flows for donation runs and syncs.",
                    icon: Layout 
                }
             ].map((tile, i) => (
                 <Reveal key={i} delay={i * 50} className="h-full">
                    <SpotlightCard className="p-8 h-full">
                        <tile.icon className="text-muted mb-6 group-hover:text-white transition-colors" size={24} strokeWidth={1} />
                        <h3 className="text-lg font-display font-bold text-white mb-2">{tile.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{tile.desc}</p>
                    </SpotlightCard>
                 </Reveal>
             ))}
        </div>
      </Section>
    </div>
  );
};

export default Platform;
