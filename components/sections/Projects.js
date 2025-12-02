'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb } from 'react-icons/hi';
import ProjectCard from '../projects/ProjectCard';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            주요 프로젝트
          </h2>
          <p className="text-lg text-ios-gray-600 dark:text-ios-gray-400 max-w-2xl mx-auto">
            iOS 앱 개발을 중심으로, 웹 기술을 보조 도구로 활용한 프로젝트들입니다.
          </p>
        </motion.div>

        {/* 카테고리 필터 */}
        <div className="flex justify-center space-x-4 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-ios-blue text-white shadow-lg'
                  : 'bg-white dark:bg-ios-gray-800 text-ios-gray-700 dark:text-ios-gray-300 hover:bg-ios-gray-100 dark:hover:bg-ios-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* 추가 강조 문구 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ios-blue/10 to-ios-purple/10 dark:from-ios-blue/20 dark:to-ios-purple/20 px-6 py-3 rounded-full">
            <HiLightBulb className="text-ios-yellow text-xl flex-shrink-0" />
            <span className="text-sm font-medium">
              모든 iOS 프로젝트에 <strong className="text-ios-blue">React/Vue.js 경험</strong>이 녹아있습니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
