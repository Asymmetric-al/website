import React, { ReactNode } from 'react';
import { 
  Zap, 
  Globe, 
  Mail, 
  Database, 
  ShieldCheck, 
  Scale, 
  Activity, 
  FileCheck,
  LucideIcon
} from 'lucide-react';

import { Card, CardContent } from './Shadcn';
import { MotionPreset } from './MotionPreset';
import { RippleBg } from './BentoAssets';
import { DitherGrid, Logo } from './UI';

// --- Types ---

interface StandardCardProps {
  readonly title: string;
  readonly subtitle: ReactNode;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly delay: number;
  readonly className?: string;
}

interface FeatureCardProps {
  readonly title: string;
  readonly pillText: string;
  readonly icon: LucideIcon;
  readonly description: string;
  readonly delay: number;
  readonly backgroundElement?: ReactNode;
  readonly className?: string;
}

// --- Sub-Components ---

const SystemHeaderCard: React.FC = () => (
  <MotionPreset
    fade
    blur
    slide={{ direction: 'down', offset: 15 }}
    delay={0.1}
    transition={{ duration: 0.5 }}
    className='z-1 md:col-span-2 lg:col-span-2 h-full'
  >
    <Card className='relative h-full border border-border bg-card overflow-hidden group shadow-2xl rounded-sm hover:border-foreground/20 transition-all duration-500'>
      {/* Texture & Watermark */}
      <DitherGrid className="opacity-30" />
      <div className="absolute -right-12 -top-12 opacity-[0.03] transform pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
         <Logo className="size-96 text-foreground" />
      </div>
      
      <div className='pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-card/50 to-transparent' aria-hidden="true" />

      <CardContent className='relative z-10 flex flex-col h-full p-8 md:p-10 gap-8 justify-between'>
        <div className="flex justify-between items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-background/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-foreground backdrop-blur-xl shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  <span className="font-bold">System Capabilities</span>
            </div>
        </div>
        
        <div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-display font-bold text-foreground mb-6 tracking-tighter drop-shadow-xl'>
              Infrastructure<br/>
              <span className="text-muted-foreground/40">as Stewardship.</span>
          </h2>
          <div className="pl-6 border-l-2 border-primary/50">
              <p className="text-muted-foreground text-lg font-light leading-relaxed text-balance max-w-lg">
                  We don't look for ways to extract rent from your basic needs. We build the digital rails for high-trust organizations to operate with sovereignty and speed.
              </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  pillText, 
  icon: Icon, 
  description, 
  delay, 
  backgroundElement, 
  className = "" 
}) => (
  <MotionPreset 
      fade 
      blur 
      slide={{ direction: 'down', offset: 15 }} 
      delay={delay} 
      transition={{ duration: 0.5 }} 
      className={`h-full ${className}`}
  >
    <Card className='h-full overflow-hidden border border-border bg-background hover:border-foreground/20 transition-all duration-500 group relative rounded-sm shadow-sm'>
      {backgroundElement}
      
      <CardContent className='flex h-full flex-col p-8 relative z-10 gap-6 justify-between'>
           <div className="flex items-center justify-between">
              <div className="p-3 bg-secondary rounded-sm border border-border group-hover:border-foreground/30 group-hover:text-foreground text-muted-foreground transition-all">
                  <Icon className='size-5' />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1.5 rounded-sm border border-border group-hover:border-foreground/20 transition-colors">
                  {pillText}
              </span>
           </div>
           
           <div>
              <h3 className='text-2xl font-display font-bold text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors'>{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-balance font-light text-sm">
                  {description}
              </p>
           </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

const StandardCard: React.FC<StandardCardProps> = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  description, 
  delay,
  className = ""
}) => (
  <MotionPreset 
    fade 
    blur 
    slide={{ direction: 'down', offset: 15 }} 
    delay={delay} 
    transition={{ duration: 0.5 }}
    className={`h-full ${className}`}
  >
    <Card className='h-full border border-border bg-background hover:border-foreground/30 transition-all duration-500 group rounded-sm shadow-sm'>
      <CardContent className='flex h-full flex-col gap-6 p-8 justify-between'>
        <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary w-fit rounded-sm border border-border text-muted-foreground group-hover:text-success group-hover:border-success/30 transition-all">
                <Icon className='size-5' />
            </div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors bg-secondary px-2 py-1 rounded-sm">
               {subtitle}
            </div>
        </div>
        
        <div>
            <h3 className='text-lg font-display font-bold text-foreground tracking-tight leading-tight mb-3 group-hover:text-foreground/90 transition-colors'>{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed text-balance font-light group-hover:text-muted-foreground/80 transition-colors border-t border-border pt-3">
              {description}
            </p>
        </div>
      </CardContent>
    </Card>
  </MotionPreset>
);

// --- Main Component ---

const InfrastructureBento: React.FC = () => {
  return (
    <section className='bg-background py-24 md:py-32 text-foreground relative overflow-hidden'>
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.01] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      {/* Strict Grid Layout: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className='mx-auto grid max-w-7xl gap-4 md:gap-6 px-6 md:px-8 lg:px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 auto-rows-[minmax(300px,auto)]'>
        
        {/* --- ROW 1 --- */}
        <SystemHeaderCard />

        <FeatureCard 
          title="Sovereign Web Architecture"
          pillText="Next.js / Headless WP"
          icon={Globe}
          description="Break free from the 'Vendor Trap.' Proprietary site builders lure you in with templates but hold you hostage with expensive change orders. We deploy Headless WordPress coupled with Next.js—industry-standard, portable, and owned entirely by you."
          delay={0.2}
          className="md:col-span-2 lg:col-span-2"
          backgroundElement={
            <RippleBg className='pointer-events-none absolute right-0 top-0 size-[300px] md:size-[400px] text-foreground/5 select-none opacity-10' />
          }
        />

        {/* --- ROW 2 --- */}
        <StandardCard 
          title="Native Missionary Dashboards"
          subtitle="Real-time / Unified"
          icon={Database}
          description="Eliminate the 'Fragmentation Tax.' Asymmetric.al provides a unified Mission Control where finance and fundraising live in the same database."
          delay={0.3}
        />

        <StandardCard 
          title="Enterprise Orchestration"
          subtitle="Event-Driven / Zapier"
          icon={Zap}
          description="Our backend emits high-fidelity events directly to Zapier. Build complex workflows in minutes without writing code."
          delay={0.4}
        />

        <StandardCard 
          title="Fortress Identity"
          subtitle="Keycloak SSO"
          icon={ShieldCheck}
          description="Security isn't an add-on. We deploy Keycloak—the gold standard in identity management—to protect your people."
          delay={0.5}
        />

        <StandardCard 
          title="Zero-Touch Balance"
          subtitle="Auto-Reconciliation"
          icon={Scale}
          description="Stop wrestling with spreadsheets. Our engine automatically matches Stripe payouts to individual ledger entries."
          delay={0.6}
        />

        {/* --- ROW 3 --- */}
         <StandardCard 
          title="Radical Transparency"
          subtitle="OpenTelemetry"
          icon={Activity}
          description="We instrument the stack with OpenTelemetry for operational visibility. Anyone can audit our code."
          delay={0.7}
        />

        <FeatureCard 
          title="High-Fidelity Communications"
          pillText="Unlayer / PDF Generation"
          icon={Mail}
          description="From password resets to tax statements, we utilize Unlayer to ensure pixel-perfect branding. Deliver modern, responsive emails and beautiful PDF documents that build trust."
          delay={0.8}
          className="md:col-span-2 lg:col-span-2 md:order-last lg:order-none"
          backgroundElement={<DitherGrid className="opacity-10" />}
        />

        <StandardCard 
          title="Audit-Grade Trust"
          subtitle="Immutable Logs"
          icon={FileCheck}
          description="Integrity is non-negotiable. We maintain a tamper-evident audit log of every critical system action."
          delay={0.9}
        />

      </div>
    </section>
  )
}

export default InfrastructureBento;
