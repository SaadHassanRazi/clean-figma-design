import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SplashScreen from "../../interface/pages/SplashScreen";
import SignInScreen from "../../interface/pages/SignInScreen";
import SignUpScreen from "../../interface/pages/SignUpScreen";
import ForgotPasswordScreen from "../../interface/pages/ForgotPasswordScreen";
import TwoFactorAuthenticationScreen from "../../interface/pages/TwoFactorAuthenticationScreen";
import RootLayout from "../../interface/components/RootLayout";
import HomeScreen from "../../interface/pages/HomeScreen";
import PayrollScreen from "../../interface/pages/PayrollScreen";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
        <Route
          path="/twofactorauthentication"
          element={<TwoFactorAuthenticationScreen />}
        />
        <Route path="/dashboard" element={<RootLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="payroll" element={<PayrollScreen />} />
        </Route>
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
