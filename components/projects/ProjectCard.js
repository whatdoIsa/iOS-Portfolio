'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaApple } from 'react-icons/fa';
import { SiSwift } from 'react-icons/si';
import { HiLink } from 'react-icons/hi';
import { useTranslation } from '@/lib/i18n';

export default function ProjectCard({ project, index }) {
  const { t, locale } = useTranslation();
  const isIOS = project.category === 'iOS';
  
  // 프로젝트 설명 번역 가져오기
  const getProjectDescription = () => {
    return t(`projects.projectDetails.${project.title}.description`, project.description);
  };
  
  const getWebConnection = () => {
    return t(`projects.projectConnections.${project.title}`, project.webConnection);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-ios overflow-hidden group"
    >
      {/* 썸네일 영역 */}
      <div className="relative h-48 bg-gradient-to-br from-ios-blue/20 to-ios-purple/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {isIOS ? (
            <FaApple className="text-6xl text-ios-gray-400 dark:text-ios-gray-600" />
          ) : (
            <div className="text-6xl">⚛️</div>
          )}
        </div>
        {/* 카테고리 배지 */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isIOS
              ? 'bg-ios-blue text-white'
              : 'bg-ios-green text-white'
          }`}>
            {project.type}
          </span>
        </div>
        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-ios-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <FaGithub className="text-ios-gray-900 text-xl" />
            </a>
          )}
          {(project.liveUrl || project.appstore) && (
            <a
              href={project.liveUrl || project.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <FaExternalLinkAlt className="text-ios-gray-900 text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {isIOS && <SiSwift className="text-ios-orange text-2xl" />}
        </div>

        <p className="text-sm text-ios-gray-600 dark:text-ios-gray-400 mb-4 line-clamp-2">
          {getProjectDescription()}
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-ios-gray-100 dark:bg-ios-gray-700 rounded text-xs text-ios-gray-700 dark:text-ios-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs text-ios-gray-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Web Connection 강조 */}
        {project.webConnection && (
          <div className="bg-gradient-to-r from-ios-blue/10 to-ios-purple/10 dark:from-ios-blue/20 dark:to-ios-purple/20 rounded-lg p-3 mb-4">
            <p className="text-xs text-ios-gray-700 dark:text-ios-gray-300 flex items-start gap-1">
              <HiLink className="text-ios-blue mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-semibold text-ios-blue">{t('projects.webConnection')}</span> {getWebConnection()}
              </span>
            </p>
          </div>
        )}

        {/* 메타 정보 */}
        <div className="flex items-center justify-between text-xs text-ios-gray-500 pt-4 border-t border-ios-gray-200 dark:border-ios-gray-700">
          <span>{project.duration}</span>
          <span>{project.role.split('(')[0]}</span>
        </div>
      </div>
    </motion.div>
  );
}
