import React from "react";
import { Box, Typography } from "@mui/material";
import CustomTabs from "../components/Tabs";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import SignInComponent from "../components/SignInComponent";

const SignInScreen = () => {
  const tabs = [
    { label: "Sign In", content: <SignInComponent /> },
    { label: "Sign Up", content: <div>Sign Up Component</div> },
  ];

  return (
    <AuthLayout title="Welcome back" description="Login to your account">
      <Box sx={{ width: "340px", textAlign: "center" }}>
        <CustomTabs tabs={tabs} />
        <Typography
          sx={{
            textAlign: "end",
            color: "#06726A",
            fontWeight: "500",
            margin: "10px 0",
          }}
        >
          Forgot Password?
        </Typography>
        <Button className="bg-[#06726A] mt-20 text-white" label="Login" />
      </Box>
    </AuthLayout>
  );
};

export default SignInScreen;
