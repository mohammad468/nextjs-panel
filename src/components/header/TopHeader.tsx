import React from "react";
import { Col } from "react-bootstrap";
import BlueButton from "../buttons/blueButton/BlueButton";

function TopHeader(props: any) {
  return (
    <Col>
      <h1>TopHeader</h1>
      <BlueButton>SIGN UP</BlueButton>
      {props.children}
    </Col>
  );
}

export default TopHeader;
