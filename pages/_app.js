import '@/styles/globals.css'

import Router from 'next/router'

export default function App({ Component, pageProps }) {

  Router.events.on('routeChangeStart', (url) => {
      console.log('routeChangeStart')
  })

  Router.events.on('routeChangeComplete', (url) => {
    console.log('routeChangeComplete')
  })

  return <Component {...pageProps} />
}
