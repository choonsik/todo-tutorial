import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 안내",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description:
      "상단 입력창에 할 일을 적고 Enter를 누르면 목록에 추가됩니다. 빈 내용은 추가되지 않습니다.",
  },
  {
    title: "완료 표시",
    description:
      "항목 왼쪽의 체크박스를 누르면 완료 처리되어 취소선이 그어집니다. 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "내용 수정",
    description:
      "항목의 글자를 더블클릭하면 수정할 수 있습니다. Enter 또는 입력창 밖을 누르면 저장되고, Esc를 누르면 취소됩니다.",
  },
  {
    title: "삭제",
    description:
      "항목 오른쪽의 휴지통 버튼으로 하나씩 지웁니다. 완료한 항목이 있으면 하단의 '완료한 일 지우기'로 한 번에 지울 수 있습니다.",
  },
  {
    title: "필터로 모아 보기",
    description:
      "'전체', '진행중', '완료' 탭으로 보고 싶은 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "저장 방식",
    description:
      "할 일은 서버가 아니라 이 브라우저(localStorage)에 저장됩니다. 다른 브라우저나 기기에서는 보이지 않으며, 브라우저 데이터를 지우면 함께 사라집니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법 안내</h1>
      <p className="text-sm text-muted-foreground">
        할 일을 추가하고, 완료하고, 정리하는 방법을 알아봅니다.
      </p>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, index) => (
          <li key={title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              {index + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4"
      >
        ← 할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
