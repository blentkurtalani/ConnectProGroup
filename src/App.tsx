import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Partners = lazy(() => import('./components/Partners').then(m => ({ default: m.Partners })));
const Careers = lazy(() => import('./components/Careers').then(m => ({ default: m.Careers })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
import { LanguageProvider } from './context/LanguageContext';
import { FadeIn } from './components/FadeIn';
import { AdBanner } from './components/AdBanner';

function App() {
  const handleLanguageChange = (_lang: string) => {
    // Handle language change if needed
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar onLanguageChange={handleLanguageChange} />
        <AdBanner />
        <main className="pt-20">
          <FadeIn>
            <Hero />
          </FadeIn>
          <Suspense fallback={null}>
            <FadeIn delay={0.2}>
              <About />
            </FadeIn>
            <FadeIn delay={0.3}>
              <Services />
            </FadeIn>
            <FadeIn delay={0.4}>
              <Partners />
            </FadeIn>
            <FadeIn delay={0.5}>
              <Careers />
            </FadeIn>
            <FadeIn delay={0.6}>
              <Contact />
            </FadeIn>
          </Suspense>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App