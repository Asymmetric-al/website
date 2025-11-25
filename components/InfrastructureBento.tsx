
import React from 'react'
import { 
  Zap, 
  Globe, 
  Mail, 
  Database, 
  ShieldCheck, 
  Scale, 
  Activity, 
  FileCheck 
} from 'lucide-react'

import { Card, CardContent } from './Shadcn'
import { MotionPreset } from './MotionPreset'
import { RippleBg } from './BentoAssets'
import { DitherGrid, Logo } from './UI'

const InfrastructureBento = () => {
  return (
    <section className='bg-black py-12 md:py-20 text-white relative overflow-hidden'>
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className='mx-auto grid max-w-7xl gap-3 md:gap-4 px-4 sm:px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-8 relative z-10 auto-rows-fr'>
        
        {/* --- ROW 1 (Header & Sovereign Web) --- */}

        {/* Card 1: Main Header (Span 2) */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.1}
          transition={{ duration: 0.5 }}
          className='z-1 md:col-span-2 lg:col-span-2'
        >
          <Card className='relative h-full border border-white/20 bg-white/[0.02] overflow-hidden group shadow-2xl'>
            {/* Texture & Watermark */}
            <DitherGrid className="opacity-30" />
            <div className="absolute -right-12 -top-12 opacity-[0.03] transform pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
               <Logo className="size-96 text-white" />
            </div>
            
            <div className='pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-white/[0.02] to-transparent' aria-hidden="true" />

            <CardContent className='relative z-10 flex flex-col h-full p-6 md:p-8 gap-8'>
              <div className="flex justify-between items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-black/50 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest text-white backdrop-blur-xl shadow-lg">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                        <span className="font-bold">System Capabilities</span>
                  </div>
              </div>
              
              <div>
                <h2 className='text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-display font-bold text-white mb-6 tracking-tighter drop-shadow-xl'>
                    Infrastructure<br/>
                    <span className="text-white/60">as Stewardship.</span>
                </h2>
                <div className="pl-4 md:pl-6 border-l-2 border-primary/50">
                    <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed text-balance max-w-lg">
                        We don't look for ways to extract rent from your basic needs. We build the digital rails for high-trust organizations to operate with sovereignty and speed.
                    </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 2: Sovereign Web Architecture (Span 2) */}
        <MotionPreset 
            fade 
            blur 
            slide={{ direction: 'down', offset: 15 }} 
            delay={0.2} 
            transition={{ duration: 0.5 }} 
            className="md:col-span-2 lg:col-span-2"
        >
          <Card className='h-full overflow-hidden border border-white/10 bg-black hover:border-white/20 transition-all duration-500 group relative'>
            <RippleBg className='pointer-events-none absolute right-0 top-0 size-[300px] md:size-[400px] text-white/5 select-none opacity-10' />
            
            <CardContent className='flex h-full flex-col p-6 md:p-8 relative z-10 gap-6'>
                 <div className="flex items-center justify-between">
                    <div className="p-2 md:p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-white/30 group-hover:text-white text-gray-400 transition-all">
                        <Globe className='size-5 md:size-6' />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted bg-white/5 px-3 py-1.5 rounded-sm border border-white/5 group-hover:border-white/20 transition-colors">
                        Next.js / Headless WP
                    </span>
                 </div>
                 
                 <div>
                    <h3 className='text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-4'>Sovereign Web Architecture</h3>
                    <p className="text-gray-400 leading-relaxed text-balance font-light text-sm md:text-base">
                        Break free from the 'Vendor Trap.' Proprietary site builders lure you in with templates but hold you hostage with expensive change orders. We deploy Headless WordPress coupled with Next.js—industry-standard, portable, and owned entirely by you. Stop paying thousands for simple site updates or feeling stuck with a mediocre template. Own your code, own your content, and escape the cycle of rent-seeking dependencies.
                    </p>
                 </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* --- ROW 2 (Functional Pillars - 4 Columns on LG, 2x2 on MD) --- */}

        {/* Card 3: Native Missionary Dashboards */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.3} transition={{ duration: 0.5 }}>
          <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
            <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
              <div className="flex justify-between items-start">
                  <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                      <Database className='size-5' />
                  </div>
              </div>
              
              <div className="space-y-2">
                  <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Native Missionary Dashboards</h3>
                  <div className="mb-2">
                     <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">Real-time / Unified</span>
                  </div>
              </div>
              
              <div className="border-t border-white/5 pt-4">
                 <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                    Eliminate the 'Fragmentation Tax.' Third-party fundraising overlays add unnecessary cost, sync errors, and administrative burden. Asymmetric.al provides a unified Mission Control where finance and fundraising live in the same database. Give your workers real-time clarity without the extra fees or complexity.
                 </p>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 4: Enterprise Orchestration */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.4} transition={{ duration: 0.5 }}>
            <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
            <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
              <div className="flex justify-between items-start">
                <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                    <Zap className='size-5' />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Enterprise Orchestration</h3>
                <div className="mb-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">Event-Driven / Zapier</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                 <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                    We don't rely on fragile, hacked-together scripts. Our backend emits high-fidelity events directly to Zapier, the industry leader in automation. Whether it's triggering a welcome sequence or alerting a director, you can build complex workflows in minutes without writing code.
                 </p>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card 5: Fortress Identity */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.5} transition={{ duration: 0.5 }}>
            <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
                <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
                     <div className="flex justify-between items-start">
                        <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                            <ShieldCheck className='size-5' />
                        </div>
                     </div>

                    <div className="space-y-2">
                        <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Fortress Identity</h3>
                        <div className="mb-2">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">Keycloak SSO</span>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                            Security isn't an add-on; it's the foundation. We deploy Keycloak—the gold standard in identity management—to protect your people. Enforce Multi-Factor Authentication (MFA) globally and revoke access instantly across all apps.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionPreset>

        {/* Card 6: Zero-Touch Balance */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.6} transition={{ duration: 0.5 }}>
            <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
                <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                            <Scale className='size-5' />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Zero-Touch Balance</h3>
                        <div className="mb-2">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">Auto-Reconciliation</span>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                            Stop wrestling with spreadsheets at month-end. Our engine listens to webhooks from the banking layer, automatically matching Stripe payouts to individual ledger entries. Real-time solvency without the manual toil.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionPreset>

        {/* --- ROW 3 (Comms, Transp, Trust) --- */}

         {/* Card 7: Radical Transparency (Pos 1 on LG, Pos 1 on MD) */}
         <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.7} transition={{ duration: 0.5 }}>
            <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
                <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                            <Activity className='size-5' />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Radical Transparency</h3>
                        <div className="mb-2">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">OpenTelemetry / Open Source</span>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                            You can't steward what you can't see. We instrument the stack with OpenTelemetry for operational visibility. Beyond that, we are Open Source. Anyone can audit our code, and we encourage skilled developers to contribute to this open project for Christian missions.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionPreset>

        {/* Card 8: High-Fidelity Communications (SPAN 2 on LG. SPAN 2 on MD but ordered last) */}
        <MotionPreset 
            fade 
            blur 
            slide={{ direction: 'down', offset: 15 }} 
            delay={0.8} 
            transition={{ duration: 0.5 }} 
            className="md:col-span-2 lg:col-span-2 md:order-last lg:order-none"
        >
             <Card className='h-full border border-white/10 bg-black hover:border-white/20 transition-all duration-500 group overflow-hidden relative'>
                <DitherGrid className="opacity-10" />
                <CardContent className='flex h-full flex-col gap-6 relative z-10 p-6 md:p-8'>
                    <div className='flex items-start justify-between'>
                        <div className="p-2 md:p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-white/30 group-hover:text-white text-gray-400 transition-all w-fit">
                            <Mail className='size-5 md:size-6' />
                        </div>
                         <span className="text-[10px] font-mono uppercase tracking-widest text-muted bg-white/5 px-3 py-1.5 rounded-sm border border-white/5 group-hover:border-white/20 transition-colors">
                            Unlayer / PDF Generation
                        </span>
                    </div>
                    
                    <div>
                        <h3 className='text-2xl font-display font-bold text-white tracking-tight mb-4'>High-Fidelity Communications</h3>
                        <p className="text-sm text-gray-400 leading-relaxed text-balance font-light max-w-lg">
                            Every touchpoint is a reflection of your stewardship. From a simple password reset to a complex End-of-Year Tax Statement, we utilize best-in-class tooling (Unlayer) to ensure pixel-perfect branding. No more ugly, generated receipts. Deliver modern, responsive, and beautiful documents that build trust with your partners.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionPreset>

        {/* Card 9: Audit-Grade Trust (Pos 3 on LG, Pos 2 on MD) */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.9} transition={{ duration: 0.5 }}>
            <Card className='h-full border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group'>
                <CardContent className='flex h-full flex-col gap-4 p-5 md:p-6'>
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-white/5 w-fit rounded-sm border border-white/10 text-gray-400 group-hover:text-success group-hover:border-success/30 transition-all">
                            <FileCheck className='size-5' />
                        </div>
                    </div>

                    <div className="space-y-2">
                         <h3 className='text-lg font-display font-bold text-white tracking-tight leading-tight'>Audit-Grade Trust</h3>
                         <div className="flex items-center gap-2 mb-2">
                             <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                             <span className="text-[9px] font-mono uppercase tracking-widest text-muted/60">Immutable Logs</span>
                         </div>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                         <p className="text-[11px] text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                            Integrity is non-negotiable. We maintain a tamper-evident audit log of every critical system action. Who changed that designation? When was that content published? The answer is always one click away.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </MotionPreset>

      </div>
    </section>
  )
}

export default InfrastructureBento
