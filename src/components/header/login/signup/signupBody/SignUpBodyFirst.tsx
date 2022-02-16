import React from "react";
import { Col, FormControl } from "react-bootstrap";

const SignUpBody = () => {
  return (
    <div className="px-3">
      <Col className="my-2">
        <FormControl
          placeholder="Email address"
          type="email"
          className=" text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
      <Col className="my-2 mb-3">
        <FormControl
          placeholder="User Name"
          type="text"
          className=" text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
      <Col className="my-2">
        <FormControl
          placeholder="Password"
          type="password"
          className=" text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
      <Col className="my-2">
        <FormControl
          placeholder="Repeat Password"
          type="password"
          className=" text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
    </div>
  );
};

export default SignUpBody;
