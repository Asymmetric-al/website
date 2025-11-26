
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Map, ArrowLeft, Home, Search, LifeBuoy, AlertTriangle, Activity, type LucideIcon } from 'lucide-react';
import { Button, DitherGrid, Reveal, Container, DitherGlobe, SpotlightCard, TechPanel, ScrambleText } from '../components/UI';
import { ButtonVariant } from '../types';
import { cn } from '../lib/utils';

// --- Types ---

interface NavOption {
    to: string;
    icon: LucideIcon;
    title: string;
    description: string;
    code: string;
}

// --- Static Data ---

const NAV_OPTIONS: readonly NavOption[] = [
    { 
        to: "/", 
        icon: Home, 
        title: "Mission Control", 
        description: "Return to the dashboard homepage.",
        code: "CMD_HOME"
    },
    { 
        to: "/product", 
        icon: Search, 
        title: "The Platform", 
        description: "See the tools we are building.",
        code: "CMD_VIEW_SYS"
    },
    { 
        to: "/contact", 
        icon: LifeBuoy, 
        title: "Support", 
        description: "Reach out if you think this is an error.",
        code: "CMD_SIGNAL"
    }
];

// --- Sub-Components ---

const SystemRecoveryOption: React.FC<{ option: NavOption; index: number }> = ({ option, index }) => (
    <Link to={option.to} className="group block h-full">
        <SpotlightCard className="h-full bg-black border-white/10 group-hover:border-white/30 transition-all duration-500 rounded-sm">
            <div className="relative h-full p-8 flex flex-col items-start">
                
                {/* Technical Header */}
                <div className="w-full flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                    <div className="p-2 bg-white/5 rounded-sm border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                        <option.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest group-hover:text-primary transition-colors">
                        {option.code}
                    </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {option.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed text-balance font-light group-hover:text-gray-400 transition-colors">
                    {option.description}
                </p>

                {/* Interaction Indicator */}
                <div className="mt-auto pt-6 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="h-px flex-grow bg-white/10 mr-3"></span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white">Execute</span>
                </div>
            </div>
        </SpotlightCard>
    </Link>
);

const ErrorTerminal: React.FC = () => (
    <div className="font-mono text-[10px] text-red-500/60 uppercase tracking-widest space-y-2 select-none pointer-events-none text-left">
        <div>> SYSTEM_ERR: 404_NOT_FOUND</div>
        <div>> LOCATING_RESOURCE... FAILED</div>
        <div>> INITIATING_RECOVERY_PROTOCOL...</div>
        <div>> WAITING_FOR_USER_INPUT_</div>
    </div>
);

// --- Main Component ---

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden selection:bg-white selection:text-black font-sans">
      
      {/* --- Ambient Background Layer --- */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <DitherGrid className="opacity-10" />
        
        {/* Distant Globe: "Lost in space" metaphor */}
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-20 blur-sm scale-150 mix-blend-screen">
           <DitherGlobe scale={2.5} />
        </div>
        
        {/* Architectural Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-12 flex justify-between items-center opacity-[0.02]">
            <div className="h-[80vh] w-px bg-white"></div>
            <div className="font-display font-bold text-[40vw] leading-none text-white tracking-tighter select-none">
                404
            </div>
            <div className="h-[80vh] w-px bg-white"></div>
        </div>
      </div>
      
      <Container className="relative z-10 w-full max-w-5xl py-24 md:py-32">
        <Reveal>
            {/* Header Block */}
            <div className="flex flex-col items-center text-center mb-20">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-red-500/20 bg-red-500/5 rounded-full mb-10 backdrop-blur-md group hover:bg-red-500/10 transition-colors duration-300">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-400">
                        <ScrambleText text="Coordinates Unknown" delay={200} />
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    Uncharted<br/>
                    <span className="text-white/20">Territory.</span>
                </h1>
                
                {/* Description */}
                <div className="relative max-w-xl mx-auto">
                    <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
                    <p className="text-xl text-gray-400 font-light leading-relaxed text-balance">
                        You've wandered off the map. The page you are looking for has either moved or never existed. Let's get you back to solid ground.
                    </p>
                    <div className="absolute -right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
                </div>
            </div>

            {/* Diagnostic/Recovery Grid */}
            <div className="relative">
                {/* Decorative Terminal Line */}
                <div className="hidden lg:block absolute -top-12 left-0 right-0 border-t border-dashed border-white/10 opacity-50"></div>
                <div className="hidden lg:block absolute -top-16 left-0">
                    <ErrorTerminal />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {NAV_OPTIONS.map((option, index) => (
                        <Reveal key={option.to} delay={200 + (index * 100)} className="h-full">
                            <SystemRecoveryOption option={option} index={index} />
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Back Action */}
            <div className="mt-16 text-center">
                 <Button 
                    variant={ButtonVariant.SECONDARY} 
                    onClick={() => navigate(-1)}
                    icon={<ArrowLeft size={16} />}
                    className="border-white/10 hover:border-white text-gray-400 hover:text-white transition-all px-8 h-14"
                 >
                    Return to Previous Sector
                 </Button>
            </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default NotFound;
