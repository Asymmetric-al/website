
import React, { FormEvent } from 'react';
import { Reveal, Button, DitherGlobe, GridPattern, SpotlightCard, TechPanel, ScrambleText, Container } from '../components/UI';
import { Mail, MapPin, MessageSquare, ArrowRight, Terminal, LucideIcon } from 'lucide-react';

// --- Types ---
interface ContactChannel {
  id: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
  meta?: string;
  href?: string;
}

// --- Constants ---
const CONTACT_CHANNELS: ContactChannel[] = [
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
];

// --- Sub-Components ---

const ChannelItem: React.FC<{ channel: ContactChannel }> = ({ channel }) => {
  const Wrapper = channel.href ? 'a' : 'div';
  const wrapperProps = channel.href ? { 
    href: channel.href, 
    className: "group block cursor-pointer",
    target: channel.href.startsWith('http') ? "_blank" : undefined,
    rel: channel.href.startsWith('http') ? "noopener noreferrer" : undefined
  } : { 
    className: "group" 
  };

  return (
    // @ts-ignore - Dynamic component typings can be complex with specific HTML attributes, keeping implementation simple
    <Wrapper {...wrapperProps}>
        <div className="flex items-center gap-3 text-white mb-2 group-hover:text-primary transition-colors">
            <channel.icon size={20} />
            <h3 className="font-display font-bold text-lg">{channel.title}</h3>
        </div>
        <div className="text-sm text-gray-500 font-mono pl-8 mb-2 leading-relaxed">
            {channel.content}
        </div>
        {channel.meta && (
            <div className="pl-8 text-[10px] text-success uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {channel.meta}
            </div>
        )}
    </Wrapper>
  );
};

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const FormInput: React.FC<FormFieldProps> = ({ label, className = "", ...props }) => (
    <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{label}</label>
        <input 
            className={`w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-primary focus:bg-white/10 outline-none transition-all placeholder:text-white/20 ${className}`}
            {...props} 
        />
    </div>
);

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ label, className = "", ...props }) => (
    <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{label}</label>
        <textarea 
            className={`w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:border-primary focus:bg-white/10 outline-none transition-all placeholder:text-white/20 resize-none ${className}`}
            {...props} 
        />
    </div>
);

// --- Main Component ---
const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
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
                            {CONTACT_CHANNELS.map((channel, index) => (
                                <React.Fragment key={channel.id}>
                                    <ChannelItem channel={channel} />
                                    {index < CONTACT_CHANNELS.length - 1 && (
                                        <div className="w-full h-px bg-white/10"></div>
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
                    <SpotlightCard className="bg-offblack/50 border-white/10 p-1">
                        <div className="bg-black p-8 md:p-10 relative overflow-hidden">
                            <div className="flex items-center gap-2 text-muted mb-8 pb-4 border-b border-white/10">
                                <Terminal size={16} />
                                <span className="font-mono text-xs uppercase tracking-widest">Transmission Uplink</span>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput 
                                        label="Identity // Name" 
                                        type="text" 
                                        placeholder="H. TAYLOR" 
                                        name="name"
                                        autoComplete="name"
                                    />
                                    <FormInput 
                                        label="Identity // Email" 
                                        type="email" 
                                        placeholder="CONTACT@ORG.COM" 
                                        name="email"
                                        autoComplete="email"
                                    />
                                </div>

                                <FormInput 
                                    label="Context // Organization" 
                                    type="text" 
                                    placeholder="GLOBAL MISSIONS INC." 
                                    name="organization"
                                    autoComplete="organization"
                                />

                                <FormTextArea 
                                    label="Payload // Message" 
                                    className="h-32" 
                                    placeholder="BRIEFING DETAILS..." 
                                    name="message"
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
