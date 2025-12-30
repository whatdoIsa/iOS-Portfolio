'use client';

import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();

  const languages = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-white dark:bg-ios-gray-800 rounded-full px-3 py-2 shadow-lg">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              (locale || 'ko') === lang.code
                ? 'bg-gradient-to-r from-ios-blue to-ios-purple text-white shadow-md'
                : 'text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue dark:hover:text-ios-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;