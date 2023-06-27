interface CardProps {
  link: string
  src: string
  title: string
  description?: string | React.ReactNode
}

export const workData: Array<CardProps> = [
  {
    link: "https://www.figma.com/proto/p7kHdH2mw5AydtOZ9uEX29/Crypto-calculator-App?page-id=0%3A1&type=design&node-id=20-611&viewport=-341%2C248%2C0.81&scaling=scale-down&starting-point-node-id=20%3A611&show-proto-sidebar=1",
    src: "/currencyExchangeApp.jpg",
    title: "Currency Exchanger App",
    description:
      "このアプリは、通貨のレートを迅速かつ簡単に確認することを目的としています。ユーザーが迷わずに使えるように、シンプルなインターフェースが採用されており、初めてのユーザーでも直感的に操作できます。また、アプリ内の要素は統一感のあるデザインスタイルでまとめられており、色彩やフォント、アイコンの一貫性にも注意を払いました。これにより、ユーザーはアプリ全体で一貫性を感じながら操作することができます。",
  },
]
