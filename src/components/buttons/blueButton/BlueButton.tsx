import React from "react";
import { Button } from "react-bootstrap";

const BlueButton = (props: any) => {
  return (
    <div>
      <Button className="btn blue-button px-4 py-2">{props.children}</Button>
    </div>
  );
};

export default BlueButton;
