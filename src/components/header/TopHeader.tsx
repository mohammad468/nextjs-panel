import React from "react";
import { Col } from "react-bootstrap";

function TopHeader(props: any) {
  return (
    <Col>
      <h1>TopHeader</h1>
      {props.children}
    </Col>
  );
}

export default TopHeader;
