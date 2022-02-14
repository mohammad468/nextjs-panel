import React from "react";
import { Col } from "react-bootstrap";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const UserLogin = () => {
  return (
    <React.Fragment>
      <Login />
      <SignUp />
    </React.Fragment>
  );
};

export default UserLogin;
