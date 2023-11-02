import Button from "@mui/material/Button";
import { useContext } from "react";
import AppContext from "../../context/app-context";

export default () => {
  const ctx = useContext(AppContext);
  return (
    <div>
      <Button onClick={ctx.loginHandler}>Login</Button>
      <Button onClick={ctx.logoutHandler}>Logout</Button>
    </div>
  );
};
