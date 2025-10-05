import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('de');

  // Memoize the translation function to prevent unnecessary re-renders
  const t = useCallback((key: string): string => {
    return translations[language]?.[key] || translations['de'][key] || key;
  }, [language]);

  // Memoize the context value
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};