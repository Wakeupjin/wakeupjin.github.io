# 🎉 WakeupJin 블로그 완성!

홍민지님 스타일의 미니멀한 블로그가 완성되었습니다!

## 📦 제공된 파일들

✅ **완전한 Next.js 프로젝트** - 바로 실행 가능
✅ **홍민지님 스타일 디자인** - 미니멀하고 깔끔한 UI
✅ **Notion 연동 준비 완료** - API 설정만 하면 바로 사용
✅ **자동 배포 설정** - GitHub Actions 워크플로우 포함
✅ **반응형 디자인** - 모바일/태블릿/데스크톱 최적화

## 🚀 다음 단계 (순서대로 진행)

### 1단계: 프로젝트 설정
```bash
# 터미널에서 다운로드한 폴더로 이동
cd [다운로드한 폴더명]

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 2단계: GitHub 저장소 생성
1. GitHub에서 `wakeupjin.github.io` 이름의 새 저장소 생성
2. 로컬 프로젝트를 GitHub에 푸시:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/wakeupjin/wakeupjin.github.io.git
git push -u origin main
```

### 3단계: Notion 설정
1. **Notion Integration 생성**
   - https://www.notion.so/my-integrations 접속
   - "New integration" 클릭
   - 이름: "Blog Integration" 
   - Token 복사 (나중에 사용)

2. **블로그 데이터베이스 생성**
   - Notion에서 새 페이지 생성
   - 데이터베이스 선택
   - 다음 속성들 추가:
     - Title (제목) - Title 타입
     - Published (발행) - Checkbox 타입  
     - Date (날짜) - Date 타입
     - Excerpt (요약) - Text 타입
     - Category (카테고리) - Select 타입
     - Tags (태그) - Multi-select 타입

3. **프로젝트 데이터베이스 생성**
   - 새 데이터베이스 생성
   - 다음 속성들 추가:
     - Name (이름) - Title 타입
     - Description (설명) - Text 타입  
     - TechStack (기술스택) - Multi-select 타입
     - GitHub - URL 타입
     - Demo - URL 타입
     - Featured (주요프로젝트) - Checkbox 타입

4. **데이터베이스 공유**
   - 각 데이터베이스 오른쪽 상단 "공유" 클릭
   - 만든 Integration 선택하여 공유
   - 데이터베이스 URL에서 ID 복사 (32자리 문자열)

### 4단계: 환경변수 설정
`.env.local` 파일 생성하고 다음 내용 입력:
```env
NOTION_TOKEN=복사한_토큰
NOTION_BLOG_DATABASE_ID=블로그_데이터베이스_ID  
NOTION_PROJECTS_DATABASE_ID=프로젝트_데이터베이스_ID
```

### 5단계: GitHub Pages 배포 설정
1. GitHub 저장소 > Settings > Pages
2. Source: "GitHub Actions" 선택
3. Repository secrets 추가 (Settings > Secrets and variables > Actions):
   - `NOTION_TOKEN`: Notion 토큰
   - `NOTION_BLOG_DATABASE_ID`: 블로그 DB ID
   - `NOTION_PROJECTS_DATABASE_ID`: 프로젝트 DB ID

### 6단계: 첫 번째 글 작성
1. Notion 블로그 데이터베이스에 새 페이지 생성
2. 제목, 카테고리 등 설정
3. 글 내용 작성
4. Published 체크박스 활성화
5. GitHub Actions가 자동으로 배포

## 🎯 완성 후 확인사항

- ✅ `https://wakeupjin.github.io` 접속 가능
- ✅ Notion에서 글 쓰면 자동으로 블로그 업데이트
- ✅ 모든 페이지 정상 작동
- ✅ 모바일에서도 잘 보임

## 🛠️ 커스터마이징 가이드

### 개인정보 수정할 파일들:
- `components/Layout.tsx` - 이름, 로고
- `pages/index.tsx` - 홈페이지 소개
- `pages/about.tsx` - 자세한 프로필  
- `pages/contact.tsx` - 연락처 정보

### 색상 변경:
- `tailwind.config.js`에서 primary 색상 수정

### 추가 기능 아이디어:
- 다크모드 토글
- 댓글 시스템 (utterances)
- Google Analytics
- 이메일 구독 기능

## 🚨 문제 해결

**Notion API 오류가 나는 경우:**
- 토큰이 올바른지 확인
- 데이터베이스가 Integration과 공유되었는지 확인
- 데이터베이스 ID가 정확한지 확인

**GitHub Pages 배포 실패:**
- Repository secrets가 모두 설정되었는지 확인
- 저장소 이름이 `username.github.io` 형식인지 확인

**로컬 개발 중 오류:**
- `npm install` 다시 실행
- Node.js 버전 확인 (18 이상 권장)

## 💬 도움이 필요하다면

설정 중 문제가 있으면 언제든 연락주세요!
완성된 블로그가 홍민지님처럼 멋지게 나올 거예요! 🎉

---
**프로젝트 완성을 축하합니다! 🎊**
