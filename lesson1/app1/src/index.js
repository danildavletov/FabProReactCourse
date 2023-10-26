import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Settings from './pages/Settings/Settings';
import Main from './pages/Main/Main';
import Cats from './pages/Cats/Cats';

const router = createBrowserRouter([
  {
   path: "/",
   element: <Main />,
   errorElement: <p>Ошибка маршрута</p>
  },
  {
    path: "/settings",
    element: <Settings/>
  },
  {
    path: "/cats/:catId",
    element: <Cats/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
