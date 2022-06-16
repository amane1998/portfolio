import { AppProps } from '../node_modules/next/app';
import Head from 'next/head';
import GoogleAnalytics from '../js/GoogleAnalytics'
import '../styles/utility/reset.css';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        <GoogleAnalytics />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App
