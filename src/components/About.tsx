import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '10+', label: t('yearsExperience') },
    { icon: Target, value: '98%', label: t('clientSatisfaction') },
    { icon: Award, value: '24/7', label: t('support247') },
    { icon: TrendingUp, value: '50+', label: t('activeClients') },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-green-400">{t('aboutTitle')}</h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('aboutDescription')}
            </p>

            {/* Mission Box */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl backdrop-blur-sm border border-green-500/20 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">{t('mission')}</h3>
              <p className="text-gray-300">
                {t('missionText')}
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">{t('vision')}</h3>
              <p className="text-gray-300">
                {t('visionText')}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Images and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                alt="Our Team"
                className="rounded-2xl w-full h-[300px] object-cover shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-green-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-green-400">{t('values')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Values Cards */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-xl backdrop-blur-sm border border-green-500/20">
              <h4 className="text-xl font-semibold mb-4 text-green-400">{t('professionalism')}</h4>
              <p className="text-gray-300">
                {t('professionalismText')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">{t('innovation')}</h4>
              <p className="text-gray-300">
                {t('innovationText')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">{t('excellence')}</h4>
              <p className="text-gray-300">
                {t('excellenceText')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};