interface CardProps {
  link: string
  src: string
  title: string
  label?:string
  description: string | React.ReactNode
}

export const clientData: Array<CardProps> = [
  {
    link: "https://www.tacen.com/",
    src: "/tacenExchange.jpg",
    title: "Tacen Exchange",
    label:'Kawazu sakura',
    description: (
      <>
        <span>
          スマートコントラクトを利用して顧客の資金を保全しつつ、高速取引を可能にする取引所。
        </span>
        <br />
        <span>
          フロントエンドとして、アルファ版の開発に従事しました。テストの自動化を担当する可能性があり、新しい技術に追いつくためにキャッチアップを行いました。
        </span>
        <br />
        <span>
          また、アルファ版のリリースまでの間、開発のスピードが求められたため、指示されたタスクを完璧に実装することに注力しました。
        </span>
      </>
    ),
  },
  {
    link: "https://stake.txa.app/",
    src: "/stakingWebsite.jpg",
    title: "Tacen Project TXA",
    label:'Kawazu sakura',
    description: (
      <>
        <span>
          Tacenが発行するトークンをステークするウェブサイトの開発に従事しました。
        </span>
        <br />
        <span>
          LPサイトの公開までのスケジュールがタイトであり、スピードと正確性が要求される案件だったため、コードレビューを行う前に十分な確認作業を行いました。頻繁に新しいコンポーネントやデザインの変更があったため、急な変更にも対応できるように、事前に小さな単位でのコンポーネント作成に取り組みました。
        </span>
      </>
    ),
  },
  {
    link: "https://asharq.com/",
    src: "/asharqNews.jpg",
    title: "Asharq News",
    label:'Kawazu sakura',
    description: (
      <>
        <span>
          サウジアラビアの地域経済や世界経済を扱うアラビア語放送のテレビチャンネルとニュースポータルサイト。
        </span>
        <br />
        <span>
          アップデートに伴うデザイン等の修正に携わりました。スケジュールはタイトではありませんでしたが、UIの変更が頻繁に行われたため、常にチームとコミュニケーションを取り、情報をアップデートしてスムーズな開発に取り組みました。
        </span>
      </>
    ),
  },
  {
    link: "https://radiko.jp/",
    src: "/radiko.jpg",
    title: "Radiko",
    label:'Kawazu sakura',
    description: (
      <>
        <span>
          各局のラジオ放送を生放送と録音で提供する日本のサービスのアップデートに伴うデザイン等の修正に携わりました。
        </span>
        <br />
        <span>
          デスクトップとスマートフォンではレスポンシブデザインが大きく異なると感じ、どのようにディレクトリ構造を構築するか苦労しました。
        </span>
      </>
    ),
  },
]
