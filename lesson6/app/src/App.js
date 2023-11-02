import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import InnerPage from "./pages/InnerPage/InnerPage";
import AppContext from "./context/app-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Ошибка маршрута</p>,
    children: [
      {path: "page1", element: <p>Страница 1</p>},
      {path: "page2", element: <p>Страница 2</p>}
    ]
  },
  {
    path: "/inner",
    element: <InnerPage />,
    errorElement: <p>Ошибка маршрута</p>,
  },
]);

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <AppContext.Provider value={{
      isLoggedIn: isLoggedIn,
      setLoggedIn: () => {setIsloggedIn(true)},
      setLoggedOut: () => {setIsloggedIn(false)}
    }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

export default App;
