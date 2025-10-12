import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  published: boolean;
  readTime: string;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

class NotionService {
  private notion: Client;
  private n2m: NotionToMarkdown;
  
  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    this.n2m = new NotionToMarkdown({ notionClient: this.notion });
  }

  // 블로그 포스트 목록 가져오기
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await this.notion.databases.query({
        database_id: process.env.NOTION_BLOG_DATABASE_ID!,
        filter: {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      });

      const posts = await Promise.all(
        response.results.map(async (page: any) => {
          const content = await this.getPageContent(page.id);
          return this.formatBlogPost(page, content);
        })
      );

      return posts;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  // 특정 블로그 포스트 가져오기
  async getBlogPost(id: string): Promise<BlogPost | null> {
    try {
      const page = await this.notion.pages.retrieve({ page_id: id });
      const content = await this.getPageContent(id);
      return this.formatBlogPost(page, content);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  }

  // 프로젝트 목록 가져오기
  async getProjects(): Promise<Project[]> {
    try {
      const response = await this.notion.databases.query({
        database_id: process.env.NOTION_PROJECTS_DATABASE_ID!,
        sorts: [
          {
            property: 'Featured',
            direction: 'descending',
          },
        ],
      });

      return response.results.map((page: any) => this.formatProject(page));
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  // 페이지 내용을 마크다운으로 변환
  private async getPageContent(pageId: string): Promise<string> {
    try {
      const mdblocks = await this.n2m.pageToMarkdown(pageId);
      return this.n2m.toMarkdownString(mdblocks).parent;
    } catch (error) {
      console.error('Error converting page to markdown:', error);
      return '';
    }
  }

  // 블로그 포스트 데이터 포맷팅
  private formatBlogPost(page: any, content: string): BlogPost {
    const properties = page.properties;
    
    return {
      id: page.id,
      title: this.getPlainText(properties.Title || properties.Name),
      excerpt: this.getPlainText(properties.Excerpt) || content.substring(0, 200) + '...',
      content,
      date: properties.Date?.date?.start || new Date().toISOString(),
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: properties.Published?.checkbox || false,
      readTime: this.calculateReadTime(content),
      category: properties.Category?.select?.name || 'General',
    };
  }

  // 프로젝트 데이터 포맷팅
  private formatProject(page: any): Project {
    const properties = page.properties;
    
    return {
      id: page.id,
      name: this.getPlainText(properties.Name),
      description: this.getPlainText(properties.Description),
      techStack: properties.TechStack?.multi_select?.map((tech: any) => tech.name) || [],
      githubUrl: this.getUrl(properties.GitHub),
      demoUrl: this.getUrl(properties.Demo),
      imageUrl: this.getFileUrl(properties.Image),
      featured: properties.Featured?.checkbox || false,
    };
  }

  // 플레인 텍스트 추출
  private getPlainText(property: any): string {
    if (!property) return '';
    
    if (property.title) {
      return property.title.map((text: any) => text.plain_text).join('');
    }
    
    if (property.rich_text) {
      return property.rich_text.map((text: any) => text.plain_text).join('');
    }
    
    return '';
  }

  // URL 추출
  private getUrl(property: any): string | undefined {
    return property?.url || undefined;
  }

  // 파일 URL 추출
  private getFileUrl(property: any): string | undefined {
    if (property?.files && property.files.length > 0) {
      const file = property.files[0];
      return file.file?.url || file.external?.url;
    }
    return undefined;
  }

  // 읽기 시간 계산 (평균 읽기 속도: 200단어/분)
  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes}분`;
  }
}

// 싱글톤 인스턴스
let notionService: NotionService | null = null;

export const getNotionService = (): NotionService => {
  if (!notionService) {
    notionService = new NotionService();
  }
  return notionService;
};

// 개발 환경에서 사용할 더미 데이터
export const getDummyBlogPosts = (): BlogPost[] => [
  {
    id: '1',
    title: 'Next.js와 Notion으로 블로그 만들기',
    excerpt: 'Notion API를 활용해서 개인 블로그를 만드는 과정을 공유합니다.',
    content: '# Next.js와 Notion으로 블로그 만들기\n\n이번 포스트에서는...',
    date: '2025-10-12',
    tags: ['Next.js', 'Notion', 'Blog'],
    published: true,
    readTime: '5분',
    category: 'Development'
  },
  {
    id: '2',
    title: 'TypeScript 타입 가드 완벽 정리',
    excerpt: 'TypeScript에서 타입을 안전하게 체크하는 방법들을 알아봅시다.',
    content: '# TypeScript 타입 가드\n\n타입 가드는...',
    date: '2025-10-10',
    tags: ['TypeScript', 'Type Safety'],
    published: true,
    readTime: '7분',
    category: 'TypeScript'
  },
  {
    id: '3',
    title: 'React 18의 새로운 기능들',
    excerpt: 'Concurrent Features, Suspense, Automatic Batching 등을 살펴봅시다.',
    content: '# React 18 새로운 기능들\n\nReact 18에서는...',
    date: '2025-10-08',
    tags: ['React', 'React 18'],
    published: true,
    readTime: '10분',
    category: 'React'
  }
];

export const getDummyProjects = (): Project[] => [
  {
    id: '1',
    name: 'Personal Blog',
    description: 'Next.js와 Notion API를 활용한 개인 블로그',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API'],
    githubUrl: 'https://github.com/wakeupjin/blog',
    demoUrl: 'https://wakeupjin.github.io',
    featured: true
  },
  {
    id: '2',
    name: 'Todo App',
    description: '할 일 관리를 위한 간단한 웹 애플리케이션',
    techStack: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/wakeupjin/todo-app',
    featured: false
  }
];
