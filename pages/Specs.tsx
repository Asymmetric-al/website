
import React from 'react';
import { Section, Reveal, TechPanel, Button } from '../components/UI';
import { CheckCircle2 } from 'lucide-react';

const Specs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      
      <Section>
        <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white">System Specifications</h1>
                <span className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Ref: White Paper Oct 2025</span>
            </div>
        </Reveal>
        
        {/* Stack Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <Reveal delay={100}>
                <TechPanel title="Core Architecture" noBorder className="bg-transparent p-0">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            {[
                                ["UI Spine", "Twenty CRM (System of Record)"],
                                ["Sites / Portals", "Headless WordPress (Open Source)"],
                                ["Identity", "Keycloak (Tenant-safe OIDC)"],
                                ["Payments", "Stripe Connect (Card/ACH)"],
                                ["Email Design", "Unlayer (White-labeled)"],
                                ["PDF Engine", "Gotenberg (Server-side Chromium)"],
                                ["E-Signature", "Documenso Community Edition"],
                                ["Charts", "Apache ECharts"],
                                ["Automation", "Zapier (Tenant-owned / Embedded)"],
                            ].map(([key, val], i) => (
                                <tr key={i} className="border-b border-border hover:bg-white/5 transition-colors">
                                    <td className="py-4 font-mono text-xs text-muted uppercase tracking-widest w-1/3">{key}</td>
                                    <td className="py-4 font-mono text-sm text-white">{val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TechPanel>
            </Reveal>

            <Reveal delay={200}>
                <TechPanel title="Security & Compliance" className="bg-offblack/30 h-full">
                    <ul className="space-y-6">
                        {[
                            { t: "Least Privilege", d: "Roles named by action. Scoped machine keys. Short-lived sessions." },
                            { t: "Tenant Isolation", d: "Data partitioned at every layer. No cross-tenant read path." },
                            { t: "Transport Security", d: "HTTP/3 + QUIC at edge. HSTS. Public clients use PKCE." },
                            { t: "Privacy by Design", d: "Assistants opt-out of training. Sensitive fields masked." },
                            { t: "Ownership", d: "Tenant owns Zapier/SendGrid keys. Full data export supported." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <CheckCircle2 size={16} className="text-white mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-white font-mono text-xs uppercase block mb-1">{item.t}</strong>
                                    <span className="text-muted text-sm leading-relaxed">{item.d}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TechPanel>
            </Reveal>
        </div>
      </Section>

      {/* Performance Targets */}
      <Section grid className="border-t border-border bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
            <Reveal>
                <h2 className="text-3xl font-display font-bold text-white mb-8">Performance Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "API Latency (Read)", val: "< 150ms", meta: "p50 within region" },
                        { label: "API Latency (Write)", val: "< 600ms", meta: "p95 common writes" },
                        { label: "Core Web Vitals", val: "75th %", meta: "Pass on LCP/INP/CLS" },
                        { label: "Edge Protocol", val: "HTTP/3", meta: "With QUIC fallback" },
                        { label: "Render Start", val: "~1.0s", meta: "Typical broadband" },
                        { label: "Availability", val: "99.9%", meta: "SLO per module" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-black border border-border p-6">
                            <div className="text-muted font-mono text-xs uppercase tracking-widest mb-2">{stat.label}</div>
                            <div className="text-3xl font-display font-bold text-white mb-1">{stat.val}</div>
                            <div className="text-muted text-xs">{stat.meta}</div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
      </Section>
      
      {/* Acceptance Criteria */}
      <Section>
        <Reveal>
            <div className="bg-offblack border border-border p-8 md:p-12">
                <h3 className="font-display text-2xl text-white mb-6">Release Quality Gates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted leading-relaxed">
                    <div>
                        <strong className="text-white block mb-2 font-mono text-xs uppercase">Financial Accuracy</strong>
                        <p className="mb-4">Statement Studio totals match source gifts in controlled samples. Reconciliation screens tie Stripe payouts to journals with zero variance.</p>
                        
                        <strong className="text-white block mb-2 font-mono text-xs uppercase">Deliverability</strong>
                        <p>SPF, DKIM, DMARC, and link branding validated green. Test sends verified for appearance and headers.</p>
                    </div>
                    <div>
                        <strong className="text-white block mb-2 font-mono text-xs uppercase">Safety</strong>
                        <p className="mb-4">Secrets never in code. PII masking verified in logs. Access checks run for Staff, Missionary, and Donor roles.</p>

                        <strong className="text-white block mb-2 font-mono text-xs uppercase">Recovery</strong>
                        <p>Two-step donor recovery from dunning emails verified. Zapier flows run idempotently.</p>
                    </div>
                </div>
            </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default Specs;
