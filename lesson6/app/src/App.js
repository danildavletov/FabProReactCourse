import React, {useState} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import AppContext from "./context/app-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Ошибка маршрута</p>,
  },
]);

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: () => {setIsloggedIn(true)},
        logoutHandler: () => {setIsloggedIn(false)},
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

export default App;
