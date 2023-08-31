import { CardProps } from "@/components/SkillScreen/Card"
import CodeIcon from "@/icons/CodeIcon"
import CanvasIcon from "@/icons/CanvasIcon"
import EyeIcon from "@/icons/EyeIcon"

export const cardData: Array<CardProps> = [
  {
    icon: CodeIcon,
    title: (
      <>
        <span>モダンな</span>
        <br />
        <span>コーディング</span>
      </>
    ),
    description:
      "React, TypeScriptを駆使して、クリーンで効率的、かつ再利用可能なコードを書き、デザインを機能的に変換します。",
  },
  {
    icon: EyeIcon,
    title: (
      <>
        <span>UIコンポーネント</span>
        <br />
        <span>とデザイン</span>
      </>
    ),
    description:
      "UI/UXデザイナーと協働するフロントエンド開発者として、技術的な実装とユーザー中心の原則の理解を融合させる役割を担っています。",
  },
  {
    icon: CanvasIcon,
    title: (
      <>
        <span>UXデザインにおける</span>
        <br />
        <span>キュレーターの洞察力</span>
      </>
    ),
    description:
      "前職のキュレーターの経験を活かし、ユーザーがどのように製品に接し、ナビゲートするかを想定できるでしょう。",
  },
]
