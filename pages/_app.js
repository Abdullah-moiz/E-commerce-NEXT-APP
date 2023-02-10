import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color="orange" height={7} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  )
}
