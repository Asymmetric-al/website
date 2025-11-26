
import React, { memo } from 'react';
import { Container, DitherGrid, ScrambleText, Reveal, TechPanel, SpotlightCard, DitherGlobe, Section } from '../components/UI';
import { ShieldCheck, Scale, FileText, Landmark, Building2, CheckCircle2, FileKey, ArrowRight, LucideIcon, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Types ---

interface EntityDetailProps {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}

interface ClauseSectionProps {
  title: string;
  id: string;
  icon: LucideIcon;
  delay: number;
  theme: 'red' | 'blue' | 'emerald';
  children: React.ReactNode;
}

// --- Sub-Components ---

const EntityDetailRow = memo(({ label, value, mono = false }: EntityDetailProps) => (
  <div className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 group">
    <span className="text-[10px] font-mono text-muted uppercase tracking-widest group-hover:text-gray-400 transition-colors">
      {label}
    </span>
    <span className={cn(
      "text-sm text-white text-right",
      mono ? "font-mono" : "font-sans font-light"
    )}>
      {value}
    </span>
  </div>
));

EntityDetailRow.displayName = 'EntityDetailRow';

const EntityStatusCard = memo(() => (
  <SpotlightCard className="bg-white/[0.02] border-white/10 p-px rounded-sm w-full">
    <div className="bg-black p-5 rounded-sm">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/10">
        <div className="p-2 bg-white/5 border border-white/10 rounded-sm text-white flex-shrink-0">
          <Landmark size={18} strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Legal Entity</div>
          <div className="font-bold font-display text-lg tracking-tight leading-none text-white">Global Fellowship Inc.</div>
        </div>
      </div>
      
      {/* Details List */}
      <div className="flex flex-col">
        <EntityDetailRow 
          label="Tax Status" 
          value={
            <span className="flex items-center justify-end gap-1.5 text-success">
              <CheckCircle2 size={12} /> 501(c)(3) ACTIVE
            </span>
          } 
          mono 
        />
        <EntityDetailRow 
          label="IRS EIN" 
          value={<span className="bg-white/10 px-2 py-0.5 rounded-sm text-[11px] tracking-wider">68-0214543</span>} 
          mono 
        />
        <EntityDetailRow 
          label="Incorporation" 
          value="CALIFORNIA, USA" 
          mono 
        />
        <EntityDetailRow 
          label="Fiscal Year" 
          value="JAN 01 - DEC 31" 
          mono 
        />
      </div>

      {/* Relationship Footer */}
      <div className="mt-5 pt-5 border-t border-dashed border-white/10">
        <div className="text-[9px] font-mono text-muted uppercase tracking-widest mb-3">Project Relationship</div>
        <div className="flex items-center justify-between text-xs text-white border border-white/10 p-2.5 bg-white/[0.02] rounded-sm group hover:border-white/20 transition-colors">
          <div className="flex items-center gap-2">
            <Building2 size={14} className="text-gray-500" />
            <span className="font-mono text-[9px] tracking-wider text-gray-400 uppercase">Parent</span>
          </div>
          <ArrowRight size={12} className="text-gray-600 group-hover:text-primary transition-colors" />
          <div className="flex items-center gap-2">
             <span className="font-bold tracking-tight text-xs">Asymmetric.al</span>
             <span className="font-mono text-[9px] tracking-wider text-gray-400 uppercase">Project</span>
          </div>
        </div>
      </div>
    </div>
  </SpotlightCard>
));

EntityStatusCard.displayName = 'EntityStatusCard';

const FinancialContactCard = memo(() => (
  <div className="bg-black border border-white/10 p-5 rounded-sm w-full hover:border-white/20 transition-colors">
     <div className="flex items-center gap-2 mb-4 text-white/40">
        <Mail size={14} />
        <span className="text-[10px] font-mono uppercase tracking-widest">Financial Contact</span>
     </div>
     
     <p className="text-xs text-gray-400 mb-6 leading-relaxed font-light">
        For official audits, 990 requests, or specific giving inquiries.
     </p>
     
     <div className="pt-4 border-t border-white/5">
        <a href="mailto:finance@globalfellowship.org" className="text-white hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group/link w-fit">
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
        <TechPanel title={title} className="bg-black/50 hover:bg-black transition-colors duration-500 group border border-white/10">
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
    <div className="pt-24 min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 mix-blend-screen">
          <DitherGlobe scale={1.8} />
      </div>

      {/* Added !overflow-visible to ensure sticky positioning works correctly within the Section */}
      <Section className="relative z-10 !pb-24 !overflow-visible">
        
        {/* Header Section */}
        <Container className="mb-20 md:mb-24 border-b border-white/5 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-3xl">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                            <ShieldCheck size={12} className="text-success" />
                            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <ScrambleText text="COMPLIANCE RECORD // PUBLIC" delay={200} />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-white mb-8">
                            Disclosure<span className="text-white/20">.Docx</span>
                        </h1>
                    </Reveal>
                    
                    <Reveal delay={100}>
                        <p className="text-xl text-gray-400 font-light leading-relaxed text-balance border-l border-white/20 pl-6">
                            Transparency regarding our governance structure, fiscal control, and accountability. We operate in the light to serve the Kingdom.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={200} className="w-full md:w-auto">
                     <div className="flex flex-col md:items-end border-l-2 md:border-l-0 md:border-r-2 border-white/10 pl-6 md:pl-0 md:pr-6 py-2">
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Document ID</div>
                        <div className="font-mono text-white text-sm tracking-wider">GF_INC_501C3_V1</div>
                     </div>
                </Reveal>
            </div>
        </Container>

        <Container>
            {/* Removed items-start to allow columns to stretch, enabling sticky behavior */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Left Column: Entity Status - Sticky */}
                <div className="lg:col-span-4 order-2 lg:order-1 relative">
                    <div className="lg:sticky lg:top-32 space-y-4">
                        <Reveal delay={300}>
                            <EntityStatusCard />
                        </Reveal>
                        <Reveal delay={400}>
                            <FinancialContactCard />
                        </Reveal>
                    </div>
                </div>

                {/* Right Column: Detailed Clauses */}
                <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
                    
                    {/* Clause 1: Variance Power */}
                    <ClauseSection 
                        id="fiscal-control"
                        title="CLAUSE 01 // FISCAL CONTROL" 
                        icon={Scale} 
                        theme="red" 
                        delay={400}
                    >
                        <h3 className="text-2xl font-display font-bold text-white tracking-tight">Discretion & Control of Funds</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-balance text-lg">
                            To ensure compliance with IRS regulations regarding tax-deductible contributions, all donations solicited for the Asymmetric.al project are received by Global Fellowship Inc.
                        </p>
                        <div className="bg-red-500/[0.03] border-l-2 border-red-500/30 pl-6 py-6 my-6 rounded-r-sm">
                            <p className="text-sm italic text-red-100/80 font-serif leading-relaxed">
                                "Contributions are solicited with the understanding that Global Fellowship Inc. has complete discretion and control over the use of all donated funds."
                            </p>
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed border-t border-white/5 pt-6 mt-6">
                            <strong className="text-gray-300 block mb-2 font-mono text-[10px] uppercase tracking-widest">The "Variance Power" Requirement</strong>
                            While Global Fellowship Inc. intends to use all designated gifts for the Asymmetric.al project, the Board of Directors retains the legal right and fiduciary responsibility to redirect funds if the project's purpose becomes impossible to fulfill, or if such redirection is necessary to ensure the funds are used in a manner consistent with the exempt purposes of the organization.
                        </div>
                    </ClauseSection>

                    {/* Clause 2: Religious Entity */}
                    <ClauseSection 
                        id="classification"
                        title="CLAUSE 02 // CLASSIFICATION" 
                        icon={FileKey} 
                        theme="blue" 
                        delay={500}
                    >
                        <h3 className="text-2xl font-display font-bold text-white tracking-tight">Religious Nonprofit Status</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-balance text-lg mb-8">
                            Global Fellowship Inc. is organized as a religious nonprofit corporation. As such, we operate in accordance with our sincerely held religious beliefs and tenets of faith.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 border border-white/5 bg-black rounded-sm hover:border-blue-500/20 transition-colors">
                                <h4 className="text-[9px] font-mono text-blue-400 uppercase tracking-widest mb-3">Title VII Exemption</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    We reserve the right to hire employees who share our religious beliefs pursuant to the exemption for religious organizations under the Civil Rights Act of 1964 (42 U.S.C. § 2000e-1).
                                </p>
                            </div>
                            <div className="p-5 border border-white/5 bg-black rounded-sm hover:border-blue-500/20 transition-colors">
                                <h4 className="text-[9px] font-mono text-blue-400 uppercase tracking-widest mb-3">Mission Purpose</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    The overarching mission of the Asymmetric.al project is the advancement of the Christian religion through the development of technology that aids missionary endeavors.
                                </p>
                            </div>
                        </div>
                    </ClauseSection>

                    {/* Clause 3: Deductibility */}
                    <ClauseSection 
                        id="deductibility"
                        title="CLAUSE 03 // DEDUCTIBILITY" 
                        icon={FileText} 
                        theme="emerald" 
                        delay={600}
                    >
                        <h3 className="text-2xl font-display font-bold text-white tracking-tight">Tax Deductibility & Receipts</h3>
                        <p className="text-gray-400 leading-relaxed font-light text-balance text-lg mb-6">
                            Contributions to Global Fellowship Inc. are tax-deductible to the fullest extent permitted by law. Donors will receive an official tax receipt for all contributions immediately via email for online gifts, or via mail for checks.
                        </p>
                        <div className="text-[11px] text-gray-500 font-mono bg-emerald-500/[0.02] p-4 rounded-sm border border-emerald-500/10 flex items-start gap-3">
                            <ShieldCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                            <span>
                                <strong className="text-emerald-400">DISCLAIMER:</strong> No goods or services were provided in exchange for your contribution unless otherwise explicitly noted on your receipt. The intangible religious benefits provided are not valued for tax purposes.
                            </span>
                        </div>
                    </ClauseSection>

                </div>
            </div>
        </Container>

        {/* Footer Seal */}
        <Container>
            <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-700">
                <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mb-6 relative bg-white/[0.01]">
                    <div className="absolute inset-1 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                    <Landmark size={24} className="text-white" strokeWidth={1} />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Official Governance Record</div>
            </div>
        </Container>

      </Section>
    </div>
  );
};

export default Disclosure;
