import "./../../styles/globals.scss";
import "../components/about/about.scss";
import type { AppProps } from "next/app";

// ?styles
import "../components/buttons/blueButton/BlueButton.scss";

import LeftNav from "../components/left-nav/LeftNav";
import TopHeader from "../components/header/TopHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TopHeader>
      <LeftNav>
        <Component {...pageProps} />
      </LeftNav>
    </TopHeader>
  );
}

export default MyApp;
