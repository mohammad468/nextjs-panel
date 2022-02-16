import React, { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import SignUpBody from "./signupBody/SignUpBodyFirst";
import SignUpBodySecond from "./signupBody/SignUpBodySecond";

const SignUp = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const handleCloseSecond = () => setShowSecond(false);
  const handleShowSecond = () => setShowSecond(true);

  const handleCloseFirst = () => {
    setShowFirst(false);
    handleShowSecond();
  };
  const handleShowFirst = () => {
    setShowFirst(true);
  };

  return (
    <>
      <Button className="btn blue-button px-4 py-2" onClick={handleShowFirst}>
        Sign Up
      </Button>

      <Modal
        show={showFirst}
        onHide={handleCloseFirst}
        backdrop="static" //for close just with button
        keyboard={false} //for dont close with Esc on keyboard
        // centered //for center align modal
        className="my-modal my-rounded"
      >
        <Modal.Body className="my-modal text-white my-rounded">
          <h1 className="text-center mt-2 mb-4">
            SignUp <span className="text-primary">Page</span>
          </h1>
          <SignUpBody />
          <div className="login-buttons-block mt-3 mb-3">
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="primary"
                className="blue-button blue-button-login w-100"
                onClick={handleCloseFirst}
              >
                Next Step
              </Button>
            </Col>
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="gray-button w-100"
                onClick={() => setShowFirst(false)}
              >
                Close
              </Button>
            </Col>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSecond}
        onHide={handleCloseSecond}
        backdrop="static" //for close just with button
        keyboard={false} //for dont close with Esc on keyboard
        // centered //for center align modal
        className="my-modal my-rounded"
      >
        <Modal.Body className="my-modal text-white my-rounded">
          <h1 className="text-center mt-2 mb-4">
            SignUp <span className="text-primary">Page</span>
          </h1>
          <SignUpBodySecond />
          <div className="login-buttons-block mt-3 mb-3">
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="primary"
                className="blue-button blue-button-login w-100"
                onClick={handleCloseFirst}
              >
                Sign Up
              </Button>
            </Col>
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="gray-button w-100"
                onClick={handleCloseSecond}
              >
                Close
              </Button>
            </Col>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUp;
