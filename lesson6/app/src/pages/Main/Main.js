import React, { useState, useContext } from "react";
import AppContext from "../../context/app-context";
import Login from "../../components/Login/Login";
import { Outlet, Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

function Main() {
  const ctx = useContext(AppContext);
  return (
    <div>
      <header style={{ background: "#eee" }}>
        <Breadcrumbs>
          <Link to="/page1">Страница 1</Link>
          <Link to="/page2">Страница 2</Link>
          <Link to="/users">Users</Link>
          <p>{ctx.isLoggedIn ? "пользователь вошел" : "не авторизован"}</p>
        </Breadcrumbs>
      </header>
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
