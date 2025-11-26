import React, { memo } from 'react';
import { Container, DitherGrid, ScrambleText, Reveal, TechPanel, SpotlightCard, DitherGlobe, Section } from '../components/UI';
import { ShieldCheck, Scale, FileText, Landmark, Building2, Check, FileKey, ArrowRight, LucideIcon, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Types ---

interface ClauseSectionProps {
  title: string;
  id: string;
  icon: LucideIcon;
  delay: number;
  theme: 'red' | 'blue' | 'emerald';
  children: React.ReactNode;
}

// --- Sub-Components ---

const EntityStatusCard = memo(() => (
  <div className="w-full bg-background border border-border rounded-sm overflow-hidden shadow-sm">
    {/* Header & Primary ID */}
    <div className="p-4 border-b border-border bg-secondary/10">
      <div className="flex justify-between items-start mb-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
          <Landmark size={12} />
          Legal Entity
        </div>
        <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-success/10 text-success rounded-sm border border-success/20">
           <Check size={10} strokeWidth={3} />
           <span className="text-[9px] font-mono font-bold uppercase tracking-wide">Active</span>
        </div>
      </div>
      <div className="font-display font-bold text-lg text-foreground leading-tight">Global Fellowship Inc.</div>
      <div className="mt-1 text-xs text-muted-foreground font-light">501(c)(3) Nonprofit Corp.</div>
    </div>

    {/* Technical Specs Grid */}
    <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
        <div className="p-3">
            <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-1">IRS EIN</div>
            <div className="text-xs font-mono text-foreground">68-0214543</div>
        </div>
        <div className="p-3">
             <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-1">Domicile</div>
             <div className="text-xs font-mono text-foreground">California, USA</div>
        </div>
    </div>
    
    <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
        <div className="p-3">
            <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-1">Fiscal Year</div>
            <div className="text-xs font-mono text-foreground">Jan 01 - Dec 31</div>
        </div>
        <div className="p-3">
             <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-1">Relationship</div>
             <div className="text-xs font-mono text-foreground">Parent Org</div>
        </div>
    </div>

    {/* Footer Context */}
    <div className="px-3 py-2 bg-secondary/30 text-[9px] text-muted-foreground font-mono leading-relaxed text-center">
        Asymmetric.al is a fiscal project of Global Fellowship Inc.
    </div>
  </div>
));

EntityStatusCard.displayName = 'EntityStatusCard';

const FinancialContactCard = memo(() => (
  <div className="bg-card border border-border p-4 rounded-sm w-full hover:border-foreground/20 transition-colors">
     <div className="flex items-center gap-2 mb-3 text-muted-foreground">
        <Mail size={14} />
        <span className="text-[10px] font-mono uppercase tracking-widest">Financial Contact</span>
     </div>
     
     <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-light">
        For official audits, 990 requests, or giving inquiries.
     </p>
     
     <div className="pt-3 border-t border-border">
        <a href="mailto:finance@globalfellowship.org" className="text-foreground hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group/link w-fit">
            finance@globalfellowship.org <ArrowRight size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
        </a>
     </div>
  </div>
));

FinancialContactCard.displayName = 'FinancialContactCard';

const ClauseSection = memo(({ title, id, icon: Icon, delay, theme, children }: ClauseSectionProps) => {
  const themeStyles = {
    red: 'text-red-500 border-red-500/20 bg-red-500/5',
    blue: 'text-blue-500 border-blue-500/20 bg-blue-500/5',
    emerald: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
  };

  return (
    <div id={id} className="scroll-mt-32">
        <Reveal delay={delay}>
        <TechPanel title={title} className="bg-card hover:bg-secondary/20 transition-colors duration-500 group border border-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className={cn("p-4 rounded-sm border hidden md:flex items-center justify-center shrink-0 transition-colors duration-300", themeStyles[theme])}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div className="flex-1 space-y-4">
                {children}
            </div>
            </div>
        </TechPanel>
        </Reveal>
    </div>
  );
});

ClauseSection.displayName = 'ClauseSection';

// --- Main Page Component ---

const Disclosure: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0 mix-blend-screen">
          <DitherGlobe scale={1.8} />
      </div>

      <Section className="relative z-10 !pb-24">
        <Container>
           {/* Header */}
           <div className="mb-20 pb-12 border-b border-border">
              <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                      <Scale size={12} className="text-primary" />
                      <ScrambleText text="PUBLIC DISCLOSURE" delay={200} />
                  </div>
                  <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                      Transparency<br/>Report.
                  </h1>
              </Reveal>
               <Reveal delay={100}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                       <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance border-l border-border pl-6">
                           We operate in the light. As a nonprofit project, we believe our partners deserve to know exactly how we are structured and governed.
                       </p>
                       <div className="flex justify-start md:justify-end">
                           <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest bg-secondary/30 border border-border px-4 py-2 rounded-sm">
                               <FileText size={14} />
                               <span>Last Audit: Q4 2024</span>
                           </div>
                       </div>
                   </div>
               </Reveal>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
               {/* Sidebar */}
               <div className="hidden lg:block lg:col-span-4 relative">
                   <div className="sticky top-32 space-y-8">
                       <EntityStatusCard />
                       <FinancialContactCard />
                   </div>
               </div>

               {/* Content */}
               <div className="lg:col-span-8 space-y-12">
                   
                   <ClauseSection 
                      id="structure" 
                      title="Legal Structure & Governance" 
                      icon={Building2} 
                      delay={200}
                      theme="blue"
                   >
                       <p className="text-lg text-foreground font-display font-bold mb-2">Fiscal Sponsorship Model</p>
                       <p className="text-muted-foreground leading-relaxed font-light">
                           Asymmetric.al is not a standalone corporation. We are a legally registered project of Global Fellowship Inc., a 501(c)(3) nonprofit organization based in California.
                       </p>
                       <p className="text-muted-foreground leading-relaxed font-light">
                           This structure allows us to operate with the agility of a startup while maintaining the accountability, tax-exempt status, and governance of an established missions agency. All donations are tax-deductible to the full extent of the law.
                       </p>
                   </ClauseSection>

                   <ClauseSection 
                      id="finance" 
                      title="Financial Accountability" 
                      icon={ShieldCheck} 
                      delay={300}
                      theme="emerald"
                   >
                        <p className="text-lg text-foreground font-display font-bold mb-2">Strict Fund Separation</p>
                        <p className="text-muted-foreground leading-relaxed font-light">
                            All funds raised for Asymmetric.al are restricted for this project's use. Global Fellowship Inc. provides accounting oversight, ensuring every dollar is spent according to our charter.
                        </p>
                        <ul className="space-y-2 mt-4 text-sm text-muted-foreground font-mono">
                            <li className="flex gap-3 items-center"><Check size={14} className="text-success" /> Independent Board Oversight</li>
                            <li className="flex gap-3 items-center"><Check size={14} className="text-success" /> Annual External CPA Review</li>
                            <li className="flex gap-3 items-center"><Check size={14} className="text-success" /> Public Form 990 Availability</li>
                        </ul>
                   </ClauseSection>

                   <ClauseSection 
                      id="data" 
                      title="Data Ownership" 
                      icon={FileKey} 
                      delay={400}
                      theme="red"
                   >
                        <p className="text-lg text-foreground font-display font-bold mb-2">Tenant Sovereignty</p>
                        <p className="text-muted-foreground leading-relaxed font-light">
                            We distinguish clearly between "Platform Data" (analytics, logs) and "Tenant Data" (your donors, your missionaries). You own your Tenant Data. We do not sell, rent, or trade it.
                        </p>
                        <p className="text-muted-foreground leading-relaxed font-light">
                            If you choose to leave the platform, we provide full database exports in standard formats (CSV/JSON/SQL). We do not lock you in.
                        </p>
                   </ClauseSection>

               </div>
           </div>

        </Container>
      </Section>
    </div>
  );
};

export default Disclosure;