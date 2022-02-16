import React from "react";
import { Col, FormControl, Row } from "react-bootstrap";

const SignUpBodySecond = () => {
  return (
    <div>
      <div className="px-3 my-rounded">
        <Col className="my-2 my-rounded">
          {/* <FormControl
              placeholder="Email address"
              type="email"
              className="bg-dark text-white rounded my-form-control py-2 ps-4"
            /> */}
          <div className="bg-dark text-white rounded my-form-control my-form-control-validate my-rounded">
            <Row className="d-flex justify-content-center">
              <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <input type="text" className="col-xxl-12 text-center validate-input" placeholder="_" />
              </Col>
              <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <input type="text" className="col-xxl-12 text-center validate-input" placeholder="_" />
              </Col>
              <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <input type="text" className="col-xxl-12 text-center validate-input" placeholder="_" />
              </Col>
              <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <input type="text" className="col-xxl-12 text-center validate-input" placeholder="_" />
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default SignUpBodySecond;
