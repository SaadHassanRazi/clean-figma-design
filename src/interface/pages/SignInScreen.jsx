import React from "react";
import CleaningPic from "../../assets/cleaning_background.png";
import "./css/signinscreen.css";
import { Box, Typography } from "@mui/material";
import CustomTabs from "../components/Tabs";
import SignInComponent from "../components/SignInComponent";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CleanLogo from "../../assets/clean.png";

const SignInScreen = () => {
  const tabs = [
    {
      label: "Sign In",
      content: <SignInComponent />,
    },
    {
      label: "Sign Up",
      content: (
        <div className="font-[500]  text-[27px] text-center">Sign Up</div>
      ),
    },
  ];
  return (
    <div className="flex flex-row ">
      <div className="wrapper">
        <div className="lg:flex flex-col gap-y-10  ps-10 hidden">
          <img
            src={CleanLogo}
            className="w-[106px] h-[22px]"
            alt="clean logo"
          />
          <div className="w-[673px] h-[110px]">
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: "700",
                lineHeight: "55px",
                letterSpacing: "0.02em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Superior scheduling system for cleaning companies.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col ms-auto bg-white w-[502px] h-[900px] items-center justify-normal border z-10 rounded-l-xl">
          <Box sx={{ marginTop: "100px" }}>
            <p className="font-[500] text-[36px] text-center">Welcome back</p>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0.02em",
                textAlign: "center",
                color: "#8B8B8B",
              }}
            >
              Login to your account
            </Typography>
          </Box>
          <Box
            sx={{
              width: "340px",
              height: "37px",
              marginTop: "50px",
              textAlign: "center",
            }}
          >
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
            <Button
              type="button"
              className=" bg-[#06726A]  my-20"
              label={"Login"}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
