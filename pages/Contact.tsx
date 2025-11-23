
import React from 'react';
import { Section, Reveal, Button, DitherGlobe, GridPattern, SpotlightCard, TechPanel, ScrambleText, Container } from '../components/UI';
import { Mail, MapPin, MessageSquare, ArrowRight, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <GridPattern className="opacity-20 fixed inset-0 z-0" />
      
      {/* Background Globe */}
      <div className="fixed right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none z-0">
         <DitherGlobe scale={1.5} />
      </div>

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 mt-12">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse"></span>
                    <ScrambleText text="OPEN CHANNEL" delay={200} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8">
                    Start the<br/>Conversation.
                </h1>
                <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed text-balance border-l border-white/20 pl-6">
                    Whether you are an agency ready to migrate or a builder looking to contribute, we are ready to listen.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
            
            {/* Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
                <Reveal delay={200}>
                    <TechPanel title="CHANNELS" className="bg-black/80 backdrop-blur-md">
                        <div className="space-y-8">
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-3 text-white mb-2 group-hover:text-coral transition-colors">
                                    <Mail size={20} />
                                    <h3 className="font-display font-bold text-lg">General Inquiry</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-mono pl-8 mb-2">info@asymmetric.al</p>
                                <div className="pl-8 text-[10px] text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    RESPONSE TIME: ~24HRS
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10"></div>

                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-3 text-white mb-2 group-hover:text-coral transition-colors">
                                    <MessageSquare size={20} />
                                    <h3 className="font-display font-bold text-lg">Builder Support</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-mono pl-8 mb-2">github.com/asymmetric-al</p>
                            </div>

                            <div className="w-full h-px bg-white/10"></div>

                            <div className="group">
                                <div className="flex items-center gap-3 text-white mb-2">
                                    <MapPin size={20} />
                                    <h3 className="font-display font-bold text-lg">Global HQ</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-mono pl-8 leading-relaxed">
                                    Global Fellowship Inc.<br/>
                                    Attn: Asymmetric.al Project<br/>
                                    [Mailing Address Redacted for Web]<br/>
                                    United States
                                </p>
                            </div>
                        </div>
                    </TechPanel>
                </Reveal>
            </div>

            {/* Interactive Form Terminal */}
            <div className="lg:col-span-7">
                <Reveal delay={400}>
                    <SpotlightCard className="bg-offblack/50 border-white/10 p-1">
                        <div className="bg-black p-8 md:p-10 relative overflow-hidden">
                            <div className="flex items-center gap-2 text-muted mb-8 pb-4 border-b border-white/10">
                                <Terminal size={16} />
                                <span className="font-mono text-xs uppercase tracking-widest">Transmission Uplink</span>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Identity // Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-coral focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="J. DOE" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Identity // Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-coral focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="CONTACT@ORG.COM" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Context // Organization</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-coral focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="GLOBAL MISSIONS INC." />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Payload // Message</label>
                                    <textarea className="w-full h-32 bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-coral focus:bg-white/10 outline-none transition-all placeholder:text-white/20 resize-none" placeholder="BRIEFING DETAILS..."></textarea>
                                </div>

                                <Button className="w-full py-6 mt-4" icon={<ArrowRight size={16} />}>
                                    Transmit Message
                                </Button>
                            </form>
                        </div>
                    </SpotlightCard>
                </Reveal>
            </div>
        </div>

      </Container>
    </div>
  );
};

export default Contact;
