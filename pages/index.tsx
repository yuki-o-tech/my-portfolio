import Head from "next/head"
import GlobalStyle from "../styles/globalCss"
import NavBar from "@/components/NavBar"
import TopComponent from "@/components/TopScreen"
import SkillScreen from "@/components/SkillScreen"
import ToolsScreen from "src/components/ToolsScreen"
import WorkScreen from "@/components/WorkScreen"
import ClientScreen from "@/components/ClientScreen"
import AboutScreen from "@/components/AboutScreen"

const Page = () => {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <NavBar />
      <TopComponent />
      <SkillScreen />
      <ToolsScreen />
      <WorkScreen />
      <ClientScreen />
      <AboutScreen />
    </>
  )
}

export default Page
