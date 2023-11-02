import { useContext } from "react";
import Login from "../../components/Login/Login";
import AppContext from "../../context/app-context";

function Main() {
  const ctx = useContext(AppContext);
  return (
    <div>
      <p>{ctx.isLoggedIn ? "пользователь вошел" : "не авторизован"}</p>
      <Login />
    </div>
  );
}

export default Main;
