import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost, getDummyBlogPosts } from '@/lib/notion';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, relatedPosts }) => {
  return (
    <Layout 
      title={`${post.title} - WakeupJin Blog`}
      description={post.excerpt}
    >
      {/* Back to Blog */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            블로그로 돌아가기
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
              <time className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <hr className="border-gray-200 mb-12" />

            {/* Content */}
            <div className="prose-custom">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-primary-600 hover:text-primary-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ className, children }) => {
                    const isInline = !className;
                    if (isInline) {
                      return <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>;
                    }
                    return (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>{children}</code>
                      </pre>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-200 bg-primary-50 pl-4 py-2 mb-6 italic">
                      {children}
                    </blockquote>
                  ),
                  ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700">{children}</li>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  이 글이 도움이 되었다면 공유해주세요!
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-primary-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 글</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="card hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link 
                        href={`/blog/${relatedPost.id}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500">
                        {new Date(relatedPost.date).toLocaleDateString('ko-KR')}
                      </time>
                      <Link 
                        href={`/blog/${relatedPost.id}`}
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
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 실제 환경에서는 getNotionService().getBlogPosts() 사용
  const posts = getDummyBlogPosts();
  
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.id as string;
  
  // 실제 환경에서는 getNotionService().getBlogPost(postId) 사용
  const posts = getDummyBlogPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // 관련 글 찾기 (같은 카테고리 또는 태그)
  const relatedPosts = posts
    .filter(p => p.id !== postId && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600,
  };
};

export default BlogPostPage;
