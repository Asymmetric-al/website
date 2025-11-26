import React, { FormEvent, memo, useCallback } from 'react';
import { Reveal, Button, DitherGlobe, GridPattern, SpotlightCard, TechPanel, ScrambleText, Container, Input, TextArea } from '../components/UI';
import { Mail, MapPin, MessageSquare, ArrowRight, Terminal, type LucideIcon } from 'lucide-react';

// --- Types ---

interface ContactChannel {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly content: React.ReactNode;
  readonly meta?: string;
  readonly href?: string;
}

// --- Constants ---

const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: 'general',
    icon: Mail,
    title: 'General Inquiry',
    content: 'info@asymmetric.al',
    meta: 'RESPONSE TIME: ~24HRS',
    href: 'mailto:info@asymmetric.al'
  },
  {
    id: 'builder',
    icon: MessageSquare,
    title: 'Builder Support',
    content: 'github.com/asymmetric-al',
    href: 'https://github.com/Asymmetric-al'
  },
  {
    id: 'hq',
    icon: MapPin,
    title: 'Global HQ',
    content: (
      <>
        Global Fellowship Inc.<br/>
        Attn: Asymmetric.al Project<br/>
        PO Box 1<br/>
        Meadow Vista, CA 95722
      </>
    )
  }
] as const;

// --- Sub-Components ---

const ChannelItem = memo(({ channel }: { readonly channel: ContactChannel }) => {
  const InnerContent = (
    <>
        <div className="flex items-center gap-3 text-foreground mb-2 group-hover:text-primary transition-colors">
            <channel.icon size={20} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-lg tracking-tight">{channel.title}</h3>
        </div>
        <div className="text-sm text-muted-foreground font-mono pl-8 mb-2 leading-relaxed group-hover:text-foreground transition-colors">
            {channel.content}
        </div>
        {channel.meta && (
            <div className="pl-8 text-[10px] text-success uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {channel.meta}
            </div>
        )}
    </>
  );

  if (channel.href) {
    return (
      <a 
        href={channel.href}
        className="group block cursor-pointer"
        target={channel.href.startsWith('http') ? "_blank" : undefined}
        rel={channel.href.startsWith('http') ? "noopener noreferrer" : undefined}
        aria-label={`Contact via ${channel.title}`}
      >
        {InnerContent}
      </a>
    );
  }

  return (
    <div className="group">
      {InnerContent}
    </div>
  );
});

ChannelItem.displayName = 'ChannelItem';

// --- Main Component ---

const Contact: React.FC = () => {
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans overflow-x-hidden">
      <GridPattern className="opacity-20 fixed inset-0 z-0" />
      
      {/* Background Globe */}
      <div className="fixed right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none z-0 mix-blend-screen">
         <DitherGlobe scale={1.5} />
      </div>

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 mt-12">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-secondary/50 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                    <ScrambleText text="OPEN CHANNEL" delay={200} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter leading-[0.9] mb-8">
                    Start the<br/>Conversation.
                </h1>
                <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed text-balance border-l border-border pl-6">
                    Whether you are an agency ready to migrate or a builder looking to contribute, we are ready to listen.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
            
            {/* Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
                <Reveal delay={200}>
                    <TechPanel title="CHANNELS" className="bg-card/80 backdrop-blur-md">
                        <div className="space-y-8">
                            {CONTACT_CHANNELS.map((channel, index) => (
                                <React.Fragment key={channel.id}>
                                    <ChannelItem channel={channel} />
                                    {index < CONTACT_CHANNELS.length - 1 && (
                                        <div className="w-full h-px bg-border"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </TechPanel>
                </Reveal>
            </div>

            {/* Interactive Form Terminal */}
            <div className="lg:col-span-7">
                <Reveal delay={400}>
                    <SpotlightCard className="bg-card border-border p-1">
                        <div className="bg-background p-8 md:p-10 relative overflow-hidden">
                            <div className="flex items-center gap-2 text-muted-foreground mb-8 pb-4 border-b border-border">
                                <Terminal size={16} />
                                <span className="font-mono text-xs uppercase tracking-widest">Transmission Uplink</span>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input 
                                        label="Identity // Name" 
                                        type="text" 
                                        placeholder="H. TAYLOR" 
                                        name="name"
                                        autoComplete="name"
                                        required
                                    />
                                    <Input 
                                        label="Identity // Email" 
                                        type="email" 
                                        placeholder="CONTACT@ORG.COM" 
                                        name="email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <Input 
                                    label="Context // Organization" 
                                    type="text" 
                                    placeholder="GLOBAL MISSIONS INC." 
                                    name="organization"
                                    autoComplete="organization"
                                />

                                <TextArea 
                                    label="Payload // Message" 
                                    className="h-32" 
                                    placeholder="BRIEFING DETAILS..." 
                                    name="message"
                                    required
                                />

                                <Button className="w-full py-6 mt-4" icon={<ArrowRight size={16} />} type="submit">
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