import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/layout/Layout'
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
