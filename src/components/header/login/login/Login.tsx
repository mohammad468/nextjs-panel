import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

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
        centered //for center align modal
        className="my-modal"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="my-modal text-white"
        >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-modal text-white">Login</Modal.Body>
        <Modal.Footer className="my-modal text-white">
          <Button
            variant="secondary"
            className="gray-button"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="blue-button"
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
