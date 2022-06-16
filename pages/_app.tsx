import { AppProps } from "../node_modules/next/app";
import Head from "next/head";
import { GA_TRACKING_ID } from "../libs/gtag";
import "../styles/utility/reset.css";
import "../styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        {GA_TRACKING_ID != null && (
          <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
              }}
            />
          </>
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
