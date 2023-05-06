import Head from "next/head"
import NavBar from "@/components/NavBar"
import GlobalStyle from "../styles/globalCss"

const Page = () => {
  return (
    <>
      <Head>
        <title>my Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <NavBar />
    </>
  )
}

export default Page
