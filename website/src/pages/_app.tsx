import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script 
          defer 
          data-domain="launchpad.servr.co.za" 
          src="https://plausible-tswscokgw4c8coo4kccwscww.servr.co.za/js/script.hash.outbound-links.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}