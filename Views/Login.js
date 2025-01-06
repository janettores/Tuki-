import React from "react";

import Logo from "../components/Logo";
import LoginBox from "../components/LoginBox";

const Login = () => {
    return (
      <div className="container">
        <Logo />
        <div className="login-wrapper">
          <LoginBox />
        </div>
      </div>
    );
  };

  export default Login;