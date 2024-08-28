import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/auth/SignIn/SignIn";
// import { RouterProvider } from "react-router";
import Login from "./components/auth/Login/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
