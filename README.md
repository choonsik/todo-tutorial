# 추추추추추추추추

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun (1.3.6에서 1.4.4까지 확인)
- 테스트: Vitest + Testing Library (jsdom)

## 준비물

| 도구 | 버전 | 확인 |
| --- | --- | --- |
| [Node.js](https://nodejs.org) | 22.22.2 이상 (또는 24.15 이상) | `node -v` |
| [bun](https://bun.sh) | 1.3.6 이상 | `bun -v` |
| git | 최신 | `git --version` |

> Node.js 가 22.22.2 보다 낮으면 `bun run test` 가 `Failed to start forks worker` 오류로 실패합니다. jsdom 이 요구하는 최소 버전을 못 맞추기 때문입니다. Node.js 를 올리거나 아래 [테스트](#테스트) 의 대안을 쓰세요.

## 시작하기

```bash
git clone https://github.com/choonsik/todo-tutorial.git
cd todo-tutorial
bun install
bun dev
```

- 패키지 매니저는 **bun 만** 씁니다. `npm install` 로 설치하면 안 됩니다. 저장소에 `package-lock.json` 이 같이 있지만 쓰지 않는 파일이고, `bun dev`·`bun run build` 가 이 파일을 건드려 변경으로 잡히는 일이 있습니다. 변경으로 보이면 `git checkout package-lock.json` 으로 되돌리세요.
- `bun dev` 가 `Ready` 를 출력하면 [http://localhost:3000](http://localhost:3000) 을 엽니다. 첫 접속은 컴파일 때문에 10초 넘게 걸릴 수 있습니다.
- 환경 변수 파일(`.env`)은 필요 없습니다.
- 종료는 터미널에서 `Ctrl+C` 입니다.

## 자주 쓰는 스크립트

```bash
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (먼저 build 필요)
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # Vitest 한 번 실행
bun run format     # Prettier 포맷팅 (파일을 직접 고칩니다)
```

### 테스트

```bash
bun run test
```

4개 파일, 16개 테스트가 모두 통과해야 합니다. Node.js 를 올리기 어렵다면 bun 런타임으로 실행할 수 있습니다.

```bash
bun --bun run test
```

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```
