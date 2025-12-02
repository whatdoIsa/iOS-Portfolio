export const projects = [
  {
    id: 1,
    title: 'Show(X)',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/showx.jpg',
    description: '쇼케이스 2025 전용 실내지도 앱. Apple Developer Academy 행사 참가자들을 위한 네비게이션 및 정보 제공 앱.',
    techStack: ['SwiftUI', 'MapKit', 'Indoor Positioning', 'Localization'],
    features: [
      '실내 지도 기반 부스 위치 및 동선 안내',
      '카테고리별 필터링으로 전시물 검색',
      '행사 일정, 팀 프로젝트 정보 통합 제공',
      '한국어/영어 다국어 지원',
      'iOS 18.1+ 최신 기술 적용'
    ],
    webConnection: 'CSS Grid 레이아웃 경험을 SwiftUI LazyVGrid로 전환. 웹 지도 API 경험을 MapKit 학습에 활용.',
    github: 'https://github.com/DeveloperAcademy-POSTECH/2025-C6-M9-Indoor-Map',
    appstore: 'https://apps.apple.com/kr/app/showx/id6755496321',
    duration: '2025.09 - 2025.11',
    role: 'iOS Developer (팀 프로젝트 - 6인 / 개발 담당)',
    highlights: [
      '⭐ App Store 출시 (평점 5.0)',
      '실내 지도 전체 기능 담당 개발',
      'Apple Maps의 Indoor Map 승인 및 개발 국내 최초 사례',
      'Apple Developer Academy @ POSTECH Challenge 6',
      '5회 업데이트로 지속적 개선 (v1.2.2)'
    ]
  },
  {
    id: 2,
    title: 'kip!',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/kip.jpg',
    description: '온디바이스 AI 기반 스크린샷 자동 정리 생산성 앱. 개인정보 보호를 고려한 로컬 AI 처리.',
    techStack: ['SwiftUI', 'Apple Intelligence', 'CoreML', 'Vision', 'Notifications'],
    features: [
      'Share Sheet 연동 빠른 저장 기능',
      '온디바이스 AI로 날짜/시간/메모 자동 추출',
      '스마트 위치 인식 및 리마인더 알림',
      '개인정보 로컬 처리 (서버 전송 없음)',
      'iOS 26.0+, Mac, Apple Vision 지원'
    ],
    webConnection: 'React의 컴포넌트 재사용성 개념을 SwiftUI View Modifier로 확장. 웹 UX 패턴을 네이티브 앱에 적용.',
    github: 'https://github.com/DeveloperAcademy-POSTECH/2025-C6-M9-TNT-Lab',
    appstore: 'https://apps.apple.com/kr/app/kip/id6754709167',
    duration: '2025.09 - 2025.11',
    role: 'iOS Developer (팀 프로젝트 - 6인 / 개발 3인 중 1인)',
    highlights: [
      '⭐ App Store 출시 (평점 5.0)',
      '전반적인 iOS 개발에 참여',
      'Apple Developer Academy @ POSTECH Challenge 6',
      'Apple Intelligence 활용한 온디바이스 AI 구현'
    ]
  },
  {
    id: 3,
    title: 'ReToU (오늘의 넌)',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/retou.jpg',
    description: '하루 한 줄 감정 회고 및 자기 성찰 iOS 앱. 일일 감정 기록으로 마음을 정리하는 웰빙 애플리케이션.',
    techStack: ['SwiftUI', 'CoreData', 'Face ID', 'Charts'],
    features: [
      '하루 1회 회고 작성으로 꾸준한 기록 습관 형성',
      '이모지 기반 감정 선택 및 커스텀 질문 템플릿',
      '월별 감정 통계 및 피드백 메시지 제공',
      'Face ID/암호 보안 기능',
      '라이트/다크 모드 지원 및 로컬 저장소 사용'
    ],
    webConnection: 'React의 useState 패턴을 SwiftUI @State로 자연스럽게 전환. 컴포넌트 기반 UI 설계 경험 활용.',
    github: 'https://github.com/whatdoIsa/ReToU',
    appstore: null,
    duration: '2025.04 - 2025.06',
    role: 'iOS Developer (개인 프로젝트)',
    highlights: [
      'SwiftUI의 선언형 UI로 사용자 경험 최적화',
      'CoreData를 활용한 로컬 데이터 영속성',
      'Apple Developer Academy 4기 프로젝트'
    ]
  },
  {
    id: 4,
    title: 'DisplayCut',
    category: 'iOS',
    type: 'Swift',
    thumbnail: '/images/projects/displaycut.jpg',
    description: 'iOS 디스플레이 관련 유틸리티 앱. Xcode를 활용한 네이티브 개발.',
    techStack: ['Swift', 'UIKit', 'Xcode'],
    features: [
      'iOS 디바이스 디스플레이 최적화',
      'Xcode 프로젝트 구조 학습',
      '네이티브 iOS 개발 경험'
    ],
    webConnection: 'CSS 레이아웃 개념을 Auto Layout으로 전환. 반응형 디자인 경험 활용.',
    github: 'https://github.com/whatdoIsa/DisplayCut',
    appstore: null,
    duration: '2025.06 - 2025.08',
    role: 'iOS Developer (개인 프로젝트)',
    highlights: [
      'Swift 네이티브 개발 역량 강화',
      'Xcode 환경에 대한 깊은 이해'
    ]
  },
  {
    id: 5,
    title: 'HOTSPOT',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/hotspot.jpg',
    description: 'AI 기반 산불 조기 감지 및 커뮤니티 알림 시스템. Junction 2025 해커톤 프로젝트로 시민 제보와 AI 예측을 결합한 산불 대응 앱.',
    techStack: ['SwiftUI', 'Azure API', 'MapKit', 'FIRMS Satellite Data', 'Korea Forest Service API'],
    features: [
      '즉시 카메라 실행으로 산불 신속 제보',
      '10km 반경 커뮤니티 자동 알림 시스템',
      '3단계 대피 가이드 (즉시대피/준비/모니터링)',
      '레이더형 산불 근접도 시각화',
      '대피소 위치 안내 및 지도 앱 연동',
      'AI 정확도 향상 (지역 위험 지수 + 위성 데이터)'
    ],
    webConnection: 'React의 실시간 데이터 처리 경험을 SwiftUI Combine으로 전환. 웹 지도 API 경험을 MapKit 활용에 적용.',
    github: 'https://github.com/NOP-YA/junction-2025-app',
    appstore: null,
    duration: '2025 (Junction Hackathon)',
    role: 'iOS Developer (팀 프로젝트 / 개발 담당)',
    highlights: [
      'Junction 2025 해커톤 프로젝트',
      'Azure AI 연동 산불 데이터 분석',
      '실시간 위치 기반 커뮤니티 알림 구현',
      '경상북도 산불 대응 문제 해결'
    ]
  },
  {
    id: 6,
    title: 'SleepTrain',
    category: 'iOS',
    type: 'Swift',
    thumbnail: '/images/projects/sleeptrain.jpg',
    description: '스크린타임 수면유도 애플리케이션. 스크린타임 강제를 통한 수면 유도 앱.',
    techStack: ['Swift', 'Screen Time API', 'Charts'],
    features: [
      '일일/주간/월간 스크린타임 추적',
      '앱별 사용 시간 분석 및 시각화',
      '사용 습관 개선을 위한 인사이트 제공',
      '목표 설정 및 알림 기능'
    ],
    webConnection: 'React의 데이터 시각화 라이브러리 경험을 Swift Charts로 전환. 상태 관리 패턴 활용.',
    github: 'https://github.com/Team-TNT-Lab/sleeptrain',
    appstore: null,
    duration: '2025.09',
    role: 'iOS Developer (팀 프로젝트 / 개발 담당)',
    highlights: [
      '130+ commits의 활발한 개발 활동',
      '4명의 개발자와 협업',
      'Screen Time API 활용 경험',
    ]
  },
  {
    id: 7,
    title: 'Rootrip',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/rootrip.jpg',
    description: 'MapKit과 PencilKit을 이용한 여행 계획 및 생산성 앱. MVVM 아키텍처 기반 iOS 앱 개발.',
    techStack: ['Swift', 'SwiftUI', 'MVVM', 'Firebase', 'Gitmoji'],
    features: [
      'MVVM/MVC/Clean Architecture 적용',
      'Firebase 백엔드 통합',
      '체계적인 Git 브랜치 전략 (main/dev/feature)',
      'Gitmoji + Conventional Commits 컨벤션',
      '단위 테스트 및 UI 테스트 구현'
    ],
    webConnection: 'React의 컴포넌트 아키텍처 경험을 SwiftUI MVVM 패턴으로 확장. 프론트엔드 상태 관리 개념 활용.',
    github: 'https://github.com/DeveloperAcademy-POSTECH/2025-C4-M7-TPAP',
    appstore: null,
    duration: '2025.07 - 2025.08',
    role: 'iOS Developer (팀 프로젝트 / 개발 담당)',
    highlights: [
      'Apple Developer Academy @ POSTECH Challenge 4',
      '215+ commits의 체계적인 개발 진행',
      'MapKit을 활용한 위치 기반 기능 구현',
      'PencilKit과 MapKit을 합쳐 지도 위에 그림을 그리는 경험 구현'
    ]
  },
  {
    id: 8,
    title: 'WAY GYM',
    category: 'iOS',
    type: 'Swift',
    thumbnail: '/images/projects/waygym.jpg',
    description: '위치 기반 영역 점령 게임 앱. Apple Developer Academy @ POSTECH Challenge 3 프로젝트.',
    techStack: ['Swift', 'MapKit', 'CoreLocation', 'Game Center'],
    features: [
      '실시간 위치 추적 및 영역 점령 메커니즘',
      '지도 기반 게이미피케이션',
      '사용자 간 경쟁 및 순위 시스템',
      '영역 확장 전략 게임플레이'
    ],
    webConnection: 'React의 상태 관리와 실시간 업데이트 개념을 Swift로 전환. 웹 지도 라이브러리 경험을 MapKit에 적용.',
    github: 'https://github.com/DeveloperAcademy-POSTECH/2025-C3-M5-WAYGYM',
    appstore: null,
    duration: '2025.06 - 2025.07',
    role: 'Project Manager (팀 프로젝트 - 3인 / PM 담당)',
    highlights: [
      'Apple Developer Academy @ POSTECH Challenge 3',
      'PM으로서 프로젝트 전체 기획 및 관리',
      '185+ commits의 활발한 개발',
      '위치 기반 게임 메커니즘 설계 경험'
    ]
  },
  {
    id: 9,
    title: 'MyLoveCoffee (myCafe)',
    category: 'Web',
    type: 'TypeScript',
    thumbnail: '/images/projects/mylovecoffee.jpg',
    description: '위치 기반 카페 검색 및 리뷰 플랫폼. Kakao Map API를 활용한 지도 기반 웹 애플리케이션.',
    techStack: ['TypeScript', 'React', 'Remix.js', 'Prisma', 'SQLite', 'Kakao Map API', 'Tailwind CSS'],
    features: [
      '현재 위치 기반 주변 카페 검색 및 필터링',
      '카페 리뷰 작성/수정 및 베스트 리뷰어 TOP 10 선정',
      'Kakao Mobility API 연동 자동차 길찾기',
      '전국 지역별 카페 검색 기능',
      'Remix.js + Prisma + SQLite 풀스택 구현'
    ],
    webConnection: '이 웹 프로젝트의 지도 및 위치 기반 검색 경험을 iOS MapKit 학습에 활용. API 통신 패턴을 URLSession으로 전환.',
    github: 'https://github.com/whatdoIsa/MyLoveCoffee',
    liveUrl: null,
    duration: '2024.06',
    role: 'Full-stack Developer (개인 프로젝트)',
    highlights: [
      'Remix.js V2를 활용한 생산성 높은 개발',
      'TypeScript로 타입 안정성 확보',
      '외부 API 통합 경험'
    ]
  },
  {
    id: 10,
    title: 'React-shop',
    category: 'Web',
    type: 'React',
    thumbnail: '/images/projects/react-shop.jpg',
    description: 'React 기반 쇼핑몰 프로젝트. Vite + Tailwind CSS를 활용한 모던 웹 개발.',
    techStack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    features: [
      'React 컴포넌트 기반 쇼핑몰 UI',
      'Vite를 활용한 빠른 개발 환경',
      'Tailwind CSS로 반응형 디자인 구현',
      'Vercel 배포 자동화'
    ],
    webConnection: 'React의 컴포넌트 설계 경험을 SwiftUI View 구조에 직접 적용. useState 패턴이 @State 학습을 가속화.',
    github: 'https://github.com/whatdoIsa/React-shop',
    liveUrl: null,
    duration: '2024.04',
    role: 'Frontend Developer (개인 프로젝트)',
    highlights: [
      'React 컴포넌트 재사용성 이해',
      'Vite 빌드 도구 경험',
      'Zerobase 프론트엔드 스쿨 프로젝트'
    ]
  }
];

export const projectCategories = [
  { id: 'all', name: '전체', count: projects.length },
  { id: 'iOS', name: 'iOS 앱', count: projects.filter(p => p.category === 'iOS').length },
  { id: 'Web', name: 'Web 프로젝트', count: projects.filter(p => p.category === 'Web').length }
];

export const techStackIcons = {
  'SwiftUI': '🍎',
  'UIKit': '📱',
  'React': '⚛️',
  'Vue.js': '💚',
  'Next.js': '▲',
  'Firebase': '🔥',
  'Tailwind CSS': '🎨',
  'HealthKit': '❤️',
  'MapKit': '🗺️',
  'CloudKit': '☁️'
};
