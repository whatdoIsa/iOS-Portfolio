'use client';

import { motion } from 'framer-motion';
import { SiSwift, SiReact, SiJavascript, SiTypescript, SiVuedotjs, SiTailwindcss } from 'react-icons/si';
import { FaApple, FaGitAlt } from 'react-icons/fa';
import { HiCube, HiLightningBolt, HiTemplate, HiRefresh, HiDeviceMobile, HiGlobeAlt } from 'react-icons/hi';
import { useTranslation } from '@/lib/i18n';

const getSkillCategories = (t) => [
  {
    title: t('skills.categories.ios'),
    icon: FaApple,
    gradient: 'from-ios-gray-900 to-ios-gray-700',
    skills: [
      { name: 'SwiftUI', icon: SiSwift, level: 85, color: 'bg-ios-orange' },
      { name: 'UIKit', icon: FaApple, level: 75, color: 'bg-ios-gray-700' },
      { name: 'Swift', icon: SiSwift, level: 90, color: 'bg-ios-orange' }
    ]
  },
  {
    title: t('skills.categories.web'),
    icon: SiReact,
    gradient: 'from-ios-blue to-ios-teal',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: 'bg-ios-blue' },
      { name: 'Vue.js', icon: SiVuedotjs, level: 80, color: 'bg-ios-green' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: 'bg-ios-yellow' },
      { name: 'TypeScript', icon: SiTypescript, level: 75, color: 'bg-ios-blue' }
    ]
  },
  {
    title: t('skills.categories.tools'),
    icon: SiTailwindcss,
    gradient: 'from-ios-teal to-ios-blue',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'bg-ios-teal' },
      { name: 'CSS/Sass', icon: SiTailwindcss, level: 85, color: 'bg-ios-pink' },
      { name: 'Git', icon: FaGitAlt, level: 80, color: 'bg-ios-red' }
    ]
  }
];

const getCrossPlatformInsights = (t) => [
  {
    webConcept: t('skills.insights.0.webConcept'),
    iosApplication: t('skills.insights.0.iosApplication'),
    impact: t('skills.insights.0.impact'),
    Icon: HiCube,
    color: 'text-ios-blue'
  },
  {
    webConcept: t('skills.insights.1.webConcept'),
    iosApplication: t('skills.insights.1.iosApplication'),
    impact: t('skills.insights.1.impact'),
    Icon: HiLightningBolt,
    color: 'text-ios-yellow'
  },
  {
    webConcept: t('skills.insights.2.webConcept'),
    iosApplication: t('skills.insights.2.iosApplication'),
    impact: t('skills.insights.2.impact'),
    Icon: HiTemplate,
    color: 'text-ios-purple'
  },
  {
    webConcept: t('skills.insights.3.webConcept'),
    iosApplication: t('skills.insights.3.iosApplication'),
    impact: t('skills.insights.3.impact'),
    Icon: HiRefresh,
    color: 'text-ios-green'
  },
  {
    webConcept: t('skills.insights.4.webConcept'),
    iosApplication: t('skills.insights.4.iosApplication'),
    impact: t('skills.insights.4.impact'),
    Icon: HiDeviceMobile,
    color: 'text-ios-teal'
  },
  {
    webConcept: t('skills.insights.5.webConcept'),
    iosApplication: t('skills.insights.5.iosApplication'),
    impact: t('skills.insights.5.impact'),
    Icon: HiGlobeAlt,
    color: 'text-ios-indigo'
  }
];

export default function Skills() {
  const { t } = useTranslation();
  const skillCategories = getSkillCategories(t);
  const crossPlatformInsights = getCrossPlatformInsights(t);
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-ios-gray-600 dark:text-ios-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
            <br />
            <strong className="text-ios-blue">{t('skills.subtitleHighlight')}</strong>{t('skills.subtitleEnd')}
          </p>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="card-ios p-6"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} mb-4`}>
                <category.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="text-ios-gray-600 dark:text-ios-gray-400" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-ios-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-ios-gray-200 dark:bg-ios-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + idx * 0.1, duration: 0.8 }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cross-Platform Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('skills.transferTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crossPlatformInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-ios p-5 hover:shadow-2xl transition-shadow duration-300"
              >
                <insight.Icon className={`text-4xl mb-3 ${insight.color}`} />
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-ios-blue font-semibold">WEB</span>
                    <p className="text-sm font-medium text-ios-gray-800 dark:text-ios-gray-200">
                      {insight.webConcept}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-ios-blue to-ios-orange"></div>
                    <span className="text-xs text-ios-gray-400">→</span>
                  </div>
                  <div>
                    <span className="text-xs text-ios-orange font-semibold">iOS</span>
                    <p className="text-sm font-medium text-ios-gray-800 dark:text-ios-gray-200">
                      {insight.iosApplication}
                    </p>
                  </div>
                  <p className="text-xs text-ios-gray-500 dark:text-ios-gray-400 pt-2 border-t border-ios-gray-200 dark:border-ios-gray-700">
                    {insight.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ios-blue to-ios-purple rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('skills.conclusionTitle')}
          </h3>
          <p className="text-lg opacity-90 mb-4">
            {t('skills.conclusionDescription')}
            <br />
            <strong>{t('skills.conclusionHighlight')}</strong>{t('skills.conclusionEnd')}
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div>
              <p className="font-semibold text-2xl">2+</p>
              <p className="opacity-80">{t('skills.stats.webProjects')}</p>
            </div>
            <div className="border-l border-white/30"></div>
            <div>
              <p className="font-semibold text-2xl">6+</p>
              <p className="opacity-80">{t('skills.stats.iosApps')}</p>
            </div>
            <div className="border-l border-white/30"></div>
            <div>
              <p className="font-semibold text-2xl">100%</p>
              <p className="opacity-80">{t('skills.stats.capability')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
