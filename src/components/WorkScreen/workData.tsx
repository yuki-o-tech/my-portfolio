interface CardProps {
  link: string
  src: string
  title: string
  description?: string | React.ReactNode
}

export const workData: Array<CardProps> = [
  {
    link: "/works",
    src: "/currencyExchangeApp.jpg",
    title: "Currency Exchanger App",
    description:
      "このアプリは、通貨のレートを迅速かつ簡単に確認することを目的としています。ユーザーが迷わずに使えるように、シンプルなインターフェースが採用されており、初めてのユーザーでも直感的に操作できます。また、アプリ内の要素は統一感のあるデザインスタイルでまとめられており、色彩やフォント、アイコンの一貫性にも注意を払いました。これにより、ユーザーはアプリ全体で一貫性を感じながら操作することができます。",
  },
]
