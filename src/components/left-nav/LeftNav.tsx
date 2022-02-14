import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

function LeftNav(props: any) {
  return (
    <>
      <Row>
        <Col
          xxl="3"
          xl="3"
          lg="4"
          md="4"
          className="bg-light border border-primary"
        >
          <div>
            <h1>Navbar</h1>
            <Link href="/home">
              <a>Home</a>
            </Link>
            <br />
            <Link href="/about">
              <a>about</a>
            </Link>
            <br />
            <Link href="/home">
              <a>contact</a>
            </Link>
            <br />
            <Link href="/home">
              <a>product</a>
            </Link>
            <br />
          </div>
        </Col>
        <Col
          xxl="3"
          xl="3"
          lg="4"
          md="4"
          className="bg-light border border-primary"
        >
          {props.children}
        </Col>
      </Row>
    </>
  );
}

export default LeftNav;
