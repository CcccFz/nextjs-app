import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Head from 'next/head'

export const Footer = () => {
  return (
    <>
      <div>Copyright ©2023 xxx公司 版权所有</div>
      <div>ICP备案网站信息：粤ICP备xxxxx号</div>
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextjs App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
