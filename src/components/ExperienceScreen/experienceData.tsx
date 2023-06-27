import React from "react"

interface ExperienceDataProps {
  title: string
  description: string | React.ReactNode
}

export const experienceData: Array<ExperienceDataProps> = [
  {
    title: "2019 - Present: Kawazu Sakura Software Inc.",
    description:
      "ジュニアフロントエンドエンジニアとして、社内プロジェクトのハイブリッド分散型取引所の開発に積極的に関わってきました。ジュニアという立場でありながら、改善提案を行い、問題のトラブルシューティングに取り組みました。これらの経験を通じて、技術的な変化に対応しながら継続的に学習し、成長を続ける姿勢を示してきました。",
  },
  {
    title: "2017 - 2019: Okuma Shigenobu Memorial Museum",
    description:
      "キュレーターとして、主に早稲田大学と連携して企画展示を行いました。展示のレイアウトでは訪問者の導線を意識した展示設計の考案を行なっています。また、SNSでのPR活動や資料研究、論文作成、イラストレーターを使用したチラシ作成などを行いました。インターン生の受け入れと指導、生涯学習施設や大学での講演なども担当しました。開館50年を迎えた際には、記念誌（全48ページ）の執筆を行いました。",
  },
  {
    title: "2014 - 2017: Saga University Museum",
    description:
      "キュレーターとして、大学や佐賀県にゆかりのあるアーティストの調査と研究を行い、一般向けの企画展を開催しました。また、展覧会に関連するチラシ、ポスター、キャプション、パネルの作成や動画編集も担当しました。教育機関としての役割も果たし、博物館実習の授業科目の補助や、公開講座やワークショップの教育普及の補助も行いました。毎年発行される年報への論文寄稿も行っています。",
  },
  {
    title: "2013 Kyushu Sangyo University Museum",
    description:
      "キュレーターとして、大学が所蔵する収蔵品をメインに展覧会に企画を行いました。また、大学生の学芸員実習の受け入れ、実習中の指導など行いました。",
  },

  { title: "2012 Graduated Kyushu Sangyo University", description: "" },
  {
    title: "出版物",
    description: (
      <>
        <li>
          『大隈重信記念館50周年記念誌 誕生地に受継がれる志』佐賀市
          大隈重信記念館、2018年、P8 - 48
        </li>
        <li>
          『久富邦夫をめぐるふたつの企画展―「修業」と「創造」』平成28年度
          佐賀大学美術館 年報＋紀要、 2017年、P37- 43
        </li>
      </>
    ),
  },
]
