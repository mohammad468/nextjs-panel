import React from "react";
import { Button } from "react-bootstrap";

const GrayButton = (props: any) => {
  return (
    <div>
      <Button className="btn gray-button px-4 py-2">{props.children}</Button>
    </div>
  );
};

export default GrayButton;
