
import React, { Suspense, lazy, useLayoutEffect, Component, type ErrorInfo, type ReactNode } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Loader2, AlertTriangle, RefreshCcw } from 'lucide-react';
import { Navbar, Footer } from './components/Layout';
import { Button } from './components/UI';

// --- Lazy Load Pages ---

// 1. Core Platform & Philosophy
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const Specs = lazy(() => import('./pages/Specs'));
const Manifesto = lazy(() => import('./pages/Manifesto'));
const Faith = lazy(() => import('./pages/Faith'));

// 2. Engagement & Involvement
const Missions = lazy(() => import('./pages/Missions'));
const Give = lazy(() => import('./pages/Give'));
const Join = lazy(() => import('./pages/Join'));
const Contact = lazy(() => import('./pages/Contact'));

// 3. Legal & Governance
const Disclosure = lazy(() => import('./pages/Disclosure'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// 4. System Pages
const NotFound = lazy(() => import('./pages/NotFound'));

// --- Utility Components ---

/**
 * ScrollToTop
 * Handles scroll positioning on route transitions.
 * Ensures page resets to top on navigation, but respects hash anchors if present.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable smooth scrolling temporarily to prevent fighting between 
    // the restore logic and the CSS scroll-behavior: smooth
    document.documentElement.style.scrollBehavior = 'auto';

    // Always reset to top first when route changes to avoid being stuck at bottom of new page
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (hash) {
      // If there is a hash, wait a tick for layout (and potentially Suspense) to settle
      const timeout = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // 300ms delay to allow lazy content to hydrate/render
      
      // Re-enable global smooth scroll after animation
      const cleanup = setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
      }, 1000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(cleanup);
        document.documentElement.style.scrollBehavior = '';
      };
    } else {
      // If no hash, just re-enable smooth scroll after a short delay
      const cleanup = setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
      }, 100);
      return () => {
        clearTimeout(cleanup);
        document.documentElement.style.scrollBehavior = '';
      };
    }
  }, [pathname, hash]);

  return null;
};

/**
 * LoadingFallback
 * A centered, minimal spinner displayed within the main content area while 
 * code chunks are loading via Suspense.
 */
const LoadingFallback: React.FC = () => (
  <div 
    className="flex items-center justify-center min-h-[60vh] text-muted-foreground animate-pulse" 
    aria-label="Loading content..."
    role="status"
  >
    <Loader2 className="w-8 h-8 animate-spin" />
  </div>
);

/**
 * ErrorBoundary
 * Catches rendering errors in child components (like lazy load failures).
 */
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <div className="p-4 bg-destructive/10 rounded-full mb-6 text-destructive border border-destructive/20">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">System Anomaly Detected</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-balance">
            The application encountered an unexpected error. This may be due to a network interruption or a stale deployment cache.
          </p>
          <Button onClick={this.handleReload} icon={<RefreshCcw size={16} />}>
            Reload Application
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

// --- Layout Wrapper ---

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background transition-colors duration-300">
    <ScrollToTop />
    <Navbar />
    <main className="flex-grow relative w-full isolate">
      {children}
    </main>
    <Footer />
  </div>
);

// --- Main Application ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout>
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* --- Landing --- */}
              <Route path="/" element={<Home />} />
              
              {/* --- Product & Philosophy --- */}
              <Route path="/product" element={<Platform />} />
              <Route path="/specs" element={<Specs />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/faith" element={<Faith />} />
              
              {/* --- Engagement --- */}
              <Route path="/missions" element={<Missions />} />
              <Route path="/give" element={<Give />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* --- Legal --- */}
              <Route path="/disclosure" element={<Disclosure />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* --- System / 404 --- */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AppLayout>
    </HashRouter>
  );
};

export default App;