import React, { useState, useContext } from "react";
import AppContext from "../../context/app-context";
import Login from "../../components/Login/Login";
import { Outlet, Link } from "react-router-dom";

function Main() {
  const ctx = useContext(AppContext);
  return (
    <div>
      <header style={{ background: "#eee" }}>
        <Link to="/page1">Страница 1</Link><br />
        <Link to="/page2">Страница 2</Link>
      </header>
      <p>{ctx.isLoggedIn ? "пользователь вошел" : "не авторизован"}</p>
      <Outlet />
      <footer style={{ background: "#ffaaee" }}>
        <Login
          onLogin={() => ctx.setLoggedIn()}
          onLogout={() => ctx.setLoggedOut()}
        />
      </footer>
    </div>
  );
}

export default Main;
