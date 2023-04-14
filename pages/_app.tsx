import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import App from "next/app"
import type { AppContext, AppProps } from "next/app"
import Head from "next/head"
import GlobalStyle from "../styles/globalCss"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

function BaseApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head key="head">
        <title>my portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

type MyAppInitialProps = {
  pageProps: any
}

class MyApp extends App<MyAppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    return <BaseApp {...this.props} />
  }
}
export default MyApp
