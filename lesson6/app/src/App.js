import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import InnerPage from "./pages/InnerPage/InnerPage";
import AppContext from "./context/app-context";
import ShowUsers from "./components/ShowUsers/ShowUsers";

// Импортируем объект инициализированного приложения firebase с нашими настройками
import {app as firebaseApp} from "./firebase";
// используем встроенные функции авторизации firebase
// https://firebase.google.com/docs/auth/web/start?hl=ru&authuser=0
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Ошибка маршрута</p>,
    children: [
      {path: "page1", element: <p>Страница 1</p>},
      {path: "page2", element: <p>Страница 2</p>},
      {path: "users", element: <ShowUsers/>}
    ]
  },
  {
    path: "/inner",
    element: <InnerPage />,
    errorElement: <p>Ошибка маршрута</p>,
  },
]);

const App = () => {
  const [user, setUser] = useState(false);
  // Подключаем авторизацию
  const auth = getAuth(firebaseApp);

  // Обработчик входа через email-пароль
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
  }

  const handleLogout = () =>{
    setUser(false);
    signOut(auth);
  }
  return (
    <AppContext.Provider value={{
      user: user,
      onLogin: handleLogin,
      onLogout: handleLogout
    }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

export default App;
