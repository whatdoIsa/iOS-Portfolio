import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import { I18nProvider } from '@/lib/i18n';

export const metadata = {
  title: 'Dean (정송헌) | iOS Developer with Web Frontend Background',
  description: 'React, Vue.js 등 웹 프론트엔드 경험을 SwiftUI/UIKit iOS 개발에 접목시키는 T자형 개발자. 선언형 UI 패턴의 본질을 이해하고 크로스 플랫폼 사고로 빠르게 성장하는 iOS 개발자 Dean (정송헌)입니다.',
  keywords: [
    'iOS Developer',
    'SwiftUI',
    'UIKit',
    'React',
    'Vue.js',
    'Next.js',
    'Frontend Developer',
    'Mobile Developer',
    '정송헌',
    'Dean',
    'T자형 개발자',
    '선언형 UI',
    'Declarative UI',
    'HealthKit',
    'MapKit',
    'Firebase',
    'Cross Platform',
    '신입 iOS 개발자',
    '포트폴리오'
  ],
  authors: [{ name: 'Dean (정송헌)' }],
  creator: 'Dean',
  publisher: 'Dean',
  openGraph: {
    title: 'Dean (정송헌) | iOS Developer with Web Frontend Background',
    description: 'React 경험을 바탕으로 SwiftUI를 빠르게 습득한 T자형 iOS 개발자',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'Dean Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased font-pretendard">
        <I18nProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
