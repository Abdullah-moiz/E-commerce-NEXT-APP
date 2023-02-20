import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import {store} from '../store/store';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <NextNProgress color="orange" height={7} showOnShallow={true} />
      <Component {...pageProps} />
    </Provider>
  )
}
