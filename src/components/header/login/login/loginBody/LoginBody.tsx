import React from "react";
import { Col, Form, FormControl } from "react-bootstrap";

export const LoginBody = () => {
  return (
    <div className="px-3">
      <Col className="my-2">
        <FormControl
          placeholder="UserName"
          type="text"
          className="text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
      <Col className="my-2">
        <FormControl
          placeholder="Password"
          type="password"
          className="text-white my-rounded my-form-control py-2 ps-4"
        />
      </Col>
    </div>
  );
};
