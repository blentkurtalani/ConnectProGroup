import React, { useState } from 'react';
import { Briefcase, ChevronRight, Users, Clock, MapPin, GraduationCap, Upload } from 'lucide-react';
import { JobPosition } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const Careers: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  
  const positions: JobPosition[] = [
    {
      id: '1',
      title: t('customerServicePosition'),
      description: t('customerServiceRoleDesc'),
      requirements: [
        t('albanianEnglishRequired'),
        t('communicationSkills'),
        t('customerServiceExp'),
        t('shiftWork')
      ]
    },
    {
      id: '2',
      title: t('technicalSupportPosition'),
      description: t('technicalSupportRoleDesc'),
      requirements: [
        t('itDegree'),
        t('technicalKnowledge'),
        t('problemSolving'),
        t('technicalSupportExp')
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        resume: fileInput.files ? fileInput.files[0] : null
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <section id="careers" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Animation */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
                style={{
                  background: `radial-gradient(circle, ${
                    ['#4CAF50', '#2196F3', '#9C27B0'][i % 3]
                  } 0%, transparent 70%)`,
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-4">
            <Briefcase className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-400 font-medium">{t('careersTitle')}</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('careersTitle')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('careersDescription')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {positions.map((position) => (
                <motion.div
                  key={position.id}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    selectedPosition === position.id
                      ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30'
                      : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/30 hover:border-green-500/20'
                  } border backdrop-blur-sm`}
                  onClick={() => setSelectedPosition(position.id === selectedPosition ? null : position.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                            {position.title}
                          </h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              Full Time
                            </span>
                            <span className="flex items-center text-sm text-gray-400">
                              <MapPin className="w-4 h-4 mr-1" />
                              Tiranë
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-green-400 transition-transform duration-300 ${
                        selectedPosition === position.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>

                    <AnimatePresence>
                      {selectedPosition === position.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-gray-700/50"
                        >
                          <p className="text-gray-300 mb-4">{position.description}</p>
                          <div className="space-y-3">
                            <h4 className="text-green-400 font-medium flex items-center">
                              <GraduationCap className="w-5 h-5 mr-2" />
                              Kërkesat
                            </h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, index) => (
                                <li key={index} className="flex items-start text-gray-300">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 mr-2" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{t('careersTitle')}</h3>
                  <p className="text-gray-400">{t('careersDescription')}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('position')}
                  </label>
                  <select
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white focus:border-green-500 focus:ring-green-500 transition-colors"
                    required
                  >
                    <option value="" className="bg-gray-900">{t('selectPosition')}</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.id} className="bg-gray-900">
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('uploadCV')}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf"
                      onChange={handleChange}
                      className="hidden"
                      id="resume"
                      required
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 transition-colors cursor-pointer group"
                    >
                      <Upload className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                      {t('uploadCV')}
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-green-500/25"
                >
                  {t('sendApplication')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};