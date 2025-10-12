import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const HomePage = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'Next.js와 Notion으로 블로그 만들기',
      excerpt: 'Notion API를 활용해서 개인 블로그를 만드는 과정을 공유합니다.',
      date: '2025-10-12',
      readTime: '5분',
      category: 'Development'
    },
    {
      id: 2,
      title: 'TypeScript 타입 가드 완벽 정리',
      excerpt: 'TypeScript에서 타입을 안전하게 체크하는 방법들을 알아봅시다.',
      date: '2025-10-10',
      readTime: '7분',
      category: 'TypeScript'
    },
    {
      id: 3,
      title: 'React 18의 새로운 기능들',
      excerpt: 'Concurrent Features, Suspense, Automatic Batching 등을 살펴봅시다.',
      date: '2025-10-08',
      readTime: '10분',
      category: 'React'
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              안녕하세요! 👋<br />
              <span className="text-gradient">개발자 WakeupJin</span>입니다
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              프론트엔드 개발과 새로운 기술을 탐구하며, 
              배운 것들을 기록하고 공유하는 공간입니다.
              함께 성장하는 개발자가 되고 싶습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary">
                블로그 글 보기
              </Link>
              <Link href="/projects" className="btn-secondary">
                프로젝트 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">기술 스택</h2>
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
            개발, 협업, 또는 그냥 안녕하다는 인사라도 좋습니다. 
            언제든 연락주세요!
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
