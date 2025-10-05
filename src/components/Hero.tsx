import React, { useMemo } from 'react';
import { PhoneCall, ArrowRight, Sparkles, Star, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useReducedMotion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const features = useMemo(() => [
    { icon: Star, text: t('yearsExperience') },
    { icon: Shield, text: t('support247') },
    { icon: Sparkles, text: t('premiumService') }
  ], [t]);

  const backgroundAnimation = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 0.3 },
    transition: { duration: 1.5 }
  }), []);

  const contentAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }), []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Optimized background elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl"
                style={{
                  background: `radial-gradient(circle, ${
                    ['#4CAF50', '#2196F3', '#9C27B0'][i % 3]
                  } 0%, transparent 70%)`,
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                {...backgroundAnimation}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Column */}
            <motion.div
              {...contentAnimation}
              className="text-center lg:text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">{t('professionalCallCenter')}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {t('heroSubtitle')}
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl">
                {t('heroDescription')}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  {t('contactUs')}
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700"
                >
                  {t('ourServices')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300"
                  >
                    <feature.icon className="w-5 h-5 text-green-400" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt={t('callCenterImage')}
                  className="w-full h-[600px] object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{t('support247')}</h3>
                    <p className="text-gray-400">{t('alwaysAvailable')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};