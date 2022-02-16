import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn blue-button px-4 py-2" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static" //for close just with button
        keyboard={false} //for dont close with Esc on keyboard
        //centered //for center align modal
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title className="text-white">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">Sign Up</Modal.Body>
        <Modal.Footer className="text-white">
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

export default SignUp;
