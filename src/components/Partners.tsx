import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Shield, Briefcase, Globe } from 'lucide-react';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: t('vodafoneTitle'),
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: t('vodafoneDesc'),
      icon: Globe
    },
    {
      name: t('sigalTitle'),
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: t('sigalDesc'),
      icon: Shield
    },
    {
      name: t('credinsTitle'),
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: t('credinsDesc'),
      icon: Building2
    },
    {
      name: t('balfinTitle'),
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: t('balfinDesc'),
      icon: Briefcase
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('partnersDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 group-hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <partner.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{partner.name}</h3>
                <p className="text-gray-400 text-center">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-semibold text-green-400 mb-2">{t('wideExperience')}</h4>
            <p className="text-gray-300">{t('wideExperienceText')}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-semibold text-green-400 mb-2">{t('manyPartners')}</h4>
            <p className="text-gray-300">{t('manyPartnersText')}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-semibold text-green-400 mb-2">{t('support24_7')}</h4>
            <p className="text-gray-300">{t('support24_7Text')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};