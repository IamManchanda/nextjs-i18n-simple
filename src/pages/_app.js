import { appWithTranslation } from "next-i18next";
import "../assets/styles/scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
