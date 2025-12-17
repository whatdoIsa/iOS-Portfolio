'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaApple } from 'react-icons/fa';
import { SiSwift, SiJavascript } from 'react-icons/si';
import { HiLightBulb } from 'react-icons/hi';

const codeExamples = [
  {
    id: 'state',
    title: '상태 관리 (State Management)',
    description: 'React의 useState와 SwiftUI의 @State는 동일한 선언형 UI 철학을 공유합니다.',
    react: {
      language: 'React',
      icon: FaReact,
      color: 'text-ios-blue',
      code: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}`
    },
    swift: {
      language: 'SwiftUI',
      icon: FaApple,
      color: 'text-ios-orange',
      code: `struct CounterView: View {
  @State private var count = 0

  var body: some View {
    VStack {
      Text("Count: \\(count)")
      Button("Increment") {
        count += 1
      }
    }
  }
}`
    },
    insights: [
      'useState ↔ @State: 상태 선언 방식이 유사',
      'setCount() ↔ count += 1: 상태 업데이트 패턴 동일',
      'UI 재렌더링 자동화: 두 프레임워크 모두 상태 변경 시 자동 반영'
    ]
  },
  {
    id: 'props',
    title: '데이터 전달 (Props & Parameters)',
    description: 'React의 props와 SwiftUI의 parameters는 컴포넌트 간 데이터 전달 방식이 동일합니다.',
    react: {
      language: 'React',
      icon: FaReact,
      color: 'text-ios-blue',
      code: `function UserProfile({ name, age, role }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>Age: {age}</Text>
      <Badge role={role} />
    </View>
  );
}

// 사용
<UserProfile
  name="송헌"
  age={25}
  role="iOS Developer"
/>`
    },
    swift: {
      language: 'SwiftUI',
      icon: FaApple,
      color: 'text-ios-orange',
      code: `struct UserProfile: View {
  let name: String
  let age: Int
  let role: String

  var body: some View {
    VStack {
      Text(name)
      Text("Age: \\(age)")
      Badge(role: role)
    }
  }
}

// 사용
UserProfile(
  name: "송헌",
  age: 25,
  role: "iOS Developer"
)`
    },
    insights: [
      'Props ↔ Parameters: 동일한 데이터 주입 패턴',
      '타입 안정성: TypeScript와 Swift 모두 강타입 언어',
      '재사용 가능한 컴포넌트 설계 철학 동일'
    ]
  },
  {
    id: 'list',
    title: '리스트 렌더링 (List Rendering)',
    description: 'map() 함수와 ForEach는 배열 데이터를 UI로 변환하는 동일한 패턴입니다.',
    react: {
      language: 'React',
      icon: FaReact,
      color: 'text-ios-blue',
      code: `function ProjectList({ projects }) {
  return (
    <ScrollView>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.desc}
        />
      ))}
    </ScrollView>
  );
}`
    },
    swift: {
      language: 'SwiftUI',
      icon: FaApple,
      color: 'text-ios-orange',
      code: `struct ProjectList: View {
  let projects: [Project]

  var body: some View {
    ScrollView {
      ForEach(projects) { project in
        ProjectCard(
          title: project.title,
          description: project.desc
        )
      }
    }
  }
}`
    },
    insights: [
      'map() ↔ ForEach: 배열 순회 및 UI 생성 패턴 동일',
      'key ↔ Identifiable: 고유 식별자를 통한 성능 최적화',
      'ScrollView 개념 공유: 스크롤 가능한 컨테이너'
    ]
  },
  {
    id: 'conditional',
    title: '조건부 렌더링 (Conditional Rendering)',
    description: '조건에 따라 다른 UI를 표시하는 로직이 양쪽 모두 유사합니다.',
    react: {
      language: 'React',
      icon: FaReact,
      color: 'text-ios-blue',
      code: `function LoginButton({ isLoggedIn, user }) {
  return (
    <View>
      {isLoggedIn ? (
        <Text>Welcome, {user.name}!</Text>
      ) : (
        <Button title="Login" />
      )}
    </View>
  );
}`
    },
    swift: {
      language: 'SwiftUI',
      icon: FaApple,
      color: 'text-ios-orange',
      code: `struct LoginButton: View {
  let isLoggedIn: Bool
  let user: User?

  var body: some View {
    VStack {
      if isLoggedIn, let user = user {
        Text("Welcome, \\(user.name)!")
      } else {
        Button("Login") { }
      }
    }
  }
}`
    },
    insights: [
      '삼항 연산자 ↔ if-else: 조건부 렌더링 패턴 동일',
      'JSX ↔ ViewBuilder: 선언형 UI 빌더 문법',
      '상태에 따른 UI 자동 업데이트'
    ]
  }
];

export default function CodeCompare() {
  const [selectedTab, setSelectedTab] = useState(codeExamples[0].id);
  const currentExample = codeExamples.find(ex => ex.id === selectedTab);

  return (
    <section id="compare" className="section-padding bg-ios-gray-50 dark:bg-ios-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            선언형 UI의 본질은 하나
          </h2>
          <p className="text-lg text-ios-gray-600 dark:text-ios-gray-400 max-w-2xl mx-auto">
            React와 SwiftUI의 코드를 비교하며 핵심 개념의 유사성을 확인하세요.
            <br />
            웹 프론트엔드 경험이 iOS 개발에 얼마나 큰 강점이 되는지 보여드립니다.
          </p>
        </motion.div>

        {/* 탭 네비게이션 */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {codeExamples.map((example, index) => (
            <motion.button
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedTab(example.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTab === example.id
                  ? 'bg-ios-blue text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-ios-gray-700 text-ios-gray-700 dark:text-ios-gray-300 hover:bg-ios-gray-100 dark:hover:bg-ios-gray-600'
              }`}
            >
              {example.title}
            </motion.button>
          ))}
        </div>

        {/* 코드 비교 영역 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card-ios p-6 sm:p-8"
          >
            {/* 설명 */}
            <p className="text-center text-ios-gray-600 dark:text-ios-gray-400 mb-8">
              {currentExample.description}
            </p>

            {/* 코드 블록 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* React 코드 */}
              <div className="bg-ios-gray-900 rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center space-x-2 mb-4">
                  <currentExample.react.icon className={`${currentExample.react.color} text-2xl`} />
                  <h3 className="text-white font-semibold">{currentExample.react.language}</h3>
                  <SiJavascript className="text-ios-yellow text-lg ml-auto" />
                </div>
                <pre className="text-sm text-ios-gray-100 font-mono leading-relaxed">
                  <code>{currentExample.react.code}</code>
                </pre>
              </div>

              {/* SwiftUI 코드 */}
              <div className="bg-ios-gray-900 rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center space-x-2 mb-4">
                  <currentExample.swift.icon className={`${currentExample.swift.color} text-2xl`} />
                  <h3 className="text-white font-semibold">{currentExample.swift.language}</h3>
                  <SiSwift className="text-ios-orange text-lg ml-auto" />
                </div>
                <pre className="text-sm text-ios-gray-100 font-mono leading-relaxed">
                  <code>{currentExample.swift.code}</code>
                </pre>
              </div>
            </div>

            {/* 인사이트 */}
            <div className="bg-gradient-to-r from-ios-blue/10 to-ios-purple/10 dark:from-ios-blue/20 dark:to-ios-purple/20 rounded-xl p-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <HiLightBulb className="text-xl mr-2 text-ios-yellow" />
                핵심 인사이트
              </h4>
              <ul className="space-y-2">
                {currentExample.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-ios-blue mr-2">▸</span>
                    <span className="text-sm text-ios-gray-700 dark:text-ios-gray-300">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 하단 강조 문구 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-ios-gray-600 dark:text-ios-gray-400">
            <strong className="text-ios-blue">React 경험</strong>이 있다면 SwiftUI는{' '}
            <strong className="text-ios-orange">빠르게 습득</strong>할 수 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
