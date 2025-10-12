# WakeupJin Blog

홍민지님 스타일의 미니멀한 개인 블로그입니다. Next.js와 Notion API를 활용하여 Notion에서 글을 작성하면 자동으로 블로그에 업데이트됩니다.

## ✨ 기능

- 📝 **Notion 연동**: Notion에서 글 작성 → 자동으로 블로그 업데이트
- 🎨 **미니멀 디자인**: 깔끔하고 읽기 좋은 인터페이스
- 📱 **반응형**: 모바일/태블릿/데스크톱 최적화
- 🚀 **빠른 성능**: Next.js 정적 사이트 생성
- 🔍 **SEO 최적화**: 검색 엔진 친화적
- 🔄 **자동 배포**: GitHub Actions로 자동 빌드 및 배포

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Content**: Notion API
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/wakeupjin/wakeupjin.github.io.git
cd wakeupjin.github.io
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env.local` 파일을 만들고 다음 값들을 설정하세요:

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_BLOG_DATABASE_ID=your_blog_database_id
NOTION_PROJECTS_DATABASE_ID=your_projects_database_id
```

### 4. Notion 설정

#### 4.1 Notion Integration 생성
1. https://www.notion.so/my-integrations 에서 새 Integration 생성
2. Token을 복사하여 `NOTION_TOKEN`에 설정

#### 4.2 블로그 데이터베이스 생성
블로그 포스트용 데이터베이스를 만들고 다음 속성들을 추가하세요:

| 속성명 | 타입 | 설명 |
|--------|------|------|
| Title | Title | 글 제목 |
| Published | Checkbox | 발행 여부 |
| Date | Date | 작성일 |
| Excerpt | Text | 요약 |
| Category | Select | 카테고리 |
| Tags | Multi-select | 태그 |

#### 4.3 프로젝트 데이터베이스 생성
프로젝트용 데이터베이스를 만들고 다음 속성들을 추가하세요:

| 속성명 | 타입 | 설명 |
|--------|------|------|
| Name | Title | 프로젝트 이름 |
| Description | Text | 설명 |
| TechStack | Multi-select | 기술 스택 |
| GitHub | URL | GitHub 링크 |
| Demo | URL | 데모 링크 |
| Image | Files | 프로젝트 이미지 |
| Featured | Checkbox | 주요 프로젝트 여부 |

#### 4.4 데이터베이스 공유
각 데이터베이스를 생성한 Integration과 공유하고, 데이터베이스 ID를 환경변수에 설정하세요.

### 5. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 6. 빌드 및 배포

```bash
npm run build
npm run export
```

## 📝 사용법

### 새 블로그 글 작성
1. Notion 블로그 데이터베이스에 새 페이지 생성
2. 제목, 카테고리, 태그 등 설정
3. 글 내용 작성
4. `Published` 체크박스 활성화
5. GitHub Actions가 자동으로 사이트 업데이트

### 프로젝트 추가
1. Notion 프로젝트 데이터베이스에 새 페이지 생성
2. 프로젝트 정보 입력
3. 자동으로 사이트 업데이트

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.js`에서 primary 색상을 변경할 수 있습니다:

```js
colors: {
  primary: {
    // 원하는 색상으로 변경
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### 개인 정보 수정
다음 파일들에서 개인 정보를 수정하세요:
- `components/Layout.tsx` - 이름, 로고
- `pages/index.tsx` - 자기소개
- `pages/about.tsx` - 상세 프로필
- `pages/contact.tsx` - 연락처 정보

## 📁 프로젝트 구조

```
├── components/          # React 컴포넌트
│   └── Layout.tsx      # 메인 레이아웃
├── lib/                # 유틸리티 함수
│   └── notion.ts       # Notion API 연동
├── pages/              # Next.js 페이지
│   ├── index.tsx       # 홈페이지
│   ├── about.tsx       # 소개 페이지
│   ├── blog/           # 블로그 페이지들
│   ├── projects.tsx    # 프로젝트 페이지
│   └── contact.tsx     # 연락 페이지
├── styles/             # CSS 스타일
└── .github/workflows/  # GitHub Actions
```

## 🚀 배포

### GitHub Pages 설정
1. GitHub 저장소 Settings > Pages
2. Source를 "GitHub Actions"로 설정
3. Repository secrets에 Notion 환경변수 추가:
   - `NOTION_TOKEN`
   - `NOTION_BLOG_DATABASE_ID`
   - `NOTION_PROJECTS_DATABASE_ID`

### 자동 배포
- `main` 브랜치에 푸시할 때마다 자동 배포
- 매일 정해진 시간에 자동 업데이트 (Notion 내용 동기화)
- 수동으로도 배포 가능

## 🤝 기여

이슈나 개선사항이 있으시면 언제든 Issue를 열어주세요!

## 📄 라이선스

MIT License

---

**Made with ❤️ by WakeupJin**
