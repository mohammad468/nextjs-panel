import React from "react";
import { Col, Row } from "react-bootstrap";

// ? components
import BrandLogo from "./brand/BrandLogo";
import UserLogin from "./login/UserLogin";
import NavItems from "./navItems/NavItems";

function TopHeader(props: any) {
  return (
    <React.Fragment>
      <Col className="bg-color">
        <Row className="d-flex justify-content-between">
          <Col
            className="d-flex justify-content-between align-items-center"
            xxl="3"
            xl="3"
            lg="4"
            md="4"
          >
            <BrandLogo />
          </Col>
          <Col className="d-flex justify-content-between align-items-center">
            <Col>
              <NavItems />
            </Col>
            <UserLogin />
          </Col>
        </Row>
      </Col>
      {props.children}
    </React.Fragment>
  );
}

export default TopHeader;
