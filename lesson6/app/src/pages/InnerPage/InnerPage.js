import React, { useContext } from "react";
import AppContext from "../../context/app-context";

function Inner() {
  const ctx = useContext(AppContext);
  const isLoggedIn = ctx.isLoggedIn;
  return (
    <div>
      внутренняя страница
      <p>{isLoggedIn ? "пользователь вошел" : "не авторизован"}</p>
    </div>
  );
}

export default Inner;
