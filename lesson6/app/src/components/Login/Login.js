import React, {useState} from "react";
import Button from "@mui/material/Button";

export default (props) => {
  const handleLogin = () =>{
    props.onLogin();
  }
  const handleLogout = () =>{
    props.onLogout();
  }
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
