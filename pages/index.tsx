import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const HomePage = () => {
  const [showModal, setIsShowModal] = useState(false);

  const recentPosts = [
    {
      id: 1,
      title: '초등학생 영어교육, 미믹킹 놀이로 시작하는 모국어 습득법',
      excerpt: '미믹이라는 서비스의 핵심인 놀이형 영어 교육의 핵심 원리를 공유합니다. 문자와 문법을 배우는 것이 아니라 미믹킹을 통해 영어를 배울 수 있습니다.',
      date: '2023-02-15',
      readTime: '3분',
      category: '영어 교육'
    },
    {
      id: 2,
      title: '퀵계좌이체 제품 성장, 제 1원칙 사고의 힘',
      excerpt: '제품 성장을 위한 학습 과정과 전략을 공유합니다. 제1원칙 사고를 중심으로 한 제품 전략을 소개합니다.',
      date: '2025-01-12',
      readTime: '2분',
      category: '제품 성장'
    },
    {
      id: 3,
      title: 'EPS 기반 장기투자의 중요성과 재귀성 이론 전략',
      excerpt: '성공과 실패 사례, 장기투자 전략을 공유합니다. 특히, 조지 소로스의 재귀성 이론을 중심으로 한 투자 철학을 소개합니다.',
      date: '2024-02-10',
      readTime: '5분',
      category: '투자 전략'
    }
  ];

  const skills = [
    '영어 교육', '영어 공용화', '영어 독서', '주식 투자', '투자 전략', 'AC/VC 펀딩', '프랜차이즈', '사업 운영'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              안녕하세요! 🙋‍♂️<br /> 
              <span className="text-gradient">이강진</span>이라고 합니다!
            </h1>
            <div className="text-m text-gray-600 mb-5 leading-relaxed">
            <p>토스페이먼츠에서 '퀵계좌이체'라는 제품 성장을 위해 다양한 전략을 시도하며 배우고 있고,
              '미믹'이라는 놀이형 영어 교육 프랜차이즈를 준비중입니다.</p>
               <p style={{ marginTop: '5px' }}>350만 부 밀리언셀러! '<a href="https://namu.wiki/w/%EC%98%81%EC%96%B4%EA%B3%B5%EB%B6%80%20%EC%A0%88%EB%8C%80%EB%A1%9C%20%ED%95%98%EC%A7%80%EB%A7%88%EB%9D%BC!" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">영절하</a>'와 '<a href="https://www.veritas-a.com/news/articleView.html?idxno=4717" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">토스 잉글리시</a>'의 주인공인 정찬용 박사와 함께
               대한민국의 영어 교육을 바꾸고 영어 공용화를 이뤄내 아이들의 삶을 다채롭게 만들고 싶습니다.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/blog" className="btn-primary">
                블로그 글 보기 →
              </Link>
              <Link href="/projects" className="btn-secondary">
                미믹 그들의 이야기 들으러 가기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-white">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-gray-900 mb-4">관심 분야</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-5 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-900">최근 글</h2>
            <Link href="/blog" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
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
                    <button 
                      onClick={() => setIsShowModal(true)}
                      className="hover:text-primary-600 cursor-pointer text-left"
                    >
                      {post.title}
                    </button>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <button 
                      onClick={() => setIsShowModal(true)}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium cursor-pointer"
                    >
                      읽어보기 →
                    </button>
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
            영어 교육과 주식 투자 또는 서비스 개발 및 성장에 관한  <br />이야기를 나누고 싶다면 언제든 편하게 연락주세요!
          </p>
          <Link href="/contact" className="btn-primary">
            먼저 연락해보기
          </Link>
        </div>
      </section>

      {/* 준비중 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">준비중입니다</h2>
            <p className="text-gray-600 mb-6">
              블로그를 준비하고 있습니다. <br />곧 만나보실 수 있습니다!
            </p>
            <button
              onClick={() => setIsShowModal(false)}
              className="btn-primary"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
