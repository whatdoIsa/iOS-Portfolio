'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSwift, SiReact } from 'react-icons/si';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslation();
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/whatdoIsa', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/송헌-정-04a44b331/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:gmlwns5504@naver.com', label: 'Email' },
  ];

  return (
    <footer className="bg-ios-gray-50 dark:bg-ios-gray-900 border-t border-ios-gray-200 dark:border-ios-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜딩 섹션 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <SiSwift className="text-ios-orange text-2xl" />
              <span className="text-xl font-bold">+</span>
              <SiReact className="text-ios-blue text-2xl" />
            </div>
            <p className="text-ios-gray-600 dark:text-ios-gray-400 text-sm">
              {t('hero.title.line1')} {t('hero.title.line2')}{t('hero.title.suffix')}
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue transition-colors"
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue transition-colors"
                >
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a
                  href="#compare"
                  className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue transition-colors"
                >
                  {t('nav.compare')}
                </a>
              </li>
            </ul>
          </div>

          {/* 소셜 링크 */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-ios-gray-600 dark:text-ios-gray-400 hover:text-ios-blue transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-8 pt-8 border-t border-ios-gray-200 dark:border-ios-gray-800 text-center">
          <p className="text-sm text-ios-gray-500 dark:text-ios-gray-500">
            {t('footer.copyright').replace('2025', new Date().getFullYear())} {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
