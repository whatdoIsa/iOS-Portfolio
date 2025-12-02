'use client';

import { motion } from 'framer-motion';
import { FaApple, FaReact } from 'react-icons/fa';
import { SiSwift, SiJavascript } from 'react-icons/si';
import { HiLightningBolt, HiCube, HiRefresh } from 'react-icons/hi';
import Skills from '@/components/sections/Skills';
import CodeCompare from '@/components/sections/CodeCompare';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-white to-ios-gray-50 dark:from-ios-gray-900 dark:to-ios-gray-800">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* 아이콘 배지 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex justify-center items-center space-x-4 mb-8"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center space-x-2 bg-white dark:bg-ios-gray-800 px-4 py-2 rounded-full shadow-lg"
              >
                <FaApple className="text-ios-gray-900 dark:text-white text-2xl" />
                <SiSwift className="text-ios-orange text-2xl" />
              </motion.div>
              <span className="text-2xl font-bold">+</span>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="flex items-center space-x-2 bg-white dark:bg-ios-gray-800 px-4 py-2 rounded-full shadow-lg"
              >
                <FaReact className="text-ios-blue text-2xl" />
                <SiJavascript className="text-ios-yellow text-2xl" />
              </motion.div>
            </motion.div>

            {/* 메인 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              React의 유연함에
              <br />
              <span className="text-gradient gradient-ios">iOS의 견고함</span>을 더하다
            </motion.h1>

            {/* 서브 타이틀 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-ios-gray-600 dark:text-ios-gray-400 mb-4 leading-relaxed"
            >
              웹 프론트엔드의 선언형 UI 경험을 바탕으로
              <br />
              <strong className="text-ios-blue">SwiftUI와 UIKit을 다루는 T자형 iOS 개발자</strong>입니다.
            </motion.p>

            {/* 이름 소개 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base text-ios-gray-500 dark:text-ios-gray-500 mb-8"
            >
              안녕하세요, <strong className="text-gradient gradient-ios">Dean</strong> (정송헌)입니다.
            </motion.p>

            {/* 핵심 가치 제안 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
            >
              {[
                { Icon: HiCube, text: '선언형 UI 마스터', color: 'text-ios-blue' },
                { Icon: HiLightningBolt, text: '빠른 학습 능력', color: 'text-ios-yellow' },
                { Icon: HiRefresh, text: '크로스 플랫폼 경험', color: 'text-ios-green' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-ios-gray-800 rounded-xl p-4 shadow-lg"
                >
                  <item.Icon className={`text-4xl mb-2 ${item.color} mx-auto`} />
                  <p className="text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                프로젝트 보기
              </motion.a>
              <motion.a
                href="#compare"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                코드 비교 보기
              </motion.a>
            </motion.div>

            {/* 스크롤 다운 인디케이터 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <a href="#skills" className="text-ios-gray-400 hover:text-ios-blue transition-colors">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-xs mt-2 block">Scroll</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Code Compare Section */}
      <CodeCompare />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-white to-ios-gray-50 dark:from-ios-gray-900 dark:to-ios-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              함께 일하고 싶으신가요?
            </h2>
            <p className="text-lg text-ios-gray-600 dark:text-ios-gray-400 mb-8 max-w-2xl mx-auto">
              웹 개발 경험을 iOS 개발에 접목시키는 T자형 개발자와 함께하세요.
              <br />
              새로운 기회와 협업을 기다립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:gmlwns5504@naver.com"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                이메일 보내기
              </motion.a>
              <motion.a
                href="https://github.com/whatdoIsa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub 보기
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
