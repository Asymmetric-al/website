import React, { Suspense, lazy, useEffect, type ErrorInfo, type ReactNode } from 'react';
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
 * Supports instant scroll to top on page change, and smooth scroll to hash anchors.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // If no hash, scroll to top instantly to simulate new page load
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      
      // Re-enable smooth scrolling after a small tick
      const timeout = setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // If hash exists, attempt to scroll to element
      // We give a small delay to allow lazy loaded content to potentially render
      const timeout = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timeout);
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
    className="flex items-center justify-center min-h-[60vh] text-white/20 animate-pulse" 
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
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

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
          <div className="p-4 bg-red-500/10 rounded-full mb-6 text-red-500 border border-red-500/20">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">System Anomaly Detected</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-balance">
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
  <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
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