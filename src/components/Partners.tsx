import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Shield, Briefcase, Globe, CheckCircle, Clock, Users } from 'lucide-react';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  const partners = [
    {
      name: "Vega Solutions GmbH",
      logo: "/partners/vega.PNG",
      description: t('vegaSolutionsDesc'),
      icon: Building2,
      stats: '500+ Projects',
      website: 'https://vegasolutions.at/'
    },
    {
      name: "GUT contact INTERNATIONAL",
      logo: "https://gutcontact.de/wp-content/uploads/2023/06/Gut-contact-International.jpg",
      description: t('gutContactDesc'),
      icon: Globe,
      stats: '10+ Years',
      website: 'https://gutcontact.de/'
    },
    {
      name: "DS Premium",
      logo: "https://www.ds-premium.ch/ws/media-library/8472187ffaa244b79a6e09bc72ab1eb4/original.png",
      description: t('dsPremiumDesc'),
      icon: Shield,
      stats: '500+ Projects',
      website: 'https://www.ds-premium.ch/'
    },
    {
      name: "IMTicker",
      logo: "https://imticker.ch/wp-content/uploads/2024/04/cropped-imticker_logo_queer.png",
      description: t('imtickerDesc'),
      icon: Building2,
      stats: '95% Success',
      website: 'https://imticker.ch/'
    },
    {
      name: "Smart Engineering",
      logo: "https://smart-engineering.tech/assets/images/logo.png",
      description: t('smartEngineeringDesc'),
      icon: Briefcase,
      stats: '24/7 Support',
      website: 'https://smart-engineering.tech/'
    }
  ];

  const achievements = [
    { icon: CheckCircle, value: '98%', label: t('clientSatisfaction') },
    { icon: Users, value: '500+', label: t('happyClients') },
    { icon: Clock, value: '24/7', label: t('support') }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={floatingAnimation}
          className="absolute w-96 h-96 -top-48 -left-48 bg-green-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={floatingAnimation}
          transition={{ delay: 1 }}
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl"
        ></motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green-400 font-semibold tracking-wider uppercase mb-4 block"
          >
            {t('trustedBy')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl font-bold text-white mb-6 leading-tight"
          >
            {t('partnersTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('partnersDescription')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.07,
                boxShadow: "0 8px 32px 0 rgba(16,185,129,0.25)",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-gray-800 hover:border-green-400 transition-all duration-500"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white/10 shadow-md mb-4 overflow-hidden border-2 border-green-400 group-hover:scale-105 group-hover:shadow-green-400/30 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-28 h-28"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-green-400 transition-colors duration-300">
                {partner.name}
              </h3>
              <p className="text-gray-400 text-sm text-center mb-2 min-h-[40px]">{partner.description}</p>
              <span className="text-green-400 text-xs font-medium">{partner.stats}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mt-20 bg-gray-800/50 p-12 rounded-3xl backdrop-blur-sm border border-gray-700"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-block p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 mb-4"
              >
                <achievement.icon className="w-8 h-8 text-green-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {achievement.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300"
              >
                {achievement.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {['wideExperience', 'manyPartners', 'support24_7'].map((key, index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
            >
              <motion.h4
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-green-400 mb-4"
              >
                {t(key)}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300"
              >
                {t(`${key}Text`)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
