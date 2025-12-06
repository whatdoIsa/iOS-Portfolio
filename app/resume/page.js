'use client';

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { useRef } from 'react';

export default function Resume() {
  const iosProjects = projects.filter(p => p.category === 'iOS').slice(0, 4);
  const webProjects = projects.filter(p => p.category === 'Web');
  const resumeRef = useRef(null);

  const handleDownloadPDF = async () => {
    // 동적으로 html2pdf 라이브러리 로드 (클라이언트 사이드에서만 실행)
    if (typeof window !== 'undefined') {
      const html2pdf = (await import('html2pdf.js')).default;

      const element = resumeRef.current;
      const opt = {
        margin: [15, 15, 15, 15],
        filename: 'Resume_정송헌_Dean.pdf',
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
              <h1 className="text-4xl font-bold mb-2">정송헌 (Dean)</h1>
              <p className="text-xl text-gray-700 mb-4">사용자의 일상에 스며드는 ‘쓰게 되는 앱’을 만드는 iOS 개발자</p>
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
              <span>포항, 대한민국</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Summary</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            2024년 웹 프론트엔드 개발을 시작해 React/TypeScript 기반 풀스택 프로젝트를 완성한 후,
            2025년 Apple Developer Academy @POSTECH를 통해 iOS 개발로 전환했습니다.
            6개월 만에 App Store에 개인앱 2개 팀 프로젝트 앱 2개를 출시하고,
            총 8개의 iOS 앱과 2개의 웹 프로젝트를 완성했습니다.
          </p>
          <p className="text-gray-800 leading-relaxed">
            <span className="font-semibold">주요 성과:</span> SwiftUI와 UIKit 기반 iOS 앱 8개 개발 |
            Apple Indoor Map 국내 최초 승인 및 개발 사례 |
            Mac OS 윈도우 관리 서비스 구현 경험 |
            온디바이스 AI 및 위치 기반 서비스 구현 경험
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <span className="font-semibold">iOS Development:</span>
              <span className="ml-2 text-gray-700">SwiftUI, UIKit, MapKit, Foundation Model, AppKit, Face ID, Swift Data, Apple Intelligence</span>
            </div>
            <div>
              <span className="font-semibold">Web Frontend:</span>
              <span className="ml-2 text-gray-700">React, Vue.js, JavaScript, TypeScript, Next.js, Remix.js</span>
            </div>
            <div>
              <span className="font-semibold">Styling & Tools:</span>
              <span className="ml-2 text-gray-700">Tailwind CSS, CSS/Sass, Git, GitHub Actions, Firebase, Vercel</span>
            </div>
          </div>
        </section>

        {/* Experience / Projects */}
        <section className="mb-8 page-break-before">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Featured Projects</h2>

          <div className="space-y-6">
            {iosProjects.map((project, index) => (
              <div key={project.id} className={`page-break-avoid ${index !== iosProjects.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-600">{project.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.role}</p>
                <p className="text-gray-800 mb-2">{project.description}</p>
                <div className="mb-2">
                  <span className="text-sm font-semibold">Tech Stack: </span>
                  <span className="text-sm text-gray-700">{project.techStack.join(', ')}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, idx) => {
                    // Problem:, Action:, Result: 부분을 굵게 표시
                    const parts = highlight.split(/(:)/);
                    const label = parts[0]; // Problem, Action, Result
                    const colon = parts[1]; // :
                    const content = parts.slice(2).join(''); // 나머지 내용

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
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Education & Training</h2>
          <div className="space-y-4">
            <div className="page-break-avoid">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">Apple Developer Academy @ POSTECH</h3>
                <span className="text-sm text-gray-600">2025.03 ~ 2025.12</span>
              </div>
              <p className="text-gray-700">Apple 생태계 관련 개발 집중 교육 프로그램</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>6개의 Challenge 프로젝트 완성 (Show(X), kip!, Rootrip, WAY GYM 등)</li>
                <li>SwiftUI, UIKit, MapKit, Apple Intelligence 활용 앱 개발</li>
                <li>팀 프로젝트 협업 및 Agile 개발 방법론 경험</li>
              </ul>
            </div>

            <div className="page-break-avoid">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">Zerobase 프론트엔드 스쿨</h3>
                <span className="text-sm text-gray-600">2024.02 ~ 2024.09</span>
              </div>
              <p className="text-gray-700">React, TypeScript 기반 웹 개발 교육</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>React 컴포넌트 기반 아키텍처 학습</li>
                <li>TypeScript, JavaScript를 활용한 타입 안정성 확보</li>
                <li>팀 프로젝트를 통해 협업 및 소통 방법론 경험</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-8 page-break-avoid">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Key Achievements</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>App Store 출시 팀 프로젝트 2개 앱 (Show(X), kip!) - 다운로드 200회 이상</li>
            <li>App Store 출시 개인 프로젝트 2개 앱 (ReToU, DisplayCut) - 다운로드 100회 이상</li>
            <li>Apple Maps Indoor Map 국내 최초 승인 및 개발 사례 (Show(X))</li>
            <li>Junction 2025 해커톤 트랙 3등 - AI 기반 산불 감지 시스템 개발</li>
            <li>8개 iOS 앱 개발 경험 (SwiftUI 6개, UIKit 2개)</li>
            <li>웹에서 iOS로의 빠른 기술 전환 (선언형 UI 패턴 기반)</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>포트폴리오: <a href="https://whatdoisa.github.io/iOS-Portfolio/" className="text-blue-600 hover:underline">whatdoisa.github.io/iOS-Portfolio</a></p>
          <p className="mt-2">우측 상단의 "PDF로 저장" 버튼을 클릭하면 바로 PDF 파일이 다운로드됩니다.</p>
        </footer>
      </div>

      {/* PDF Download Button */}
      <div className="fixed top-20 right-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-ios-blue via-ios-purple to-ios-pink text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          title="클릭하면 바로 PDF 파일이 다운로드됩니다"
        >
          PDF로 저장
        </button>
      </div>
    </div>
  );
}
