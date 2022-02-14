import "./../../styles/globals.scss";
import "../components/about/about.scss";
import type { AppProps } from "next/app";

// ?styles
import "../components/header/TopHeader.scss";
import "../components/buttons/blueButton/BlueButton.scss";
import "../components/buttons/grayButton/GrayButton.scss";
import "../components/header/navItems/NavItems.scss";
import "../components/header/login/login/Login.scss";

import LeftNav from "../components/left-nav/LeftNav";
import TopHeader from "../components/header/TopHeader";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container fluid className="back-ground-g">
      <TopHeader>
        <LeftNav>
          <Component {...pageProps} />
        </LeftNav>
      </TopHeader>
    </Container>
  );
}

export default MyApp;
