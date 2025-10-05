import React from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LoadingScreen: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="w-32 h-32 mb-4">
        <Loader2 className="w-full h-full text-blue-600 animate-spin" />
      </div>
      <p className="text-xl text-gray-700">{t('loading')}</p>
    </div>
  );
};