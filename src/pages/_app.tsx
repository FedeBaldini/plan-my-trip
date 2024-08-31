import type { AppProps } from "next/app";

import { initializeTranslations } from "../i18n";
import "../styles/globals.css";

initializeTranslations();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
