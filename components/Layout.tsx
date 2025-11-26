import React, { useState, useEffect, useMemo, useRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Github, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo, Container } from './UI';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';

// --- Types ---

interface FooterLinkItem {
  readonly label: string;
  readonly to: string;
}

interface FooterSectionData {
  readonly title: string;
  readonly links: readonly FooterLinkItem[];
}

// --- Constants ---

const FOOTER_SECTIONS: readonly FooterSectionData[] = [
  {
    title: "01 // Platform",
    links: [
      { label: "Mission Control", to: "/product" },
      { label: "System Specs", to: "/specs" },
      { label: "Philosophy", to: "/manifesto" },
      { label: "Statement of Faith", to: "/faith" }
    ]
  },
  {
    title: "02 // Involvement",
    links: [
      { label: "For Missions", to: "/missions" },
      { label: "Give to Build", to: "/give" },
      { label: "Join the Team", to: "/join" },
      { label: "Contact Us", to: "/contact" }
    ]
  },
  {
    title: "03 // Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "501(c)(3) Disclosure", to: "/disclosure" }
    ]
  }
];

// --- Navbar Sub-components ---

const MobileNavOverlay: React.FC<{ readonly isOpen: boolean }> = memo(({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 animate-fade-in" 
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <nav className="flex flex-col gap-8 relative z-50">
        <Link to="/" className="text-5xl font-display font-bold text-foreground border-b border-border pb-4 w-fit">Home</Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-5xl font-display font-bold text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20" aria-hidden="true">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
});

MobileNavOverlay.displayName = 'MobileNavOverlay';

const DesktopNavLinks: React.FC<{ readonly currentPath: string }> = memo(({ currentPath }) => {
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = NAV_ITEMS.findIndex(item => item.path === currentPath);
    
    if (activeIndex !== -1) {
        const el = linksRef.current[activeIndex];
        if (el) {
            setPillStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1
            });
        }
    } else {
        setPillStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [currentPath]);

  return (
    <div className="hidden md:flex items-center bg-black border border-white/10 p-1 rounded-full relative shadow-2xl">
       {/* Sliding Pill - Always White */}
       <div 
         className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
         style={{
            left: pillStyle.left,
            width: pillStyle.width,
            opacity: pillStyle.opacity
         }}
         aria-hidden="true"
       />

      {NAV_ITEMS.map((item, index) => {
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            ref={(el) => { linksRef.current[index] = el; }}
            aria-current={isActive ? 'page' : undefined}
            className={`relative z-10 px-6 py-2.5 text-[11px] font-mono uppercase tracking-widest rounded-full transition-colors duration-300 ${
              isActive 
                ? 'text-black font-bold' // Black Text on White Pill
                : 'text-white/60 hover:text-white' // Light Gray Text on Black Background
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
});

DesktopNavLinks.displayName = 'DesktopNavLinks';

// --- Navbar Main Component ---

export const Navbar: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300" aria-label="Main Navigation">
      {/* 
          Gradient Fade Background 
          Fades from opaque at the top to transparent at the bottom.
          Uses a mask to fade both the background color and the blur effect seamlessly.
      */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        aria-hidden="true"
        style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
        }}
      >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 z-50 group relative" aria-label="Asymmetric.al Home">
                <Logo className="text-foreground w-8 h-8 relative z-10" />
                <span className="font-display font-bold tracking-tight text-foreground text-xl hidden md:block relative z-10">
                    Asymmetric.al
                </span>
            </Link>

            <DesktopNavLinks currentPath={location.pathname} />

            {/* Mobile Toggle */}
            <button 
                className="md:hidden text-foreground z-50 p-2 relative"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <span className="relative z-10">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </span>
            </button>
        </div>
      </Container>

      <MobileNavOverlay isOpen={isOpen} />
    </nav>
  );
});

Navbar.displayName = 'Navbar';

// --- Footer Sub-components ---

const FooterHeader: React.FC<{ readonly children: React.ReactNode }> = memo(({ children }) => (
    <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-6 pb-2 inline-block border-b border-border">
        {children}
    </h4>
));

FooterHeader.displayName = 'FooterHeader';

interface FooterLinkProps {
  readonly to?: string;
  readonly children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = memo(({ to, children }) => {
    const content = (
        <>
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0 text-foreground" />
            {children}
        </>
    );

    return (
        <li>
            {to ? (
                <Link to={to} className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group text-sm font-mono text-muted-foreground leading-relaxed">
                    {content}
                </Link>
            ) : (
                <span className="cursor-pointer hover:text-foreground transition-all duration-300 flex items-center gap-2 group text-sm font-mono text-muted-foreground leading-relaxed">
                    {content}
                </span>
            )}
        </li>
    );
});

FooterLink.displayName = 'FooterLink';

const FooterManifesto: React.FC = memo(() => (
    <div className="mb-20">
        <h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            The Manifesto
        </h2>
        
        <div className="border-t border-border py-16">
            <div className="flex flex-col gap-2">
                <span className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-tight">
                    WE BUILD FOR THE <span className="text-muted-foreground">GLOBAL CHURCH.</span>
                </span>
                <span className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] tracking-tight">
                    WE MEASURE SUCCESS IN
                </span>
                <span className="font-display font-bold text-[14vw] leading-[0.8] text-foreground tracking-tighter mt-4 md:mt-8 block select-none">
                    IMPACT,
                </span>
                <span className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-muted-foreground leading-[0.9] tracking-tight md:text-right mt-4">
                    NOT PROFIT.
                </span>
            </div>
        </div>
    </div>
));

FooterManifesto.displayName = 'FooterManifesto';

const FooterCovering: React.FC = memo(() => (
    <div className="col-span-2 md:col-span-1">
         <FooterHeader>04 // Covering</FooterHeader>
         <p className="text-sm text-muted-foreground leading-relaxed font-mono">
            Operating as a project under Global Fellowship Inc.<br/>
            <span className="text-muted-foreground/60 text-xs block mt-4">EIN: 68-0214543</span>
         </p>
         <div className="mt-8 pt-8 border-t border-border">
            <Logo className="w-8 h-8 text-foreground opacity-40" />
         </div>
    </div>
));

FooterCovering.displayName = 'FooterCovering';

const FooterBottomBar: React.FC<{ readonly year: number }> = memo(({ year }) => {
    const { theme, setTheme } = useTheme();

    return (
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-border pt-8">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Asymmetric.al © {year}
          </div>
          
          <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a 
                  href="https://github.com/Asymmetric-al" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  aria-label="Visit our GitHub Organization"
              >
                  <Github size={16} />
              </a>
              <a 
                  href="https://github.com/jadenzaleski/bible-translations"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-mono text-foreground uppercase tracking-widest cursor-default"
              >
                  Soli Deo Gloria
              </a>
          </div>
      </div>
    );
});

FooterBottomBar.displayName = 'FooterBottomBar';

// --- Footer Main Component ---

export const Footer: React.FC = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-background relative overflow-hidden pt-32 pb-12 border-t border-border z-10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
           aria-hidden="true"
      >
      </div>

      <Container className="relative z-10">
        <FooterManifesto />

        {/* Sitemap Grid - Standardized spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 border-t border-border pt-16 mb-24">
            {FOOTER_SECTIONS.map((section, idx) => (
                <div key={idx}>
                    <FooterHeader>{section.title}</FooterHeader>
                    <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                            <FooterLink key={linkIdx} to={link.to}>{link.label}</FooterLink>
                        ))}
                    </ul>
                </div>
            ))}

            <FooterCovering />
        </div>

        <FooterBottomBar year={currentYear} />
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';