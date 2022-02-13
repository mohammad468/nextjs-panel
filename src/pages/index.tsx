import type { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import TopHeader from "../components/header/TopHeader";
import LeftNav from "../components/left-nav/LeftNav";
import MainHome from "../components/main/MainHome";

const Home: NextPage = () => {
  return (
    <Container fluid>
      <TopHeader />
      <Row>
        {/* // ?start left nav */}
        <Col
          xxl="3"
          xl="3"
          lg="4"
          md="4"
          className="bg-light border border-primary"
        >
          <LeftNav />
        </Col>
        {/* // ?end left nav */}
        {/* // ?start main components */}
        <Col
          xxl="9"
          xl="9"
          lg="4"
          md="4"
          className="bg-light border border-primary"
        >
          <MainHome />
        </Col>
        {/* // ?end main components */}
      </Row>
    </Container>
  );
};

export default Home;
