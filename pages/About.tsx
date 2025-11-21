
import React from 'react';
import { Section, Button, GridPattern } from '../components/UI';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero */}
      <div className="relative border-b border-white/5">
          <Section>
            <GridPattern className="opacity-30" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-8 text-white">We build for the global Church.</h1>
                <p className="text-xl text-gray-400 font-light">A product team called to serve missions work with careful, modern tools.</p>
            </div>
          </Section>
      </div>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
                <h2 className="text-xs font-mono text-white uppercase tracking-widest mb-6">Origin</h2>
                <div className="prose prose-invert text-gray-400 leading-relaxed text-lg">
                    <p className="mb-6">
                        We started as missionaries and ministry staff who were tired of clunky, stitched-together tools. The biggest gap was not on the field. It was the admin load behind the scenes.
                    </p>
                    <p>
                        We set out to build a single product for missions operations so teams can focus on people. We pray over this work. We trust God for wisdom, favor, and steady hands.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-xs font-mono text-white uppercase tracking-widest mb-6">Governance</h2>
                 <div className="bg-white/[0.02] border border-white/10 p-8">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Asymmetric.al is a product team operating as a project under a larger nonprofit. Some roles are support-raised, much like missionaries. We welcome applicants from all backgrounds who are comfortable serving Christian ministries.
                    </p>
                    <div className="text-xs font-mono text-gray-500 border-t border-white/10 pt-4 uppercase tracking-wider">
                        Covering nonprofit: Global Fellowship Inc.
                    </div>
                 </div>
            </div>
        </div>
      </Section>

      {/* Stack / Build with us */}
      <Section className="bg-white/[0.02] border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-medium mb-6">Join the build</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
                If you want your craft to serve the Church, reach out. We work with Next.js, TypeScript, TanStack, and Headless WordPress.
            </p>
            <a href="mailto:info@asymmetric.al">
                <Button variant="secondary">Apply to build with us</Button>
            </a>
        </div>
      </Section>

       {/* Contact */}
       <Section className="text-center py-12">
           <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Direct Contact</span>
                <a href="mailto:info@asymmetric.al" className="text-2xl font-display font-bold text-white hover:text-white transition-colors">
                    info@asymmetric.al
                </a>
           </div>
       </Section>
    </div>
  );
};

export default About;
