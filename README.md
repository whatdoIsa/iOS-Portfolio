# iOS Developer Portfolio - 정송헌

> **React의 유연함과 iOS의 견고함을 결합한 T자형 개발자**

웹 프론트엔드 경험을 iOS 개발에 접목시켜 빠르게 성장하는 iOS 신입 개발자의 포트폴리오입니다.

## 🎯 포트폴리오 전략

### 핵심 차별화 포인트
- **선언형 UI 마스터**: React/Vue.js 경험을 SwiftUI 학습에 직접 적용
- **코드 비교 섹션**: React ↔ SwiftUI 코드를 나란히 보여주며 개념의 유사성 증명
- **T자형 역량 강조**: iOS 중심 + 웹 기술 보조 도구 활용

### 타겟 메시지
"웹 개발 경험이 있는 iOS 지망생은 선언형 UI 패턴을 이미 체득한 상태이므로, 학습 곡선이 50% 이상 단축됩니다."

## 🛠 기술 스택

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons

### 주요 기능
- ✅ iOS 스타일 컬러 팔레트 및 디자인 시스템
- ✅ React vs SwiftUI 코드 비교 인터랙티브 섹션
- ✅ 프로젝트 필터링 시스템 (iOS/Web)
- ✅ 스크롤 진행 바 & Scroll to Top
- ✅ 반응형 디자인 (Mobile First)
- ✅ 다크모드 지원
- ✅ SEO 최적화

## 📂 프로젝트 구조

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

## 🚀 시작하기

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

## 📋 섹션 구성

### 1. Hero Section
- T자형 인재 포지셔닝
- iOS + Web 아이콘 애니메이션
- 핵심 가치 제안 3가지
- CTA 버튼

### 2. Skills Section
- 기술 스택 프로그레스 바
- **웹 → iOS 지식 전환 맵** (6가지 인사이트)
- 크로스 플랫폼 역량 강조

### 3. Code Compare Section ⭐
**포트폴리오의 핵심 차별화 요소**

4가지 비교 탭:
1. 상태 관리 (useState ↔ @State)
2. 데이터 전달 (Props ↔ Parameters)
3. 리스트 렌더링 (map ↔ ForEach)
4. 조건부 렌더링 (삼항 연산자 ↔ if-else)

각 탭마다:
- React 코드 블록
- SwiftUI 코드 블록
- 핵심 인사이트 3가지

### 4. Projects Section
- 카테고리 필터 (전체/iOS/Web)
- 6개 프로젝트 (iOS 8개, Web 2개)
- 각 프로젝트마다 "Web 연계" 강조

### 5. Contact Section
- 이메일 및 GitHub 링크
- T자형 개발자 재강조

## 🎨 디자인 시스템

### iOS 컬러 팔레트
```js
ios-blue: #007AFF
ios-orange: #FF9500
ios-gray: 50~900
```

### 재사용 가능한 Tailwind 클래스
- `container-custom`: 최대 너비 컨테이너
- `section-padding`: 섹션 패딩
- `btn-ios`: iOS 스타일 버튼
- `card-ios`: iOS 스타일 카드

## 📊 프로젝트 데이터 커스터마이징

`data/projects.js` 파일에서 프로젝트 정보를 수정할 수 있습니다:

```js
{
  id: 1,
  title: '프로젝트 제목',
  category: 'iOS', // 'iOS' or 'Web'
  type: 'SwiftUI', // 'SwiftUI', 'UIKit', 'React', 'Vue.js'
  description: '프로젝트 설명',
  techStack: ['SwiftUI', 'HealthKit', ...],
  webConnection: '웹 경험이 iOS에 어떻게 도움됐는지',
  github: 'GitHub URL',
  duration: '2024.01 - 2024.02',
  ...
}
```

## 🔍 SEO 최적화

### 메타데이터
- iOS Developer, SwiftUI, React 등 핵심 키워드
- Open Graph 태그
- Robots 최적화

### 구조화된 데이터
- Semantic HTML
- Heading 계층 구조
- Alt 텍스트

## 🚢 배포 (Vercel)

### 1. GitHub에 푸시
```bash
git init
git add .
git commit -m "Initial commit: iOS Developer Portfolio"
git remote add origin [your-repo-url]
git push -u origin main
```

## 📈 향후 개선 사항

- [ ] TypeScript 마이그레이션
- [ ] 프로젝트 상세 페이지 (동적 라우팅)
- [ ] 블로그 섹션 (학습 과정 공유)
- [ ] 다국어 지원 (EN/KO)
- [ ] 애니메이션 성능 최적화
- [ ] 프로젝트 이미지 추가

## 📝 라이선스

MIT License - 자유롭게 사용하세요!

## 👨‍💻 작성자

**정송헌**
- Email: gmlwns5504@naver.com
- GitHub: [@whatdoIsa](https://github.com/whatdoIsa)

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
