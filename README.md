# iOS Developer Portfolio - 정송헌

React의 유연함과 iOS의 견고함을 결합한 T자형 개발자

웹 프론트엔드 경험을 iOS 개발에 접목시켜 빠르게 성장하는 iOS 신입 개발자의 포트폴리오입니다.

## 기술 스택

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons

### 주요 기능
- iOS 스타일 컬러 팔레트 및 디자인 시스템
- React vs SwiftUI 코드 비교 인터랙티브 섹션
- 프로젝트 필터링 시스템 (iOS/Web)
- 스크롤 진행 바 & Scroll to Top
- 반응형 디자인 (Mobile First)
- 다크모드 지원
- SEO 최적화

## 프로젝트 구조

```
iOS-portfolio/
├── app/
│   ├── layout.js          # 루트 레이아웃 + SEO 메타데이터
│   ├── page.js            # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/
│   ├── layout/
│   │   ├── Navbar.js      # 네비게이션 바
│   │   ├── Footer.js      # 푸터
│   │   └── ScrollProgress.js  # 스크롤 인터랙션
│   ├── sections/
│   │   ├── Skills.js      # 스킬 섹션
│   │   ├── CodeCompare.js # 코드 비교 섹션 (핵심)
│   │   └── Projects.js    # 프로젝트 섹션
│   └── projects/
│       └── ProjectCard.js # 프로젝트 카드 컴포넌트
├── data/
│   └── projects.js        # 프로젝트 데이터
└── public/
    └── images/            # 이미지 에셋
```

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

https://whatdoisa.github.io/iOS-Portfolio/ 에서 확인

### 빌드
```bash
npm run build
```

### 프로덕션 실행
```bash
npm start
```

## 작성자

**정송헌**
- Email: gmlwns5504@naver.com
- GitHub: [@whatdoIsa](https://github.com/whatdoIsa)
