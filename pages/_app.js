import 'styles/globals.js'
import { GlobalStyles } from 'styles/globals.js'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme.js'
import { SessionProvider } from 'next-auth/react'
import Auth from 'components/Auth'
import Layout from 'components/Layout.js'
import { RoastProvider } from 'contexts/roast.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
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
