import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';

const languages: Language[] = [
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface NavbarProps {
  onLanguageChange: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLanguageChange }) => {
  const { t, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleTitleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (code: string) => {
    setLanguage(code);
    onLanguageChange(code);
    setShowLanguages(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-gray-900/80'} border-b border-white/10` }>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="#" onClick={handleTitleClick} aria-label="Connect Pro Group" className="flex items-center">
                <img src="/IMG_2715.PNG" alt="Connect Pro Group" className="h-32 md:h-40 lg:h-48 w-auto" loading="eager" decoding="async" />
              </a>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-200 hover:text-green-400 text-sm font-medium transition-colors duration-200 smooth-scroll">
              {t('about')}
            </a>
            <a href="#services" className="text-gray-200 hover:text-green-400 text-sm font-medium transition-colors duration-200 smooth-scroll">
              {t('services')}
            </a>
            <a href="#careers" className="text-gray-200 hover:text-green-400 text-sm font-medium transition-colors duration-200 smooth-scroll">
              {t('careers')}
            </a>
            <a href="#contact" className="text-gray-200 hover:text-green-400 text-sm font-medium transition-colors duration-200 smooth-scroll">
              {t('contact')}
            </a>
            
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center text-gray-200 hover:text-green-400 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <Globe className="w-5 h-5 mr-1" />
                <span>{t('language')}</span>
              </button>
              
              {showLanguages && (
                <div className="absolute right-0 mt-2 py-2 w-52 bg-gray-900/95 backdrop-blur rounded-lg shadow-xl border border-white/10 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/10 w-full text-left"
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-green-400 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors duration-200 smooth-scroll">
              {t('about')}
            </a>
            <a href="#services" className="block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors duration-200 smooth-scroll">
              {t('services')}
            </a>
            <a href="#careers" className="block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors duration-200 smooth-scroll">
              {t('careers')}
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors duration-200 smooth-scroll">
              {t('contact')}
            </a>
            
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className="block w-full text-left px-3 py-2 text-gray-200 hover:text-green-400 transition-colors duration-200"
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;