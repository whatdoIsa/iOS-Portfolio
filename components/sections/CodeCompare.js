'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaApple } from 'react-icons/fa';
import { SiSwift, SiJavascript } from 'react-icons/si';
import { HiLightBulb } from 'react-icons/hi';
import { useTranslation } from '@/lib/i18n';


export default function CodeCompare() {
  const { t, locale } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('state');
  const [examples, setExamples] = useState({});

  useEffect(() => {
    const loadExamples = async () => {
      try {
        const currentLocale = locale || 'ko';
        let localeData;
        
        if (currentLocale === 'en') {
          localeData = await import('@/locales/en.json');
        } else {
          localeData = await import('@/locales/ko.json');
        }
        
        setExamples(localeData.default.compare?.examples || {});
      } catch (error) {
        console.error('Failed to load examples:', error);
        setExamples({});
      }
    };
    
    loadExamples();
  }, [locale]);

  const codeExamples = [
    {
      id: 'state',
      title: examples.state?.title || 'State Management',
      description: examples.state?.description || 'React\'s useState and SwiftUI\'s @State share the same declarative UI philosophy.',
      react: {
        language: t('compare.labels.react'),
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
        language: t('compare.labels.swiftui'),
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
      insights: examples.state?.insights || [
        'useState ↔ @State: Similar state declaration patterns',
        'setCount() ↔ count += 1: Identical state update patterns',
        'UI Re-rendering automation: Both frameworks automatically reflect state changes'
      ]
    },
    {
      id: 'props',
      title: examples.props?.title || 'Props & Parameters',
      description: examples.props?.description || 'React\'s props and SwiftUI\'s parameters have identical data passing methods between components.',
      react: {
        language: t('compare.labels.react'),
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

// Usage
<UserProfile
  name="Dean"
  age={25}
  role="iOS Developer"
/>`
      },
      swift: {
        language: t('compare.labels.swiftui'),
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

// Usage
UserProfile(
  name: "Dean",
  age: 25,
  role: "iOS Developer"
)`
      },
      insights: examples.props?.insights || [
        'props ↔ parameters: Same data passing approach',
        'destructuring ↔ property: Similar data access patterns',
        'Reusability: Both frameworks maximize component reusability'
      ]
    },
    {
      id: 'list',
      title: examples.list?.title || 'List Rendering',
      description: examples.list?.description || 'React\'s map and SwiftUI\'s ForEach have very similar approaches to rendering lists.',
      react: {
        language: t('compare.labels.react'),
        icon: FaReact,
        color: 'text-ios-blue',
        code: `function ProjectList({ projects }) {
  return (
    <ScrollView>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </ScrollView>
  );
}`
      },
      swift: {
        language: t('compare.labels.swiftui'),
        icon: FaApple,
        color: 'text-ios-orange',
        code: `struct ProjectList: View {
  let projects: [Project]
  
  var body: some View {
    ScrollView {
      ForEach(projects, id: \\.id) { project in
        ProjectCard(
          title: project.title,
          description: project.description
        )
      }
    }
  }
}`
      },
      insights: examples.list?.insights || [
        'map() ↔ ForEach: Identical array iteration and rendering',
        'key ↔ id: Shared concept of unique identifiers for items',
        'Performance optimization: Both frameworks support efficient list rendering'
      ]
    },
    {
      id: 'conditional',
      title: examples.conditional?.title || 'Conditional Rendering',
      description: examples.conditional?.description || 'React\'s conditional rendering and SwiftUI\'s if statements have the same logical structure.',
      react: {
        language: t('compare.labels.react'),
        icon: FaReact,
        color: 'text-ios-blue',
        code: `function WelcomeScreen({ user, isLoggedIn }) {
  return (
    <View>
      {isLoggedIn ? (
        <Text>Welcome, {user.name}!</Text>
      ) : (
        <LoginButton />
      )}
      
      {user.isPremium && <PremiumFeatures />}
    </View>
  );
}`
      },
      swift: {
        language: t('compare.labels.swiftui'),
        icon: FaApple,
        color: 'text-ios-orange',
        code: `struct WelcomeScreen: View {
  let user: User
  let isLoggedIn: Bool
  
  var body: some View {
    VStack {
      if isLoggedIn {
        Text("Welcome, \\(user.name)!")
      } else {
        LoginButton()
      }
      
      if user.isPremium {
        PremiumFeatures()
      }
    }
  }
}`
      },
      insights: examples.conditional?.insights || [
        'Ternary operator ↔ if else: Identical conditional logic structure',
        '&& operator ↔ if: Similar simple conditional rendering',
        'State-based UI: Both frameworks support dynamic UI changes based on state'
      ]
    }
  ];

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
            {t('compare.title')}
          </h2>
          <p className="text-lg text-ios-gray-600 dark:text-ios-gray-400 max-w-2xl mx-auto">
            {t('compare.subtitle')}
            <br />
            {t('compare.description')}
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
                {t('compare.labels.insights')}
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
            {t('compare.conclusion')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
