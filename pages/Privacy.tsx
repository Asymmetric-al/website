
import React, { memo, useEffect, useState } from 'react';
import { Container, DitherGrid, Reveal, ScrambleText, Section, TechPanel, SpotlightCard } from '../components/UI';
import { ShieldCheck, Lock, ArrowRight, ChevronRight, FileText, CheckCircle2, Server, Globe, CreditCard, Database, type LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Types ---

interface PrivacySectionProps {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly children: React.ReactNode;
}

interface TocItem {
  readonly id: string;
  readonly label: string;
}

interface DataCategoryProps {
    readonly title: string;
    readonly icon: LucideIcon;
    readonly children: React.ReactNode;
}

interface ProviderCardProps {
    readonly name: string;
    readonly role: string;
    readonly icon: LucideIcon;
    readonly link?: string | null;
}

// --- Constants ---

const TOC_ITEMS: readonly TocItem[] = [
  { id: 'collection', label: '1. Collection' },
  { id: 'use', label: '2. Use of Data' },
  { id: 'sovereignty', label: '3. Sovereignty' },
  { id: 'providers', label: '4. Service Providers' },
  { id: 'security', label: '5. Security' },
  { id: 'retention', label: '6. Retention' },
  { id: 'rights', label: '7. Your Rights' },
  { id: 'changes', label: '8. Changes' },
] as const;

// --- Sub-Components ---

const DataCategoryCard = memo(({ title, icon: Icon, children }: DataCategoryProps) => (
    <div className="bg-card border border-border rounded-sm p-6 group hover:border-foreground/20 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-secondary rounded-sm border border-border text-primary group-hover:text-foreground group-hover:bg-primary/20 group-hover:border-primary/20 transition-all">
                <Icon size={16} />
            </div>
            <h4 className="font-display font-bold text-foreground tracking-tight">{title}</h4>
        </div>
        <div className="text-sm text-muted-foreground font-light leading-relaxed text-balance">
            {children}
        </div>
    </div>
));

DataCategoryCard.displayName = 'DataCategoryCard';

const ProviderCard = memo(({ name, role, icon: Icon, link }: ProviderCardProps) => (
    <a 
        href={link || undefined}
        target={link ? "_blank" : undefined}
        rel={link ? "noopener noreferrer" : undefined}
        className={cn(
            "flex items-center gap-4 p-4 border border-border bg-card rounded-sm transition-all duration-300",
            link ? "hover:border-foreground/20 cursor-pointer group" : "opacity-80 cursor-default"
        )}
    >
        <div className="p-2 bg-secondary rounded-sm border border-border text-muted-foreground group-hover:text-foreground transition-colors">
            <Icon size={16} />
        </div>
        <div>
            <div className="font-bold text-foreground text-sm font-display tracking-tight group-hover:text-primary transition-colors">{name}</div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{role}</div>
        </div>
        {link && <ArrowRight size={12} className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />}
    </a>
));

ProviderCard.displayName = 'ProviderCard';

const PrivacySection = memo(({ id, number, title, children }: PrivacySectionProps) => (
  <div id={id} className="scroll-mt-32 mb-20 relative group">
    {/* Visual Anchor Line */}
    <div className="absolute -left-6 lg:-left-12 top-0 bottom-0 w-px bg-border group-hover:bg-foreground/10 transition-colors duration-500" />
    <div className="absolute -left-6 lg:-left-12 top-0 h-12 w-px bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
    
    <div className="flex flex-col gap-8">
        <div className="flex items-baseline gap-4 border-b border-border pb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">{number}</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight leading-none">{title}</h3>
        </div>
        <div className="prose dark:prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
            {children}
        </div>
    </div>
  </div>
));

PrivacySection.displayName = 'PrivacySection';

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    TOC_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col space-y-px">
      {TOC_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleClick(e, item.id)}
          className={cn(
            "flex items-center justify-between group py-3 pr-4 border-l-2 transition-all duration-300",
            activeId === item.id 
              ? "border-primary pl-5 bg-secondary/50" 
              : "border-transparent pl-4 hover:pl-5 hover:border-border hover:bg-secondary/30"
          )}
        >
          <span className={cn(
              "font-mono text-[10px] uppercase tracking-widest truncate transition-colors duration-300",
              activeId === item.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
          )}>
              {item.label}
          </span>
          {activeId === item.id && (
            <ChevronRight size={12} className="text-primary animate-in fade-in slide-in-from-left-2 duration-300" />
          )}
        </a>
      ))}
    </nav>
  );
};

// --- Main Component ---

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      <DitherGrid className="opacity-10 fixed inset-0 z-0" aria-hidden="true" />
      
      <Section className="relative z-10 !pb-24">
        <Container>
            
            {/* Header Block */}
            <div className="mb-24 pb-12 border-b border-border">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                        <Lock size={12} className="text-primary" />
                        <ScrambleText text="DATA PROTECTION PROTOCOL" delay={200} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                        Privacy Policy
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                        <div className="md:col-span-8">
                            <p className="text-xl text-muted-foreground font-light leading-relaxed text-balance border-l-2 border-border pl-6">
                                At Asymmetric.al, operating under Global Fellowship Inc., we view data stewardship as a sacred trust. This Privacy Policy details how we collect, use, and protect your information.
                            </p>
                        </div>
                        <div className="md:col-span-4 flex md:justify-end">
                            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest bg-secondary/30 border border-border px-4 py-2 rounded-sm">
                                <FileText size={14} />
                                <span>Effective: Nov 14, 2025</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
                
                {/* Sidebar Navigation */}
                <div className="hidden lg:block lg:col-span-3 relative">
                    <div className="sticky top-32">
                        <div className="mb-6 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pl-4">Contents</div>
                        <TableOfContents />
                        
                        <div className="mt-12 mx-4 pt-8 border-t border-border">
                             <div className="flex items-center gap-2 text-muted-foreground/60 mb-4">
                                <ShieldCheck size={16} />
                                <span className="font-mono text-[10px] uppercase tracking-widest">GDPR / CCPA Ready</span>
                             </div>
                             <p className="text-[11px] text-muted-foreground leading-relaxed font-light font-mono">
                                Your data sovereignty is paramount. We do not sell user data.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Offset by 1 col for reading comfort */}
                <div className="lg:col-span-8 lg:col-start-5">
                    <Reveal delay={200}>
                        <div className="space-y-4">
                            
                            <PrivacySection id="collection" number="01" title="Information We Collect">
                                <p className="mb-8">
                                    We collect different types of information for various purposes to provide and improve our Service to you.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    <DataCategoryCard title="Personal Data" icon={ShieldCheck}>
                                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.
                                    </DataCategoryCard>
                                    
                                    <DataCategoryCard title="Usage Data" icon={Database}>
                                        We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                                    </DataCategoryCard>

                                    <DataCategoryCard title="Transaction Data" icon={CreditCard}>
                                        For donors and organizations, we process transaction details necessary to complete donations. Note that full credit card numbers are never stored on our servers; they are processed directly by our payment provider, Stripe.
                                    </DataCategoryCard>
                                </div>
                            </PrivacySection>

                            <PrivacySection id="use" number="02" title="Use of Data">
                                <p className="mb-8">Asymmetric.al uses the collected data for various purposes:</p>
                                <div className="bg-card border border-border rounded-sm p-8">
                                    <ul className="space-y-4">
                                        {[
                                            "To provide and maintain the Service.",
                                            "To notify you about changes to our Service.",
                                            "To allow you to participate in interactive features of our Service when you choose to do so.",
                                            "To provide customer care and support.",
                                            "To provide analysis or valuable information so that we can improve the Service.",
                                            "To monitor the usage of the Service.",
                                            "To detect, prevent and address technical issues."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start group/item">
                                                <CheckCircle2 size={16} className="text-muted-foreground/40 mt-1 shrink-0 group-hover/item:text-primary transition-colors" />
                                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </PrivacySection>

                            <PrivacySection id="sovereignty" number="03" title="Data Sovereignty">
                                <TechPanel title="PHILOSOPHY" className="bg-card border border-border">
                                    <p className="text-muted-foreground leading-relaxed text-balance">
                                        We operate under a philosophy of tenant sovereignty. Data generated by a ministry organization (Tenants) on our platform belongs to that organization. We act as data processors, not owners. <strong className="text-foreground font-normal">We do not sell, rent, or trade your data to third parties for marketing purposes.</strong>
                                    </p>
                                </TechPanel>
                            </PrivacySection>

                            <PrivacySection id="providers" number="04" title="Service Providers">
                                <p className="mb-8">
                                    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ProviderCard 
                                        name="Stripe" 
                                        role="Payment Processing" 
                                        icon={CreditCard} 
                                        link="https://stripe.com/us/privacy" 
                                    />
                                    <ProviderCard 
                                        name="SendGrid" 
                                        role="Email Infrastructure" 
                                        icon={Server} 
                                        link={null} 
                                    />
                                    <ProviderCard 
                                        name="Vercel" 
                                        role="Edge Network" 
                                        icon={Globe} 
                                        link={null} 
                                    />
                                    <ProviderCard 
                                        name="AWS" 
                                        role="Cloud Infrastructure" 
                                        icon={Database} 
                                        link={null} 
                                    />
                                </div>
                            </PrivacySection>

                            <PrivacySection id="security" number="05" title="Security of Data">
                                <p>
                                    The security of your data is important to us. We utilize AES-256 encryption at rest and TLS 1.3 encryption in transit. However, remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                                </p>
                            </PrivacySection>

                            <PrivacySection id="retention" number="06" title="Data Retention">
                                <p>
                                    We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                                </p>
                            </PrivacySection>

                            <PrivacySection id="rights" number="07" title="Your Data Rights">
                                <p>
                                    Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your data. To exercise these rights, please contact us at <a href="mailto:info@asymmetric.al" className="text-foreground hover:text-primary transition-colors underline decoration-border hover:decoration-primary/50 underline-offset-4">info@asymmetric.al</a>.
                                </p>
                            </PrivacySection>

                            <PrivacySection id="changes" number="08" title="Changes to Policy">
                                <p>
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </PrivacySection>

                        </div>

                        {/* Footer Contact */}
                        <div className="mt-24 pt-12 border-t border-border">
                            <h4 className="text-2xl font-display font-bold text-foreground mb-6 tracking-tight">Questions?</h4>
                            <p className="text-muted-foreground mb-8 font-light text-sm max-w-lg leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact our compliance officer directly.
                            </p>
                            <a href="mailto:info@asymmetric.al" className="inline-flex items-center gap-3 text-foreground bg-secondary/30 border border-border px-6 py-4 rounded-sm hover:bg-secondary hover:border-foreground/20 transition-all font-mono text-sm uppercase tracking-wider group">
                                info@asymmetric.al <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Container>
      </Section>
    </div>
  );
};

export default Privacy;