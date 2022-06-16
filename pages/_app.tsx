import { AppProps } from "../node_modules/next/app";

import "../styles/utility/reset.css";
import "../styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
