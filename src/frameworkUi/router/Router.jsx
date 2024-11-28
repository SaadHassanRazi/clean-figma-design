import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SplashScreen from "../../interface/pages/SplashScreen";
import SignInScreen from "../../interface/pages/SignInScreen";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
