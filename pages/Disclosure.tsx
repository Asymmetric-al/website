
import React from 'react';
import { Container, DitherGrid, ScrambleText, Reveal, TechPanel, SpotlightCard, DitherGlobe } from '../components/UI';
import { ShieldCheck, Scale, FileText, Landmark, Building2, CheckCircle2, FileKey, ArrowRight, LucideIcon } from 'lucide-react';

// --- Sub-Components ---

/**
 * EntityStatusCard: Displays the legal details of the organization within a SpotlightCard.
 */
const EntityStatusCard: React.FC = () => (
  <SpotlightCard className="bg-white/[0.02] border-white/10 p-1">
    <div className="bg-black p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
        <div className="p-2 bg-white/10 rounded-sm text-white">
          <Landmark size={20} />
        </div>
        <div>
          <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Legal Entity</div>
          <div className="font-bold font-display text-lg">Global Fellowship Inc.</div>
        </div>
      </div>
      
      {/* Details List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-gray-500">TAX STATUS</span>
          <span className="text-xs font-mono text-success flex items-center gap-2">
            <CheckCircle2 size={12} /> 501(c)(3) ACTIVE
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-gray-500">IRS EIN</span>
          <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded">68-0214543</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-gray-500">INCORPORATION</span>
          <span className="text-xs font-mono text-white">CALIFORNIA, USA</span>
        </div>
      </div>

      {/* Relationship Footer */}
      <div className="mt-8 pt-6 border-t border-dashed border-white/10">
        <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Project Relationship</div>
        <div className="flex items-center gap-2 text-sm text-white border border-white/10 p-3 bg-white/5 rounded-sm">
          <Building2 size={14} className="text-gray-500" />
          <span>Global Fellowship</span>
          <ArrowRight size={12} className="text-gray-600" />
          <span className="font-bold">Asymmetric.al</span>
        </div>
      </div>
    </div>
  </SpotlightCard>
);

/**
 * ClauseSection: A reusable wrapper for the legal clauses on the right side.
 */
interface ClauseSectionProps {
  title: string;
  icon: LucideIcon;
  delay: number;
  theme: 'red' | 'blue' | 'green';
  children: React.ReactNode;
}

const ClauseSection: React.FC<ClauseSectionProps> = ({ title, icon: Icon, delay, theme, children }) => {
  // Theme map for icon styling
  // Replaced blue theme with primary/emerald styles as requested
  const styles = {
    red: 'bg-red-500/10 text-red-500 border-red-500/20',
    blue: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', 
    green: 'bg-green-500/10 text-green-500 border-green-500/20',
  };

  return (
    <Reveal delay={delay}>
      <TechPanel title={title} className="bg-black hover:border-white/30 transition-colors group">
        <div className="flex gap-6 items-start">
          <div className={`p-3 rounded-sm border hidden md:block ${styles[theme]}`}>
            <Icon size={24} />
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </TechPanel>
    </Reveal>
  );
};

// --- Main Page Component ---

const Disclosure: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" />
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
          <DitherGlobe scale={1.8} />
      </div>

      <Container className="relative z-10 pb-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 mt-12 border-b border-white/10 pb-8 gap-8">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-6 backdrop-blur-md">
                    <ShieldCheck size={12} className="text-success" />
                    <ScrambleText text="COMPLIANCE RECORD // PUBLIC" delay={200} />
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-2">
                    Disclosure<span className="text-white/20">.Docx</span>
                </h1>
                <p className="text-muted font-mono text-xs uppercase tracking-widest">
                    Governance Structure & Financial Accountability
                </p>
            </Reveal>

            <Reveal delay={200}>
                 <div className="text-right hidden md:block">
                    <div className="text-[10px] font-mono text-gray-500 mb-1">DOC_ID</div>
                    <div className="font-mono text-white text-sm">GF_INC_501C3_V1</div>
                 </div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Entity Status */}
            <div className="lg:col-span-4 space-y-8 sticky top-24 self-start">
                <Reveal delay={300}>
                    <EntityStatusCard />
                    
                    <div className="mt-8 p-6 border border-white/5 bg-white/[0.01]">
                        <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Financial Contact</h4>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                            For official audits, 990 requests, or giving inquiries.
                        </p>
                        <a href="mailto:finance@globalfellowship.org" className="text-white hover:text-primary transition-colors font-mono text-sm flex items-center gap-2">
                            finance@globalfellowship.org <ArrowRight size={12} />
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* Right Column: Detailed Clauses */}
            <div className="lg:col-span-8 space-y-6">
                
                {/* Clause 1: Variance Power */}
                <ClauseSection 
                    title="CLAUSE 01 // FISCAL CONTROL" 
                    icon={Scale} 
                    theme="red" 
                    delay={400}
                >
                    <h3 className="text-xl font-display font-bold text-white mb-4">Discretion & Control of Funds</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        To ensure compliance with IRS regulations regarding tax-deductible contributions, all donations solicited for the Asymmetric.al project are received by Global Fellowship Inc.
                    </p>
                    <div className="bg-white/[0.02] border-l-2 border-primary p-6 relative">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                        <p className="text-sm italic text-gray-300 font-mono leading-relaxed">
                            "Contributions are solicited with the understanding that Global Fellowship Inc. has complete discretion and control over the use of all donated funds."
                        </p>
                    </div>
                    <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                        <strong>The "Variance Power" Requirement:</strong> While Global Fellowship Inc. intends to use all designated gifts for the Asymmetric.al project, the Board of Directors retains the legal right and fiduciary responsibility to redirect funds if the project's purpose becomes impossible to fulfill, or if such redirection is necessary to ensure the funds are used in a manner consistent with the exempt purposes of the organization.
                    </p>
                </ClauseSection>

                {/* Clause 2: Religious Entity */}
                <ClauseSection 
                    title="CLAUSE 02 // CLASSIFICATION" 
                    icon={FileKey} 
                    theme="blue" 
                    delay={500}
                >
                    <h3 className="text-xl font-display font-bold text-white mb-4">Religious Nonprofit Status</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Global Fellowship Inc. is organized as a religious nonprofit corporation. As such, we operate in accordance with our sincerely held religious beliefs and tenets of faith.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-white/10 bg-white/[0.02]">
                            <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2">Title VII Exemption</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                We reserve the right to hire employees who share our religious beliefs pursuant to the exemption for religious organizations under the Civil Rights Act of 1964 (42 U.S.C. § 2000e-1).
                            </p>
                        </div>
                        <div className="p-4 border border-white/10 bg-white/[0.02]">
                            <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-2">Mission Purpose</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                The overarching mission of the Asymmetric.al project is the advancement of the Christian religion through the development of technology that aids missionary endeavors.
                            </p>
                        </div>
                    </div>
                </ClauseSection>

                 {/* Clause 3: Deductibility */}
                 <ClauseSection 
                    title="CLAUSE 03 // DEDUCTIBILITY" 
                    icon={FileText} 
                    theme="green" 
                    delay={600}
                >
                    <h3 className="text-xl font-display font-bold text-white mb-4">Tax Deductibility & Receipts</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Contributions to Global Fellowship Inc. are tax-deductible to the fullest extent permitted by law. Donors will receive an official tax receipt for all contributions immediately via email for online gifts, or via mail for checks.
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                        DISCLAIMER: No goods or services were provided in exchange for your contribution unless otherwise explicitly noted on your receipt. The intangible religious benefits provided are not valued for tax purposes.
                    </p>
                </ClauseSection>

            </div>
        </div>

        {/* Footer Seal */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center justify-center opacity-50">
             <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-4">
                 <Landmark size={24} className="text-white/40" />
             </div>
             <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Official Governance Record</div>
        </div>

      </Container>
    </div>
  );
};

export default Disclosure;
