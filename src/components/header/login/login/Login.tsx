import React, { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { LoginBody } from "./loginBody/LoginBody";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn gray-button px-4 py-2 ms-2" onClick={handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static" //for close just with button
        keyboard={false} //for dont close with Esc on keyboard
        // centered //for center align modal
        className="my-modal my-rounded"
      >
        <Modal.Body className="my-modal text-white my-rounded">
          <h1 className="text-center mt-2 mb-4">
            Login <span className="text-primary">Page</span>
          </h1>
          <LoginBody />
          <div className="login-buttons-block mt-3 mb-3">
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="primary"
                className="blue-button blue-button-login w-100"
                onClick={handleClose}
              >
                Login
              </Button>
            </Col>
            <Col className="my-1 px-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="gray-button w-100"
                onClick={handleClose}
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

export default Login;
