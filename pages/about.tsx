import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const AboutPage = () => {
  const experiences = [
    {
      period: '2024 - 현재',
      title: 'GTM (Go-To-Market)',
      company: '토스페이먼츠',
      description: '퀵계좌이체 제품 성장 담당, 데이터 기반 제품 전략 수립 및 실행',
      skills: ['제품성장', 'GTM', '데이터분석', '사업개발']
    },
    {
      period: '202X - 202X',
      title: '미믹',
      company: '미믹 (영어교육 프랜차이즈)',
      description: '모국어 습득 원리를 활용한 놀이형 영어교육 프랜차이즈',
      skills: ['영어교육', '프랜차이즈', '교육기획', '사업운영']
    },

  ];

  const interests = [
    {
      icon: '🎓',
      title: '영어교육 혁신',
      description: '모국어 습득 원리를 활용한 놀이형 영어교육 방법론을 연구합니다.'
    },
    {
      icon: '📈',
      title: '제품 성장',
      description: '데이터 기반 제품 전략과 사용자 중심의 성장 방법론을 추구합니다.'
    },
    {
      icon: '🏢',
      title: '프랜차이즈 운영',
      description: '교육과 비즈니스의 균형을 맞춘 지속가능한 사업 모델을 구축합니다.'
    },
    {
      icon: '💡',
      title: '교육과 비즈니스의 융합',
      description: '핀테크 경험을 교육에 접목하여 새로운 가치를 창출합니다.'
    }
  ];

  return (
    <Layout 
      title="About - 이강진"
      description="이강진의 교육과 핀테크 여정에 대해 알아보세요."
    >
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-md text-gray-600 leading-relaxed">
              안녕하세요! 미믹이라는 놀이형 영어교육 프랜차이즈를 준비하며,
              토스페이먼츠에서 퀵계좌이체라는 제품의 GTM을 담당하고 있는 이강진입니다. 
              기존의 방식을 뒤엎고, 새로운 가치를 만들어가고 싶습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-4 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">나의 이야기</h2>
            <div className="prose-custom">
              <p className="text-md text-gray-600 mb-6">
                영어 교육에 대한 관심은 18년 전 우연히 발견한 정찬용 박사의 '영어공부 절대로 하지마라'와 '토스 잉글리시'로부터 시작 되었습니다. 정찬용 박사와의 운명적인 만남과 인생의 몇가지 전환점을 통해 영어 교육을 바꾸고 싶다는 열망을 가지게 되었습니다.
              </p>
              <p className="text-md text-gray-600 mb-6">
                핀테크 분야에서의 경험은 제품 성장과 사용자 중심 사고를 배우고 있습니다. 
                이 경험을 교육에 접목하여, 데이터 기반의 교육 효과 측정과 
                모국어 습득 원리를 바탕으로 차원이 다른 학습 경험을 제공하는 미믹이라는 영어 교육 프랜차이즈를 창업 준비중입니다.
              </p>
              <p className="text-md text-gray-600">
                현재는 토스페이먼츠에서 퀵계좌이체 제품 성장을 담당하며, 
                교육과 핀테크 두 분야의 경험을 융합하여 더 나은 교육 솔루션을 만들어가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">경험</h2>
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
            영어 교육, 투자 전략, 프랜차이즈에 대한 이야기나 협업 제안, 
            또는 단순한 인사라도 환영합니다!
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
