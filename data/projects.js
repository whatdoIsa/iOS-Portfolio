export const projects = [
  {
    id: 1,
    title: 'Show(X)',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/showx.jpg',
    description: '쇼케이스 2025 전용 실내지도 앱. Apple Developer Academy 행사 참가자들을 위한 네비게이션 및 정보 제공 앱.',
    techStack: ['SwiftUI', 'MapKit', 'Swift Data','Indoor Positioning', 'Localization'],
    features: [
      '실내 지도 기반 부스 위치 및 동선 안내',
      '카테고리별 필터링으로 전시물 검색',
      '행사 일정, 팀 프로젝트 정보 통합 제공',
      '한국어/영어 다국어 지원',
      'App store 네비게이션 차트 37등'
    ],
    webConnection: '웹 지도 API 경험을 MapKit 학습에 활용.',
    github: null,
    appstore: 'https://apps.apple.com/kr/app/showx/id6755496321',
    duration: '2025.09 - 2025.11',
    role: 'iOS Developer (팀 프로젝트 - 6인 / 개발 담당)',
    highlights: [
      'Problem: 쇼케이스 행사에서 200+ 명의 참가자들이 실내 동선, 부스 위치를 찾기 어려워 안내 인력에 부담이 커지고 행사 경험이 분산되는 문제가 있었다.',
      'Action: MapKit Indoor Positioning API와 GeoJSON 기반 커스텀 오버레이로 층/존/부스 단위 데이터 모델링을 구현했다. 실내 지도 모듈을 SwiftUI로 단독 개발(전체 개발의 50% 담당)하고, 업데이트를 5회 반복 개선했으며, 기획자·디자이너 6명과 Figma 기반 협업으로 한국어/영어 Localization을 완성했다.',
      'Result: 쇼케이스 기간 동안 현장 안내 문의 40% 감소, Apple Indoor Map 국내 최초 승인 획득. 5회 업데이트로 실내 내비게이션 도메인 전문성을 확보했다. App Store 네비게이션 차트 37등 달성.'
    ]
  },
  {
    id: 2,
    title: 'kip!',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/kip.jpg',
    description: '온디바이스 AI 기반 스크린샷 자동 정리 생산성 앱. 개인정보 보호를 고려한 로컬 AI 처리.',
    techStack: ['SwiftUI', 'Apple Intelligence', 'Foundation Model', 'Vision', 'Notifications'],
    features: [
      'Share Sheet 연동 빠른 저장 기능',
      '온디바이스 AI로 날짜/시간/메모 자동 추출',
      '스마트 위치 인식 및 리마인더 알림',
      '개인정보 로컬 처리 (서버 전송 없음)',
      'App store 생산성 66등'
    ],
    webConnection: 'React의 컴포넌트 재사용성 개념을 SwiftUI View Modifier로 확장. 웹 UX 패턴을 네이티브 앱에 적용.',
    github: null,
    appstore: 'https://apps.apple.com/kr/app/kip/id6754709167',
    duration: '2025.09 - 2025.11',
    role: 'iOS Developer (팀 프로젝트 - 6인 / 개발 3인 중 1인)',
    highlights: [
      'Problem: 테스트 사용자 15명의 평균 스크린샷 저장 개수 300+, 필요한 정보를 찾는 데 평균 5분 소요. 클라우드 AI는 개인정보 우려로 사용 거부율 70%. 저장해둔 정보를 수시로 잊고 놓친 경우가 68%',
      'Action: Apple Intelligence Writing Tools API와 Vision 프레임워크로 온디바이스 이미지 분류 파이프라인을 구현해(전체 개발의 40% 담당) 정확도 85% 달성. SwiftUI Combine으로 비동기 처리 최적화. SwiftData 기반 로컬 저장으로 완전한 프라이버시 보장 아키텍처 설계.',
      'Result: 테스트 사용자 평균 스크린샷 정리 시간 60% 단축 (5분 → 2분). "서버 전송 없어 안심된다" 만족도 95%. 온디바이스 AI 설계·성능·프라이버시 균형 감각 확보. Apple Intelligence 불가한 경우 대비 Gemini & GPT 도입. App Store 생산성 66등 달성.'
    ]
  },
  {
    id: 3,
    title: 'ReToU (오늘의 넌)',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/retou.jpg',
    description: '하루 한 줄 감정 회고 및 자기 성찰 iOS 앱. 일일 감정 기록으로 마음을 정리하는 웰빙 애플리케이션.',
    techStack: ['SwiftUI', 'Face ID', 'Charts'],
    features: [
      '하루 1회 회고 작성으로 꾸준한 기록 습관 형성',
      '한국어와 영어 지원 다국어 기능',
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
      'Problem: 테스트 사용자 10명 중 8명이 "일기는 부담스러워 3일 이상 지속 못함", 감정 체크 앱은 "30일 후 이유를 떠올리지 못함"으로 이탈.',
      'Action: "하루 1질문 + 감정 선택" 최소 입력 구조로 UX 설계해(전체 개발의 100% 담당) 평균 작성 시간 30초로 부담감 없는 입력 경험 제공. Swift Charts로 날짜별·감정별 통계 시각화 구현. Face ID 보안과 로컬 저장으로 프라이버시 완전 보장. 테스트 사용자 피드백 3회 반영해 UI 개선.',
      'Result: 30일 지속률 70% 달성 (기존 일기 앱 대비 3배). "감정 패턴이 보인다" 만족도 85%. 로컬 데이터 기반 웰빙 앱 UX 설계·구현 경험 확보.'
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
      'Problem: 개발자 본인의 멀티 윈도우 작업 시 윈도우 배치에 하루 평균 15분 소요. Mission Control 사용률 20% 미만.',
      'Action: SwiftUI + AppKit 기반 macOS 앱으로 6가지 레이아웃 프리셋(2분할, 3분할, 가운데 집중 등) 구현(전체 개발의 100% 담당). Accessibility API로 현재 활성 윈도우를 1초 내 정확한 좌표·크기로 배치. 단축키 10개 설정으로 키보드만으로 완전 제어 가능하도록 설계.',
      'Result: 본인 사용 기준 윈도우 배치 시간 80% 감소 (15분 → 3분/일). macOS Accessibility API와 윈도우 관리 메커니즘 이해. SwiftUI 데스크톱 앱 설계·배포 경험 확보.'
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
      'Problem: 경상북도 연평균 산불 발생 300+ 건, 정보 채널 5개 이상 분산으로 골든타임 평균 20분 지연. 최근 경북지역 산불로 인해 많은 인명 피해 발생',
      'Action: 48시간 해커톤에서 FIRMS 위성 데이터 + Azure AI + Korea Forest Service API 3개를 실시간 통합. MapKit으로 10km 반경 커뮤니티 알림 시스템 구현(전체 iOS 개발의 100% 담당). SwiftUI + Combine으로 비동기 데이터 스트림 처리해 MVP 완성. 4인 팀에서 iOS 개발 60% 담당.',
      'Result: Junction 2025 해커톤 데모에서 "현장 적용 가능성" 멘토 피드백. 외부 API 3개를 48시간 내 통합하며 빠른 프로토타이핑과 데이터 파이프라인 설계 역량 확보.'
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
      'Problem: 테스트 사용자 12명의 평균 수면 시간 오전 2시, 자기 전 스마트폰 사용 평균 90분으로 수면 부족 발생. SNS/게임 등의 이유로 수면 시간이 점점 늦어지는 추세',
      'Action: Screen Time API로 자정 이후 앱 사용 제한 기능 구현(전체 개발의 40% 담당). Swift Charts로 일일/주간/월간 사용 패턴 시각화. 테스트 사용자 피드백 "강제 차단 스트레스"를 반영해 점진적 알림·제안 UX로 2회 개선.',
      'Result: 테스트 사용자 자정 이후 화면 사용 시간 45% 감소 (90분 → 50분). "NFC 태그로 스크린 잠금" 만족도 80%. 행동 변화 유도 UX와 데이터 피드백 설계 경험 확보.'
    ]
  },
  {
    id: 7,
    title: 'Rootrip',
    category: 'iOS',
    type: 'SwiftUI',
    thumbnail: '/images/projects/rootrip.jpg',
    description: 'MapKit과 PencilKit을 이용한 여행 계획 및 생산성 앱. MVVM 아키텍처 기반 iPad OS 앱 개발.',
    techStack: ['Swift', 'SwiftUI', 'UIKit', 'PencilKit', 'MapKit', 'MVVM', 'Firebase', 'Gitmoji'],
    features: [
      'PencilKit + MapKit 통합 지도 드로잉 기능',
      'MVVM/MVC/Clean Architecture 적용',
      'Firebase 백엔드 통합',
      '단위 테스트 및 UI 테스트 구현'
    ],
    webConnection: 'React의 컴포넌트 아키텍처 경험을 SwiftUI MVVM 패턴으로 확장. 프론트엔드 상태 관리 개념 활용.',
    github: 'https://github.com/DeveloperAcademy-POSTECH/2025-C4-M7-TPAP',
    appstore: null,
    duration: '2025.07 - 2025.08',
    role: 'iOS Developer (팀 프로젝트 / 개발 담당)',
    highlights: [
      'Problem: 테스트 사용자 8명이 여행 계획 시 평균 3개 앱(지도/메모/일정) 전환으로 동선 파악에 20분 소요.',
      'Action: MapKit + PencilKit 결합으로 지도 위 직접 드로잉 가능한 인터랙션 구현(PencilKit + MapKit 개발 담당). StrokeData 모델 설계로 그리기 데이터 저장·복원. MVVM 아키텍처로 지도 상태/일정/북마크를 분리 설계하고, Firebase Firestore 연동으로 멀티 디바이스 동기화.',
      'Result: 테스트 사용자 동선 계획 시간 60% 단축 (20분 → 8분). "지도 보며 직관적 계획" 만족도 90%. 복합 도메인(지도·드로잉·일정) 상태 관리와 Firebase 통합 경험 확보.'
    ]
  },
  {
    id: 8,
    title: 'WAY GYM',
    category: 'iOS',
    type: 'Swift',
    thumbnail: '/images/projects/waygym.jpg',
    description: '위치 기반 영역 점령 게임 앱. Apple Developer Academy @ POSTECH Challenge 3 프로젝트.',
    techStack: ['Swift', 'MapKit', 'CoreLocation'],
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
    role: 'Project Manager (팀 프로젝트 - 3인 / PM 및 디자인 담당)',
    highlights: [
      'Problem: 테스트 사용자 1명의 주간 평균 운동 시간 30분, "운동 재미없음", "시간 부족", "게임 중독"으로 운동 시작 장벽 높음.',
      'Action: CoreLocation + MapKit으로 걸은 영역을 실시간 색칠하는 영역 점령 메커니즘 구현(PM 및 디자인 담당). CLLocationManager로 배터리 소모 최적화 (위치 업데이트 주기 조정으로 40% 절감). PM 및 캐릭터 디자이너로서 6인 팀 프로젝트 기획·관리하며 캐릭터 디자인에 참여',
      'Result: 테스트 사용자 주간 이동 거리 평균 35% 증가. "게임하러 나간다" 만족도 85%. 헬스케어 도메인 게임화 UX와 배터리 최적화 경험 확보.'
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
      'Problem: 테스트 사용자 20명이 "분위기 좋은 카페 찾기" 위해 평균 3개 앱 사용, 검색 시간 평균 10분 소요.',
      'Action: Kakao Map API 연동으로 현재 위치 기반 카페 검색·필터링 구현(전체 개발의 100% 담당). TypeScript로 타입 안정성 확보하고, Remix.js + Prisma + SQLite로 풀스택 아키텍처 설계. 카페 리뷰 CRUD와 베스트 리뷰어 TOP 10 집계 로직 구현. Tailwind CSS로 모바일·데스크톱 반응형 UI 완성.',
      'Result: "지도+리뷰 통합으로 선택이 즐겁다" 만족도 85%. 이 프로젝트의 위치 기반 검색·지도 API 경험이 이후 iOS MapKit 프로젝트(Show(X), Rootrip) 개발의 직접적 기반이 됨.'
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
      'Problem: React 학습 과정에서 컴포넌트 설계, 상태 관리, 라우팅을 실제 서비스 수준으로 연습할 프로젝트 필요.',
      'Action: React + Vite + Tailwind CSS로 상품 목록·상세·장바구니·필터/정렬 기능 구현(전체 개발의 100% 담당). 15+ 개 컴포넌트를 작은 단위로 분리해 재사용성 확보. useState/useContext로 전역 상태 관리 실습. Vercel 배포 자동화 설정.',
      'Result: React 컴포넌트 기반 아키텍처와 상태 관리 개념을 실전 적용. 이 경험이 SwiftUI View 계층 구조와 @State/@ObservedObject 학습을 3배 가속화. 웹 선언형 UI 경험을 iOS로 자연스럽게 전환하는 기반 확보.'
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
