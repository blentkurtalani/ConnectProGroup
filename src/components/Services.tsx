import React, { useState, useEffect } from 'react';
import { PhoneIcon, WrenchIcon, UserCheckIcon, ShoppingCartIcon, CalendarIcon, BarChartIcon, TruckIcon, ShieldCheckIcon, FileTextIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const services: Service[] = [
    {
      id: '1',
      title: t('customerService'),
      description: t('customerServiceDesc'),
      icon: 'PhoneIcon',
      bgColor: 'from-purple-500/90 to-indigo-600/90',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '2',
      title: t('technicalSupport'),
      description: t('technicalSupportDesc'),
      icon: 'ToolIcon',
      bgColor: 'from-blue-500/90 to-cyan-600/90',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '3',
      title: t('crmManagement'),
      description: t('crmManagementDesc'),
      icon: 'UserCheckIcon',
      bgColor: 'from-green-500/90 to-emerald-600/90',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '4',
      title: t('salesSupport'),
      description: t('salesSupportDesc'),
      icon: 'ShoppingCartIcon',
      bgColor: 'from-orange-500/90 to-red-600/90',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '5',
      title: t('appointmentSupport'),
      description: t('appointmentSupportDesc'),
      icon: 'CalendarIcon',
      bgColor: 'from-pink-500/90 to-rose-600/90',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '6',
      title: t('surveysMarketResearch'),
      description: t('surveysMarketResearchDesc'),
      icon: 'BarChartIcon',
      bgColor: 'from-violet-500/90 to-purple-600/90',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '7',
      title: t('orderProcessing'),
      description: t('orderProcessingDesc'),
      icon: 'TruckIcon',
      bgColor: 'from-teal-500/90 to-green-600/90',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '8',
      title: t('contentModeration'),
      description: t('contentModerationDesc'),
      icon: 'ShieldCheckIcon',
      bgColor: 'from-blue-600/90 to-indigo-700/90',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: '9',
      title: t('backOfficeServices'),
      description: t('backOfficeServicesDesc'),
      icon: 'FileTextIcon',
      bgColor: 'from-indigo-500/90 to-purple-600/90',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId !== undefined) clearInterval(intervalId);
    };
  }, [currentIndex, autoplay]);

  const getIcon = (iconName: string) => {
    const iconProps = "w-16 h-16 text-white";
    switch (iconName) {
      case 'PhoneIcon': return <PhoneIcon className={iconProps} />;
      case 'ToolIcon': return <WrenchIcon className={iconProps} />;
      case 'UserCheckIcon': return <UserCheckIcon className={iconProps} />;
      case 'ShoppingCartIcon': return <ShoppingCartIcon className={iconProps} />;
      case 'CalendarIcon': return <CalendarIcon className={iconProps} />;
      case 'BarChartIcon': return <BarChartIcon className={iconProps} />;
      case 'TruckIcon': return <TruckIcon className={iconProps} />;
      case 'ShieldCheckIcon': return <ShieldCheckIcon className={iconProps} />;
      case 'FileTextIcon': return <FileTextIcon className={iconProps} />;
      default: return null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </motion.div>

        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => { prevSlide(); setAutoplay(false); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 focus:outline-none group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-green-400" />
          </button>
          <button
            onClick={() => { nextSlide(); setAutoplay(false); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 focus:outline-none group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-green-400" />
          </button>

          {/* Slideshow Container */}
          <div className="overflow-hidden relative h-[500px] rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={services[currentIndex].image} 
                      alt={services[currentIndex].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${services[currentIndex].bgColor}`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-12 flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm"
                    >
                      {getIcon(services[currentIndex].icon)}
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white mb-6"
                    >
                      {services[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl text-white/90 max-w-2xl"
                    >
                      {services[currentIndex].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-green-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};