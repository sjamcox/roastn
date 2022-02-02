import '../styles/globals.js'
import { SessionProvider } from 'next-auth/react'
import Auth from '../components/Auth'
import { GlobalStyles } from '../styles/globals.js'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.js'
import Layout from '../components/Layout.js'
import { RoastProvider } from '../contexts/roast.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient()
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Layout>
              <RoastProvider>
                {Component.auth ? (
                  <Auth>
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
              </RoastProvider>
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
