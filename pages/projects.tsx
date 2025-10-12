import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Project, getDummyProjects } from '@/lib/notion';

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <Layout 
      title="Projects - WakeupJin"
      description="지금까지 진행한 프로젝트들을 소개합니다."
    >
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            개발하면서 만든 프로젝트들입니다. 각 프로젝트를 통해 새로운 기술을 배우고 성장해나가고 있습니다.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">주요 프로젝트</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <div key={project.id} className="card overflow-hidden">
                  {/* Project Image */}
                  {project.imageUrl && (
                    <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">기술 스택</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">다른 프로젝트들</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <div key={project.id} className="card">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">기술 스택</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
                <div className="space-y-2">
                  <div className="text-gray-600">React, Next.js</div>
                  <div className="text-gray-600">TypeScript, JavaScript</div>
                  <div className="text-gray-600">Tailwind CSS, CSS</div>
                  <div className="text-gray-600">HTML5</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Others</h3>
                <div className="space-y-2">
                  <div className="text-gray-600">Git, GitHub</div>
                  <div className="text-gray-600">VS Code</div>
                  <div className="text-gray-600">Figma</div>
                  <div className="text-gray-600">Notion</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning</h3>
                <div className="space-y-2">
                  <div className="text-gray-600">Node.js</div>
                  <div className="text-gray-600">Python</div>
                  <div className="text-gray-600">Database</div>
                  <div className="text-gray-600">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 프로젝트 해보실래요?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회가 있다면 언제든 연락주세요!
          </p>
          <Link href="/contact" className="btn-primary">
            연락하기
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // 실제 환경에서는 getNotionService().getProjects() 사용
  const projects = getDummyProjects();

  return {
    props: {
      projects,
    },
    revalidate: 3600,
  };
};

export default ProjectsPage;
