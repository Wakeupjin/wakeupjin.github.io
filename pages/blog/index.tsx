import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { BlogPost, getDummyBlogPosts } from '@/lib/notion';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 카테고리 목록 추출
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  // 필터링된 포스트
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout 
      title="Blog - WakeupJin"
      description="개발과 기술에 관한 이야기들을 공유합니다."
    >
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            개발하면서 배운 것들, 문제 해결 과정, 그리고 기술에 대한 생각들을 기록합니다.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="글 검색..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  총 {filteredPosts.length}개의 글
                  {searchTerm && ` "${searchTerm}" 검색 결과`}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="card hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        <Link 
                          href={`/blog/${post.id}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <time className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('ko-KR')}
                        </time>
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
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">새 글 알림 받기</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            새로운 블로그 글이 올라오면 이메일로 알려드릴게요.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button className="btn-primary whitespace-nowrap">
              구독하기
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // 실제 환경에서는 getNotionService().getBlogPosts() 사용
  const posts = getDummyBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 3600, // 1시간마다 재생성
  };
};

export default BlogPage;
