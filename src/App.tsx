import React, { useState, useEffect } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { ForgotPasswordPage } from './components/auth/ForgotPasswordPage';
import { CreateAccountPage } from './components/auth/CreateAccountPage';
import { AiSuggestionPage } from './components/AiSuggestionPage';
import { Header } from './components/Header';
import { AIHealthHero } from './components/AIHealthHero';
import { OverallHealthStatus } from './components/OverallHealthStatus';
import { VitalsGrid } from './components/VitalsGrid';
import { LabResultsDigest } from './components/LabResultsDigest';
import { ImagingSummary } from './components/ImagingSummary';
import { CareRecommendations } from './components/CareRecommendations';
import { AskAvaModal } from './components/AskAvaModal';
import { VitalDetailModal } from './components/VitalDetailModal';
import { vitalsData } from './data/mockHealthData';
import { VitalItem } from './types/health';
import { Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  // Synchronize route with window.location.pathname
  const getInitialRoute = () => {
    const path = window.location.pathname;
    if (path.includes('forgot-password')) return '/forgot-password';
    if (path.includes('create-account')) return '/create-account';
    if (path.includes('dashboard')) return '/dashboard';
    return '/login'; // Default route
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const [activeTab, setActiveTab] = useState<'Dashboard' | 'Appointment' | 'Patient' | 'Reports' | 'Chats' | 'Billing'>('Dashboard');
  const [isAvaOpen, setIsAvaOpen] = useState(false);
  const [avaContext, setAvaContext] = useState<string | undefined>(undefined);
  const [selectedVital, setSelectedVital] = useState<VitalItem | null>(null);

  // Listen to popstate (browser Back / Forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('forgot-password')) setCurrentRoute('/forgot-password');
      else if (path.includes('create-account')) setCurrentRoute('/create-account');
      else if (path.includes('dashboard')) setCurrentRoute('/dashboard');
      else setCurrentRoute('/login');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      // Fallback for sandboxed frames
    }
    window.scrollTo(0, 0);
  };

  const handleOpenAva = (contextPrompt?: string) => {
    setAvaContext(contextPrompt);
    setIsAvaOpen(true);
  };

  // Route 1: Login Screen (/login)
  if (currentRoute === '/login') {
    return <LoginPage onNavigate={navigateTo} />;
  }

  // Route 2: Forgot Password Screen (/forgot-password)
  if (currentRoute === '/forgot-password') {
    return <ForgotPasswordPage onNavigate={navigateTo} />;
  }

  // Route 3: Create Account Screen (/create-account)
  if (currentRoute === '/create-account') {
    return <CreateAccountPage onNavigate={navigateTo} />;
  }

  // Route 4: Dashboard / Existing Application (/dashboard)
  if (activeTab === 'Dashboard') {
    return (
      <div className="relative">
        {/* Floating Quick Auth Switcher Header Bar for Easy Demo Navigation */}
        <div className="bg-[#19182C] text-white px-4 py-2 text-xs flex items-center justify-between z-50">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-purple-300">Mednevo Auth Suite:</span>
            <span>You are currently viewing the Dashboard</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigateTo('/login')}
              className="text-purple-300 hover:text-white underline transition-colors"
            >
              Go to Login
            </button>
            <span>·</span>
            <button
              onClick={() => navigateTo('/forgot-password')}
              className="text-purple-300 hover:text-white underline transition-colors"
            >
              Forgot Password
            </button>
            <span>·</span>
            <button
              onClick={() => navigateTo('/create-account')}
              className="text-purple-300 hover:text-white underline transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>

        <AiSuggestionPage
          onTabChange={(tab) => setActiveTab(tab as any)}
        />
      </div>
    );
  }

  // Clinical Summary View for Reports / Other Tabs
  return (
    <div className="min-h-screen bg-[#F6F5FB] text-slate-800 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900 pb-16">
      
      {/* Top Navbar */}
      <Header onOpenAva={() => handleOpenAva()} />

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        
        {/* HERO / AI SUMMARY SECTION */}
        <section aria-label="AI Health Summary Hero">
          <AIHealthHero onRefresh={() => handleOpenAva("Please re-analyze recent vitals and lab data.")} />
        </section>

        {/* OVERALL HEALTH STATUS CARD */}
        <section aria-label="Overall Health Status">
          <OverallHealthStatus onOpenAva={handleOpenAva} />
        </section>

        {/* KEY VITALS & TRENDS GRID */}
        <section aria-label="Key Vitals and Trends">
          <VitalsGrid
            vitals={vitalsData}
            onSelectVital={(vital) => setSelectedVital(vital)}
          />
        </section>

        {/* COLLAPSIBLE HEALTH SECTIONS */}
        <section aria-label="Detailed Clinical Reports" className="space-y-4">
          <LabResultsDigest onOpenAva={handleOpenAva} />
          <ImagingSummary onOpenAva={handleOpenAva} />
          <CareRecommendations onOpenAva={handleOpenAva} />
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200/80 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-slate-700">Ava Clinical Intelligence Platform</span>
            <span>· Encrypted HIPAA Compliant Telemetry</span>
          </div>
          <div>
            <span>Primary Care Physician: Dr. David Brock</span>
          </div>
        </div>
      </footer>

      {/* Interactive Ask Ava AI Slide-over Modal */}
      <AskAvaModal
        isOpen={isAvaOpen}
        onClose={() => setIsAvaOpen(false)}
        initialPrompt={avaContext}
      />

      {/* Vital Detail Popover Modal */}
      <VitalDetailModal
        vital={selectedVital}
        onClose={() => setSelectedVital(null)}
        onAskAva={handleOpenAva}
      />

    </div>
  );
};

export default App;
