'use client';

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function Resume() {
  const { t, locale } = useTranslation();
  const [resumeData, setResumeData] = useState({ education: [], achievements: [], projectDetails: {} });
  // 모든 iOS 프로젝트들 포함
  const iosProjects = projects.filter(p => p.category === 'iOS');
  const webProjects = projects.filter(p => p.category === 'Web');
  const resumeRef = useRef(null);

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const currentLocale = locale || 'ko';
        let localeData;
        
        if (currentLocale === 'en') {
          localeData = await import('@/locales/en.json');
        } else {
          localeData = await import('@/locales/ko.json');
        }
        
        setResumeData({
          education: localeData.default.resume?.education || [],
          achievements: localeData.default.resume?.achievements || [],
          projectDetails: localeData.default.projects?.projectDetails || {}
        });
      } catch (error) {
        console.error('Failed to load resume data:', error);
        setResumeData({ education: [], achievements: [], projectDetails: {} });
      }
    };
    
    loadResumeData();
  }, [locale]);

  const handleDownloadPDF = async () => {
    // 동적으로 html2pdf 라이브러리 로드 (클라이언트 사이드에서만 실행)
    if (typeof window !== 'undefined') {
      const html2pdf = (await import('html2pdf.js')).default;

      const element = resumeRef.current;
      const opt = {
        margin: [15, 15, 15, 15],
        filename: (locale || 'ko') === 'en' ? '[iOS]RESUME_JeongSongHeon.pdf' : '[iOS]정송헌_이력서.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: '.page-break-avoid'
        }
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div ref={resumeRef} className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <header className="mb-8 border-b-2 border-gray-800 pb-6 page-break-avoid">
          <div className="flex items-start gap-6 mb-4">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/iOS-Portfolio' : ''}/images/profile.jpg`}
                  alt="Dean 정송헌"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{t('resume.title')}</h1>
              <p className="text-xl text-gray-700 mb-4">{t('resume.subtitle')}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:gmlwns5504@naver.com" className="hover:text-blue-600">gmlwns5504@naver.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/whatdoIsa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">github.com/whatdoIsa</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/송헌-정-04a44b331/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{t('resume.contact.location')}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">{t('resume.sections.summary')}</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            {t('resume.summary.text1')}
          </p>
          <p className="text-gray-800 leading-relaxed">
            {t('resume.summary.text2')}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">{t('resume.sections.skills')}</h2>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <span className="font-semibold">{t('resume.skillCategories.ios')}</span>
              <span className="ml-2 text-gray-700">SwiftUI, UIKit, MapKit, PencilKit, Foundation Model, AppKit, Face ID, Swift Data, Apple Intelligence</span>
            </div>
            <div>
              <span className="font-semibold">{t('resume.skillCategories.web')}</span>
              <span className="ml-2 text-gray-700">React, Vue.js, JavaScript, TypeScript, Next.js, Remix.js</span>
            </div>
            <div>
              <span className="font-semibold">{t('resume.skillCategories.tools')}</span>
              <span className="ml-2 text-gray-700">Tailwind CSS, CSS/Sass, Git, GitHub Actions, Firebase, Vercel</span>
            </div>
          </div>
        </section>

        {/* Experience / Projects */}
        <section className="mb-8 page-break-before">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">{t('resume.sections.projects')}</h2>

          <div className="space-y-6">
            {[...iosProjects, ...webProjects].map((project, index) => (
              <div key={project.id} className={`page-break-avoid ${index !== iosProjects.length + webProjects.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-600">{project.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.role}</p>
                <p className="text-gray-800 mb-2">
                  {resumeData.projectDetails && resumeData.projectDetails[project.title] 
                    ? resumeData.projectDetails[project.title].description 
                    : project.description
                  }
                </p>
                <div className="mb-2">
                  <span className="text-sm font-semibold">Tech Stack: </span>
                  <span className="text-sm text-gray-700">{project.techStack.join(', ')}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {((resumeData.projectDetails && resumeData.projectDetails[project.title] 
                    ? resumeData.projectDetails[project.title].highlights 
                    : project.highlights) || []).slice(0, 3).map((highlight, idx) => {
                    // Problem:, Action:, Result: 부분을 굵게 표시
                    if (!highlight || typeof highlight !== 'string') {
                      return <li key={idx}>-</li>;
                    }
                    
                    const parts = highlight.split(/(:)/);
                    const label = parts[0] || ''; // Problem, Action, Result
                    const colon = parts[1] || ''; // :
                    const content = parts.slice(2).join('') || ''; // 나머지 내용

                    return (
                      <li key={idx}>
                        <span className="font-bold text-base">{label}{colon}</span>
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 page-break-before">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">{t('resume.sections.education')}</h2>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="page-break-avoid">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold">{edu.name}</h3>
                  <span className="text-sm text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-700">{edu.description}</p>
                {edu.details && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">{t('resume.sections.achievements')}</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>{t('resume.footer.portfolio')} <a href="https://whatdoisa.github.io/iOS-Portfolio/" className="text-blue-600 hover:underline">whatdoisa.github.io/iOS-Portfolio</a></p>
          <p className="mt-2">{t('resume.footer.downloadDescription')}</p>
        </footer>
      </div>

      {/* PDF Download Button */}
      <div className="fixed top-20 right-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-ios-blue via-ios-purple to-ios-pink text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          title={t('resume.downloadHint')}
        >
          {t('resume.download')}
        </button>
      </div>
    </div>
  );
}
