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

// 개발 환경에서 사용할 더미 데이터 (영어교육, 주식투자, GTM 관련)
export const getDummyBlogPosts = (): BlogPost[] => [
  {
    id: '1',
    title: '초등학생 영어교육, 놀이로 시작하는 모국어 습득법',
    excerpt: '미믹 프랜차이즈에서 실제로 사용하는 놀이형 영어 교육의 핵심 원리를 공유합니다.',
    content: '아이들이 자연스럽게 언어를 습득하는 과정을 연구하며...',
    date: '2025-01-15',
    tags: ['영어교육', '모국어습득', '놀이교육'],
    published: true,
    readTime: '8분',
    category: '영어교육'
  },
  {
    id: '2',
    title: '퀵계좌이체 제품 성장, 제 1원칙 사고의 힘',
    excerpt: '토스페이먼츠에서 퀵계좌이체 제품을 성장시킨 GTM 전략과 인사이트를 공유합니다.',
    content: '제품 성장을 위한 데이터 분석과 사용자 인사이트...',
    date: '2025-01-12',
    tags: ['제품성장', 'GTM', '데이터분석'],
    published: true,
    readTime: '12분',
    category: '핀테크'
  },
  {
    id: '3',
    title: '프랜차이즈 운영, 교육과 비즈니스의 균형점',
    excerpt: '미믹 프랜차이즈 운영 경험을 통해 배운 교육 사업의 성공 요소들을 정리합니다.',
    content: '교육 사업의 지속가능성을 위한 운영 노하우...',
    date: '2025-01-10',
    tags: ['프랜차이즈', '교육사업', '운영노하우'],
    published: true,
    readTime: '10분',
    category: '프랜차이즈'
  },
  {
    id: '4',
    title: '6-12세 아이들을 위한 영어 놀이 활동 10가지',
    excerpt: '미믹에서 실제로 사용하는 효과적인 영어 놀이 활동들을 소개합니다.',
    content: '연령대별 맞춤 놀이 활동...',
    date: '2025-01-08',
    tags: ['영어놀이', '초등교육', '활동자료'],
    published: true,
    readTime: '6분',
    category: '영어교육'
  },
  {
    id: '5',
    title: '결제 서비스 UX, 사용자 여정 최적화하기',
    excerpt: '토스페이먼츠에서 배운 결제 서비스 UX 개선 경험을 공유합니다.',
    content: '결제 과정에서의 사용자 경험 개선...',
    date: '2025-01-05',
    tags: ['UX', '결제서비스', '사용자경험'],
    published: true,
    readTime: '9분',
    category: '핀테크'
  }
];

export const getDummyProjects = (): Project[] => [
  {
    id: '1',
    name: '미믹 영어교육 프로그램',
    description: '모국어 습득 원리를 활용한 놀이형 영어교육 커리큘럼',
    techStack: ['영어교육', '모국어습득', '놀이교육', '커리큘럼'],
    demoUrl: 'https://mimic-english.com',
    featured: true
  },
  {
    id: '2',
    name: '퀵계좌이체 제품 성장',
    description: '토스페이먼츠에서 퀵계좌이체 제품의 사용자 성장 및 전환율 개선',
    techStack: ['제품성장', 'GTM', '데이터분석', '사용자경험'],
    featured: true
  },
  {
    id: '3',
    name: '미믹 프랜차이즈 운영 시스템',
    description: '교육과 비즈니스의 균형을 맞춘 프랜차이즈 운영 솔루션',
    techStack: ['프랜차이즈', '운영시스템', '교육관리', '사업개발'],
    featured: false
  },
  {
    id: '4',
    name: '결제 서비스 UX 개선',
    description: '사용자 여정 최적화를 통한 결제 전환율 향상',
    techStack: ['UX/UI', '결제서비스', '사용자분석', 'A/B테스트'],
    featured: false
  }
];
