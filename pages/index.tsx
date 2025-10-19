import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const HomePage = () => {
  const recentPosts = [
    {
      id: 1,
      title: '초등학생 영어교육, 놀이로 시작하는 모국어 습득법',
      excerpt: '미믹 프랜차이즈에서 개발한 놀이형 영어 교육의 핵심 원리를 공유합니다.',
      date: '2025-01-15',
      readTime: '8분',
      category: '영어교육'
    },
    {
      id: 2,
      title: '퀵계좌이체 제품 성장, 데이터 기반 의사결정의 힘',
      excerpt: '토스페이먼츠에서 퀵계좌이체 제품을 성장시킨 GTM 전략과 인사이트를 공유합니다.',
      date: '2025-01-12',
      readTime: '12분',
      category: '핀테크'
    },
    {
      id: 3,
      title: '프랜차이즈 운영, 교육과 비즈니스의 균형점',
      excerpt: '미믹 프랜차이즈 운영 경험을 통해 배운 교육 사업의 성공 요소들을 정리합니다.',
      date: '2025-01-10',
      readTime: '10분',
      category: '프랜차이즈'
    }
  ];

  const skills = [
    '영어교육', '프랜차이즈', '제품성장', 'GTM', '데이터분석', '교육기획', '사업개발'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              안녕하세요! 👋<br />
              <span className="text-gradient">이강진</span>입니다
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              
              토스페이먼츠에서 퀵계좌이체라는 제품 성장을 위해 다양한 전략을 시도하고 있으며<br />
              개인적으로는 미믹이라는 놀이형 영어 교육 프랜차이즈를 준비중입니다.
              <br />
              정찬용 박사와 함께 대한민국 영어교육을 바꾸고 영어 공용화를 통하여 아이들의 삶을 다채롭게 만들고 싶습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary">
                블로그 글 보기
              </Link>
              <Link href="/projects" className="btn-secondary">
                미믹 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">관심 분야</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">최근 글</h2>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
              전체 글 보기 →
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.id} className="card">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      읽어보기 →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">함께 이야기해요</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            영어교육과 주식투자에 대한 이야기나 문의가 있다면 언제든 연락주세요!
          </p>
          <Link href="/contact" className="btn-primary">
            연락하기
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
