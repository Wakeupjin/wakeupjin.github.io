# wakeupjin.github.io 블로그 프로젝트 계획서

## 📋 프로젝트 개요
- **목표**: 홍민지님 스타일의 미니멀한 개인 블로그 + 포트폴리오 웹사이트
- **도메인**: wakeupjin.github.io
- **핵심 기능**: Notion 연동 자동 블로그 업데이트
- **스타일**: 미니멀, 깔끔한 디자인

## 🎨 디자인 컨셉
### 스타일 가이드
- **컬러**: 화이트/그레이 베이스, 포인트 컬러 1-2개
- **타이포그래피**: 깔끔한 sans-serif 폰트
- **레이아웃**: 심플한 그리드, 충분한 여백
- **반응형**: 모바일/태블릿/데스크톱 최적화

### 페이지 구성
1. **홈페이지**: 간단한 자기소개 + 최신 글 미리보기
2. **About**: 상세 자기소개, 스킬, 경력
3. **Blog**: Notion에서 가져온 블로그 글 목록
4. **Projects**: 포트폴리오/프로젝트 쇼케이스
5. **Contact**: 연락처 정보

## 🔧 기술 스택
### Frontend
- **Next.js 14**: React 기반 정적 사이트 생성
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **React Notion X**: Notion 페이지 렌더링

### 연동 & 배포
- **Notion API**: 블로그 콘텐츠 자동 동기화
- **GitHub Actions**: 자동 빌드 및 배포
- **GitHub Pages**: 무료 호스팅

## 📝 Notion 연동 구조
### Notion 데이터베이스 설정
1. **블로그 포스트 DB**
   - Title (제목)
   - Published (발행여부)
   - Date (작성일)
   - Tags (태그)
   - Summary (요약)

2. **프로젝트 DB**
   - Project Name
   - Description
   - Tech Stack
   - GitHub Link
   - Demo Link
   - Image

### 자동화 워크플로우
1. Notion에서 글 작성 → Published 체크
2. GitHub Actions 트리거 (매일 자동 또는 수동)
3. Notion API로 새 글 감지
4. 정적 사이트 빌드
5. GitHub Pages 자동 배포

## 🚀 개발 단계
### Phase 1: 기본 구조 (1-2시간)
- [x] 프로젝트 계획 수립
- [ ] Next.js 프로젝트 초기 설정
- [ ] 기본 레이아웃 및 네비게이션
- [ ] 홈페이지 기본 구조

### Phase 2: 디자인 구현 (2-3시간)
- [ ] Tailwind CSS 설정 및 커스텀 스타일
- [ ] 반응형 디자인 구현
- [ ] 컴포넌트 최적화

### Phase 3: Notion 연동 (2-3시간)
- [ ] Notion API 설정
- [ ] 블로그 포스트 가져오기 기능
- [ ] 프로젝트 데이터 연동
- [ ] 동적 페이지 생성

### Phase 4: 배포 및 최적화 (1-2시간)
- [ ] GitHub Actions 워크플로우 설정
- [ ] SEO 최적화
- [ ] 성능 최적화
- [ ] 최종 테스트 및 배포

## 📂 프로젝트 구조
```
wakeupjin.github.io/
├── components/
│   ├── Layout/
│   ├── Blog/
│   ├── Projects/
│   └── UI/
├── pages/
│   ├── index.tsx (홈)
│   ├── about.tsx
│   ├── blog/
│   ├── projects/
│   └── contact.tsx
├── lib/
│   ├── notion.ts
│   └── utils.ts
├── styles/
└── public/
```

## 🎯 성공 기준
- [x] 홍민지님 스타일의 미니멀한 디자인
- [ ] Notion에서 글 쓰면 자동으로 블로그 업데이트
- [ ] 모바일/데스크톱 반응형
- [ ] 빠른 로딩 속도 (< 3초)
- [ ] SEO 최적화
- [ ] 쉬운 유지보수

---
*생성일: 2025년 10월 12일*
*예상 완료: 당일 (6-8시간 작업)*
