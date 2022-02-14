import React from "react";
import { Button } from "react-bootstrap";

const BlueButton = (props: any) => {
  return (
    <Button className="btn blue-button px-4 py-2">{props.children}</Button>
  );
};

export default BlueButton;
