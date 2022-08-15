import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'james_fajardoregular';
            src: url('/fajardo-webfont.woff2') format('woff2'),
            url('/fajardo-webfont.woff') format('woff');
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
