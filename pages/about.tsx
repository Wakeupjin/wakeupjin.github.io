import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const AboutPage = () => {
  const experiences = [
    {
      period: '2024 - 현재',
      title: '프론트엔드 개발자',
      company: '스타트업',
      description: 'React, Next.js를 활용한 웹 애플리케이션 개발',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      period: '2023 - 2024',
      title: '웹 개발 공부',
      company: '개인 학습',
      description: '기초부터 차근차근 웹 개발 기술 습득',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  const interests = [
    {
      icon: '💻',
      title: '프론트엔드 개발',
      description: '사용자 경험을 중시하는 인터페이스를 만들어갑니다.'
    },
    {
      icon: '🎨',
      title: 'UI/UX 디자인',
      description: '아름답고 직관적인 디자인에 관심이 많습니다.'
    },
    {
      icon: '📝',
      title: '기술 블로깅',
      description: '배운 것을 정리하고 공유하는 것을 좋아합니다.'
    },
    {
      icon: '🚀',
      title: '새로운 기술',
      description: '최신 기술 트렌드를 따라가며 끊임없이 학습합니다.'
    }
  ];

  return (
    <Layout 
      title="About - WakeupJin"
      description="WakeupJin의 개발 여정과 관심사에 대해 알아보세요."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              안녕하세요! 프론트엔드 개발자 WakeupJin입니다. 
              사용자 중심의 웹 애플리케이션을 만들며, 
              깔끔하고 효율적인 코드를 추구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">나의 이야기</h2>
            <div className="prose-custom">
              <p className="text-lg text-gray-600 mb-6">
                개발을 시작한 것은 우연한 계기였습니다. 
                처음에는 단순히 웹사이트를 만들어보고 싶다는 호기심에서 시작했지만, 
                코드로 생각을 구현하고 문제를 해결하는 과정에서 큰 즐거움을 느꼈습니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                특히 사용자가 직접 상호작용하는 프론트엔드 영역에 매력을 느껴, 
                React와 TypeScript를 중심으로 학습하며 성장해왔습니다. 
                현재는 Next.js와 함께 더욱 효율적이고 성능 좋은 웹 애플리케이션을 만들기 위해 노력하고 있습니다.
              </p>
              <p className="text-lg text-gray-600">
                앞으로도 꾸준히 학습하며, 좋은 개발자로 성장하고 싶습니다. 
                이 블로그를 통해 배운 것들을 정리하고, 같은 길을 걷는 분들과 지식을 나누고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">경험</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-sm font-medium text-primary-600">{exp.period}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">관심사</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{interest.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 이야기해보세요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            개발에 대한 이야기, 협업 제안, 또는 단순한 인사라도 환영합니다!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              연락하기
            </Link>
            <Link href="/blog" className="btn-secondary">
              블로그 보기
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
